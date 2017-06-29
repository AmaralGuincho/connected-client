import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

// Local Components
import Creator from './Creator.jsx';
import TableEditor from './TableEditor.jsx';

const CrudHub = props => (
  <div>

    <Switch>
      <Route
        path={`/${props.name}/create`}
        render={() => (
          <Creator
            api={props.api}
            title={props.label}
          />
          )}
      />
      <Route
        path={`/${props.name}`}
        render={() => (
          <TableEditor
            data={props.data}
            title={props.label}
            name={props.name}
          />
          )}
      />
    </Switch>

  </div>
);


CrudHub.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  api: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
};

export default CrudHub;
