import React from "react";
import "./style.css";
import TableBody from "../TableBody";
import TableHead from "../TableHead";

function EmployeesTable(props) {
  return (
    <table className="table">
      <TableHead 
        roles={props.roles}
        select={props.select}
        handleSortById={props.sortById}
        handleFNascend={props.sortByFirstNameAscend}
        handleFNdesc={props.sortByFirstNameDesc}
        handleLNascend={props.sortByLastNameAscend}
        handleLNdesc={props.sortByLastNameDesc}
        handleRoleSelect={props.showOnlyOfRole}
      />
      <TableBody 
        employees={props.employees}
        handleShowCard={props.showCard}
      />
    </table>
  )
}

export default EmployeesTable;