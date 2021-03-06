const functions = require('firebase-functions')
const nodemailer = require('nodemailer')

// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
const from = 'thisisnottheemailyouarelookingfor@gmail.com'
const pw = 'thisisnotthepasswordyouarelookingfor'
const to = 'info@georgedarling.photos'
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: from,
    pass: pw
  }
})
const APP_NAME = 'Form Submitter'

exports.submitForm = functions.https.onRequest((req, res) => {
  if (req.method === 'POST') {
    const contactName = req.body.name
    const contactEmail = req.body.email
    const contactMessage = req.body.message

    if (!contactName || !contactEmail || !contactMessage) {
      res.status(400).send('Bad request.')
    } else {
      const mailOptions = {
        from: `${APP_NAME} <${from}>`,
        to: to
      }

      mailOptions.subject = 'Contact Form Submission'
      mailOptions.text = `Name: ${contactName}\nEmail: ${contactEmail}\nMessage: ${contactMessage}`
      mailTransport.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.log('An error occurred when trying to send email.')
          console.log('Email text: ' + mailOptions.text)
          console.log(err)
          console.log(err.name)
          console.log(err.details)
          console.log(err.data)
          console.log(err.response)
          console.log(response)
          res.status(500).send('Server error.')
        } else {
          res.status(200).send('Success')
        }
      })
    }

  } else {
    res.status(404).send('Method not found.')
  }
})
