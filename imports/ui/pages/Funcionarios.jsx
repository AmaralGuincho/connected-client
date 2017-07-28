import React from 'react'
import PropTypes from 'prop-types'

/* Link Meteor Mongo Api with React */
import { createContainer } from 'meteor/react-meteor-data'

import { api, schema } from '../../api/Funcionarios'

import MuiForm from '../components/MuiForm.jsx'
import SmartList from '../components/SmartList.jsx'

const Funcionarios = props => {
  const { funcionarios, match } = props
  const routeId = match.params.id || null

  return (
    <div>
      <SmartList
        title='Funcionários'
        data={funcionarios}
        schema={schema}
        editRoute='/funcionarios'
        showProps={['name', 'lastname', 'occupation']}
      />
      <MuiForm
        title='Funcionários'
        schema={schema}
        api={api}
        updateId={routeId}
      />
    </div>
  )
}

Funcionarios.propTypes = {
  funcionarios: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object
}

Funcionarios.defaultProps = {
  match: null
}

export default createContainer(() => ({
  funcionarios: api.find({}, { sort: { createdAt: -1 } }).fetch()
}), Funcionarios)
