import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";

const registeration = () => {
  return (
    <>
      <Head>
        <title>Registeration</title>
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
      <div className="h-auto w-[85rem] border-2 justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
        <div className="flex gap-[32rem]">
          <h2 className="text-primary  p-4 flex text-5xl sm:text-2xl">
            Registereation Guidelines
          </h2>
          <button className=" ">
            <span className="bg-red text-primary-light   delay-100 font-bold p-4">
              Register Now
            </span>
          </button>
        </div>
        <div className="p-4 mt-2 ml-[2rem]">
          <li>Registration fee is non-refundable and non-transferable.</li>
          <li>
            All the delegates/authors must carry at least one original & valid
            ID card with them at the Online platform used for the Conference.
          </li>
          <li>
            Each paper, in order to be published in the conference proceedings
            and final program, requires at least one author to be registered and
            to present the paper.
          </li>
          <li>
            If multiple authors of a paper wish to attend the conference,
            separate registration will be mandatory for each author.
          </li>
          <li>
            If an author has got more than one accepted papers, each paper has
            to be registered separately.
          </li>
          <li>
            It is mandatory to present the paper during conference for
            submission to Springer.
          </li>
          <li>
            Only registered authors can participate in conference and present
            their papers.
          </li>
          <li>
            Certificate of Presentation will be issued to the registered author
            only.
          </li>
          <li>
            In case the registered author is unable to present the paper,
            another co-author can present (With prior intimation). In such cases
            certificate and registration kit will be provided to the presenter
            only.
          </li>
          <li>
            Organizing Committee reserves the right at all times to make any
            changes to the RDCAPE 2023 Conference Program/Schedule in its sole
            discretion.
          </li>
          <li>
            Organizing Committee will not assume any responsibility whatsoever
            for any damage or injury to persons or property during the
            Conference.
          </li>
          <li>
            For student/research scholars registration, only full time research
            scholars and students will be considered. Students should send the
            scanned copy of the Identity Card along with the registration form.
          </li>
          <li>
            Accepted, registered, and presented papers will be submitted to
            Springer for publication in their prestigious LNEE series indexed in
            SCOPUS. Springer will conduct quality checks on the accepted papers
            and only papers that pass these checks will be published.
          </li>
        </div>
        <div className="">
          <h2 className="text-red  p-4 flex text-lg sm:text-2xl">
            Please Click the link below to download
          </h2>
          <div className="p-4 mt-[-2rem] ml-[2rem]">
            <li>Publishing Agreement</li>
            <li>Permission Request Form</li>
          </div>
        </div>
        {/* <li></li> */}
        <div className="flex flex-col  justify-center">
          <div className="h-[10rem] w-[75rem]  border-2 justify-center flex flex-col border-primary  mt-[5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
            <h1 className="text-red  p-4 flex text-5xl justify-center sm:text-2xl">
              Bitcon 2023
            </h1>
            <h2 className="text-[#002E73] font-bold  p-4 flex text-3xl justify-center sm:text-lg">
              Registeration Fee
            </h2>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-2xl">
                Category
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                Early Bird Registration till 31st May 2023
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-2">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                Registration after 31st May 2023
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary invisible  p-4 flex text-lg text-left sm:text-2xl">
                Category
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  Indian
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  Foreign
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  Indian
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  Foreign
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-2xl">
                Industry Delegate (Presenter)
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  7000INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  250USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  8000INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  300USD
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-2xl">
                Academician (Presenter)
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  6000INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  200USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  7000INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  250USD
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-2xl">
                Full time Student (Presenter)
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  4500INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  150USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  5000INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  200USD
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-2xl">
                Attendees
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  2000INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  100USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  2000INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-2xl">
                  100USD
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default registeration;
