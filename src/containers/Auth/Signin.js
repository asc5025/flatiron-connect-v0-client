import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { reduxForm, Field } from 'redux-form';
import { Form, Button, Segment, Header, Icon } from 'semantic-ui-react';
import { LabelInputField } from 'react-semantic-redux-form';
import './Signin.css';
import authBg from '../../assets/images/Flatiron-School.jpg';

class Signin extends React.Component {

  onSubmit = (formProps) => {
    let user = {
      user: formProps
    }
    this.props.signin(user, () => {
      this.props.history.push('/')
      // using callback to send user to feature route
      // given by react router Route (props.history)
    })
  }

  render() {
    const { handleSubmit } = this.props
    // handleSubmit given to us by reduxForm, as props

    return (
      <>
        <img src={authBg} id="bg" alt="background"/>
        <Segment inverted className="form-segment">
          <Header as='h1' inverted className="auth-header">Flatiron Connect</Header>
          <Form inverted onSubmit={handleSubmit(this.onSubmit)} className="form">
            <Field
              name="email"
              type="text"
              label={{ content: <Icon color='blue' name='mail' size='large' /> }}
              component={LabelInputField}
              placeholder='Email'
              autoComplete="none"
            />
            <Field
              name="password"
              type="password"
              label={{ content: <Icon color='blue' name='lock' size='large' /> }}
              component={LabelInputField}
              placeholder='Password'
              autoComplete="none"
            />
            <div>{this.props.errorMessage}</div>
            <Form.Field
              control={Button} primary size='small'
              type="submit"
            >
              Sign in!
            </Form.Field>
            <span>Create an Account?<span>   <Link to="/signup">Sign up</Link></span></span>
          </Form>
        </Segment>
      </>
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
  reduxForm({ form: 'signin' })
)(Signin);

// options obj with reduxForm
// giving it a name of the form

// compose is a helper from redux
// allows us to apply multiple HOCs
