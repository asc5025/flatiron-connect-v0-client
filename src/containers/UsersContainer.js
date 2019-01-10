import React from 'react';
import withAuth from '../hoc/withAuth';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/actions';
import { Card } from "semantic-ui-react";
import UserCard from '../components/UserCard';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderList = () => {
    return Object.values(this.props.users).map(user => (
      <UserCard key={user.id} user={user} />
    ))
  }

  render() {
    return (
      <Card.Group itemsPerRow={4}>
        {this.renderList()}
      </Card.Group>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}


export default connect(mapStateToProps, { fetchUsers })(withAuth(UsersContainer));
