import React, { useState, useEffect } from "react";

const Another = () => {
  const [guesses, setGuesses] = useState(null);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [odd, setOdd] = useState(false);

  useEffect(() => {
    isOdd();
  }, [guesses]);

  const isOdd = () => {
    guesses % 2 !== 0 ? setOdd(true) : setOdd(false);
  };

  const fetchData = async () => {
    const response = await fetch(`https://api.agify.io/?name=${name}`);
    const data = await response.json();

    console.log(data);
    setData((curr) => [...curr, data]);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetchData();
    setGuesses(guesses + 1);
    setName('');
  };

  return (
    <div className="container">
      <div className="total-guesses">
        <p>Total Guesses: {!guesses ? "X" : guesses}</p>
        {odd ? <p>What an odd number of guesses!</p> : null}
      </div>
      <form action="#" onSubmit={onFormSubmit}>
        <div className="form-label">
          <label htmlFor="name">Please enter a name here:</label>
        </div>
        <div className="form-input">
          <input
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <input type="submit" />
        </div>
      </form>
      <div className="guesses">
        <p>All Guesses</p>
        <div className="guesses-list">
          <ul>
            {data.map((d, index) => {
              return (
                <li key={index}>
                  {d.name} - {d.age}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Another;
