import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <div className="w-full mt-10 flex flex-col gap-5 ">
      <TestimonialCard
        name="Marcela"
        description="Renan é simplesmente incrível! Desde que comecei a treinar com ele, tenho visto resultados que nunca imaginei alcançar. Sua energia contagiante e seu conhecimento técnico fazem cada sessão voar. Se você está procurando um personal que realmente se importa com seus objetivos e vai te ajudar a alcançá-los, Renan é o cara!"
        stars={5}
        date="Jan 12 2024"
      />

      <TestimonialCard
        name="Rafael"
        description="Não tenho palavras para descrever o quão grato estou pelo trabalho do Renan. Ele não só me ajudou a perder peso e ficar mais forte, mas também me deu a confiança que eu precisava para levar um estilo de vida mais saudável. Se você está pensando em contratar um personal trainer, não procure mais. Renan é o melhor dos melhores!"
        stars={5}
        date="Out 24 2023"
      />

      <TestimonialCard
        name="João"
        description="Renan é simplesmente sensacional! Sua abordagem descontraída e amigável torna cada treino uma experiência divertida e motivadora. Ele realmente se preocupa com o seu progresso e está sempre lá para te apoiar, não importa o quê. Não consigo imaginar minha jornada de fitness sem ele!"
        stars={5}
        date="Mai 19 2023"
      />

      <TestimonialCard
        name="Stephanie"
        description="Treinar com o Renan tem sido uma verdadeira mudança de jogo para mim. Sua paixão pelo fitness é contagiante e sua dedicação em ajudar seus clientes a alcançar seus objetivos é incomparável. Se você está procurando por resultados reais e um personal trainer que realmente se importa, não procure mais. Renan é o cara que você precisa!"
        stars={5}
        date="Ago 7 2023"
      />
    </div>
  );
}
