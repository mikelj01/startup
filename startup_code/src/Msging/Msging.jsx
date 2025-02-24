import React from 'react';
import "./Msging.css";

export function Msging() {
  return (
    <main className="container-fluid bg-secondary text-center">
      {/* a plugin that prints out a response to whatever message you input 
      - maybe server stuff?  I'm not sure yet
      - the function takes user input
      - when the user hits send, it prints out a message.*/}
      <div><p>Some sort of Plugin that supports messaging goes here</p>
                <img src="https://tinyurl.com/3bsjw4au" width="500"></img>


{/* a function that returns a random phrase from a list of phrases 
-user, presses the button and activates the function
- the function goes into an array of quotes
- it calls a random integer and uses that as the index for the quote
- the function returns the quote at that index
- the page renders what was most recently returned there.*/}
                <p>an api that provides random suggestions for when you need an excuse to get out of a social engagement you're being invited to</p>
                <button className="button">Excuses</button></div>
    </main>
  );
}