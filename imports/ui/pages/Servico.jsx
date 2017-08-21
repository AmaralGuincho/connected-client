import React from 'react'
import PropTypes from 'prop-types'
import { createContainer } from 'meteor/react-meteor-data'

/* Backend API structures */
import { api, schema } from '../../api/Servico'
import { api as FuncionariosApi } from '../../api/Funcionarios'

import SelectField from 'uniforms-material/SelectField'

/* Generate generic CRUD */
import SmartView from '../components/SmartView.jsx'

const Servico = props => {
  const { match, funcionarios } = props

  const listId = (collection) => collection.map(item => item._id)
  const listName = (id, collection) => {
    return collection.filter(item => item._id === id).map(item => (
      `${item.name} ${item.lastname}`
    ))[0]
  }

  return (
    <div>
      <SmartView
        title='Serviço'
        schema={schema}
        api={api}
        showProps={['name']}
        match={match}
      >
        <SelectField
          name='funcionario'
          allowedValues={listId(funcionarios)}
          transform={documentId => listName(documentId, funcionarios)}
        />

      </SmartView>
    </div>
  )
}

Servico.propTypes = {
  match: PropTypes.object,
  funcionarios: PropTypes.arrayOf(PropTypes.object)
}

export default createContainer(() => {
  return {
    funcionarios: FuncionariosApi.find({}).fetch()
  }
}, Servico)
