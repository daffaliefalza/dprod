import React from "react";
import blog1 from "../assets/images/blog-1.png";
import blog2 from "../assets/images/blog-2.png";
import blog3 from "../assets/images/blog-3.png";
import author1 from "../assets/images/author-1.png";
import author2 from "../assets/images/author-2.png";
import { AiTwotoneCalendar } from "react-icons/ai";
const Blog = () => {
  return (
    <section className="blog mb-[5rem]  pb-[2rem] py-5" aria-aria-label="blog">
      <div className="container border-b-[1px] border-slate-500">
        <h2 className="section-title text-[2.375rem] text-[#12133b] font-bold">
          Our inside <span className="text-[#ff6600]">news</span>.
        </h2>
        <div className="blog-list md:grid grid-cols-3 gap-10">
          <div className="blog-card">
            <figure className="my-10">
              <img src={blog1} alt="" />
            </figure>
            <div className="blog-card-info">
              <div className="blog-info flex justify-between mb-5  max-w-[350px]">
                <div className="blog-author flex items-center">
                  <img src={author1} alt="" className="mr-1" />
                  <span>Allice Williams</span>
                </div>
                <div className="blog-date flex items-center">
                  <AiTwotoneCalendar className="mr-1" />
                  <span>December 20, 2022</span>
                </div>
              </div>

              <h3 className="blog-title text-[#12133b] text-[1.8rem] mb-5">
                Designer's Checklist for Every UX Project.
              </h3>
              <span>
                <a href="#" className="mb-[2rem] inline-block">
                  Read more
                </a>
              </span>
            </div>
          </div>
          <div className="blog-card">
            <figure className="my-10">
              <img src={blog2} alt="" className="w-full" />
            </figure>
            <div className="blog-card-info">
              <div className="blog-info flex justify-between mb-5  max-w-[350px]">
                <div className="blog-author flex items-center">
                  <img src={author2} alt="" className="mr-1" />
                  <span>Jaxson Geldit</span>
                </div>
                <div className="blog-date flex items-center">
                  <AiTwotoneCalendar className="mr-1" />
                  <span>June 18, 2022</span>
                </div>
              </div>
              <h3 className="blog-title text-[#12133b] text-[1.8rem] mb-5">
                Designer's Checklist for Every UX Project.
              </h3>
              <span>
                <a href="#">Read more</a>
              </span>
            </div>
          </div>
          <div className="blog-card">
            <figure className="my-10">
              <img src={blog1} alt="" />
            </figure>
            <div className="blog-card-info">
              <div className="blog-info flex justify-between mb-5  max-w-[350px]">
                <div className="blog-author flex items-center">
                  <img src={author1} alt="" className="mr-1" />
                  <span>Allice Willaims</span>
                </div>
                <div className="blog-date flex items-center">
                  <AiTwotoneCalendar className="mr-1" />
                  <span>August 10, 2022</span>
                </div>
              </div>

              <h3 className="blog-title text-[#12133b] text-[1.8rem] mb-5">
                Designer's Checklist for Every UX Project.
              </h3>
              <span>
                <a href="#">Read more</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
