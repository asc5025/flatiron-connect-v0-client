import React from 'react';
import { Comment, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { sendNewMessage } from '../store/actions';

class ChatBox extends React.Component {
  state = {
    message: ''
  }
  // componentDidMount(){
  //
  // }

  handleChange = event => this.setState({ message: event.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    const { activeConvo, currentUser } = this.props
    let rId;
    rId = (currentUser.id === activeConvo.sender_id ? activeConvo.recipient_id : activeConvo.sender_id)
    let values = {
      message: {
        content: this.state.message,
        sender_id: currentUser.id,
        recipient_id: rId
      }
    }
    if (this.state.message.length > 0) {
      // this.props.sendMessage(values)
      this.props.sendNewMessage( activeConvo.id, values)
      this.setState({ message: '' })
    } else {
      alert('Please enter content')
    }
  }

  renderMessages = () => {
    console.log(this.props.messages);
    return this.props.messages.map(m => {
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
  }

  render() {
    if (!this.props.activeConvo) {
      return <div> Select Someone</div>
    }
    return (
      <>
        {this.renderMessages()}
        <Form onSubmit={this.handleSubmit}>
          <Form.Input onChange={this.handleChange}/>
          <Button content='Send' icon='send' primary/>
        </Form>
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    activeConvo: state.convos.activeConvo,
    currentUser: state.auth.currentUser,
    messages: Object.values(state.messages)
  }
}
export default connect(mapStateToProps, { sendNewMessage })(ChatBox)
