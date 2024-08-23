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
import { TechnicalMembers } from "@/constants";
import Navbar2 from "@/components/navbar/Navbar2";

const TechnicalCommitte = () => {
const TechMembers=TechnicalMembers;
  return (
    <>
      <Head>
        <title>Technical Committe</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades.."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Navbar2 />
      <Nav3 />
      <section className="mt-12 sm:mt-6 mb-12  container-70">
        <div className="mt-12 sm:mt-6 w-full text-center">
          <h1 className="text-4xl sm:text-2xl text-[#002E73] font-bold">
            Technical Committee ✨
          </h1>
        </div>
        <div className="mt-10 sm:mt-4 flex justify-center items-center gap-5 flex-col">
          <div className=" p-4 w-[70%] sm:w-[90%] sm:border sm:p-2 border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 items-center ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[2rem] w-[auto] sm:h-[2rem] border-2"
              />
              <h1 className="text-start text-2xl font-bold flex sm:text-lg mt-2 item-center shadow-red ">
                Committee Members{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              {TechMembers.map((memberDetail,key)=>{
                return (
                  <li className="flex items-center">
                    <Image
                      src={member}
                      alt="topic"
                      className=" h-[1.5rem] w-[1.5rem] sm:h-[1.5rem] border-2 sm:w-[1.5rem]"
                    />
                    <p className="mt-2 ml-2 text-sm">
                      {memberDetail.member}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <Foot />
    </>
  );
};

export default TechnicalCommitte;
