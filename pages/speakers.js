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
import { speakersData } from "@/constants";
import pes from "@/assets/pes.jpg";

const speakers = () => {
  const speakers = speakersData;
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
              Keynote Speakers
            </h1>
          </div>
          <div className="mx-[2rem]  rounded-lg  flex flex-row justify-center items-center flex-wrap border-primary shadow-2xl sm:mt-0 mt-[0.5rem] sm:mx-[0rem] sm:p-4 sm:h-auto m-auto gap-4 pb-4">
            {speakers.map((speaker, index) => (
              <div className="w-[280px] sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-4 bg-white shadow-xl rounded-lg text-gray-900 min-h-[300px]">
                <div className="rounded-t-lg flex  max-h-[200px] justify-start flex-start overflow-hidden">
                  <Image
                    className=" w-full"
                    src={"/speakers/" + speaker.image}
                    alt="Mountain"
                    width={250}
                    height={250}
                  />
                </div>
                <div className="text-center mt-2">
                  <h2 className="font-semibold">{speaker.name}</h2>
                  <p className="text-gray-500">{speaker.designation}</p>
                  <p className="text-gray-500">{speaker.address}</p>
                </div>
                {/* <div className="p-4 border-t mx-8 mt-2">
                <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
                  Follow
                </button>
              </div> */}
              </div>
            ))}
            ;
          </div>
        </section>
        <Foot />
      </div>
      <StickyBar />
    </>
  );
};

export default speakers;
