import React from 'react';
import { useState, useEffect } from 'react';
/*
(1) 앱 접속 시, 로딩 메시지 노출
(2) 로딩 완료 후 데이터 뿌리기!
*/
function CoinTracker() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  //(1)
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then(res => res.json())
      .then(data => {
        //(2)
        setCoins(data);
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <h1>The Coins!💎X{coins.length}</h1>
      {loading ? (<strong>Loading...</strong>) :
        coins.map(({ id, name, symbol, quotes }) => {
          return <li key={id}>
            {name}({symbol}) : ${quotes.USD.price} USD
          </li>;
        })
      }

    </div>);
}


export default CoinTracker;