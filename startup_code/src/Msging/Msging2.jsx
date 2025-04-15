// import React, { use } from 'react';
import React, { useState, useEffect, use } from 'react';
import {Message, messanger} from './frontChat.js';
import "./Msging.css";




export function Msging() {
  const [user, setUser] = React.useState(() => {return localStorage.getItem("username") || 'DefaultUser'})
  const [excuse, setExcuse] = React.useState('');
  async function getUser() {
    try {
     const response = await fetch('/api/user/get'); 
    if (!response.ok) {
      console.log('Error: ' + response.status);
      setUser('DefaultUser'); // Fallback to default username on error
      return;
    }
    const data = await response.json();
    setUser(data.username); 
    } catch (error) {
      console.error("Error fetching username:", error);
    }
  }
  useEffect(() => {getUser();}, []);


  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
      messanger.addHandler(handlemessageEvent);

    return () => {
      messanger.removeHandler(handlemessageEvent);
    };
  });

  function handlemessageEvent(event) {
    setEvent([...events, event]);
  }
  

const [typed_msg, setTypedMsg] = React.useState("");



function textInpt(event) {
  setTypedMsg(event.target.value);
  
}

async function sendMessage() {
messanger.BroadcastMessage(user, typed_msg);
setTypedMsg("");
events.push(new Message(user, typed_msg));
}
 
function createMessageArray() {
  const messageArray = [];
  for (const [i, event] of events.entries()) {
    const message = event?.value ?? 'unknown';
    console.log('message: ' + message);
    messageArray.push(
      <div key={i} className='event'>
        {/* <span className={'player-event'}>{event.from}</span> */}
        {/* <span className={'player-event'}>anonymous</span> */}
        <span className='message'>{ message }</span>
      </div>
    );
  }
  return messageArray;
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
 <p></p>


      {/* messages */}
      <div className = "Message_Screen">
        <p><b>Messages:</b></p> 
        <div id='player-messages'>{createMessageArray()}</div>
      </div>

      <div>
        <input type="text" placeholder="Type a message" className="msg_box" onChange = {textInpt} value={typed_msg}></input>
        <button className="button" onClick= {sendMessage}>Send</button>
      </div>



{/* excuses */}
      <div>
        <p><b>If You don't Know what to say, try this!</b></p>
        <p>{excuse}</p>
        <button className="button" onClick = {getExcuse} >Wisdom</button>
      </div>
    </main>
  
  );
}