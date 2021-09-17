import React from "react";
import PriceCard from "./PriceCard";

function Plans() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="plans-div container-fluid">
        <div className="row plans-div mx-auto">
          <PriceCard 
              title="Phonics Lvl 1"
              price="9,000"
              week="Twice"
              time="Tue-Thur / Mon-Wed"
              age="3/4yrs"
          />
          <PriceCard 
              title="Phonics Lvl 2"
              price="10,000"
              week="Twice"
              time="Mon-Wed / Tue-Thur"
              age="4/5yrs"
          />
          <PriceCard 
              title="Grammer"
              price="8,000"
              week="Once"
              time="Saturdays"
              age="4+ yrs"
          />
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
}

export default Plans;
