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
      item['active'] ? (
        <TableRow key={`${index} ${item['id']}`}>
          {showProps.map(property => (
            <TableRowColumn key={item['_id']}>
              {item[property] || '--'}
            </TableRowColumn>
          ))}
        </TableRow>
      ) : null
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

    /* Transform Json to Table */
    const dataItems = generateDataItems(data, showProps)
    const dataHeaders = generateDataHeaders(schema, showProps)

    return (
      <div>
        <Paper className='card' zDepth={2}>
          <h1 className='form-title'>{title}</h1>
          { data.length > 0 ? (
            <div>
              <Table
                height={'300px'}
                onRowSelection={this._onRowSelection}
              >
                <TableHeader displaySelectAll={false}>
                  <TableRow>
                    {dataHeaders}
                  </TableRow>
                </TableHeader>
                <TableBody
                  showRowHover
                  ref={tableBody => { this.tableBody = tableBody }}
                >
                  {dataItems}
                </TableBody>
              </Table>
              <div className='form-actions'>
                <RaisedButton primary label='Alterar' containerElement={
                  <Link to={editButtonRoute} />
                }
                />
              </div>
            </div>
          ) : (
            <h3 className='disabled'> Nenhum dado foi encontrado </h3>
          )}
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
