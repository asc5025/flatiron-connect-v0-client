import React from 'react';
import { Comment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendNewMessage } from '../store/actions';

class ChatBox extends React.Component {
  state = {
    message: ''
  }

  handleChange = event => this.setState({ message: event.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    const { targetConvo, currentUser } = this.props
    let rId;
    rId = (currentUser.id === targetConvo.sender_id ? targetConvo.recipient_id : targetConvo.sender_id)
    let values = {
      message: {
        content: this.state.message,
        sender_id: currentUser.id,
        recipient_id: rId,
        conversation_id: targetConvo.id
      }
    }
    if (this.state.message.length > 0) {
      this.props.sendNewMessage(targetConvo.id, values)
      this.setState({ message: '' })
    } else {
      alert('Please enter content')
    }
  }

  renderMessages = () => {
    const userConvo = this.props.conversations.find(c => c.id === this.props.targetConvo.id)
    if (userConvo){
      return userConvo.messages.map(m => {
        return (
          <Comment key={m.id}>
          <Comment.Avatar src={m.sender.img_url} />
          <Comment.Content>
          <Comment.Author as='a'>{m.sender.full_name}</Comment.Author>
          <Comment.Text>{m.content}</Comment.Text>
          </Comment.Content>
          </Comment>
        )
      })
    } else {
      return null
    }
  }

  render() {
    if (Object.keys(this.props.targetConvo).length === 0) {
      return <div> Select Someone</div>
    }
    return (
      <>
        {this.renderMessages()}
        <Form onSubmit={this.handleSubmit}>
          <Form.Input value={this.state.message} onChange={this.handleChange}/>
          <Button content='Send' icon='send' primary/>
        </Form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    // messages: state.convos.conversations.messages
  }
}
export default connect(mapStateToProps, {sendNewMessage })(ChatBox)
