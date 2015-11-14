import React from 'react';
import { Link, History, IndexLink } from 'react-router';

const LiLink = React.createClass({

  mixins: [History],

  render() {
    const isActive =
      this.history.isActive(this.props.to, this.props.query, this.props.index);

    return React.createElement(
      'li',
      { className: isActive ? 'active' : '' },
      React.createElement(
        this.props.index ? IndexLink : Link,
        { activeClassName: 'active', ...this.props }
      )
    );
  },

});

export default LiLink;
