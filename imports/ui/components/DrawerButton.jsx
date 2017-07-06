import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

// Material-UI imports
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List';

const DrawerButton = props => (
  <ListItem button>
    <NavLink
      to={props.to}
      activeStyle={{
        textDecoration: 'none',
      }}
    >
      { props.icon !== null &&
        <ListItemIcon>
          {props.icon}
        </ListItemIcon>
      }
      <ListItemText
        primary={props.text}
      />
    </NavLink>
  </ListItem>
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
