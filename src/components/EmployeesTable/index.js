import React from "react";
import "./style.css";

function EmployeesTable(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col" >First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Role</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(emp => (
          <tr>
          <th scope="row">{emp.id}</th>
          <td>{emp.firstName}</td>
          <td>{emp.lastName}</td>
          <td>{emp.role}</td>
          <td>{emp.phoneNumber}</td>
          <td>{emp.email}</td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EmployeesTable;