import profileImage from "./images/profile-img.png";
import emailIcon from "./icons/Email.svg";
import linkedInIcon from "./icons/LinkedIn.svg";
import "./Info.css";

function Info() {
    return (
        <div className="info">
            <img className="profile-pic" src={profileImage} alt="Profile"/>
            <h1>Adrian Ferrari</h1>
            <h3>Frontend Developer</h3>
            <p>adrianferrari.website</p>
            <div className="info-buttons">
                <a className="email-btn" href="#">
                    <img src={emailIcon} alt="email icon"/>
                    <p>Email</p>
                </a>
                <a className="linkedin-btn" href="#">
                    <img src={linkedInIcon} alt="linkedin icon"/>
                    <p>LinkedIn</p>
                </a>
            </div>
        </div>
    );
}

export default Info;