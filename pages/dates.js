// ImportantDates.js

import Head from "next/head";
import Navbar from "@/components/navbar/Navbar"; // Update with your actual Navbar component
import Footer from "@/components/home/Footer"; // Update with your actual Footer component
import Nav3 from "@/components/home/Nav3";
import Foot from "@/components/Foot";
import Image from "next/image";
import schedule from "@/assets/schedule.png";

const dates = [
  { date: "15 April, 2024", event: "Start of Paper Submission" },
  { date: "30 July, 2024", event: "Deadline for Submission" },
  { date: "20 August, 2024", event: "Paper Acceptance Notification" },
  { date: "01 September, 2024", event: "Camera Ready Version" },
  { date: "01 September, 2024", event: "Registration Commences" },
  { date: "15 November, 2024", event: "Registration Closes" },
  { date: "07-08 December, 2024", event: "Date of Conference " },
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
        <div className="container mx-auto mt-4 p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-6">
            <Image
              src={schedule}
              alt="schedule"
              className="h-12 w-auto md:h-10 mr-3"
            />
            <h1 className="text-4xl sm:text-2xl font-extrabold text-deepblue">
              Important Dates
            </h1>
          </div>
          <ul className="space-y-4">
            {dates.map((item) => (
              <li
                key={item.date}
                className="p-4 bg-white bg-opacity-75 border border-purple-300 rounded-md shadow-md"
              >
                <p className="text-lg sm:text-sm font-semibold text-[#7E22CE] mb-2">
                  {item.date === "30 July, 2024" ? (
                    <>
                      <span className="line-through">{item.date}</span>
                      <br />
                      <span>Extended date: 31 August, 2024</span>
                    </>
                  ) : (
                    item.date
                  )}
                </p>
                <p className="text-gray-700 text-sm sm:text-xs">{item.event}</p>
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
