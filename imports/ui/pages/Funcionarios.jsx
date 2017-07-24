import React from 'react'
import PropTypes from 'prop-types'

/* Link Meteor Mongo Api with React */
import { createContainer } from 'meteor/react-meteor-data'

import { api, schema } from '../../api/Funcionarios'

import MuiForm from '../components/MuiForm.jsx'
import SmartList from '../components/SmartList.jsx'

const Funcionarios = props => {
  const { funcionarios } = props

  return (
    <div>
      <SmartList
        data={funcionarios}
        title='Funcionários'
        masterProp={'name'}
        showProps={['name', 'occupation']}
      />
      <MuiForm schema={schema} api={api} title='Funcionários' />
    </div>
  )
}

Funcionarios.propTypes = {
  funcionarios: PropTypes.arrayOf(PropTypes.object)
}

export default createContainer(() => ({
  funcionarios: api.find({}, { sort: { createdAt: -1 } }).fetch()
}), Funcionarios)
