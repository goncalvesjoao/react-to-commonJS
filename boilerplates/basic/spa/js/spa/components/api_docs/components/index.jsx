const { Link } = ReactRouter;

const ConfigExample = React.createClass({

  render() {
    return <div>{ this.props.children || this.renderHome() }</div>;
  },

  renderHome() {
    return (

      <div className='jumbotron'>
        <h1>Components</h1>

        <div className='ascii'>
          <ul className='ascii'>
            <li>Components
              <ul>
                <li><Link to='/api_docs/components/starwars_droids'>StarwarsDroids</Link></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>

    );
  },

});

module.exports = ConfigExample;
