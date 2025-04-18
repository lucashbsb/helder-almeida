
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/Hero";
import { Areas } from "@/components/sections/Areas";
import { Team } from "@/components/sections/Team";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl font-bold text-[#043f60] mb-6">
              Sobre o Escritório
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Com mais de 15 anos de experiência, o escritório Dr. Helder Ferreira é reconhecido pela excelência 
              no atendimento e pelo compromisso com os interesses de nossos clientes. Nossa abordagem personalizada 
              garante um atendimento humanizado e soluções jurídicas eficazes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="font-playfair text-gold text-5xl font-bold mb-2">15+</h3>
                <p className="text-gray-600">Anos de Experiência</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="font-playfair text-gold text-5xl font-bold mb-2">500+</h3>
                <p className="text-gray-600">Casos Bem-Sucedidos</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="font-playfair text-gold text-5xl font-bold mb-2">98%</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Areas />
      
      <Team />

      <section id="contato" className="py-20 bg-[#043f60] text-white">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-4xl font-bold text-center mb-12">
            Entre em Contato
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center bg-[#032b42] p-8 rounded-lg">
              <Phone className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-playfair text-xl mb-2">Telefone</h3>
              <p>(11) 9999-9999</p>
            </div>
            <div className="flex flex-col items-center text-center bg-[#032b42] p-8 rounded-lg">
              <Mail className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-playfair text-xl mb-2">E-mail</h3>
              <p>contato@helderferreira.adv.br</p>
            </div>
            <div className="flex flex-col items-center text-center bg-[#032b42] p-8 rounded-lg">
              <MapPin className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-playfair text-xl mb-2">Endereço</h3>
              <p>Av. Paulista, 1000 - São Paulo/SP</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
              className="bg-gold hover:bg-gold-light text-white px-8 py-4 text-lg rounded-md shadow-lg transition-all"
              onClick={() => window.location.href = "mailto:contato@helderferreira.adv.br"}
            >
              Agende uma Consulta
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 font-playfair text-xl">Helder Ferreira Advocacia</div>
          <p className="text-sm text-gray-400 mb-4">
            OAB/SP 123.456
          </p>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Helder Ferreira Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
