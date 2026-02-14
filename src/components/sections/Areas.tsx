
import { Scale, Briefcase, FileText, Users2, Shield, Gavel } from "lucide-react";

const areas = [
  {
    icon: Briefcase,
    title: "Reclamações Trabalhistas",
    description: "Representação em ações trabalhistas, buscando a defesa integral dos direitos do trabalhador."
  },
  {
    icon: Scale,
    title: "Rescisões Contratuais",
    description: "Análise e acompanhamento de rescisões, garantindo o correto pagamento de todas as verbas."
  },
  {
    icon: FileText,
    title: "Acordos e Negociações",
    description: "Mediação e negociação de acordos trabalhistas, buscando soluções rápidas e vantajosas."
  },
  {
    icon: Users2,
    title: "Consultoria Preventiva",
    description: "Orientação jurídica para empregadores e empregados, prevenindo conflitos trabalhistas."
  },
  {
    icon: Shield,
    title: "Direitos do Trabalhador",
    description: "Defesa de direitos como horas extras, adicionais, FGTS, férias e 13º salário."
  },
  {
    icon: Gavel,
    title: "Assédio e Danos Morais",
    description: "Representação em casos de assédio moral, sexual e pedidos de indenização por danos."
  }
];

export const Areas = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-playfair text-4xl font-bold text-primary mb-4">
          Área de Atuação
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Atuamos exclusivamente em Direito do Trabalho, oferecendo assessoria e representação jurídica especializada, com foco na defesa dos direitos de trabalhadores e empregadores.
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
