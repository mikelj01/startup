import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { ChooseaChair } from './ChooseaChair/ChooseaChair';
import { Msging } from './Msging/Msging';
import { Matching } from './Matching/matching';
import { Home } from './Home/Home';

export default function App() {
  return (
    <BrowserRouter>
    <div className="body bg-dark text-light">
      <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark">
          <div className="title">
          <p  className="sitename">The Love Seat</p>
          </div>
          <menu className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <NavLink className="nav-link" to="">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="ChooseaChair">
              Choose a Chair
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="Matching">
              Find Your Match
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="Msging">
              Messaging
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="login">
              Log In
              </NavLink>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>



      <Routes>
      <Route path='/login' element={<Login />} exact />
      <Route path='/' element={<Home />} exact />
      <Route path='/ChooseaChair' element={<ChooseaChair />} />
      <Route path='/Matching' element={<Matching />} />
      <Route path='/Msging' element={<Msging />} />
      <Route path='*' element={<NotFound />} />
      </Routes>

      <footer className="bg-dark text-light text-left py-3">
        <div className="foot-content">
          <p>
          © 2025 The Love Seat. All Rights Reserved.
          </p>
            <li>
              <NavLink to="https://instagram.com" ClassName="social">
                Instagram
              </NavLink>
            </li>
            <li>
              <NavLink to="https://x.com" ClassName="social">
              X
              </NavLink>
            </li>
            <li>
              <NavLink to="https://facebook.com" ClassName="social">
              Facebook
              </NavLink>
            </li>
            <li>
              <NavLink className="soc-link" to="https://github.com/mikelj01/startup" >
                GitHub  
              </NavLink>
            </li>
            <p>Acknowledgments:</p>
            <p>
              This page would not be possible without an entire bag of Tai Pei pork potstickers.  
              This page is not intended to be used for real life dating and is in no way responsible for any relationships that may unfold from activities related to its use.
              </p>
              <p>May the force be with you.</p>
          </div>
        </footer>
    </div>
    </BrowserRouter>
  );
}