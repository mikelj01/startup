import React from 'react';
import "./Msging.css";

export function Msging() {
const [excuse, setExcuse] = React.useState("");
const excuses = ["I'm not feeling well", "I have a family emergency", "I have to work late", "I have a prior engagement", 
  "I'm not feeling up to it", "I'm not in the mood", "I'm not feeling social", "you stink"];

function getExcuse() {
  let newExcuse;
  do{
  let randomIndex = Math.floor(Math.random() * excuses.length);
  newExcuse = excuses[randomIndex];}
  while (newExcuse === excuse);
  setExcuse(newExcuse);
}
  return (
    <main className="container-fluid bg-secondary text-center">
      {/* a plugin that prints out a response to whatever message you input 
      - maybe server stuff?  I'm not sure yet
      - the function takes user input
      - when the user hits send, it prints out a message.*/}
      <div><p>Some sort of Plugin that supports messaging goes here</p>
                <img src="https://tinyurl.com/3bsjw4au" width="500"></img>


{/* excuses */}
                <p>{excuse}</p>
                <button className="button" onClick={() => getExcuse()}>Excuses</button></div>
    </main>
  );
}