import React from "react";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link to="/">
      <nav>
        <h1>GitFinder</h1>
        <FiGithub size={25} color="#3D2992" />
      </nav>
    </Link>
  );
}
