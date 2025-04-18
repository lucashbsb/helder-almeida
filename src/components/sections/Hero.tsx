
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#043f60] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#043f60]/95 to-[#043f60]/80">
        <div className="absolute inset-0 bg-[url('public/lovable-uploads/942fde54-1c89-42ec-851d-7bbd53128686.png')] bg-cover bg-center bg-no-repeat opacity-10" />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Excelência e dedicação a serviço da justiça
          </h1>
          <p className="font-inter text-lg md:text-xl mb-8 text-gray-200">
            Advocacia personalizada com foco em resultados e atendimento humanizado
          </p>
          <Button 
            className="bg-gold hover:bg-gold-light text-white text-lg px-8 py-6 rounded-md transition-all shadow-lg"
            onClick={() => window.location.href = "#contato"}
          >
            CONSULTA GRATUITA
          </Button>
        </div>
      </div>
    </section>
  );
};
