import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";

const CallForPaper = () => {
  return (
    <>
      <Head>
        <title>Call For Papers</title>
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
      <div className="h-auto w-[90%] border-2 justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto p-4 ">
        <div className="flex flex-wrap gap-[32rem]">
          <h2 className="text-primary font-bold p-4 flex text-5xl sm:text-2xl">
            Call For Papers
          </h2>
        </div>
        <div className="flex flex-wrap justify-left text-lg p-6">
          BITCON-2023 Call for Papers –{" "}
          <span>
            {" "}
            <a
              href="http://www.ieeebombay.org/ibssc2023/wp-content/uploads/2023/03/CFP-IBSSC-2023.pdf"
              className="text-blue font-bold hover:text-primary text-lg"
            >
              Download PDF
            </a>
          </span>{" "}
        </div>
        <div className="ml-[1.5rem]">
          <p>
            BITCON-2023 will provide a forum that will bring together
            researchers, academia, and practitioners from industry to
            interchange their ideas and fresh research accomplishments in all
            aspects under the theme{" "}
            <span className="font-bold text-primary text-lg">
              “Next Generation Applications in Green Engineering Technology”{" "}
            </span>
            along with their practical applications in today’s research scenario
          </p>
          <p className="font-bold text-primary text-lg mt-[1rem]">
            This conference has been specifically designed for research based PG
            & Doctoral Student.
          </p>
          <p className=" mt-[1rem]">
            The flagship conference will feature a comprehensive high-quality
            technical program including a variety of tutorials and keynote
            talks.
          </p>
          <p className="font-bold text-primary text-lg mt-[1rem]">
            All Accepted papers followed by the mandatory Presentation at the
            conference will be submitted for publication to IEEE Xplore.{" "}
          </p>
          <p className=" mt-[1rem]">
            The scope of this conference is wide and the following are the
            topics covered (But not limited to):
          </p>
          <ul className=" mt-[1rem] ">
            <p>
              {" "}
              <span className="font-bold text-primary text-lg mt-[1rem]">
                {" "}
                Track 1:{" "}
              </span>
              Power System Dynamics
            </p>
            <p>
              {" "}
              <span className="font-bold text-primary text-lg mt-[1rem]">
                {" "}
                Track 2:
              </span>{" "}
              Power Electronics Drives & Applications
            </p>
            <p>
              {" "}
              <span className="font-bold text-primary text-lg mt-[1rem]">
                {" "}
                Track 3:
              </span>{" "}
              Control System, Automation & Applications
            </p>
            <p>
              {" "}
              <span className="font-bold text-primary text-lg mt-[1rem]">
                {" "}
                Track 4:
              </span>{" "}
              Green Energy Technology & Applications
            </p>
            <p>
              {" "}
              <span className="font-bold text-primary text-lg mt-[1rem]">
                {" "}
                Track 5:
              </span>{" "}
              Artificial Intelligence, IoT and Signal Processing{" "}
            </p>
          </ul>
          <p className="text-lg mt-[1rem]">
            Paper submission guidelines are{" "}
            <a
              href="http://www.ieeebombay.org/ibssc2023/paper-submission/"
              className="text-blue font-bold hover:text-primary text-lg"
            >
              Here
            </a>
          </p>
          <p className="mt-[2rem]">
            Prospective authors are encouraged to submit full papers in PDF
            format not exceeding 6 pages in double-column which includes all
            figures, tables, and references. The paper must follow the standard
            IEEE template{" "}
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              className="text-blue font-bold hover:text-primary text-lg"
            >
              {" "}
              (link here)
            </a>
            . Papers not compliant with the IEEE template including appropriate
            referencing or exceeding the page limit will be returned without
            review
          </p>
          <p>
            Only original papers that have not been published or submitted for
            publication elsewhere will be considered. The paper must clearly
            indicate the research area, main results, and contributions.{" "}
          </p>
          <p className="font-bold text-primary text-lg mt-[2rem]">
            “All Accepted papers will be submitted for inclusion into IEEE
            Xplore subject to meeting IEEE Xplore’s Scope and quality
            requirements.”{" "}
          </p>
          <p className="font-bold text-primary text-lg mt-[2rem]">
            All Accepted papers followed by the mandatory Presentation at the
            conference will be submitted for publication to IEEE Xplore.
          </p>
          <p className="mt-[2rem]">
            Submission of a scientific paper is considered a commitment that,
            upon acceptance, authors will submit their camera-ready version for
            inclusion in the formal proceedings and will present the paper at
            the conference. Each accepted contribution must have at least one
            paid registration by the time the camera-ready paper is submitted
            for inclusion in the proceedings. IBSSC reserves the right to remove
            from IEEE Xplore papers and posters not presented at the symposium.
          </p>
          <p className="mt-[2rem]">
            For you to be able to access the submission system as an author,
            reviewer, program committee member, session chair, etc., you need to
            create an account on{" "}
            <a
              href="https://easychair.org/."
              className="text-blue font-bold hover:text-primary text-lg"
            >
              https://easychair.org/.
            </a>
          </p>
          <div className="">
            <h2 className="text-primary underline mt-[2rem] ml-[-1rem] font-bold p-4 flex text-3xl sm:text-2xl">
              Submit a Paper
            </h2>
            <p className="ml-5">
              For IEEE templates,{" "}
              <a
                href="https://www.ieee.org/conferences/publishing/templates.html"
                className="text-blue font-bold hover:text-primary text-lg underline"
              >
                click here
              </a>{" "}
              or choose in Latex or in .doc
            </p>
          </div>
          <div className="">
            <h2 className="text-primary underline mt-[2rem] ml-[-1rem] font-bold p-4 flex text-3xl sm:text-2xl">
              Deadline for Paper Submission: August 15, 2023
            </h2>
            <p className="ml-5">
              Accepted papers will be assigned to a regular technical session.
              All papers will go through a rigorous, single-blind reviewing
              process. At least one author of an accepted paper will have to
              register at the conference in order to submit the final version.
              All accepted papers presented at the conference will be published
              in the conference proceeding and submitted to IEEE Xplore for
              publication subject to their norms. They should satisfy the
              requirements given in the publication policy. The E-Copyright form
              must be submitted by the author or presenter at the time of
              registration.
            </p>
          </div>
          <div className="">
            <h2 className="text-primary underline mt-[2rem] ml-[-1rem] font-bold p-4 flex text-3xl sm:text-2xl">
              IEEE Policies
            </h2>
            <p className="ml-5">
              IEEE reserves the right to exclude a paper from distribution after
              the conference (e.g., by not including it in IEEE Xplore) if the
              paper is not presented at the conference. Papers are reviewed on
              the basis that they do not contain plagiarized material and have
              not been submitted to any other conference at the same time
              (double submission). These matters are taken very seriously and
              IEEE will take action against any author who has engaged in either
              practice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallForPaper;
