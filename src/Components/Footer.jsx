import React from 'react';
import './Footer.css';
import googlePlay from '../Assets/googlePlay.png';
import appStore from '../Assets/appStore.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-background">
        <h1 className="footer-title">BOOK YOUR TICKETS NOW</h1>
        <div className="footer-download">
          <div className="googlePlay">
            <img src={googlePlay} alt="Google Play" />
          </div>
          <div className="appStore">
            <img src={appStore} alt="App Store" />
          </div>
        </div>
        <div className="footer-lorem">
          <div className="footer-lorem-item">Lorem 1</div>
          <div className="footer-lorem-item">Lorem </div>
          <div className="footer-lorem-item">Lorem 3</div>
        </div>
      </div>
    </footer>
  );
}
