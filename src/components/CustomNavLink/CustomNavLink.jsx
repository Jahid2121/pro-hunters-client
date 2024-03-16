import { NavLink } from 'react-router-dom';

const CustomNavLink = ({to, children}) => {
    return (
        <NavLink className="hover:text-customOrange flex" to={to}
        style={({ isActive}) => ({
            color: isActive ? "orange" : "",
            fontWeight: isActive ? "bold" : "",
        })}
        >
            {children}
        </NavLink>
    );
};

export default CustomNavLink;