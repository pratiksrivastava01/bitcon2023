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
import team from "@/assets/team.png";
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
import map from "@/assets/map.png";

function Teams() {
  return (
    <>
      <Head>
        <title>Our Organizing Comitte ✨</title>
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
      <section className="mt-16 mb-12  container-70">
        <div className="my-16 w-full text-center">
          <h1 className="text-5xl text-[#002E73] font-bold">
            Our Organizing Comitte ✨
          </h1>
          {/* <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3> */}
        </div>
        <div className="flex justify-center items-center gap-5 flex-col">
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={boss}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Chief Patron{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Mr. Rahul Purwar, IAS, DHTE, Ranchi</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">
                  Dr. Pankah Rai, Director, BIT Sindri
                </p>
              </li>
            </ul>
          </div>

          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={investor}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Patron{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              {/* <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Mr. Rahul Purwar, IAS, DHTE, Ranchi</p>
              </li> */}
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">
                  Dr. Upendra Prasad, Dean (Student Welfare)
                </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={honor}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Honorary Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Person for IEEE </p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={book}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                General Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Md. Abul Kalam</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={team}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                General Co-Chairs{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. D. K. Tanti</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Vineet Shekhar</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Nirmala Soren</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={planner}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Organizing Chairs{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Amit Kr. Choudhary</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={budget}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Organizing Secretary{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Praveen Kumar</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Mukhlesur Rahman</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={counselor}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Advisory Committee Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Suman Ranjan</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Dipesh Kumar</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={technical}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Technical Program Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Rahul Kumar</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Murli Manohar</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={publication}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Publication Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Amit Kumar Choudhary</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={accounting}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Finance Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Rajendra Murmu</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Shashi Minz</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={hospitality}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Hospitality Chairs{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Rajesh Narayan Deo</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Rakesh Rohan</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={marketing}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Publicity Chairs{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Matta Mani Sankar</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Anuj Kumar Pandey</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={presentation}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Tutorial Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Biswaranjan Mishra</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Hari Charan Verma</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={planning}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Web-Management Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Amit Kr. Choudhary</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Praveen Kumar</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={registration}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Registration Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Manimala</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Sanjay Pal</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={deal}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Sponsorship Chair{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Dr. Rahul Kumar</p>
              </li>
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Mukhlesur Rahman</p>
              </li>
            </ul>
          </div>
          <div className=" p-4 w-[70%] border-primary border-2 rounded-lg shadow-red bg-[#F8FAFC]   ">
            <div className=" flex gap-2 ">
              <Image
                src={map}
                alt="topic"
                className=" h-[3rem] w-[3rem] sm:h-[3rem] border-2 sm:w-[3rem]"
              />
              <h1 className="text-start text-3xl font-bold flex mt-2 item-center shadow-red ">
                Transportation & Accommodation{" "}
              </h1>
            </div>
            <ul className="p-4 ">
              <li className="flex">
                <Image
                  src={member}
                  alt="topic"
                  className=" h-[2rem] w-[2rem] sm:h-[2rem] border-2 sm:w-[2rem]"
                />
                <p className="mt-2 ml-2">Prof. Rajesh Narayan Deo</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Teams;
