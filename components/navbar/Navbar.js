/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
import ieee from "../../assets/ieee.png";
import bitcon from "@/assets/bitcon.png";
import jh from "@/assets/jh_logo.png";
// import Button from "../button/Button";
import Sidebar from "./Sidebar";
import { Dropdown } from "@nextui-org/react";
// import { Dropdown } from "@nextui-org/react";

const SpanStyle = {
  zIndex: 1,
  color: "inherit",
  transition: "all 300ms ease-in-out",
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Creating a dynamic parent div for the sidebar to act as portal's root
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    document.querySelector("body").appendChild(div);
    return () => div.remove();
  }, []);

  useEffect(() => {
    let prevScroll = window.pageYOffset;
    const handleScroll = () => {
      const navList = document.getElementById("navList");
      const navbar = document.getElementById("navbar");
      const title = document.getElementById("hnccTitle");
      const height = navbar.offsetHeight;

      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > height + 60) {
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
      } else {
        navbar.style.border = "none";
      }

      if (prevScroll < currentScrollPos) {
        // navList.classList.add('fade-up');
        // title.classList.add('fade-up');
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
      }
      // else {
      //   navList.classList.remove("fade-up");
      //   title.classList.remove("fade-up");
      // }

      prevScroll = currentScrollPos;
    };
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  const [selected, setSelected] = React.useState(new Set(["text"]));

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <section id="navbar" className={`${styles.navbar} h`}>
      <div className="flex row gap-3">
        <Link href="https://www.bitsindri.ac.in/" legacyBehavior>
          <a className="flex items-center cursor-pointer">
            <Image
              src={Logo}
              alt="BIT"
              height="60px"
              width="60px"
              className="sm:h-[2.5rem] h-[4rem] w-[auto] cursor-pointer "
            />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="flex items-center cursor-pointer">
            <Image
              src={jh}
              alt="BIT"
              height="60px"
              width="60px"
              className="sm:h-[2.5rem] h-[4rem] w-[auto] cursor-pointer "
            />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="flex items-center cursor-pointer">
            <Image
              src={bitcon}
              alt="BIT"
              height="60px"
              width="60px"
              className="sm:h-[2.5rem] h-[4rem] w-[auto] cursor-pointer "
            />
          </a>
        </Link>
        <Link href="/" legacyBehavior>
          <a className="flex items-center cursor-pointer">
            <Image
              src={ieee}
              alt="BIT"
              height="60px"
              width="60px"
              className="sm:h-[2.5rem] h-[4rem] w-[auto] cursor-pointer "
            />
          </a>
        </Link>
        
      </div>
      <div id="navList" className={styles.navbarList}>
        <Link href="/contact" legacyBehavior>
          <a
            className={
              (styles.navLink,
              `hover:bg-[#ffffff9f] hover:border-solid  hover:border-deepblue hover:border-2 text-sm p-[0.8rem] rounded hover:text-[#002E73] bg-[#002e73] text-primary-light  font-bold`)
            }
          >
            CONTACT US
          </a>
        </Link>
        <a
          href="https://docs.google.com/forms/d/1eOZsO1X6qmqyS48nEw43RJnOhwEBuAvXpXZXMtOOLaY/viewform?edit_requested=true"
          className="flex rounded-full"
          rel="noreferrer"
        ></a>
      </div>
      <div
        id="hamburger"
        onClick={() => setIsOpen(true)}
        className={styles.humburgerMenu}
      >
        <HiMenuAlt4 size={32} className="block" />
      </div>
      <Sidebar isMounted={isOpen} unmount={() => setIsOpen(false)} />
    </section>
  );
}
export default Navbar;
