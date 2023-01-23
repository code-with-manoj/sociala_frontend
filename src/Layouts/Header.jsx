import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/Logo";

const Header = () => {
  return (
    <div className="shadow bg-gray-50">
      <header className="container flex items-center mx-auto p-3">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/profile" className="h-10 w-10 bg-white ml-auto rounded-full">
          <img
            src="Assets/dummy-user.png"
            className="w-full h-full rounded-full object-cover object-top"
            alt="profile"
          />
        </Link>
      </header>
    </div>
  );
};

export default Header;
