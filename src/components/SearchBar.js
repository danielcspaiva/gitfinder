import React from 'react';
import { PropTypes } from 'prop-types';


// eslint-disable-next-line react/prop-types
export default function SearchBar({ search, updateSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Search"
        onChange={updateSearch}
      />
    </div>
  );
}
