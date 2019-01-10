import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import UsersContainer from '../containers/UsersContainer';
// import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import SignupForm from './Auth/Signup/SignupForm';
import Signout from './Auth/Signout';
import Messages from '../components/Messages';
import ProfileEdit from '../components/ProfileEdit';

class App extends React.Component {

  // componentDidMount() {
  //   if (this.props.auth) {
  //
  //   }
  // }

  render () {
    return (
      <div>
        <Header />
        <Route path="/" exact component={UsersContainer}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/users/edit/:id" component={ProfileEdit}/>
        <Route path="/signup" component={SignupForm} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
      </div>
    )
  }
}

export default App;
