import { BrowserRouter as Router, Route } from "react-router-dom";
import NinetyEight from "./components/1998";
import MyNavbar from "./components/Navbar";
import NinetyTwo from "./components/1992";
import ZeroThree from "./components/2003";
import TwentyOne from "./components/2021";
import Ten from "./components/2010";
import "./styles/main.scss";

function App() {
  return (
    <>
      <Router>
        <MyNavbar />
        <Route path={"/"} exact component={TwentyOne} />
        <Route path={"/2010"} exact component={Ten} />
        <Route path={"/2003"} exact component={ZeroThree} />
        <Route path={"/1998"} exact component={NinetyEight} />
        <Route path={"/1992"} exact component={NinetyTwo} />
      </Router>
    </>
  );
}

export default App;
