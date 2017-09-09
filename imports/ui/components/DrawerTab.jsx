import React, { createElement, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { ListItem } from 'material-ui/List'

const styleSheet = {
  nav: {
    color: 'rgb(117, 117, 117)',
    textDecoration: 'none'
  }
}

const DrawerTab = ({children, title, icon, onTouchTap}) => {
  const childrenElements = Children.map(children, child => (
    cloneElement(child, {
      onTouchTap: onTouchTap
    })
  ))

  return (
    <ListItem
      primaryText={title}
      primaryTogglesNestedList
      leftAvatar={icon ? createElement(icon, styleSheet.nav) : null}
      nestedItems={childrenElements}
    />
  )
}

DrawerTab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOf(
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ),
  icon: PropTypes.element,
  onTouchTap: PropTypes.func
}

DrawerTab.defaultProps = {
  icon: null
}

export default DrawerTab
