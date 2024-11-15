import React from "react";
import styles from "./Notification.module.css";

const notification = () => {
  return (
    <div className="flex flex-row ">
      {/* <div className="bg-[#002256] p-2 text-[white] sm:text-lg  text-2xl">
        {" "}
        Notification
      </div> */}
      <div className="bg-[#FAC804] p-1 flex w-full justify-center  overflow-hidden mt-4">
        <div className={`${styles.animate} flex w-full gap-12`}>
          {" "}
          <span>1. All Aacceptance notifications rolled out.</span>
          <span>2. Last Extended date of Registration is 18-November-2024</span>
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
