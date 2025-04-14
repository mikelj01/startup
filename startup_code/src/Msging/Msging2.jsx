// import React, { use } from 'react';
import React, { useState, useEffect, use } from 'react';

import "./Msging.css";




export function Msging() {

  const [messages, setMessages] = React.useState(() => {
    return JSON.parse(localStorage.getItem('messages')) || [];
  });
  
  const [index, setIndex] = React.useState(() => {
    return parseInt(localStorage.getItem('index')) || 0;
  });

const [typed_msg, setTypedMsg] = React.useState("");
const messageArray = ["Hi", "Good, How are you?", "Nice, I like your chair", "Want to go to the park?", "Sure", "I'll be there in 5 minutes", "I'm here", "I'm leaving", "Goodbye"];


const match_array = JSON.parse(localStorage.getItem('match_array')) || [];


function textInpt(event) {
  setTypedMsg(event.target.value);
}

function delayResponse() {
  setTimeout(() => {
    setMessages((prevMessages) => [...prevMessages, Response()]);
  }, 1000);
}


const sendMessage = () => {
  if (typed_msg.trim() !== "") 
  setMessages(messages => [...messages, typed_msg]);
  setTypedMsg(""); 
  delayResponse(messages);
  
};
 


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
 <p></p>
{/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {match_array.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full h-40 md:h-48 lg:h-56 object-cover rounded-lg" onClick={() => handleImageClick(image)}/>
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