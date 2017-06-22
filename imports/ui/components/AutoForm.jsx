import React, { Component } from 'react';

import { Form, Field } from 'simple-react-form';


class AutoForm extends Component {
  constuctor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return(
      <Form state={this.state} onChange={changes => this.setState(changes)}
    )
  }
}
