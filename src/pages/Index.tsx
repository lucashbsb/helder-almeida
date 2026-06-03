
import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/sections/Hero";
import { Areas } from "@/components/sections/Areas";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

import { Phone, Mail, MapPin, Check, Instagram, Heart, Scale, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <ScrollReveal direction="left">
                <div className="overflow-hidden rounded-lg shadow-lg hover-lift">
                  <img 
                    src="/lovable-uploads/helder-oab.png" 
                    alt="Dr. Helder Almeida na OAB Distrito Federal" 
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div>
                  <h2 className="font-playfair text-4xl font-bold text-[#043f60] mb-6">
                    Quem Defende Você
                  </h2>
                  <p className="text-gray-600 mb-4 text-lg">
                    <strong className="text-[#043f60]">Dr. Helder Almeida</strong> — OAB/DF 80.509
                  </p>
                  <p className="text-gray-600 mb-4 text-lg">
                    Há mais de 5 anos ajudando pessoas a resolverem questões jurídicas que afetam o dia a dia — separações, heranças, contratos, cobranças indevidas. Sem enrolação, sem promessas vazias.
                  </p>
                  <p className="text-gray-600 text-lg">
                    Cada caso é tratado com atenção individual. Você não é só um número aqui — é uma pessoa que merece respeito e justiça.
                  </p>
                </div>
              </ScrollReveal>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left" className="order-2 md:order-1">
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-[#043f60] mb-4">
                    Por que nos escolher?
                  </h3>
                  <ul className="space-y-3 text-gray-600 text-lg">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span>Atendimento direto com o advogado, sem intermediários</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span>Atualizações constantes sobre seu processo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span>Atendimento presencial ou online</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
                      <span>Consulta inicial sem compromisso</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2} className="order-1 md:order-2">
                <div className="overflow-hidden rounded-lg shadow-lg hover-lift">
                  <img 
                    src="/lovable-uploads/helder-2.jpeg" 
                    alt="Dr. Helder Almeida - Advogado"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#043f60]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <ScrollReveal delay={0}>
              <div>
                <h3 className="font-playfair text-gold text-5xl font-light mb-2">+5</h3>
                <p className="text-white/70 text-sm tracking-wide">Anos de Atuação</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-playfair text-gold text-5xl font-light mb-2">500+</h3>
                <p className="text-white/70 text-sm tracking-wide">Clientes Atendidos</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div>
                <h3 className="font-playfair text-gold text-5xl font-light mb-2">98%</h3>
                <p className="text-white/70 text-sm tracking-wide">Clientes Satisfeitos</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-center font-playfair text-4xl font-bold text-[#043f60] mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
              Atuação especializada em três pilares do dia a dia
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Heart,
                title: "Direito de Família",
                description: "Conflitos familiares exigem sensibilidade e estratégia. Acompanho cada cliente com discrição e cuidado.",
                topics: ["Divórcio", "Guarda", "Pensão", "União estável", "Inventário", "Adoção"]
              },
              {
                icon: Scale,
                title: "Direito Civil",
                description: "Contratos, indenizações e disputas patrimoniais resolvidos com técnica e foco em solução prática.",
                topics: ["Contratos", "Indenizações", "Posse", "Cobranças", "Responsabilidade civil", "Vizinhança"]
              },
              {
                icon: Shield,
                title: "Direito do Consumidor",
                description: "Empresa errou com você? A lei protege o consumidor — e eu ajudo você a fazer valer essa proteção.",
                topics: ["Cobranças indevidas", "Negativação", "Produto defeituoso", "Plano de saúde", "Atrasos", "Bancos"]
              }
            ].map((pilar, index) => (
              <ScrollReveal key={pilar.title} delay={index * 0.15}>
                <div className="bg-white p-8 rounded-xl border border-gray-100 hover-lift h-full">
                  <div className="w-16 h-16 bg-[#043f60]/10 rounded-full flex items-center justify-center mb-6">
                    <pilar.icon className="w-8 h-8 text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#043f60] mb-3">
                    {pilar.title}
                  </h3>
                  <p className="text-gray-600 mb-5 leading-relaxed">
                    {pilar.description}
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {pilar.topics.map((topic) => (
                      <span key={topic} className="text-gray-500 text-sm">• {topic}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Areas />

      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="font-playfair text-4xl font-bold text-center text-[#043f60] mb-4">
              Vamos Conversar?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
              A primeira consulta é grátis. Conte seu caso e vamos analisar juntos o que pode ser feito.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <ScrollReveal delay={0}>
              <a
                href="https://wa.me/556196558902?text=Ol%C3%A1%2C%20Dr.%20Helder!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/30 transition-all cursor-pointer hover-lift h-full"
              >
                <div className="w-12 h-12 bg-[#043f60] rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-lg text-[#043f60] mb-1">WhatsApp</h3>
                <p className="text-gray-500">(61) 9655-8902</p>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <a
                href="https://wa.me/556196558902?text=Ol%C3%A1%2C%20Dr.%20Helder!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/30 transition-all cursor-pointer hover-lift h-full"
              >
                <div className="w-12 h-12 bg-[#043f60] rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-lg text-[#043f60] mb-1">E-mail</h3>
                <p className="text-gray-500 text-sm">advhelderalmeida@gmail.com</p>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <a
                href="https://wa.me/556196558902?text=Ol%C3%A1%2C%20Dr.%20Helder!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gold/30 transition-all cursor-pointer hover-lift h-full"
              >
                <div className="w-12 h-12 bg-[#043f60] rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-playfair text-lg text-[#043f60] mb-1">Escritório</h3>
                <p className="text-gray-500">Brazlândia/DF</p>
              </a>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Button 
                className="bg-[#043f60] hover:bg-[#032b42] text-white font-medium px-10 py-5 rounded-full shadow-sm transition-colors"
                onClick={() => window.open("https://wa.me/556196558902?text=Ol%C3%A1%2C%20Dr.%20Helder!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20conversa.", "_blank")}
              >
                Quero Falar com o Advogado
              </Button>
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">Acompanhe nas redes sociais</p>
              <a 
                href="https://instagram.com/advhelderalmeida"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#043f60] hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-medium">@advhelderalmeida</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4 font-playfair text-xl">Dr. Helder Almeida</div>
          <p className="text-sm text-gray-400 mb-4">
            OAB/DF 80.509 | Família • Cível • Consumidor
          </p>
          <a 
            href="https://instagram.com/advhelderalmeida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-sm">@advhelderalmeida</span>
          </a>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
