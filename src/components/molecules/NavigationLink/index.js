import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

class NavigationLink extends Component {
  render() {
    const { name, href } = this.props;

    return (
        <div>
            <NavLink
                to={ href }
                activeClassName="active"
                activeStyle={ { borderBottom: '4px solid #008dc8' } }
                style={ { marginRight: '6px' } }
            >
                {name}
            </NavLink>
        </div>
    );
  }
}

NavigationLink.propTypes = {
    name: PropTypes.string,
    href: PropTypes.string
}

export default NavigationLink;
