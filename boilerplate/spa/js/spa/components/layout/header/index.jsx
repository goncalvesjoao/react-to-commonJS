const LiLink = require('./li_link');
const { packageJson } = MyReactComponent;

const Header = React.createClass({

  render() {
    return (

      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".select2-navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="/" className="navbar-brand">MyReactComponent</a>
          </div>

          <nav className="collapse navbar-collapse select2-navbar-collapse" role="navigation">
            <ul className="nav navbar-nav">
              <LiLink to="/">Home</LiLink>
              <LiLink to="/api_docs">API DOCS</LiLink>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href={ packageJson.repository.url } target="_blank">
                  <i className="fa fa-github"></i> GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>

    );
  },

});

module.exports = Header;
