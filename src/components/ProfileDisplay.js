import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = (state) => {

  const { profileReducer } = state;
  var profile = {};
  if(profileReducer.data)
    profile = profileReducer.data;

  return { profile }
}

const ProfileDisplay = connect(
  mapStateToProps
)(Profile);

export default ProfileDisplay;