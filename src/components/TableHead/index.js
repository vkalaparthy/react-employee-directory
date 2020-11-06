import React from "react";

function TableHead (props) {
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col" className="sort" onClick={props.handleSortById}> # </th>
        <th scope="col" key="firstName"> First Name 
          <span className="sort mp-4" onClick={props.handleFNascend}> &#9650; </span>
          <span className="sort mp-4" onClick={props.handleFNdesc}> &#9660; </span>
        </th>
        <th scope="col" key="lastName"> Last Name
          <span className="sort" onClick={props.handleLNascend}> &#9650; </span>
          <span className="sort" onClick={props.handleLNdesc}> &#9660; </span>
        </th>
        <th scope="col" key="role"> 
        <div>
            <div> 
              <select value={props.select} onChange={(event) => props.handleRoleSelect(event.target.value)}>
                {props.roles.map(role => (
                  <option value={role} key={role}>{role}</option>
                ))}
              </select>
            </div>
          </div>
        </th>
      </tr>
    </thead>
  );
}

export default TableHead;