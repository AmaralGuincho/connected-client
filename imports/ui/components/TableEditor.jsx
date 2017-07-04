import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material-UI Imports
import {
  Table,
  TableBody,
  TableHeader,
  TableFooter,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import AddIcon from 'material-ui-icons/Add';
import { Button } from 'material-ui/Button';

// Global Styles
import globalStyles from '../styles.js';

// Local Components
import PageBase from './PageBase.jsx';


class TableEditor extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ])).isRequired,
    api: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
      PropTypes.func,
      PropTypes.bool,
    ])).isRequired,
  };

  state = {
    selectedRowDataId: null,
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

  contentId(userIndex) {
    const data = this.props.data;
    this.setState({
      selectedRowDataId: data[userIndex]._id,
    });
  }

  disableSelectedRow() {
    const api = this.props.api;
    const dataId = this.state.selectedRowDataId;
    api.update({ _id: dataId }, { enabled: false });
  }

  render() {
    return (
      <div>
        <Button
          fab
          zDepth={2}
          containerElement={<Link to={`/${this.props.name}/create`} />}
        >
          <AddIcon />
        </Button>

        <PageBase
          title={this.props.title}
          navigation={`${this.props.title}`}
          depth={2}
        >
          <Table
            selectable
            onRowSelection={selection => this.contentId(selection)}
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
                this.props.data.map((row, index) => {
                  if (row.enabled) {
                    return (
                      <TableRow id={index}>
                        <TableRowColumn>
                          {`${row.name} ${(row.lastname) ? row.lastname : ''}`}
                        </TableRowColumn>
                        <TableRowColumn>{row.phone}</TableRowColumn>
                        <TableRowColumn>{row.occupation}</TableRowColumn>
                      </TableRow>
                    );
                  }
                  return null;
                })
              }
            </TableBody>
            <TableFooter>
              <div style={globalStyles.clear}>
                <Button
                  label="Editar"
                  style={this.styles.editButton}
                  containerElement={
                    <Link to={`/${this.props.name}/update:id`} />
                  }
                />
                <Button
                  secondary
                  label="Deletar"
                  style={this.styles.editButton}
                  onTouchTap={this.disableSelectedRow}
                />
              </div>
            </TableFooter>
          </Table>
        </PageBase>
      </div>
    );
  }
}

export default TableEditor;
