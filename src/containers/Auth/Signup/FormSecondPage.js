import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const FormSecondPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="current_position"
        type="text"
        component={renderField}
        label="Current Position"
      />
      <Field
        name="current_company"
        type="text"
        component={renderField}
        label="Current Company"
      />
      <Field
        name="current_industry"
        type="text"
        component={renderField}
        label="Industry"
      />
      <Field
        name="img_url"
        type="text"
        component={renderField}
        label="Profile Pic (url)"
      />
      <br/>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signup', //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(FormSecondPage)
