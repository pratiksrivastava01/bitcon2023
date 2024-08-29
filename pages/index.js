import Footer from "@/components/home/Footer";
import Navbar from "@/components/navbar/Navbar";
import Navbar2 from "@/components/navbar/Navbar2";
import Head from "next/head";
import Notification from "@/components/Notification";
import Image from "next/image";
import jh from "@/assets/jh_logo.png";
import logo from "@/assets/logo.png";
import bitcon from "@/assets/bitcon.png";
import ieee from "@/assets/ieee.png";
import pes from "@/assets/pes.jpg";
import Nav2 from "@/components/navbar/Nav2";
import Slider from "@/components/Slider";
import Foot from "@/components/Foot";
import Nav3 from "@/components/home/Nav3";
import Nav4 from "@/components/home/Nav4";
import Link from "next/link";
import StickyBar from "@/components/StickyBar";
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
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1702144864/pic_c17uu3.jpg",
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
      <div className=" flex flex-col  mb-0">
        <Navbar2 />
        <Nav3 />
        
        {/* <Notification /> */}
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap sm:mx-4 mx-8 items-center sm:items-start justify-center sm:w-[100%] w-[90%] md:w-full overflow-hidden ">
            <div className="w-[12%] sm:w-[50%] items-center justify-center  sm:flex sm:order-2 sm:mb-10 sm:items-start sm:justify-evenly sm:gap-0 sm:mt-2">
              <Image
                src={jh}
                alt="jh"
                className="h-[8rem] w-[auto] md:h-[6rem] md:w-[6rem] sm:h-[4rem] sm:w-[4rem]"
              ></Image>
              <div className="mt-[1rem] flex-col sm:mt-0 text-center justify-center items-center">
                <span className="text-xs sm:hidden">Technical Co-Sponsor</span>
                <Image
                  src={ieee}
                  alt="ieee"
                  className="h-[8rem] w-[auto] md:h-[6rem] sm:h-[4rem] "
                ></Image>
              </div>
            </div>
            <div className="flex flex-col sm:mt-[-4rem] sm:order-1 items-center  w-[62%] sm:w-auto sm:pt-[4rem]">
              <h1 className="text-center hidden lg:flex text-3xl text-[#002E73] font-serif font-bold xxl:text-3xl sm:text-lg mt-[2rem] ">
                Celebrating Platinum Jubilee of BIT Sindri
              </h1>
              <h1 className="text-center lg:mt-0 text-4xl text-[#002E73] font-bold sm:text-xl  mt-[2rem]">
                <span className="text-[#385623] font-sans">
                  2024 IEEE FLAGSHIP INTERNATIONAL
                </span>{" "}
              </h1>
              <h1 className="text-center text-6xl text-[#002E73] font-bold sm:text-3xl ">
                BIT CONFERENCE 2024
              </h1>
              <h1 className="text-center text-4xl text-[#002E73] font-bold sm:text-2xl mt-[0.5rem] sm:mt-[0.2rem]">
                <span className="text-[#385623]">(BITCON-24)</span>
              </h1>
              <h3 className="text-center text-lg sm:text-sm text-[#002E73] mt-[0.5rem]  sm:mt-[0.2rem]">
                <span className="text-primary">
                  IEEE Conference Record No: <b>#63716</b>
                </span>
              </h3>
              <p className="text-[#4E4E4E] text-xl sm:text-xs font-bold text-center mt-[0.5rem]  sm:mt-[0.2rem]">
                <span className="text-[#002E73] ">Theme:- </span>
                Next Generation Applications in Green Energy Technology
              </p>
              <h1 className="text-[red] text-xl sm:text-xs font-bold text-center ">
                (07-08 December, 2024)
              </h1>
              <h1 className="text-[#002E73] text-3xl sm:text-lg font-bold text-center ">
                BIT Sindri, Dhanbad, Jharkhand, India
              </h1>
            </div>
            <div className="w-[15%] sm:w-[50%] sm:flex-row sm:order-3 sm:items-center sm:flex sm:mt-2 sm:gap-0 sm:justify-evenly">
              <Image
                src={bitcon}
                alt="bitcon"
                className="h-[8rem] w-[auto] md:h-[6rem] md:w-[6rem] sm:h-[4rem] sm:w-[4rem]"
              ></Image>
              <div className="mt-[1rem] flex-col sm:mt-0 justify-center items-center">
                <span className="text-xs sm:hidden">Technical Co-Sponsor</span>
                <Image
                  src={pes}
                  alt="ieee"
                  className="h-[8rem] w-[auto] md:h-[6rem] sm:h-[4rem] sm:w-[5rem]"
                ></Image>
              </div>
            </div>
          </div>
        </div>
        {/* <Navbar /> */}

        <Notification />

        <div className=" mt-[1rem] flex justify-center mb-4">
          <div className="w-[100%] mx-12 sm:mx-4 h-[20rem] sm:h-[10rem] ">
            <Slider slides={slides} />
          </div>
        </div>
        <Footer />
      </div>
      <Foot />
      <StickyBar />
    </>
  );
}
