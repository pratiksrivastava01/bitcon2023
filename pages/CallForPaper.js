import Foot from "@/components/Foot";
import Nav3 from "@/components/home/Nav3";
import Navbar from "@/components/navbar/Navbar";
import Navbar2 from "@/components/navbar/Navbar2";
import Head from "next/head";
import React from "react";

const CallForPaper = () => {
  return (
    <>
      <Head>
        <title>Call For Papers</title>
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
      <div className="h-auto mx-8 rounded-lg justify-center flex flex-col border-primary  shadow-2xl mt-[3rem] sm:mt-[1.5rem] sm:mx-0  sm:h-auto p-4 ">
        <div className="flex flex-wrap gap-[32rem]">
          <h2 className="text-primary font-bold p-4 flex text-4xl sm:text-2xl">
            Call For Papers
          </h2>
        </div>
        <div className="ml-[1rem]">
          <p className="text-sm sm:text-xs">
            Authors are invited to contribute to the conference by submitting
            articles that illustrate research results, projects, experimental
            works, and industrial experiences in the following tracks:
          </p>

          {[
            // List of tracks with details
            {
              title:
                "Track 1: Power system, Smart Grid, Smart City, Smart Systems and Technologies",
              topics: [
                "Power system - planning, stability, protection, reliability, optimization and energy management",
                "Microgrids, Smart grid and Active Distribution Network Management",
                "Electrical Energy Generation, Transmission and Distribution",
                "Load modelling, estimation and forecast",
                "Electric machines modeling and simulation",
                "Electric machines control and optimization",
              ],
            },
            {
              title: "Track 2: Power Electronics Drives and Electric Vehicles",
              topics: [
                "Power electronics applications in renewable energy systems",
                "Power electronics for electric vehicles",
                "Electric drives and motor control",
                "High-power converters and inverters",
                "Modeling and simulation of large power systems",
                "Power quality issues, harmonic problems and solutions",
                "HVDC, FACTS devices and controllers",
              ],
            },
            {
              title: "Track 3: Control System, Automation & Applications",
              topics: [
                "Control theory and applications",
                "Adaptive and intelligent control systems",
                "Robotics and automation",
                "Industrial Process Control and Automation",
                "Linear and nonlinear systems",
                "Small and large system dynamics",
                "Intelligent Sensors and Actuators",
              ],
            },
            {
              title: "Track 4: Green Energy Technology & Applications",
              topics: [
                "Hybrid Renewable Energy Systems",
                "Control Techniques for Renewable Energy Systems",
                "Power converters for Renewable Energy based microgrids",
                "Energy storage technologies",
                "Power Devices and Driving Circuits for Renewable Energy Systems",
                "Electric vehicles and its Integration with Renewable Energy Systems",
                "Power Conditioning and Protection for Renewable Energy Systems",
              ],
            },
            {
              title:
                "Track 5: Artificial Intelligence, IoT, Machine Learning and Signal Processing",
              topics: [
                "Optimization Technique",
                "Internet of Things (IoT) Enabled Devices",
                "Cognitive Computing and Deep Learning Techniques",
                "Cloud-based Data Analytics and Machine Learning",
                "Security and Privacy Issues in IoT and AI Applications",
                "Wireless Sensor Networks for IoT Applications",
                "Signal Processing Techniques for Image and Video Processing",
              ],
            },
          ].map((track, index) => (
            <div key={index} className="mt-6">
              <p className="font-bold text-primary text-lg sm:text-sm">{track.title}</p>
              <ul className="list-disc ml-10 sm:ml-6 mt-4 sm:mt-2 text-sm sm:text-xs">
                {track.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}

          <p className="text-sm mt-[1rem]">
            Paper submission guidelines are{" "}
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              className="text-blue font-bold hover:text-primary text-lg sm:text-xs"
              target="_blank"
            >
              Here
            </a>
          </p>
          {/* Remaining content... */}
        </div>
      </div>
      <Foot />
    </>
  );
};

export default CallForPaper;
