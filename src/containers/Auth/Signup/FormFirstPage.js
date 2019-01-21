import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { Form, Button, Icon } from 'semantic-ui-react';
import { LabelInputField } from 'react-semantic-redux-form';
import '../Signin.css';


const FormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <Form inverted onSubmit={handleSubmit} >
      <Field
        name="full_name"
        type="text"
        placeholder='Full Name'
        label={{ content: <Icon color='blue' name='user circle outline' size='large' /> }}
        component={LabelInputField}
      />
      <Field
        name="email"
        type="email"
        placeholder='Email'
        label={{ content: <Icon color='blue' name='mail' size='large' /> }}
        component={LabelInputField}
      />
      <Field
        name="password"
        type="password"
        placeholder='Password'
        label={{ content: <Icon color='blue' name='lock' size='large' /> }}
        component={LabelInputField}
      />
      <br/>
      <Form.Field>
        <Button type="submit" primary size='small' className="next">
          Next
        </Button>
      </Form.Field>
    </Form>
  )
}

export default reduxForm({
  form: 'signup', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FormFirstPage)
