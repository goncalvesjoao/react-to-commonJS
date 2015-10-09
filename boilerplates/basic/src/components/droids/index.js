const jQuery = require('jquery');
const config = require('../../config');
const Droid = require('./Droid');

class Droids extends React.Component {

  constructor() {
    super();
    this.state = { droids: [] };
  }

  componentWillMount() {
    jQuery.ajax({
      url: config.url + 'droids.json',
      dataType: 'json',
      success: (data) => { this.setState({ droids: data }); },
    });
  }

  render() {
    return (
      <ul className="list-inline">
        { this.renderDroids() }
      </ul>
    );
  }

  renderDroids() {
    if (!this.state.droids.length) {
      return <li><h2>These are not the droids you are looking for</h2></li>;
    }

    return this.state.droids.map((droid, index) => {
      return <Droid key={ index } ref={ `droid_${droid.id}` } droid={ droid } { ...this.props } />;
    });
  }

}

module.exports = Droids;
