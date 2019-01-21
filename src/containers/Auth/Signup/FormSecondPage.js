import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { Form, Button, Icon } from 'semantic-ui-react';
import { LabelInputField } from 'react-semantic-redux-form';
import '../Signin.css';

const FormSecondPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <Form onSubmit={handleSubmit} >
      <Field
        name="current_position"
        type="text"
        component={LabelInputField}
        label={{ content: <Icon color='blue' name='user' size='large' /> }}
        placeholder="Current Position"
      />
      <Field
        name="current_company"
        type="text"
        component={LabelInputField}
        label={{ content: <Icon color='blue' name='building' size='large' /> }}
        placeholder='Current Company'
      />
      <Field
        name="current_industry"
        type="text"
        component={LabelInputField}
        label={{ content: <Icon color='blue' name='industry' size='large' /> }}
        placeholder='Industry'
      />
      <Field
        name="img_url"
        type="text"
        component={LabelInputField}
        label={{ content: <Icon color='blue' name='image outline' size='large' /> }}
        placeholder='Image SRC'
      />
      <br/>
      <div>
        <Button size='small' content='Submit' type="submit" primary disabled={pristine || submitting} />
      </div>
      <br/>
      <div>
        <Button inverted size='mini' content='Back' icon='left arrow' type="button" className="previous" onClick={previousPage} />
      </div>
    </Form>
  )
}

export default reduxForm({
  form: 'signup', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FormSecondPage)
