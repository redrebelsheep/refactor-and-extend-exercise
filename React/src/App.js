import React, { useState } from "react";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import Validation from "./component/Validation.js";

function App() {
  const [carsState, setCar] = useState(() => ({
    make: "",
    year: "",
    isValid: undefined,
  }));

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
    <div>
      <Header isValid={carsState.isValid} />
      <Body isValidCheck={isValidCheck} />
    </div>
  );
}

export default App;
