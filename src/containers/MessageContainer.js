import React from 'react';
import { Image, List, Segment, Grid, Divider, Comment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import withAuth from '../hoc/withAuth';
import ChatBox from '../components/ChatBox';
import ListPanel from '../components/ListPanel';
// import MessageCard from '../components/MessageCard';
import { fetchConvos, fetchUsers, fetchMessages, activeConvo, fetchCurrentUser } from '../store/actions';

class MessageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchConvos()
  }

  handleFetchMessages = id => {
    const targetConvo = (Object.values(this.props.convo)).filter(c => c.recipient_id === id && c.sender_id === this.props.currentUser.id)
    this.props.fetchMessages(targetConvo[0].id)
  }

  renderImage = (senderId, recipientId) => {
    const user1 = Object.values(this.props.users).filter(u => u.id === senderId)
    const user2 = Object.values(this.props.users).filter(u => u.id === recipientId)
    if (this.props.currentUser.id === this.props.convo.sender_id) {
      return <Image avatar src={user2[0].img_url} />
    } else {
      return <Image avatar src={user1[0].img_url} />
    }
  }

  renderMessageCards = () => {
    const authConvos = Object.values(this.props.convo).filter(c => (c.recipient_id === this.props.currentUser.id) || (c.sender_id === this.props.currentUser.id) )
    // const correctConvos = authConvos.filter(c => c.messages.length > 0)
    // const targetIds = Object.values(correctConvos).map(c => c.recipient_id)
    // const users = Object.values(this.props.users)
    // const currentConvoUsers = users.filter(user => targetIds.includes(user.id))
    return authConvos.map(convo => {
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
    if (!this.props.currentUser) {
      return <div>Loading...</div>
    }
    return (
      <Segment placeholder>
        <Grid columns={2} relaxed='very' >
          <Grid.Column width={5}>
            <ListPanel />
          </Grid.Column>
          <Divider vertical hidden />
          <Grid.Column width={11}>
            <Comment.Group>
              <ChatBox />
            </Comment.Group>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    convo: state.convo
  }
}

export default connect(mapStateToProps, { fetchUsers, fetchConvos, fetchMessages, activeConvo, fetchCurrentUser })(withAuth(MessageContainer));
