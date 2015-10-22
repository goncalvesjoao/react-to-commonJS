import React from 'react';

const { config } = MyReactComponent;
let author = '<package.json:author>';

if (config.author) { author = config.author; }

const Footer = () => (
  <footer className="container">
    <center>
      All copyrights reserved &copy; <b>{ author }</b> { (new Date()).getFullYear() }
    </center>
    <p>&nbsp;</p>
  </footer>
);

export default Footer;
