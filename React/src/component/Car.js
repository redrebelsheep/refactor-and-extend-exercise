import React from 'react';

const Car = ({car}) => {
  return (
    <tr>
      <th scope="row">{car.id}</th>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
    </tr>
  )
};

export default Car;
