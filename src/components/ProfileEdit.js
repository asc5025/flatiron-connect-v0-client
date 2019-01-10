import React from 'react';
import withAuth from '../hoc/withAuth';

class ProfileEdit extends React.Component {

  render() {
    return (
      <div>
        ProfileEdit
      </div>
    )
  }
}

export default withAuth(ProfileEdit);
