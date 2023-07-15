import React from "react";
import styles from "./Notification.module.css";

const notification = () => {
  return (
    <div className="flex flex-row ">
      <div className="bg-[#002256] p-2 text-[white] sm:text-lg  text-2xl">
        {" "}
        Notification
      </div>
      <div className="bg-[#FAC804] flex justify-center overflow-hidden">
        <div className={`${styles.animate} flex `}>
          {" "}
          Attempt is being made to publish the{" "}
          <span> registered and only presented papers</span>
          <span> on IEEE Xplore Digital Library.</span>
          <span className="invisible">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            voluptates! Lorem ipsum dolor sit amet consectetur adipisicing
          </span>
        </div>
      </div>
    </div>
  );
};

export default notification;
