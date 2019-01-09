import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css'

class Header extends React.Component {

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to="/messages">Messages</Link>
          <Link to="/users/edit/:id">Edit Profile</Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      )
    } else {
      return (
        <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
        </div>
      )
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Flatiron Connect</h3>
        <div className="header">
          <Link to="/">Home</Link>
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

export default connect(mapStateToProps)(Header)
