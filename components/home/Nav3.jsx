import React from "react";

const Nav3 = () => {
  return (
    <>
      <div className="flex flex-col sm:hidden justify-center items-center bg-[#FAC804] p-6">
        {/* <div className=""> */}
        <ul className="flex flex-row gap-[3rem] text-[white]">
          <li>
            <a href="/dates" className="text-primary text-lg font-bold">
              Important Dates
            </a>
          </li>

          <li>
            <a
              href="/Comitte/OrganizingComitte"
              // href="  "
              className="text-primary text-lg ml-[-0.5rem] font-bold"
            >
              Committee
            </a>
          </li>
          <li>
            <a href="/CallForPaper" className="text-primary text-lg font-bold">
              Call for Papers
            </a>
          </li>
          <li>
            <a
              href="/PaperSubmission/info"
              className="text-primary text-lg font-bold"
            >
              Paper Submission
            </a>
          </li>

          <li>
            <a href="/sponsor" className="text-primary text-lg font-bold">
              Sponsorship
            </a>
          </li>
          <li>
            <a href="/speakers" className="text-primary text-lg font-bold">
              Invited Speakers
            </a>
          </li>
          {/* <li>
            <a href="" className="text-[white]">
              Paper Submission
            </a>
          </li> */}
        </ul>
        {/* </div> */}
      </div>
    </>
  );
};

export default Nav3;
