import React from 'react';

function Home() {
  return (
    <div>
      <a href='/movie'>
        <button>Movie</button>
      </a>
      <a href='/todo'>
        <button>Todo</button>
      </a>
      <a href='/coin'>
        <button>CoinTracker</button>
      </a>
    </div>);

}

export default Home;