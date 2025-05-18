import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center relative">
      <div className="login-btn flex gap-5 absolute left-0">
        {user && user.email}
      </div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/about`}>About</NavLink>
        <NavLink to={`/career`}>Career</NavLink>
      </div>
      <div
        className="login-btn flex gap-5 absolute right-0
      "
      >
        <img src={userImg} alt="" />
        {user ? (
          <button
            className="btn btn-primary px-10"
            onClick={() => handleLogOut()}
          >
            Log Out
          </button>
        ) : (
          <Link to={`/auth/login`} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
