import React from 'react';

import { Modal, Form, Button, Icon, Header, Image, Message } from 'semantic-ui-react';
import { activeConvo, sendMessage } from '../store/actions';
import { connect } from 'react-redux';

class MessageForm extends React.Component {
  state = {
    message: '',
    modalOpen: false,
    messageSent: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleSubmit = (event, id) => {
    event.preventDefault()

    let values = {
      message: {
        content: this.state.message,
        sender_id: this.props.auth.currentUser.id,
        recipient_id: id
      }
    }

    if (this.state.message.length > 0) {
      this.props.sendMessage(values)
      this.setState({ message: '', messageSent: true })
      setTimeout(() => {
        this.setState({ modalOpen: false, messageSent: false })
      }, 450)
    } else {
      alert('Missing Text')
    }
  }

  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  render(){
    const { id, img_url, full_name } = this.props.user
    return(
      <Modal
        closeIcon
        open={this.state.modalOpen}
        onClose={this.handleClose}
        trigger={<Button onClick={this.handleOpen} primary><Icon name="comment alternate outline"/>Message</Button>}
      >
        <Header as='h3'><Image circular src={img_url}/>{full_name}</Header>
        <Modal.Content>
          <Form success error onSubmit={(event) => this.handleSubmit(event, id)} >
            <Form.TextArea onChange={this.handleChange} label='Message' placeholder={`Send a message to ${full_name}`}/>
            { this.state.messageSent ? <Message success header="Message Sent" /> : null }
            <Form.Button primary>Send</Form.Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { activeConvo, sendMessage })(MessageForm)
// export default connect(mapStateToProps, { createConvo, activeConvo })(withAuth(MessageForm))
