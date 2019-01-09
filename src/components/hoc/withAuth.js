import React, { Component } from 'react';
import { connect } from 'react-redux';

export default (ChildComponent) => {
  class ComposedComponent extends Component {

    componentDidMount() {
      this.shouldNavigate()
    }

    componentDidUpdate() {
      this.shouldNavigate()
    }

    shouldNavigate() {
      if (!this.props.auth) {
        this.props.history.push('/')
      }
    }

    render() {
      return <ChildComponent {...this.props} />
    }
  }

  const mapStateToProps = state => {
    return { auth: state.auth.authenticated }
  }

  return connect(mapStateToProps)(ComposedComponent);
}


// this is a function (hoc)
// injecting another component, reusable functionality (i.e. authentication)
// !! IMPORTANT Line 22, must pass props from parent to child
