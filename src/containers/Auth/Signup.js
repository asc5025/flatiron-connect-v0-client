import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Signup extends React.Component {

  onSubmit = (formProps) => {
    let user = {
      user: formProps
    }
    this.props.signup(user, () => {
      this.props.history.push('/')
      // using callback to send user to feature route
      // given by react router Route (props.history)
    })
  }

  render() {
    const { handleSubmit } = this.props
    // handleSubmit given to us by reduxForm, as props

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
            <label>Email: </label>
            <Field
              name="email"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Password: </label>
            <Field
              name="password"
              type="password"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Full Name: </label>
            <Field
              name="full_name"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Current Position: </label>
            <Field
              name="current_position"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Current Company: </label>
            <Field
              name="current_company"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Industry: </label>
            <Field
              name="current_industry"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <fieldset>
            <label>Image Url: </label>
            <Field
              name="img_url"
              type="text"
              component="input"
              autoComplete="none"
            />
          </fieldset>
          <div>{this.props.errorMessage}</div>
          <button>Sign up!</button>
        </form>
        <div>
          <span>
            Have an Account?
            <span>  <Link to="/signin">Sign in</Link></span>
          </span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signup' })
)(Signup);

// options obj with reduxForm
// giving it a name of the form

// compose is a helper from redux
// allows us to apply multiple HOCs
