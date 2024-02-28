import Image from "next/image";

type Props = {
  image: any;
  title: string;
  text: string;
};

export default function ImageCard({ image, title, text }: Props) {
  return (
    <div className="">
      <Image
        width={450}
        height={450}
        className="rounded-t-2xl"
        alt=""
        src={image}
      />
      <div className="mt-3 pb-5 flex flex-col gap-2 w-[90%]">
        <h1 className="font-semibold">{title}</h1>
        <p className="text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
}
