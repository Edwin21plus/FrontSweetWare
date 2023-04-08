import React, { useState, useEffect } from "react";

const CardPerson = (props) => {

  const [isEmployee, setIsEmployee] = useState(false);
  useEffect(() => {
    if(props.role)
      setIsEmployee(true);
  },[]);

  return (
    <div class="col-sm-12  col-md-5 col-lg-4 col-xl-3">
      <div class="text-center card-box h-100">
        <div class="member-card pt-2 pb-2">
          <div class="thumb-lg member-thumb mx-auto">
            <img
              src={props.img}
              class="rounded-circle img-thumbnail"
              alt="profile-image"
            />
          </div>
          <div class="card-body text-dark">
            <h3 className="card-title">{props.name}</h3>
            {isEmployee ? <p class="card-text">{props.role}</p> : null}
          </div>
          <p className="card-text text-secondary">
            {props.direccion + "\n" + props.email + "\n" + props.telefono}
          </p>
          <button className="btnDetails">Details</button>
        </div>
      </div>
    </div>
  );
};

export default CardPerson;
