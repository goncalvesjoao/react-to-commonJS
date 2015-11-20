import { config } from '../../../../src';

const Footer = () => (
  <footer className="container">
    <center>
      All copyrights reserved &copy; <b>{ config.author || '<package.json:author>' }</b> { (new Date()).getFullYear() }
    </center>
    <p>&nbsp;</p>
  </footer>
);

export default Footer;
