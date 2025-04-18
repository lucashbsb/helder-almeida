
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Início", href: "#" },
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="font-playfair text-2xl font-bold text-primary">
            A&O
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-inter text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
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
                className="block py-2 font-inter text-gray-600 hover:text-primary"
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
