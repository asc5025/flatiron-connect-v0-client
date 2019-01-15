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
        Chat
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
