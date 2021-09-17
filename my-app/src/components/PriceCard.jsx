import React from 'react';
import { Link } from 'react-router-dom';

function PriceCard(props){
    return (
    <>
        <div className="py-2 col-xl-4  col-md-10  text-center">
            <div class="card price-card">
              <div class="card-body">
                <h2 class="fw-bold card-title p-3">{props.title}</h2>
                <h1 class="fw-bold card-subtitle mb-2 text-dark">{props.price} ₹ (yearly)</h1>
                <div className="pt-4 pb-3 fs-4 card-text pcard-d">
                  <p>{props.week} a week</p>
                  <p>{props.time}</p>
                  <p>For age-{props.age}</p>
                </div>
                <div>
                  <Link to="/contact" className="mb-3 learning-btn btn btn-lg btn-outline-warning">Register Now</Link>
                </div>
              </div>
            </div>
          </div>
    </>
    );
}

export default PriceCard;