import React from "react";
import Direction from "./Direction";
import PDetails from "./PDetails";

function Contact() {
  return (
    <>
      <div className="container-fluid contact my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="text-center col-xl-6 py-4">
                <Direction />
              </div>
              <div className="text-center col-lg-6 py-4">
                <PDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Contact;
