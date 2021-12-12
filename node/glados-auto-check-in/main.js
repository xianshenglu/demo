const axios = require('axios')
const { sendEmail } = require('./mail')

const { GLADOS_SESSION, CHECK_IN_INTERVAL } = process.env

axios.defaults.headers.common['cookie'] = GLADOS_SESSION
axios.defaults.headers.common['content-type'] = 'application/json'

async function checkIn() {
  const response = await checkInApi()
  const { data } = response

  sendEmail({
    to: 'xianshenglu@qq.com',
    subject: `Glados auto checkIn => ${data.message}`,
    html: JSON.stringify(data)
  })
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
