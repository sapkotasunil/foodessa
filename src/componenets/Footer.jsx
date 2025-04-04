import React from "react";
import { BsTiktok, BsTwitter } from "react-icons/bs";
import { CgYoutube } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";
import { LiaLinkedin } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = () => {
  const rightsectiondata = [
    {
      _id: 1,
      title: "Learn More",
      subTitles: [
        "About us",
        "Fresh Foods",
        "Fast foods",
        "Hot Deals",
        "PopularFoods",
        "FAQ",
      ],
    },
    {
      _id: 2,
      title: "Our Community",
      subTitles: ["Terms and Condition", "Special offers", "Customer Reviews"],
    },
    {
      _id: 3,
      title: "Contact us",
      subTitles: [
        "cuntact number:  123-456-7890",
        "Email Adress:  info@foodeesa.com",
      ],
    },
  ];
  return (
    <>
      <footer className=" border-gray-20 border-t-[2px] pt-3 mt-4 flex flex-col sm:flex-row  justify-between gap-2">
        {/* left */}
        <div className="max-w-[400px]">
          <div>
            <Link to={"/"} className="bold-24 flex-1 flex">
              <span
                className="inline-flex items-center justify-center p-2 h-8
          w-8 bg-secondary text-white -rotate-[31deg] rounded-full"
              >
                F
              </span>
              oodessa
            </Link>
          </div>
          <p className="mt-3">
            Looking for something delicious? explore a variety of mouthwatering
            meals, creafted to satisfy your cravings <br /> and bring joy to
            every occasion.
          </p>
          <div>
            <div className="relative w-fit mt-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-80 h-8 p-3 bg-deep rounded-2xl focus:outline-none "
              />
              <button className="absolute rounded-2xl top-0 right-0 bg-green-700 px-3 py-1 text-white">
                subscribe
              </button>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col sm:flex-row gap-4  flex-wrap ">
          {rightsectiondata.map((detas) => (
            <>
              <div className="text-start flex flex-col items-start justify-start ">
                <h4 className="h4 lg:whitespace-nowrap">{detas.title}</h4>
                {detas.subTitles.map((sub) => (
                  <div className="flex flex-col w-full   justify-start">
                    <p className=" lg:whitespace-nowrap my-2">{sub}</p>
                  </div>
                ))}
              </div>
            </>
          ))}
          <div className="text-start flex flex-col items-start justify-start ">
            <h4 className="h4 whitespace-nowrap">Social</h4>
            <div className="flex w-full gap-3  justify-start">
              <FaFacebook />
              <ImInstagram />
              <BsTwitter />
              <BsTiktok />
              <CgYoutube />
              <LiaLinkedin />
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-green-600 flex justify-between items-center p-1 mt-3 text-white mb-2">
        <h6 className="h6">2025 Foodees</h6>
        <h6 className="h6">All right reserved</h6>
      </div>
    </>
  );
};

export default Footer;
