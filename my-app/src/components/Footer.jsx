import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

function Footer() {
return (
<>
    <div class="container-fluid fixed-bottom">
        <footer class="d-flex flex-wrap justify-content-between align-items-center  my-2 ">
            <div class="col-md-4 d-flex justify-content-center align-items-center">
                <span class="ml-5 text-muted">&copy; 2021 Company, Inc</span>
            </div>

            <ul class="nav f-icons col-md-4 justify-content-center list-unstyled d-flex">
                <li>
                    <a className="w-icon" href="https://wa.me/919819559913?I%20want%20to%20inquire%20about" alt="whatsapp"><WhatsAppIcon  rel="noreferrer" target="_blank"/></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/bansari.shah.374" alt="facebook"><FacebookIcon  rel="noreferrer" target="_blank"/></a>
                </li>
                <li>
                    <a className="i-icon" href="https://www.instagram.com/bansari60/" alt="instagram"><InstagramIcon  rel="noreferrer" target="_blank"/></a>
                </li>
            </ul>
        </footer>
    </div>
</>
);
}

export default Footer;