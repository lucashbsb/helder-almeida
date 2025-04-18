import {useState, useEffect} from "react";
import {Menu, X} from "lucide-react";
import Environment from "@/environment.ts";

const navigation = [
    {name: "Início", href: "#"},
    {name: "Sobre", href: "#sobre"},
    {name: "Áreas de Atuação", href: "#areas"},
    {name: "Nosso Escritório", href: "#equipe"},
    {name: "Contato", href: "#contato"},
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
        <nav
            className={`fixed w-full z-50 transition-all duration-300 bg-mobile  ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
            <div className="principal-container">
                <div className="flex justify-between items-center h-20">
                    <div className="hide-mobile">
                        {
                            (scrolled) ?
                                <img
                                    src={`${Environment.BASE}/lovable-uploads/logotipo.png`}
                                    alt="Logo"
                                    className="logo"
                                /> :

                                <img
                                    src={`${Environment.BASE}/lovable-uploads/logotipo_branco.png`}
                                    alt="Logo"
                                    className="logo"
                                />
                        }
                    </div>
                    <div className="hide-desktop">
                        <img
                            src="/lovable-uploads/logotipo.png"
                            alt="Logo"
                            className="logo"
                        />
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`font-inter transition-colors duration-300 ${(scrolled || isOpen) ? "text-gray-700 hover:text-[#043f60]" : "text-white hover:text-white/80"}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`transition-colors duration-300 text-gray-700`}
                        >
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div style={{height: '100vh'}} className="md:hidden pb-4 bg-white shadow-lg rounded-b-lg">
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
        </nav>
    );
};
