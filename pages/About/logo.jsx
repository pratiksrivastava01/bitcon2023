import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import Nav3 from "@/components/home/Nav3";
import welcome from "@/assets/bitcon.png";
import confetti from "@/assets/bitcon.png";
import evaluation from "@/assets/evaluation.png";
import research from "@/assets/research.png";
import schedule from "@/assets/schedule.png";
import review from "@/assets/review.png";
import collaboration from "@/assets/collaboration.png";
import invitation from "@/assets/invitation.png";
import Link from "next/link";
import Image from "next/image";
import Foot from "@/components/Foot";
import Navbar2 from "@/components/navbar/Navbar2";
import StickyBar from "@/components/StickyBar";
const conference = () => {
  return (
    <>
      <Head>
        <title>About the Logo</title>
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
      <div className="flex item-center justify-center">
        <div className="mx-8 sm:mx-4 mt-4 rounded-lg p-4">
          <div className="flex gap-3 items-center justify-center">
            <h1 className="font-bold text-4xl sm:text-2xl flex items-center justify-center text-center">
              <span className="text-[#385623] text-center flex justify-center items-center">
                B.I.T CONFERENCE’s LOGO :
              </span>
            </h1>
          </div>
          <div className="p-4 mt-4 text-center justify-center flex gap-3 flex-wrap">
            <Image src={confetti} className="h-[28rem] w-[auto] sm:h-[16rem]" />
          </div>
          <div className="">
            <div className="p-4 sm:p-0 flex flex-col gap-1 flex-wrap ">
              <h1 className="font-bold text-2xl sm:text-lg items-center">
                Letter “B” stands for{" "}
                <span className="text-[#002E73] ">
                  Birsa Institute of Technology.
                </span>{" "}
              </h1>
              <h1 className="font-bold text-2xl sm:text-lg items-center">
                Letter “C” stands for{" "}
                <span className="text-[#002E73] "> Conference.</span>
              </h1>
              <p className="text-sm mt-2 sm:mt-2 text-justify sm:text-xs">
                The letter “C” is drawn in such a way that it looks like a
                magnifying glass.{" "}
                <span className="font-bold"> A magnifying glass icon </span>can
                represent the idea of exploring, investigating and searching for
                new ideas which are key elements of research.
              </p>
              <p className="text-sm mt-2 sm:mt-2 text-justify sm:text-xs">
                Research conference often involve collaboration between
                different groups of people. So, B and C are interconnected
                (intertwined B and C) to convey the sense of collaboration.
              </p>
              <p className="text-sm mt-2 sm:mt-2 text-justify sm:text-xs">
                Since the conference is technology oriented, it is incorporated
                with lightning bolt, plug, gear and nanowires (flowing lines).
                <span className="font-bold"> Plug</span> symbolizes the
                connection and flow of electricity. It represents the exchange
                of ideas and networking at the conference.
                <span className="font-bold"> Lightning bolt </span> is
                associated with electricity.{" "}
                <span className="font-bold"> Gear </span>
                is a mechanical term and it represent innovation and
                interconnectivity of components. It conveys the idea of progress
                and technological advancements.
                <span className="font-bold"> Flowing lines </span>represent the
                flow of electricity and energy. And the curve line evokes the
                sense of movement and progress, highlighting the continuous
                advancements in electrical technology. So, the curve “C”
                incorporated with flowing lines.{" "}
                <span className="font-bold"> Nodes</span> or interconnected
                points can symbolize the network of professionals, researchers
                and innovators. It emphasizing the collaborative nature of the
                conference and the importance of connections.
              </p>
              <p className="text-sm mt-2 sm:mt-2 text-justify sm:text-xs">
                <span className="font-bold"> Colour scheme </span>is associated
                with research as{" "}
                <span className="text-[#02BCDD] font-bold">blue</span> and{" "}
                <span className="text-[#385623] font-bold">green</span> colour
                convey the sense of professionalism and seriousness. Blue colour
                tone also represents the sense of trust while the green
                represents the sense of hope. Green colour gear represents green
                energy technology which the theme of the conference.
              </p>
              <p className="text-sm mt-2 sm:mt-2 text-justify sm:text-xs">
                <span className="font-bold">
                  {" "}
                  Tagline (Together towards research){" "}
                </span>
                emphasize the unity in the research community, working together
                can achieve greater heights in the field of research and
                contribution towards growth and innovation. Every Individuals
                can do research and can share their ideas in more areas under
                one umbrella.
              </p>
              <p className="text-sm mt-2 sm:mt-2 text-justify sm:text-xs">
                Overall, the conference conveys the intended message of
                innovation and connectivity among the professionals in the
                technical field. The logo is designed as simple as possible
                making it memorable.
              </p>
            </div>
          </div>
          <div className="mt-4 mx-4">
            <span>Designed By:</span>
            <div className="flex flex-col">
            <span className="text-black font-bold">
              {" "}
              Miss Shweta Kumari
            </span>
            <span className="text-sm">M.Tech (21030750126)</span>
            </div>
          </div>
        </div>
      </div>
      <Foot />
      <StickyBar />
    </>
  );
};

export default conference;
