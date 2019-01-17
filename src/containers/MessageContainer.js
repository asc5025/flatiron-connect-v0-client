import React from 'react';
import { Segment, Grid, Comment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import withAuth from '../hoc/withAuth';
import ChatBox from '../components/ChatBox';
import ListPanel from '../components/ListPanel';
// import MessageCard from '../components/MessageCard';
import { fetchConvos, activeConvo, fetchMessages } from '../store/actions';

class MessageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchConvos()
  }

  handleMessages = (id, convo) => {
    // if (!id) {
    //   return;
    // }
    // const targetConvo = this.props.convos.filter(c => c.id === id)
    //
    // const messages = targetConvo[0].messages
    //
    // return messages
    this.props.fetchMessages(id)

    this.props.activeConvo(convo)
  }

  render() {
    if (!this.props.currentUser) {
      return <div>Loading...</div>
    }
    if (!this.props.convos) {
      return <div>Loading...</div>
    }
    return (
      <Segment >
        <Grid container centered columns={2} divided >

            <Grid.Column width={6}>
              <ListPanel
                convos={this.props.convos}
                currentUser={this.props.currentUser}
                handleMessages={this.handleMessages}
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Comment.Group size='small'>
                <Header as='h3' dividing>Chat Box</Header>
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
    convos: Object.values(state.convos.conversations),
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { fetchConvos, activeConvo, fetchMessages })(withAuth(MessageContainer));
