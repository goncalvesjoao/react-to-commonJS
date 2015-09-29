const jQuery = require('jquery');
const config = require('../config');
const CSSModules = require('react-css-modules');

const StarwarsDroids = React.createClass({

  getDefaultProps() { return { name: true }; },

  getInitialState() { return { droids: [] }; },

  componentWillMount() {
    jQuery.ajax({
      url: config.url + '/v0/droids',
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
        <img ref={ 'avatar_' + index } className='img-circle' styleName='avatar' src={ droid.avatar } />
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

module.exports = CSSModules(StarwarsDroids, require('../styles/style.css'));
