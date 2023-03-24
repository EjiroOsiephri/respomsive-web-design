import React from 'react'
import Logo from "./images/logo.svg"
import "./scss/footer.scss"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Location from "./images/icon-location.svg"
import Mail from "./images/icon-email.svg"
import Phone from "./images/icon-phone.svg"


const Overlap = () => {
    return (
        <div>
            <div className="overlap">
                <h1> Ready To Build Your Community?</h1>
                <button>Get Started For Free</button>
            </div>
            <div className="footer-container">
                <div className="footer">
                    <div className="about-me">
                        <h1> <img className='img-logo' src={Logo} /></h1>
                        <div className="location">
                            <img src={Location} alt="" />  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua
                        </div>
                        <div className="phone">
                            <img src={Phone} alt="" />  +1-543-123-4567
                        </div>
                        <div className="mail">
                            <img src={Mail} alt="" />  example@huddle.com
                        </div>
                    </div>
                    <div className="mytext-container">
                        <h3>About Us</h3>
                        <h3>What We Do</h3>
                        <h3>FAQ</h3>
                    </div>
                    <div className="contact-info">
                        <h3>Career</h3>
                        <h3>Blog</h3>
                        <h3>Contact Us</h3>
                    </div>
                    <div className="social-info">
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
                <h4 className='h4'> &copy; Copyright 2023 Huddle. All rights reserved.</h4>
            </div>
        </div>
    )
}

export default Overlap