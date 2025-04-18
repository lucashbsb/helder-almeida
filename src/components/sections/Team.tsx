
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Dr. Helder Ferreira",
    role: "Advogado Sócio-Fundador",
    image: "/lovable-uploads/942fde54-1c89-42ec-851d-7bbd53128686.png",
    description: "Advogado com mais de 15 anos de experiência, especializado em direito civil e empresarial. Sua atuação é marcada pelo compromisso com a excelência e dedicação aos clientes.",
  },
  {
    name: "Dra. Ana Silva",
    role: "Advogada Associada",
    description: "Especialista em direito trabalhista e previdenciário, com vasta experiência em negociações e processos judiciais.",
  },
  {
    name: "Dr. Carlos Santos",
    role: "Advogado Associado",
    description: "Especializado em direito tributário e empresarial, com foco em planejamento tributário e consultoria empresarial.",
  }
];

export const Team = () => {
  return (
    <section id="equipe" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl font-bold text-center mb-12 text-[#043f60]">
          Nossa Equipe
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <Card key={member.name} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#043f60]">{member.name}</h3>
                <p className="text-[#e84118] font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
