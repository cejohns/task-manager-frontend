// pages/UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';
import User from '../components/User';

const UserProfile = () => {
  const { userId } = useParams(); // Get userId from the URL parameters

  return (
    <div>
      <h1>User Profile</h1>
      <User userId={userId} />
    </div>
  );
};

export default UserProfile;
