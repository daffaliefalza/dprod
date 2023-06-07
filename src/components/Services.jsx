import React from "react";
import service1 from "../assets/images/service-1.svg";
import service2 from "../assets/images/service-2.svg";
import service3 from "../assets/images/service-3.svg";
import service4 from "../assets/images/service-4.svg";
import circle from "../assets/images/circle-shape.svg";

const Services = () => {
  return (
    <section
      aria-label="service"
      className="bg-[#f7f3f4] py-[80px] relative z-10 "
    >
      <div className="container">
        <div className="service-content lg:grid grid-cols-2 items-center gap-4">
          <h2 className="service-title text-[#0e1116] text-[2.375rem] font-bold lg:text-[3rem]">
            Our included <span className="text-[#ff6600]">Service</span>.
          </h2>
          <p className="service-text text-[20px] my-[2rem] text-[#4d4f51]">
            Aliquam tristique libero at dui sodales, et placerat orci lobortis.
            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
            lorem.
          </p>
        </div>
        <div className="service-list md:grid grid-cols-2 gap-6 lg:grid-cols-4">
          <div className="service-card bg-[#fff] mb-[15px] py-[50px] px-[30px] rounded-[4px]">
            <figure>
              <img src={service1} alt="" />
            </figure>

            <h3 className="card-title text-[#12133b] text-[22px] mt-[35px] mb-[20px] font-bold">
              Mobile Apps
            </h3>
            <p className="card-text text-[18px]">
              We design professional looking yet simple Logo.
            </p>
          </div>
          <div className="service-card bg-[#fff] mb-[15px] py-[50px] px-[30px] rounded-[4px]">
            <figure>
              <img src={service2} alt="" />
            </figure>
            <h3 className="card-title text-[#12133b] text-[22px] mt-[35px] mb-[20px] font-bold">
              Branding Strategy
            </h3>
            <p className="card-text text-[18px]">
              We design professional looking yet simple Logo.
            </p>
          </div>
          <div className="service-card bg-[#fff] mb-[15px] py-[50px] px-[30px] rounded-[4px]">
            <figure>
              <img src={service3} alt="" />
            </figure>

            <h3 className="card-title text-[#12133b] text-[22px] mt-[35px] mb-[20px] font-bold">
              Graphics Design
            </h3>
            <p className="card-text text-[18px]">
              We design professional looking yet simple Logo.
            </p>
          </div>
          <div className="service-card bg-[#fff] mb-[15px] py-[50px] px-[30px] rounded-[4px] ">
            <figure>
              <img src={service4} alt="" />
            </figure>

            <h3 className="card-title text-[#12133b] text-[22px] mt-[35px] mb-[20px] font-bold">
              Online Marketing
            </h3>
            <p className="card-text text-[18px]">
              We design professional looking yet simple Logo.
            </p>
            <img
              src={circle}
              alt=""
              className="absolute left-[-50px] bottom-[20px] -z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
