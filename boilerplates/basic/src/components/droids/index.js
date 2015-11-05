import React from 'react';
import Droid from './Droid';
import jQuery from 'jquery';
import config from '../../config';

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

  renderDroids() {
    if (!this.state.droids.length) {
      return <li><h2>These are not the droids you are looking for</h2></li>;
    }

    return this.state.droids.map((droid, index) => {
      return <Droid key={ index } droid={ droid } { ...this.props } />;
    });
  }

  render() {
    return (
      <ul className="list-inline">
        { this.renderDroids() }
      </ul>
    );
  }

}

export default Droids;
