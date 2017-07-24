import React, { Component } from 'react'
import PropTypes from 'prop-types'

/* Uniforms Setup */
import AutoFields from 'uniforms-material/AutoFields'
import AutoForm from 'uniforms-material/AutoForm'
import SubmitField from 'uniforms-material/SubmitField'
import ErrorsField from 'uniforms-material/ErrorsField'

/* Material-UI Imports */
import Paper from 'material-ui/Paper'
import Snackbar from 'material-ui/Snackbar'

/* Stylish Stylesheet with Style */
import './MuiForm.css'

/* Form Submission method */

class MuiForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isSnackbarOpen: false,
      snackbarMessage: ''
    }

    this.submitForm = this.submitForm.bind(this)
    this.handleRequestChange = this.handleRequestChange.bind(this)
  }

  handleRequestChange (reason) {
    if (reason === 'clickaway' ||
      reason === 'timeout') {
      this.setState({
        isSnackbarOpen: false
      })
    }
  }

  submitForm (api, doc) {
    /* Default Security values */
    const defaultValues = {
      createdAt: new Date()
    }

    const formObject = Object.assign({}, doc, defaultValues)

    /* POST to api */
    try {
      api.insert(formObject)
      this.setState({
        snackbarMessage: 'Cadastro efetuado'
      })
    } catch (e) {
      this.setState({
        snackbarMessage: 'Occoreu um erro!'
      })
    } finally {
      this.setState(prevState => ({
        isSnackbarOpen: true
      }))
    }
  }

  /* Actual  Form UI */
  render () {
    const { schema, api, title } = this.props
    const { isSnackbarOpen, snackbarMessage } = this.state
    const { handleRequestChange } = this

    return (
      <div>
        <Paper zDepth={2} className='card'>
          <AutoForm
            schema={schema}
            onSubmit={doc => this.submitForm(api, doc)}
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

          <Snackbar
            open={isSnackbarOpen}
            message={snackbarMessage}
            autoHideDuration={4000}
            onRequestClose={reason => handleRequestChange(reason)}
          />
        </Paper>
      </div>
    )
  }
}

MuiForm.propTypes = {
  schema: PropTypes.object,
  api: PropTypes.object,
  title: PropTypes.string
}

export default MuiForm
