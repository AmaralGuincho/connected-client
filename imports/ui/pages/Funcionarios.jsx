import React from 'react';
import PropTypes from 'prop-types';

// import { Link, Route, Switch } from 'react-router-dom';//

// Meteor React container API
import { createContainer } from 'meteor/react-meteor-data';

// Backend structure
import FuncionariosApi from '../../api/Funcionarios';

// Local Components
import CrudHub from '../components/CrudHub.jsx';

const Funcionarios = props => (
  <div>
    <CrudHub
      label="Funcionarios"
      name="funcionarios"
      api={FuncionariosApi}
      data={props.funcionarios}
    />
  </div>
);

Funcionarios.propTypes = {
  funcionarios: PropTypes.shape.isRequired,
};

export default createContainer(() => ({
  funcionarios: FuncionariosApi.find({}, { sort: { createdAt: -1 } }).fetch(),
}), Funcionarios);
