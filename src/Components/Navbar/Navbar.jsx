import React from "react";
import { Link } from "react-scroll/modules";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav-cnt">
          <div className="nav-txt">Arman Patel</div>

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
