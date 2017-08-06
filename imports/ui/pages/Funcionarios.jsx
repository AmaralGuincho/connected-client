import React from 'react'
import PropTypes from 'prop-types'

/* Link Meteor Mongo Api with React */
import { createContainer } from 'meteor/react-meteor-data'

/* Backend API structures */
import { api, schema } from '../../api/Funcionarios'

/* Generate generic CRUD */
import SmartView from '../components/SmartView.jsx'

const Funcionarios = props => {
  const { funcionarios, match } = props
  const routeId = match.params.id || null

  return (
    <div>
      <SmartView
        title='Funcionários'
        schema={schema}
        data={funcionarios}
        api={api}
        updateId={routeId}
        route='/funcionarios'
        showProps={['name', 'lastname', 'occupation']}
        match={match}
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
