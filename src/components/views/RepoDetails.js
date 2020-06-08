import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import RepoCard from "../RepoCard";
import SyncLoader from "react-spinners/SyncLoader";

export default function RepoDetails({ match }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = match.params;
  const { repo } = match.params;
  const baseUrl = `https://api.github.com/repos/${user}/${repo}`;
  console.log(data);
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
      <div className="card-container">
        {data ? (
          <div className="repo-info">
            <h1>{data.name}</h1>
            <p>{data.owner.login}</p>
            <a href={data.html_url}>Checkit on GitHub</a>
          </div>
        ) : (
          <div className="loading-container">
            <SyncLoader size={30} color={"#3D2992"} loading={loading} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
