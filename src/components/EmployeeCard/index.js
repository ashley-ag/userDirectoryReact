import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function EmployeeCard(props) {
  return (
      <tr key={props.index}>
        <td>
            <img alt={props.name} src={props.image} width="50" />
        </td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.location}</td>
        <td>{props.email}</td>
        <td>{props.cell}</td>
      </tr>
  );
}

export default EmployeeCard;

