import React from 'react';
import withAuth from '../hoc/withAuth';
import { Modal, Form, Button, Icon, Header, Image, Message } from 'semantic-ui-react';
import { createConvo, activeConvo, sendMessage } from '../store/actions';
import { connect } from 'react-redux';

class MessageForm extends React.Component {
  state = {
    message: '',
    modalOpen: false,
    messageSent: false
  }

  handleOpen = (id) => {
    let convos = Object.values(this.props.convo)
    let active = convos.map(user => user.recipient_id).includes(id)
    // debugger
    if (active) {
      this.props.activeConvo(id)
      // debugger
    } else {
      this.props.createConvo(id)
    }

    this.setState({ modalOpen: true })
  }


  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.message);
    console.log(this.props);
    let values = {
      content: this.state.message,
      user_id: this.props.auth.currentUser.id
    }
    if (this.state.message.length > 0) {

      this.props.sendMessage(this.props.convo.activeConvo, values)
      this.setState({ message: '', messageSent: true })
      setTimeout(() => {
        this.setState({ modalOpen: false, messageSent: false })
      }, 650)
    } else {
      alert('Missing Text')
    }
  }

  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  render(){
    console.log(this.props.auth);
    console.log(this.props);
    const { id, img_url, full_name } = this.props.user
    // const { convoId } = this.props.convo
    return(
      <Modal
        closeIcon
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={
          <Button onClick={() => this.handleOpen(id)} primary><Icon name="comment alternate outline"/>Message</Button>}
      >
        <Header as='h3'><Image circular src={img_url}/>{full_name}</Header>
        <Modal.Content>
          <Form success error onSubmit={this.handleSubmit} >
            <Form.TextArea onChange={this.handleChange} label='Message' placeholder={`Send a message to ${full_name}`}/>
            {
              this.state.messageSent ? <Message success header="Message Sent" /> : null
            }
            <Form.Button primary>Send</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    convo: state.convo,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { createConvo, activeConvo, sendMessage })(MessageForm)
// export default connect(mapStateToProps, { createConvo, activeConvo })(withAuth(MessageForm))
