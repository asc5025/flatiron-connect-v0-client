import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout()
    this.props.clearId()
  }

  render() {
    return (
      <div>
        Sorry to see you go
      </div>
    )
  }
}


export default connect(null, actions)(Signout);
