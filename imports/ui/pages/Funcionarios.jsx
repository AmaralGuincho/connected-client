import React from 'react'
import PropTypes from 'prop-types'

import { AutoField } from 'uniforms/material-ui/AutoField'

/* Backend API structures */
import { api, schema } from '../../api/Funcionarios'

/* Generate generic CRUD */
import SmartView from '../components/SmartView.jsx'

const Funcionarios = props => {
  const { match } = props

  return (
    <div>
      <SmartView
        title='Funcionários'
        schema={schema}
        api={api}
        route='/funcionarios'
        showProps={['name', 'lastname', 'occupation']}
        match={match}
      />
    </div>
  )
}

Funcionarios.propTypes = {
  match: PropTypes.object
}

export default Funcionarios
