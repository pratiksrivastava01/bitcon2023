import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FcCallback } from "react-icons/fc";
import { BsWhatsapp } from "react-icons/bs";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="HnCC or Hackathon and Coding Club is the official club of BIT Sindri that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <div className=" flex flex-col ">
        <Navbar />
        <Nav3 />
        <div className="items-center ">
          <h1 className="text-bold text-5xl p-[5rem] text-center sm:text-3xl ">
            Contact US
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
            ></iframe>
            <div className="flex gap-[13rem] sm:gap-0 flex-row flex-wrap">
              <div className="mt-[2rem]">
                <h1 className="text-primary font-bold flex text-5xl sm:text-2xl">
                  Address
                </h1>
                <div className="flex gap-[50rem]">
                  <p className="text-white flex text-2xl mt-[2rem] sm:text-xl">
                    Dhanbad Road, <br /> Sindri, <br /> Jharkhand 828123
                  </p>
                  <div className=" flex-1">
                    <Link
                      href="mailto:srivastavapratik35@gmail.com"
                      className="flex gap-[2rem]"
                    >
                      <CiMail className="text-white text-bold mt-[2rem] text-3xl text-yellow" />
                      <span className="mt-[2.2rem]  hover:text-primary">
                        Send Email
                      </span>
                    </Link>
                    <a href="tel:+917280005056" className="flex gap-[2rem]">
                      <FcCallback className="text-white text-bold mt-[2rem] text-3xl text-yellow" />
                      <span className="mt-[2.2rem]  hover:text-primary">
                        Call Us
                      </span>
                    </a>
                    <a
                      href="https://wa.me/7280005056"
                      className="flex gap-[2rem] text-[green]"
                    >
                      <BsWhatsapp className="text-white text-bold mt-[2rem] text-3xl text-yellow" />
                      <span className="mt-[2.2rem]  hover:text-primary">
                        WhasApp
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
    </>
  );
};

export default contact;
