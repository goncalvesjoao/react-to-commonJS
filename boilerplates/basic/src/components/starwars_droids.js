const jQuery = require('jquery');
const config = require('../config');

const StarwarsDroids = React.createClass({

  getDefaultProps() { return { name: true }; },

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
        { this.state.droids.map(this.renderDroid) }
      </ul>
    );
  },

  renderDroid(droid, index) {
    return (
      <li key={ index }>
        <img ref={ 'avatar_' + index } className='img-circle' style={{ width: '80px' }} src={ droid.avatar } />
        { this.renderName(droid, index) }
      </li>
    );
  },

  renderName(droid, index) {
    if (!this.props.name) { return null; }

    return (
      <p className='text-center'>
        <span ref={ 'name_' + index } className='label label-info'>{ droid.name }</span>
      </p>
    );
  },

});

module.exports = StarwarsDroids;
