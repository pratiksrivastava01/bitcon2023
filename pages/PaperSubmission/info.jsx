import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

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
      <Navbar />
      <Nav3 />
      <div className="flex items-center text-center  justify-center mt-[3rem]">
        <h1 className="font-bold text-center text-5xl text-[#002E73]">
          INFORMATION FOR AUTHORS
        </h1>
      </div>
      <div className="flex flex-row items-center sm:flex-col">
        <div className="h-auto   w-[25rem] border-2  border-primary mt-[-49.5rem] ml-[8rem] shadow-2xl sm:ml-[0.2rem] sm:h-auto sm:w-[21rem]">
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
          <h1 className="p-5  font-bold text-3xl">MANUSCRIPT PREPARATION</h1>
          <p className="p-5">
            If you have not already finalized your manuscript this section
            provides guidelines regarding acceptable manuscript applications,
            layout, fonts, and graphics.
          </p>
          <ul className="ml-[2rem] p-5">
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
                    <th className="bg-blue text-primary-light">Margin</th>
                    <th className="bg-blue text-primary-light">US Letter</th>
                    <th className="bg-blue text-primary-light">A4</th>
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
                    <th className="bg-blue text-primary-light">Content</th>
                    <th className="bg-blue text-primary-light">Font</th>
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default info;
