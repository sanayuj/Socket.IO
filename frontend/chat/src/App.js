
import './App.css';
import { useState,useEffect } from 'react';
import io from "socket.io-client"
import nanoid from "nanoid"

const socket=io.connect("http://localhost:4000")

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Chat </h1>
      </header>
    </div>
  );
}

export default App;
