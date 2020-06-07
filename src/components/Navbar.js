import React from 'react';
import { FiGithub } from 'react-icons/fi';


export default function Navbar() {
  return (
    <nav>
      <h1>Github User Finder</h1>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <FiGithub size={20} color="#3D2992" />
      </a>
    </nav>
  );
}
