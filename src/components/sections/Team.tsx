
import { Card, CardContent } from "@/components/ui/card";
import { User2, GraduationCap, Award, Scale } from "lucide-react";

const team = [
  {
    name: "Dr. Helder Ferreira",
    role: "Advogado e Fundador",
    image: "/lovable-uploads/942fde54-1c89-42ec-851d-7bbd53128686.png",
    description: "Advogado com mais de 15 anos de experiência, especializado em direito civil e empresarial. Sua atuação é marcada pelo compromisso com a excelência e dedicação aos clientes.",
    icon: User2
  },
  {
    name: "Equipe Jurídica",
    role: "Consultoria Especializada",
    description: "Contamos com uma rede de consultores especializados em diferentes áreas do direito para oferecer atendimento completo e personalizado.",
    icon: GraduationCap
  },
  {
    name: "Compromisso",
    role: "Valores e Princípios",
    description: "Transparência, ética e excelência são os pilares do nosso trabalho, garantindo resultados concretos e duradouros para nossos clientes.",
    icon: Award
  }
];

export const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-[#043f60]">
          Nosso Escritório
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <member.icon className="w-16 h-16 text-gold" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#043f60]">{member.name}</h3>
                <p className="text-gold font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
