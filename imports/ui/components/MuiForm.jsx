import React, { Component } from 'react'
import PropTypes from 'prop-types'

/* React Router */
import { Redirect } from 'react-router-dom'

/* Uniforms Setup */
import AutoFields from 'uniforms-material/AutoFields'
import AutoForm from 'uniforms-material/AutoForm'
import SubmitField from 'uniforms-material/SubmitField'
import ErrorsField from 'uniforms-material/ErrorsField'

/* Material-UI Imports */
import Paper from 'material-ui/Paper'
import Snackbar from 'material-ui/Snackbar'

/* Stylish Stylesheet with Style */
import './BaseCard.css'

/* Form Submission method */

class MuiForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isSnackbarOpen: false,
      snackbarMessage: '',
      home: false,
      updateModel: {}
    }

    this.createDocument = this.createDocument.bind(this)
    this.updateDocument = this.updateDocument.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleRequestChange = this.handleRequestChange.bind(this)
  }

  componentDidMount () {
    const { updateId } = this.props

    if (updateId) {
      const { api } = this.props

      try {
        const updateModel = api.findOne({ _id: updateId })
        this.setState({
          updateModel
        })
      } catch (e) {
        console.error(e)

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

  createDocument (doc) {
    const { api } = this.props

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
      console.error(e)
      this.setState({
        snackbarMessage: 'Occoreu um erro!'
      })
    } finally {
      /* Show Snackbar feedback */
      this.setState(prevState => ({
        isSnackbarOpen: true
      }))
    }
  }

  updateDocument (doc) {
    const { api, updateId } = this.props

    /* Update an existing document */
    try {
      const updateValues = {
        updatedAt: new Date()
      }

      /* Since we may not want to update document _id property */
      const { _id, ...docWithoutId } = doc
      const formObject = Object.assign({}, docWithoutId, updateValues)

      /* Request Update */
      api.update({_id: updateId}, {$set: formObject})

      /* Ui Feedback */
      this.setState({
        snackbarMessage: 'Alteração Efetuada'
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
  }

  cleanUi (doc) {
    /* Create a Object with doc properties but with no values */
    const emptyDoc = Object.keys(doc).map(key => (
      { [key]: ' ' }
    )).reduce((col, item) => {
      return Object.assign(col, item)
    })
    this.setState({
      updateModel: emptyDoc
    })
  }

  handleSubmit (doc) {
    const { updateId } = this.props
    const { createDocument, updateDocument } = this

    /* Handle update request if exists one */
    if (updateId) {
      updateDocument(doc)
    } else {
      createDocument(doc)
    }
    this.setState({ home: true })
  }

  /* Actual  Form UI */
  render () {
    const { schema, title, updateId, homeUrl } = this.props
    const { isSnackbarOpen, snackbarMessage, updateModel } = this.state
    const { handleRequestChange } = this

    return (
      <div>
        <Paper zDepth={2} className='card'>
          <AutoForm
            schema={schema}
            model={updateModel}
            onSubmit={doc => this.handleSubmit(doc)}
          >
            <h1 className='form-title'>{title}</h1>

            <div className='form-inputs'>
              <AutoFields className='mui-input' />
            </div>

            <ErrorsField />

            <div className='form-actions'>
              <SubmitField
                primary
                label={updateId ? 'Alterar' : 'Salvar'}
              />
            </div>

          </AutoForm>

          {this.state.home && (
            <Redirect to={homeUrl} />
          )}

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
  updateId: PropTypes.string,
  homeUrl: PropTypes.string
}

MuiForm.defaultProps = {
  updateId: null
}

export default MuiForm
