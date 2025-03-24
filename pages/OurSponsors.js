import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";

import deal from "@/assets/deal.png";
import question from "@/assets/question.png";
import list from "@/assets/research.png";
import platinum from "@/assets/platinum.png";
import contact from "@/assets/contact.png";
import payment from "@/assets/payment.png";
import Link from "next/link";
import Image from "next/image";
import Foot from "@/components/Foot";
import Navbar2 from "@/components/navbar/Navbar2";
import StickyBar from "@/components/StickyBar";
import sail from "@/assets/sail.png";
import nhpc from "@/assets/nhpc.png";
import ktmpl from "@/assets/ktmpl.png";
function sponsor() {
  return (
    <>
      <Head>
        <title>Our Sponsors</title>
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
      <div className="mt-8 sm:mt-4 w-full text-center">
          <h1 className="text-4xl sm:text-2xl text-[#002E73] font-bold">
          Our Sponsors ✨
          </h1>
        </div>
      <div className="mx-[2rem]  rounded-lg justify-center flex flex-col border-primary shadow-2xl mt-[1rem] sm:mx-[0rem] sm:h-auto">
        <div className="sm:mx-0 rounded-lg border-primary shadow-2xl p-4">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-xl sm:text-sm items-center text-center">
              <span className="text-[#002E73]">Gold Sponsor</span>
            </h1>
            
          </div>{" "}
          <div className="">
          <Image src={sail} className="h-[12rem] w-[auto] sm:h-[10rem] m-auto mt-4" />
            <div className=" mt-4 sm:mb-2 text-center flex flex-row gap-3 flex-wrap items-center">
              <h1 className="font-bold text-xl sm:text-sm items-center text-center">
               About SAIL
              </h1>
            </div>
            <span className="text-sm mt-4 sm:text-xs text-justify">
            <b>Steel Authority of India Limited (SAIL)</b> is an Indian public sector steel
manufacturing corporation based in New Delhi. It is the largest government-owned
steel producer, with an annual production of 18.29 million metric tons. Incorporated
on 24 January 1973, SAIL has 54,431 employees and is under the administrative
control of the Ministry of Steel.
SAIL operates and owns five integrated steel plants at Bhilai, Rourkela, Durgapur,
Bokaro and Burnpur (Asansol) and three special steel plants at Salem, Durgapur and
Bhadravathi. It also owns a Ferro Alloy plant at Chandrapur. It also has an R&D Centre
for Iron & Steel (RDCIS) and a Centre for Engineering in Ranchi, Jharkhand.
The company has a total of 692 patents globally, out of which 343 have been granted.
More than 64% of the 692 patents are active. SAIL has filed the maximum number of
patents in India, followed by Egypt and Germany.
            </span>{" "}
            <a
              href="https://sail.co.in/"
              className="text-blue font-bold hover:text-primary text-sm sm:text-xs"
              target="_blank"
            >
              SAIL Website
            </a>
          </div>
          <div className="flex flex-col gap-3 mt-[2rem]">
            <h1 className="font-bold text-xl sm:text-sm items-center text-center">
              <span className="text-[#002E73]">Silver Sponsors</span>
            </h1>
            
          </div>{" "}
          <div className="">
          <Image src={nhpc} className="h-[12rem] w-[auto] sm:h-[10rem] m-auto mt-4" />
            <div className=" mt-4 sm:mb-2 text-center flex flex-row gap-3 flex-wrap items-center">
              <h1 className="font-bold text-xl sm:text-sm items-center text-center">
               About NHPC
              </h1>
            </div>

            <span className="text-sm mt-4 sm:text-xs text-justify">
            <b>NHPC Limited (erstwhile National Hydroelectric Power Corporation)</b>  is an Indian
public sector hydropower company that was incorporated in 1975 to plan, promote
and organise an integrated and efficient development of hydroelectric power. Recently
it has expanded to include other sources of energy like solar, geothermal, tidal, and
wind.
At present, NHPC is a Navaratna Enterprise of the Govt. of India and among the top
ten companies in the country in terms of investment base. Baira Suil Power station in
Salooni Tehsil of Chamba district was the first project undertaken by NHPC while
Chamera-1 is the best.
            </span>
            {" "}
            <a
              href="https://www.nhpcindia.com/"
              className="text-blue font-bold hover:text-primary text-sm sm:text-xs"
              target="_blank"
            >
              NHPC Website
            </a>
          </div>
          <div className="">
          <Image src={ktmpl} className="h-[12rem] w-[auto] sm:h-[10rem] m-auto mt-4" />
            <div className=" mt-4 sm:mb-2 text-center flex flex-row gap-3 flex-wrap items-center">
              <h1 className="font-bold text-xl sm:text-sm items-center text-center">
               About KTMPL
              </h1>
            </div>
            <span className="text-sm mt-4 sm:text-xs text-justify">
            <b>Kalyaneswari Tasra Mining Private Limited (KTMPL)</b>  , incorporated on August 25,
2023, is a private, non-government company engaged in coal and lignite mining.
Registered with ROC-Jharkhand, it has an authorized share capital of ₹15,00,000 and
a paid-up capital of ₹1,00,000. The company is led by directors Tatineni Ramesh, Naga
Neelendra Nath Raavi, and Prabhulal Murji Dholu. Its registered office is in Dhanbad,
Jharkhand. The company held its last AGM on December 31, 2024, and remains active
as per MCA records. With a focus on sustainable mining practices, Kalyaneswari Tasra
Mining aims to contribute to India's energy sector while ensuring responsible resource
extraction.

            </span>
          </div>
        </div>{" "}
        
      </div>
      <Foot />
      <StickyBar />
    </>
  );
}

export default sponsor;
