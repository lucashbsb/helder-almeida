export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center hero-bg">
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/60 via-black/40 to-black/60 md:from-black/50 md:via-black/30 md:to-transparent"></div>
            <div className="container relative z-10 px-4 md:px-6">
                <p className="font-inter text-white md:text-gold text-sm tracking-widest uppercase mb-4 font-light">
                    Advocacia de Família, Civil e Consumidor
                </p>
                <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
                    Defendendo o que<br/>
                    mais importa para você.
                </h1>
                <p className="font-inter text-base md:text-lg text-white/80 max-w-lg mb-8">
                    Divórcio, herança, contratos, dívidas, consumo — quando a
                    vida complica, a gente resolve com clareza e respeito pela
                    sua história.
                </p>
                <a
                    href="https://wa.me/556196558902?text=Ol%C3%A1%2C%20Dr.%20Helder!%20Vi%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#043f60] hover:bg-gray-100 font-medium px-8 py-4 rounded-full transition-colors shadow-sm inline-block text-center"
                >
                    Falar com Advogado
                </a>
            </div>
        </section>
    );
};
