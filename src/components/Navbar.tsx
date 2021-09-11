import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  const activeStyle: CSSProperties = {
    color: "white",
    fontWeight: "bolder",
    backgroundColor: "lightgreen",
  };

  return (
    <>
      <nav className="sidebar">
        <NavLink to="/1992">
          LOGO
        </NavLink>
        <NavLink activeStyle={activeStyle} to="/1992">
          1992
        </NavLink>

        <NavLink activeStyle={activeStyle} to="/1998">
          1998
        </NavLink>

        <NavLink activeStyle={activeStyle} to="/2003">
          2003
        </NavLink>

        <NavLink activeStyle={activeStyle} to="/2010">
          2010
        </NavLink>

        <NavLink activeStyle={activeStyle} to="/">
          2021
        </NavLink>
      </nav>
    </>
  );
};
export default MyNavbar;
