const LiLink = require('../layout/header/li_link');
const { Link } = ReactRouter;

const ApiDocs = React.createClass({

  render() {
    return (

      <div id='top'>
        <p>&nbsp;</p>

        <div className='container'>
          <div className='row'>

            <div className='col-md-9'>
              { this.props.children || this.renderHome() }
            </div>

            <nav className="col-xs-3 bs-docs-sidebar">
              <ul className='nav nav-stacked fixed'>
                <h4><Link to='/api_docs'>MyReactComponent API</Link></h4>

                <LiLink to='/api_docs/config'>config</LiLink>
                <li>
                  <Link to='/api_docs/components'>Components</Link>
                  <ul className='nav nav-stacked'>
                    <LiLink to='/api_docs/components/starwars_droids'>StarwarsDroids</LiLink>
                  </ul>
                </li>
              </ul>
            </nav>

          </div>
        </div>

      </div>

    );
  },

  renderHome() {
    return (
      <div className='jumbotron'>
        <h1>MyReactComponent API</h1>

        <div className='ascii'>
          <ul className='ascii'>
            <li>MyReactComponent
              <ul>
                <li><Link to='/api_docs/config'>config</Link></li>
                <li><Link to='/api_docs/components'>Components</Link>
                  <ul>
                    <li><Link to='/api_docs/components/starwars_droids'>StarwarsDroids</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  },

});

module.exports = ApiDocs;
