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
import './BasicCard.css'

/* Form Submission method */

class MuiForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isSnackbarOpen: false,
      snackbarMessage: '',
      updateModel: {}
    }

    this.submitForm = this.submitForm.bind(this)
    this.handleRequestChange = this.handleRequestChange.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const { updateId } = nextProps

    if (updateId) {
      const { api } = this.props

      try {
        const updateModel = api.findOne({ _id: nextProps.updateId })
        this.setState({
          updateModel
        })
      } catch (e) {
        console.log(e)

        this.setState({
          snackbarMessage: 'Occoreu um erro',
          isSnackbarOpen: true
        })
      }
    }
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
    const { updateId } = this.props

    if (updateId) {
      /* Update an existing document */
      try {
        const updateValues = {
          updatedAt: new Date()
        }

        /* Since we may not want to update document _id property */
        const {_id, ...docWithoutId} = doc

        const formObject = Object.assign({}, docWithoutId, updateValues)

        /* Request Update */
        api.update({_id: updateId}, {$set: formObject})

        /* Ui Feedback */
        this.setState({
          snackbarMessage: 'Alteração Efetuada!'
        })
      } catch (e) {
        this.setState({
          snackbarMessage: 'Ocorreu um erro!'
        })
      } finally {
        this.setState({
          isSnackbarOpen: true
        })
      }
    } else {
      /* Create a  Document */
      try {
        const defaultValues = {
          createdAt: new Date()
        }

        /* Create a object with ui document and defaultValues */
        const formObject = Object.assign({}, doc, defaultValues)

        /* Post New Document */
        api.insert(formObject)

        /* Ui Feedback */
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
  }

  /* Actual  Form UI */
  render () {
    const { schema, api, title, updateId } = this.props
    const { isSnackbarOpen, snackbarMessage, updateModel } = this.state
    const { handleRequestChange } = this

    return (
      <div>
        <Paper zDepth={2} className='card'>
          <AutoForm
            schema={schema}
            onSubmit={doc => this.submitForm(api, doc)}
            model={updateModel}
          >
            <h2 className='form-title'>{title}</h2>

            <ErrorsField />

            <div className='form-inputs'>
              <AutoFields className='mui-input' />
            </div>

            <div className='form-actions'>
              <SubmitField
                primary
                label={updateId ? 'Alterar' : 'Salvar'}
              />
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
  title: PropTypes.string,
  updateId: PropTypes.string
}

MuiForm.defaultProps = {
  updateId: null
}

export default MuiForm
