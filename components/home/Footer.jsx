import Link from "next/link";
import React from "react";
import Image from "next/image";

import topic from "@/assets/topic.png";
import evaluation from "@/assets/evaluation.png";
import point from "@/assets/point.png";
import publication from "@/assets/publication.png";
import document from "@/assets/document.png";
import trophy from "@/assets/trophy.png";
import union from "@/assets/union.png";
import Foot from "../Foot";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row items-center sm:flex-col bg-[#F8FAFC] justify-center  ">
        <div className="h-auto mx-[3rem] sm:w-full mt-[3rem] p-8 sm:p-4 rounded-lg shadow-2xl sm:mx-0 sm:mt-0  ">
          <div className="p-4 text-sm mx-[0rem] sm:text-xs text-left bg-red bg-opacity-10 rounded-lg">
            The Department of Electrical Engineering, BIT SINDRI proudly
            announces to host the{" "}
            <span className="text-lg text-[#002E73]  sm:text-sm font-bold">
              {" "}
              Flagship International BIT CONFERENCE-2024.
            </span>{" "}
            This would be a beginning of the annual conference BIT-Sindri and
            will commemorate its Platinum Jubilee. <br />
            <br /> The Conference will be a two-day event starting with
            tutorials on emerging and proven technologies in different areas of
            electrical on day zero. Following days will accumulate the formal
            conference. The conference will feature plenary and semi-plenary
            talks by eminent personalities from academia / industry, and
            peer-reviewed oral and poster presentations. BITCON-2024
            <br />
            <div className="">
              <div className="flex flex-wrap sm:justify-start items-center justify-center mt-4">
                <div
                  className="flex gap-1 sm:items-start items-center">
                  <Image
                    src={topic}
                    alt="topic"
                    className=" h-[2rem] w-[auto] sm:h-[1.5rem] border-2"
                  />
                  <p className="text-xl flex  text-[#002E73] sm:text-sm font-bold">
                    Theme: <span className="ml-1 text-xl text-wrap text-[#002E73] sm:text-xs font-bold ">
                  “Next Generation Applications in Green Energy Technology”
                </span>
                  </p>
                </div>
                
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center mt-[2rem]">
              <Image
                src={evaluation}
                alt="evaluation"
                className="h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="p-5 sm:p-0 text-primary font-bold text-2xl sm:mt-0 ml-[1rem] mr-[1rem] sm:text-lg text-center">
                Tracks
              </h1>
            </div>
          </div>
          <ul className=" p-4 sm:px-0 flex justify-start text-sm sm:text-xs flex-col gap-3">
            <li className="flex flex-row sm:flex-col justify-between flex-wrap gap-2">
              <li className="flex flex-1 items-center sm:gap-3 gap-5 sm:items-start font-semibold">
                <Image
                  src={point}
                  alt="point"
                  className="sm:h-[1rem] h-[2rem] w-[auto] "
                />
                Power systems, Smart Grid, Smart City, Smart Systems and
                Technologies
              </li>
              <li className="flex flex-1 items-center sm:gap-3 gap-5 sm:items-start font-semibold">
                <Image
                  src={point}
                  alt="point"
                  className="sm:h-[1rem] h-[2rem] w-[auto] "
                />
                Power Electronics Drives and Electric Vehicles
              </li>
            </li>
            <li className="flex flex-row sm:flex-col  justify-between flex-wrap gap-2">
              <li className="flex flex-1 items-center sm:gap-3 gap-5 sm:items-start font-semibold">
                <Image
                  src={point}
                  alt="point"
                  className="sm:h-[1rem] h-[2rem] w-[auto] "
                />
                Control System, Automation & Applications
              </li>
              <li className="flex flex-1 items-center sm:gap-3 gap-5 sm:items-start font-semibold ">
                <Image
                  src={point}
                  alt="point"
                  className="sm:h-[1rem] h-[2rem] w-[auto] "
                />
                Green Energy Technology & Applications:
              </li>
            </li>
            <li className="flex  flex-1 items-center sm:gap-3 gap-5 sm:items-start font-semibold">
              <Image src={point} alt="point" className="sm:h-[1rem] h-[2rem] w-[auto] " />
              Artificial Intelligence, IoT, Machine Learning and Signal
              Processing
            </li>
          </ul>

          <div className="mt-[1rem]">
            <p className="mt-4 sm:text-xs ">
              <span className="text-[#002E73] font-bold text-lg  flex items-center gap-3 sm:text-sm">
                <Image
                  src={publication}
                  alt="publication"
                  className=" h-[1.5rem] w-[1.5rem]  "
                />
                Publication:{" "}
              </span>
              <p className="mt-4 text-sm sm:text-xs">
                All the Selected, Registerd and only presented papers will be
                sent to and make abailable on IEEE Digital Xplore based on the
                IEEE publications ethics.
              </p>
            </p>{" "}
            <p className="mt-4 sm:text-xs">
              <span className="text-[#002E73] font-bold text-lg  flex items-center gap-3 sm:text-sm">
                <Image
                  src={document}
                  alt="publication"
                  className=" h-[1.5rem] w-[1.5rem]  "
                />
                Paper Submission:{" "}
              </span>
              <p className="mt-4 text-sm sm:text-xs">
                Papers submitted for both oral and poster presentations should
                comply with the IEEE format and specifications and must be
                original, not previously published or accepted for publication
                elsewhere, and they must not be submitted to any other event or
                publication during the entire review process.
              </p>
            </p>{" "}
            <p className="mt-4 sm:text-xs ">
              <span className="text-[#002E73] font-bold text-lg  flex items-center gap-3 sm:text-sm">
                <Image
                  src={trophy}
                  alt="publication"
                  className=" h-[1.5rem] w-[1.5rem] "
                />
                Call for M.Tech Dissertation and PhD Thesis Awards:{" "}
              </span>
              <p className="mt-4 text-sm sm:text-xs">
                BITCON-2024 will also provide the platform for young
                professionals who have recently completed their M.Tech
                Dissertation and PhD thesis in the area of Electrical
                Engineering. The M.Tech and PhD degrees must be awarded between
                1st January 2023 to 31st December 2023 from any recognised
                Indian Institute/University. The submitted theses will be
                evaluated by the senior panel of experts, on their
                recommendations, one thesis in each area will be awarded the
                best PhD thesis award for year 2024.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
