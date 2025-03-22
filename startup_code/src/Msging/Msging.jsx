// import React, { use } from 'react';
import React, { useState, useEffect, use } from 'react';

import "./Msging.css";
import { random } from 'nanoid';
import { func } from 'prop-types';


export function Msging() {
const [excuse, setExcuse] = React.useState("");
const excuses = ["I'm not feeling well", "I have a family emergency", "I have to work late", "I have a prior engagement", 
  "I'm not feeling up to it", "I'm not in the mood", "I'm not feeling social", "you stink"];
const [messages, setMessages] = React.useState(() => {return localStorage.getItem([])||[]});
const [index, setIndex] = React.useState(() => {return localStorage.getItem(0)||0});
const [typed_msg, setTypedMsg] = React.useState("");
const messageArray = ["Hi", "Good, How are you?", "Nice, I like your chair", "Want to go to the park?", "Sure", "I'll be there in 5 minutes", "I'm here", "I'm leaving", "Goodbye"];


function textInpt(event) {
  setTypedMsg(event.target.value);
}

function delayResponse() {
  setTimeout(() => {
    setMessages(messages => [...messages, Response()]);
  }, 1000);
}
  const sendMessage = () => {
    if (typed_msg.trim() !== "") 
    setMessages(messages => [...messages, typed_msg]);
    setTypedMsg(""); 
    delayResponse(messages);
    
  };

function Response() {
  if (index < messageArray.length - 1) {
    setIndex(index + 1);
  }
  else {
    setIndex(0);
  }
  return messageArray[index];
}


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

{/* <div className="grid grid-cols-3 gap-4 p-4">
      {match_array.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={() => handleImageClick(image)}
        />
      ))}
    </div> */}

      {/* messages */}
      <div className = "Message_Screen">
        <p><b>Messages:</b></p> 
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
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