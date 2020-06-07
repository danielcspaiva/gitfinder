import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer>
      <h1>Desenvolvido por Daniel Paiva</h1>
      <a href="https://github.com/danielcspaiva" target="_blank" rel="noopener noreferrer">
        <FiGithub size={20} color="#3D2992" />
      </a>
      <a href="https://www.linkedin.com/in/danielcspaiva/" target="_blank" rel="noopener noreferrer">
        <FiLinkedin size={20} color="#3D2992" />
      </a>
    </footer>
  );
}
