import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { ChooseaChair } from './ChooseaChair/ChooseaChair';
import { Msging } from './Msging/Msging';
import { Matching } from './Matching/Matching';
import { Home } from './Home/Home';

export default function App() {
  return (
    <div className="body bg-dark text-light">
      <header className="container-fluid">
        <nav className="navbar fixed-top navbar-dark">
          <div className="title">
          <p  className="sitename">The Love Seat</p>
          </div>
          <menu className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="ChooseaChair">
              Choose a Chair
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Matching">
              Find Your Match
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Msging">
              Messaging
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="login">
              Log In
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer className="bg-dark text-light text-left py-3">
        <div className="foot-content">
          <p>
          © 2025 The Love Seat. All Rights Reserved.
          </p>
            <li>
              <a href="https://instagram.com" class="social">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com" class="social">
              X
              </a>
            </li>
            <li>
              <a href="https://facebook.com" class="social">
              Facebook
              </a>
            </li>
            <li><a href="https://github.com/mikelj01/startup" class="social">GitHub</a></li>
            <p>Acknowledgments:</p>
            <p>
              This page would not be possible without an entire bag of Tai Pei pork potstickers.  
              This page is not intended to be used for real life dating and is in no way responsible for any relationships that may unfold from activities related to its use.
              </p>
              <p>May the force be with you.</p>
          </div>
        </footer>
    </div>
  );
}