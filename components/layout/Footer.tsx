import React from "react";
import { iconlist } from "./Topbar";
import IconLink from "../shared/IconLink";
import { FaHeadphonesAlt } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { MdCopyright } from "react-icons/md";
import { RiVisaLine } from "react-icons/ri";
import { FaEbay, FaPaypal } from "react-icons/fa6";
import { SiMastercard } from "react-icons/si";

const Footer = () => {
  return (
    <div className="h-full w-full flex flex-col gap-0 bg-[#1A1A1A] text-[#999991] font-sans">
      {/* Top footer part */}
      <div className="py-20 px-4 sm:px-6 flex lg:flex-row flex-col gap-6 justify-evenly">
        {/* Logos and icons */}
        <div className="flex sm:flex-row sm:justify-around flex-col gap-16">
          <div className="flex flex-col gap-5 text-[#E5E5E5]">
            <h1 className="font-extrabold text-4xl tracking-widest">RUBIX</h1>
            <div className="flex gap-5 items-center text-lg">
              {iconlist.map((item, index) => (
                <IconLink
                  key={index}
                  href={item.href}
                  icon={item.icon}
                  iconSize="2xl"
                />
              ))}
            </div>
          </div>

          {/* Customer service list */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold text-white">
              Customer Services
            </h1>
            <ul className="flex flex-col gap-1">
              <li>My Account</li>
              <li>Track your orders</li>
              <li>FAQS</li>
              <li>Payment Methods</li>
              <li>Shipping Guide</li>
              <li>Products Support</li>
              <li>Gift Card Balance</li>
            </ul>
          </div>
        </div>
        {/* More from Rubix options */}
        <div className="flex sm:flex-row justify-around flex-col gap-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold text-white">
              More from Rubix
            </h1>
            <ul className="flex flex-col gap-1">
              <li>About Rubix</li>
              <li>Our Guarantees</li>
              <li>Terms and Conditions</li>
              <li>Privacy policy</li>
              <li>Return Policy</li>
              <li>Delivery & Return</li>
              <li>Sitemap</li>
            </ul>
          </div>

          {/* Let's talk and find us section */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold text-white">Lets Talk</h1>
              <div className="flex gap-5 items-start">
                <span className="text-xl">
                  <FaHeadphonesAlt />
                </span>
                <p className="flex flex-col gap-1">
                  <span>+977 9865410800</span>
                  <span>Demo@demo.com</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-semibold text-white">Find Us</h1>
              <div className="flex gap-5 items-start">
                <span className="text-xl">
                  <CiLocationArrow1 />
                </span>
                <p className="flex flex-col gap-1">
                  <span>502 kumari galli, Putali sadak.</span>
                  <span>Kathmandu, Nepal</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-600" />

      {/* Lower footer part */}
      <div className="py-6 flex flex-col gap-2 sm:flex-row  justify-between items-center px-4 sm:px-6">
        <div className="flex items-center space-x-1 text-center">
          <span className="text-white">
            <MdCopyright />
          </span>
          <span className="text-white font-medium">2024 RUBIX.</span>
          <span>All Rights Reserved</span>
        </div>
        <div className="flex gap-10 text-2xl sm:text-4xl md:text-5xl">
          <span>
            <RiVisaLine />
          </span>
          <span>
            <FaPaypal />
          </span>
          <span>
            <FaEbay />
          </span>
          <span>
            <SiMastercard />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
