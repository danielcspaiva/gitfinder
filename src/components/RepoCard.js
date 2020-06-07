import React from 'react';
import { Link } from "react-router-dom";

export default function RepoCard({ repo }) {
  return (
    <div>
      <Link to={`/${repo.owner.login}/${repo.name}`}>LINK TO REPO</Link>
    </div>
  );
}
