import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import SignUp from "./Pages/Login/SignUp/SignUp";
import Login from "./Pages/Login/Login/Login";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<SignUp></SignUp>}></Route>
        {/* <Route></Route> */}
      </Routes>
    </div>
  );
}

export default App;
