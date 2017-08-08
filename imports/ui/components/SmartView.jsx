import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Route, Link } from 'react-router-dom'

import Fab from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

/* Smart CRUD components */
import MuiForm from './MuiForm.jsx'
import SmartList from './SmartList.jsx'

const fabStyle = {
  position: 'fixed',
  bottom: '3%',
  right: '3%',
  zIndex: '8'
}

class SmartView extends Component {
  constructor () {
    super()

    this.state = {
      query: null,
      updateId: null
    }

    this.renderSmartList = this.renderSmartList.bind(this)
    this.renderSmartForm = this.renderSmartForm.bind(this)
  }

  renderSmartList (route) {
    const { title, api, schema, showProps, match } = this.props
    const editRoute = `${match.url}/edit`

    return (
      <SmartList
        title={title}
        api={api}
        schema={schema}
        editRoute={editRoute}
        showProps={showProps}
      />
    )
  }

  renderSmartForm (updateId = null) {
    const { title, schema, api, match } = this.props

    return (
      <MuiForm
        title={title}
        schema={schema}
        api={api}
        updateId={updateId}
        homeUrl={match.url}
      />
    )
  }

  render () {
    const { url } = this.props.match
    const { renderSmartList, renderSmartForm } = this

    return (
      <div>
        <Route
          path={`${url}/view/:id?`}
          render={() => (renderSmartList())}
        />

        <Route
          path={`${url}/create`}
          render={() => (renderSmartForm())}
        />

        <Route
          path={`${url}/edit/:id`}
          render={({match}) => (renderSmartForm(match.params.id))}
        />

        <Route
          exact
          path={url}
          render={() => {
            return (
              <div>
                { renderSmartList() }
                <Fab
                  secondary
                  style={fabStyle}
                  zDepth={4}
                  containerElement={<Link to={`${url}/create`} />}
                >
                  <ContentAdd />
                </Fab>
              </div>
            )
          }}
        />

      </div>
    )
  }
}

SmartView.propTypes = {
  api: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired,
  showProps: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  match: PropTypes.object
}

export default SmartView
