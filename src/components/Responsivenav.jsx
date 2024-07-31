import me from "../assets/me.png"
import "./Responsivenav.css"
import { HiOutlineBars4 } from "react-icons/hi2";

function Responsivenav() {
    return(
        <div className="nav">
            <div className="nav-left">
                <img src={me}/>
            </div>
            <div className="nav-right">
                <button><HiOutlineBars4 /></button>
            </div>
        </div>
    )
}

export default Responsivenav;