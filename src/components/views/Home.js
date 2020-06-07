import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import axios from "axios";


export default function Home() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState('');
  // eslint-disable-next-line no-useless-escape
  const baseUrl = 'https://api.github.com/search/users\?q\=';


  useEffect(() => {
    console.log(baseUrl + search)
    axios
      .get(baseUrl + search)
      .then((data) => console.log(data.data.items))
      .catch((err) => console.log(err));
  }, [search, setSearch]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <Navbar />
      <SearchBar search={search} updateSearch={updateSearch} />
      <h1>Home</h1>
      <Footer />
    </div>
  );
}
