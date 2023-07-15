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
      <div className=" flex flex-col  ">
        {/* <Navbar /> */}
        <Notification />
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center gap-[5rem]  w-[90%] overflow-hidden ">
            <div className="  w-[12%] sm:w-[100%] sm:flex ">
              <Image src={jh} alt="jh" className="h-[8rem] w-[8rem] "></Image>
              <Image
                src={logo}
                alt="logo"
                className="h-[8rem] w-[8rem]"
              ></Image>
            </div>
            <div className="flex flex-col sm:mt-[-4rem] items-center  w-[62%] sm:w-[100%]">
              <h1 className="text-center text-4xl text-[#002E73] font-serif font-bold sm:text-xl mt-[2rem] ">
                Celebrating Platinum Jubilee of BIT SINDRI
              </h1>
              <h1 className="text-center text-4xl text-[#002E73] font-bold sm:text-xl  ">
                <span className="text-[#385623] font-sans">FLAGSHIP</span> BIT
                CONFERENCE <span className="text-[#385623]">2023</span>
              </h1>
              <h1 className="text-center text-5xl text-[#002E73] font-bold sm:text-2xl mt-[2rem] ">
                <span className="text-[#385623]">(BITCON-23)</span>
              </h1>

              <p className="text-[#4E4E4E] text-xl sm:text-xs font-bold text-center mt-[2rem]">
                <span className="text-[#002E73] ">Theme:-</span>
                Next Generation Applications in Green Engineering Technology
              </p>
              <h1 className="text-[red] text-xl sm:text-xs font-bold text-center ">
                December 22-24, 2023 (3 days)
              </h1>
              <h1 className="text-[#002E73] text-3xl sm:text-lg font-bold text-center ">
                BIT Sindri, Dhanbad, Jharkhand, INDIA
              </h1>
            </div>
            <div className="w-[12%] sm:w-[100%] sm:flex sm:mt-0">
              <Image
                src={bitcon}
                alt="bitcon"
                className="h-[8rem] w-[8rem]"
              ></Image>
              <Image
                src={ieee}
                alt="ieee"
                className="h-[8rem] w-[10rem]"
              ></Image>
            </div>
          </div>
        </div>
        <Navbar />
        <Nav3 />

        <div className=" mt-[3rem] flex justify-center">
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
