import React from "react";
import "./style.css";

function ShowCard(props) {
  
  return (
    <div className="card">
      <div className="card-header">
        {props.emp[0].firstName}  {props.emp[0].lastName}
      </div>
      <div className="card-body">
        <h5 className="card-title">Phone Number: {props.emp[0].phoneNumber}</h5>
        <p className="card-text">EMAIL: {props.emp[0].email}  </p>
        <p>ROLE: {props.emp[0].role}</p>
        <button className="btn btn-secondary" onClick={() => props.closeCard()}>Close</button>
      </div>
    </div>
  )
}

export default ShowCard;