import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';


// Mateial-UI Imports
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// Material-UI Icons
import HomeIcon from 'material-ui/svg-icons/action/home';
import DashboardIcon from 'material-ui/svg-icons/action/dashboard';


class AppDrawer extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.props = props;

    this.state = {
      isDrawerOpen: false,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer() {
    this.setState(prevState => ({
      isDrawerOpen: !prevState.isDrawerOpen,
    }));
  }

  render() {
    const {
      title,
    } = this.props;

    return (
      <div>
        <Drawer
          docked={false}
          open={this.state.isDrawerOpen}
          onRequestChange={open => this.setState({ isDrawerOpen: open })}
        >
          <Menu>
            <MenuItem
              primaryText="Home"
              leftIcon={<HomeIcon />}
              containerElement={<Link to="/" />}
            />
            <MenuItem
              primaryText="Dashboard"
              leftIcon={<DashboardIcon />}
              containerElement={<Link to="/dashboard" />}
            />
          </Menu>
        </Drawer>

        <AppBar
          title={title}
          onLeftIconButtonTouchTap={this.toggleDrawer}
          // zDepth={0}
        />
      </div>
    );
  }
}

export default AppDrawer;
