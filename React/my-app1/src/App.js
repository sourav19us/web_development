import "./App.css";
import Navbar from "./components/Navbar.js";

import Header from "./components/head.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";

function App() {
  return (
    <div>
      {/* <nav classNameName="classNamenav">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div classNameName="classNamediv">
        <img classNameName="souravimg" src={logo} alt="laoding" />
        <h1 id="h1">
          <em>Sourav Kumar Saini</em>
        </h1>
      </div> */}
      <Navbar title="HOME" abouttitle="ABOUT" num={25} />
      {/* <Navbar /> */}

      <Header />
      <div className="container my-3">
        <TextForm />
      </div>
      <din className="container my-3">
        <About />
      </din>
    </div>
  );
}

export default App;
