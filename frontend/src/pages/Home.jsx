/* eslint-disable */
import React from "react";
// import Login from "../Login";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/authContext";
import { useContext } from "react";

// import bg from "../assets/bg.png";

export default function Home() {
  const { user, isconnected } = useContext(AuthContext);

  console.log(user);

  const userName = user ? user.name : "you";

  return (
    <div
      className="min-h-screen hero bg-base-200"
      // style="background-image: url(./assets/bg.png);"
    >
      {" "}
      <div className="text-center hero-content">
        <div className="max-w-md text-3xl font-bold">
          {isconnected ? <h1>Hello, {userName}!</h1> : <h1>Hello, guest!</h1>}
          <p className="py-6">
            If you have an interest in Astrology, Tarot, and bitching, well,
            you've come to the right place. Let's begin, shall we?
          </p>
          <NavLink to="/horoscope">
            <button className="w-10/12 btn btn-primary">
              Let's see your Horoscope
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
