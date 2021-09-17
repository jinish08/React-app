import React from "react";

function Scard(props) {
  return (
    <>
    <div className="scard col-xl-2 col-lg-3 col-md-4 col-sm-8 mx-auto my-5">
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Scard;
