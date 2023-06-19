import "./Style/App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignUp from "./LoginSignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/LoginSignUp" element={<LoginSignUp />}></Route>
          <Route
            path="/Checkout"
            element={
              <>
                <Header />
                <Checkout />
                <Footer />
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
