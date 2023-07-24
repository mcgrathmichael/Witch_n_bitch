/* eslint-disable */
import { NavLink } from "react-router-dom";
import tarot from "./assets/icons/tarot-card.png";
import astrology from "./assets/icons/astrology.png";
import notebook from "./assets/icons/notebook.png";

export default function Navbar() {
  return (
    <>
      <div className="hidden rounded-md md:navbar bg-primary ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="btn btn-primary">
                <a href="/horoscope">Horoscope</a>
              </li>
              <li>
                <a href="/cards">Tarot</a>
              </li>{" "}
              <li>
                <a href="/notes">Notes</a>
              </li>
            </ul>
          </div>
          <a className="text-xl normal-case btn btn-ghost" href="/">
            Witch_'n'_Bitch{" "}
          </a>
        </div>

        <div className="hidden navbar-center lg:flex">
          <ul className="gap-2 px-1 menu menu-horizontal">
            <li className="btn">
              <a href="/horoscope">Horoscope</a>
            </li>{" "}
            <li className="btn">
              <a href="/notes">Notes</a>
            </li>
            <li className="btn" tabIndex={0}>
              <details>
                <summary>Tarot</summary>
                <ul className="">
                  <li>
                    <a href="/cards">Daily Spread</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-5 md:hidden btm-nav">
        <NavLink className="" to="/cards">
          <button className="p-2 text-accent bg-primary">
            <img className="" src={tarot} />{" "}
          </button>
        </NavLink>
        <NavLink to="/horoscope">
          <button className="p-2 text-primary active bg-accent">
            <img src={astrology} className="" />
          </button>
        </NavLink>
        <NavLink to="/notes">
          {" "}
          <button className="p-2 text-primary bg-secondary">
            <img src={notebook} />
          </button>
        </NavLink>
      </div>
    </>
  );
}
