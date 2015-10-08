const { Droids } = MyReactComponent.Components;
const { Label } = require('react-bootstrap');
const Prism = require('../../prism');

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
            <Prism className='language-jsx'>
              { '<Droids />' }
            </Prism>
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
            <Prism className='language-jsx'>
              { `<Droids name={ false } />` }
            </Prism>
          </div>
        </div>
      </div>

    );
  },

});

module.exports = DroidsExample;
