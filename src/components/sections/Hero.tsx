export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center hero-bg">
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/60 via-black/40 to-black/60 md:from-black/50 md:via-black/30 md:to-transparent"></div>
            <div className="container relative z-10 px-4 md:px-6">
                <p className="font-inter text-white md:text-gold text-sm tracking-widest uppercase mb-4 font-light">
                    Advocacia Trabalhista Especializada
                </p>
                <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight mb-6">
                    Seus direitos,<br/>
                    nossa missão.
                </h1>
                <p className="font-inter text-base md:text-lg text-white/80 max-w-lg mb-8">
                    Foi demitido injustamente? Não recebeu suas verbas? 
                    Lutamos para você receber o que é seu por direito.
                </p>
                <a
                    href="https://wa.me/556196558902?text=Ol%C3%A1%2C%20Dr.%20Helder!%20Preciso%20de%20ajuda%20com%20uma%20quest%C3%A3o%20trabalhista%20e%20vi%20que%20a%20primeira%20consulta%20%C3%A9%20gratuita.%20Podemos%20conversar%3F"
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
