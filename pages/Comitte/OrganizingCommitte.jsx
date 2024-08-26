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
import Navbar2 from "@/components/navbar/Navbar2";

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
      <Navbar2 />
      <Nav3 />
      <section className="mt-12 sm:mt-6 mb-12  container-70">
        <div className="mt-12 sm:mt-6 w-full text-center">
          <h1 className="text-4xl sm:text-2xl text-[#002E73] font-bold">
            Organizing Committee ✨
          </h1>
        </div>
        <div className="mt-10 sm:mt-4 flex justify-center items-center gap-5 flex-col">
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]">
            <div className=" flex gap-2 items-center">
              <Image
                src={boss}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl sm:text-lg font-bold flex mt-2 item-center shadow-red ">
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
                <p className="mt-2 ml-2 text-sm">
                  Mr. Rahul Purwar, (IAS) Secretary , DHTE, Ranchi
                </p>
              </li> */}
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. D.K. Singh, Vice Chancellor, JUT, Ranchi
                </p>
              </li>
            </ul>
          </div>

          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={investor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl sm:text-lg font-bold flex mt-2 item-center shadow-red ">
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
                <p className="mt-2 ml-2 text-sm">
                  Mr. Syed Riyaz Ahmed, (IAS) Under Secretary, DHTE, Ranchi
                </p>
              </li> */}
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Pankaj Rai, Director, BIT Sindri
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={honor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl sm:text-lg font-bold flex mt-2 item-center shadow-red ">
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
                <p className="mt-2 ml-2 text-sm">
                  Prof. Md. Abul Kalam, Head, EED{" "}
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={book}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl sm:text-lg font-bold flex mt-2 item-center shadow-red ">
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
                <p className="mt-2 ml-2 text-sm">Prof. Upendra Prasad, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. D. K. Tanti, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Nirmala Soren, EED</p>
              </li>
            </ul>
          </div>
          {/* <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={team}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Dr. D. K. Tanti</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Dr. Vineet Shekhar</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Dr. Nirmala Soren</p>
              </li>
            </ul>
          </div> */}
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={budget}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl sm:text-lg font-bold flex mt-2 item-center shadow-red ">
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
                <p className="mt-2 ml-2 text-sm">Prof. Vineet Shekher, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Amit Kr. Choudhary, EED
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={planner}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
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
                <p className="mt-2 ml-2 text-sm">Prof. Praveen Kumar, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Mukhlesur Rahman</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Matta Mani Sankar, EED
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <span className="text-start text-2xl sm:text-lg font-bold">
              Faculty Coordinators
            </span>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
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
                <p className="mt-2 ml-2 text-sm">Prof. Manimala, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Hari Charan Verma, EED
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Rajesh Narayan Deo, EED
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rahul Kumar, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Murli Manoha, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Dipesh Kumar, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={eventmanagement}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
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
                <p className="mt-2 ml-2 text-sm">Prof. Rekha Jha, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Anuj Kumar Pandey, EED
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rakesh Rohan, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Kaushik Paul, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Suman Ranjan, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Biswaranjan Mishra, EED
                </p>
              </li>
            </ul>
          </div>
          {/* <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={publication}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Manimala , EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Praveen Kumar, EED</p>
              </li>
            </ul>
          </div> */}
          {/* <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={accounting}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Rajendra Murmu, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Shashi Minz, EED</p>
              </li>
            </ul>
          </div> */}
          {/* <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={hospitality}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Rajesh Narayan Deo, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rakesh Rohan, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={marketing}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Biswaranjan Mishra, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Anuj Kumar Pandey, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={presentation}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Sanjay Pal, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Hari Charan Verma, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={planning}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Amit Kr. Choudhary, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Matta Mani Sankar, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={registration}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Manimala, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Sanjay Pal, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={deal}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Mukhlesur Rahman, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rajesh Narayan Deo, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={eventmanagement}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Rahul Kumar, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Murli Manohar, EED</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={trophy}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
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
                <p className="mt-2 ml-2 text-sm">Prof. Rekha Jha, EED</p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Hari Charan Verma, EED</p>
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
