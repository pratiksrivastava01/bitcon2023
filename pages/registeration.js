import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
const registeration = () => {
  return (
    <>
      <Head>
        <title>Registration </title>
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
      <div className="h-auto w-[85rem] border-2 justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto p-4">
        <div className="flex gap-[32rem]">
          <h2 className="text-primary  p-4 flex text-5xl sm:text-2xl">
            Registration Guidelines
          </h2>
          <button className=" ">
            <span className="bg-red text-primary-light   delay-100 font-bold p-4">
              Register Now
            </span>
          </button>
        </div>
        <div className="p-4 mt-2 ml-[2rem]">
          <li>
            Please note that at least one registration among the authors of EACH
            accepted paper is compulsory for the paper presentation and its
            inclusion in the Conference proceeding.
          </li>
          <li>
            To motivate the student authors, multiple author(s) registration
            from a paper is allowed by paying the respective registration fee,
            separately as per their applicable category
          </li>
          <li>
            Registration fee is non-refundable and non-transferable.in all
            circumstances, unless paid (a) multiple times or (b) more than the
            defined amount.
          </li>
          <li>
            All the delegates/authors must carry at least one original & valid
            ID card with them at the Online platform used for the Conference
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
            changes to the BITCON-2023 Conference Program/Schedule in its sole
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
            Accepted, registered, and presented papers will be submitted to IEEE
            for publication in IEEEXplore indexed in SCOPUS. IEEE will conduct
            quality checks on the accepted papers and only papers that pass
            these checks will be published.
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
        <div className="flex flex-col sm:overflow-scroll  justify-center">
          <div className="flex ">
            <p className="text-primary ml-[3.5rem] text-center text-xl font-bold p-4 flex  sm:text-lg">
              The authors are requested to pay the registration fee according to
              their applicable category as mentioned below:
            </p>
          </div>

          <div className="h-[10rem] w-[75rem]  border-2 justify-center flex flex-col border-primary   sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[26.5rem] p-4">
            <h1 className="text-red  p-4 flex text-5xl font-bold justify-center sm:text-2xl">
              Bitcon 2023
            </h1>
            <h2 className="text-[#002E73] font-bold  p-4 flex text-3xl justify-center sm:text-lg">
              Registration Fee
            </h2>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                Category
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                Early Bird Registration till 31st May 2023
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-2">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                Registration after 31st May 2023
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary invisible  p-4 flex text-lg text-left sm:text-sm">
                Category
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[10rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  Indian
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[9rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  Foreign
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  Indian
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  Foreign
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                IEEE Student Member
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  1000 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  150 USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  1500 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  200 USD
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                Non-IEEE Student Member
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  1500 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  200 USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  2000 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  250 USD
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                All Other IEEE Members
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  2000 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  200 USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  3000 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  250 USD
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                All Other Non-IEEE Members
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  2500 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  300 USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  3500 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  400 USD
                </h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                Listner (Other than Presenter)
              </h1>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  2000 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  250 USD
                </h1>
              </div>
            </div>
            <div className="flex">
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  2500 INR
                </h1>
              </div>
              <div className="h-[3rem] w-[12rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[0.5rem] sm:h-auto sm:w-[29rem] p-1">
                <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                  300 USD
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-[2rem] justify-center">
          <div className="flex ">
            <p className="text-primary ml-[3.5rem] text-center text-xl font-bold p-4 flex  sm:text-sm">
              Account Details for Payment of the Registration Fee:
            </p>
          </div>
          <div className="flex ">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                Bank
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] sm:h-auto sm:w-[29rem] p-1">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                State Bank of India
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem]  sm:h-auto sm:w-[29rem] p-2">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                Account no:
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem]  sm:h-auto sm:w-[29rem] p-2">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm invisible">
                Account no:
              </h1>
            </div>
          </div>
          <div className="flex mt-[-0.5rem]">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                Account Name
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] sm:h-auto sm:w-[29rem] p-1">
              <h1 className="text-primary invisible p-4 flex text-lg text-left justify-center sm:text-sm">
                State Bank of India
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem]  sm:h-auto sm:w-[29rem] p-2">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                IFSC Code
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem]  sm:h-auto sm:w-[29rem] p-2">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm ">
                SBIN0011812
              </h1>
            </div>
          </div>
          <div className="flex mt-[-0.5rem]">
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4">
              <h1 className="text-primary  p-4 flex text-lg text-left sm:text-sm">
                Account Type
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem] sm:h-auto sm:w-[29rem] p-1">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                Current Account
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem]  sm:h-auto sm:w-[29rem] p-2">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm">
                MICR Code
              </h1>
            </div>
            <div className="h-[3rem] w-[24.5rem]  border-2 justify-center flex flex-col border-primary  mt-[0.5rem] sm:ml-[0.2rem]  sm:h-auto sm:w-[29rem] p-2">
              <h1 className="text-primary  p-4 flex text-lg text-left justify-center sm:text-sm invisible">
                Account no:
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-left ml-[5rem] mt-[3rem]">
            <span className="text-lg">
              Authors are required to mention their Easy Chair “Paper ID”
              without error in remark section, while paying the registration
              fee. Please
            </span>
            <span className="text-lg">fill the registration form at</span>
            <span className="text-blue">www.</span>
            <span className="text-lg">
              and upload all the relevant documents as asked in the google form,
              e.g., fee payment receipt, student’s (1st author’s) ID card, IEEE
              membership card (if applicable), etc
            </span>
            <li className="text-lg mt-[2rem]">
              Registration deadline is 30.11.2023.
            </li>
            <li className="text-lg">Late registration is not allowed.</li>
          </div>
        </div>
      </div>
    </>
  );
};

export default registeration;
