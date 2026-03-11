import { FileSpreadsheet, Calculator, BookOpen, Shield, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    icon: FileSpreadsheet,
    name: "Planilha de Cálculos",
    description: "Template para cálculos de folha de pagamento",
    actionLabel: "Download",
    actionIcon: Download,
    href: "#",
  },
  {
    icon: Calculator,
    name: "Simulador de Encargos",
    description: "Simule encargos trabalhistas e previdenciários",
    actionLabel: "Acessar",
    actionIcon: ExternalLink,
    href: "#",
  },
  {
    icon: BookOpen,
    name: "Manual do Produto",
    description: "Documentação completa do sistema de folha",
    actionLabel: "Acessar",
    actionIcon: ExternalLink,
    href: "#",
  },
  {
    icon: Shield,
    name: "Compliance & Legislação",
    description: "Atualizações legais e normas trabalhistas",
    actionLabel: "Acessar",
    actionIcon: ExternalLink,
    href: "#",
  },
];

const EssentialResources = () => {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
          Recursos <span className="text-accent">Essenciais</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {resources.map((resource, i) => {
            const Icon = resource.icon;
            const ActionIcon = resource.actionIcon;
            return (
              <a
                key={i}
                href={resource.href}
                className="group bg-card rounded-xl border border-border p-5 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent/10">
                    <Icon size={22} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-foreground leading-tight">{resource.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{resource.description}</p>
                  </div>
                </div>

                <div className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-accent opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <ActionIcon size={14} />
                  {resource.actionLabel}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EssentialResources;
