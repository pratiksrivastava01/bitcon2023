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

const Footer = () => {
  return (
    <div className="flex flex-row items-center sm:flex-col bg-[#F8FAFC] justify-center padding-container ">
      {/* <div className="h-auto w-[25rem]  mt-[5rem]  shadow-2xl  rounded-lg sm:h-auto sm:w-[21rem]">
        <div className="p-5">
          <div className="flex gap-5 rounded-lg p-2  shadow-lg bg-blue bg-opacity-20">
            <Image
              src={team}
              alt="team"
              className=" h-[4rem] w-[4rem] sm:h-[3rem] sm:w-[3rem]"
            />
            <h1 className="font-bold text-3xl sm:text-xl items-center flex justify-center">
              Core Team
            </h1>
          </div>
          <div className="flex gap-5 mt-[2rem] border-2 rounded-lg  p-2">
            <Image
              src={cp}
              alt="team"
              className=" h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]"
            />
            <h2 className=" font-bold text-lg sm:text-sm flex items-center ">
              Chief-Patron
            </h2>
          </div>
          <p className="p-2">
            Prof. D. K. Singh <br /> Director, BIT Sindri
          </p>
          <div className="flex gap-5 mt-[1rem] border-2 rounded-lg p-2">
            {" "}
            <Image
              src={pt}
              alt="team"
              className=" h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]"
            />
            <h2 className=" font-bold text-lg sm:text-sm flex items-center">
              Patron
            </h2>
          </div>
          <p className="p-2">
            Dr. Md. Abul Kalam <br /> HOD, EED, BIT Sindri
          </p>
          <div className="flex gap-5 mt-[1rem] border-2 rounded-lg p-2">
            {" "}
            <Image
              src={organizer}
              alt="team"
              className=" h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]"
            />
            <h2 className="flex items-center font-bold text-lg sm:text-sm">
              Organizing Chairman(s):
            </h2>
          </div>
          <p className="p-2">
            Dr Pankaj Rai <br /> Dept. of EE, BIT Sindri <br /> Dr. D. K. Tanti{" "}
            <br /> Dept. of EE, BIT Sindri
          </p>
          <div className="flex gap-5 mt-[1rem] border-2 rounded-lg p-2">
            {" "}
            <Image
              src={manager}
              alt="team"
              className=" h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]"
            />
            <h2 className="flex items-center font-bold text-lg sm:text-sm">
              Organizing Secretary(s):
            </h2>
          </div>
          <p className="p-2">
            Dr. Vineet Shekher <br /> Dept. of EE, BIT Sindri <br /> Dr. A. K.
            Choudhary <br /> Dept. of EE, BIT Sindri
          </p>
          <div className="flex gap-5 mt-[1rem] border-2 rounded-lg p-2">
            {" "}
            <Image
              src={budget}
              alt="team"
              className=" h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]"
            />
            <h2 className="flex items-center font-bold text-lg sm:text-sm">
              Treasurer:
            </h2>
          </div>
          <p className="p-2">
            Dr. Nirmala Soren <br /> Dept. of EE, BIT Sindri <br /> Dr. Rajendra
            Murmu <br /> Dept. of EE, BIT Sindri
          </p>
          <div className="flex gap-5 mt-[1rem] border-2 rounded-lg p-2">
            {" "}
            <Image
              src={coordination}
              alt="team"
              className=" h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]"
            />
            <h2 className="flex items-center font-bold text-lg sm:text-sm">
              Coordinators
            </h2>
          </div>
          <p className="p-2">
            Prof. Praveen Kumar <br /> Dept. of EE, BIT Sindri <br /> Prof.
            Mukhlesur Rahman <br />
            Dept. of EE, BIT Sindri
          </p>
          <div className="flex gap-5 mt-[3rem] border-2 rounded-lg p-2">
            {" "}
            <Image
              src={schedule}
              alt="team"
              className=" h-[2rem] w-[2rem] sm:h-[3rem] sm:w-[3rem]"
            />
            <h1 className=" flex items-center font-bold text-lg sm:text-sm">
              Key Dates (Tentative):
            </h1>
          </div>
          <div className="p-2">
            Start of paper submission: <br />
            <span className="font-bold text-lg">
              {" "}
              01 June, 2023
            </span> <br /> Deadline for submission: <br />
            <span className="font-bold text-lg">
              {" "}
              15 August, 2023{" "}
            </span> <br /> Paper Acceptance notification: <br />
            <span className="font-bold text-lg">
              {" "}
              30 October, 2023
            </span> <br /> Camera ready version: <br />
            <span className="font-bold text-lg">
              01 November, 2023
            </span> <br /> Registration Commences: <br />
            <span className="font-bold text-lg">15 November, 2023</span> <br />
            Registration Closes: <br />
            <span className="font-bold text-lg">
              30 November, 2023
            </span> <br /> Conference Date: <br />
            <span className="font-bold text-lg">22-23 December, 2023</span>
          </div>
        </div>
      </div> */}
      <div className="h-auto w-[80rem] mt-[3rem] padding-container rounded-lg shadow-2xl  sm:ml-[0.2rem] ml-[2rem] sm:h-auto sm:w-[21rem]">
        <div className="p-5 sm:mt-[2rem] ml-[1rem] mr-[1rem] sm:text-xs text-left mt-[2rem] bg-red bg-opacity-10 rounded-lg">
          The Department of Electrical Engineering at BIT SINDRI proudly
          announces to host the{" "}
          <span className="text-xl text-[#002E73] sm:text-sm font-bold">
            {" "}
            Flagship BIT CONFERENCE-2023- An International Conference.
          </span>{" "}
          This would be a beginning of the annual conference at BIT-Sindri and
          will commemorate its Platinum Jubilee. <br />
          <br /> The Conference 2023 will be a three-day event starting with
          tutorials on emerging and proven technologies in different areas of
          electrical on day one. Following days will accumulate the formal
          conference. The conference will feature plenary and semi-plenary talks
          by eminent personalities from academia / industry, and peer-reviewed
          oral and poster presentations. BITCON-2023
          <br />
          <div className="">
            <div className="flex flex-wrap  items-center justify-center mt-4">
              <div
                className="flex 
              "
              >
                <Image
                  src={topic}
                  alt="topic"
                  className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
                />
                <p className="text-xl flex items-center  text-[#002E73] sm:text-sm font-bold">
                  Theme:
                </p>
              </div>
              <span className="text-xl text-[#002E73] sm:text-sm font-bold ">
                “Next Generation Applications in Green Engineering Technology”
              </span>
            </div>
          </div>
          <p className="mt-[1rem]">
            <span className="text-xl text-[#af2a2a] sm:text-sm mr-3 mt-[2rem] font-bold gap-3 ">
              Highlights:
            </span>
            There will be three major tracks namely (i) Electrical Engineering,
            (ii) Mechatronics & Robotics and (iii) Green Engineering Technology.
            Each track has the following main components; a) Paper presentations
            and best paper awards for each track, b) Poster presentations and
            best poster awards for each track, c) Key Note Lectures, d) Panel
            discussions, e) Awards for best M.Tech Dissertation, and f) Awards
            for best PhD Thesis.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex items-center mt-[2rem]">
            <Image
              src={evaluation}
              alt="evaluation"
              className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
            />
            <h1 className="p-5  text-primary font-bold text-2xl sm:mt-0 ml-[1rem] mr-[1rem] sm:text-lg text-center">
              Tracs
            </h1>
          </div>
        </div>
        <ul className=" p-4 flex justify-start flex-col  gap-5">
          <li className="flex justify-between flex-wrap">
            <li className="flex items-center gap-5 font-bold">
              <Image src={point} alt="point" className=" h-[2rem] w-[2rem] " />
              Power System Dynamics:
            </li>
            <li className="flex items-center gap-5 font-bold">
              <Image src={point} alt="point" className=" h-[2rem] w-[2rem] " />
              Power Electronics Drives & Applications:
            </li>
          </li>
          <li className="flex justify-between flex-wrap">
            <li className="flex items-center gap-5 font-bold">
              <Image src={point} alt="point" className=" h-[2rem] w-[2rem] " />
              Automation & Applications:
            </li>
            <li className="flex items-center gap-5 font-bold ">
              <Image src={point} alt="point" className=" h-[2rem] w-[2rem] " />
              Green Energy Technology & Applications:
            </li>
          </li>
          <li className="flex items-center gap-5 font-bold">
            <Image src={point} alt="point" className=" h-[2rem] w-[2rem] " />
            Artificial Intelligence, IoT and Signal Processing
          </li>
        </ul>

        <div className=" flex justify-center  ">
          <Link href="/CallForPaper">
            <button className="border-2 border-[white] text-[white] rounded-xl bg-[#002E73] hover:bg-[white] hover:text-[#002E73] hover:border-[#002E73] p-4">
              View More
            </button>
          </Link>
        </div>

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
              Attempt is being made to publish the registered and only presented
              papers on IEEE Xplore Digital Library.
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
            comply with the IEEE format and specifications and must be original,
            not previously published or accepted for publication elsewhere, and
            they must not be submitted to any other event or publication during
            the entire review process. All submissions must be in English only
            and in PDF format.
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
            BITCON-2023 will also provide the platform for young professionals
            who have recently completed their M.Tech Dissertation and PhD thesis
            in the area of Electrical Engineering. The M.Tech and PhD degrees
            must be awarded between 1st November 2022 to 31st November 2023 from
            any Indian Institute/University. The submitted theses will be
            evaluated by the senior panel of experts, on their recommendations,
            one thesis in each area will be awarded the best PhD thesis award
            for year 2022.
          </p>
          <p className="p-4 sm:text-xs">
            <span className="text-[#002E73] font-bold text-xl  flex items-center gap-3 sm:text-sm">
              <Image
                src={union}
                alt="publication"
                className=" h-[2rem] w-[2rem] "
              />
              Inclusion in IEEE Explore:{" "}
            </span>
            All the excepted and presented papers in the BITCON-2023 will be
            submitted from inclusion in IEEE EXPLORE digital library
          </p>
        </div>
        <p className="p-4 sm:text-xs">
          <span className="text-[#002E73] font-bold text-xl ml-8  sm:text-sm">
            BIT Sindri, Dhanbad:{" "}
          </span>
          Established in 1949, and affiliated to Jharkhand University of
          Technology (JUT), Ranchi is the only Government Institute in
          Jharkhand. It is located in the Coal Capital of India, Dhanbad. The
          campus spreads over an area of 450 acres of land, near the eastern
          bank of Damodar River. It is fully residential, both for faculty as
          well as the students
        </p>
      </div>
    </div>
  );
};

export default Footer;
