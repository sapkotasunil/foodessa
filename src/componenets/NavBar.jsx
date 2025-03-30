import React from "react";
import { IoMdListBox } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";
import { TbHomeFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const NavBar = ({ containerStyles, togglrMenu, menuOpend }) => {
  const navItems = [
    { to: "/", label: "Home", icon: <TbHomeFilled /> },
    { to: "/menu", label: "Menu", icon: <IoMdListBox /> },
    { to: "/contact", label: "Contact", icon: <IoMailOpen /> },
  ];
  return (
    <nav className={containerStyles}>
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
