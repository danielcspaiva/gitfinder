import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function RepoDetails({ match }) {
  const [data, setData] = useState([]);
  const { user } = match.params;
  const { repo } = match.params;
  const baseUrl = `https://api.github.com/repos/${user}/${repo}`;

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="details">
      <Navbar />
      <div>
        <h1>{data.name}</h1>
      </div>
      <Footer />
    </div>
  );
}
