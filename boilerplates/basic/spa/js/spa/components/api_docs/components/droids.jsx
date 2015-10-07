const { Droids } = MyReactComponent.Components;
const { Label } = require('react-bootstrap');

const DroidsExample = React.createClass({

  render() {
    return (

      <div>
        <div className='jumbotron'>
          <h1>Droids</h1>
        </div>

        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Default mode</h3>
          </div>

          <div className='panel-body'>
            <Droids />
          </div>

          <div className='panel-footer'>
            <Label bsSize='small'>Code:</Label>
            <p>
              <code>{ '<Droids />' }</code>
            </p>
          </div>
        </div>

        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>No name</h3>
          </div>

          <div className='panel-body'>
            <Droids name={ false } />
          </div>

          <div className='panel-footer'>
            <Label bsSize='small'>Code:</Label>
            <p>
              <code>{ '<Droids name={ false } />' }</code>
            </p>
          </div>
        </div>
      </div>

    );
  },

});

module.exports = DroidsExample;
