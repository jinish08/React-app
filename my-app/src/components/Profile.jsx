import React from 'react';
import pic from "../images/profile-pic.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset:300,
    duration:900
});

function Profile(){
    return (
        <>
            <div className="description container-fluid">
                <div className="row">
                    <div className="col-10 my-5 mx-auto">
                        <div className="row">
                            <div data-aos="fade-right" className="profile-pic col-8 col-lg-5 mx-auto my-5 ml-8">
                            <img className="mx-auto" src={pic} alt="profile"></img>
                            </div>
                            <div data-aos="fade-left" className="desc-content mx-auto col-8 col-lg-5 py-5">
                                <h1>Bansari Shah</h1>
                                <p className="py-3">
                                    Bansari Shah is a Play-Group teacher at Kid's Caste Malad-East . Has a teaching exprerience of 10+ years . She is a certified Phonics , Grammer and Creative writing teacher . Teaches Phonics and Grammer from last 5 years. She has a B.com graduate degree from Mithibai college and done here schooling from Children's Academy .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;