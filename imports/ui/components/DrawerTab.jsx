import React, { createElement } from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List'

const styleSheet = {
  nav: {
    color: 'rgb(117, 117, 117)',
    padding: 'none',
    margin: 'none',
    textDecoration: 'none'
  }
}

const DrawerTab = ({children, title, icon}) => {
  return (
    <ListItem
      primaryText={title}
      primaryTogglesNestedList
      leftAvatar={createElement(icon, styleSheet.nav)}
      nestedItems={children}
    />
  )
}

DrawerTab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  icon: PropTypes.element
}

DrawerTab.defaultProps = {
  icon: null
}

export default DrawerTab
