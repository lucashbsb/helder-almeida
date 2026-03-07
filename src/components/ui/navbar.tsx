import {useState, useEffect} from "react";
import {Menu, X} from "lucide-react";
import Environment from "@/environment.ts";

const navigation = [
    {name: "Início", href: "#"},
    {name: "Sobre", href: "#sobre"},
    {name: "Atuação", href: "#areas"},
    {name: "Contato", href: "#contato"},
];

// WhatsApp SVG icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

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

    // Bloquear scroll quando menu está aberto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-500 ease-out ${scrolled || isOpen ? "bg-[#043f60] shadow-lg" : "bg-transparent"}`}>
                <div className="principal-container">
                    <div className="flex justify-between items-center h-20">
                        {/* Desktop: Logo completo - sempre branco */}
                        <div className="hidden md:block">
                            <img
                                src={`${Environment.BASE}/lovable-uploads/logotipo_branco.png`}
                                alt="Logo"
                                className="logo"
                            />
                        </div>

                        {/* Mobile: Menu hamburguer à esquerda */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-white transition-colors duration-500"
                            >
                                {isOpen ? <X size={28}/> : <Menu size={28}/>}
                            </button>
                        </div>

                        {/* Mobile: Ícone centralizado */}
                        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
                            <img
                                src="/lovable-uploads/icone_branco.png"
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </div>

                        {/* Mobile: WhatsApp à direita */}
                        <div className="md:hidden">
                            <a
                                href="https://wa.me/556196558902?text=Ol%C3%A1%2C%20Dr.%20Helder!%20Preciso%20de%20ajuda%20com%20uma%20quest%C3%A3o%20trabalhista."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 rounded-full text-white transition-colors duration-500"
                            >
                                <WhatsAppIcon className="w-6 h-6" />
                            </a>
                        </div>

                        {/* Desktop: Navigation */}
                        <div className="hidden md:flex space-x-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`font-inter transition-colors duration-500 ${scrolled ? "text-white/90 hover:text-white" : "text-white hover:text-white/80"}`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu - Full width below navbar */}
            <div 
                className={`fixed top-20 left-0 right-0 bottom-0 bg-white z-40 md:hidden transition-all duration-500 ease-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
            >
                <div className="px-6 py-8">
                    <nav className="space-y-2">
                        {navigation.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-5 font-inter text-lg tracking-widest uppercase text-[#043f60] hover:text-[#043f60]/70 transition-colors border-b border-[#043f60]/20"
                                onClick={() => setIsOpen(false)}
                                style={{
                                    opacity: isOpen ? 1 : 0,
                                    transform: isOpen ? 'translateX(0)' : 'translateX(-20px)',
                                    transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
};
