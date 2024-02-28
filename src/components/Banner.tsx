import { useEffect, useState } from "react";
import BannerImage from "../../public/banner.jpg";
import Image from "next/image";
import ContactButton from "./Buttons/ContactButton";

export default function Banner() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden h-[512px]">
      <div className="absolute inset-0 overflow-hidden">
        <div
          style={{
            transform: `translateY(${offsetY * 0.5}px)`,
            height: "100%",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <Image
            src={BannerImage}
            alt="Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="absolute inset-0 flex flex-col gap-5 mb-10 justify-end items-center text-center text-white z-10">
        <h1 className="text-xl md:text-5xl font-bold">
          Supere-se e seja imparável.
        </h1>
        <h2 className="text-sm md:text-base mb-10 hidden md:block w-[60%] text-">
          Com mais de 10 anos de experiência, eu ajudei clientes a alcançarem
          seus objetivos de condicionamento físico por meio de programas de
          treinamento personalizados, coaching nutricional e suporte de
          responsabilidade.
        </h2>
        <ContactButton />
      </div>
    </div>
  );
}
