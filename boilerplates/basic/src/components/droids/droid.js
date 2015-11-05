import React from 'react';

const defaultProps = {
  name: true,
};

class Droid extends React.Component {

  renderName() {
    if (!this.props.name) { return null; }

    return (
      <p className="text-center">
        <span name="droid-name" className="label label-info">
          { this.props.droid.name }
        </span>
      </p>
    );
  }

  render() {
    return (
      <li>
        <img
          className="img-circle"
          style={{ width: '80px' }}
          src={ this.props.droid.avatar }
        />
        <span>{ this.renderName() }</span>
      </li>
    );
  }

}

Droid.defaultProps = defaultProps;

export default Droid;
