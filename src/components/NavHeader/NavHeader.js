import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NavHeader.css';
import { Menu, Divider } from 'semantic-ui-react';


class NavHeader extends React.Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, {name}) => {
    if (name === 'Sign Out') {
      this.setState({ activeItem: 'Home' })
    } else {
      this.setState({ activeItem: name })
    }
  }

  renderLinks = () => {
    const { activeItem } = this.state
    if (this.props.token) {
      return (
        <>
          <Menu.Item as={Link} name='Messages' to="/messages" active={activeItem === 'Messages'} onClick={this.handleItemClick}/>
          <Menu.Item as={Link} name='Profile' to="/profile" active={activeItem === 'Profile'} onClick={this.handleItemClick}/>
          <Menu.Item as={Link} name='Sign Out' to="/signout" active={activeItem === 'Sign Out'} onClick={this.handleItemClick}/>
        </>
      )
    } else {
      return;
    }
  }

  render() {
    const { token } = this.props
    const { activeItem } = this.state
    return (
      <>
        <Menu secondary>
        { token &&
          <Menu.Item name='Home' as={Link} to="/" active={activeItem === 'Home'} onClick={this.handleItemClick}/>
        }
          <Menu.Menu position='right'>
            {this.renderLinks()}
          </Menu.Menu>
        </Menu>
        <Divider section />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(NavHeader);
