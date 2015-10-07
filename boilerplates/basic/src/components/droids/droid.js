const Droid = React.createClass({

  getDefaultProps() { return { name: true }; },

  render() {
    return (
      <li>
        <img ref='avatar' className='img-circle' style={{ width: '80px' }} src={ this.props.droid.avatar } />
        { this.renderName() }
      </li>
    );
  },

  renderName() {
    if (!this.props.name) { return null; }

    return (
      <p className='text-center'>
        <span ref='name' className='label label-info'>{ this.props.droid.name }</span>
      </p>
    );
  },

});

module.exports = Droid;
