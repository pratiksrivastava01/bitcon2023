import Foot from "@/components/Foot";
import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import preparation from "@/assets/preparation.png";
import Image from "next/image";
import Navbar2 from "@/components/navbar/Navbar2";

const info = () => {
  return (
    <>
      <Head>
        <title>Paper Submission || Info</title>
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
      <div className="flex flex-row items-center sm:flex-col mt-6 justify-center">
        <div className="h-auto mx-8 sm:mx-0 rounded-lg p-4  min-h-[70vh] border-primary shadow-2xl  ">
          <div className="flex justify-between">
            <div className="flex gap-2 sm:gap-1 justify-center items-center">
              <Image src={preparation} className="h-[2.5rem] sm:h-[2rem] w-[auto] " />
              <h1 className="text-primary font-bold p-4 py-4 sm:p-2 flex text-4xl sm:text-xl">
                PAPER SUBMISSION
              </h1>
            </div>
            <button className="m-2 sm:w-32">
              <a
                className="border-2 border-[white] text-[white] rounded-xl bg-[#002E73] hover:bg-[white] hover:text-[#002E73] hover:border-[#002E73] delay-75 active:-translate-y-1 px-4 py-2 mt-4 sm:text-xs"
                href="https://easychair.org/account/signin?l=KKF0LOjA5NTAboGTxlzm2T"
              >
                Submit Now
              </a>
            </button>
          </div>
          <p className="p-5 text-sm sm:text-xs text-justify">
            Prospective authors are encouraged to submit high quality original,
            previously unpublished, experimental or theoretical research papers
            for presentation at the Conference. Articles submitted to the
            conference should meet these criteria and must not be under
            consideration for publication elsewhere. The paper should be in the
            format strictly as per the Paper Template given below. The papers
            should be drafted in English with a maximum of Eight (6) pages and
            minimum of 4 pages including figures, tables and references. The
            paper will be peer reviewed by domain experts of the respective
            tracks by the Technical Program Committee. Authors should submit the
            papers through Easy Chair. Kindly do not submit the paper multiple
            times; it may lead to cancellation of your paper
          </p>
          <ul className="ml-[2rem] text-sm sm:text-xs">
            <li>
              <p>
                <span className="font-bold">1. Template Download: </span>{" "}
                Download paper A4 template (Microsoft Word)
                <a
                  className="text-blue ml-2"
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                >
                  Click Here
                </a>{" "}
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold">2. Plagiarism Policy: </span>
                Any act of plagiarism is a totally unacceptable academic
                misconduct and cannot be tolerated. The conference team will be
                checking the plagiarism level of all the submitted papers for
                ensuring the originality of content using iThenticate with an
                acceptable limit of 10% .
              </p>
            </li>
          </ul>
          <div className="flex flex-col mx-8 mt-12 justify-center">
            <div className="flex ">
              <p className="text-primary text-center text-xl font-bold flex  sm:text-sm">
                Important Instructions
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-primary text-center text-md flex text-sm  sm:text-xs">
                Please prepare your Camera-ready paper{" "}
                <b>(Word Document + PDF eXpress)</b> by strictly following the
                guidelines mentioned below:
              </p>
              <ul className="ml-[2rem] text-sm sm:text-xs list-disc">
                <li>
                  <span>
                    The Final Camera Ready Copy should be strictly according to
                    IEEE format given by IEEE Use the A4 size template available:{" "}
                    <a
                      className="text-blue"
                      href="https://onedrive.live.com/view.aspx?resid=83C17B56AF42FFFD%2138928&authkey=!ADeAvKxgc8AOIqI"
                      download
                    >
                      IEEE Template
                    </a>
                  </span>
                </li>
                <li>
                  <span>
                    Do not modify layout margin of the conference template.
                  </span>
                </li>
                <li>
                  <span>
                    Ensure the Similarity Index (Plagiarism Report) should be
                    less than <b>30% </b>Including References and any single
                    source of plagiarism should not be more than 5%.
                  </span>
                </li>
                <li>
                  <span>Maintain minimum 15 references in the paper</span>
                </li>
                <li>
                  <span>
                    Incorporate the correction suggested by the reviewer. Please
                    check the mail attachment.
                  </span>
                </li>
                <li>
                  <span>Mention affiliations of all the authors.</span>
                </li>
                <li>
                  <span>Mention mail id of all the authors.</span>
                </li>
                <li>
                  <span>
                    Run a Spellcheck and proofread your paper thoroughly to
                    ensure that it contains no typo and grammatical errors
                  </span>
                </li>
                <li>
                  <span>Include good quality figures/graphics.</span>
                </li>
                <li>
                  <span>
                    Tables must be drawn in text format, not as an image.
                  </span>
                </li>
                <li>
                  <span>
                    In-text description and callouts for all the figure numbers,
                    table numbers and equation numbers must be present in the
                    paper as per the order of their occurrence.
                  </span>
                </li>
                <li>
                  <span>
                    Citation of all the references must be done inside the
                    paper, that is, in-text citations.
                  </span>
                </li>
                <li>
                  <span>
                    In-text citations must match their corresponding reference
                    listed under the references section and vice-versa.
                  </span>
                </li>
                <li>
                  <span>
                    Citation must be in ascending order, not in random manner.
                  </span>
                </li>
                <li>
                  <span>
                    Reference should not be cited in Abstract and Conclusion
                    part.
                  </span>
                </li>
                <li>
                  <span>Remove words like “Our/we/us” from the paper.</span>
                </li>
                <li>
                  <span>
                    Do not mention Salutations like “Dr./Mr./Mrs./Prof./
                    Research Scholar/Student” in the author details section.
                  </span>
                </li>
                <li>
                  <span>
                    Rename the final camera ready file (save as .doc or .docx)
                    with the conference name & paper id (For Example
                    “BITCONXXXX.docx); Where XXXX is your Easy Chair Submission
                    ID
                  </span>
                </li>
                <li>
                  <span>
                    Camera ready paper is meant ONLY FOR ONE TIME submission.
                    After the submission strictly no more corrections will be
                    entertained.
                  </span>
                </li>
                <li>
                  <span>
                    Include Header and Footer in your Paper for First Page Only.
                  </span>
                  <br></br>
                  <span className="ml-4">
                    <b>Header: </b> 2024 IEEE Flagship International BIT
                    Conference (BITCON-24)
                  </span>
                  <br></br>
                  <span className="ml-4">
                    <b>Footer:</b> xxx-x-xxxx-xxxx-x/24/$31.00 ©2024 IEEE
                  </span>
                </li>
              </ul>
              <p className="text-primary mt-8 sm:mt-4 text-center text-md flex font-semibold text-sm  sm:text-xs">
                <b>IEEE PDF eXpress</b>
              </p>
              <ul className="ml-[2rem] list-decimal text-sm sm:text-xs">
                <li>
                  <span>
                    Access the IEEE PDF eXpress site{" "}
                    <a
                      className="text-blue"
                      href="https://ieee-pdf-express.org/"
                    >
                      Click Here
                    </a>
                  </span>
                </li>
                <li>
                  <span>Login to the portal</span>
                </li>
                <li>
                  <span>
                    Conference ID: <b> 63716X</b>
                  </span>
                </li>
                <li>
                  <span>
                    (New users need to register; Existing users can use the same
                    login)
                  </span>
                </li>
                <li>
                  <span>
                    For each conference paper, click “Create New Title”.
                  </span>
                </li>
                <li>
                  <span>
                    Enter identifying text for the paper (title is recommended
                    but not required)
                  </span>
                </li>
                <li>
                  <span>
                    Enter identifying text for the paper (title is recommended
                    but not required)
                  </span>
                </li>
                <li>
                  <span>
                    Click "Submit PDF for Checking" or "Submit Source Files for
                    Conversion"
                  </span>
                </li>
                <li>
                  <span>
                    Indicate platform, source file type (if applicable), click
                    Browse and navigate to file, and click “Upload File”. You
                    will receive online and email confirmation of successful
                    upload.
                  </span>
                </li>
                <li>
                  <span>
                    You will receive an email with your Checked PDF or IEEE PDF
                    eXpress-converted PDF attached. If you submitted a PDF for
                    Checking, the email will show if your file passed or failed.
                    The PDF file must pass the compatibility test in the IEEE
                    PDF eXpressTM for submitting your paper to IEEE Digital
                    Xplore, so repeat the process until it is passed.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {/* <ul className="ml-[2rem] ">
            <li>
              <p>
                <span className="font-bold text-lg">1. Templates: </span> Please
                use Microsoft Word or LaTeX to create your document. It is
                strongly suggested to use the{" "}
                <a
                  className="text-blue"
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                >
                  IEEE templates
                </a>{" "}
                that incorporate the correct formatting specifications. If you
                decide not to use the templates, please be aware that you might
                incur into problems when submitting the camera ready, where
                strict formatting according to the{" "}
                <a
                  href="https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/format-definition-table-and-glossary.pdf"
                  className="text-blue"
                >
                  Definition Table and Glossary
                </a>{" "}
                will be enforced.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold text-lg">2. Page limit: </span>6
                maximum number of pages, with 1 additional page allowed with the
                purchase of additional page charges at the time of registration
                and final paper submission.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold text-lg">
                  3. Headers, footers, and page numbers:{" "}
                </span>
                No headers, footers, or page numbers should appear on your
                manuscript.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold text-lg">4. Margins:</span>
                Papers cannot be accepted with margins smaller than those given
                in the table below:
              </p>
              <table className=" ml-[2rem] sm:ml-[-1rem]">
                <thead className="gap-[5rem]">
                  <tr className="p-4">
                    <th className="bg-blue text-center text-primary-light">
                      Margin
                    </th>
                    <th className="bg-blue text-center text-primary-light">
                      US Letter
                    </th>
                    <th className="bg-blue text-center text-primary-light">
                      A4
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Top</td>
                    <td>0.75 inch</td>
                    <td>19 mm</td>
                  </tr>
                  <tr>
                    <td>Bottom</td>
                    <td>1 inch</td>
                    <td>43 mm</td>
                  </tr>
                  <tr>
                    <td>Side</td>
                    <td>0.625 inch</td>
                    <td>13 mm</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <p>
                <span className="font-bold text-lg">4. Fonts:</span>
                Fonts must be either Post Script or True Type and licensed for
                embedding. Use of unlicensed and custom-made or hacked fonts is
                strictly prohibited; your submission will be rejected if it is
                found to contain them. Below is a list of recommended fonts:
              </p>
              <table className=" ml-[2rem] sm:ml-[-1rem]">
                <thead className="gap-[5rem]">
                  <tr className="p-4">
                    <th className="bg-blue text-center text-primary-light">
                      Content
                    </th>
                    <th className="bg-blue text-center text-primary-light">
                      Font
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Text</td>
                    <td>Times New Roman</td>
                  </tr>
                  <tr>
                    <td>Code</td>
                    <td>Courier</td>
                  </tr>
                  <tr>
                    <td>Equations</td>
                    <td>Symbol</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <span className="font-bold text-lg">5. Graphics and Images:</span>
              <ul>
                <li className="flex gap-3">
                  {" "}
                  <GoPrimitiveDot className="mt-1" />
                  Choose vector graphics (e.g., .eps or .pdf) over bitmap (.bmp,
                  .png, or .jpg) images because they are electronically
                  efficient and will not conflict with conversions to PDF.{" "}
                </li>
                <li className="flex gap-3">
                  {" "}
                  <GoPrimitiveDot className="mt-1" />
                  All images should be checked by printing to hardcopy if the
                  conference will be producing a book, especially when color
                  images in your paper will be translated to black and white in
                  print.{" "}
                </li>
                <li className="flex gap-3">
                  {" "}
                  <GoPrimitiveDot className="mt-1" />
                  Resolution should be between 150 and 300 dpi or less.
                  Resolutions greater than 300 will cause down sampling; images
                  below 300 will not render well in print.{" "}
                </li>{" "}
                <li className="flex gap-3 ml-[-0.2rem]">
                  <GoPrimitiveDot className="mt-1" />
                  Labels within graphics should have a type point size of 4 or
                  higher.{" "}
                </li>
                <li className="flex gap-3">
                  {" "}
                  <GoPrimitiveDot className="mt-1" />
                  Smooth Graphics should not be used as it often produces
                  extremely large files with slow loading time. The Smooth
                  Graphics option is usually found in the Page Setup Dialog box.
                </li>
              </ul>
            </li>
          </ul> */}
        </div>
      </div>
      <Foot />
    </>
  );
};

export default info;
