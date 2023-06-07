import React from "react";
import heroBanner from "../assets/images/hero-banner.png";
import heroShape from "../assets/images/hero-shape-1.svg";
const Home = () => {
  return (
    <main aria-label="home">
      <div className="container">
        <section className="hero  mt-[4rem]  md:grid md:grid-cols-2 items-center">
          <div className="hero-content">
            <h1 className="hero-title text-[2.375rem] ">
              Digital <span className="text-[#ff6600]">Product</span> design
              agency
            </h1>
            <p className="section-text text-[1.25rem] mt-[25px] mb-[40px] ">
              Create live segments and target the right people for messages
              based on their behaviors.
            </p>
            <a className="get-started bg-[#202731] text-white py-[10px] px-[20px] rounded-[4px] hover:bg-[#ff6600] cursor-pointer transition-all ">
              Get Started
            </a>
          </div>
          <figure className="hero-banner my-6 relative">
            <img
              src={heroBanner}
              alt="hero banner"
              width="521"
              className="max-w-[70%] mx-auto"
            />
            <img src={heroShape} className="absolute bottom-0 left-[50px]" />
          </figure>
        </section>
      </div>
    </main>
  );
};

export default Home;
