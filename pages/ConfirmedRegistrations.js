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
import { pData } from "@/constants";
const acceptedPapers = () => {
  const papers = pData;
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
              Confirmed Registrations
            </h1>
          </div>
          <div className="mx-[2rem]  rounded-lg justify-center flex flex-col border-primary shadow-2xl sm:mt-0 mt-[0.5rem] sm:mx-[0rem] sm:p-4 sm:h-auto">
            <div className="p-4 flex flex-col gap-2 flex-wrap items-center">
              <table className=" w-[300px]">
                <thead className="bg-[#002E73] ">
                  <tr>
                    <th className="px-2 text-white text-center">Sr. No.</th>
                    <th className="px-2 text-white text-center">Paper ID</th>
                  </tr>
                </thead>
                <tbody className="text-sm sm:text-xs">
                  {papers.map((paper, index) => (
                    <tr key={paper.index}>
                      <td className="px-2">{index + 1}</td>
                      <td className="px-2">{paper.p_id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <Foot />
      </div>
      <StickyBar />
    </>
  );
};

export default acceptedPapers;
