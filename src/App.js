import React, { useEffect, useState }  from 'react';
import './App.scss';
import Currency from './Currency';

const API_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export const App = () => {
  const [data, setData] = useState([]);
  const [currentValue, setCurrentValue] = useState([]);
  const [totalAmount, setTotalAmount] = useState(1);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setData(data)
        setCurrentValue(data[0])
      })
  }, [])

  return (
    <div className="App">
      <h1 className="title">Convert</h1>
      <Currency
        currencyOption={data}
        setCurrentValue={setCurrentValue}
        setTotalAmount={setTotalAmount}
        totalAmount={totalAmount}
      />
      <div>=</div>
      <input
        className="converted converted_none"
        type="text"
        value={(totalAmount * currentValue.buy).toFixed(2)}
      />
      <select className="converted">
        <option>{currentValue.base_ccy}</option>
      </select>
    </div>
  );
}

export default App;
