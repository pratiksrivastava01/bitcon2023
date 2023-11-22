// ImportantDates.js

import Head from "next/head";
import Navbar from "@/components/navbar/Navbar"; // Update with your actual Navbar component
import Footer from "@/components/home/Footer"; // Update with your actual Footer component
import Nav3 from "@/components/home/Nav3";
import Foot from "@/components/Foot";
import Image from "next/image";
import schedule from "@/assets/schedule.png";

const dates = [
  { date: "01 October, 2023", event: "Start of Paper Submission" },
  { date: "30th November, 2023", event: "Dedline for submission" },
  { date: "15th December, 2023", event: "Paper Acceptance Notification" },
  { date: "01st January, 2024", event: "Camera Ready Version" },
  { date: "15th January, 2024", event: "Registeration Commences" },
  { date: "08-09th March, 2024", event: "Date of Conference" },
  // Add more dates and events as needed
];

const ImportantDates = () => {
  return (
    <>
      <Head>
        <title>Important Dates</title>
        {/* Add any other meta tags as needed */}
      </Head>
      <div>
        <Navbar /> {/* Update with your actual Navbar component */}
        <Nav3 />
        <div className="container mx-auto mt-10 p-5">
          <div className="flex text-center justify-center">
            <Image
              src={schedule}
              alt="schedule"
              className="h-[4rem] w-[4rem] md:h-[3rem] md:w-[3rem]"
            ></Image>
            <h1 className="text-5xl  font-bold mb-5 flex items-center ">
              Important Dates
            </h1>
          </div>
          <ul className="padding-container mt-5 p-4 ">
            {dates.map((item) => (
              <li
                key={item.date}
                className="mb-3 border-red border p-2 rounded-lg"
              >
                <p className="text-xl font-bold">{item.date}</p>
                <p>{item.event}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Foot />
    </>
  );
};

export default ImportantDates;
