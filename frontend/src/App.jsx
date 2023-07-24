import "./App.css";

import { Route, Routes } from "react-router-dom";

import Register from "./Register";
import Horoscope from "./pages/Horoscope";
import Navbar from "./navbar";
import Tarot from "./pages/Tarot";
import Home from "./pages/Home";
import Notespg from "./pages/Notes";
import LoginForm from "./Login";

function App() {
  return (
    <div className="h-full App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/cards" element={<Tarot />} />
        <Route path="/notes" element={<Notespg />} />
      </Routes>
    </div>
  );
}

export default App;
