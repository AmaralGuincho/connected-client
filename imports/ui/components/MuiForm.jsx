import React from 'react'
import PropTypes from 'prop-types'

/* Uniforms Setup */
import AutoFields from 'uniforms-material/AutoFields'
import AutoForm from 'uniforms-material/AutoForm'
import SubmitField from 'uniforms-material/SubmitField'
import ErrorsField from 'uniforms-material/ErrorsField'

/* Material-UI Imports */
import Paper from 'material-ui/Paper'

import './MuiForm.css'

const MuiForm = (props) => {
  const { schema, onSubmit, title } = props

  return (
    <div>
      <Paper zDepth={2} className='card'>
        <AutoForm
          schema={schema}
          onSubmit={event => onSubmit(event)}
        >
          <h2 className='form-title'>{title}</h2>

          <ErrorsField />

          <div className='form-inputs'>
            <AutoFields className='mui-input' />
          </div>

          <div className='form-actions'>
            <SubmitField label='Salvar' primary />
          </div>

        </AutoForm>
      </Paper>
    </div>
  )
}

MuiForm.propTypes = {
  schema: PropTypes.object,
  onSubmit: PropTypes.func,
  title: PropTypes.string
}

export default MuiForm
