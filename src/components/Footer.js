import React, { Component } from 'react'
import MyLocationIcon from '@material-ui/icons/MyLocation';
import CallIcon from '@material-ui/icons/Call';
import DraftsIcon from '@material-ui/icons/Drafts';
import "./Footer.css";

export const Footer = () => {
    return (
        <>
<footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <h5> About-us</h5>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"/>
                        <ul className="list-unstyled">
                            <li><a>Home</a></li>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"/>
                            <li><a>Solution</a></li>
                            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"/>
                            <li><a>Our offerings</a></li>
                            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"/>
                            <li><a>About Us</a></li>
                            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"/>
                            <li><a>Contact Us</a></li>
                        </ul>
                        </div>
                    <div className="col-md-6">
                    <h5> Contact Us</h5>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"/>
                        <ul className="list-unstyled">
                            <li><a> <DraftsIcon/>  info@Usteam.in</a></li>
                            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4"/>
                            <li><a><CallIcon/>  +917982570988</a></li>
                            <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4"/>
                            <li><a> <MyLocationIcon/> Location</a></li>  
                                                    
                        </ul>
                    </div>    
        </div>
    </div>
</footer>

        </>
    )
}
