import React from "react";
import { Link } from "react-router-dom";

export default function UserCard({ user }) {
  return (
    <div className="card-container">
      <Link to={`/${user.login}`}>
        <div>
          <img src={user.avatar_url} alt="profile" />
        </div>
        <div className="card-info">
          <p>{user.login}</p>
        </div>
      </Link>
    </div>
  );
}
