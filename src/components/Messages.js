import React from 'react';
import withAuth from './hoc/withAuth'

class Messages extends React.Component {

  render() {
    return (
      <div>
        Messages
      </div>
    )
  }
}

export default withAuth(Messages);
