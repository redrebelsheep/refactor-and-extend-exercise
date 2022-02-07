import React from "react";
import Car from "./Car";
import { Table } from 'react-bootstrap';

const InventoryCarTable = ({sourceDb}) => {
  console.log(sourceDb);

  return (
    <Table striped bordered hover>
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">make</th>
            <th scope="col">model</th>
            <th scope="col">year</th>
            <th scope="col">color</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        <tbody>
        {sourceDb.map((car) => (
            <Car car={car} />
          ))}
        </tbody>
        </Table>
   );
};

export default InventoryCarTable;
