import React from "react";
import aboutBanner from "../assets/images/about-banner.png";
import aboutShape from "../assets/images/banner-shape.svg";
const About = () => {
  return (
    <section className="about mb-[5rem]" aria-label="about">
      <div className="container">
        <div className="wrapper  md:grid grid-cols-2 items-center">
          <figure className="p-[3rem] my-[1rem] relative">
            <img src={aboutBanner} alt="About banner" />
            <img src={aboutShape} alt="" className="absolute top-3 right-0" />
          </figure>
          <div className="about-content">
            <h2 className="about-title text-[#0e1116] text-[2.375rem] font-bold">
              We've been helping{" "}
              <span className="text-[#ff6600]">customers</span> globally.
            </h2>
            <p className="about-text mt-[30px] mb-[40px] text-[1.2rem]">
              Aliquam tristique libero at dui sodales, et placerat orci
              lobortis. Donec metus lorem, vulputate at sapien sit amet, auctor
              iaculis lorem.
            </p>
            <a
              href="#"
              className="btn-more  py-[10px] px-[28px] border-[2px] border-[#ff6600] rounded-md hover:bg-[#ff6600] hover:text-white transition-all "
            >
              More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
