import React from "react";
import { Link } from "react-router-dom";

export default function Card({ user }) {
  return (
    <div className="user-card">
      <Link to={`/${user.login}`}>
        <div>
          <img src={user.avatar_url} alt="profile" />
          <p>{user.login}</p>
        </div>
        <div className="user-info">
          {/* <p>Name: {repo.name}</p>
          <p>Description: {repo.description}</p>
          <p>Stars: {repo.stargazers_count}</p>
          <p>Language: {repo.language}</p>
          <p>Forks: {repo.forks}</p> */}
        </div>
      </Link>
    </div>
  );
}
