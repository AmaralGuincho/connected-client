import React from 'react';

// Meteor React container API
import { createContainer } from 'meteor/react-meteor-data';

// Backend structure
import FuncionariosApi from '../../api/Funcionarios';

// Local Components
import Creator from '../components/Creator.jsx';

const Funcionarios = () => (
  <Creator api={FuncionariosApi} title="Funcionarios" />
);

export default createContainer(() => ({
  funcionarios: FuncionariosApi.find({}, { sort: { createdAt: -1 } }).fetch,
}), Funcionarios);
