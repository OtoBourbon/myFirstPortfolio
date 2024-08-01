import me from "../assets/me.png"
import "./Responsivenav.css"
import { HiOutlineBars4 } from "react-icons/hi2";
import { FiExternalLink } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import Darktheme from './Darktheme';



function Responsivenav() {
     const [isOpen, setIsOpen] = useState(false);
      
    const toggleMenu = () => {
       setIsOpen(!isOpen);
    };

    return(
        <div className="nav">
            <div className="nav-left">
                <img src={me}/>
            </div>
            <div className="nav-right">
                <button onClick={toggleMenu}><HiOutlineBars4 /></button>
            </div>
            { isOpen && (
                <>
                    <div className="navBurger">
                        <a href="https://github.com/OtoBourbon" target="_blank">GitHub <FiExternalLink className="link"/></a>
                        <a href="https://www.linkedin.com/in/otosharvashidze/" target="_blank">LinkedIn <FiExternalLink className="link"/></a>
                        <a href="https://www.instagram.com/otoexastris/" target="_blank">Instagram <FiExternalLink className="link"/></a>
                        <a href="https://x.com/OSharvashidze" target="_blank">Twitter <FiExternalLink className="link"/></a>
                        <Darktheme/>
                        <button onClick={() => setIsOpen(false)}><IoIosCloseCircle /></button>
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Responsivenav;