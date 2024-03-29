import ImageCard from "../ImageAndText";
import TrainingImage from "../../../public/training-1.svg";
import TrainingImage2 from "../../../public/training-2.svg";
import TrainingImage3 from "../../../public/training-3.svg";

export default function Services() {
  return (
    <div className="gap-3 flex flex-col">
      <h1 className="text-xl md:text-3xl font-bold">
        Serviços Personal Trainer
      </h1>
      <p className="w-[80%] mb-10 md:mb-0 text-sm md:text-base">
        Ofereço diferentes serviços de treinamento pessoaal ou online para
        ajudá-lo(a) a atingir seus objetivos de forma conveniente, no conforto
        de onde você quiser.
      </p>
      <div
        id="images"
        className="flex flex-col  md:text-start md:flex-row  gap-2"
      >
        <ImageCard
          image={TrainingImage}
          title="Treino de força"
          text="Melhore sua definição muscular, força e resistência com um programa personalizado de treinamento de força."
        />
        <ImageCard
          image={TrainingImage2}
          title="Treino de resistência"
          text="Melhore sua saúde cardiovascular, resistência e reduza a gordura corporal ecom treinos personalizados."
        />
        <ImageCard
          image={TrainingImage3}
          title="Treino de flexibilidade"
          text="Aumente sua flexibilidade, equilíbrio e mobilidade com sessões de treinamento de flexibilidade personalizadas."
        />
      </div>
    </div>
  );
}
