class Footer extends React.Component {
  render() {
    return (

      <footer className='container'>
        <center>
          All copyrights reserved &copy; { (new Date()).getFullYear() }
        </center>
        <p>&nbsp;</p>
      </footer>

    );
  }
}

module.exports = Footer;
