import React from "react";
// import Login from "../Login";
import { AuthContext } from "../Context/authContext";
import { useContext } from "react";
import bg from "../assets/bg.png";
import { NavLink } from "react-router-dom";
export default function Home() {
  // const { users, isconnected } = useContext(AuthContext);

  // if (!isconnected) {
  //   // If the user is not connected, display a loading message or something else
  //   return <div>Loading...</div>;
  // }
  // console.log(users);
  // frontend\src\assets\bg.png
  // const userName = users ? users.name : "guest";

  return (
    // {isconnected ? <h1>Hello, {userName}!</h1> : <h1>Hello, guest!</h1>}
    <div
      className="hero min-h-screen bg-base-200"
      // style="background-image: url(./assets/bg.png);"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            If you have an interest in Astrology, Tarot, and bitching, well,
            you've come to the right place. Let's begin, shall we?
          </p>
          <NavLink to="/horoscope">
            <button className="btn w-10/12 btn-primary">
              Let's see your Horoscope
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
