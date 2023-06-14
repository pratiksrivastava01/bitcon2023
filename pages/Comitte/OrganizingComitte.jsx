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
          <h3 className="text-lg mt-8">
            The strength of the team is each individual member. The strength of
            each member is the team.
            <br />- Phil Jackson
          </h3>
        </div>
        <h2 className={Styles.postHead}>Chief Patron</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Mr. Rahul Purwar
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              IAS, DHTE, Ranchi
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem] rounded-[2rem]">
            <Image
              src="/teams/comitte/dk.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
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
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Pankaj Rai
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Dean (Academic)
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem] rounded-[2rem]">
            <Image
              src="/teams/comitte/dk.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
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
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Pankaj Rai
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Dean (Academic)
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem] rounded-[2rem]">
            <Image
              src="/teams/comitte/dk.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Upendra Prasad
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Dean (Student Welfare)
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> General Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
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
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Organizing Chairs:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Organizing Secretary:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Advisory Committee Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Technical Program Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Publication Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Finance Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>

          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Hospitality Chairs:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Publicity Chairs:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Tutorial Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Web-Management Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}> Registration Chair:</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}>Sponsorship Chair: </h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
        <h2 className={Styles.postHead}>Transportation & Accommodation</h2>
        <div className="flex flex-wrap justify-center gap-[8rem] ">
          <div className="h-[25rem] bg-red w-[25rem]    rounded-[2rem]">
            <Image
              src="/teams/comitte/rahul_purwa.jpg"
              width={250}
              height={250}
              className="ml-[4.5rem] mt-[3.5rem] rounded-[rem]"
            />
            <h2 className="text-center text-primary-light font-bold mt-[2rem] text-2xl">
              Dr. Md. Abul Kalam
            </h2>
            <h3 className="text-center text-primary-light text-lg">
              Head, EED
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default Teams;
