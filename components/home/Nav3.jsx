import React from "react";
import Link from "next/link";
import styles from "../navbar/Navbar.module.css";
import { Dropdown } from "@nextui-org/react";
//bg-[#FAC804]
const Nav3 = () => {
  return (
    <>
      <div className="flex flex-row lg:hidden justify-center items-center  bg-[#002E73] p-2">
        <div id="navList" className={`${styles.navbarList} `}>
          <Link href="/" legacyBehavior className="cursor-pointer">
            <a className={styles.navLink}>Home </a>
          </Link>
          <Dropdown>
            <Dropdown.Button
              color={"error"}
              light
              className="border-[white] hover:text-[#a8a8a7]"
            >
              <p className="text-base font-semibold text-[#ffffff] hover:text-[#a8a8a7]">
                About Us
              </p>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="default"
              color={"error"}
              aria-label="Actions"
              background="red"
            >
              <Dropdown.Item>
                <Link href="/About/institute" legacyBehavior>
                  <a className={`text-primary`} href="/About/institute">
                    About the Institutution{" "}
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/About/department" legacyBehavior>
                  <a className={`text-primary`} href="/About/department">
                    About the Department
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/About/logo" legacyBehavior>
                  <a className={`text-primary`} href="/About/logo ">
                    About the Logo
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Button
              color={"error"}
              light
              className="border-[white] hover:text-[#a8a8a7]"
            >
              <p className="text-base font-semibold text-[#ffffff] hover:text-[#a8a8a7] ">
                BITCON 2024
              </p>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="default"
              color={"error"}
              aria-label="Actions"
              background="red"
            >
              <Dropdown.Item>
                <Link href="/CallForPaper" legacyBehavior>
                  <a className={`text-primary`} href="/CallForPaper">
                    Call for Papers
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/speakers" legacyBehavior>
                  <a className={`text-primary`} href="/speakers">
                    Invited Speakers
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Button
              color={"error"}
              light
              className="border-[white] hover:text-[#a8a8a7]"
            >
              <p className="text-base font-semibold text-[#ffffff] hover:text-[#a8a8a7] ">
                Committee
              </p>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="default"
              color={"error"}
              aria-label="Actions"
              background="red"
            >
              <Dropdown.Item>
                <Link href="/Comitte/OrganizingCommitte" legacyBehavior>
                  <a
                    className={`text-primary`}
                    href="Comitte/OrganizingCommitte"
                  >
                    Organizing Committee{" "}
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/Comitte/AdvisoryCommitte" legacyBehavior>
                  <a className={`text-primary`} href="AdvisoryCommitte">
                    Advisory Committee
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/Comitte/TechnicalCommitte" legacyBehavior>
                  <a
                    className={`text-primary`}
                    href="/Comitte/TechnicalCommitte"
                  >
                    Technical Committee
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Link href="/dates" legacyBehavior className="cursor-pointer">
            <a className={styles.navLink}>Important Dates</a>
          </Link>
          <Link href="/registration" legacyBehavior className="cursor-pointer">
            <a className={styles.navLink}>Registration </a>
          </Link>

          <Link href="/awards" legacyBehavior>
            <a className={styles.navLink}>Awards</a>
          </Link>
          <Link
            href="/PaperSubmission/info"
            legacyBehavior
            className="cursor-pointer"
          >
            <a className={styles.navLink}>Paper Submission </a>
          </Link>

          <Link href="/sponsor" legacyBehavior>
            <a className={styles.navLink}>Sponsorship</a>
          </Link>
          <Dropdown>
            <Dropdown.Button
              color={"error"}
              light
              className="border-[white] hover:text-[#a8a8a7]"
            >
              <p className="text-base font-semibold text-[#ffffff] hover:text-[#a8a8a7]">
                Downloads
              </p>
            </Dropdown.Button>
            <Dropdown.Menu
              variant="default"
              color={"error"}
              aria-label="Actions"
              background="red"
            >
              <Dropdown.Item>
                <Link
                  href="https://drive.google.com/file/d/1xStFwz2XoOhnwBQa0ASQWCWvDOUB78D1/view?usp=sharing"
                  legacyBehavior
                >
                  <a
                    className={`text-primary`}
                    href="https://drive.google.com/file/d/1xStFwz2XoOhnwBQa0ASQWCWvDOUB78D1/view?usp=sharing "
                  >
                    BITCON Flyer
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  href="https://drive.google.com/file/d/1s-helg72lQA9-WL61yY8jek--JO1QUwA/view?usp=sharing"
                  legacyBehavior
                >
                  <a
                    className={`text-primary`}
                    href="https://drive.google.com/file/d/1s-helg72lQA9-WL61yY8jek--JO1QUwA/view?usp=sharing"
                  >
                    Sponsorship Details
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <a
            href="https://docs.google.com/forms/d/1eOZsO1X6qmqyS48nEw43RJnOhwEBuAvXpXZXMtOOLaY/viewform?edit_requested=true"
            className="flex rounded-full"
            rel="noreferrer"
          ></a>
        </div>
        {/* <div className=""> */}
        {/* <ul className="flex flex-row gap-[3rem] text-[white]">
          <li>
            <a href="/dates" className="text-primary text-m">
              Important Dates
            </a>
          </li>

          <li>
            <a
              href="/Comitte/OrganizingComitte"
              // href="  "
              className="text-primary text-m ml-[-0.5rem]"
            >
              Committee
            </a>
          </li>
          <li>
            <a href="/CallForPaper" className="text-primary text-m">
              Call for Papers
            </a>
          </li>
          <li>
            <a href="/PaperSubmission/info" className="text-primary text-m">
              Paper Submission
            </a>
          </li>

          <li>
            <a href="/sponsor" className="text-primary text-m">
              Sponsorship
            </a>
          </li>
          <li>
            <a href="/speakers" className="text-primary text-m">
              Invited Speakers
            </a>
          </li>
        </ul> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Nav3;
