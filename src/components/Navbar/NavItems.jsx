import { NavLink } from "react-router-dom";

const NavItems = () => {
  const navlinks = ["home", "blogs"];
  return (
    <>
    
      {navlinks.map((link) => (
        <li key={link}>
          <NavLink
            to={`/${link}`}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                isPending ? "pending" : "",
                isActive ? "active" : "",
                isTransitioning ? "transitioning" : "",
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
