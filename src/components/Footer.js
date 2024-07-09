import React from "react";
import twitter from "../images/Twitter-Icon.svg";
import facebook from "../images/Facebook-Icon.svg";
import instagram from "../images/Instagram-Icon.svg";
import github from "../images/GitHub-Icon.svg";

export default function Footer() {
    return (
        <footer>
            <img src={twitter} alt="twitter logo"/>
            <img src={facebook} alt="facebook logo"/>
            <img src={instagram} alt="instagram logo"/>
            <img src={github} alt="github logo"/>
        </footer>
    )
}