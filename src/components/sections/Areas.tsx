
import { Scale, Briefcase, Building2, Users2, LandPlot, Shield } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Assessoria completa em questões contratuais, responsabilidade civil e direito das obrigações."
  },
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    description: "Representação especializada em relações de trabalho, processos e consultorias preventivas."
  },
  {
    icon: Building2,
    title: "Direito Empresarial",
    description: "Suporte jurídico integral para empresas, desde a constituição até operações complexas."
  },
  {
    icon: Users2,
    title: "Direito Familiar",
    description: "Orientação especializada em questões familiares, sucessórias e patrimoniais."
  },
  {
    icon: LandPlot,
    title: "Direito Tributário",
    description: "Planejamento tributário e representação em processos administrativos e judiciais."
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    description: "Assessoria em benefícios previdenciários e representação junto ao INSS."
  }
];

export const Areas = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-playfair text-4xl font-bold text-primary mb-4">
          Áreas de Atuação
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
          com foco na excelência e resultados.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div key={area.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <area.icon className="w-12 h-12 text-gold mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-primary mb-2">
                {area.title}
              </h3>
              <p className="text-gray-600">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
