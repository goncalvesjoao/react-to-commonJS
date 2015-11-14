import React from 'react';
import Prism from '../Prism';
import { Label } from 'react-bootstrap';

class ConfigExample extends React.Component {

  render() {
    return (
      <div>
        <Prism className="language-jsx">
          { `import { setConfig } from 'my-react-component';` }
        </Prism>

        <p>&nbsp;</p>
        <p className="lead">Examples:</p>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Change Droids API endpoint</h3>
          </div>

          <div className="panel-body">
            <p>Everytime <b>Droids#componentWillMount</b> executes it will make a remote request to <b>{ `{ config.url }` }/droids.json</b>, to fetch the droids' list.</p>
            <p>You can alter it through the <b>setConfig</b> function.</p>
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `setConfig({ url: 'http://starwars.fake.api.com/' });` }
            </Prism>
          </div>
        </div>
      </div>
    );
  }

}

export default ConfigExample;
