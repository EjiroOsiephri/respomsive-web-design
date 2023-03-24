import React from 'react'
import Users from "./images/illustration-mockups.svg"
import NavBar from "./NavBar"
import "./scss/Hero.scss"

const Hero = () => {
    return (
        <div className="mains-container">
            <NavBar />
            <div className="container">
                <div className="typography-container">
                    <h1>Build The Community Your Fans Will Love</h1>
                    <h2>Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
                        Create connections with your users as you engage in genuine discussion. </h2>
                    <button>Get Started For Free</button>
                </div>
                <div className="Hero-image">
                    <img src={Users} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero