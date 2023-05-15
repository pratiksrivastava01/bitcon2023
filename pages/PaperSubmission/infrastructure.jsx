import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

const infrastructure = () => {
  return (
    <>
      <Head>
        <title>Paper Submission ||INSTRUCTIONS FOR FINAL PAPER UPLOAD </title>
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
          INSTRUCTIONS FOR FINAL PAPER UPLOAD
        </h1>
      </div>
      <div className="flex flex-row items-center sm:flex-col">
        <div className="h-auto   w-[25rem] border-2  border-primary mt-[-99.2rem] ml-[8rem] shadow-2xl sm:ml-[0.2rem] sm:h-auto sm:w-[21rem]">
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
          <h1 className="p-5  font-bold text-3xl">
            INSTRUCTIONS FOR FINAL PAPER UPLOAD
          </h1>
          <h3 className="p-5   text-lg">
            INSTRUCTIONS FOR{" "}
            <span className="font-bold">TECHNICAL SYMPOSIUMS ONLY - </span>{" "}
            FINAL PAPER UPLOAD (ACCEPTED PAPERS)
          </h3>
          <h3 className="p-5 font-bold text-[#002E73]  text-lg">
            IMPORTANT INFORMATION
          </h3>
          <p className="p-4 mt-[-2rem]">
            The Conference Proceedings will be included in{" "}
            <a
              href="https://ieeexplore.ieee.org/Xplore/home.jsp"
              className="text-blue"
            >
              IEEE Xplore Publications.
            </a>{" "}
            All authors who have been accepted must register for the conference
            and attend the conference to present their papers. Authors who do
            not attend the conference to present their papers, or arrange for a
            co-author or knowledgeable colleague to present their paper in the
            absence of the primary author, will not have their paper published
            in IEEE Xplore, per IEEE policy.
          </p>
          <p className="p-5 mt-[-1rem]">
            IEEE reserves the right to exclude a submission from distribution
            after the conference, including exclusion from IEEE Xplore if the
            submission does not meet IEEE standards for scope and/or quality.
            Articles excluded from further distribution shall be archived by
            IEEE but shall not be indexed or appear on IEEE Xplore.
          </p>
          <h3 className="p-4 font-bold text-[#002E73]  text-lg">
            ACCEPTED PAPERS{" "}
          </h3>
          <ul className="ml-[2rem] p-5">
            <li>
              <p>
                <span className="font-bold text-lg">1. </span>{" "}
                <button className="bg-[#002E73] text-[white] p-2 rounded-md ">
                  {" "}
                  Register Online
                </button>{" "}
                <span className="italic font-bold">
                  {" "}
                  – Online Registration Open Now
                </span>
                <p className="p-4 ">
                  You MUST register before uploading your final paper. Papers
                  will be included in the proceedings only if at least one
                  author has registered and paid the registration fee by 15
                  February 2023.
                </p>
                <p className="p-4 mt-[-1rem]">
                  One author registration will cover the publication expenses of
                  three (3) accepted papers. Authors presenting more than 3
                  papers must pay an additional full registration for the 4th
                  paper. In the case no registration has been received and
                  correctly processed to cover the paper publication, the
                  conference organizers will contact the authors before the
                  paper is removed from the proceedings.
                </p>
                <p className="p-4 font-bold mt-[-1rem]">
                  NO PAPER WILL BE PUBLISHED WITHOUT THE AUTHOR’S COMPLETED
                  REGISTRATION AND PAYMENT.
                </p>
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold text-lg">
                  2. Generate an IEEE Xplore compatible manuscript using PDF
                  Xpress
                </span>
                <p className="p-4">
                  All final manuscripts must be generated using the PDF Xpress
                  tool.
                </p>
                <p className="p-4">
                  To generate the IEEE Xplore compatible PDF file of your paper,
                  follow these steps:
                  <ul className="ml-4">
                    <li>
                      <p>
                        1. Create your IEEE PDF eXpress account:
                        <a
                          href="https://ieee-pdf-express.org"
                          className="text-blue ml-2"
                        >
                          https://ieee-pdf-express.org
                        </a>
                      </p>
                    </li>
                    <li>
                      2. Conference ID:{" "}
                      <span className="font-bold">45041x</span>{" "}
                    </li>
                    <li>
                      3. The first time you access the system, please follow the
                      link to new user. Please note that in order to access the
                      service, you need to allow the use of cookies from the PDF
                      eXpress web site. Once you have registered as a new user:
                      <ul className="ml-4">
                        <li>
                          a. Upload the source file (containing your paper) for
                          conversion.
                        </li>
                        <li>
                          b. Receive by e-mail the IEEE Xplore-compatible PDF of
                          your paper.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </p>
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold text-lg">
                  3. Upload your Xplore compatible PDF manuscript to EDAS{" "}
                </span>
                <ul className="ml-4">
                  <li>
                    1. Log in at{" "}
                    <a href="http://edas.info" className="text-blue">
                      http://edas.info
                    </a>{" "}
                  </li>
                  <li>2. Select the “My Papers” tab</li>
                  <li>
                    3. Select the paper title you wish to upload the manuscript
                    for to be directed to the paper record
                  </li>
                  <li>
                    4. Specify the presenter and complete the presenter’s
                    biography form
                  </li>
                </ul>
              </p>
              <p className="p-4">
                Please declare who will be presenting the paper at the
                conference. Once in your paper record, click the Change/Add icon
                in the Presenter row. Indicate who will present the paper and
                click Choose presenter.{" "}
                <span className="font-bold">
                  {" "}
                  Presenters must fill out a short bio (50-word max) on EDAS by
                  going to the ‘My Profile’ tab and filling in the information
                  in the ‘Brief bio’ field.
                </span>{" "}
                Information in this form will be used by the session chairperson
                to introduce the presenter.
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold text-lg">
                  4. Complete the electronic copyright form via EDAS
                </span>
                <p className="p-4">
                  IEEE is enforcing strict copyright rules. For your
                  convenience, the copyright form is made available
                  electronically through EDAS. To access the copyright form,
                  select the icon in the copyright column within your paper
                  record. Authors who are not authorized to sign a copyright
                  transfer form, should download the paper version of a
                  copyright transfer form, fill it in, and ask an authorized
                  person to sign it.
                </p>
                <p className="p-4 font-bold">
                  NO PAPER WILL BE PUBLISHED WITHOUT THE SUBMITTED COPYRIGHT
                  FORM.
                </p>
              </p>
            </li>
            <li>
              <p>
                <span className="font-bold text-lg">5. Upload your paper</span>
                <p className="p-4">
                  Upload your paper directly to “Final Manuscript” by selecting
                  the upload icon. Submissions are due by 15 February 2023.
                </p>
                <p className="p-4">
                  <span className="font-bold">
                    IMPORTANT COPYRIGHT NOTICE FOR WEB AND INTERNET POSTING{" "}
                  </span>
                  If authors wish to post their papers electronically on any
                  website, any ftp site, or any other electronic dissemination
                  technique, they must include the IEEE Copyright notice on the
                  initial screen displaying the IEEE-copyrighted material.
                </p>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default infrastructure;
