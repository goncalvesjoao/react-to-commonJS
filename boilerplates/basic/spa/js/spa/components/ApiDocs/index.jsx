const LiLink = require('../Layout/Header/LiLink');
const { Link } = ReactRouter;

class ApiDocs extends React.Component {

  render() {
    return (
      <div id="top">
        <p>&nbsp;</p>

        <div className="container">
          <div className="row">

            <div className="col-md-9">
              { this.props.children || this.renderHome() }
            </div>

            <nav className="col-xs-3 bs-docs-sidebar">
              { this.renderLinks(true) }
            </nav>

          </div>
        </div>

      </div>
    );
  }

  renderHome() {
    return (
      <div className="jumbotron">
        <h1>MyReactComponent API</h1>

        <div className="ascii">
          <ul className="ascii">
            <li>
              <span>MyReactComponent</span>
              { this.renderLinks() }
            </li>
          </ul>
        </div>
      </div>
    );
  }

  renderLinks(sidebarMode) {
    let title = '';
    let ulClass = '';
    let firstUlClass = '';

    if (sidebarMode) {
      title = <h4><Link to="/api_docs">MyReactComponent API</Link></h4>;
      ulClass = 'nav nav-stacked';
      firstUlClass = ulClass + ' fixed';
    }

    return (
      <ul className={ firstUlClass }>
        { title }

        <LiLink to="/api_docs/config">config</LiLink>

        <li>
          <span>Components</span>
          <ul className={ ulClass }>
            <LiLink to="/api_docs/components/droids">Droids</LiLink>
          </ul>
        </li>
      </ul>
    );
  }

}

module.exports = ApiDocs;
