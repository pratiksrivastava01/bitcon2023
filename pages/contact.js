import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FcCallback } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";
import Foot from "@/components/Foot";
import Navbar2 from "@/components/navbar/Navbar2";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
        <Navbar2 />
        <Nav3 />
        <div className=" flex flex-col ">
        <div className="items-center ">
          <h1 className="text-bold text-4xl p-[5rem] text-center sm:text-2xl ">
            Contact Us
          </h1>
          <div className="flex flex-col flex-wrap p-[5rem] mt-[-8rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.596164497768!2d86.4688100809643!3d23.654629223907673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f696e95958a6d5%3A0x7c14e668e6f2feea!2sBIT%20Sindri!5e0!3m2!1sen!2sin!4v1683734252135!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
             className="sm:w-full"></iframe>
            <div className="flex gap-[13rem] sm:gap-0 flex-row sm:flex-col flex-wrap">
              <div className="mt-[2rem]">
                <h1 className="text-primary font-bold flex text-4xl sm:text-xl ">
                  Address
                </h1>
                <div className="flex gap-[50rem] flex-row sm:flex-col mt-2 sm:gap-[1rem] items-start">
                  <p className="text-primary flex text-sm sm:text-xs">
                    Sindri, Dhanbad <br /> Jharkhand 828123
                  </p>
                  {/* <p className="text-white flex text-2xl mt-[2rem] sm:text-xl">
                    Note: All commeties are required to ma
                  </p> */}
                  <div className=" flex-1 gap-1">
                    <Link
                      href="mailto:amit.ee@bitsindri.ac.in"
                      className="flex gap-[1rem] items-center"
                    >
                      <CiMail className=" text-bold text-sm sm:text-xs text-yellow" />
                      <span className="hover:text-primary">
                        bitcon.2024@bitsindri.ac.in
                      </span>
                    </Link>
                    {/* <span>amit.ee@bitsindri.ac.in</span> */}
                    
                    <a href="" className="flex gap-[2rem] items-center">
                      <FcCallback className="text-bold text-sm sm:text-xs text-yellow" />
                      <span className="hover:text-primary">
                        0326 2350495
                      </span>
                    </a>
                  </div>
                </div>
                {/* <a href="mailto:srivastavapratik35@gmail.com"></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default contact;
