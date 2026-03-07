
import { Scale, Briefcase, FileText, Users2, Shield, Gavel } from "lucide-react";
import { ScrollReveal } from "@/hooks/use-scroll-reveal";

const areas = [
  {
    icon: Briefcase,
    title: "Demissão Injusta",
    description: "Foi mandado embora sem receber tudo? Calculamos e cobramos cada centavo que você tem direito."
  },
  {
    icon: Scale,
    title: "Horas Extras",
    description: "Trabalhou além do horário e nunca viu a cor do dinheiro? Vamos atrás do que é seu."
  },
  {
    icon: FileText,
    title: "Verbas Rescisórias",
    description: "FGTS, férias, 13º, aviso prévio — se não pagaram direito, a gente resolve."
  },
  {
    icon: Users2,
    title: "Acordos Trabalhistas",
    description: "Quando dá pra resolver sem ir pro tribunal, negociamos o melhor acordo possível pra você."
  },
  {
    icon: Shield,
    title: "Direitos Negados",
    description: "Adicional noturno, insalubridade, periculosidade — direitos que muita empresa finge que não existe."
  },
  {
    icon: Gavel,
    title: "Assédio e Danos Morais",
    description: "Passou por humilhação ou situações abusivas? Você pode e deve ser indenizado."
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
            Se você passou por alguma dessas situações, provavelmente tem direito a receber uma compensação. Fale conosco.
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
