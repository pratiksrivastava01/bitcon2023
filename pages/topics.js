import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Navbar2 from "@/components/navbar/Navbar2";
import Head from "next/head";
import React from "react";

const topics = () => {
  return (
    <>
      <Head>
        <title>Topics</title>
        <meta
          name="description"
          content="Birla Institute of Technology Sindri (BIT Sindri) is a renowned engineering college located in Sindri, Jharkhand, India. Established in 1949, the institute offers undergraduate and postgraduate programs in various fields of engineering and technology. BIT Sindri is known for its quality education, highly qualified faculty, and strong alumni network. Its graduates have made significant contributions to various sectors around the world. Overall, BIT Sindri is a premier institution that has been at the forefront of technical education in India for over seven decades."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Navbar2 />
      <Nav3 />
      <div className="flex items-center justify-center mt-[4rem] ">
        <h1 className="font-bold text-5xl">Topic of Interest</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-[4rem] gap-[10rem]">
        <div className="flex gap-[9.5rem]">
          <div className="ml-[-0.5rem] border-2 border-primary shadow-2xl  w-[35rem] p-8">
            <h3 className="font-bold text-3xl text-[#002E73]">
              1. Power System Dynamics:{" "}
            </h3>
            <ul>
              <li>a) Planning, stability, protection and reliability</li>
              <li>b) Power system optimization and energy management</li>
              <li className="overflow-auto">
                c) Microgrids, Smart grid and Active Distribution Network <br />
                Management
              </li>
              <li>
                d) Electrical Energy Generation, Transmission and <br />{" "}
                Distribution
              </li>
              <li>e) Load modelling, estimation and forecast</li>
              <li>f) Electric machines modeling and simulation </li>
              <li>g) Electric machines control and optimization</li>
            </ul>
          </div>
          <div className="border-2 border-primary shadow-2xl  w-[35rem] p-8">
            <h3 className="font-bold text-3xl text-[#002E73]">
              2. Power Electronics Drives & Applications:{" "}
            </h3>
            <ul>
              <li>
                a) Power electronics applications in renewable energy systems
              </li>
              <li>b) Power electronics for electric vehicles</li>
              <li>c) Electric drives and motor control</li>
              <li>d) High-power converters and inverters</li>
              <li>e) Modeling and simulation of large power systems </li>
              <li>f) Power quality issues, harmonic problems and solutions</li>
              <li>g) HVDC, FACTS devices and controllers </li>
            </ul>
          </div>
        </div>
        <div className=" flex gap-[10rem] ">
          <div className="border-2 border-primary shadow-2xl w-[35rem] p-8">
            <h3 className="font-bold text-3xl text-[#002E73]">
              3. Control System, Automation & Applications:
            </h3>
            <ul>
              <li>a) Control theory and applications</li>
              <li> b) Adaptive and intelligent control systems</li>{" "}
              <li> c) Robotics and automation</li>{" "}
              <li> d) Industrial Process Control and Automation</li>{" "}
              <li> e) Linear and nonlinear systems </li>{" "}
              <li> f) Small and large system dynamics </li>{" "}
              <li> g) Intelligent Sensors and Actuators</li>
            </ul>
          </div>
          <div className="border-2 border-primary w-[35rem] shadow-2xl p-8">
            <h3 className="font-bold text-3xl text-[#002E73]">
              4. Green Energy Technology & Applications:
            </h3>
            <ul>
              <li>a) Hybrid Renewable Energy Systems </li>{" "}
              <li> b) Control Techniques for Renewable Energy Systems </li>{" "}
              <li>
                {" "}
                c) Power converters for Renewable Energy based microgrids{" "}
              </li>{" "}
              <li>d) Energy storage technologies</li>{" "}
              <li>
                {" "}
                e) Power Devices and Driving Circuits for Renewable Energy
                Systems{" "}
              </li>{" "}
              <li>
                f) Electric vehicles and its Integration with Renewable Energy
                Systems{" "}
              </li>{" "}
              <li>
                g) Power Conditioning and Protection for Renewable Energy
                Systems
              </li>
            </ul>
          </div>
        </div>
        <div className="border-2 border-primary shadow-2xl  w-[35rem] p-8">
          <h3 className="font-bold text-3xl text-[#002E73]">
            5. Artificial Intelligence, IoT and Signal Processing{" "}
          </h3>
          <ul>
            <li>a) Optimization Technique </li>{" "}
            <li> b) Internet of Things (IoT) Enabled Devices</li>{" "}
            <li> c) Cognitive Computing and Deep Learning Techniques</li>{" "}
            <li> d) Cloud-based Data Analytics and Machine Learning</li>{" "}
            <li> e) Security and Privacy Issues in IoT and AI Applications</li>{" "}
            <li> f) Wireless Sensor Networks for IoT Applications.</li>{" "}
            <li>
              {" "}
              g) Signal Processing Techniques for Image and Video Processing
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default topics;
