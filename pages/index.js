import Footer from "@/components/home/Footer";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Notification from "@/components/Notification";
import Image from "next/image";
import jh from "@/assets/jh_logo.png";
import logo from "@/assets/logo.png";
import bitcon from "@/assets/bitcon.png";
import ieee from "@/assets/ieee.jpg";

import Nav2 from "@/components/navbar/Nav2";
import Slider from "@/components/Slider";
import Foot from "@/components/Foot";
import Nav3 from "@/components/home/Nav3";

export default function Home() {
  const slides = [
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1683607533/28DhanBIT7_172735_vzzfjq.jpg",
      title: "forest",
    },
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1683607364/BIT-Sindri_lkzgzm.jpg",
      title: "beach",
    },
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1683607435/Electrical_wdzoph.jpg",
      title: "boat",
    },
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1686717651/IMG_1589_hs5ddo.jpg",
      title: "city",
    },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <>
      <Head>
        <title>BITCON-2024</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <div className=" flex flex-col  mb-10">
        <Navbar />
        <Nav3 />
        {/* <Notification /> */}
        <div className="flex justify-center  ">
          <div className="flex flex-wrap padding-container items-center justify-center w-[90%] md:w-full overflow-hidden ">
            <div className="  w-[12%] sm:w-[100%]  sm:flex sm:mb-10 sm:items-center sm:justify-center sm:gap-10 sm:mt-2">
              <Image
                src={jh}
                alt="jh"
                className="h-[8rem] w-[8rem] md:h-[6rem] md:w-[6rem] sm:h-[4rem] sm:w-[4rem]"
              ></Image>
              <Image
                src={logo}
                alt="logo"
                className="h-[8rem] w-[8rem] md:h-[6rem] md:w-[6rem] sm:h-[4rem] sm:w-[4rem]"
              ></Image>
            </div>
            <div className="flex flex-col sm:mt-[-4rem] items-center  w-[62%] sm:w-auto sm:paddin-container">
              <h1 className="text-center text-4xl text-[#002E73] font-serif font-bold xxl:text-3xl sm:text-lg mt-[2rem] ">
                Celebrating Platinum Jubilee of BIT SINDRI
              </h1>
              <h1 className="text-center text-4xl text-[#002E73] font-bold sm:text-xl  ">
                <span className="text-[#385623] font-sans">
                  FLAGSHIP INTERNATIONAL
                </span>{" "}
              </h1>
              <h1 className="text-center text-6xl text-[#002E73] font-bold sm:text-xl ">
                BIT CONFERENCE 2024
              </h1>
              <h1 className="text-center text-5xl text-[#002E73] font-bold sm:text-2xl mt-[1rem] sm:mt-[1rem]">
                <span className="text-[#385623]">(BITCON-24)</span>
              </h1>

              <p className="text-[#4E4E4E] text-xl sm:text-xs font-bold text-center mt-[1rem] sm:mt-[1rem]">
                <span className="text-[#002E73] ">Theme:-</span>
                Next Generation Applications in Green Energy Technology
              </p>
              <h1 className="text-[red] text-xl sm:text-xs font-bold text-center ">
                13-14 July, 2024 (Tentative)
              </h1>
              <h1 className="text-[#002E73] text-3xl sm:text-lg font-bold text-center ">
                BIT Sindri, Dhanbad, Jharkhand, INDIA
              </h1>
            </div>
            <div className="w-[12%] sm:w-[100%] sm:flex sm:mt-0 sm:justify-center sm:gap-10">
              <Image
                src={bitcon}
                alt="bitcon"
                className="h-[8rem] w-[10rem] md:h-[6rem] md:w-[6rem] sm:h-[4rem] sm:w-[4rem]"
              ></Image>
              {/* <Image
                src={ieee}
                alt="ieee"
                className="h-[8rem] w-[10rem] md:h-[6rem] md:w-[6rem] sm:h-[4rem] sm:w-[4rem]"
              ></Image> */}
            </div>
          </div>
        </div>
        {/* <Navbar /> */}

        {/* <Notification /> */}

        <div className=" mt-[1rem] flex justify-center mb-10">
          <div className="w-[80%] h-[20rem] sm:w-[100%] sm:h-[10rem] ">
            <Slider slides={slides} />
          </div>
        </div>
        <Footer />
      </div>
      <Foot />
    </>
  );
}
