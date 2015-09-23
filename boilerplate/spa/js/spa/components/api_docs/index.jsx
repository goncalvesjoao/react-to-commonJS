const StarwarsDroidsExample = require('./starwars_droids_example');

const ApiDocs = React.createClass({

  render() {
    return (

      <div id='top' className='container'>
        <p>&nbsp;</p>

        <div className='row'>

          <div className='col-md-9'>
            <StarwarsDroidsExample />
            <hr/ >
            // StarwarsHeroesExample
          </div>

          <div className='col-md-3'>
            <nav className='bs-docs-sidebar hidden-print hidden-xs hidden-sm affix'>
              <ul className='nav bs-docs-sidenav'>
                <li><a href='/api_docs#starwars_droids'>StarwarsDroids</a></li>
                <li><a href='/api_docs#starwars_characteres'>StarwarsHeroes</a></li>
              </ul>
            </nav>
          </div>

        </div>
      </div>

    );
  },

});

module.exports = ApiDocs;
