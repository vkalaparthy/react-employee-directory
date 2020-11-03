import React from "react";
import "./style.css";

function EmployeesTable(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col" key="firstName">
            <span className="sort" onClick={() => props.sortByFirstName()}> First Name </span>
          </th>
          <th scope="col" key="lastName">
            <span className="sort" onClick={() => props.sortByLastName()}> Last Name </span>
          </th>
          <th scope="col" key="role">Role</th>
          {/* <th scope="col" key="phone">Phone</th>
          <th scope="col" key="email">Email</th> */}
        </tr>
      </thead>
      <tbody>
        {props.employees.map(emp => (
          <tr key={emp.id}>
          {/* <th scope="row" key={emp.id} onClick={() => props.showOnly(emp.id)}>{emp.id}</th> */}
          <th scope="row" className="index" key={emp.id} onClick={() => props.showCard(emp.id)}>{emp.id}</th>
          <td onClick={() => props.showCard(emp.id)}>{emp.firstName}</td>
          <td>{emp.lastName}</td>
          <td>{emp.role}</td>
          {/* <td>{emp.phoneNumber}</td>
          <td>{emp.email}</td> */}
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default EmployeesTable;