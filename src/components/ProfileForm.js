import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Form, Button } from 'semantic-ui-react';
import history from '../history';

class ProfileForm extends React.Component {

  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className= `field ${meta.error && meta.touched ? 'error' : '' }`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  }

  render() {
    console.log(this.props);
    return (
      <Container>
      <Form error onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="full_name" component={this.renderInput} label="Full Name" />
        <Field name="email" component={this.renderInput} label="Email" />
        <Field name="img_url" component={this.renderInput} label="Image Url" />
        <Field name="current_position" component={this.renderInput} label="Position" />
        <Field name="current_company" component={this.renderInput} label="Company" />
        <Field name="current_industry" component={this.renderInput} label="Industry" />
        <Button compact primary type='submit'>Submit to Edit</Button>
      </Form>
      <Button compact onClick={() => history.push('/')}>Go Back</Button>
      </Container>
    )
  }
}


const validate = (formValues) => {
  let errors = {}
  if (!formValues.full_name) {
    errors.full_name = 'Must enter a title'
  }
  if (!formValues.email) {
    errors.email = 'Must enter an email'
  }
  if (!formValues.img_url) {
    errors.img_url = 'Must enter an Image Url'
  }
  if (!formValues.current_position) {
    errors.current_position = 'Must enter a position'
  }
  if (!formValues.current_company) {
    errors.current_company = 'Must enter a company'
  }
  if (!formValues.current_industry) {
    errors.current_industry = 'Must enter an industry'
  }
  return errors
}

export default reduxForm({
  form: 'profileForm',
  validate
})(ProfileForm);
