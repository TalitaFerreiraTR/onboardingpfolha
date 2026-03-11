import { BarChart3 } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden bg-header px-6 py-16 md:py-20">
      {/* Top-left radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 15% 10%, hsl(150 30% 18% / 0.9), transparent 60%)' }} />
      <div className="container max-w-5xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <BarChart3 className="text-accent" size={32} />
          <span className="text-primary-foreground/70 font-semibold text-sm tracking-widest uppercase">
            Gestão de Produto Folha
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
          Entenda o <span className="text-accent">hoje</span>, gerencie o{" "}
          <span className="text-accent">amanhã</span>
        </h1>
        <p className="mt-4 text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
          Bem-vindo à sua plataforma de Gestão de Produto Folha
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
