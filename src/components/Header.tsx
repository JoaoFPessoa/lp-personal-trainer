"use client";
import Image from "next/image";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <div className="h-[90px] bg-white max-w-[100vw] border md:h-[100px] sticky border-b border-gray-200 bg-grayBackground top-0 left-0 w-full z-50">
      <header className="flex justify-between py-8 md:px-10 md:py-5">
        <div className="hidden md:flex justify-center items-center">
          <h1 className="text-xl font-bold text-">Renan Guimarães</h1>
        </div>
        <div className="px-2 md:px-0 w-full md:w-[40%] ">
          <Navbar />
        </div>
      </header>
    </div>
  );
}
