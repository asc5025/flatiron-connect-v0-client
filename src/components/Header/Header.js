import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';


class Header extends React.Component {

  // componentDidMount() {
  //   this.props.fetchCurrentUser()
  // }

  renderLinks() {
    console.log(this.props);
    if (this.props.authenticated) {
      console.log(this.props);
      return (
        <div>
          <Link to="/messages">Messages</Link>
          <Link to="/profile">My Profile</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      )
    } else {
      return (
        null
        // <div>
        //   <Link to="/signin">Sign In</Link>
        // </div>
      )
    }
  }

  // renderAuthLinks = () => {
  //   if (this.props.authenticated && this.props.currentUser) {
  //     return <Link to="/">Home</Link>
  //   }
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Flatiron Connect</h3>
        <div className="header">
        { this.props.authenticated && <Link to="/">Home</Link> }
          <div>
            {this.renderLinks()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header);
