const jQuery = require('jquery');
const config = require('../../config');
const Droid = require('./droid');

const Droids = React.createClass({

  getInitialState() { return { droids: [] }; },

  componentWillMount() {
    jQuery.ajax({
      url: config.url + 'droids.json',
      dataType: 'json',
      success: (data) => { this.setState({ droids: data }); },
    });
  },

  render() {
    return (
      <ul className='list-inline' refCollection='droids'>
        { this.renderDroids() }
      </ul>
    );
  },

  renderDroids() {
    if (!this.state.droids.length) {
      return <li><h2>These are not the droids you are looking for</h2></li>;
    }

    return this.state.droids.map((droid, index) => {
      return <Droid key={ index } droid={ droid } { ...this.props } />;
    });
  },

});

module.exports = Droids;
