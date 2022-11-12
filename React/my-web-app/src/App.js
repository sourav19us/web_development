import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <din className="container">
        <NavBar />
      </din>
      <div className="container">
        <HomePage />
      </div>
      <div className="container">{/* <Footer /> */}</div>
    </>
  );
}

export default App;
