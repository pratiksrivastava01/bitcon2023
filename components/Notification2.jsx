import React from "react";
import styles from "./Notification.module.css";
import Image from "next/image";
import notification from "./../assets/notification2.svg";
const notification2 = () => {
  return (
    <div className="flex flex-row ">
      {/* <div className="bg-[#002256] p-2 text-[white] sm:text-lg  text-2xl">
        {" "}
        Notification
      </div> */}
      <div className="bg-[#002E73] p-1 flex w-full justify-center  overflow-hidden mt-0">
        <div className={`${styles.animate} w-full flex gap-12`}>
          {" "}
          <div className="justify-center items-center">
            {/* https://drive.google.com/file/d/1-gvUIU1nfRfKhLEvhRRzx1V7ayoE1sqP/view?usp=sharing */}
            <a
              href="/ImportantNotice"
              className="text-[#ffffff] text-base flex flex-row gap-2 justify-start items-center"
            >
              <Image
                src={notification}
                className={`${styles.animate2} h-4 w-4 text-white`}
              />
              <span className="text-white">
                {" "}
                Click here for Important Notice
              </span>
            </a>
          </div>
          <div className="justify-center items-center">
            {/* https://drive.google.com/file/d/1-gvUIU1nfRfKhLEvhRRzx1V7ayoE1sqP/view?usp=sharing */}
            <a
              href="/ConfirmedRegistrations"
              className="text-[#ffffff] text-base flex flex-row gap-2 justify-start items-center"
            >
              <Image
                src={notification}
                className={`${styles.animate2} h-4 w-4 text-white`}
              />
              <span className="text-white">
                {" "}
                Registration Confirmed Paper IDs
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notification2;
