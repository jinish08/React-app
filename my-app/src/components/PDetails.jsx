import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

function PDetails(){
    return (
        <>
            <div className="personal-d">
                <div className="pd-h">
                    <h1>Contact Us</h1>
                </div>
                <div className="pd-c">
                    <ul>
                        <li>
                            <span className="icon"> <LocationOnIcon fontSize="large" /> </span>
                            <span className="icon-p">Maharashtra Mumbai India</span>
                        </li>
                        <li>
                            <span className="icon"> <CallIcon fontSize="large" /> </span>
                            <span className="icon-p">+91 9819559913</span>
                        </li>
                        <li>
                            <span className="icon"> <EmailIcon fontSize="large" /> </span>
                            <span className="icon-p"><a href="mailto:bansarishah97@gmail.com">bansarishah97@gmail.com</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default PDetails;