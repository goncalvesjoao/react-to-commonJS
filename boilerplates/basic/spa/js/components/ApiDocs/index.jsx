import React from 'react';
import Prism from '../Prism';
import LiLink from '../LiLink';
import Droids from '../../../../src';
import { Label } from 'react-bootstrap';
import { IndexLink } from 'react-router';

class ApiDocs extends React.Component {

  renderHome() {
    return (
      <div>
        <Prism className="language-jsx">
          { `import MyReactComponent from 'my-react-component';` }
        </Prism>

        <p>&nbsp;</p>
        <p className="lead">Examples:</p>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Default mode</h3>
          </div>

          <div className="panel-body">
            <Droids />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<MyReactComponent />` }
            </Prism>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Disable display name</h3>
          </div>

          <div className="panel-body">
            <Droids name={ false } />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<MyReactComponent name={ false } />` }
            </Prism>
          </div>
        </div>
      </div>
    );
  }

  renderSidebar() {
    return (
      <ul className="ascii fixed">
        <li>
          <IndexLink activeClassName="active" to="/api_docs">MyReactComponent</IndexLink>
          <ul>
            <LiLink to="/api_docs/set_config">setConfig</LiLink>
          </ul>
        </li>
      </ul>
    );
  }

  render() {
    return (
      <div id="top">
        <p>&nbsp;</p>

        <div className="container">
          <div className="row">
            <div className="col-xs-3 ascii">
              { this.renderSidebar() }
            </div>

            <div className="col-md-9">
              { this.props.children || this.renderHome() }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default ApiDocs;
