import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout()
    this.props.clearId()
    this.props.history.push('/signin')
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}


export default connect(null, actions)(Signout);
