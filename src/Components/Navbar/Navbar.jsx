import React from "react";
import { Link } from "react-scroll/modules";
import "./Navbar.scss";
import Toggle from "./Toggle/Toggle";

const Navbar = () => {
  const handleClick = (event) => {
  
    const isClass = document.querySelector(".collapse").classList.contains("active")
  
  switch(isClass)
  {
    case true:
      document.querySelector(".navbar").classList.add("blur")
      document.querySelector(".collapse").classList.remove("active")
      break;
    case false:
      document.querySelector(".navbar").classList.remove("blur")
     
      document.querySelector(".collapse").classList.add("active")
      break;
      default:
  }
  }
  
  
  
 
  return (
    <>
      <div className="navbar blur">
        {/* <div className="nav-cnt"> */}
        <div className="nav-txt">Arman Patel</div>
        <div className="t-btn">
          <label for="check">
            <input type="checkbox" id="check"  onClick={handleClick}/>
            <span className="span"></span>
            <span className="span"></span>
            <span className="span"></span>
          </label>
        </div>
        <div className="collapse">
          <div className="nav-link">
            <ul>
              <Link
                spy={true}
                to="Home"
                smooth={true}
                activeClass="activeClass"
                style={{ cursor: "pointer" }}
              >
                <li>Home</li>
              </Link>
              <Link
                spy={true}
                to="Skills"
                smooth={true}
                activeClass="activeClass"
                style={{ cursor: "pointer" }}
              >
                <li>Skills</li>
              </Link>
              <Link
                spy={true}
                to="Projects"
                smooth={true}
                activeClass="activeClass"
                style={{ cursor: "pointer" }}
              >
                <li>Projects</li>
              </Link>
              <Link
                spy={true}
                to="Services"
                smooth={true}
                activeClass="activeClass"
                style={{ cursor: "pointer" }}
              >
                <li>Services</li>
              </Link>
            </ul>
            <Link
              spy={true}
              to="Contact"
              smooth={true}
              activeClass="activeClass"
              style={{ cursor: "pointer" }}
            >
              <button className="c-btn">Contact</button>
            </Link>
          </div>
        </div>
        <span className="n-line"></span>
      </div>
    </>
  );
};

export default Navbar;
