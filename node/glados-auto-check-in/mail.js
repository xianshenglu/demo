const nodemailer = require('nodemailer')
const {
  ROBOT_EMAIL_USERNAME,
  ROBOT_EMAIL_PASSWORD,
  ROBOT_EMAIL_SERVICE
} = process.env
const debugEmail = {
  user: ROBOT_EMAIL_USERNAME,
  password: ROBOT_EMAIL_PASSWORD,
  service: ROBOT_EMAIL_SERVICE || 'smtp.126.com'
}

function sendEmail(
  mailOptions,
  callback = (error, info) => {
    if (error) {
      return console.log(error)
    }
  }
) {
  mailOptions.from = debugEmail.user // sender address
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: debugEmail.service,
      port: 465,
      secure: true,
      auth: {
        user: debugEmail.user,
        pass: debugEmail.password
      }
    })

    transporter.sendMail(mailOptions, callback)
  })
}
module.exports = {
  sendEmail
}
