import React, { PropTypes } from 'react';
import Row from './helpers/Row';
import Col from './helpers/Col';

const Profile = ({ profile }) => {
  return (
    <Row>

      <div className="col-md-offset-2 col-md-8 panel panel-default">
        <div className="panel-body">
          <Row>
            <Col cols="4">
              <Row>
                <img src={profile.avatar_url} alt={profile.name} style={{width: '100%', height: '100%'}} className="img-rounded"/>
              </Row>
              <Row>
                <Col cols="12">
                  <h3>
                    {profile.name} <br/>
                    <small>{profile.login}</small>
                  </h3>
                </Col>
                <hr />
                <Col cols="12"><a href={profile.html_url} target="_blank">{profile.html_url}</a></Col>
                <Col cols="12">{profile.location}</Col>
                <Col cols="12">{profile.email}</Col>
                <Col cols="12"><a href={profile.blog} target="_blank">{profile.blog}</a></Col>
                <Col cols="12">{profile.created_at}</Col>
              </Row>
              
            </Col>
            
            <Col cols="8">
              &nbsp;
            </Col>
            
          </Row>
        </div>
      </div>
      
    </Row>
  )
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired
}

export default Profile;