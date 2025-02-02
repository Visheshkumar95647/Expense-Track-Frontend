// Footer.js
import React from 'react';
import '../style/footer.css';
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <>
        <div className="footer">
        <div className="foot">
            <div className="img"><img src={logo} alt="" /></div>
            <div className="heading"><h1>WalletWatch</h1></div>
            <div><h2>Spend wisely</h2></div>
        </div>
        </div>
    </>
  );
};

export default Footer;
