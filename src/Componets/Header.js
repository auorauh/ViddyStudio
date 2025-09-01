import React,{ useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { TiThMenu } from "react-icons/ti";
import whiteLogo from '../Assets/Artboard 11_1.png';
import { Link } from "react-router-dom";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
      const showMenuFunc = () => {
            setShowMenu(!showMenu);
    };
  return (
          <div className="HeaderBlurWrapper">
        <div className="Header">
          <HashLink to="/"><img alt="Viddy Logo" className="Logo" src={whiteLogo} /></HashLink>
          <div className="LeftHeader">
          <div className="HeaderLinks">
            <HashLink smooth to="/#About">ABOUT</HashLink>
            <HashLink smooth to="/#How">HOW IT WORKS</HashLink>
            <HashLink smooth to="/#Pricing">PRICING</HashLink>
          </div>
          <TiThMenu className="MenuIcon" onClick={showMenuFunc}/>
          </div>
        </div>
        {showMenu && (
            <div className="MenuOverlay">
            <Link className="MenuItem" to="/">Home</Link>
            <div className="MenuItem">CREATORS</div>
            <div className="MenuItem">TEAMS</div>
            <div className="MenuItem">COMMUNITY</div>
            <a
                className="AppBtn"
                href="https://app.viddystudio.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <b>Go To App</b>
            </a>
            </div>
        )}
      </div>
  );
}