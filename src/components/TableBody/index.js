import React from "react";

function TableBody ( { employees, handleShowCard }) {
  return (
    <tbody>
      {employees.map(emp => (
        <tr key={emp.id} onClick={() => handleShowCard(emp.id)}>
          <th scope="row">{emp.id}</th>
          <td>{emp.firstName}</td>
          <td>{emp.lastName}</td>
          <td>{emp.role}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody;