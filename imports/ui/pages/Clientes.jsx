import React from 'react'
import PropTypes from 'prop-types'

/* Backend API structures */
import { api, schema } from '../../api/Clientes'

/* Generate generic CRUD */
import SmartView from '../components/SmartView.jsx'

const Clientes = props => {
  const { match } = props
  return (
    <div>
      <SmartView
        title='Clientes'
        schema={schema}
        api={api}
        showProps={['name', 'phone', 'car', 'plate']}
        match={match}
      />
    </div>
  )
}

Clientes.propTypes = {
  match: PropTypes.object
}

export default Clientes
