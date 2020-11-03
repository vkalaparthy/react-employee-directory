import React from "react";
import "./style.css";

function EmployeesTable(props) {
  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="sort" onClick={() => props.sortById()}> # </th>
          <th scope="col" key="firstName"> First Name 
            <span className="sort mp-4" onClick={() => props.sortByFirstNameAscend()}> &#9650; </span>
            <span className="sort mp-4" onClick={() => props.sortByFirstNameDesc()}> &#9660; </span>
          </th>
          <th scope="col" key="lastName"> Last Name
            <span className="sort" onClick={() => props.sortByLastNameAscend()}> &#9650; </span>
            <span className="sort" onClick={() => props.sortByLastNameDesc()}> &#9660; </span>
          </th>
          <th scope="col" key="role"> 
          <div>
              <div> 
                <select onChange={(event) => props.showOnlyOfRole(event.target.value)}>
                  <option value="All" key="all" >All</option>
                  {props.roles.map(role => (
                    <option value={role} key={role}>{role}</option>
                  ))}
                </select>
              </div>
            </div>
          </th>
          {/* <th scope="col" key="phone">Phone</th>
          <th scope="col" key="email">Email</th> */}
        </tr>
      </thead>
      <tbody>
        {props.employees.map(emp => (
          <tr key={emp.id} onClick={() => props.showCard(emp.id)}>
          {/* <th scope="row" key={emp.id} onClick={() => props.showOnly(emp.id)}>{emp.id}</th> */}
          <th scope="row">{emp.id}</th>
          <td>{emp.firstName}</td>
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