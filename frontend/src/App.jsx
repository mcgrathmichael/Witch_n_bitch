import "./App.css";
import Login from "./Login";
// import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
// import { AuthContext } from "./Context/authContext";
import Horoscope from "./pages/Horoscope";
import Navbar from "./navbar";
import Tarot from "./pages/Tarot";
import Home from "./pages/Home";
import Notespg from "./pages/Notes";
import LoginForm from "./Login";

function App() {
  return (
    <div
      className="App "
      // style={{ backgroundImage: 'url("../src/assets/bg.png")' }}
    >
      <div className="">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/horoscope" element={<Horoscope />} />
          <Route path="/cards" element={<Tarot />} />
          <Route path="/notes" element={<Notespg />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
