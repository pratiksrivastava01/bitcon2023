import Foot from "@/components/Foot";
import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
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
          <div className="flex gap-3">
            <Image src={preparation} className="h-[2.5rem] w-[auto] " />
            <h1 className=" font-bold text-4xl sm:text-2xl">PAPER SUBMISSION</h1>
          </div>
          <p className="p-5 text-sm sm:text-xs text-justify">
            Prospective authors are encouraged to submit high quality original,
            previously unpublished, experimental or theoretical research papers
            for presentation at the Conference. Articles submitted to the
            conference should meet these criteria and must not be under
            consideration for publication elsewhere. The paper should be in the
            format strictly as per the Paper Template given below. The papers
            should be drafted in English with a maximum of Eight (8) pages and
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
          <div className=" flex justify-center  ">
            <Link
              href="https://easychair.org/account/signin?l=KKF0LOjA5NTAboGTxlzm2T"
              target="_blank"
            >
              <button className="border-2 border-[white] text-[white] rounded-xl bg-[#002E73] hover:bg-[white] hover:text-[#002E73] hover:border-[#002E73] delay-75 active:-translate-y-1 px-4 py-2 mt-4 sm:text-xs">
                Submit Your Paper
              </button>
            </Link>
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
