import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UserCard from "../UserCard";
import RepoCard from '../RepoCard';

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchKind, setSearchKind] = useState("user");
  const repoBaseUrl = "https://api.github.com/search/repositories?q=";
  const userBaseUrl = "https://api.github.com/search/users?q=";
  const [searchUrl, setSearchUrl] = useState(userBaseUrl);

  useEffect(() => {
    const { cancel } = axios.CancelToken.source();
    searchKind === "user"
      ? setSearchUrl(userBaseUrl)
      : setSearchUrl(repoBaseUrl);
    const timeOutId = setTimeout(() => {
      axios
        .get(searchUrl + search)
        .then((data) => setData(data.data.items))
        .catch((err) => console.log(err));
    }, 500);
    return () => cancel("no longer latest query") || clearTimeout(timeOutId);
  }, [search, searchKind, searchUrl]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <div className="header">
        <Navbar />
        <div className="btn-container">
          <button
            onClick={() => setSearchKind("user")}
            className={searchKind === "user" ? "active" : "inactive"}
          >
            Users
          </button>
          <button
            onClick={() => setSearchKind("repo")}
            className={searchKind === "repo" ? "active" : "inactive"}
          >
            Repositories
          </button>
        </div>
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search"
          onChange={updateSearch}
        />
      </div>
      <div className="grid">
        {searchKind === "user"
          ? data.map((user) => <UserCard key={user.id} user={user} />)
          : data.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
      </div>
      <Footer />
    </div>
  );
}
