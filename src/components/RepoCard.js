import React from "react";
import { GoRepoForked } from "react-icons/go";
import { FiStar } from "react-icons/fi";

export default function RepoCard({ repo }) {
  return (
    <div className="card-container card-repo">
        <div className="img-container">
          <img src={repo.owner.avatar_url} alt="profile" />
        </div>
        <div className="card-info">
          <div className="column">
            <h2>{repo.name}</h2>
            <p>{repo.description || "No description"}</p>
            <div className="repo-info">
              <div className="repo-data">
                <p>{repo.language || "No language"}</p>
                <FiStar size={10} color="#3D2992" />
                <p>{repo.stargazers_count}</p>
                <GoRepoForked size={10} color="#3D2992" />
                <p>{repo.forks}</p>
              </div>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">Check it on GitHub</a>
            </div>
          </div>
        </div>
    </div>
  );
}
