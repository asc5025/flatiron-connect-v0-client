import React from 'react';
import { Image, List } from 'semantic-ui-react';
import { connect } from 'react-redux';
import withAuth from '../hoc/withAuth';
// import MessageCard from '../components/MessageCard';
import { fetchConvos, fetchUsers } from '../store/actions';

class MessageContainer extends React.Component {
  componentDidMount() {
    this.props.fetchConvos()
    this.props.fetchUsers()
  }

  renderMessageCards = () => {
    const convoIds = (Object.values(this.props.convo)).map(c => c.recipient_id)
    const users = Object.values(this.props.users)
    const currentConvoUsers = users.filter(user => convoIds.includes(user.id))
    return currentConvoUsers.map(user => {
      return (
      <List.Item key={user.id}>
        <Image avatar src={user.img_url} />
        <List.Content>
          <List.Header>{user.full_name}</List.Header>
        </List.Content>
      </List.Item>
      )
    })
  }

  render() {
    if (!this.props.convo) {
      return;
    }
    return (
        <List animated verticalAlign='middle'>
          {this.renderMessageCards()}
        </List>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    convo: state.convo
  }
}

export default connect(mapStateToProps, { fetchUsers, fetchConvos })(withAuth(MessageContainer));
