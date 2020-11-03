import React from "react";
import "./style.css";

function ShowCard(props) {
  console.log(props.emp[0].firstName);
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

    // <div className="modal fade" id="responseModal" tabIndex="-1" role="dialog" aria-labelledby="responseModalLabel" aria-hidden="true">
    // {/* <div className="modal" tabIndex="-1"> */}
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">{props.emp[0].firstName} {props.emp[0].lastName}</h5>
    //         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">
    //         <p>Modal body text goes here.</p>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ShowCard;