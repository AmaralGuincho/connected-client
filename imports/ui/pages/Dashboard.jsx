import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Material-UI imports
import Divider from 'material-ui/Divider';

// Local Imports
class Dashboard extends Component {
  render() {
    return (
      <div>
        <span className="page-name"> Dashboard </span>
        <Divider />
        <p> Dashboard is the place where you can see the lastest logs and etc </p>
      </div>
    );
  }
}

export default Dashboard;
