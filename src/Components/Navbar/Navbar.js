import React from "react";
import Logo from "../../assets/Logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 font-bold text-xl pr-14">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="" href="/">
                Wedding Cards
              </a>
            </li>
            <li>
              <a href="/">Birthday Cards</a>
            </li>
            <li>
              <a href="/">Feeling Cards</a>
            </li>
            <li>
              <a href="/">Anniversary Cards</a>
            </li>
            <li>
              <a href="/">Anniversary Cards</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-xl pl-20 lg:pl-o">
          <img src={Logo} alt="Company Logo" className="w-3/5" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <a className="" href="/">
              Wedding Cards
            </a>
          </li>
          <li>
            <a href="/">Birthday Cards</a>
          </li>
          <li>
            <a href="/">Feeling Cards</a>
          </li>
          <li>
            <a href="/">Anniversary Cards</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:block text-end">
        <a
          href="/"
          className="btn btn-outline hover:bg-gray-300 hover:text-black border-none"
        >
          Login | Signup
        </a>
      </div>
    </div>
  );
};

export default Navbar;
