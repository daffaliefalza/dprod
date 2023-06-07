import React from "react";
import logo from "../assets/images/logo.svg";

import { BsDribbble, BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper grid grid-cols-1 gap-7 border-b-[1px] border-black pb-[3rem] md:grid md:grid-cols-4">
          <div className="footer-brand">
            <a href="#" className="mb-4 inline-block">
              <img src={logo} alt="" />
            </a>
            <p>dprod@gmail.com</p>
            <p className="my-[1rem] ">+012 345 678 10</p>
            <div className="social-links flex gap-5">
              <a href="#">
                <BsFacebook />
              </a>
              <a href="#">
                <BsTwitter />
              </a>
              <a href="#">
                <BsPinterest />
              </a>
              <a href="#">
                <BsDribbble />
              </a>
            </div>
          </div>
          <div className="footer-links flex flex-col">
            <h4 className="footer-links-title mb-[1rem] font-bold">Links</h4>
            <a href="#" className="my-1">
              Company Details
            </a>
            <a href="#" className="my-1">
              Our Newsfeed
            </a>
            <a href="#" className="my-1">
              Service Standar
            </a>
            <a href="#" className="my-1">
              Team Members
            </a>
            <a href="#" className="my-1">
              Pricing Standard
            </a>
          </div>
          <div className="footer-legal flex flex-col">
            <h4 className="footer-legal-title mb-[1rem] font-bold">Legal</h4>
            <a href="# " className="my-1">
              Agency Minimal
            </a>
            <a href="#" className="my-1">
              Creative Agency
            </a>
            <a href="#" className="my-1">
              Creative Layout
            </a>
            <a href="#" className="my-1">
              Dark Layout
            </a>
            <a href="#" className="my-1">
              FAQ with Filter
            </a>
          </div>
          <div className="footer-projects flex flex-col">
            <h4 className="footer-projects-title  mb-[1rem] font-bold">
              Projects
            </h4>
            <a href="#" className="my-1">
              Projects Common
            </a>
            <a href="#" className="my-1">
              Projects Creative
            </a>
            <a href="#" className="my-1">
              Projects Standard
            </a>
            <a href="#" className="my-1">
              Dark Layout
            </a>
            <a href="#" className="my-1">
              eCommerce
            </a>
          </div>
        </div>
        <p className="text-center py-5">
          Copyright 2023 All Rights Reserved dprod
        </p>
      </div>
    </footer>
  );
};

export default Footer;
