import React, { useContext, useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";
import { categories } from "../assets/data";
import Title from "../componenets/Title";
import Item from "../componenets/Item";
import { Pagination } from "swiper/modules";

const Menu = () => {
  const { foods } = useContext(ShopContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filterdFoods, setFilterdFoods] = useState([]);
  const [ShowCategories, setShowCategories] = useState(true);

  //state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const toggleFilter = (value, setState) => {
    console.log(value);
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let filtered = [...foods];
    if (search) {
      filtered = filtered.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length) {
      filtered = filtered.filter((food) => category.includes(food.category));
    }
    return filtered;
  };

  const applySorting = (foodList) => {
    const sortedFoods = [...foodList];
    switch (sortType) {
      case "low":
        return sortedFoods.sort((a, b) => {
          const aPrice = Object.values(a.price)[0];
          const bPrice = Object.values(b.price)[0];
          return aPrice - bPrice;
        });
      case "high":
        return sortedFoods.sort((a, b) => {
          const aPrice = Object.values(a.price)[0];
          const bPrice = Object.values(b.price)[0];
          return bPrice - aPrice;
        });
      default:
        return sortedFoods;
    }
  };

  const toogleShowCategory = () => {
    setShowCategories(!ShowCategories);
  };

  useEffect(() => {
    let filtered = applyFilter();
    let sorted = applySorting(filtered);
    setFilterdFoods(sorted);
    setCurrentPage(1);
  }, [category, sortType, foods, search]);

  //get foods for the current page
  const getPaginatedFoods = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filterdFoods.slice(startIndex, endIndex);
  };

  //total number of pages

  const totalPages = Math.ceil(filterdFoods.length / itemsPerPage);

  return (
    <section className="max-padd-container mt-24">
      {/* Search Box */}
      <div className="w-full max-w-2xl flexCenter">
        <div className="inline-flex  items-center justify-center bg-deep overflow-hidden w-full p-4 px-5">
          <div className="text-lg cursor-pointer">
            <RiSearch2Line />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-none outline-none w-full text-sm pl-4 bg-deep"
            placeholder="search here.."
          />
          <div
            onClick={toogleShowCategory}
            className="flexCenetr cursor-pointer text-lg border-1 pl-2"
          >
            <LuSettings2 />
          </div>
        </div>
      </div>
      {/* categories filter */}
      {ShowCategories && (
        <div className="my-14">
          <h3 className=" h4 mb-4 hidden sm:flex">Select by category</h3>
          <div className=" flexCenter sm:flexStart flex-wrap gap-x-4 sm:gap-x-12 gap-y-4">
            {categories.map((cat) => (
              <label key={cat.name}>
                <input
                  type="checkbox"
                  value={cat.name}
                  onChange={(e) => toggleFilter(e.target.value, setCategory)}
                  className="hidden peer"
                />
                <div className=" flexCenter gap-2 peer-checked:bg-green-300 cursor-pointer bg-deep rounded-full pr-6">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="object-cover h-20 w-20"
                  />
                  <span className="medium-14">{cat.name}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* food container */}
      <div className="my-8 mb-20">
        {/* title and sort */}
        <div className="flexBetween !items-center gap-7 flex-wrap pb-16 max-sm:pb-24">
          <Title
            title1={"FOOD"}
            title2={"Selections"}
            titleStyles={"!pb-0 xl:text-start"}
          />
          <div>
            <span className="hidden sm:flex medium-16">Sort By</span>
            <select
              onChange={(e) => setSortType(e.target.value)}
              className="text-sm p-2.5 ou   tline-none bg-deep text-gray-30 rounded ring-1 ring-slate-900/10"
            >
              <option value="relevant">Relevant</option>
              <option value="low">Low</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        {/* foods */}
        <div className="grid grid-cols-1 md;grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 pl-11">
          {getPaginatedFoods().length > 0 ? (
            getPaginatedFoods().map((food) => (
              <Item food={food} key={food._id} />
            ))
          ) : (
            <p className="capitalize"> No foods found for slected filters</p>
          )}
        </div>
      </div>
      {/* Pagination */}

      <div className=" flexCenter mt-4 mb-10 sm:gap-4 ">
        {/* prev button */}
        <button
          disabled={currentPage === 1} //disable previous button when curren page is in 1
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className={`btn-secondary !py-1 !px-3 ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
        >
          Previous
        </button>
        {/* page number */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`btn-outline !py-1 !px-3 ${
              currentPage === index + 1 && "!bg-deep"
            }`}
          >
            {index + 1}
          </button>
        ))}
        {/* Next button */}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className={`btn-secondary !py-1 !px-3 ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Menu;
