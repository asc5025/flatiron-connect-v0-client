import React, { Component } from 'react'
import FormFirstPage from './FormFirstPage'
import FormSecondPage from './FormSecondPage'
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';


class SignupForm extends Component {

  state = {
    page: 1
  }

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

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    console.log(this.props);
    const { page } = this.state
    const { handleSubmit } = this.props
    return (
      <div>
        <fieldset>
        {page === 1 && <FormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <FormSecondPage
            previousPage={this.previousPage}
            onSubmit={handleSubmit(this.onSubmit)}
          />
        )}
        <br/>
        <div>
          <span>
            Have an Account?
            <span>  <Link to="/signin">Sign in</Link></span>
          </span>
        </div>
        </fieldset>
      </div>
    )
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(SignupForm);
