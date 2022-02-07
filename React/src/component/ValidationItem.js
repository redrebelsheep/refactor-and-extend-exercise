import React from "react";

const ValidationItem = ({ item }) => {
  console.log(item);
  return (
    <option value={item}>{item.make} {item.yearBeginnLong} {item.yearEndLong}{" "}</option>
      
  );
};

export default ValidationItem;
