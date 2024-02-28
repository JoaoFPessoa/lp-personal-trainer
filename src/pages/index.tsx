import { Lexend } from "next/font/google";
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${lexend.className}`}>
      <Header />
      <div id="body" className="px-[5%] md:px-[10%] flex flex-col gap-5 mt-2">
        <Banner />
      </div>
    </main>
  );
}
