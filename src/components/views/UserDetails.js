import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import RepoCard from "../RepoCard";
import SyncLoader from "react-spinners/SyncLoader";


export default function Details({ match }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = match.params;
  const baseUrl = `https://api.github.com/users/${user}/repos`;

  useEffect(() => {
    setLoading(true);
    axios
      .get(baseUrl)
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [baseUrl]);

  return (
    <div className="home">
      <Navbar />
      <div className="grid grid--details">
        {data.length ? data.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        )) : (
          <div className="loading-container">
            <SyncLoader size={30} color={"#3D2992"} loading={loading} />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
