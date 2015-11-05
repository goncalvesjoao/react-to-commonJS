import React from 'react';
import styles from '../../styles/style.css';
import CSSModules from 'react-css-modules';

const defaultProps = {
  name: true,
};

@CSSModules(styles)
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
          styleName="avatar"
          src={ this.props.droid.avatar }
        />
        <span>{ this.renderName() }</span>
      </li>
    );
  }

}

Droid.defaultProps = defaultProps;

export default Droid;
