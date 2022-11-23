import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="mb-6 pt-6 w-full h-fit">
      <div className="flex justify-between items-center">
        <Logo />
        <Menu />
      </div>
      <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
};

export default Header;
