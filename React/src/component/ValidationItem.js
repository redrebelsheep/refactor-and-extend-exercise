import React from "react";

const ValidationItem = ({ item }) => {
  return (
    <li class="list-group-item">
      {item.make} {item.yearBeginnLong} {item.yearEndLong}{" "}
    </li>
  );
};

export default ValidationItem;
