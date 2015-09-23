const { packageJson } = MyReactComponent;
const { Panel } = ReactBootstrap;

const Home = React.createClass({

  render() {
    return (

      <div>
        <div className='jumbotron'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-7 text-center'>
                <h1>{ packageJson.name }</h1>
                <p className='lead'>
                  { packageJson.description }
                </p>
              </div>
              <div className='col-md-5 jumbotron-side text-center'>
                <p>&nbsp;</p>
                <p>
                  <a href={ packageJson.repository.url + '/releases' } className='btn btn-success btn-lg' target='_blank'>
                    <i className='fa fa-download fa-lg'></i>
                    Download
                  </a>
                </p>
                <p>
                  <strong>Version</strong> { packageJson.version }
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <h2>Getting started with { packageJson.name }</h2>
          <Panel>npm install { packageJson.name } --save</Panel>
        </div>
      </div>
    );
  },

});

module.exports = Home;
