import React from 'react'
import {FaInstagram} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"



function Footer(){
    return(

    <div className = "socialMedia">
    <a href = "https://instagram.com/zahir_a1?utm_medium=copy_link"> <FaInstagram/> Follow us Instagram</a>
    <a href ="https://twitter.com/LatifJazim"><FaTwitter/> Stalk us on Twitter</a>
    <a href = "https://en-gb.facebook.com/"><FaFacebook/> FaceBook or Meta?</a>
    <a href ="https://www.linkedin.com"><FaLinkedin/> Look out for big business updates</a>
    <a href ="https://github.com/imcalled/BNTA-Capstone"><FaGithub/> To have access to the project find us on GitHub</a>
    </div>
    )
}


export default Footer;