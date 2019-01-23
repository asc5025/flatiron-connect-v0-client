import React from 'react';
import { Header, List, Image } from 'semantic-ui-react';
import './ListPanel.css'

const ListPanel = ({ convos, currentUser, handleMessages, messages, handleReceivedMessage }) => {

  const renderThumbnails = () => {
    if (!convos) {
      return
    }
    return convos.map(convo => {
      if (convo.recipient_id === currentUser.id ) {
        return (
          <List.Item
              className="list-user"
              key={convo.id}
              onClick={() => handleMessages(convo.id, convo)}>
            <Image avatar src={convo.sender.img_url} />
            <List.Content>
              <List.Header>{convo.sender.full_name}</List.Header>
            </List.Content>
          </List.Item>
        )
      } else {
        return (
          <List.Item
              className="list-user"
              key={convo.id}
              onClick={() => handleMessages(convo.id, convo)}>
            <Image avatar src={convo.recipient.img_url} />
            <List.Content>
              <List.Header>{convo.recipient.full_name}</List.Header>
            </List.Content>
          </List.Item>
        )
      }
    })
  }

  return (
    <>
      <Header as='h3'>Connects</Header>
      <List animated verticalAlign='middle' divided>
        {renderThumbnails()}
      </List>
    </>
  )
}


export default ListPanel;
