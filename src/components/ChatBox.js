import React from 'react';
import { Comment, Form, Button, Header, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendNewMessage } from '../store/actions';
import './ChatBox.css'


const aStyle = {
  color: '#1678c2',
  fontFamily: "'Roboto', sans-serif",
  fontWeight: '100'
}

class ChatBox extends React.Component {
  state = { message: '' }

  componentDidMount() {
    if (this.refs.chatoutput != null) {
      return this.refs.chatoutput.scrollTop = this.refs.chatoutput.scrollHeight;
    }
  }

  componentDidUpdate() {
    if (this.refs.chatoutput != null) {
      return this.refs.chatoutput.scrollTop = this.refs.chatoutput.scrollHeight;
    }
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
          <Comment key={m.id} className="comment-msg" >
            <Comment.Avatar src={m.sender.img_url} className="img-msg"/>
            <Comment.Content>
              <Comment.Author style={aStyle}>{m.sender.full_name.split(' ').slice(0, -1).join(' ')}</Comment.Author>
              <Comment.Text>{m.content}</Comment.Text>
            </Comment.Content>
          </Comment>
        )
      })
    } else {
      return null
    }
  }

  renderHeader = () => {
    const { targetConvo, currentUser } = this.props
    if (targetConvo.recipient_id === currentUser.id) {
      return (
        <Header as='h3' dividing className="chat-header">
          <Image circular src={targetConvo.sender.img_url} />
          {targetConvo.sender.full_name}
        </Header>
      )
    } else {
      return (
        <Header as='h3' dividing className="chat-header">
          <Image circular src={targetConvo.recipient.img_url} />
          {targetConvo.recipient.full_name}
        </Header>
      )
    }
  }


  render() {
    const { targetConvo } = this.props
    if (Object.keys(targetConvo).length === 0) {
      return (
        <>
          <Header as='h3' dividing>Chat Box</Header>
          <div>Connect with Someone!</div>
        </>
      )
    }

    return (
      <>
        {this.renderHeader()}
        <div className="chatbox" ref='chatoutput'>
          {this.renderMessages()}
        </div>
        <Form onSubmit={this.handleSubmit} size='mini'>
          <Form.Group className="input-msg">
            <Form.Input value={this.state.message} onChange={this.handleChange} width={14}/>
            <Button content='Send' size='mini' primary/>
          </Form.Group>
        </Form>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, {sendNewMessage })(ChatBox)
