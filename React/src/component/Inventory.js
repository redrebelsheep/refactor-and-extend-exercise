import React from 'react';
import Car from './Car'

const Inventory = ({carsInDB}) => {
console.log(carsInDB);

  return( <div>
<table class="table">
<thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">make</th>
      <th scope="col">year</th>
    </tr>
  </thead>
  <tbody>
    {carsInDB.map(car => <Car car={car}/>)}

  </tbody>
</table>





  </div>);
};

export default Inventory;
