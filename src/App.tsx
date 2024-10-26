import "./App.css";
import Footer from "./components/Footer";
import logo from "/logo.jpg";

function App() {
  return (
    <div>
      <img src={logo} className="logo" alt="Vite logo" />
      <Footer />
    </div>
  );
}

export default App;
