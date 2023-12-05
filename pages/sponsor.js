import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";

import deal from "@/assets/deal.png";
import question from "@/assets/question.png";
import list from "@/assets/research.png";
import platinum from "@/assets/platinum.png";
import contact from "@/assets/contact.png";
import payment from "@/assets/payment.png";

import Image from "next/image";
import Foot from "@/components/Foot";

function sponsor() {
  return (
    <>
      <Head>
        <title>Sponsors</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Navbar />
      <Nav3 />
      <div className="flex item-center justify-center ">
        <div className="w-[80%] mt-5 rounded-lg  p-4">
          <div className="flex gap-3">
            <h1 className="font-bold text-5xl text-center">
              <span className="text-[#002E73]">
                Sponsorship Opportunities at BITCON-2023
              </span>
            </h1>
          </div>{" "}
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={deal} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl items-center">
                Benefaction/Sponsorship
              </h1>
            </div>
            By becoming a Benefactor at BITCON-2024, you can showcase your
            leadership in the industry and gain maximum exposure to BITCON-2024
            attendees. As a Benefactor, your company will enjoy prominent
            visibility and be recognized as a sponsor of this prestigious
            conference. This is a prime opportunity to showcase your brand to a
            highly influential audience in the social media, mobile, analytics,
            and cloud domains. Additionally, you can utilize this event to share
            your company's products and services with important decision-makers
            in the industry.
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={question} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl items-center">
                Why Become a Benefactor?
              </h1>
            </div>
            <ul>
              <li className="flex items-start gap-2">
                BITCON-2024 is an international event that presents the latest
                research results and trends in the power and control,
                electronics, and instrumentation industries.
              </li>
              <li>
                {" "}
                The conference brings together industry leaders and researchers
                on a common platform to share knowledge about technologies,
                business opportunities, and applications.
              </li>
              <li>
                {" "}
                Sponsors at BITCON-2024 enjoy high visibility, gaining exposure
                to a targeted audience of engineers and researchers.
              </li>
              <li>
                {" "}
                Patrons have the opportunity to engage with officials from
                leading R&D organizations and project representatives.
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={list} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl items-center">
                Benefactor Overview
              </h1>
            </div>
            <ul>
              <li className="flex items-start gap-2">
                {/* <Image src={platinum} className="w-[2rem] h-[2rem]" /> */}
                Platinum Sponsor: 5,00,000 INR / 10,000 USD
              </li>
              <li>Gold Sponsor: 2,00,000 INR / 4,000 USD</li>{" "}
              <li>Silver Sponsor: 1,00,000 INR / 2,000 USD</li>{" "}
              <li> Bronze Sponsor: 75,000 INR / 1,500 USD </li>{" "}
              <li> Patron Sponsor: Up to 50,000 INR / 1,000 USD</li>
            </ul>
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={contact} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl items-center">
                General Terms & Conditions
              </h1>
            </div>
            <ul>
              <li className="flex items-start gap-2">
                {/* <Image src={platinum} className="w-[2rem] h-[2rem]" /> */}•
                Due to limited sponsorship opportunities, sponsors shall be
                allocated on a first come first serve basis.
              </li>
              <li>
                • The sponsors shall bring POP display as desired by them for
                the display stalls.
              </li>{" "}
              <li>
                • All payments for sponsorship/stall bookings are to be made in
                advance.
              </li>{" "}
              <li> • All transactions are subject to Delhi jurisdiction. </li>{" "}
              <li>
                {" "}
                • All stall requirements shall be made known seven days prior to
                the event. All additions shall be charged appropriately.
              </li>
              <li>
                {" "}
                • Bromide of Company’s Logo & complete Name of the Company with
                style will be required for acknowledging through Backdrops,
                Banners, brochures, stationary, Invitation cards & other
                promotional material.
              </li>
            </ul>
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={payment} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl items-center">
                Mode of Payment
              </h1>
            </div>
            All payments are to be made through DD/local cheque drawn in favor
            of “BIT Sindri Sponsorship Account” payable at Dhanbad, Jharkhand.
          </div>
        </div>{" "}
      </div>
      <Foot />
    </>
  );
}

export default sponsor;
