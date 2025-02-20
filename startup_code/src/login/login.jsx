import React from 'react';
import "./login.css"

export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div> 
        <input type="text" name="username" placeholder="Username" className="login"></input>
        <input type="text" name="password" placeholder="Password" className="login"></input>
        
        <p></p>
        <button className="button">Proceed</button>
        <p></p>
        <button className="button">Sign Up</button>
        </div>
    </main>
  );
}