import React from "react";
import { useState } from "react";

const Body = ({ isValidCheck }) => {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");


const check = (e) => {

    isValidCheck(make, year)
    setMake("")
    setYear("")
}


  return (
    <div className="App">
      <label>Make:</label>
      <input type="text" name="make" value={make} onChange={(event) => setMake(event.target.value)} />
      <br />
      <label>Year:</label>
      <input type="text" name="year" value={year} onChange={(event) => setYear(event.target.value)} />
      <br />
      <button onClick={() => check()}>Validate</button>
    </div>
  );
};

export default Body;
