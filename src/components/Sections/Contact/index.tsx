import QuoteButton from "@/components/Buttons/ContactButton";

export default function Contact() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-[500px]">
      <h1 className="text-xl md:text-4xl font-bold tracking-tighter">
        Preparado para levar seu corpo para o próximo nível?
      </h1>
      <p className="mb-8">
        Envie-me uma mensagem no WhatsApp para começarmos. Entrarei em contato
        em até 24 horas para agendar uma consulta gratuita.
      </p>
      <QuoteButton title="Comece sua jornada fitness" />
    </div>
  );
}
