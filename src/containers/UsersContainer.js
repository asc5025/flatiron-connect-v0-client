import React from 'react';
import withAuth from '../hoc/withAuth';
import { connect } from 'react-redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    console.log('In UsersContainer');
  }

  render() {
    return (
      <div>
        Main
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//
//   }
// }


export default connect(null)(withAuth(UsersContainer));
