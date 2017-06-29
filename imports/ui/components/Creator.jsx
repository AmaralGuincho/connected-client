// Allow External SimpleSchema underscore properties on eslint
/* eslint no-underscore-dangle: ["error", { "allow": ["_c2", "_simpleSchema", "_schemaKeys"]}]*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'simple-react-form';
import { Link } from 'react-router-dom';

//  Material-UI Elements
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';

// Local Components
import PageBase from './PageBase.jsx';

class Creator extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    api: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
      PropTypes.func,
      PropTypes.bool,
    ])).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      dialog: {
        isOpen: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  styles = {
    buttons: {
      marginTop: 50,
      float: 'right',
    },
    saveButton: {
      marginLeft: 10,
    },
  }

  handleSubmit(event) {
    event.preventDefault();
    const { api } = this.props;
    const currentState = this.state;

    // Check if form have at least  1 field
    if (Object.keys(currentState).length > 1) {
      const formKeys = api._c2._simpleSchema._schemaKeys;

      const formValues = {};

      // Populate form values with every property thats required by api schema
      formKeys.forEach((item) => {
        if (Object.hasOwnProperty.call(currentState, item)) {
          formValues[item] = currentState[item];
        }
      });

      const securityValues = {
        enabled: true,
        createdAt: Date.now(),
      };

      // Merge Form values with default Security values
      const postValues = Object.assign(formValues, securityValues);

      api.insert(postValues);

      this.setState({
        dialog: {
          isOpen: true,
          message: 'O Cadastro foi realizado com sucesso!',
          title: 'Cadastro Efetuado',
        },
      });
    } else {
      this.setState({
        dialog: {
          isOpen: true,
          message: 'Preencha no mínimo um campo para poder realizar um cadstro',
          title: 'Oops',
        },
      });
    }
  }

  closeDialog = () => {
    this.setState({
      dialog: {
        isOpen: false,
      },
    });
  }

  clearField = () => {
    this.insertForm.reset();
  }

  render() {
    return (
      <PageBase
        title={this.props.title}
        subtitle="Cadastro"
        navigation={`${this.props.title} / Cadastro`}
        depth={2}
      >

        <Form
          collection={this.props.api}
          type="insert"
          onChange={changes => this.setState(changes)}
        />

        <div style={this.styles.buttons}>
          <RaisedButton
            label={'Cancelar'}
            containerElement={<Link to="/" />}
          />
          <RaisedButton
            primary
            label={'Cadastrar'}
            onTouchTap={this.handleSubmit}
            style={this.styles.saveButton}
          />
        </div>
        <Dialog
          title={this.state.dialog.title}
          open={this.state.dialog.isOpen}
          onRequestClose={this.closeDialog}
          actions={
            <div>
              <RaisedButton
                label={'Continuar Cadastrando'}
                onTouchTap={this.clearField}
              />
              <RaisedButton
                primary
                label={'Ok'}
                containerElement={<Link to="/" />}
                style={this.styles.saveButton}
              />
            </div>
          }
        >
          {this.state.dialog.message}
        </Dialog>
      </PageBase>
    );
  }
}

export default Creator;
