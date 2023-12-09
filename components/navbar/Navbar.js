/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
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
      <div className="">
        <Link href="/" legacyBehavior>
          <a className="flex items-center cursor-pointer">
            <Image
              src={Logo}
              alt="BIT"
              height="60px"
              width="60px"
              className="h-[3rem] w-[3rem] cursor-pointer "
            />
          </a>
        </Link>
      </div>
      <div id="navList" className={styles.navbarList}>
        <Dropdown>
          <Dropdown.Button color={"error"} light className="border-[white]">
            <p className="text-lg text-primary-light">About Us</p>
          </Dropdown.Button>
          <Dropdown.Menu
            variant="default"
            color={"error"}
            aria-label="Actions"
            background="red"
          >
            <Dropdown.Item>
              <Link
                href="https://bitcon2024.vercel.app/About/institute"
                legacyBehavior
              >
                <a
                  className={`text-primary`}
                  href="https://bitcon2024.vercel.app/About/institute"
                >
                  About the Institutution{" "}
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href="https://bitcon2024.vercel.app/About/department"
                legacyBehavior
              >
                <a
                  className={`text-primary`}
                  href="https://bitcon2024.vercel.app/About/department"
                >
                  About the Department
                </a>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                href="https://bitcon2024.vercel.app/About/logo"
                legacyBehavior
              >
                <a
                  className={`text-primary`}
                  href="https://bitcon2024.vercel.app/About/logo "
                >
                  About the Logo
                </a>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Link href="/registeration" legacyBehavior className="cursor-pointer">
          <a className={styles.navLink}>Registration </a>
        </Link>

        <Link href="/awards" legacyBehavior>
          <a className={styles.navLink}>Awards</a>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1eipV56n386lbUG-NKRAyOKOas3oubENI/view?usp=sharing"
          legacyBehavior
        >
          <a className={styles.navLink}>Download</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a
            className={
              (styles.navLink,
              `bg-primary-light text-sm p-[0.8rem] text-[#002E73] hover:bg-[#FAC804] hover:text-primary-light  rounded-sm font-bold`)
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
