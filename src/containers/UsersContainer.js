import React from 'react';
import withAuth from '../hoc/withAuth';
import { connect } from 'react-redux';
import { fetchUsers, fetchConvos } from '../store/actions';
import { Card } from "semantic-ui-react";
import UserCard from '../components/UserCard';
import Search from  '../components/Search';

class UsersContainer extends React.Component {
  state = {
    searchTerm: '',
    filters: {
      type: 'all'
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
    this.props.fetchConvos()
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  onIndustryChange = (event) => {
    event.persist();
    this.setState({ filters: {...this.state.filters, type: event.target.value} })
  }

  handleClear = () => {
    this.setState({ searchTerm: '', filters: { type: 'all' }})
  }

  renderList = () => {
    const { searchTerm, filters: { type } } = this.state
    const users = Object.values(this.props.users).filter(user => {
      if (type === 'all') {
        return user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || user.current_company.toLowerCase().includes(searchTerm.toLowerCase()) || user.current_industry.toLowerCase().includes(searchTerm.toLowerCase())
      } else {
        return user.current_industry.toLowerCase().includes(type.toLowerCase()) && user.current_company.toLowerCase().includes(searchTerm.toLowerCase())
      }
    })
    return users.map(user => (
      <UserCard key={user.id} user={user} />
    ))
  }

  render() {
    // if (!this.props.currentUser) {
    //   return <div>Loading...</div>
    // }
    const industries = [...(new Set(Object.values(this.props.users).map(({current_industry}) => current_industry)))]
    return (
      <>
        <Search
          searchTerm={this.state.searchTerm}
          handleClear={this.handleClear}
          handleIndustryChange={this.onIndustryChange}
          search={this.handleChange}
          industries={industries}
        />
        <Card.Group itemsPerRow={4}>
          {this.renderList()}
        </Card.Group>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    // currentUser: state.auth.currentUser,
    users: state.users
  }
}


export default connect(mapStateToProps, { fetchUsers, fetchConvos })(withAuth(UsersContainer));
