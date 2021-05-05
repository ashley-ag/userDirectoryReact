import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function TableHead(props) {
  return (
    <thead>
    <tr>
      <th>Picture</th>
      <th>First Name</th>
      <th onClick={props.sortLastName}>Last Name</th>
      <th>Location</th>
      <th>Email</th>
      <th>Cell Phone</th>
    </tr>
    </thead>
  );
}

export default TableHead;
