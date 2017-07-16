import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

// Material-UI imports
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';
import { grey } from 'material-ui/styles/colors';

const DrawerButton = props => (
  <NavLink
    {...props}
    to={props.to}
    style={{
      textDecoration: 'none',
      color: grey[600],
    }}
    activeStyle={{
      fontWeight: 'bold',
      color: grey[700],
    }}
  >
    <ListItem button>
      { props.icon !== null &&
      <ListItemIcon>
        {props.icon}
      </ListItemIcon>
      }
      <ListItemText
        primary={props.text}
        disableTypography
      />
    </ListItem>
  </NavLink>
);

DrawerButton.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
  to: PropTypes.node,
};

DrawerButton.defaultProps = {
  icon: null,
  to: null,
};

export default DrawerButton;
