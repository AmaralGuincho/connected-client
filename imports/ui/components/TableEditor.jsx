import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableHeader,
  TableFooter,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';

import { RaisedButton } from 'material-ui';

import globalStyles from '../styles.js';

import PageBase from './PageBase.jsx';

class TableEditor extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.array,
  }

  state={

  }

  styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      margin: 5,
      float: 'right',
    },
  };

  logUser(userIndex) {
    const data = this.props.data;
    console.log(data[userIndex].name);
  }

  render() {
    return (
      <div>
        <FloatingActionButton
          style={this.styles.floatingActionButton}
          zDepth={2}
          containerElement={<Link to={`/${this.props.name}/create`} />}
        >
          <ContentAdd />
        </FloatingActionButton>

        <PageBase
          title={this.props.title}
          navigation={`${this.props.title}`}
          depth={2}
        >
          <Table
            selectable
            onRowSelection={selection => this.logUser(selection)}
          >
            <TableHeader
              displaySelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn>Nome</TableHeaderColumn>
                <TableHeaderColumn>Telefone</TableHeaderColumn>
                <TableHeaderColumn>Cargo</TableHeaderColumn>
                <TableHeaderColumn>Actions</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody
              deselectOnClickaway
              showRowHover
            >
              {
                this.props.data.map((row, index) => (
                  <TableRow id={index}>
                    <TableRowColumn>
                      {`${row.name} ${(row.lastname) ? row.lastname : ''}`}
                    </TableRowColumn>
                    <TableRowColumn>{row.phone}</TableRowColumn>
                    <TableRowColumn>{row.occupation}</TableRowColumn>
                  </TableRow>
                ))
              }
            </TableBody>
            <TableFooter>
              <div styles={globalStyles.clear}>
                <RaisedButton label="Editar" style={this.styles.editButton} />
                <RaisedButton label="Deletar" secondary style={this.styles.editButton} />
              </div>
            </TableFooter>
          </Table>
        </PageBase>
      </div>
    );
  }
}

export default TableEditor;
