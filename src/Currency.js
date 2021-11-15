import React from 'react'
import './App.scss';

export const Currency = ({currencyOption, setCurrentValue, setTotalAmount, totalAmount}) => {
  
  const handleSelect = (event) => {
    const { value } = event.target;
    const data = currencyOption.find((item) => item.ccy === value);

    setCurrentValue(data);
    setTotalAmount(1);
  }

  const handleInput = (event) => {
    const { value } = event.target;

    if (value < 1) {
      setTotalAmount(1)
    } else {
      setTotalAmount(value);
    }
  }

  return (
    <div>
      <input
        type="number"
        className="input"
        value={totalAmount}
        onChange={event => handleInput(event)}
      />
      <select
        className="input"
        onChange={event => handleSelect(event)}>
        {currencyOption.map(option => (
          <option
            value={option.ccy} key={option.ccy}>{option.ccy}</option>
        ))}
      </select>
    </div>
  )
}

export default Currency
