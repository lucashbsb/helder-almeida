
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Equipe", href: "#equipe" },
  { name: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="font-playfair text-2xl font-bold text-[#043f60]">
            Helder Ferreira
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-inter text-gray-600 hover:text-[#043f60] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#043f60]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 font-inter text-gray-600 hover:text-[#043f60]"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
