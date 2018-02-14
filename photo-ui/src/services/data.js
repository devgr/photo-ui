class DataManager {
  constructor () {
    this.data = {
      cards: []
    }
    this.home()
  }

  home () {
    this.data.cards = [
      {
        type: 'content',
        view: 'header'
      },
      {
        type: 'image',
        imgSrc: 'static/img/IMG_1075-01.jpg'
      },
      {
        type: 'image',
        imgSrc: 'static/img/IMG_1081-01.jpg'
      },
      {
        type: 'image',
        imgSrc: 'static/img/IMG_1106-01.jpg'
      },
      {
        type: 'image',
        imgSrc: 'static/img/IMG_1128-02.jpg'
      },
      {
        type: 'image',
        imgSrc: 'static/img/IMG_1129-01.jpg'
      }
    ]
  }

  contact () {
    this.data.cards = [
      {
        type: 'content',
        view: 'contact'
      }
    ]
  }
}

export default new DataManager()
