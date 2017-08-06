import React from 'react'
import PropTypes from 'prop-types'

/* Link Meteor Mongo Api with React */
import { createContainer } from 'meteor/react-meteor-data'

import { api, schema } from '../../api/Clientes'

import MuiForm from '../components/MuiForm.jsx'
import SmartList from '../components/SmartList.jsx'

const Funcionarios = props => {
  const { clientes, match } = props
  const routeId = match.params.id || null

  return (
    <div>
      <SmartList
        title='Clientes'
        data={clientes}
        schema={schema}
        api={api}
        editRoute='/clientes'
        showProps={['name', 'lastname', 'car', 'plate']}
      />
      <MuiForm
        title='Clientes'
        schema={schema}
        api={api}
        updateId={routeId}
      />
    </div>
  )
}

Funcionarios.propTypes = {
  clientes: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object
}

Funcionarios.defaultProps = {
  match: null
}

export default createContainer(() => ({
  clientes: api.find({}, { sort: { createdAt: -1 } }).fetch()
}), Funcionarios)
