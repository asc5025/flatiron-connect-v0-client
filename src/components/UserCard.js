import React from 'react';
import { Card, Image } from 'semantic-ui-react';

import MessageForm from '../containers/MessageForm'

const UserCard = ({ user }) => {
  return (
    <Card>
      <Image centered src={user.img_url} />
      <Card.Content>
        <Card.Header>{user.full_name}</Card.Header>
        <Card.Meta>{user.current_position}</Card.Meta>
        <Card.Meta><em>@ {user.current_company}</em></Card.Meta>
        <Card.Meta>{user.current_industry}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <MessageForm user={user}/>
      </Card.Content>
    </Card>
  )
}



export default UserCard;
