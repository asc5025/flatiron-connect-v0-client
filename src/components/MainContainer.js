import React from 'react';
import withAuth from './hoc/withAuth';

class MainContainer extends React.Component {


  render() {
    return (
      <div>
        Main
      </div>
    )
  }
}



export default withAuth(MainContainer);
