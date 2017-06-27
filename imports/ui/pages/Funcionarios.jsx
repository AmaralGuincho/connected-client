import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Meteor React container API
import { createContainer } from 'meteor/react-meteor-data';

// Backend structure
import FuncionariosApi from '../../api/Funcionarios';

// Local Components
import Creator from '../components/Creator.jsx';

const Funcionarios = props => (
  <Creator api={FuncionariosApi} title="Funcionarios" />
);

export default createContainer(() => ({
  funcionarios: FuncionariosApi.find({}, { sort: { createdAt: -1 } }).fetch(),
}), Funcionarios);
