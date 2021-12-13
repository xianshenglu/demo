const axios = require('axios')
const { sendEmail } = require('./mail')

const { GLADOS_SESSION, CHECK_IN_INTERVAL, MASTER_EMAIL_ADDRS } = process.env

axios.defaults.headers.common['cookie'] = GLADOS_SESSION
axios.defaults.headers.common['content-type'] = 'application/json'

async function checkIn() {
  let response
  try {
    response = await checkInApi()
    const { data } = response

    sendEmail({
      to: MASTER_EMAIL_ADDRS,
      subject: `Glados checkIn == ${data.message}`,
      html: JSON.stringify(data)
    })
  } catch (error) {
    sendEmail({
      to: MASTER_EMAIL_ADDRS,
      subject: `Glados checkIn == ERROR`,
      html: error.message
    })
  }
 
}
async function checkInApi() {
  const response = await axios.request(
    'https://glados.rocks/api/user/checkin',
    {
      method: 'POST',
      data: { token: 'glados_network' }
    }
  )
  return response
}

function createJob() {
  const interval = CHECK_IN_INTERVAL
    ? Number(CHECK_IN_INTERVAL)
    : 1000 * 60 * 60 * 12
  setInterval(() => {
    checkIn()
  }, interval)
}

createJob()
