import React from "react";
import styles from "./Notification.module.css";
import Image from "next/image";
import notification2 from "./../assets/notification2.svg";
const notification = () => {
  return (
    <div className="flex flex-row overflow-hidden">
      {/* <div className="bg-[#002256] p-2 text-[white] sm:text-lg  text-2xl">
        {" "}
        Notification
      </div> */}
      <div className="bg-[#FAC804] p-1 flex w-full justify-center sm:w-auto  sm:overflow-auto mt-4">
        <div className={`${styles.animate} flex w-full sm:w-max gap-12`}>
          {" "}
          {/* <span>1. All Acceptance notifications rolled out.</span>
          <span>
            2. Final Extended date of Registration is <b>20-November-2024</b>
          </span> */}
          <div className="flex flex-row justify-center w-auto items-center sm:w-max">
            {/* https://drive.google.com/file/d/1-gvUIU1nfRfKhLEvhRRzx1V7ayoE1sqP/view?usp=sharing */}
            <a
              href="https://drive.google.com/file/d/1tEbFnj6OSJ9p8QU91K1h_c3wIqMRmOHi/view?usp=sharing"
              target="_blank"
              className="text-black text-base sm:text-xs  flex flex-row gap-2 justify-start items-center"
            >
              {/* <Image
                src={notification2}
                className={`${styles.animate2} h-4 w-4 text-black`}
              /> */}
              <span className="text-black text-base sm:text-xs">
                {" "}
                Click here for BITCON-24 Schedule
              </span>
            </a>
          </div>
          <div className="flex flex-row justify-center w-auto items-center sm:w-max">
            {/* https://drive.google.com/file/d/1-gvUIU1nfRfKhLEvhRRzx1V7ayoE1sqP/view?usp=sharing */}
            <a
              href="/ImportantNotice"
              className="text-black text-base sm:text-xs  flex flex-row gap-2 justify-start items-center"
            >
              {/* <Image
                src={notification2}
                className={`${styles.animate2} h-4 w-4 text-black`}
              /> */}
              <span className="text-black text-base sm:text-xs">
                {" "}
                Click here for Important Notice
              </span>
            </a>
          </div>
          <div className="flex flex-row justify-center items-center w-auto sm:w-max">
            {/* https://drive.google.com/file/d/1-gvUIU1nfRfKhLEvhRRzx1V7ayoE1sqP/view?usp=sharing */}
            <a
              href="/ConfirmedRegistrations"
              className="text-black text-base sm:text-xs flex flex-row gap-2 justify-start items-center"
            >
              {/* <Image
                src={notification2}
                className={`${styles.animate2} h-4 w-4 text-black`}
              /> */}
              <span className="text-black text-base sm:text-xs ">
                {" "}
                Registration Confirmed Paper IDs
              </span>
            </a>
          </div>
          <div className="flex flex-row justify-center items-center w-auto sm:w-max">
            {/* https://drive.google.com/file/d/1-gvUIU1nfRfKhLEvhRRzx1V7ayoE1sqP/view?usp=sharing */}
            <a
              href="/awards#ac"
              className="text-black text-base sm:text-xs flex flex-row gap-2 justify-start items-center"
            >
              {/* <Image
                src={notification2}
                className={`${styles.animate2} h-4 w-4 text-black`}
              /> */}
              <span className="text-black text-base sm:text-xs ">
                {" "}
                Criterion for Best Paper Award in Each Track
              </span>
            </a>
          </div>
          {/* <span> Rolling Acceptance Notification</span> */}
          {/* <span className="invisible">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies dictum arcu nec porttitor. Nam efficitur, metus ac pretium
            sollicitudin, leo erat pharetra eros, quis rutrum ante eros vel
            erat. Aenean dapibus feugiat ipsum, at pharetra dui varius eu. Morbi
            libero augue, commodo eget lacus et, pulvinar aliquet mi. Quisque id
            interdum lectus. Phasellus cursus pulvinar laoreet. Duis eu pretium
            elit. Pellentesque vel tincidunt nisl, eget sollicitudin massa.
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default notification;
