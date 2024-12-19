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
            <span className="text-black text-base sm:text-xs">
              {" "}
              Conference Proceeding
            </span>
          </div>
          <div className="flex flex-row justify-center w-auto items-center sm:w-max">
            <span className="text-black text-base sm:text-xs">
              {" "}
              Certificate Distribution is in Rolling
            </span>
          </div>
          <div className="flex flex-row justify-center w-auto items-center sm:w-max">
            <a
              href="https://drive.google.com/file/d/19h4mu2kDKHKAbaqsP3vg73eYzE2VcI3h/view?usp=sharing"
              target="_blank"
              className="text-black text-base sm:text-xs  flex flex-row gap-2 justify-start items-center"
            >
              {/* <Image
                src={notification2}
                className={`${styles.animate2} h-4 w-4 text-black`}
              /> */}
              <span className="text-black text-base sm:text-xs">
                {" "}
                Click here for Book of Abstracts
              </span>
            </a>
          </div>
          <div className="flex flex-row justify-center w-auto items-center sm:w-max">
            <a
              href="https://drive.google.com/drive/folders/1sm1CFFPebBDSjsaYiPO8Cdq2T7v_mAdO?usp=sharing"
              target="_blank"
              className="text-black text-base sm:text-xs  flex flex-row gap-2 justify-start items-center"
            >
              {/* <Image
                src={notification2}
                className={`${styles.animate2} h-4 w-4 text-black`}
              /> */}
              <span className="text-black text-base sm:text-xs">
                {" "}
                Click here for Drive link of BITCON24 Photos
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notification;
