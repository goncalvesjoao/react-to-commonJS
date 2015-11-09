import React from 'react';
import { config } from '../../../../../src';

class Footer extends React.Component {
  render() {
    return (
      <footer className="container">
        <center>
          All copyrights reserved &copy; <b>{ config.author || '<package.json:author>' }</b> { (new Date()).getFullYear() }
        </center>
        <p>&nbsp;</p>
      </footer>
    );
  }
}

export default Footer;
