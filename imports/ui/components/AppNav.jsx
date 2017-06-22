  import React, { Component } from 'react';
  import PropType from 'prop-types';

  import { Link } from 'react-router-dom';

// Material-UI imports
  import AppBar from 'material-ui/AppBar';
  import Drawer from 'material-ui/Drawer';
  import MenuItem from 'material-ui/MenuItem';

  class AppNav extends Component {

    static propTypes = {
      title: PropType.string.isRequired,
    }

    constructor(props) {
      super(props);
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
      return (
        <div>
          <AppBar
            title={this.props.title}
            onLeftIconButtonTouchTap={this.toggleDrawer}
          />

          <Drawer
            docked={false}
            open={this.state.isDrawerOpen}
            onRequestChange={open => this.setState({ isDrawerOpen: open })}
          >
            {this.drawerElements}
            <MenuItem
              primaryText={'Dashboard'}
              containerElement={<Link to="/dashboard" />}
              onTouchTap={this.toggleDrawer}
            />
            <MenuItem
              primaryText={'Home'}
              containerElement={<Link to="/home" />}
              onTouchTap={this.toggleDrawer}
            />
            <MenuItem
              primaryText={'Funcionarios'}
              containerElement={<Link to="/funcionarios" />}
              onTouchTap={this.toggleDrawer}
            />
          </Drawer>
        </div>
      );
    }
}

  export default AppNav;
