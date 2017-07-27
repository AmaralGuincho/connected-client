import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

/* Material-UI Imports */
import Paper from 'material-ui/Paper'
import {
  Table,
  TableBody,
  TableRow,
  TableHeader,
  TableHeaderColumn,
  TableRowColumn
} from 'material-ui/Table'
import RaisedButton from 'material-ui/RaisedButton'

import './BasicCard.css'

class SmartList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedRow: [],
      editButtonRoute: this.props.editRoute
    }

    this.generateDataHeaders = this.generateDataHeaders.bind(this)
    this.generateDataItems = this.generateDataItems.bind(this)
    this.handleEditRow = this.handleEditRow.bind(this)
    this._onRowSelection = this._onRowSelection.bind(this)
  }

  generateDataHeaders (schema, showProps) {
    const getHumanProps = (schema, computerProps) => {
      return computerProps.map(prop => (
        schema._schema[prop]['label']
      ))
    }

    const humanProps = getHumanProps(schema, showProps)

    return (
      humanProps.map((header, index) => (
        <TableHeaderColumn key={index}>
          <span key={index}> {header} </span>
        </TableHeaderColumn>
      ))
    )
  }

  generateDataItems (data, showProps) {
    return data.map((item, index) => (
      <TableRow key={`${index} ${item['id']}`}>
        {showProps.map(property => (
          <TableRowColumn key={item['_id']}>
            {item[property] || '--'}
          </TableRowColumn>
        ))}
      </TableRow>
    ))
  }

  handleEditRow (row) {
    const { editRoute, data } = this.props

    this.setState(prevState => ({
      editButtonRoute: `${editRoute}/${data[row]['_id']}`
    }))
  }

  render () {
    const { title, data, showProps, schema } = this.props
    const { editButtonRoute } = this.state
    const { generateDataHeaders, generateDataItems } = this

    return (
      <div>
        <Paper className='card'>
          <h1>{title}</h1>
          <Table
            height={'300px'}
            onRowSelection={this._onRowSelection}
          >
            <TableHeader displaySelectAll={false}>
              <TableRow>
                {generateDataHeaders(schema, showProps)}
              </TableRow>
            </TableHeader>
            <TableBody
              showRowHover
              ref={tableBody => { this.tableBody = tableBody }}
            >
              {generateDataItems(data, showProps)}
            </TableBody>
          </Table>
          <div className='form-actions'>
            <RaisedButton label='Edit' containerElement={
              <Link to={editButtonRoute} />
            }
            />
          </div>
        </Paper>
      </div>
    )
  }

  /* Fix for  MATERIAL-UI onRowSelection */
  _onRowSelection (rows) {
    this.setState({selectedRows: rows}, () => this.tableBody.setState({ selectedRows: rows }))

    this.handleEditRow(rows[0])
  }
}

SmartList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  showProps: PropTypes.arrayOf(PropTypes.string),
  schema: PropTypes.object,
  editRoute: PropTypes.string
}

export default SmartList