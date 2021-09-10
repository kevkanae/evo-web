import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <Link to="/1992">1992</Link>
          </li>
          <li>
            <Link to="/1998">1998</Link>
          </li>
          <li>
            <Link to="/2003">2003</Link>
          </li>
          <li>
            <Link to="/2010">2010</Link>
          </li>
          <li>
            <Link to="/">2021</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MyNavbar;
