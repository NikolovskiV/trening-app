import { Link, NavLink } from "react-router-dom";
import Logo from "../images/logo.png";
import { links } from "../data";
import { GoThreeBars } from "react-icons/go";
import { MdOutlineClose } from "react-icons/md";
import "./navbar.css";
import { useState } from "react";

function Navbar() {
  const [isNavbarShowing, setIsNavbarShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul
          className={`nav__links ${
            isNavbarShowing ? "show__nav" : "hide__nav"
          }`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  end
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => setIsNavbarShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-btn"
          onClick={() => setIsNavbarShowing((prev) => !prev)}
        >
          {isNavbarShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
