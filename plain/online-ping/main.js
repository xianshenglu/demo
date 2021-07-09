const { Vue, ping, _ } = window
const ipList = Array(254)
  .fill()
  .map((v, i) => `1.1.1.${i + 1}`)
new Vue({
  data: {
    ipList,
    pingResponseList: ipList.map(ip => ({
      ip,
      sentCount: 0,
      receivedCount: 0,
      lossCount: 0,
      lossRate: 0,
      averageTime: 0
    }))
  },
  created() {
    this.startRequest()
  },
  methods: {
    startRequest() {
      const { ipList } = this
      ipList.map((ip, index) => {
        setTimeout(() => {
          this.requestServer(ip, index)
        }, index * 300)
      })
    },
    async requestServer(ip, index) {
      const node = this.pingResponseList[index]
      let time = 0
      try {
        time = await ping(`http://${ip}`)
        node.receivedCount++
        node.averageTime = Math.round(
          (node.averageTime * (node.receivedCount - 1) + time) /
            node.receivedCount
        )
      } catch (error) {
        node.lossCount++
      } finally {
        node.sentCount++
        node.lossRate = _.round((100 * node.lossCount) / node.sentCount, 2)

        setTimeout(() => this.requestServer(ip, index), 10000)
      }
    }
  }
}).$mount("#app")
