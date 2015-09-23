const { Link, State } = ReactRouter;

module.exports = React.createClass({

  mixins: [State],

  render() {
    // const isActive = this.isActive(this.props.to, this.props.params, this.props.query);
    const isActive = (this.props.to === location.pathname);

    return <li className={ isActive ? 'active' : '' }>
      <Link { ...this.props } />
    </li>;
  },

});
