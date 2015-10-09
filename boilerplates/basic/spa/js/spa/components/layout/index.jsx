const Header = require('./Header');
const Footer = require('./Footer');
const CSSModules = require('react-css-modules');

const App = ({ children }) => (
  <div>
    <Header />

    <div styleName="mainContainer">
      { children }
    </div>

    <Footer />
  </div>
);

module.exports = CSSModules(App, require('../../styles/style.css'));
