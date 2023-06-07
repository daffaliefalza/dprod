import React from "react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";

const Projects = () => {
  return (
    <section className="projects bg-[#f7f3f4] py-5" aria-label="projects">
      <div className="container">
        <div className="projects-content ">
          <h2 className="projects-title text-[2.375rem] text-[#12133b] font-bold ">
            Our recent <span className="text-[#ff6600]">projects</span>.
          </h2>
          <p className="projects-text my-[2rem] text-[1.2rem]">
            Aliquam tristique libero at dui sodales, et placerat orci lobortis.
            Donec metus lorem, vulputate at sapien sit amet, auctor iaculis
            lorem.
          </p>
        </div>
        <div className="projects-list md:grid grid-cols-2 gap-8">
          <div className="projects-card ">
            <figure>
              <img src={project1} alt="" />
            </figure>
            <h3 className="projects-title text-[#12133b] font-semibold text-[1.6rem] my-[1rem]">
              Plastic Credit Card
            </h3>
            <p className="mb-[3rem] text-[#4d4f51]">Identity, Mockup</p>
          </div>
          <div className="projects-card">
            <figure>
              <img src={project2} alt="" />
            </figure>
            <h3 className="projects-title text-[#12133b] font-semibold text-[1.6rem] my-[1rem]">
              3D Illustration
            </h3>
            <p className="mb-[3rem] text-[#4d4f51]">Development, Mobile App</p>
          </div>
          <div className="projects-card">
            <figure>
              <img src={project3} alt="" />
            </figure>
            <h3 className="projects-title text-[#12133b] font-semibold text-[1.6rem] my-[1rem]">
              Statistics Mobile App
            </h3>
            <p className="mb-[3rem] text-[#4d4f51]">Development, Mobile App</p>
          </div>
          <div className="projects-card">
            <figure>
              <img src={project4} alt="" />
            </figure>
            <h3 className="projects-title text-[#12133b] font-semibold text-[1.6rem] my-[1rem]">
              Color Blending Effect
            </h3>
            <p className="mb-[3rem] text-[#4d4f51]">Design, Graphics</p>
          </div>
          <div className="projects-card">
            <figure>
              <img src={project5} alt="" />
            </figure>
            <h3 className="projects-title text-[#12133b] font-semibold text-[1.6rem] my-[1rem]">
              3D Animation
            </h3>
            <p className="mb-[3rem] text-[#4d4f51]">Design, Dimension</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
