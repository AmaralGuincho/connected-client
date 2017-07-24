import React from 'react'

/* Link Meteor Mongo Api with React */
import { createContainer } from 'meteor/react-meteor-data'

import { api, schema } from '../../api/Funcionarios'
import MuiForm from '../components/MuiForm.jsx'

const Funcionarios = () => (
  <div>
    <MuiForm schema={schema} api={api} title='Funcionários' />
  </div>
)

export default createContainer(() => ({
  funcionarios: api.find({}, { sort: { createdAt: -1 } }).fetch()
}), Funcionarios)
