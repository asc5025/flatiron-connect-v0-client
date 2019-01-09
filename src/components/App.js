import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../components/Header/Header';
import MainContainer from './/MainContainer';
import Signup from './Auth/Signup';
import Signin from './Auth/Signin';
import Signout from './Auth/Signout';
import Messages from './Messages';
import ProfileEdit from './ProfileEdit';

class App extends React.Component {

  componentDidMount() {
    if (this.props.auth) {

    }
  }

  render () {
    return (
      <div>
        <Header />
        <Route path="/" exact component={MainContainer}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/users/edit/:id" component={ProfileEdit}/>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} />
      </div>
    )
  }
}

export default App;
