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
import Link from "next/link";
import Image from "next/image";
import Foot from "@/components/Foot";
import Navbar2 from "@/components/navbar/Navbar2";
import StickyBar from "@/components/StickyBar";
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
      <Navbar2 />
      <Nav3 />
      <div className="mx-[2rem]  rounded-lg justify-center flex flex-col border-primary shadow-2xl mt-[1rem] sm:mx-[0rem] sm:h-auto">
        <div className="sm:mx-0 rounded-lg border-primary shadow-2xl p-4">
          <div className="flex flex-col gap-3">
            <h1 className="font-bold text-4xl sm:text-xl">
              <span className="text-[#002E73]">Sponsorship Opportunities</span>
            </h1>
            <a
              href="https://drive.google.com/file/d/1LeTt2qGGHz3G9XSSLBlnjClI-Pk_xEAF/view?usp=drivesdk"
              className="text-blue font-bold hover:text-primary text-sm sm:text-xs"
              target="_blank"
            >
              Download the Sponsorship Opportunities
            </a>
          </div>{" "}
          <div className="">
            <div className=" mt-4 sm:mb-4 text-center flex flex-row gap-3 flex-wrap items-center">
              <Image src={deal} className="h-[2rem] w-[auto] sm:h-[1.5rem] " />
              <h1 className="font-bold text-xl sm:text-sm items-center">
                Benefaction/Sponsorship
              </h1>
            </div>
            <span className="text-sm mt-4 sm:text-xs text-justify">
              By becoming a Benefactor at BITCON-2024, you can showcase your
              leadership in the industry and gain maximum exposure to
              BITCON-2024 attendees. As a Benefactor, your company will enjoy
              prominent visibility and be recognized as a sponsor of this
              prestigious conference. This is a prime opportunity to showcase
              your brand to a highly influential audience in the social media,
              mobile, analytics, and cloud domains. Additionally, you can
              utilize this event to share your company's products and services
              with important decision-makers in the industry.
            </span>
          </div>
          <div className="">
            <div className=" mt-4 text-center flex gap-3 flex-row items-center">
              <Image src={question} className="h-[2rem] w-[auto] sm:h-[1.5rem] " />
              <h1 className="font-bold text-xl sm:text-sm text-wrap items-center">
                Why Become a Benefactor?
              </h1>
            </div>
            <ul className="text-sm mt-4 sm:text-xs">
              <li className="flex items-start gap-2  text-justify">
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
          <div className="">
            <div className=" mt-4 text-center flex gap-3 flex-wrap items-center">
              <Image src={list} className="h-[2rem] w-[auto] sm:h-[1.5rem] " />
              <h1 className="font-bold text-xl sm:text-sm items-center">
                Benefactor Overview
              </h1>
            </div>
            <ul className="mt-2 text-sm sm:text-xs">
              <li className="flex items-start gap-2">
                {/* <Image src={platinum} className="w-[2rem] h-[2rem]" /> */}
                Platinum Sponsor: ₹{" "}1,50,000
              </li>
              <li>Gold Sponsor: ₹{" "}90,000</li> <li>Silver Sponsor: ₹{" "}50,000/</li>{" "}
              <li> Bronze Sponsor: ₹{" "}30,000 </li>{" "}
            </ul>
          </div>
          <div className="">
            <div className=" mt-4 text-center flex gap-3 flex-wrap items-center">
              <Image src={contact} className="h-[2rem] w-[auto] sm:h-[1.5rem] " />
              <h1 className="font-bold text-xl sm:text-sm text-wrap items-center">
                General Terms & Conditions
              </h1>
            </div>
            <ul className="mt-2 px-4 sm:px-2 ml-4 list-disc text-sm sm:text-xs text-justify">
              <li>
                {/* <Image src={platinum} className="w-[2rem] h-[2rem]" /> */}{" "}
                Due to limited sponsorship opportunities, sponsors shall be
                allocated on a first come first serve basis.
              </li>
              <li>{" "}
               The sponsors shall bring POP display as desired by them for
                the display stalls.
              </li>
              <li>{" "}
               All payments for sponsorship/stall bookings are to be made in
                advance.
              </li>
              <li>{" "} All transactions are subject to Dhanbad jurisdiction. </li>{" "}
              <li>
                {" "}
                All stall requirements shall be made known seven days prior to
                the event. All additions shall be charged appropriately.
              </li>
              <li>
                {" "}
                Bromide of Company’s Logo & complete Name of the Company with
                style will be required for acknowledging through Backdrops,
                Banners, brochures, stationary, Invitation cards & other
                promotional material.
              </li>
            </ul>
          </div>
          <div className="">
            <div className=" mt-3 mb-4 text-center flex gap-3 flex-wrap items-center">
              <Image src={payment} className="h-[2rem] w-[auto] sm:h-[1.5rem] " />
              <h1 className="font-bold text-xl sm:text-sm text-wrap items-center">
                Mode of Payment
              </h1>
            </div>
            <span className="text-sm mt-2 sm:text-xs">
              All payments are to be made through DD/local cheque drawn in favor
              of “BIT Sindri Sponsorship Account” payable at Dhanbad, Jharkhand.
            </span>
            <ul className="mt-4 mb-3 text-sm sm:text-xs">
              <li>
                <span className="font-bold">Step 1: </span>
                Open{" "}
                <a
                  href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
                  className="text-blue"
                >
                  {" "}
                  Click here to Make payment
                </a>
              </li>
              <li>
                <span className="font-bold">Step 2: </span>{" "}
                Select Education instutions
              </li>
              <li>
                <span className="font-bold">Step 3:</span>{" "}
                Filter by state: Select Jharkhand
              </li>
              <li>
                <span className="font-bold">Step 4:</span>{" "}
                From educational institutions select{" "}
                <span className="font-bold"> "Director BIT Sindri"</span>
              </li>
              <li>
                <span className="font-bold">Step 5:</span>{" "}
                Payment category -{" "}
                <span className="font-bold"> BITCON-2024(SPONSORS)</span>
              </li>
              <li>
                <span className="font-bold">Step 6:</span>{" "}
                Fill details and proceed for payment
              </li>
            </ul>
            <div className="flex justify-center items-center  sm:overflow-scroll ">
            <table className="border-collapse table-auto w-max sm:w-auto">
              <tbody className="border-collapse w-full sm:w-auto  text-sm sm:text-xs">
                <tr>
                  <td
                    colSpan="4"
                    className="text-primary text-center text-sm sm:text-xs font-bold p-4"
                  >
                    Account Details for Payment of the Registration Fee:
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-primary p-2">Bank</td>
                  <td className="border-2 border-primary p-2">
                    State Bank of India
                  </td>
                  <td className="border-2 border-primary p-2">Account no:</td>
                  <td className="border-2 border-primary p-2 ">42663611130</td>
                </tr>
                <tr>
                  <td className="border-2 border-primary p-2">Account Name</td>
                  <td className="border-2 border-primary p-2 ">BITCON 2024</td>
                  <td className="border-2 border-primary p-2">IFSC Code</td>
                  <td className="border-2 border-primary p-2">SBIN0011812</td>
                </tr>
                <tr>
                  <td className="border-2 border-primary p-2">Account Type</td>
                  <td className="border-2 border-primary p-2">
                    Current Account
                  </td>
                  <td className="border-2 border-primary p-2">MICR Code</td>
                  <td className="border-2 border-primary p-2 invisible">
                    Account no:
                  </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>{" "}
      </div>
      <Foot />
      <StickyBar />
    </>
  );
}

export default sponsor;
