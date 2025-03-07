import React from "react";
import './ProfileSection.css';

const ProfileSection = () => {
  return (
    <div className="profile-section">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="profile-picture">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt="Profile" />
        </div>
        <div className="profile-info">
          <h3>Devesh</h3>
          <p>Email: deveshdr@gmail.com</p>
          <p>Joined: January 1, 2020</p>
          <p>Bio: The funny thing about life is that it's never so bad that it can't get worse</p>
        </div>
      </div>
      <div className="profile-actions">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default ProfileSection;