import { Lexend } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Services from "@/components/Sections/Services";
import Testimonials from "@/components/Sections/Testimonials";
import Contact from "@/components/Sections/Contact";
import Head from "next/head";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        {/* Metadata for a personal trainer */}
        <title>
          Renan Guimarães: Personal Trainer em Aldeia da Serra, Vila Olímpia,
          and Moema
        </title>
        <meta
          name="description"
          content="Personal trainer em Aldeia da Serra, Vila Olímpia, Moema."
        />
        <meta
          name="keywords"
          content="personal trainer, coach fitness, fitness, Aldeia da Serra, Vila Olímpia, Moema, treinos, planos de treinamento, guia de nutrição, personal trainer certificado, objetivos fitness"
        />
        {/* Add more meta tags as needed */}
      </Head>
      <main className={`${lexend.className}`}>
        <Header />
        <div
          id="body"
          className="px-[5%] md:px-[10%] flex flex-col gap-10 mt-10"
        >
          <Banner />
          <Services />
          <Testimonials />
          <Contact />
        </div>
      </main>
    </>
  );
}
