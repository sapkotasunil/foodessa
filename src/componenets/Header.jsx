import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { RiShoppingBasketLine, RiUserLine } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const { getCartCount } = useContext(ShopContext);
  const [menuOpened, setmenuOpened] = useState(false);
  const toggleMenu = () => {
    setmenuOpened((prev) => !prev);
  };
  return (
    <header className=" py-3 w-full absolute top-0 left-0 right-0 z-50 bg-white ">
      <div className=" max-padd-container flexBetween">
        {/* logo */}
        <Link to={"/"} className="bold-24 flex-1 flex">
          <span
            className="inline-flex items-center justify-center p-2 h-8
          w-8 bg-secondary text-white -rotate-[31deg] rounded-full"
          >
            F
          </span>
          oodessa
        </Link>
        {/* navbar */}
        <div className=" flex-1">
          <NavBar
            toggleMenu={toggleMenu}
            menuOpend={menuOpened}
            containerStyles={`${
              menuOpened
                ? " flex flex-col gap-y-12 w-[222px] h-screen xl:h-fit  absolute left-0 top-0 bg-white z-50 px-10 py-4 shadow-xl "
                : "hidden xl:flex gap-x-6 xl:gap-x-8 medium-15 rounded-full px-2 py-1"
            }`}
          />
        </div>
        {/* right side */}
        <div className="flex-1 flex justify-end items-center gap-x-3 sm:gap-x-10 ">
          {!menuOpened && (
            <CgMenuLeft
              onClick={toggleMenu}
              className=" text-2xl xl:hidden cursor-pointer"
            />
          )}
          <Link to={"/cart"} className="flex relative">
            <RiShoppingBasketLine className="text-2xl" />
            <span className="bg-secondary text-white medium-14 absolute left-3.5 -top-2.5 flexCenter w-4 h-4 rounded-full shadow-inherit p-[10px]">
              {getCartCount()}
            </span>
          </Link>
          <div className="group relative">
            <div>
              <button className=" btn-outline !border-none flexCenter gap-x-2 !py-3">
                Login <RiUserLine className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
