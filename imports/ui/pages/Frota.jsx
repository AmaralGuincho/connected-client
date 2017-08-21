import React from 'react'
import PropTypes from 'prop-types'

/* Backend API structures */
import { api, schema } from '../../api/Frota'

/* Generate generic CRUD */
import SmartView from '../components/SmartView.jsx'

const Frota = props => {
  const { match } = props
  return (
    <div>
      <SmartView
        title='Frota'
        schema={schema}
        api={api}
        showProps={['plate', 'status', 'model']}
        match={match}
      />
    </div>
  )
}

Frota.propTypes = {
  match: PropTypes.object
}

export default Frota
