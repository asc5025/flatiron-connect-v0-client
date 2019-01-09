import React from 'react';
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
    console.log(this.props);
    const { handleSubmit } = this.props
    // handleSubmit given to us by reduxForm, as props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Full Name</label>
          <Field
            name="full_name"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Avatar</label>
          <Field
            name="avatar"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign up!</button>
      </form>
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
