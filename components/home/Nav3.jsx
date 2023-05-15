import React from "react";
import { Dropdown } from "@nextui-org/react";
import Link from "next/link";

const Nav3 = () => {
  return (
    <>
      <div className="flex flex-col sm:hidden justify-center items-center bg-[#FAC804] p-6">
        {/* <div className=""> */}
        <ul className="flex flex-row gap-[3rem] text-[white]">
          <li>
            <a href="/speakers" className="text-primary  font-bold">
              Invited Speakers
            </a>
          </li>
          <li></li>
          <li>
            <a
              // href="/Comitte/OrganizingComitte"
              href="  "
              className="text-primary font-bold"
            >
              Committe
            </a>
          </li>
          <li>
            <a href="" className="text-primary font-bold">
              Call for Papers
            </a>
          </li>

          <Dropdown>
            <Dropdown.Button color={"error"} light className="border-[white]">
              <p className="text-lg text-primary font-bold">Paper Submission</p>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="default"
              color={"error"}
              aria-label="Actions"
              background="red"
            >
              <Dropdown.Item>
                <Link
                  href="https://bitcon2023.vercel.app/PaperSubmission/info"
                  legacyBehavior
                >
                  <a
                    className={`text-primary`}
                    target="_blank"
                    href="https://bitcon2023.vercel.app/PaperSubmission/info"
                  >
                    Information for Authors{" "}
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href="https://bitcon2023.vercel.app/PaperSubmission/infrastructure"
                  legacyBehavior
                >
                  <a
                    className={`text-primary`}
                    href="https://bitcon2023.vercel.app/PaperSubmission/infrastructure"
                    target="_blank"
                  >
                    Instruction for final paper
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href="https://bitcon2023.vercel.app/PaperSubmission/presentation"
                  legacyBehavior
                >
                  <a
                    className={`text-primary`}
                    href="https://bitcon2023.vercel.app/PaperSubmission/presentation"
                    target="_blank"
                  >
                    Presentation Instructions
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <li>
            <a href="/sponsor" className="text-primary font-bold">
              Sponsership
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
