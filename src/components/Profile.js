import React from 'react';
import { connect } from 'react-redux';
import { editProfile, fetchCurrentUser } from '../store/actions';
import ProfileForm from './ProfileForm'
import _ from 'lodash';
import { Segment, Image, Grid, Divider, Button, List } from 'semantic-ui-react';
import withAuth from '../hoc/withAuth';
import './Profile.css';
import history from '../history';

const fStyle = {
  color: '#1678c2',
  fontWeight: 'bold',
  fontSize: '1em',
  fontFamily: "'Montserrat', sans-serif"
}

class Profile extends React.Component {

  onSubmit = formValues => {
    this.props.editProfile(this.props.user.id, formValues)
  }

  render() {
    if (!this.props.user) {
      return <div>Loading...</div>
    }
    const { user } = this.props
    return (
      <Segment className='profile-main'>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <div className='profile-card'>
              <Image src={user.img_url} circular/>
            </div>
              <div className="profile-content">
              <List className="inner-div">
                <List.Item>
                  <List.Icon name="user"/>
                  <List.Content style={fStyle}>{user.current_position}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="building"/>
                  <List.Content style={fStyle}>{user.current_company}</List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="industry"/>
                  <List.Content style={fStyle}>{user.current_industry}</List.Content>
                </List.Item>
              </List>
              </div>
            <div className="back-btn">
              <Button onClick={() => history.push('/')}>Go Back</Button>
            </div>
          </Grid.Column>
          <Grid.Column>
            <ProfileForm
              onSubmit={this.onSubmit}
              initialValues={_.pick(user, 'full_name', 'email', 'img_url', 'current_position', 'current_company', 'current_industry')}
            />
          </Grid.Column>
        </Grid>
        <Divider vertical>Profile</Divider>
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps, { editProfile, fetchCurrentUser })(withAuth(Profile));
