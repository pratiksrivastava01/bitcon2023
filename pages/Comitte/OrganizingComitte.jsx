import Head from "next/head";
import Styles from "@/components/teams/Team.module.css";
import {
  TeamData2k19,
  TeamData2k20,
  TeamData2k21,
  Chief,
} from "@/lib/data/TeamData";
import TeamCard from "@/components/teams/TeamCard";
import Navbar from "@/components/navbar/Navbar";
import Nav3 from "@/components/home/Nav3";
import Image from "next/image";

function Teams() {
  return (
    <>
      <Head>
        <title>Our Amazing Team ✨</title>
        <meta
          name="description"
          content="Teams of HnCC (Hackathon & Coding Club), BIT Sindri, Dhanbad"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Team of HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Navbar />
      <Nav3 />
      <section className="mt-16 mb-12  container-70">
        <div className="my-16 w-full text-center">
          <h1 className="text-5xl font-bold">Our Organizing Comitte</h1>
          {/* <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3> */}
        </div>
        <h2 className={Styles.postHead}>Chief Patron</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[3.8rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Mr. Rahul Purwar
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              IAS, DHTE, Ranchi
            </h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem] rounded-[1rem]">
            <Image
              src="/teams/comitte/dk.jpg"
              width={250}
              height={250}
              className="ml-[3.8rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. D.K. Singh
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Director, BIT Sindri
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Patron</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/pankaj.jpeg"
              width={200}
              height={250}
              className="ml-[5.2rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Pankaj Rai
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Dean (Academic)
            </h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem] rounded-[1rem]">
            <Image
              src="/teams/comitte/upendra.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Upendra Prasad
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Dean (Student Welfare)
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Honorary Chair</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23em] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[3.8rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Person for IEEE
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Dean (Academic)
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> General Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> General Co-Chairs:</h2>
        <div className="flex flex-wrap justify-center gap-[6rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/dktanti.jpeg"
              width={200}
              height={250}
              className="ml-[5.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. D. K. Tanti
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Vineet Shekhar
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/nirmala.jpeg"
              width={180}
              height={250}
              className="ml-[5.9rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Nirmala Soren
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Organizing Chairs:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/akc.jpeg"
              width={200}
              height={250}
              className="ml-[5.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              DDr. Amit Kr. Choudhary
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Organizing Secretary:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/praveen.jpeg"
              width={210}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Praveen Kumar
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahman.jpeg"
              width={210}
              height={250}
              className="ml-[5.1rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Mukhlesur Rahman
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Advisory Committee Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/suman.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Suman Ranjan
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/dipesh.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Dipesh Kumar
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Technical Program Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Rahul Kumar
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/murli.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Murli Manohar
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Publication Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/akc.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Amit Kumar Choudhary
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Finance Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Rajendra Murmu
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>

          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Shashi Minz
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Hospitality Chairs:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rajesh.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Rajesh Narayan Deo
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rakesh.jpg"
              width={200}
              height={200}
              className="ml-[5.3rem] h-[12rem] object-fill mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Rakesh Rohan
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Publicity Chairs:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/matta.jpeg"
              width={200}
              height={250}
              className="ml-[5.1rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Matta Mani Sankar
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/anuj.png"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Anuj Kumar Pandey
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Tutorial Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Biswaranjan Mishra
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/hcv.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Hari Charan Verma
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Web-Management Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/akc.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Amit Kr. Choudhary
            </h2>
            <h3 className="text-center text-primary-light text-lg"> EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/praveen.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Praveen Kumar
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Registration Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Manimala
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Sanjay Pal
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}>Sponsorship Chair: </h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Rahul Kumar
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rahman.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Mukhlesur Rahman
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
        <h2 className={Styles.postHead}>Transportation & Accommodation</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[23rem] bg-red w-[23rem]    rounded-[1rem]">
            <Image
              src="/teams/comitte/rajesh.jpeg"
              width={200}
              height={250}
              className="ml-[5.3rem] mt-[3.5rem] rounded-[1rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Prof. Rajesh Narayan Deo
            </h2>
            <h3 className="text-center text-primary-light text-lg">EED</h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Teams;
