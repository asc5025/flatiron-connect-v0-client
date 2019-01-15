import React from 'react';
import { Feed, } from 'semantic-ui-react';
import { connect } from 'react-redux';


class ChatBox extends React.Component {

  renderFeed = () => {

  }

  render() {
    // console.log(this.props);
    return (
      <Feed>
        {this.props.messages.map(mes => {
          return <p key={mes.id}>{mes.content}</p>
        })}
      </Feed>
    )
  }
}

const mapStateToProps = state => {
  return {
    convo: state.convo,
    auth: state.auth,
    users: state.users
  }
}
export default connect(mapStateToProps)(ChatBox)
