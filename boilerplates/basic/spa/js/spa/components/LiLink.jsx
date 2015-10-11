const { Link, History } = ReactRouter;

module.exports = React.createClass({

  mixins: [History],

  render() {
    const isActive = this.history.isActive(this.props.to, this.props.query);

    return (
      <li className={ isActive ? 'active' : '' }>
        <Link { ...this.props } activeClassName="active" />
      </li>
    );
  },

});
