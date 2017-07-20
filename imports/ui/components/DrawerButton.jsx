import React from 'react'
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
  const {icon, exact, text, to} = props

  return (
    <NavLink
      exact={exact}
      to={to}
      style={styleSheet.nav}
      activeStyle={styleSheet.activeStyle}
    >
      <MenuItem
        primaryText={text}
        leftIcon={icon}
      />

    </NavLink>
  )
}

DrawerButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  to: PropTypes.node,
  exact: PropTypes.bool
}

DrawerButton.defaultProps = {
  icon: null,
  to: null,
  exact: false
}

export default DrawerButton
