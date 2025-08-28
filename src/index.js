import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import App from './App';
import PrivacyPolicy from './Componets/Privacy-Policy';
import TOS from './Componets/TOS';
import whiteLogo from './Assets/Artboard 11_1.png';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <div className="HeaderBlurWrapper">
        <div className="Header">
          <img alt="Viddy Logo" className="Logo" src={whiteLogo} />
          <div className="LeftHeader">
          <div className="HeaderLinks">
            <HashLink smooth to="/#About">ABOUT</HashLink>
            <HashLink smooth to="/#How">HOW IT WORKS</HashLink>
            <HashLink smooth to="/#Pricing">PRICING</HashLink>
          </div>
          <a className="AppBtn" href="https://app.viddystudio.com" target="_blank" rel="noopener noreferrer"><b>Go To App</b></a>
          </div>
        </div>
      </div>
      <Routes>

        <Route path="/" element={<App />}></Route>
        <Route path="/terms-of-service" element={<TOS />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
      </Routes>
    </HashRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
