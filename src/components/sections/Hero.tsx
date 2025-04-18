import {Button} from "@/components/ui/button";

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center hero-bg">

            <div className="container">
                <h1 className="font-playfair title-hero text-white">
                    ADVOCACIA <br/>
                    ESPECIALIZADA
                </h1>
                <p className="font-inter text-lg md:text-xl text-white/80 max-w-2xl">
                    Com mais de 15 anos de experiência, atendemos com excelência
                    em diversas áreas do Direito. Compromisso com resultados e
                    atendimento humanizado.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                        className="bg-white text-[#043f60] hover:bg-white/90 text-lg px-8 py-6 rounded-md transition-all"
                        onClick={() => window.location.href = "#contato"}
                    >
                        AGENDE SUA CONSULTA
                    </Button>
                    <Button
                        variant="outline"
                        className="border-white text-white bg-white/10 text-lg px-8 py-6 rounded-md transition-all"
                        onClick={() => window.location.href = "#sobre"}
                    >
                        CONHEÇA MAIS
                    </Button>
                </div>
            </div>
        </section>
    );
};
