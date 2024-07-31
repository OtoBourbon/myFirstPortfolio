import './Navbar.css';
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Darktheme from './Darktheme';

function Navbar() {
    return(
       <div className="nav-div">
            <div className="nav-left">
                <a href="https://github.com/OtoBourbon" target="_blank"><VscGithubInverted /></a>
                <a href="https://www.linkedin.com/in/otosharvashidze/" target="_blank"><FaLinkedin /></a>
                <a href="https://www.instagram.com/otoexastris/" target="_blank"><FaInstagram /></a>
                <a href="https://x.com/OSharvashidze" target="_blank"><FaXTwitter /></a>
            </div>
            <Darktheme/>
            <div className="nav-right">
                <a href="">about me</a>
                <a href="">projects</a>
                <a href="">contect me</a>
            </div>

       </div>
    )
}

export default Navbar