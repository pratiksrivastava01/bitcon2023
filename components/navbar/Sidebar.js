import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CgClose } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import style from "./Hamburger.module.css";
import Logo from "../../assets/logo.png";
// import Button from "../button/Button";
import styles from "../navbar/Navbar.module.css";
import { Dropdown } from "@nextui-org/react";

const SpanStyle = {
  zIndex: 1,
  color: "inherit",
  transition: "all 300ms ease-in-out",
};

function Sidebar({ isMounted, unmount }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const documentWidthRef = useRef(null);

  useEffect(() => {
    let timeoutId;
    if (isMounted && !isTransitioning) {
      setIsTransitioning(true);
      documentWidthRef.current = document.documentElement.clientWidth;
      document.documentElement.classList.add("scroll-lock");

      /*
        After locking the body scroll, the scrollbar is hidden, so we have to compensate for the extra space
        created due to no scrollbar by giving the document an extra right padding according to the extra created space
      */
      if (documentWidthRef.current !== document.documentElement.clientWidth) {
        document.documentElement.style.paddingRight = `${
          document.documentElement.clientWidth - documentWidthRef.current
        }px`;
      }
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => {
        setIsTransitioning(false);
        document.documentElement.classList.remove("scroll-lock");
        document.documentElement.style.paddingRight = 0;
      }, 300);
    }

    return () => {
      clearTimeout(timeoutId);
      if (
        document.documentElement.classList.contains("scroll-lock") &&
        isTransitioning
      ) {
        document.documentElement.classList.remove("scroll-lock");
        document.documentElement.style.paddingRight = 0;
      }
    };
  }, [isMounted, isTransitioning]);

  if (!isMounted && !isTransitioning) return null;

  return createPortal(
    <section
      className={`${isTransitioning && isMounted ? style.active : ""} ${
        style.navbarWrapper
      }`.trim()}
    >
      <div className={style.navbar}>
        <div>
          <Link href="/" legacyBehavior>
            <a className="flex items-center" onClick={unmount}>
              <Image
                src={Logo}
                alt="BIT Sindri"
                height="60px"
                width="60px"
                className="sm:h-[2.5rem] h-[3rem] w-[auto] "
              />
            </a>
          </Link>
        </div>
        <div onClick={unmount} className="cursor-pointer">
          <CgClose size={24} className={style.closeIcon} />
        </div>
      </div>

      <div id="navList" className={style.navItems}>
        <Link href="/" legacyBehavior>
          <a className={style.navLink}>Home</a>
        </Link>
     
        <Dropdown>
          <Dropdown.Button color={"error"} light className="border-[white]">
            <p className="text-sm text-primary">About Us</p>
          </Dropdown.Button>
          <Dropdown.Menu
            variant="default"
            color={"error"}
            aria-label="Actions"
            background="red"
          >
            <Dropdown.Item>
              <Link
                href="/About/institute"
                legacyBehavior
              >
                <a
                  className={`text-primary text-sm`}
                  href="/About/institute"
                >
                  About the Institutution{" "}
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href="/About/department"
                legacyBehavior
              >
                <a
                  className={`text-primary text-sm`}
                  href="/About/department"
                >
                  About the Department
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href="/About/logo"
                legacyBehavior
              >
                <a
                  className={`text-primary text-sm`}
                  href="/About/logo "
                >
                  About the Logo
                </a>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="text-sm">
          <Dropdown.Button color={"error"} light className="border-[white]">
            <p className={`text-primary text-sm`}>BITCON 2024</p>
          </Dropdown.Button>
          <Dropdown.Menu
            variant="default"
            color={"error"}
            aria-label="Actions"
            background="red"
          >
            <Dropdown.Item>
              <Link href="/dates" legacyBehavior>
                <a className={`text-primary text-sm`} href="/dates">
                  Important Dates{" "}
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/Comitte/OrganizingComitte" legacyBehavior>
                <a
                  className={`text-primary text-sm`}
                  href="/Comitte/OrganizingComitte"
                >
                  Committee
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/CallForPaper" legacyBehavior>
                <a className={`text-primary text-sm`} href="/CallForPaper">
                  Call for Papers
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/speakers" legacyBehavior>
                <a className={`text-primary text-sm`} href="/speakers">
                  Invited Speakers
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/PaperSubmission/info" legacyBehavior>
                <a
                  className={`text-primary text-sm`}
                  href="/PaperSubmission/info"
                >
                  Paper Submission
                </a>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link href="/registeration" legacyBehavior>
          <a className={style.navLink}>Registration</a>
        </Link>
        <Link href="/awards" legacyBehavior>
          <a className={style.navLink}>Awards</a>
        </Link>
        <Link href="/PaperSubmission/info" legacyBehavior>
          <a className={style.navLink}>Paper Submission</a>
        </Link>
        <Link href="/sponsor" legacyBehavior>
          <a className={(style.navLink, `text-sm text-primary`)}>Sponsorship</a>
          </Link>
          <Dropdown>
            <Dropdown.Button color={"error"} light className="border-[white]">
              <p className="text-sm text-primary">Downloads</p>
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
                    className={`text-primary text-sm`}
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
                    className={`text-primary text-sm`}
                    href="https://drive.google.com/file/d/1s-helg72lQA9-WL61yY8jek--JO1QUwA/view?usp=sharing"
                  >
                    Sponsorship Details
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        <Link href="/contact" legacyBehavior>
          <a className={(style.navLink, `text-sm text-primary`)}>CONTACT US</a>
        </Link>
        <a
          href="https://docs.google.com/forms/d/1eOZsO1X6qmqyS48nEw43RJnOhwEBuAvXpXZXMtOOLaY/viewform?edit_requested=true"
          target="_blank"
          className="flex rounded-full"
          rel="noreferrer"
        >
          {/* <Button
            style={{ border: "none" }}
            className="bg-primary-light text-primary hover:text-primary-light xs:!py-3"
          >
            <span style={SpanStyle}>Join Us</span>
          </Button> */}
        </a>
      </div>
    </section>,
    document.getElementById("overlay")
  );
}
export default Sidebar;
