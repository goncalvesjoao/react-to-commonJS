const { packageJson } = MyReactComponent;
const { Panel } = require('react-bootstrap');

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
                <p>{ this.repositoryLink() }</p>
                <p><strong>Version</strong> { packageJson.version }</p>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <h2>Getting started:</h2>
          <Panel>
            <code>npm install { packageJson.name } --save</code>
          </Panel>
        </div>
      </div>
    );
  },

  repositoryLink() {
    const props = { href: '' };

    if (packageJson.repository) { props.href = packageJson.repository.url; }

    if (props.href) {
      props.href += '/releases';
      props.target = '_blank';
    } else {
      props.href = '#';
      props.onClick = (event) => {
        event.preventDefault();

        /*eslint-disable */
        alert('You might want to fill in the blanks of your repository details listed on the package.json');
        /*eslint-enable */
      };
    }

    return (
      <a { ...props } className='btn btn-success btn-lg'>
        <i className='glyphicon glyphicon-download-alt'></i> Download
      </a>
    );
  },

});

module.exports = Home;
