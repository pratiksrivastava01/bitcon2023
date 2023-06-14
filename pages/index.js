import Footer from "@/components/home/Footer";
import ImageSlider from "@/components/imageSlider";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Notification from "@/components/Notification";
import Image from "next/image";
import jh from "@/assets/jh_logo.png";
import logo from "@/assets/logo.png";
import bitcon from "@/assets/bitcon.png";
import ieee from "@/assets/ieee.jpg";

import Nav2 from "@/components/home/Nav2";

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
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1686717734/IMG_1736_oxl0yc.jpg",
      title: "italy",
    },
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1686717734/IMG_1603_jgd7er.jpg",
      title: "indea",
    },
    {
      url: "https://res.cloudinary.com/du196ag4l/image/upload/v1686717808/IMG_1708_w03k1s.jpg",
      title: "one",
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
        <title>BITCON-2023</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <div className=" flex flex-col ">
        <Navbar />
        <Notification />

        <div className="flex flex-wrap items-center gap-[5rem]">
          <div className="flex flex-col ml-[-2rem]  sm:flex-col">
            <Image
              src={jh}
              className="h-[10rem] w-[10rem] sm:h-[5rem] sm:w-[5rem] ml-[7.5rem] mt-[2rem]  "
            ></Image>
            <Image
              src={logo}
              className="h-[8rem] w-[8rem] sm:h-[5rem] sm:w-[5rem] sm:ml-0 sm:mt-0 ml-[8.5rem] mt-[3rem]  "
            ></Image>
          </div>
          <div className="flex flex-col  items-center">
            <h1 className="text-center text-4xl text-[#002E73] font-serif font-bold sm:text-xl mt-[2rem] ">
              Celebrating Platinum Jubilee of BIT SINDRI
            </h1>
            <h1 className="text-center text-5xl text-[#002E73] font-bold sm:text-2xl mt-[2rem] ">
              <span className="text-[#385623] font-sans">FLAGSHIP</span> BIT
              CONFERENCE <span className="text-[#385623]">2023</span>
            </h1>
            <h1 className="text-center text-5xl text-[#002E73] font-bold sm:text-2xl mt-[2rem] ">
              <span className="text-[#385623]">(BITCON-23)</span>
            </h1>

            <h3 className="text-[#4E4E4E] text-xl sm:text-xs font-bold text-center mt-[2rem]">
              <span className="text-[#002E73] ">Theme:-</span>
              Next Generation Applications in Green Engineering Technology
            </h3>
            <h1 className="text-[red] text-xl sm:text-xs font-bold text-center mt-[2rem]">
              December 22-24, 2023 (3 days)
            </h1>
            <h1 className="text-[#002E73] text-3xl sm:text-lg font-bold text-center ">
              BIT, Sindri, Dhanbad, Jharkhand, INDIA
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row ml-[-2rem]   flex-wrap">
            <Image
              src={bitcon}
              className="h-[10rem] w-[10rem] ml-[80rem] sm:ml-0 mt-[-27rem] relative "
            ></Image>
            <Image
              src={ieee}
              className="h-[14rem] w-[16rem] ml-[77rem] mt-[-1rem] relative "
            ></Image>
          </div>
        </div>
        <div className="w-[80rem] h-[30rem] ml-[8rem] mt-[2rem] sm:w-[23rem] sm:h-[20rem] sm:ml-[1.2rem]">
          <ImageSlider slides={slides} />
        </div>
        <Nav2 />
        <Footer />
      </div>
    </>
  );
}
