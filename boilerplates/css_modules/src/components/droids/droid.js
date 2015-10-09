const CSSModules = require('react-css-modules');
const defaultProps = {
  name: true,
};

class Droid extends React.Component {

  render() {
    return (
      <li>
        <img
          ref="avatar"
          className="img-circle"
          styleName='avatar'
          src={ this.props.droid.avatar }
        />
        <span>{ this.renderName() }</span>
      </li>
    );
  }

  renderName() {
    if (!this.props.name) { return null; }

    return (
      <p className="text-center">
        <span ref="name" className="label label-info">
          { this.props.droid.name }
        </span>
      </p>
    );
  }

}

Droid.defaultProps = defaultProps;

module.exports = CSSModules(Droid, require('../../styles/style.css'));
