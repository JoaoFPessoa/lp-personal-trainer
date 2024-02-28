import { Lexend } from "next/font/google";
import Header from "@/components/Header";

const lexend = Lexend({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${lexend.className}`}>
      <Header />
    </main>
  );
}
