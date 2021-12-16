import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"



function Footer(){
    return(

    <div className = "socialMedia">
    <a href = "https://instagram.com/zahir_a1?utm_medium=copy_link"> <FaInstagram/></a>
    <a href ="https://twitter.com/LatifJazim"><FaTwitter/> </a>
    <a href = "https://en-gb.facebook.com/"><FaFacebook/> </a>
    <a href ="https://www.linkedin.com"><FaLinkedin/> </a>
    <a href ="https://github.com/imcalled/BNTA-Capstone"><FaGithub/> </a>
    </div>
    )
}


export default Footer;