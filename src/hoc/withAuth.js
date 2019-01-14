import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser } from '../store/actions'

export default (ChildComponent) => {
  class ComposedComponent extends Component {

    componentDidMount() {
      this.shouldNavigate()
    }

    componentDidUpdate() {
      this.shouldNavigate()
    }

    shouldNavigate() {
      if (localStorage.getItem('token') && !this.props.loggedIn) {
        this.props.fetchCurrentUser()
      }
      if (!this.props.auth) {
        this.props.history.push('/signup')
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth.authenticated }
  }

  return connect(mapStateToProps, {fetchCurrentUser})(ComposedComponent);
}


// this is a function (hoc)
// injecting another component, reusable functionality (i.e. authentication)
// !! IMPORTANT Line 26, must pass props from parent to child
