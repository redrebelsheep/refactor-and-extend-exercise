import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ValidationItem from "./ValidationItem";

const ValidationSettings = ({ validListDB, addToValidListDB }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showValidView, setShowValidView] = useState(false);
  const [validItem, setValidItem] = useState();
  const [make, setMake] = useState("");


  const showSubmitList = () => {
    setShowValidView(!showValidView);
  };
  
  const sumDataForAdd = (e) => {
    e.preventDefault();
    addToValidListDB(make, parseInt(startDate.getFullYear().toString()), parseInt(endDate.getFullYear().toString()))
  }
  
  const sumDataForDelete =(e)=>{
    e.preventDefault();
  }


  
  
  const showValationList = () => (
    <div>
    <select id="comboA" onChange={(event) => setValidItem(event.target.value)}>
    {validListDB.map((item) => (
        <ValidationItem item={item} />
      ))}
    </select>
    <button  class="btn btn-dark btn-sm" onClick={(e) => sumDataForDelete(e)}>
        Delete 
    </button>
    </div>
  );
  return (
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="inputPassword2" class="sr-only">
         Make
        </label>
        <input class="form-control" type="text" name="name" value={make}  onChange={(event) => setMake(event.target.value)}/>
      </div>
      <div class="form-group mb-2">
        <label for="staticEmail2" class="sr-only">
          Beginn Jahr
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showYearPicker
          dateFormat="yyyy"
          yearItemNumber={9}
        />
      </div>
      <div class="form-group mb-2">
        <label for="inputPassword2" class="sr-only">
          End Jahr
        </label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          showYearPicker
          dateFormat="yyyy"
          yearItemNumber={9}
        />
      </div>
      <button class="btn btn-dark" onClick={(e) => sumDataForAdd(e)}>
        Add Validation
      </button>
      <button
        type="button"
        class={showValidView ? "btn btn-success" : "btn btn-danger"}
        onClick={() => showSubmitList()}
      >
        {showValidView ? "+" : "-"}{" "}
      </button>
      {showValidView ? showValationList() : ""}
    </form>
  );
};

export default ValidationSettings;
