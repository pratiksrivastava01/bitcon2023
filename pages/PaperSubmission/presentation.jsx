import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const presentation = () => {
  return (
    <>
      <Head>
        <title>Paper Submission ||INSTRUCTIONS FOR PRESENTERS </title>
        <meta
          name="description"
          content="HnCC or Hackathon and Coding Club is the official club of BIT Sindri that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Navbar />
      <Nav3 />
      <div className="flex items-center text-center  justify-center mt-[3rem]">
        <h1 className="font-bold text-center text-5xl text-[#002E73]">
          INSTRUCTIONS FOR PRESENTERS
        </h1>
      </div>
      <div className="flex flex-row items-center sm:flex-col">
        <div className="h-auto   w-[25rem] border-2  border-primary mt-[-85.2rem] ml-[8rem] shadow-2xl sm:ml-[0.2rem] sm:h-auto sm:w-[21rem]">
          <div className="p-5">
            <h1 className="font-bold text-4xl sm:text-lg">Quick Links</h1>
            <h2 className="mt-[2rem] font-bold text-2xl sm:text-sm">
              <a
                href="/PaperSubmission/info"
                className="text-blue mt-[2rem] font-bold text-2xl sm:text-lg"
              >
                INFORMATION FOR AUTHORS
              </a>
            </h2>
            <h2 className="mt-[2rem] font-bold text-2xl sm:text-sm">
              <a
                href="/PaperSubmission/infrastructure"
                className="text-blue mt-[2rem] font-bold text-2xl sm:text-lg"
              >
                INSTRUCTION FOR FINAL PAPER SUBMISSION
              </a>
            </h2>
            <h2 className="mt-[2rem] font-bold text-2xl sm:text-sm">
              <a
                href="/PaperSubmission/presentation"
                className="text-blue mt-[2rem] font-bold text-2xl sm:text-lg"
              >
                INSTRUCTION FOR PRESENTATION
              </a>
            </h2>
          </div>
        </div>
        <div className="h-auto w-[53rem] border-2  border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[2rem] sm:h-auto sm:w-[21rem]">
          <h1 className="p-5  font-bold text-3xl">
            SYMPOSIA ORAL PRESENTATIONS
          </h1>
          <p className="p-4 ">
            Oral presentations for the ICC Symposia have been allocated 18
            minutes (15 minutes of effective presentation time, plus 3 minutes
            for Q&A and change of speaker).
          </p>
          <p className="p-4 ">
            Authors must prepare their oral presentations to be sure to convey
            their message in a clear and sharp manner, including giving outline
            of the key principles, facts and results. More detailed discussions
            can continue during the breaks.
          </p>
          <p className="p-5 mt-[-1rem]">
            In order to ensure a smooth performance during your session, please
            carefully review the following instructions:
          </p>
          <ul className="p-4 mt-[-2rem] ml-[2rem]">
            <li className="flex gap-3">
              <GoPrimitiveDot className="mt-1" />
              Choose vector graphics (e.g., .eps or .pdf) over bitmap (.bmp,
              .png, or .jpg) images because they are electronically efficient
              and will not conflict with conversions to PDF.{" "}
            </li>
            <li className="flex gap-3">
              <GoPrimitiveDot className="mt-1" />
              Arrive to the room 15 minutes before the start of the session and
              introduce yourself to the session chair.
            </li>
            <li className="flex gap-3">
              <GoPrimitiveDot className="mt-1" />A laptop, projector, and screen
              will be available in the session room, with the latest version of
              Microsoft Powerpoint and Office, and Acrobat dc Reader
            </li>

            {/* <li className="flex gap-3">
              <GoPrimitiveDot className="mt-1" />
              Create your presentation using MS PowerPoint or Adobe PDF formats
              and save it onto a USB drive. <br /> Bring the USB drive to the
              session and upload the presentation to the laptop in the session
              room at least 10 minutes before the start time of your session.
              You can also bring it earlier during the coffee/lunch breaks of
              any days before your presentation. A volunteer will be present to
              assist you as needed.
            </li> */}
          </ul>
          <p className="p-4">
            To avoid any compatibility problems, please read carefully the
            instructions below.
          </p>
          <h3 className="p-4 font-bold text-[#002E73]  text-lg">
            POWERPOINT INSTRUCTIONS{" "}
          </h3>
          <ul className="ml-[2rem] mt-[-2rem] p-5">
            <li className="flex gap-3">
              <GoPrimitiveDot className="mt-1" />
              Prepare your presentation using PPT/PPTX or Adobe PDF format .
            </li>
            <li className="flex gap-3">
              <GoPrimitiveDot className="mt-1" />
              All videos or animations in the presentation must run
              automatically!
            </li>
          </ul>
          <h3 className="p-4 font-bold text-[#002E73]  text-lg">
            PICTURES/VIDEOS{" "}
          </h3>
          <ul className="ml-[2rem] mt-[-2rem] p-5">
            <li className="flex gap-3">
              <GoPrimitiveDot className="mt-1" />
              We cannot provide support for embedded videos in your
              presentation; please test your presentation with the on-site
              laptop and ensure that it works accordingly prior to the session.
            </li>
          </ul>
          <h3 className="p-4 font-bold text-[#002E73]  text-lg">FONTS </h3>
          <ul className="ml-[2rem] mt-[-2rem] p-5">
            <li className="flex gap-3">
              <GoPrimitiveDot className="mt-1" />
              Only fonts that are included in the basic installation of
              MS-Windows will be available. Use of other fonts not included in
              Windows may cause wrong layout/style of your presentation
            </li>
          </ul>
          <div className="">
            <h3 className="p-4 font-bold text-[#002E73]  text-lg">
              SYMPOSIA INTERACTIVE PRESENTATIONS
            </h3>
            <p className="p-4 mt-[-2rem]">
              Interactive sessions for the ICC Symposia are scheduled in
              45-minute time slots (please note that the interactive session
              code number starts with "-i" , e.g., CISS-i1, SAC-08 MLCN-i6). You
              must use your own laptop for Interactive presentations.
            </p>
            <p className="p-4">
              Presentations will be displayed on LCD screens, with the following
              properties:
            </p>
            <ul className="ml-[2rem] mt-[-2rem] p-5">
              <li className="flex gap-3">
                <GoPrimitiveDot className="mt-1" />
                Screen dimensions: 27"
              </li>
              <li className="flex gap-3">
                <GoPrimitiveDot className="mt-1" />
                Resolution: 1920*1080 pxl
              </li>
              <li className="flex gap-3">
                <GoPrimitiveDot className="mt-1" />
                Orientation: Landscape
              </li>
              <li className="flex gap-3">
                <GoPrimitiveDot className="mt-1" />
                Display from your laptop: we will supply HDMI cable ONLY. If
                your laptop or other device does not provide HDMI output, you
                will need to bring any necessary adaptors.
              </li>
            </ul>
            <p className="p-4">The presenter should:</p>
            <ul className="ml-[2rem] mt-[-2rem] p-5">
              <li className="flex gap-3">
                <GoPrimitiveDot className="mt-1" />
                Arrive to the Interactive Session Screens (located at the
                Exhibition Area) no later than 15 minutes before the start of
                the session
              </li>
              <li className="flex gap-3">
                <GoPrimitiveDot className="mt-1" />
                Bring your laptop with the final presentation already
                pre-loaded. A volunteer will indicate which LCD screen is
                allocated for which presentation
              </li>
            </ul>
            <p className="p-4">
              Please make sure the following information is ALWAYS visible on
              the screen during the Interactive Sessions, so that attendees can
              easily identify the papers being presented, regardless of the
              slide you are showing:
            </p>
            <ul className="ml-[2rem] mt-[-2rem] p-5">
              <li className="flex gap-3">
                <GoPrimitiveDot className="mt-1" />
                Paper title
              </li>
              <li className="flex gap-3">
                <GoPrimitiveDot className="mt-1" />
                List of authors with affiliations
              </li>
            </ul>
            <p className="p-4">
              The Interactive Session presentations offer a means to engage with
              the audience in a number of novel ways. Attendees will walk around
              from one presenter to another during the session so that they too
              can maximize their time at the session.
            </p>
            <h3 className="p-4 font-bold text-[#002E73]  text-lg">
              WORKSHOP PRESENTATIONS
            </h3>
            <p className="p-4 mt-[-2rem]">
              Presenters at workshops should follow the same general guidance as
              given above for oral presentations in the Symposia. However,
              workshop presentations may follow different timings. As such,
              presenters should contact the appropriate workshop organizers for
              guidance and clarification if further explanation is needed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default presentation;
