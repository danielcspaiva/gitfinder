import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <Link to={`/${user.login}`}>
      <div className="user-card">
        <div>
          <img src={user.avatar_url} alt="profile" />
        </div>
        <div className="user-info">
          <p>{user.login}</p>
        </div>
      </div>
    </Link>
  );
}
