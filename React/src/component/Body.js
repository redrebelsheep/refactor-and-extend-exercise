import React from "react";
import { useState } from "react";

const Body = ({ isValidCheck,  isValid  }) => {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [showAddVal, setshowAddVal] = useState(false);


const check = (e) => {

    isValidCheck(make, year)
    setMake("")
    setYear("")
}


  return (

    <div className="App">
    {isValid ? <h2>Valid Vehicle</h2> : <h2>Invalid Vehicle</h2>}

      <label>Make:</label>
      <input type="text" name="make" value={make} onChange={(event) => setMake(event.target.value)} />
      <br />
      <label>Year:</label>
      <input type="text" name="year" value={year} onChange={(event) => setYear(event.target.value)} />
      <br />
      <button type="button" class="btn btn-dark" onClick={() => check()}>Validate</button>
    </div>
  );
};

export default Body;
