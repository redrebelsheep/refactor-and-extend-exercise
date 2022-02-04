import React from "react";
import { useState } from "react";

const Body = ({ isValidCheck }) => {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");


const check = (e) => {

    console.log(make);
    console.log(year);
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

//       <div className="App">
//         {this.state.isValid ? <h2>Valid Vehicle</h2> : <h2>Invalid Vehicle</h2>}
//         <label>Make:</label>
//         <input type="text" name="make" onChange={(event) => this.setState({ ...this.state, make: event.target.value })} />
//         <br />
//         <label>Year:</label>
//         <input type="text" name="year" onChange={(event) => this.setState({ ...this.state, year: event.target.value })} />
//         <br />
//         <button onClick={() => this.setState({ ...this.state, isValid: this.isValidCar({ make: this.state.make, year: this.state.year }) })}>Validate</button>
//       </div>
//     );
//   }
