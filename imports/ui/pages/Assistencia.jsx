import React from 'react'
import PropTypes from 'prop-types'

import SmartView from '../components/SmartView'

import { api, schema } from '../../api/Assistencia'

const Assistencia = ({match}) => (
  <div>
    <SmartView
      title='Assistencia'
      schema={schema}
      api={api}
      showProps={['organizationNickname', 'businessmanCode', 'cgc']}
      match={match}
    />
  </div>
)

Assistencia.propTypes = {
  match: PropTypes.object // React Router Match
}

export default Assistencia
