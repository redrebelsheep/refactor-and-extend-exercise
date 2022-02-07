import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ValidationCheck from "./component/ValidationCheck.js";
import CarsInventoryDB from "./component/CarsInventoryDB.js";
import Home from "./component/Home.js";
import Header from "./component/Header.js";
import ValidationView from "./component/ValidationView.js"
import InventoryCarTable from "./component/InventoryCarTable.js"
import ValidationSettings from "./component/ValidationSettings.js"
import ValidListDB from "./component/ValidListDB";

function App() {
  const [carsState, setCar] = useState(() => ({
    make: "",
    year: "",
    isValid: undefined,
  }));
  const [carsInDB, setCarsInDB] = useState(() => CarsInventoryDB);
  const [validListDB, setValidListDB] = useState(() => ValidListDB);


  const isValidCheck = async (make, year) => {
    var check = await ValidationCheck({
      make: make,
      year: year,
      isValid: undefined,
    }, validListDB);
    if (check) {
      await setCar((prevState) => ({
        ...prevState,
        isValid: true,
      }));
    }else {
      await setCar((prevState) => ({
        ...prevState,
        isValid: false,
      }));
    }
  };

  const addToValidListDB = (make, yearBeginn, yearEnd) => {
    let id = validListDB.length+1
    let newItem = {id: id, make: make, yearBeginnLong: yearBeginn, yearEndLong: yearEnd}
    
    setValidListDB(validListDB.push(newItem))
  } 


  return (
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="validationView" element={<ValidationView isValidCheck={isValidCheck} isValid={carsState.isValid}/>} />
        <Route path="inventoryCarTable" element={<InventoryCarTable sourceDb={carsInDB} />} />
        <Route path="ValidationSettings" element={<ValidationSettings validListDB={ValidListDB} addToValidListDB={addToValidListDB} />} />

      </Routes>
    </BrowserRouter>
    </div>
    </div>
  );
}

export default App;


