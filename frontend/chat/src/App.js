import "./App.css";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import {nanoid} from "nanoid";

const socket = io.connect("http://localhost:4000");

const userName=nanoid(4)

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendChat=(e)=>{
    e.preventDefault()
    socket.emit("chat",{message,userName})
    setMessage("")
  }

  useEffect(()=>{
    socket.on("chat",(payload)=>{
      setChat([...chat,payload])
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat </h1>
        {chat.map((value,index)=>(
          <p key={index}>{value.message}<span className="userName"> id:{value.userName}</span></p>
        ))}
        <form onSubmit={sendChat}>
          <input
            type="text"
            name="chat"
            placeholder="send message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button>Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
