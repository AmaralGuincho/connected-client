import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

/* Material UI Components */
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import IconButton from 'material-ui/IconButton'

/* Material UI Icons */
import IconMenu from 'material-ui-icons/Menu'

class AppNav extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isDrawerOpen: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer () {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen
    }))
  }

  render () {
    const { title, children } = this.props
    const { isDrawerOpen } = this.state

    return (
      <div>
        <AppBar
          title={title}
          iconElementLeft={<IconButton><IconMenu /></IconButton>}
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          open={isDrawerOpen}
          docked={false}
          onRequestChange={open => this.setState({ isDrawerOpen: open })}
        >
          {
            Children.map(children, child => (
              React.cloneElement(child, {
                onTouchTap: this.toggleDrawer
              })
            ))
          }
        </Drawer>
      </div>
    )
  }
}

AppNav.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
}

AppNav.defaultProps = {
  title: 'App'
}
export default AppNav
