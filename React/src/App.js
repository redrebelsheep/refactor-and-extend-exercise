import React, { useState } from "react";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Validation from "./component/Validation.js";
import TableComponent from "./component/TableComponent.js";
import CarsInDB from "./component/CarsInDB.js";
import SubmitLogDB from "./component/SubmitLogDB.js";
import { Link } from "react-router-dom";


function App() {
  const [carsState, setCar] = useState(() => ({
    make: "",
    year: "",
    isValid: undefined,
  }));
  const [carsInDB, setCarsInDB] = useState(() => CarsInDB);
  const [submitLog, setSubmitLog] = useState(() => SubmitLogDB);


  const isValidCheck = async (make, year) => {
    var check = await Validation({
      make: make,
      year: year,
      isValid: undefined,
    });
    if (check) {
      await setCar((prevState) => ({
        ...prevState,
        isValid: true,
      }));
    }
  };

  return (
    <div>
     <Link to="/component/Body">Body</Link>
    
     <TableComponent sourceDb={CarsInDB}/>
     <TableComponent sourceDb={SubmitLogDB}/>

    </div>
  );
}

export default App;

//<Body isValidCheck={isValidCheck} isValid={carsState.isValid}>