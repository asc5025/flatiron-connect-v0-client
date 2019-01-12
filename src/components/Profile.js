import React from 'react';
import { connect } from 'react-redux';
import { fetchCurrentUser, editProfile } from '../store/actions';
import ProfileForm from './ProfileForm'
import _ from 'lodash';
import { Container } from 'semantic-ui-react';


class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchCurrentUser()
  }

  onSubmit = formValues => {
    this.props.editProfile(this.props.user.id, formValues)
  }

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>
    }
    console.log(this.props);
    console.log(this.props.user.email);
    return (
      <Container>
        <h3>My Profile</h3>
        <div>
        <ProfileForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.user, 'full_name', 'email', 'img_url', 'current_position', 'current_company', 'current_industry')}
        />
        </div>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { fetchCurrentUser, editProfile })(Profile);
