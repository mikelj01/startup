// import React, { use } from 'react';
import React, { useState, useEffect, use } from 'react';

import "./Msging.css";



export function Msging() {
const [excuse, setExcuse] = React.useState("");

const [messages, setMessages] = React.useState(() => {return localStorage.getItem([])||[]});
const [index, setIndex] = React.useState(() => {return localStorage.getItem(0)||0});
const [typed_msg, setTypedMsg] = React.useState("");
//const messageArray = ["Hi", "Good, How are you?", "Nice, I like your chair", "Want to go to the park?", "Sure", "I'll be there in 5 minutes", "I'm here", "I'm leaving", "Goodbye"];


function textInpt(event) {
  setTypedMsg(event.target.value);
}

function delayResponse() {
  setTimeout(() => {
    setMessages(messages => [...messages, Response()]);
  }, 1000);
}



async function sendMessage() {
  const response = await fetch('/api/messages/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: typed_msg }),
  });
  if (!response.ok) {
    console.log('Error: ' + response.status);
  }
  else {
    const data = await response.json();
    message = data.messages;
    localStorage.setItem('messages', JSON.stringify(message));
    setMessages(message);
    setTypedMsg("");
    //delayResponse();
  }
}








  // const sendMessage = () => {
  //   if (typed_msg.trim() !== "") 
  //   setMessages(messages => [...messages, typed_msg]);
  //   setTypedMsg(""); 
  //   delayResponse(messages);
    
  // };








// function Response() {
//   if (index < messageArray.length - 1) {
//     setIndex(index + 1);
//   }
//   else {
//     setIndex(0);
//   }
//   return messageArray[index];
// }


class message {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
}


async function getExcuse() {
  fetch('https://quote.cs260.click')
      .then((response) => response.json())
      .then((data) => {
        setExcuse(data.quote);

      })
      .catch();
  
}

useEffect(() => {getExcuse();}, []);


// actual HTML from now on
  return (
    <main className="container-fluid bg-secondary text-center">

      <p>
      
      </p>

      <div className = "Message_Screen">
        <p><b>Messages:</b></p> 
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg.from}: {msg.message}</div>
        ))}
      </div>

      <div>
        <input type="text" placeholder="Type a message" className="msg_box" onChange = {textInpt} value={typed_msg}></input>
        <button className="button" onClick= {sendMessage}>Send</button>
      </div>

{/* excuses */}
      <div>
        <p><b>If You don't Know what to say, try this!</b></p>
        <p>{excuse}</p>
        <button className="button" onClick={() => getExcuse()}>Wisdom</button>
      </div>
    </main>
  
  );
}