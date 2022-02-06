import React from "react";
import { useState } from "react";

const ValidationView = ({ isValidCheck, isValid }) => {
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [showAddVal, setshowAddVal] = useState(false);

  const check = (e) => {
    isValidCheck(make, year);
    setMake("");
    setYear("");
  };

  const showValidHeadline = (
    isValid === undefined ? <h2> Vehicle </h2> : // if 
    isValid ? <h2> Valid Vehicle </h2> : <h2> InValid Vehicle </h2> // else if 
  );
  const showValid = (isValid, name) => {
    if(isValid === undefined) {
      return <p class="text-dark">{name} </p>
    }else {
      return isValid ? <p class="text-success">{name} </p>   : <p class="text-danger">{name} </p>  
    }
  }

  return (
    <form>
      {showValidHeadline}
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">
        {showValid(isValid, "Mark:")}
        </label>
        <div class="col-sm-10">
          <input
            class="form-control"
            type="text"
            name="make"
            value={make}
            onChange={(event) => setMake(event.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label">
        {showValid(isValid, "Year:")}
        </label>
        <div class="col-sm-10">
          <input
            class="form-control"
            type="text"
            name="year"
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button type="button" class="btn btn-dark" onClick={() => check()}>
            Validate
          </button>
          <button type="button" class="btn btn-dark"> Submit</button>
          <button type="button" class="btn btn-dark">+</button>
        </div>
      </div>
    </form>
  );
};

export default ValidationView;
