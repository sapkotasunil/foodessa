import React, { useContext, useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";
import { categories } from "../assets/data";
import Title from "../componenets/Title";
import Item from "../componenets/Item";

const Menu = () => {
  const { foods } = useContext(ShopContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");
  const [filterdFoods, setFilterdFoods] = useState([]);
  const [ShowCategories, setShowCategories] = useState(true);

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
    switch (sortType) {
      case "low":
        return foodList.sort((a, b) => a.price - b.price);
      case "high":
        return foodList.sort((a, b) => b.price - a.price);
      default:
        return foodList;
    }
  };

  const toogleShowCategory = () => {
    setShowCategories(!ShowCategories);
  };

  useEffect(() => {
    let filtered = applyFilter();
    let sorted = applySorting(filtered);
    setFilterdFoods(sorted);
  }, [category, sortType, foods, search]);

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
          {filterdFoods ? (
            filterdFoods.map((food) => <Item food={food} key={food._id} />)
          ) : (
            <p className="capitalize"> No foods found for slected filters</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;
