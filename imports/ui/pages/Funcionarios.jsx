import React from 'react'
import PropTypes from 'prop-types'

import { createContainer } from 'meteor/react-meteor-data'
import SelectField from 'uniforms-material/SelectField'

/* Backend API structures */
import { api, schema } from '../../api/Funcionarios'
import { api as cargosApi } from '../../api/Cargos'

/* Generate generic CRUD */
import SmartView from '../components/SmartView.jsx'

const Funcionarios = ({match, cargos}) => {
  const cargoOptions = cargos.map(cargo => ({
    label: cargo.title,
    value: cargo._id
  }))

  return (
    <div>
      <SmartView
        title='Funcionários'
        schema={schema}
        api={api}
        route='/funcionarios'
        showProps={['name', 'lastname', 'occupation']}
        match={match}
      >
        <SelectField
          name='occupation'
          options={cargoOptions}
        />
      </SmartView>
    </div>
  )
}

Funcionarios.propTypes = {
  match: PropTypes.object,
  cargos: PropTypes.arrayOf(PropTypes.object)
}

/* Create a reactive container with data from cargoApi */
const funcionariosContainer = createContainer(() => ({
  cargos: cargosApi.find({}).fetch()
}), Funcionarios)

export default funcionariosContainer
