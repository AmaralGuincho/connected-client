import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

// Styles Related Imports
import { withStyles, createStyleSheet } from 'material-ui/styles';
import MenuIcon from 'material-ui-icons/Menu';
import withWidth, { isWidthUp } from 'material-ui/utils/withWidth';

const style = createStyleSheet('AppNav', theme => ({
  '@global': {
    html: {
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      lineHeight: '1.2',
      overflowX: 'hidden',
      WebkitFontSmoothing: 'antialiased', // Antialiasing.
      MozOsxFontSmoothing: 'grayscale', // Antialiasing.
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      width: 'auto',
    },
  },
  appFrame: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
  },
  grow: {
    flex: '1 1 auto',
  },
  title: {
    marginLeft: 24,
    flex: '0 1 auto',
  },
  appBar: {
    transition: theme.transitions.create('width'),
  },
  appBarHome: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  [theme.breakpoints.up('lg')]: {
    drawer: {
      width: '250px',
    },
    appBarShift: {
      width: 'calc(100% - 250px)',
    },
    navIconHide: {
      display: 'none',
    },
  },
}));

@withWidth()
@withStyles(style)
class AppNav extends Component {
  state = {
    isDrawerOpen: false,
  };

  handleDrawerClose = () => {
    this.setState({ isDrawerOpen: false });
  };

  handleDrawerToggle = () => {
    this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
  };

  render() {
    const { children, width, title, classes } = this.props;

    // Dock drawer on larger  'lg ' devices
    const isDrawerDocked = isWidthUp('lg', width);

    return (
      <div >
        <AppBar>
          <Toolbar className={classes.appBar}>

            <IconButton
              color="contrast"
              onClick={this.handleDrawerToggle}
              className={classes.icon}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              noWrap
              type="title"
              color="inherit"
              className={classes.title}
            >
              {title}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          anchor="left"
          onRequestClose={this.handleDrawerClose}
          onClick={this.handleDrawerClose}
          docked={isDrawerDocked}
          className={classes.drawer}
          open={isDrawerDocked || this.state.isDrawerOpen}
        >
          {children}
        </Drawer>
      </div>
    );
  }
}

AppNav.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  width: PropTypes.string.isRequired,
};

AppNav.defaultProps = {
  title: 'App',
};

export default AppNav;
