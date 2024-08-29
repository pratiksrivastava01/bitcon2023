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
import Link from "next/link";

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
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. (Dr.) D. K. Singh, <i>Vice Chancellor, JUT, Ranchi</i>
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
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. (Dr.) Pankaj Rai, <i>Director, BIT Sindri</i>
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
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Md. Abul Kalam, <i> Head, EED</i>{" "}
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
                General Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. (Dr.) Upendra Prasad, <i>EED</i> </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. (Dr.) D. K. Tanti, <i>EED</i> </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. (Dr.) Nirmala Soren, <i> EED</i></p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={budget}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl sm:text-lg font-bold flex mt-2 item-center shadow-red ">
                Convenors{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Vineet Shekher, <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Amit Kr. Choudhary, <i> EED</i>
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
                Conference Secretaries{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Praveen Kumar, <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Mukhlesur Rahman,  <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                  Prof. Matta Mani Sankar, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <span className="text-start text-2xl sm:text-lg font-bold">
              Committee Chairs
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
              Finance Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rajendra Murmu, <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Shashi Minz, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Advisory Committee Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rahul Kumar, <i> EED</i> </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Suman Ranjan, <i> EED</i>
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Biswaranjan Mishra, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Technical Program Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Murli Manohar,  <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Kaushik Pal, <i> EED</i>
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Dipesh Kumar, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Publication Chair{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Praveen Kumar, <i> EED</i></p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Hospitality Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rajesh Narayan Deo, <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Rakesh Rohan, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Publicity Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Biswaranjan Mishra,  <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Anuj Kumar Pandey,  <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Tutorial Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Sanjay Pal,  <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Hari Charan Verma, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Web-Management Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Matta Mani Sankar,  <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Akram Khan, <i>CSE</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Registration Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Manimala,  <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Sanjay Pal, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Sponsorship Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Mukhlesur Rahman,  <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Rajesh Narayan Deo, <i> EED</i>
                </p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Rahul Kumar, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Event Management Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rahul Kumar, <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Murli Manohar, <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Awards Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Rekha Jha, <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Hari Charan Verma,  <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
              Press, Media Management Chairs{" "}
              </h1>
            </div>
            <ul className="p-2 ">
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">Prof. Manimala,  <i> EED</i></p>
              </li>
              <li className="flex items-center">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                />
                <p className="mt-2 ml-2 text-sm">
                Prof. Suman Ranjan,  <i> EED</i>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Foot />
      <div className="fixed z-[1000] h-auto w-max top-[9rem] right-[1rem] flex flex-col gap-2">
      <Link href="/awards" legacyBehavior className="p-2">
            <a className="bg-red text-primary-light hover:shadow-md rounded-md active:-translate-y-1 delay-100 font-bold px-4 py-2 sm:p-2 text-sm sm:text-xs">Register Now</a>
          </Link>
          <Link href="/awards" legacyBehavior className="p-2">
            <a className=" border-[white] text-[white] rounded-md bg-[#002E73] hover:shadow-md hover:text-[white] hover:border-[#002E73] delay-75 active:-translate-y-1 px-4 py-2 sm:text-xs">Submit Now</a>
          </Link>
      </div>
    </>
  );
}

export default Teams;
