//  @flow
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, createStyleSheet } from 'material-ui/styles';

const styleSheet = createStyleSheet('AppContent', theme => ({
  content: theme.mixins.gutters({
    paddingTop: 80,
    flex: '1 1 100%',
    maxWidth: '100%',
    margin: '0 auto',
  }),
  [theme.breakpoints.up(948)]: {
    content: {
      maxWidth: 900,
    },
  },
}));

const AppContent = props => (
  <div className={props.classes.content}>
    {props.children}
  </div>
);

AppContent.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styleSheet)(AppContent);
