import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/ServicesPage/Services";
import Products from "./components/pages/ProductPage/Products";


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/product" component={Products} />
      </Switch>
      <Footer />
    </Router>
      
    </>
  );
}

export default App;
