import { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  const activeStyle: CSSProperties = {
    color: "white",
    fontWeight: "bolder",
    backgroundImage:
      "linear-gradient(to left bottom, #30df4e, #00e284, #00e3ae, #00e1cd, #33dee1)",
  };

  return (
    <>
      <nav className="sidebar">
        <NavLink to="/1992" className="logo">
          <span>R</span>
          <span>E</span>
          <span>W</span>
          <span>I</span>
          <span>N</span>
          <span>D</span>
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

        <NavLink activeStyle={activeStyle} to="/2020">
          2021
        </NavLink>
      </nav>
    </>
  );
};
export default MyNavbar;
