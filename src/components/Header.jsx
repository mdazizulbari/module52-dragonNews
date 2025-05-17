import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div>
      <div className=" flex justify-center flex-col items-center gap-3 mt-5">
        <img src={logo} className="w-[400px]" alt="" />
        <p className="text-accent">Journalism Without Fear or Favour</p>
        <p className="text-semibold text-accent">
          {format(new Date(), "EEEE,MMMM MM, yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Header;
