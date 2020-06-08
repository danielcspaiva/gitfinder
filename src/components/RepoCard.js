import React from "react";
import { Link } from "react-router-dom";

export default function RepoCard({ repo }) {
  return (
    <div className="card-container card-repo">
      <Link to={`/${repo.owner.login}/${repo.name}`}>
        <div>
          <img src={repo.owner.avatar_url} alt="profile" />
        </div>
        <div className="card-info">
          <div className="column">
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
