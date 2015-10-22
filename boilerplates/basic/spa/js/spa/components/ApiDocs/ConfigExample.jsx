import React from 'react';
import Prism from '../Prism';
import { Label } from 'react-bootstrap';

class ConfigExample extends React.Component {

  render() {
    return (
      <div>
        <Prism className="language-jsx">
          {
            `import MyReactComponent from 'my-react-component';
const { config } = MyReactComponent;`
          }
        </Prism>

        <p>&nbsp;</p>
        <p className="lead">Examples:</p>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Change Droids API endpoint</h3>
          </div>

          <div className="panel-body">
            <p>Everytime <b>MyReactComponent.components.Droids#componentWillMount</b> executes it will make a remote request to <b>http://starwars.fake.api.com/droids.json</b>, to fetch the droids' list.</p>
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              {
                `config.url = 'http://starwars.fake.api.com/';`
              }
            </Prism>
          </div>
        </div>
      </div>
    );
  }

}

export default ConfigExample;
