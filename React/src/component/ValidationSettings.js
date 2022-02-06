import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ValidListDB from "./ValidListDB";
import ValidationItem from "./ValidationItem";

const ValidationSettings = ({ validListDB }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showSubmitView, setShowSubmitView] = useState(false);
  const [name, setName] = useState("");

  const showSubmitList = () => {
    setShowSubmitView(!showSubmitView);
  };
  const showValationList = () => (
    <ul class="list-group">
      {validListDB.map((item) => (
        <ValidationItem item={item} />
      ))}
    </ul>
  );
  
  const sumData = () => {
    console.log(name);
    console.log(startDate.getFullYear().toString());
    console.log(endDate.getFullYear().toString());
}


  return (
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="inputPassword2" class="sr-only">
          Name
        </label>
        <input class="form-control" type="text" name="name" value={name}  onChange={(event) => setName(event.target.value)}/>
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
      <button tclass="btn btn-dark" class="btn btn-dark" onClick={sumData()}>
        Add Validation
      </button>
      <button
        type="button"
        class={showSubmitView ? "btn btn-success" : "btn btn-danger"}
        onClick={() => showSubmitList()}
      >
        {showSubmitView ? "+" : "-"}{" "}
      </button>
      {showSubmitView ? showValationList() : ""}
    </form>
  );
};

export default ValidationSettings;
