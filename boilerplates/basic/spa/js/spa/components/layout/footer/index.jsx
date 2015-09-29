const { config } = MyReactComponent;
let author = '<package.json:author>';

if (config.author) { author = config.author; }

class Footer extends React.Component {
  render() {
    return (

      <footer className='container'>
        <center>
          All copyrights reserved &copy; <b>{ author }</b> { (new Date()).getFullYear() }
        </center>
        <p>&nbsp;</p>
      </footer>

    );
  }
}

module.exports = Footer;
