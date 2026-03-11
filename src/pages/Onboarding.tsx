import {
  Globe, Monitor, Download, Settings, FileArchive, Upload,
  Clock, ClipboardList, FolderSearch, Database, Brain, Puzzle,
  Leaf, ExternalLink, HardDrive, Cloud
} from "lucide-react";

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-header px-6 py-16 md:py-20">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 15% 10%, hsl(150 30% 18% / 0.9), transparent 60%)' }} />
        <div className="container max-w-5xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight text-center">
            Onboarding <span className="text-accent">Gestão Folha</span>
          </h1>
          <p className="mt-4 text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto text-center">
            Nossa História — Conheça as ferramentas, acessos e documentação que fazem parte do dia a dia da gestão de produto folha.
          </p>
        </div>
      </section>

      {/* Setup do Sistema */}
      <section className="px-6 py-16 md:py-20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Setup do <span className="text-accent">Sistema</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Domínio */}
            <div className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Globe size={22} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Domínio</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Acesse o sistema via Desktop ou Web.</p>
              <div className="flex flex-col gap-2 mt-auto">
                <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
                  <Monitor size={16} /> Download Desktop
                  <Download size={14} className="ml-auto" />
                </a>
                <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
                  <ExternalLink size={16} /> Acesso Web
                </a>
              </div>
              <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-2">
                <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
                <p className="text-success-foreground text-xs font-medium">Prefira a versão Web para atualizações automáticas.</p>
              </div>
            </div>

            {/* Sharp */}
            <div className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Settings size={22} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Sharp</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Instalador e arquivo de configuração do Sharp.</p>
              <div className="flex flex-col gap-2 mt-auto">
                <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
                  <HardDrive size={16} /> Instalador
                  <Download size={14} className="ml-auto" />
                </a>
                <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
                  <FileArchive size={16} /> Arquivo de Configuração
                  <Download size={14} className="ml-auto" />
                </a>
              </div>
              <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-2">
                <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
                <p className="text-success-foreground text-xs font-medium">Execute o instalador como administrador.</p>
              </div>
            </div>

            {/* Utilitários */}
            <div className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
                  <Upload size={22} strokeWidth={1.5} className="text-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Utilitários</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">Ferramentas auxiliares para o dia a dia.</p>
              <div className="flex flex-col gap-2 mt-auto">
                <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
                  <Upload size={16} /> FileZilla FTP
                  <Download size={14} className="ml-auto" />
                </a>
                <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
                  <Monitor size={16} /> DuckCapture
                  <Download size={14} className="ml-auto" />
                </a>
                <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
                  <Cloud size={16} /> Backup Nuvem
                  <Download size={14} className="ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acessos Diários */}
      <section className="px-6 py-16 md:py-20 bg-secondary/50">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Acessos <span className="text-accent">Diários</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Clock, label: "Folha Certa (Ponto)", desc: "Registro e gestão de ponto eletrônico" },
              { icon: ClipboardList, label: "Registro de Atividades", desc: "Acompanhe tarefas e entregas diárias" },
              { icon: FolderSearch, label: "SGD", desc: "Sistema de Gestão de Documentos" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href="#"
                  className="group bg-card rounded-2xl border border-border p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
                >
                  <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-accent/10">
                    <Icon size={36} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.label}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  <span className="text-xs font-semibold text-accent opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-1">
                    <ExternalLink size={14} /> Acessar
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentação Técnica */}
      <section className="px-6 py-16 md:py-20">
        <div className="container max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Documentação <span className="text-accent">Técnica</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Database, label: "Comandos SQL", desc: "Referência rápida de queries e scripts SQL utilizados na folha." },
              { icon: Brain, label: "Guia de IAs Utilizadas", desc: "Documentação das inteligências artificiais integradas ao produto." },
              { icon: Puzzle, label: "Extensões de Navegador", desc: "Links para extensões recomendadas que auxiliam no trabalho diário." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href="#"
                  className="group bg-card rounded-xl border border-border p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
                >
                  <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-accent/10">
                    <Icon size={22} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-foreground">{item.label}</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-accent opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      <ExternalLink size={14} /> Acessar
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Onboarding;
