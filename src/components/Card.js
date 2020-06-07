import React from 'react';


export default function Card({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="profile" />
      <div className="user-info">
        <p>{user.login}</p>
        <p>{user.followers_url}</p>
        <p>{user.repos_url}</p>
        <p></p>
      </div>
    </div>
  );
}
