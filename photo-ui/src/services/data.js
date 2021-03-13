import firebase from 'firebase/app'
import Vue from 'vue'

class DataManager {
  constructor () {
    // initial hardcoded data while dynamic data loads
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
    this.home()
  }

  init () {
    this.database = firebase.database()
    this.database.ref('/0002').once('value').then((snapshot) => {
      this.allViews = snapshot.val()
      this.home()
    })
  }

  home () {
    if (this.allViews.home) {
      this.data.cards = this.allViews.home
    }
  }

  contact () {
    if (this.allViews.contact) {
      this.data.cards = this.allViews.contact
    }
  }

  toView (viewName) {
    if (Object.prototype.hasOwnProperty.call(this.allViews, viewName)) {
      this.data.cards = this.allViews[viewName]
    }
  }

  submitContact (name, email, message) {
    let data = {name, email, message}
    return Vue.http.post('/submit', data)
  }
}

export default new DataManager()
