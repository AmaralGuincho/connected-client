  import React, { Component, Children } from 'react';
  import PropType from 'prop-types';

// Material-UI imports
  import AppBar from 'material-ui/AppBar';
  import Drawer from 'material-ui/Drawer';

  class AppNav extends Component {

    static propTypes = {
      title: PropType.string.isRequired,
      children: PropType.node.isRequired,
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
      const children = this.props.children;
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
            {
              Children.map(children, child => (
                React.cloneElement(child, {
                  onTouchTap: this.toggleDrawer,
                })
              ))
            }
          </Drawer>
        </div>
      );
    }
}

  export default AppNav;
