import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:type/:id" element={<Detail />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
