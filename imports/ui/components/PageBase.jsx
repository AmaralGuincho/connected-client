import React from 'react';
import PropTypes from 'prop-types';

// Material-UI Imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

// Local Imports
import globalStyles from '../styles';

const PageBase = (props) => {
  const { title, subtitle, navigation, depth } = props;

  return (
    <div>
      <span style={globalStyles.navigation}>{navigation}</span>

      <Paper style={globalStyles.paper} zDepth={depth}>
        <h3 style={globalStyles.title}>{title}</h3>
        <h3 style={globalStyles.subtitle}>{subtitle}</h3>

        <Divider />
        {props.children}

        <div style={globalStyles.clear} />

      </Paper>
    </div>
  );
};

PageBase.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  navigation: PropTypes.string,
  children: PropTypes.node.isRequired,
  depth: PropTypes.number,
};

PageBase.defaultProps = {
  title: 'Formulario',
  navigation: 'Formulario',
  subtitle: null,
  depth: 2,
};

export default PageBase;
