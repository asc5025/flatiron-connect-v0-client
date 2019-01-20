import React from 'react';
import { connect } from 'react-redux';
import { Segment, Grid, Comment, Header } from 'semantic-ui-react';
import { ActionCable } from 'react-actioncable-provider';
import withAuth from '../hoc/withAuth';
import ChatBox from '../components/ChatBox';
import ListPanel from '../components/ListPanel';
import { fetchConvos, activeConvo, actionCableMsg } from '../store/actions';
import Cable from '../components/Cable';

class MessageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchConvos()
  }

  handleMessages = (id, convo) => {
    this.props.activeConvo(convo)
  }

  handleReceivedConversation = response => {
    debugger
  };

  handleReceivedMessage = response => {
    this.props.actionCableMsg(response)
  };

  render() {
    if (!this.props.targetConvo) {
      return <div>Loading...</div>
    }
    if (!this.props.convos) {
      return <div>Loading...</div>
    }

    return (
      <Segment >
      <ActionCable channel={{ channel: 'ConversationsChannel' }} onReceived={this.handleReceivedConversation} />
        {this.props.convos.length ? (
            <Cable
              conversations={this.props.convos}
              handleReceivedMessage={this.handleReceivedMessage}
            />
          ) : null}
        <Grid container centered columns={2} divided >
          <Grid.Column width={6}>
            <ListPanel
              convos={this.props.convos}
              currentUser={this.props.currentUser}
              handleMessages={this.handleMessages}
              handleReceivedMessage={this.handleReceivedMessage}
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Comment.Group size='small'>
              <Header as='h3' dividing>Chat Box</Header>
              <ChatBox targetConvo={this.props.targetConvo} conversations={this.props.convos}/>
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
    currentUser: state.auth.currentUser,
    targetConvo: state.convos.activeConvo
  }
}

export default connect(mapStateToProps, { fetchConvos, activeConvo, actionCableMsg })(withAuth(MessageContainer));
