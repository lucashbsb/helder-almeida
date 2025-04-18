
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#043f60] text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#043f60]/90 to-[#043f60]/70">
        <div className="absolute inset-0 bg-[url('public/lovable-uploads/942fde54-1c89-42ec-851d-7bbd53128686.png')] bg-cover bg-center bg-no-repeat opacity-20" />
      </div>
      <div className="container relative z-10 mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Somos especialistas em pessoas e relacionamentos, atuando em várias áreas do direito com compromisso e excelência.
          </h1>
          <p className="font-inter text-lg md:text-xl mb-8 text-gray-200">
            Fale com o nosso time e saiba quais são os seus direitos.
          </p>
          <Button 
            className="bg-[#e84118] hover:bg-[#c23616] text-white text-lg px-8 py-6 rounded-md"
            onClick={() => window.location.href = "#contato"}
          >
            CONSULTAR MEUS DIREITOS
          </Button>
        </div>
      </div>
    </section>
  );
};
