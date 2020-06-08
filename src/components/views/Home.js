import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Footer from "../Footer";
import UserCard from "../UserCard";
import RepoCard from "../RepoCard";
import SyncLoader from "react-spinners/SyncLoader";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [searchKind, setSearchKind] = useState("user");
  const repoBaseUrl = "https://api.github.com/search/repositories?q=";
  const userBaseUrl = "https://api.github.com/search/users?q=";
  const [searchUrl, setSearchUrl] = useState(userBaseUrl);
  const [loading, setLoading] = useState(false);
  // console.log(data);

  useEffect(() => {
    const { cancel } = axios.CancelToken.source();
    if (search === "") {
      setLoading(false);
      setData([]);
      return;
    }
    setLoading(true);
    const timeOutId = setTimeout(() => {
      axios
        .get(searchUrl + search)
        .then((data) => {
          setData(data.data.items);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, 500);
    return () => cancel("no longer latest query") || clearTimeout(timeOutId);
  }, [search, searchKind]);

  const handleSearchKind = (kind) => {
    setData([]);
    setSearchKind(kind);
    kind === "user" ? setSearchUrl(userBaseUrl) : setSearchUrl(repoBaseUrl);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <div className="header">
        <Navbar />
        <div className="btn-container">
          <button
            onClick={() => handleSearchKind("user")}
            className={searchKind === "user" ? "active" : "inactive"}
          >
            Users
          </button>
          <button
            onClick={() => handleSearchKind("repo")}
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
        {data.length ? (
          searchKind === "user" ? (
            data.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            data.map((repo) => <RepoCard key={repo.id} repo={repo} />)
          )
        ) : (
          <div className="loading-container">
            <SyncLoader size={30} color={"#3D2992"} loading={loading} />
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
