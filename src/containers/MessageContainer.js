import React from 'react';
import { Image, List, Segment, Grid, Divider, Comment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
// import withAuth from '../hoc/withAuth';
import ChatBox from '../components/ChatBox';
// import MessageCard from '../components/MessageCard';
import { fetchConvos, fetchUsers, fetchMessages, activeConvo, fetchCurrentUser } from '../store/actions';

class MessageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchConvos()
    this.props.fetchUsers()
    this.props.fetchCurrentUser()
  }

  handleFetchMessages = id => {
    // this.props.activeConvo(id)
    // debugger
    const targetConvo = (Object.values(this.props.convo)).filter(c => c.recipient_id === id && c.sender_id === this.props.auth.currentUser.id)
    // debugger
    this.props.fetchMessages(targetConvo[0].id)
  }

  renderImage = (senderId, recipientId) => {
    const user1 = Object.values(this.props.users).filter(u => u.id === senderId)
    debugger
    const user2 = Object.values(this.props.users).filter(u => u.id === recipientId)
    debugger
    if (this.props.auth.currentUser.id === this.props.convo.sender_id) {
      return <Image avatar src={user2[0].img_url} />
    } else {
      return <Image avatar src={user1[0].img_url} />
    }
  }

  // renderCorrectImage = ()
  renderMessageCards = () => {
    const currentUser = this.props.auth.currentUser
    const authConvos = Object.values(this.props.convo).filter(c => (c.recipient_id === this.props.auth.currentUser.id) || (c.sender_id === this.props.auth.currentUser.id) )
    // debugger
    const correctConvos = authConvos.filter(c => c.messages.length > 0)
    // debugger
    // const targetIds = Object.values(correctConvos).map(c => c.recipient_id)
    // const users = Object.values(this.props.users)
    // const currentConvoUsers = users.filter(user => targetIds.includes(user.id))
    return correctConvos.map(convo => {
      debugger
      return (
        <List.Item key={convo.id} onClick={() => this.handleFetchMessages(convo.id)}>
          {this.renderImage(convo.sender_id, convo.recipient_id)}
          {/*<Image avatar src={ (currentUser.id === convo.sender_id) || (currentUser.id === convo.recipient_id) ? convo.sender.img_url : currentUser.img_url} />*/}
          <List.Content>
            <List.Header>hi</List.Header>
          </List.Content>
        </List.Item>
      )
    })
  }

  render() {
    if (!this.props.auth.currentUser) {
      return null
    }
    // if (!this.props.convo) {
    //   return null
    // }
    // const messages = Object.values(this.props.messages)

    return (
      <Segment placeholder>
        <Grid columns={2} relaxed='very' >
          <Grid.Column width={5}>
            <Header as='h3'>Messages</Header>
            <List animated verticalAlign='middle'>
              {this.renderMessageCards()}
            </List>
          </Grid.Column>
          <Divider vertical hidden />
          <Grid.Column width={11}>
            <Comment.Group>
              <Header as='h3'>Chat</Header>
              <ChatBox />
            </Comment.Group>
          </Grid.Column>

        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    convo: state.convo,
    messages: state.messages,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchUsers, fetchConvos, fetchMessages, activeConvo, fetchCurrentUser })(MessageContainer);


// return currentConvoUsers.map(user => {
//   return (
//     <List.Item key={user.id} onClick={() => this.handleFetchMessages(user.id)}>
//     <Image avatar src={ this.props.auth.currentUser.id !== user.id ? user.img_url : this.props.auth.currentUser.img_url} />
//     <List.Content>
//     <List.Header>{user.full_name}</List.Header>
//     </List.Content>
//     </List.Item>
//   )
// })
