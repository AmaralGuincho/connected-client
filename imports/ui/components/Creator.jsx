import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'simple-react-form';
import { Link } from 'react-router-dom';

//  Material-UI Elements
import RaisedButton from 'material-ui/RaisedButton';

// Local Components
import PageBase from './PageBase.jsx';

class Creator extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    api: PropTypes.shape.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};

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
    const rawValues = this.state;
    const securityValues = {
      createdAt: Date.now(),
    };

    const postValues = Object.assign(rawValues, securityValues);

    this.props.api.insert(postValues);
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
          logErrors
          onChange={changes => this.setState(changes)}
          onSuccess={docId => alert(`Cadastro efetuado id:${docId}`)}
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
      </PageBase>
    );
  }
}

export default Creator;
