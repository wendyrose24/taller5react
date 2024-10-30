import React from 'react';
import './ProfileCard.css';

function ProfileCard() {
  return (
    <div className="profile-card">
      <h2 className="profile-name">John Doe</h2>
      <p className="profile-description">
        Desarrollador web con experiencia en React y Node.js.
      </p>
    </div>
  );
}

export default ProfileCard;
