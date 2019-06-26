import * as firebase from 'firebase'
import Vue from 'vue'

class DataManager {
  constructor () {
    // initial hardcoded data while dynamic data loads
    this.view = ''
    this.allViews = {
      home: [
        {
          type: 'content',
          view: 'header',
          heading: 'George Darling Photography',
          subtitle: 'Nashville, TN based photographer for portraits, events, and music.',
          contactBtnText: 'Contact',
          socialBtns: [
            {
              text: 'Instagram',
              href: 'https://www.instagram.com/georgedphotos/'
            },
            {
              text: 'Facebook',
              href: 'https://www.facebook.com/georgedarlingphotography'
            }
          ]
        },
        {}, {}, {}, {}, {}, {}, {}
      ],
      contact: [
        {
          title: '',
          type: 'content',
          view: 'contact'
        }
      ]
    }
    this.data = {
      cards: []
    }
    this.toView('home')
  }

  init () {
    this.database = firebase.database()
    this.database.ref('/0001').once('value').then((snapshot) => {
      this.allViews = snapshot.val()
      this.toView(this.view) // Show view now that data is loaded
    })
  }

  toView (viewName) {
    this.view = viewName
    if (this.allViews.hasOwnProperty(viewName)) {
      this.data.cards = this.allViews[viewName]
    } else {
      this.data.cards = this.allViews.home
    }
  }

  submitContact (name, email, message) {
    let data = {name, email, message}
    return Vue.http.post('/submit', data)
  }
}

export default new DataManager()
