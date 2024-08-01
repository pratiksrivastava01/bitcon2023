import React from "react";
import programmer from "@/assets/programmer.png";
import Image from "next/image";

const Foot = () => {
  return (
    <div className="bg-[#002E73] flex flex-wrap justify-center gap-5 mt-5 p-4 sm:gap-0">
      <div className="flex gap-5 sm:gap-0">
        <Image
          src={programmer}
          alt="programmer"
          className="h-[3rem] w-[3rem]"
        />
        <h1 className=" flex items-center text-primary-light text-m sm:text-lg">
          Developed By :
        </h1>
      </div>
      <h1 className=" flex items-center text-primary-light sm:text-lg text-lg">
        Pratik Srivastava (EE 2021-25)
      </h1>
    </div>
  );
};

export default Foot;
