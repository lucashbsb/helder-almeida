
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Início", href: "#" },
  { name: "Sobre", href: "#sobre" },
  { name: "Áreas de Atuação", href: "#areas" },
  { name: "Nosso Escritório", href: "#equipe" },
  { name: "Contato", href: "#contato" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="font-playfair text-2xl font-bold transition-colors duration-300 text-[#043f60]">
            Helder Ferreira
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-inter transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-[#043f60]" : "text-white hover:text-gold"}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${scrolled ? "text-gray-700 hover:text-[#043f60]" : "text-white hover:text-gold"}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-white shadow-lg rounded-b-lg">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 font-inter text-gray-700 hover:text-[#043f60] hover:bg-gray-50"
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
