import { NavLink } from "react-router-dom";
import "../DashBoardItems/NavDesign.css"
const DashBoardItems = () => {
  const navItems = ["Add Product","All Jobs", "My Jobs", "Applied Jobs"];
  return (
    <>
      {navItems.map((link) => (
          <NavLink key={link}
            to={`/dashboard/${link}`}
            className={({ isActive }) =>
             isActive ? "navItems" : ""
            }
          >
            {link}
          </NavLink>
          
      ))}
    </>
  );
};

export default DashBoardItems;
