import React from 'react';
import { Form, Field } from 'simple-react-form';
import DatePicker from 'simple-react-form-material-ui/lib/date-picker';
import Text from 'simple-react-form-material-ui/lib/text';

class PostsCreate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName="name" label="Name" type={Text} />
          <Field fieldName="date" label="A Date" type={DatePicker} />
        </Form>
        <p>
          My name is {this.state.name}
        </p>
      </div>
    );
  }
}

export default PostsCreate;
