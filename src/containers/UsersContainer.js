import React from 'react';
import withAuth from '../hoc/withAuth';
import { connect } from 'react-redux';
import { fetchUsers } from '../store/actions';
import { Card } from "semantic-ui-react";
import UserCard from '../components/UserCard';
import Search from  '../components/Search';

class UsersContainer extends React.Component {
  state = {
    searchTerm: '',
    filters: {
      type: ''
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  onIndustryChange = (event) => {
    event.persist();
    this.setState({ filters: {...this.state.filters, type: event.target.value} })
  }

  handleFocus = (event) => {
    this.setState({ filters: { type: '' } })
  }

  handleClear = () => {
    this.setState({ searchTerm: '', filters: { type: '' }})
  }

  renderList = () => {
    const { searchTerm, filters: { type } } = this.state
    const { users, currentUser } = this.props
    const reduceUsers = Object.values(users).filter(u => u.id !== currentUser.id)
    const renderUsers = reduceUsers.filter(user => {
      if (type === '') {
        return user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || user.current_company.toLowerCase().includes(searchTerm.toLowerCase()) || user.current_industry.toLowerCase().includes(searchTerm.toLowerCase())
      } else {
        return (user.current_industry.toLowerCase().includes(type.toLowerCase()) && user.current_company.toLowerCase().includes(searchTerm.toLowerCase())) || (user.current_industry.toLowerCase().includes(type.toLowerCase()) && user.full_name.toLowerCase().includes(searchTerm.toLowerCase()))
      }
    })
    return renderUsers.map(user => (
      <UserCard key={user.id} user={user} />
    ))
  }

  render() {
    const industries = [...(new Set(Object.values(this.props.users).map(({current_industry}) => current_industry)))]
    return (
      <>
        <Search
          searchTerm={this.state.searchTerm}
          handleClear={this.handleClear}
          handleIndustryChange={this.onIndustryChange}
          search={this.handleChange}
          industries={industries}
          select={this.state.filters.type}
        />
        <Card.Group itemsPerRow={5}>
          {this.renderList()}
        </Card.Group>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps, { fetchUsers })(withAuth(UsersContainer));
