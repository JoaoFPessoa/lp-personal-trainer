import ImageCard from "../ImageAndText";
import TrainingImage from "../../../public/training-1.png";
export default function Services() {
  return (
    <div className="gap-3 flex flex-col">
      <h1 className="text-3xl font-bold">Serviços Personal Trainer</h1>
      <p className="w-[80%]">
        Ofereço diferentes serviços de treinamento pessoaal ou online para
        ajudá-lo(a) a atingir seus objetivos de forma conveniente, no conforto
        de onde você quiser.
      </p>
      <div id="images" className="flex gap-2">
        <ImageCard
          image={TrainingImage}
          title="Treino de força"
          text="Melhore sua definição muscular, força e resistência com um programa personalizado de treinamento de força."
        />
        <ImageCard
          image={TrainingImage}
          title="Treino de força"
          text="Melhore sua definição muscular, força e resistência com um programa personalizado de treinamento de força."
        />
        <ImageCard
          image={TrainingImage}
          title="Treino de força"
          text="Melhore sua definição muscular, força e resistência com um programa personalizado de treinamento de força."
        />
        <ImageCard
          image={TrainingImage}
          title="Treino de força"
          text="Melhore sua definição muscular, força e resistência com um programa personalizado de treinamento de força."
        />
      </div>
    </div>
  );
}
