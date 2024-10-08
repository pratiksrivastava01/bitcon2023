import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import Nav3 from "@/components/home/Nav3";
import Navbar2 from "@/components/navbar/Navbar2";

const speakers = () => {
  return (
    <>
      <Head>
        <title>Invited Speakers</title>
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
      <div className="w-full h-[100vh] justify-center flex items-center">
      <h1 className="font-bold text-lg flex justify-center ">
        To Be Updated Soon
      </h1>
      </div>
    </>
  );
};

export default speakers;
