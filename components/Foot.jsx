"use client";
import React from "react";
import programmer from "@/assets/programmer.png";
import Image from "next/image";
import { Footer } from "flowbite-react";
// import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Ft() {
  return (
    <Footer className="bg-[#002E73] mt-4">
      <div className="w-full">
        <div className="mx-4rem sm:mx-0 grid w-full grid-cols-4 gap-8 px-6 py-8 md:grid-cols-2 sm:grid-rows-1">
        <div>
            <Footer.Title className="text-white text-lg" title="BITCON 2024" />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link className="text-white" href="/dates">Important Dates</Footer.Link>
              <Footer.Link className="text-white" href="/CallForPaper">Call for Papers</Footer.Link>
              <Footer.Link className="text-white" href="/speakers">Invited Speakers</Footer.Link>
              <Footer.Link className="text-white" href="/PaperSubmission/info">Paper Submission</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-white text-lg" title="About Us" />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link className="text-white" href="/About/institute">About the Institute</Footer.Link>
              <Footer.Link className="text-white" href="/About/department">About the Department</Footer.Link>
              <Footer.Link className="text-white" href="/About/logo">About the Logo</Footer.Link>
            </Footer.LinkGroup>
          </div>
 
          <div>
            <Footer.Title className="text-white text-lg" title="Important Links" />
            <Footer.LinkGroup col className="text-white">
            <Footer.Link className="text-white" href="/registration">Registration</Footer.Link>
              <Footer.Link className="text-white" href="/awards">Awards</Footer.Link>
              <Footer.Link className="text-white" href="/sponsor">Sponsorship</Footer.Link>
              <Footer.Link className="text-white" href="/contact">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title className="text-white text-lg" title="Downloads" />
            <Footer.LinkGroup col className="text-white">
              <Footer.Link className="text-white" href="https://drive.google.com/file/d/1xStFwz2XoOhnwBQa0ASQWCWvDOUB78D1/view?usp=sharing">BITCON Flyer</Footer.Link>
              <Footer.Link className="text-white" href="https://drive.google.com/file/d/1s-helg72lQA9-WL61yY8jek--JO1QUwA/view?usp=sharing">Sponsorship Details</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-[#002E73] p-4 flex flex-row justify-between sm:flex-col sm:gap-2 sm:items-center sm:justify-center border-t border-white">
          {/* <Footer.Copyright href="#" by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div> */}
          <div>
            <Footer.Copyright className="text-center text-white" href="#" by="BITCON-BIT Sindri" year={2024} />
          </div>
          <div className="flex flex-row sm:flex-col justify-center items-center gap-1">
          <div className="flex flex-row gap-2 items-center justify-center">
            <Image
            src={programmer}
              alt="BIT"
              height="60px"
              width="60px"
              className="h-[1.5rem] w-[auto]">
            </Image>
            <span className=" text-white text-xs">Developed By:</span>
            </div>
            <div className="flex flex-row sm:flex-col justify-center items-center gap-1">
            <span  className=" text-white text-xs">Pratik Srivastava (EE 2021-25)</span>
            <span  className="text-xs text-white sm:hidden"> &amp; </span>
            <span  className=" text-white text-xs">Shashikanta Mahato (EE 2022-26)</span>
          </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
