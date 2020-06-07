import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Card from '../Card';
import daniel from '../../daniel.json';


export default function Home() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  // const baseUrl = 'https://api.github.com/search/users\?q\=';
  console.log(data);

  useEffect(() => {
    setData([daniel]);
    // axios
    //   .get(baseUrl + search)
    //   .then((data) => setData(data.data.items))
    //   .catch((err) => console.log(err));
  }, [search, setSearch]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home">
      <div className="header">
        <Navbar />
        <input
          type="text"
          name="search"
          value={search}
          placeholder="Search"
          onChange={updateSearch}
        />
      </div>
      {data.map((user) => <Card key={user.id} user={user} />)}
      <Footer />
    </div>
  );
}
