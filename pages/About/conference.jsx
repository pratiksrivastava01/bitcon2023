import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import Nav3 from "@/components/home/Nav3";
import welcome from "@/assets/bitcon.png";
import confetti from "@/assets/confetti.png";
import evaluation from "@/assets/evaluation.png";
import research from "@/assets/research.png";
import schedule from "@/assets/schedule.png";
import review from "@/assets/review.png";
import collaboration from "@/assets/collaboration.png";
import invitation from "@/assets/invitation.png";
import Link from "next/link";
import Image from "next/image";
import Foot from "@/components/Foot";
import Navbar2 from "@/components/navbar/Navbar2";
const conference = () => {
  return (
    <>
      <Head>
        <title>About the Conference</title>
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
      <div className="flex item-center justify-center ">
        <div className="w-[80%] mt-5 rounded-lg  p-4">
          <div className="flex gap-3">
            {/* <Image src={welcome} className="w-[3rem] h-[3rem]" /> */}

            <h1 className="font-bold text-5xl text-center">
              <span className="text-[#002E73]">
                Welcome to <span className="text-[#385623]"> BITCON-2023:</span>{" "}
                The International Conference{" "}
              </span>
            </h1>
          </div>
          <div className="p-4 mt-5 text-center flex gap-3 flex-wrap">
            <Image src={confetti} className="h-[3rem] w-[3rem] " />
            <h2 className="font-bold text-3xl text-center">
              Hosted by the Department of Electrical Engineering at BIT Sindri
            </h2>
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={evaluation} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl items-center">
                About the Conference
              </h1>
            </div>
            The Department of Electrical Engineering at BIT Sindri proudly
            announces the hosting of the flagship BITCON-2023, an International
            Conference. This conference holds special significance as it
            commemorates the Platinum Jubilee of our institution.
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={research} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl">Conference Overview</h1>{" "}
            </div>
            BITCON-2023 is a three-day event that brings together experts,
            researchers, and professionals from various fields of electrical
            engineering. It provides a platform for knowledge exchange,
            collaboration, and networking, fostering innovation and advancements
            in the electrical engineering domain.
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={schedule} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl">Conference Schedule</h1>{" "}
            </div>
            <h1 className="font-bold text-xl">Day 1:</h1>
            Tutorials on Emerging Technologies The conference kicks off with a
            series of tutorials focused on emerging and proven technologies in
            different areas of electrical engineering. These tutorials offer
            attendees the opportunity to deepen their understanding and gain
            practical insights into cutting-edge developments.
            <h1 className="font-bold text-xl">Day 2 and 3:</h1>
            Formal Conference The subsequent days of the conference are
            dedicated to formal sessions featuring plenary and semi-plenary
            talks by eminent personalities from academia and industry. These
            sessions will cover a wide range of topics, highlighting the latest
            research findings, experiences, and visions for the future of
            electrical engineering.
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={review} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl">
                Peer-Reviewed Presentations
              </h1>{" "}
            </div>
            BITCON-2023 also provides a platform for researchers to present
            their work through peer-reviewed oral and poster presentations.
            These presentations will showcase the latest research and
            advancements in various sub-disciplines of electrical engineering,
            offering participants the opportunity to explore diverse topics and
            engage in meaningful discussions.
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={collaboration} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl">
                {" "}
                Collaboration and Innovation
              </h1>{" "}
            </div>
            BITCON-2023 aims to create an inclusive and dynamic environment that
            encourages interdisciplinary collaborations and fosters a spirit of
            innovation. It serves as a unique platform for researchers,
            academicians, industry professionals, and students to interact,
            exchange ideas, and forge new partnerships.
          </div>
          <div className="p-4">
            <div className="p-4 mt-5 text-center flex gap-3 flex-wrap items-center">
              <Image src={invitation} className="h-[3rem] w-[3rem] " />
              <h1 className="font-bold text-xl">Invitation to Attend</h1>{" "}
            </div>
            We cordially invite you to be a part of this prestigious event. Join
            us at BIT Sindri as we embark on this exciting journey towards
            shaping the future of electrical engineering. Stay tuned for further
            updates on the conference schedule, registration details, and
            submission guidelines. Let's come together and make BITCONF-2023 a
            resounding success!
          </div>
        </div>
      </div>
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
};

export default conference;
