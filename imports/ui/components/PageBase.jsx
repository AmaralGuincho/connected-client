import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const PageBase = (props) => {
  const { title, navigation } = props;

  return (
    <div>
      <span>{navigation}</span>

      <Paper>
        <h3>{title}</h3>

        <Divider />
        {props.children}

        <div style={globalStyles.clear} />

      </Paper>
    </div>
  );
};

PageBase.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.string,
  children: PropTypes.element,
};

export default PageBase;
