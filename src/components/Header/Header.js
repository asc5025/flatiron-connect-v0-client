import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';


class Header extends React.Component {

  renderLinks() {
    if (this.props.token) {
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

  render() {
    return (
      <div>
        <h3>Flatiron Connect</h3>
        <div className="header">
        { this.props.token && <Link to="/">Home</Link> }
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
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Header);
