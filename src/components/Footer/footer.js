import React from 'react';
import './footer.css';

function Footer() {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-sm-12 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i> <br /></a> 
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i> </a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i>  </a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i> </a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i>  </a>
                        <a className="btn btn-social-icon btn-gmail" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Sahay Corporates</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className ="col-auto">
                    About Us
                </div>
                <div className ="col-auto">
                    Contact Us
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;