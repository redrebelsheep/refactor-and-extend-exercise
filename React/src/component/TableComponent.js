import React from "react";
import Car from "./Car";

const TableComponent = ({sourceDb}) => {
  console.log(sourceDb);

  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">make</th>
            <th scope="col">model</th>
            <th scope="col">year</th>
            <th scope="col">color</th>
          </tr>
        </thead>
        <tbody>
          {sourceDb.map((car) => (
            <Car car={car} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
