import { useState } from 'react';
import { io } from 'socket.io-client'

export default function App() {

  const socket = io('http://localhost:3001')

  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([]);

  socket.on("receive-message", m => {
    setMessage(m);
    displayMessage();
  })

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  }

  const displayMessage = () => {
    setMessages([...messages, message]);
    console.log(messages);
  }

  return (
    <div className="App">
      <input value={message} onChange={handleChangeMessage}></input>
      <div onClick={displayMessage}>display</div>
    </div>
  );
}
