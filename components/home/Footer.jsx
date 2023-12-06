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
        <div className="h-auto w-[80rem] sm:w-full mt-[3rem] padding-container rounded-lg shadow-2xl sm:ml-0  ml-[2rem]  ">
          <div className="p-5 sm:mt-[2rem] sm:ml-0 sm:mr-0  ml-[1rem] mr-[1rem] sm:text-xs text-left mt-[2rem] bg-red bg-opacity-10 rounded-lg">
            The Department of Electrical Engineering, BIT SINDRI proudly
            announces to host the{" "}
            <span className="text-xl text-[#002E73]  sm:text-sm font-bold">
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
              <div className="flex flex-wrap sm:justify-start  items-center justify-center mt-4">
                <div
                  className="flex 
              "
                >
                  <Image
                    src={topic}
                    alt="topic"
                    className=" h-[3rem] w-[3rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                  />
                  <p className="text-xl flex items-center  text-[#002E73] sm:text-sm font-bold">
                    Theme:
                  </p>
                </div>
                <span className="text-xl text-[#002E73] sm:text-xs font-bold ">
                  “Next Generation Applications in Green Energy Technology”
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex items-center mt-[2rem]">
              <Image
                src={evaluation}
                alt="evaluation"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="p-5  text-primary font-bold text-2xl sm:mt-0 ml-[1rem] mr-[1rem] sm:text-lg text-center">
                Tracks
              </h1>
            </div>
          </div>
          <ul className=" p-4 flex justify-start flex-col  gap-5">
            <li className="flex justify-between flex-wrap">
              <li className="flex items-center gap-5 font-bold">
                <Image
                  src={point}
                  alt="point"
                  className=" h-[2rem] w-[2rem] "
                />
                Power systems, Smart Grid, Smart City, Smart Systems and
                Technologies
              </li>
              <li className="flex items-center gap-5 font-bold">
                <Image
                  src={point}
                  alt="point"
                  className=" h-[2rem] w-[2rem] "
                />
                Power Electronics Drives and Electric Vehicles
              </li>
            </li>
            <li className="flex justify-between flex-wrap">
              <li className="flex items-center gap-5 font-bold">
                <Image
                  src={point}
                  alt="point"
                  className=" h-[2rem] w-[2rem] "
                />
                Control System, Automation & Applications
              </li>
              <li className="flex items-center gap-5 font-bold ">
                <Image
                  src={point}
                  alt="point"
                  className=" h-[2rem] w-[2rem] "
                />
                Green Energy Technology & Applications:
              </li>
            </li>
            <li className="flex items-center gap-5 font-bold">
              <Image src={point} alt="point" className=" h-[2rem] w-[2rem] " />
              Artificial Intelligence, IoT, Machine Learning and Signal
              Processing
            </li>
          </ul>

          <div className="mt-[1rem]">
            <p className="p-4 sm:text-xs ">
              <span className="text-[#002E73] font-bold text-xl  flex items-center gap-3 sm:text-sm">
                <Image
                  src={publication}
                  alt="publication"
                  className=" h-[2rem] w-[2rem] "
                />
                Publication:{" "}
              </span>
              <p className="">
                Attempt is being made to publish the registered and only
                presented papers on IEEE Xplore Digital Library. Keep visiting
                the website for updates.
              </p>
            </p>{" "}
            <p className="p-4 sm:text-xs">
              <span className="text-[#002E73] font-bold text-xl  flex items-center gap-3 sm:text-sm">
                <Image
                  src={document}
                  alt="publication"
                  className=" h-[2rem] w-[2rem] "
                />
                Paper Submission:{" "}
              </span>
              Papers submitted for both oral and poster presentations should
              comply with the IEEE format and specifications and must be
              original, not previously published or accepted for publication
              elsewhere, and they must not be submitted to any other event or
              publication during the entire review process.
            </p>{" "}
            <p className="p-4 sm:text-xs">
              <span className="text-[#002E73] font-bold text-xl  flex items-center gap-3 sm:text-sm">
                <Image
                  src={trophy}
                  alt="publication"
                  className=" h-[2rem] w-[2rem] "
                />
                Call for M.Tech Dissertation and PhD Thesis Awards:{" "}
              </span>
              BITCON-2024 will also provide the platform for young professionals
              who have recently completed their M.Tech Dissertation and PhD
              thesis in the area of Electrical Engineering. The M.Tech and PhD
              degrees must be awarded between 1st January 2023 to 31st December
              2023 from any recognised Indian Institute/University. The
              submitted theses will be evaluated by the senior panel of experts,
              on their recommendations, one thesis in each area will be awarded
              the best PhD thesis award for year 2024.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
