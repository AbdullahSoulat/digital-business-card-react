import React from "react";
import profile from "../images/profile.jpeg"

export default function Info() {
    return (
        <div className="info">
            <img src={ profile } alt="Profile Image" className="profile-img" />
            <h1>Abdullah Bin Soulat</h1>
            <h3>Frontend Developer</h3>
            <p className="website"><a>slothsama.website</a></p>
            <div className="buttons">
                <button className="email-button">Email</button>
                <button className="linkedin-button">LinkedIn</button>
            </div>
        </div>
    )
}