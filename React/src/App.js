import React, { useState } from "react";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Validation from "./component/Validation.js";
import Inventory from "./component/Inventory.js";
import CarsInDB from "./component/CarsInDB.js"

function App() {
  const [carsState, setCar] = useState(() => ({
    make: "",
    year: "",
    isValid: undefined,
  }));
  const [carsInDB, setCarsInDB] = useState(() =>CarsInDB )

  const isValidCheck = async (make, year) => {
    var check = await Validation({
      make: make,
      year: year,
      isValid: undefined,
    });
    if (check) {
      await setCar((prevState) => ({
        ...prevState,
        isValid: true
      }));
    }
  };

  return (
    <div class="text-center">
      <Header isValid={carsState.isValid} />
      <Body isValidCheck={isValidCheck} />
      <Inventory carsInDB={carsInDB} />
    </div>
  );
}

export default App;
