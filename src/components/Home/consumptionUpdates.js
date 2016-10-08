export default {
  subscribe(update){
    let socket
    let reconnect = false
    const ding = new Audio('/ding.wav')

    const connect = () => {
      socket = new WebSocket("${websocketTarget}/update")
      socket.onmessage = message => {
        if (message.data === 'update') {
          update()
          ding.play()
        }
      }
      socket.onopen = () => { if (reconnect) update() }
      socket.onclose = e => {
        if (e.code !== 1005) {
          reconnect = true
          setTimeout(connect, 3000)
        }
      }
    }
    connect()
    return { unsubscribe() { if (socket) socket.close() } }
  }
}
