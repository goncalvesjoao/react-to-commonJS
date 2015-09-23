const Header = require('./header');
const Footer = require('./footer');

const App = React.createClass({
  render() {
    return (

      <div>
        <Header />

        <div styleName='mainContainer' >
          { this.props.children }
        </div>

        <Footer />
      </div>

    );
  },
});

module.exports = CSSModules(App, require('../../styles/style.css'));
