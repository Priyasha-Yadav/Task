
// Problem: Create a textarea that shows the number of characters typed in real time.


import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h2>📝 Type your heart out...</h2>
      <textarea
        rows="5"
        cols="40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
};

export default CharacterCounter;
