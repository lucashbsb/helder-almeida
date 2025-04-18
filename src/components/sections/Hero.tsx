
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#043f60]">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#043f60] via-[#043f60]/90 to-transparent">
        {/* Background image with reduced opacity */}
        <div className="absolute inset-0 bg-[url('/lovable-uploads/ff5f6c19-ee68-4622-bbe6-6f62236aeb4b.png')] bg-cover bg-center bg-no-repeat opacity-20" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-white/80 text-xl md:text-2xl mb-3 font-inter">
            DR. HELDER FERREIRA
          </h2>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            ADVOCACIA <br />
            ESPECIALIZADA
          </h1>
          <p className="font-inter text-lg md:text-xl mb-8 text-white/80 max-w-2xl">
            Com mais de 15 anos de experiência, atendemos com excelência 
            em diversas áreas do Direito. Compromisso com resultados e
            atendimento humanizado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-white text-[#043f60] hover:bg-white/90 text-lg px-8 py-6 rounded-md transition-all"
              onClick={() => window.location.href = "#contato"}
            >
              AGENDE SUA CONSULTA
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-md transition-all"
              onClick={() => window.location.href = "#sobre"}
            >
              CONHEÇA MAIS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
