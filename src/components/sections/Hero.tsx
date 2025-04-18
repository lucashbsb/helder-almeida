
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-primary text-white">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3')] 
        bg-cover bg-center bg-no-repeat"
        style={{ opacity: 0.2 }}
      />
      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Abreu & Oliveira <br/> Advogados
        </h1>
        <p className="font-inter text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Excelência e compromisso em cada causa. Soluções jurídicas personalizadas para você e sua empresa.
        </p>
        <Button 
          className="bg-gold hover:bg-gold-light text-white text-lg px-8 py-6 rounded-md"
        >
          Fale Conosco
        </Button>
      </div>
    </section>
  );
};
