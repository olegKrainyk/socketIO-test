import { useState } from 'react'
import { io } from 'socket.io-client'

export default function App() {


  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const socket = io('http://localhost:3001')

  socket.on("receive-message", m => {
   setMessages(m)
  })

  const handleChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const displayMessage = () => {
    socket.emit('send-message', message)
  }

  return (
    <div className="App">
      <input onChange={handleChangeMessage}></input>
      <div>--------</div>
      <div onClick={displayMessage}>display</div>
      {messages.map((msg) => {
        
        return(
          <div key={messages}>{msg}</div>
        );
      })}
    </div>
  );
}
