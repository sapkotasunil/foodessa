import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { IoMdListBox } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import { TbHomeFilled } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ containerStyles, toggleMenu, menuOpend }) => {
  const navItems = [
    { to: "/", label: "Home", icon: <TbHomeFilled /> },
    { to: "/menu", label: "Menu", icon: <IoMdListBox /> },
    { to: "/contact", label: "Contact", icon: <IoMailOpen /> },
  ];
  return (
    <nav className={containerStyles}>
      {/* close button inside the nav */}
      {menuOpend && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className=" text-xl  self-end cursor-pointer relative left-8  "
          />
          {/* logo */}
          <Link to={"/"} className=" bold-24 mb-10">
            <h4 className=" text-secondary ">Foodessa</h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex">
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive ? "active-link flexCenter gap-x-2" : "flexCenter gap-x-2"
            }
          >
            <span className="text-xl">{icon}</span>
            <span className="medium-16">{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
