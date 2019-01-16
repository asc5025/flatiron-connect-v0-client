import React from 'react';
import { Feed, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';


class ChatBox extends React.Component {

  renderFeed = () => {

  }

  render() {
    // console.log(this.props);
    return (
      <>
        <Header as='h3'>Chat Box</Header>
        <Feed>
        </Feed>
      </>
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
