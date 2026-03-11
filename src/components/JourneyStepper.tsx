import { Handshake, Settings, GraduationCap, FileSignature, Headset } from "lucide-react";

const steps = [
  { icon: Handshake, label: "Integração Inicial" },
  { icon: Settings, label: "Configuração de Módulos" },
  { icon: GraduationCap, label: "Treinamento Especializado" },
  { icon: FileSignature, label: "Homologação de Contratos" },
  { icon: Headset, label: "Lançamento e Suporte" },
];

const JourneyStepper = () => {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Sua Jornada na <span className="text-accent">Gestão Folha</span>
        </h2>

        {/* Desktop horizontal */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-px bg-border" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center relative z-10 group cursor-default"
                style={{ width: `${100 / steps.length}%` }}
              >
                <div className="w-16 h-16 rounded-full border-2 border-foreground/20 bg-card flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:shadow-md group-hover:scale-110">
                  <Icon size={26} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
                </div>
                <span className="mt-4 text-sm font-semibold text-foreground/80 max-w-[120px] leading-tight group-hover:text-accent transition-colors">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex items-center gap-4 group">
                <div className="relative flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-foreground/20 bg-card flex items-center justify-center transition-all duration-300 group-hover:border-accent group-hover:shadow-md">
                    <Icon size={24} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-6 bg-border mt-1" />
                  )}
                </div>
                <span className="text-sm font-semibold text-foreground/80 group-hover:text-accent transition-colors">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JourneyStepper;
