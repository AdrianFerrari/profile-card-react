import twitter from "./icons/Twitter Icon.svg";
import facebook from "./icons/Facebook Icon.svg";
import instagram from "./icons/Instagram Icon.svg";
import github from "./icons/GitHub Icon.svg";
import "./Footer.css"


function Footer () {
    return (
        <div className="footer">
            <img src={twitter} alt="twitter icon"/>
            <img src={facebook} alt="facebook icon"/>
            <img src={instagram} alt="instagra icon"/>
            <img src={github} alt="github icon"/>
        </div>
    );
}

export default Footer;