import React, { createElement } from 'react'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

/* Material-UI Imports */
import MenuItem from 'material-ui/MenuItem'

const styleSheet = {
  nav: {
    color: '#333',
    textDecoration: 'none'
  },
  activeNav: {
    fontWeight: '700'
  }
}

const DrawerButton = props => {
  const {icon, exact, text, to, onTouchTap} = props

  return (
    <NavLink
      exact={exact}
      to={to}
      style={styleSheet.nav}
      activeStyle={styleSheet.activeNav}
    >
      <MenuItem
        primaryText={text}
        leftIcon={icon ? createElement(icon) : null}
        onTouchTap={event => onTouchTap(event)}
      />

    </NavLink>
  )
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.func,
  to: PropTypes.node,
  exact: PropTypes.bool,
  onTouchTap: PropTypes.func
}

DrawerButton.defaultProps = {
  icon: null,
  to: null,
  exact: false,
  onTouchTap: null
}

export default DrawerButton
