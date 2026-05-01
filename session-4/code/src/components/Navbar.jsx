import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex justify-end p-4 text-slate-500 bg-green-200">
        <li>
          <Link to="/dashboard" className="m-4">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/about" className="m-4">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="m-4">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/products" className="m-4">
            Products
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

{
  /* <a href="about.html">About</a> */
}
