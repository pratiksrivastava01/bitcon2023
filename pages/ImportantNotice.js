import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Navbar2 from "@/components/navbar/Navbar2";
import Foot from "@/components/Foot";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import StickyBar from "@/components/StickyBar";
import Image from "next/image";
import ieeeNotice from "@/assets/ieeeNotice.png";
const awards = () => {
  return (
    <>
      {" "}
      <Head>
        <title>Awards</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <div className=" flex flex-col ">
        <Navbar2 />
        <Nav3 />
        <section className="mt-8 sm:mt-4 mb-12 container-70">
          <div className="w-full text-center">
            <h1 className="text-4xl sm:text-2xl text-[#002E73] font-bold">
              Important Notice
            </h1>
          </div>
          <div className="mx-[2rem]  rounded-lg justify-center flex flex-col border-primary shadow-2xl sm:mt-0 mt-[0.5rem] sm:mx-[0rem] sm:p-4 sm:h-auto">
            <div className="p-4 flex flex-col gap-2 flex-wrap items-start">
              <h1 className="font-bold text-xl sm:text-lg items-center">
                I. Instructions to submit updated/revised manuscript:
              </h1>
              <div className=" mb-4 sm:mb-0 ml-2">
                <ul className="list-decimal ml-5 mt-2 text-sm sm:text-xs text-justify">
                  <li>Login to your easy chair account.</li>
                  <li>On the Authors page, the submissions is available.</li>
                  <li>
                    Besides that, under the view tab, click on the shown mirror.
                  </li>
                  <li>
                    This will take you to the particular submission record.
                  </li>
                  <li>
                    Here, on the top right corner, “Update File” tab is
                    available.
                  </li>
                  <li>
                    Click on that tab and submit the Updated/Revised version.
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-wrap items-start">
              <h1 className="font-bold text-xl sm:text-lg items-center">
                II. Instructions for preparation of PPT:
              </h1>
              <div className=" mb-4 sm:mb-0 ml-2">
                <ul className="list-decimal ml-5 mt-2 text-sm sm:text-xs text-justify">
                  <li>
                    <b>Template for PPT:</b> Will be uploaded soon
                  </li>
                  <li>
                    <b>Online participants</b>
                    <ul className="list-decimal ml-5 mt-2 text-sm sm:text-xs">
                      <li>
                        The presentation should not exceed 07 Minutes and not
                        more than 15 slides.
                      </li>
                      <li>
                        The online presentations are to be prepared with AI
                        assisted voice and the steps are the same are shown in
                        below flowchart:
                      </li>
                      <Image src={ieeeNotice} />
                      <li>
                        The PPT are to be uploaded through the google form link
                        given below by 30.11.2024
                      </li>
                      <li>
                        Google from link for submitting online presentations:
                        Will be updated soon.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Offline participants:</b>
                    <ul className="list-decimal ml-5 mt-2 text-sm sm:text-xs">
                      <li>
                        The presentation should not exceed 07 Minutes and not
                        more than 15 slides.
                      </li>
                      <li>
                        Offline participants can also upload their presentation
                        in the google form provided for online presentations.
                        These presentations will be used as emergency backup.
                        However, this is optional and any such PPTs uploaded
                        should be made by using AI assisted voice as shown in
                        the flow chart.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-wrap items-start">
              <h1 className="font-bold text-xl sm:text-lg items-center">
                III. How to reach BIT Sindri (Offline participants):
              </h1>
              <div className=" mb-4 sm:mb-0 ml-2">
                <ul className="list-decimal ml-5 mt-2 text-sm sm:text-xs text-justify">
                  <li>
                    <b>RAILWAYS:</b> Dhanbad Junction is the nearest Railway
                    Station & is most important junction of the state as it is
                    connected directly to all major cities of India, viz.
                    Kolkata, Mumbai, Delhi, Chennai, Bangalore, Nagpur, Pune,
                    Ranchi, Jammu, Visakhapatnam, Bhubaneshwar, Raipur, Jaipur
                    etc. It is well connected to Howrah Junction through over a
                    dozens of super-fast/express/local trains.
                  </li>
                  <li>
                    <b>AIRWAYS: </b> Kazi Nazrul Islam Airport (Durgapur) is
                    around 100km from BIT Sindri. Deoghar Airport is at a
                    distance of 133 km. Birsa Munda Airport (Ranchi) is well
                    connected with Sindri through NH 32, road distance is 160km
                    between two cities. Netaji Subhash Chandra Bose Airport
                    (Kolkata) is 242 km away from Sindri.
                  </li>
                  <li>
                    <b>ROADWAYS:</b> Numerous bus/taxi services are available
                    between Ranchi & Sindri. Ranchi is also connected by rail
                    route (distance 167 km). It takes 3-4 hours from Ranchi to
                    Sindri by Road.
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-2 flex-wrap items-start">
              <h1 className="font-bold text-xl sm:text-lg items-center">
                IV. Accommodation (Offline participants):
              </h1>
              <div className=" mb-4 sm:mb-0 ml-2">
                <p className="text-sm sm:text-xs text-justify">
                  Participants will make their own arrangements for travel,
                  boarding, lodging etc. However, limited accommodation facility
                  may be provided to the participants in hostels and guest rooms
                  of the institute on special request. For lady participants'
                  accommodation shall be arranged in the Girls hostels of the
                  institute, on request. For guests, the accommodation shall be
                  arranged by our Institute.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Foot />
      </div>
      <StickyBar />
    </>
  );
};

export default awards;
