import React from 'react';
import "./login.css"
import { useNavigate } from 'react-router-dom';

export function Login({setUser}) {
const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");
const [loggedin, setLoggedin] = React.useState(localStorage.getItem("loggedin") || false);
const navigate = useNavigate();


function nameinput(event) {
    setUsername(event.target.value);
}
function passinput(event) {
    setPassword(event.target.value);
}

  async function logInUser() {
    const res = await fetch('/api/auth/login', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    });
    await res.json();
    if (res.ok) {
      setUsername(username);
      localStorage.setItem("username", username);
      localStorage.setItem("loggedin", true);
      localStorage.setItem("profilePic", res.pic);
      window.location.reload();
    } else {
      alert('Authentication failed');
    }
  }

  async function registerUser() {
    const res = await fetch('/api/auth/create', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    });
    await res.json();
    if (res.ok) {
      setUsername(username);
      localStorage.setItem("username", username);
      setLoggedin(true)
      localStorage.setItem("loggedin", true);
      window.location.reload();
      
      navigate('../Home/Home.jsx');

    } else {
      alert('Authentication failed');
    }
  }

async function logout() {
  const res = await fetch('/api/auth/logout', {
    method: 'delete',
  });
  await res.json();
  if (res.ok) {
    setUsername(null);
    localStorage.removeItem("username");
    setLoggedin(false);
    localStorage.removeItem("loggedin");
    window.location.reload();
  } else {
    alert('Logout failed');
  }
}


  return (
    <main className="container-fluid bg-secondary text-center">
      <div> 
  {loggedin? (
    <button className="button" onClick={logout}>Log out</button>
  ) : (       
    <>
      <input type="text" name="username" placeholder="Username" className="login" onChange={nameinput}></input>
      <input type="text" name="password" placeholder="Password" className="login" onChange={passinput}></input>
      
      <p></p>

      <button className="button" onClick={logInUser}>Log In</button>
      <button className="button" onClick={registerUser}>Sign Up</button>
    </>
  )}
</div>


      
        
    </main>
  );
}