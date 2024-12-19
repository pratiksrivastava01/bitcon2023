import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Navbar2 from "@/components/navbar/Navbar2";
import Foot from "@/components/Foot";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import StickyBar from "@/components/StickyBar";
import Image from "next/image";
import ieeeNotice from "@/assets/ieeeNotice.png";
const awards = () => {
  return (
    <>
      {" "}
      <Head>
        <title>Updates</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <div className=" flex flex-col ">
        <Navbar2 />
        <Nav3 />
        <section className="mt-8 sm:mt-4 mb-12 container-70">
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-2xl text-[#002E73] font-bold">
              Updates
            </h1>
          </div>
          <div className="mx-[2rem]  rounded-lg justify-center flex flex-col border-primary shadow-2xl sm:mt-0 mt-[0.5rem] sm:mx-[0rem] sm:p-4 sm:h-auto">
            <div className="p-4 flex flex-col gap-2 flex-wrap items-start">
              {/* <h1 className="font-bold text-xl sm:text-lg items-center">
                I. Instructions to submit updated/revised manuscript:
              </h1> */}
              <div className=" mb-4 sm:mb-0 ml-2 pb-72">
                <ul className="list-decimal ml-5 mt-2 text-sm sm:text-xs text-justify">
                  <li>All Notification Rolled out.</li>
                  <li>
                    Deadline for registration (Hard Deadline) is 25th November,
                    2024.
                  </li>
                  <li>
                    BITCON-24 Schedule :{" "}
                    <a
                      href="https://drive.google.com/file/d/1jpCDdKBf3IKt45v2DBr-k4DeDG0aWeQZ/view?usp=sharing"
                      target="_blank"
                      className="text-blue-600"
                    >
                      Click here
                    </a>
                  </li>
                  <li>
                    Important Notice :{" "}
                    <a href="/ImportantNotice" className="text-blue-600">
                      Click here
                    </a>
                  </li>
                  <li>
                    Registration Confirmed Paper IDs :{" "}
                    <a href="/ConfirmedRegistrations" className="text-blue-600">
                      Click here
                    </a>
                  </li>
                  <li>
                    Criterion for Best Paper Award in Each Track :{" "}
                    <a href="/awards#ac" className="text-blue-600">
                      Click here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Foot />
      </div>
      <StickyBar />
    </>
  );
};

export default awards;
