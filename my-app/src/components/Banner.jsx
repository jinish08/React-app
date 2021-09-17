import React from 'react';
import { Link } from 'react-router-dom';

function Banner(){
    return (
        <>
            <div className="banner">
                <div className="banner-content">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Jolly Phonics</h1>
                            <div className="b-c-desc">Learn Sounds With <span>Bansari Shah</span></div>
                            <div className="b-c-props">Sounds |  Formation  |  Blending  |  Segmentation  |  Tricky Words</div>
                            <Link to="/contact" className="learning-btn btn btn-lg btn-outline-warning">Register Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;