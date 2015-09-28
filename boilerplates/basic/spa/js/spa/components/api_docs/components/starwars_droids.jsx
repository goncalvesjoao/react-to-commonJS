const { StarwarsDroids } = MyReactComponent.Components;
const { Label } = require('react-bootstrap');

const StarwarsDroidsExample = React.createClass({

  render() {
    return (

      <div>
        <div className='jumbotron'>
          <h1>StarwarsDroids</h1>
        </div>

        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Default mode</h3>
          </div>

          <div className='panel-body'>
            <StarwarsDroids />
          </div>

          <div className='panel-footer'>
            <Label bsSize='small'>Code:</Label>
            <p>
              <code>{ '<StarwarsDroids />' }</code>
            </p>
          </div>
        </div>

        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>No name</h3>
          </div>

          <div className='panel-body'>
            <StarwarsDroids name={ false } />
          </div>

          <div className='panel-footer'>
            <Label bsSize='small'>Code:</Label>
            <p>
              <code>{ '<StarwarsDroids name={ false } />' }</code>
            </p>
          </div>
        </div>
      </div>

    );
  },

});

module.exports = StarwarsDroidsExample;
