const nodemailer = require('nodemailer')
const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env
const debugEmail = {
  user: EMAIL_USERNAME,
  password: EMAIL_PASSWORD,
  service: 'smtp.126.com'
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
