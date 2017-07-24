import React from 'react'
import PropTypes from 'prop-types'

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

import './BasicCard.css'

const SmartList = props => {
  const { title, data, showProps } = props

  const dataHeaders = showProps.map(header => (
    <TableHeaderColumn> {header} </TableHeaderColumn>
  ))

  const dataItems = data.map(item => (
    <TableRow hoverable>
      {showProps.map(property => (
        <TableRowColumn>{item[property]}</TableRowColumn>
      ))}
    </TableRow>
  ))

  return (
    <div>
      <Paper className='card'>
        <h1>{title}</h1>
        <Table
          fixedHeeader
          height={300}
        >
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow>
              {dataHeaders}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {dataItems}
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

SmartList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  showProps: PropTypes.arrayOf(PropTypes.string)
}

export default SmartList
