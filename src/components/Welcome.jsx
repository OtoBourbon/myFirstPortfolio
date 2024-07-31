import "./Welcome.css"
import me from "../assets/me.png"

function Welcome() {
    return(
        <div className="welcome">
            <div className="welcome-txt">
                <h2>{`<HELLO WORLD/>`}</h2>
                <h3><span className="var">var</span> <span className="name">name</span> = <span className="value">"Oto"</span>;</h3>
                <h3><span className="var">let</span> <span className="name">age</span> = <span className="value">20</span>;</h3>
                <h3><span className="var">const</span> <span className="name">isMadridista</span> = <span className="value">true</span>;</h3>
                <div className="about-me">
                    <p>React developer by day, web designer by night, and a full-time coffee enthusiast. Studying Computer Science in Tbilisi while turning bugs into features and pixels into magic. When I’m not crafting clean code and pixel-perfect designs, I’m perfecting my coffee brewing skills—because why just debug when you can also make things look fabulous? With a passion for blending creativity and technology, I strive to make every project both functional and visually stunning. Let’s create something extraordinary and sprinkle a little magic into the digital world!</p>
                </div>
            </div>
            <div className="welcome-img">
                <img src={me} />
            </div>
        </div>
    )
}

export default Welcome