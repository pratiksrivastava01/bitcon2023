import Foot from "@/components/Foot";
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
      <div className="w-[90%]  rounded-lg justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto p-4">
        <div className="flex justify-between">
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
            changes to the BITCON-2024 Conference Program/Schedule in its sole
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

        {/* <li></li> */}
        <div className="flex flex-col sm:overflow-scroll  justify-center">
          <div className="flex ">
            <p className="text-primary ml-[3.5rem] text-center text-xl font-bold p-4 flex  sm:text-lg">
              The authors are requested to pay the registration fee according to
              their applicable category as mentioned below:
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold mb-4 items-center text-center">
              Registeration Fees
            </h2>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Indian Authors</th>
                    <th className="border px-4 py-2">IEEE Members</th>
                    <th className="border px-4 py-2">Non-IEEE Members</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      Researcher (UG, PG, PhD)
                    </td>
                    <td className="border px-4 py-2">₹ 4,000/-</td>
                    <td className="border px-4 py-2">₹ 5,000/-</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Academicians</td>
                    <td className="border px-4 py-2">₹ 5,000/-</td>
                    <td className="border px-4 py-2">₹ 6,000/-</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Industry</td>
                    <td className="border px-4 py-2">₹ 9,000/-</td>
                    <td className="border px-4 py-2">₹ 10,000/-</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Non-Authors</td>
                    <td className="border px-4 py-2">₹ 3,000/-</td>
                    <td className="border px-4 py-2">₹ 3,500/-</td>
                  </tr>
                </tbody>
              </table>
              <table className="table-auto min-w-full mt-[2rem] border-collapse">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Foreign Authors</th>
                    <th className="border px-4 py-2">IEEE Members</th>
                    <th className="border px-4 py-2">Non-IEEE Members</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      Researcher / Academicians / Industry
                    </td>
                    <td className="border px-4 py-2">$ 130</td>
                    <td className="border px-4 py-2">$ 150</td>
                  </tr>
                </tbody>
              </table>
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
      <Foot />
    </>
  );
};

export default registeration;
