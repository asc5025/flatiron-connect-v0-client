import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

import Header from '../components/Header/Header';
import UsersContainer from '../containers/UsersContainer';
// import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import SignupForm from './Auth/Signup/SignupForm';
import Signout from './Auth/Signout';
import MessageContainer from './MessageContainer';
import Profile from '../components/Profile';

class App extends React.Component {

  // componentDidMount() {
  //   if (this.props.auth) {
  //
  //   }
  // }

  render () {
    return (
      <Container>
        <Header />
        <Route path="/signup" component={SignupForm} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
        <Route path="/" exact component={UsersContainer}/>
        <Route path="/messages" component={MessageContainer}/>
        <Route path="/profile" component={Profile}/>
      </Container>
    )
  }
}

export default App;
