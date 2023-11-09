import { NavLink } from "react-router-dom";
import "../Navbar/NavItems.css"
const NavItems = () => {
const navlinks = [""]
  return (
    <>
    
      {navlinks.map((link) => (
        <li key={link}>
          <NavLink
            to={`/${link}`}
            className={({ isActive }) =>
              [
                isActive ? "custom" : "",
              ].join(" ")
            }
          >
            <p className="first-letter:uppercase">{link}</p>
          </NavLink>
        </li>
      ))}
    </>
  );
};

export default NavItems;
