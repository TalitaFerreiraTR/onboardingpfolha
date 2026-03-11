import { Sparkles, Leaf } from "lucide-react";

const WelcomeCard = () => {
  return (
    <section className="px-6 -mt-10 relative z-10">
      <div className="container max-w-3xl mx-auto">
        <div className="bg-card rounded-2xl shadow-lg border border-border p-8 md:p-10 transition-shadow hover:shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Olá, <span className="text-accent">Gestor de Produto</span>! 👋
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta é sua central de gestão. Aqui você acompanha cada etapa do ciclo
                de vida do produto folha, desde a integração inicial até o suporte
                contínuo. Navegue pelas seções abaixo para começar.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-2xl bg-secondary flex-shrink-0">
              <Sparkles className="text-accent" size={40} strokeWidth={1.5} />
            </div>
          </div>

          <div className="mt-6 bg-success rounded-xl px-5 py-4 flex items-start gap-3">
            <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={20} />
            <p className="text-success-foreground text-sm font-medium">
              Lembre-se: estamos aqui para otimizar sua gestão em cada etapa!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeCard;
