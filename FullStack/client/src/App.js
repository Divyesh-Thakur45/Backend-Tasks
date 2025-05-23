import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import AllRoutes from "./AllRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navigation />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
