import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import axios from 'axios';


export default function Details({ match }) {
  const user = match.params.user;
  const [data, setData] = useState([]);
  const baseUrl = `https://api.github.com/users/${user}/repos`;
  console.log(data);

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [baseUrl]);

  return (
    <div className="details">
      <Navbar />
      <h1>Hello Details</h1>
      <Footer />
    </div>
  );
}
