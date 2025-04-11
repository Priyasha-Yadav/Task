
// Problem: Given a list of names, implement a live search input that filters the list as the user types.

import React, { useState } from 'react';

const LiveSearch = () => {
  const names = ['Arya', 'Frodo', 'Luna', 'Harry', 'Bilbo', 'Hermione', 'Legolas'];
  const [query, setQuery] = useState('');

  const filtered = names.filter(name =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🔍 Find Your Character</h2>
      <input
        type="text"
        placeholder="Search names..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filtered.length ? (
          filtered.map((name, index) => <li key={index}>{name}</li>)
        ) : (
          <p>No match found 😞</p>
        )}
      </ul>
    </div>
  );
};

export default LiveSearch;
