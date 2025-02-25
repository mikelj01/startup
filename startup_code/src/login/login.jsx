import React from 'react';
import "./login.css"

export function Login() {
const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");

function nameinput(event) {
    setUsername(event.target.value);
}
function passinput(event) {
    setPassword(event.target.value);
}
function logInUser() {
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
}

  return (
    <main className="container-fluid bg-secondary text-center">
      <div> 
        {/* system checks for something in the username and password field, then allows you to hit proceed or sign up if it is filled.
         */}
        <input type="text" name="username" placeholder="Username" className="login" onChange={nameinput}></input>
        <input type="text" name="password" placeholder="Password" className="login" onChange={passinput}></input>
        
        <p></p>
        <button className="button" onClick={logInUser}>Proceed</button>
        <p></p>
        <button className="button">Sign Up</button>
        </div>
        
    </main>
  );
}