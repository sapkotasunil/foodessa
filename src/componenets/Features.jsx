import React from "react";
import Title from "./Title";
import shipping from "../assets/shipping-fast.svg";
import hot from "../assets/hot-food.svg";
import fresh from "../assets/fresh-food.svg";
import chef from "../assets/hat-chef.svg";

const Features = () => {
  const services = [
    {
      title: "Fast delivery",
      subtitle:
        " Get your order quickly with our reliable and efficient service",
      Image: shipping,
    },
    {
      title: "Hot foods",
      subtitle:
        "Savor freshly prepared, steaming hot meals delivered straight to you",
      Image: hot,
    },
    {
      title: "Fresh food",
      subtitle:
        " we serve meals made from the freshest and finest ingradients daily",
      Image: fresh,
    },
    {
      title: "Expert chefs",
      subtitle: "our skilled chefs craft every dish with passion and precision",
      Image: chef,
    },
  ];
  return (
    <section className=" max-padd-container py-16  !pb-12">
      <Title
        title1={"WHY CHOOSE"}
        title2={"US"}
        titleStyles={"text-center !pb-16"}
        parsaStyles={"!block"}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-12 ">
        {services.map(({ title, subtitle, Image }) => (
          <div
            key={title}
            className=" flexCenter flex-col gap-3 bg-deep p-4 py-8 rounded-xl "
          >
            <img src={Image} alt="" height={44} width={44} />
            <div className="flexCenter flex-col">
              <h5 className="h5 ">{title}</h5>
              <hr className=" w-8 bg-secondary h-1 rounded-full border-none" />
            </div>
            <p className="text-center ">{subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
