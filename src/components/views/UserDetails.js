import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import RepoCard from '../RepoCard';


export default function Details({ match }) {
  const [data, setData] = useState([]);
  const { user } = match.params;
  const baseUrl = `https://api.github.com/users/${user}/repos`;
  
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [baseUrl]);

  return (
    <div className="details">
      <Navbar />
      {data.map(repo => <RepoCard key={repo.id} repo={repo} />)}
      <Footer />
    </div>
  );
}
