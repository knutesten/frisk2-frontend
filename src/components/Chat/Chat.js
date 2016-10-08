import React from 'react'
import classes from './Chat.scss'

class Chat extends React.Component {
  componentDidMount() {
    // this.socket = new WebSocket("${websocketTarget}/update")

  }

  render() {
    return (
      <div className={classes.chatContainer}>
        <div>
          <p>
            dette er en test
          </p>
          <p>
            dette er en ny test
          </p>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    )
  }
}


export default Chat
