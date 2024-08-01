import Head from "next/head";
import Styles from "@/components/teams/Team.module.css";
import Navbar from "@/components/navbar/Navbar";
import Nav3 from "@/components/home/Nav3";
import Image from "next/image";

import boss from "@/assets/boss.png";
import member from "@/assets/member-card.png";
import investor from "@/assets/investor.png";
import honor from "@/assets/honor.png";
import book from "@/assets/book.png";
import trophy from "@/assets/trophy.png";
import planner from "@/assets/planner.png";
import budget from "@/assets/budget.png";
import counselor from "@/assets/counselor.png";
import technical from "@/assets/technical.png";
import publication from "@/assets/publication.png";
import accounting from "@/assets/accounting.png";
import hospitality from "@/assets/hospitality.png";
import marketing from "@/assets/marketing.png";
import presentation from "@/assets/presentation.png";
import planning from "@/assets/planning.png";
import registration from "@/assets/registration.png";
import deal from "@/assets/deal.png";
import eventmanagement from "@/assets/eventmanagement.png";
import Foot from "@/components/Foot";

function Teams() {
  return (
    <>
      <Head>
        <title> Organizing Committee ✨</title>
        <meta
          name="description"
          content="Teams of HnCC (Hackathon & Coding Club), BIT Sindri, Dhanbad"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Team of HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Navbar />
      <Nav3 />
      <section className="mt-12 mb-12  container-70">
        <div className="my-12 w-full text-center">
          <h1 className="text-4xl text-[#002E73] font-bold">
            Organizing Committee ✨
          </h1>
          {/* <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3> */}
        </div>
        <div className="flex justify-center items-center gap-5 flex-col">
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center items-center">
              <Image
                src={boss}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-2xl font-bold flex mt-2 item-center shadow-red ">
                Chief Patron{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              {/* <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">
                  Mr. Rahul Purwar, (IAS) Secretary , DHTE, Ranchi
                </p>
              </li> */}
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">
                  Prof. D.K. Singh, Vice Chancellor, JUT, Ranchi
                </p>
              </li>
            </ul>
          </div>

          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={investor}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-2xl font-bold flex mt-2 item-center shadow-red ">
                Patron{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              {/* <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">
                  Mr. Syed Riyaz Ahmed, (IAS) Under Secretary, DHTE, Ranchi
                </p>
              </li> */}
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">
                  Prof. Pankaj Rai, Director, BIT Sindri
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={honor}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-2xl font-bold flex mt-2 item-center shadow-red ">
                Conference Chairs{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Md. Abul Kalam, Head, EED </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={book}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-2xl font-bold flex mt-2 item-center shadow-red ">
                General Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Upendra Prasad, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. D. K. Tanti, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Nirmala Soren, EED</p>
              </li>
            </ul>
          </div>
          {/* <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={team}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                General Co-Chairs{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Dr. D. K. Tanti</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Dr. Vineet Shekhar</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Dr. Nirmala Soren</p>
              </li>
            </ul>
          </div> */}
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={budget}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-2xl font-bold flex mt-2 item-center shadow-red ">
                Convenor{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Vineet Shekher, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Amit Kr. Choudhary, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={planner}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-2xl font-bold flex mt-2 item-center shadow-red ">
                Conference Secretary{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Praveen Kumar, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Mukhlesur Rahman</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Matta Mani Sankar, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <span className="text-start text-2xl font-bold">
              Faculty Coordinators
            </span>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-2xl font-bold flex mt-2 item-center shadow-red ">
                Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Manimala, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Hari Charan Verma, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rajesh Narayan Deo, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rahul Kumar, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Murli Manoha, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Dipesh Kumar, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={eventmanagement}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-2xl font-bold flex mt-2 item-center shadow-red ">
                Team Members{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rekha Jha, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Anuj Kumar Pandey, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rakesh Rohan, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Kaushik Paul, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Suman Ranjan, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Biswaranjan Mishra, EED</p>
              </li>
            </ul>
          </div>
          {/* <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={publication}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Publication Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Manimala , EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Praveen Kumar, EED</p>
              </li>
            </ul>
          </div> */}
          {/* <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={accounting}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Finance Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rajendra Murmu, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Shashi Minz, EED</p>
              </li>
            </ul>
          </div> */}
          {/* <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={hospitality}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Hospitality Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rajesh Narayan Deo, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rakesh Rohan, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={marketing}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Publicity Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Biswaranjan Mishra, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Anuj Kumar Pandey, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={presentation}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Tutorial Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Sanjay Pal, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Hari Charan Verma, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={planning}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Web-Management Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Amit Kr. Choudhary, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Matta Mani Sankar, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={registration}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Registration Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Manimala, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Sanjay Pal, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={deal}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Sponsorship Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Mukhlesur Rahman, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rajesh Narayan Deo, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={eventmanagement}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Event Management Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rahul Kumar, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Murli Manohar, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={trophy}
                alt="topic"
                className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Award Coordinators{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Rekha Jha, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2">Prof. Hari Charan Verma, EED</p>
              </li>
            </ul>
          </div> */}
          {/* <div></div> */}
        </div>
      </section>
      <Foot />
    </>
  );
}

export default Teams;
