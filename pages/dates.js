// ImportantDates.js

import Head from "next/head";
import Navbar from "@/components/navbar/Navbar"; // Update with your actual Navbar component
import Footer from "@/components/home/Footer"; // Update with your actual Footer component
import Nav3 from "@/components/home/Nav3";
import Foot from "@/components/Foot";
import Image from "next/image";
import schedule from "@/assets/schedule.png";
import Navbar2 from "@/components/navbar/Navbar2";
import Link from "next/link";
import StickyBar from "@/components/StickyBar";
const dates = [
  { date: "15 April, 2024", event: "Start of Paper Submission" },
  { date: "30 July, 2024", event: "Deadline for Submission" },
  {
    date: "Latest by 15 November, 2024",
    event: "Paper Acceptance Notification",
  },
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
        <Navbar2 /> {/* Update with your actual Navbar component */}
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
          <div className="max-w-[40rem] mx-auto">
            <ul className="space-y-4">
              {dates.map((item) => (
                <li
                  key={item.date}
                  className="px-4 py-2 bg-white bg-opacity-75 border border-purple-300 rounded-md shadow-md "
                >
                  <p className="text-gray-700 text-sm sm:text-xs mb-1">
                    {item.event}
                  </p>
                  <p className="text-lg sm:text-sm font-semibold text-[#7E22CE] ">
                    {item.date === "30 July, 2024" ? (
                      <>
                        <span className="text-base sm:text-sm font-semibold line-through">
                          {item.date}
                        </span>
                        <br />
                        <span className="text-base sm:text-sm font-semibold line-through">
                          Extended date: 31 August, 2024
                        </span>
                        <br />
                        <span className="text-base sm:text-sm font-semibold line-through ">
                          Second extended date: 30 September, 2024
                        </span>
                        <br />
                        <span className="text-base sm:text-sm font-semibold line-through ">
                          Third extended date: 15 October, 2024
                        </span>
                        <br />
                        <span className="text-lg sm:text-sm font-semibold text-[#7E22CE] ">
                          Final extended date: 31 October, 2024
                        </span>
                      </>
                    ) : (
                      item.date
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Foot />
      <StickyBar />
    </>
  );
};

export default ImportantDates;
