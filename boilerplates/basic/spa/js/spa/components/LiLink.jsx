import React from 'react';
import { Link, History } from 'react-router';

const LiLink = React.createClass({

  mixins: [History],

  render() {
    const isActive = this.history.isActive(this.props.to, this.props.query);

    return (
      <li className={ isActive ? 'active' : '' }>
        <Link { ...this.props } activeClassName="active" />
      </li>
    );
  },

});

export default LiLink;
