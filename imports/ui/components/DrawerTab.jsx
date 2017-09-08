import React, { createElement } from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List'

const styleSheet = {
  nav: {
    color: 'rgb(117, 117, 117)',
    textDecoration: 'none'
  }
}

const DrawerTab = ({children, title, icon}) => {
  return (
    <ListItem
      primaryText={title}
      primaryTogglesNestedList
      leftAvatar={icon ? createElement(icon, styleSheet.nav) : null}
      nestedItems={children}
    />
  )
}

DrawerTab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOf(
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ),
  icon: PropTypes.element
}

DrawerTab.defaultProps = {
  icon: null
}

export default DrawerTab
