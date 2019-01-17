import React from 'react';
import { Header, List, Image } from 'semantic-ui-react';

const ListPanel = ({ convos, currentUser, handleMessages, messages }) => {
  console.log("In ListPanel, props", messages);

  const renderThumbnails = () => {
    if (!convos) {
      return
    }
    return convos.map(convo => {
      if (convo.recipient_id === currentUser.id ) {
        return (
          <List.Item key={convo.id} onClick={() => handleMessages(convo.id, convo)}>
            <Image avatar src={convo.sender.img_url} />
            <List.Content>
              <List.Header>{convo.sender.full_name}</List.Header>
            </List.Content>
          </List.Item>
        )
      } else {
        return (
        <List.Item key={convo.id} onClick={() => handleMessages(convo.id, convo)}>
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
      <Header as='h3'>Messages</Header>
      <List animated verticalAlign='middle'>
        {renderThumbnails()}
      </List>
    </>
  )
}


export default ListPanel;
