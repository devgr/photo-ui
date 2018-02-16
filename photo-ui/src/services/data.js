import * as firebase from 'firebase'

class DataManager {
  constructor () {
    this.data = {
      cards: []
    }
  }

  init () {
    this.database = firebase.database()
    this.database.ref('/views').once('value').then((snapshot) => {
      this.allViews = snapshot.val()
      this.home()
    })
  }

  home () {
    this.data.cards = this.allViews.home
  }

  contact () {
    this.data.cards = this.allViews.contact
  }

  toView (viewName) {
    if (this.allViews.hasOwnProperty(viewName)) {
      this.data.cards = this.allViews[viewName]
    }
  }

  submitContact () {

  }
}

export default new DataManager()
