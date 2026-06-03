
import { Scale, FileText, Shield, Heart, Users, ScrollText, Building2 } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const areas = [
  {
    icon: Heart,
    title: "Divórcio e Separação",
    description: "Consensual ou litigioso, com filhos ou patrimônio envolvido. Conduzimos com discrição e cuidado em cada etapa."
  },
  {
    icon: Users,
    title: "Guarda e Pensão",
    description: "Definição de guarda, pensão alimentícia, regulamentação de visitas. Priorizando sempre o bem-estar dos filhos."
  },
  {
    icon: ScrollText,
    title: "Inventário e Herança",
    description: "Partilha de bens, testamentos, sucessão. Resolvemos com clareza para evitar conflitos familiares duradouros."
  },
  {
    icon: Scale,
    title: "Contratos e Indenizações",
    description: "Contratos descumpridos, cobranças indevidas, danos materiais ou morais. A gente analisa e busca o ressarcimento."
  },
  {
    icon: Shield,
    title: "Direitos do Consumidor",
    description: "Negativação injusta, produto com defeito, serviço não prestado, plano de saúde negado. Você tem direitos — exija-os."
  },
  {
    icon: Building2,
    title: "Questões Imobiliárias",
    description: "Conflitos de posse, problemas com aluguel, vícios na construção, condomínio. Soluções para o seu patrimônio."
  }
];

export const Areas = () => {
  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-center font-playfair text-4xl font-bold text-primary mb-4">
            Como Podemos Ajudar
          </h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Se você está passando por uma dessas situações, podemos te ajudar a encontrar a melhor solução. A primeira conversa é gratuita.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 0.1}>
              <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition-all border border-gray-100 hover-lift h-full">
                <area.icon className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
