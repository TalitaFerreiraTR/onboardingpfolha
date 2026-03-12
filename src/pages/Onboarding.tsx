import { useState } from "react";
import {
  Globe, Monitor, Download, Settings, FileArchive, Upload,
  Clock, ClipboardList, FolderSearch, Database, Brain, Puzzle,
  Leaf, ExternalLink, HardDrive, Cloud, BarChart3,
  Handshake, Server, Package, Code, CheckCircle, BookOpen,
  Sparkles, CheckSquare, FileText, Library, CalendarDays
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const steps = [
  { icon: Handshake, label: "Onboarding" },
  { icon: Server, label: "Sistemas" },
  { icon: Package, label: "Instalações" },
  { icon: Library, label: "Manuais" },
  { icon: Code, label: "Tech" },
];

/* ─── Step Content Components ─── */

const StepBoasVindas = () => (
  <div className="animate-fade-in">
    <div className="bg-card rounded-2xl border border-border p-8 md:p-10 mb-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Nossa <span className="text-accent">História</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A equipe de Gestão de Produto Folha nasceu com a missão de transformar a experiência
            de gestão de folha de pagamento. Desde o início, nosso foco é criar processos
            eficientes, intuitivos e que realmente fazem a diferença no dia a dia.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Aqui você encontra tudo o que precisa para começar sua jornada conosco:
            ferramentas, acessos, documentação e muito mais.
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center w-24 h-24 rounded-2xl bg-secondary flex-shrink-0">
          <Sparkles className="text-accent" size={40} strokeWidth={1.5} />
        </div>
      </div>
      <div className="mt-6 bg-success rounded-xl px-5 py-4 flex items-start gap-3">
        <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={20} />
        <p className="text-success-foreground text-sm font-medium">
          Siga cada etapa do stepper acima para completar seu onboarding!
        </p>
      </div>
    </div>

    <div className="bg-card rounded-2xl border border-border p-8">
      <h3 className="text-xl font-bold text-foreground mb-4">
        Guia de <span className="text-accent">Onboarding</span>
      </h3>
      <ol className="space-y-3 text-sm text-muted-foreground">
        {[
          "Conheça a história e a cultura do time",
          "Configure seus acessos aos sistemas core",
          "Instale as ferramentas necessárias no seu ambiente",
          "Familiarize-se com a documentação técnica",
          "Instale as extensões e conclua o checklist",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

const StepSistemasCore = () => (
  <div className="animate-fade-in grid grid-cols-1 sm:grid-cols-3 gap-6">
    {[
      { icon: Clock, label: "Folha Certa (Ponto)", desc: "Registro e gestão de ponto eletrônico", tip: "Acesse diariamente para registrar seu ponto." },
      { icon: ClipboardList, label: "Registro de Atividades", desc: "Acompanhe tarefas e entregas diárias", tip: "Mantenha suas atividades sempre atualizadas." },
      { icon: FolderSearch, label: "SGD", desc: "Sistema de Gestão de Documentos", tip: "Centralize documentos e contratos aqui." },
    ].map((item, i) => {
      const Icon = item.icon;
      return (
        <a key={i} href="#" className="group bg-card rounded-2xl border border-border p-8 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1">
          <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-accent/10">
            <Icon size={36} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
          </div>
          <h3 className="text-base font-bold text-foreground">{item.label}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
          <span className="text-xs font-semibold text-accent opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-1">
            <ExternalLink size={14} /> Acessar
          </span>
          <div className="w-full bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-auto">
            <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={14} />
            <p className="text-success-foreground text-xs font-medium text-left">{item.tip}</p>
          </div>
        </a>
      );
    })}
  </div>
);

const StepInstalacoes = () => (
  <div className="animate-fade-in grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <p className="text-sm text-muted-foreground leading-relaxed">Instalador e arquivo de configuração.</p>
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

    {/* Apps */}
    <div className="bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
          <Package size={22} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Instalação de Apps</h3>
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

    {/* Versões */}
    <div className="md:col-span-3 bg-card rounded-2xl border border-border p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
          <Database size={22} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Versões do Sistema</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Baixe a versão atual ou acesse versões anteriores do sistema quando necessário.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-auto">
        {[
          { version: "v12.1.3", date: "Mar 2026", current: true },
          { version: "v12.0.8", date: "Jan 2026", current: false },
          { version: "v11.5.2", date: "Out 2025", current: false },
          { version: "v11.0.0", date: "Jul 2025", current: false },
        ].map((v, i) => (
          <a key={i} href="#" className={`flex flex-col items-center gap-1 rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${v.current ? "bg-accent/10 text-accent border border-accent/30" : "bg-secondary text-foreground hover:bg-accent/10 hover:text-accent"}`}>
            <span className="flex items-center gap-1.5">
              <Download size={14} /> {v.version}
            </span>
            <span className="text-[10px] text-muted-foreground font-normal">{v.date}</span>
            {v.current && <Badge variant="secondary" className="text-[10px] mt-1 bg-accent/20 text-accent border-0">Atual</Badge>}
          </a>
        ))}
      </div>
      <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-2">
        <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
        <p className="text-success-foreground text-xs font-medium">Recomendamos sempre usar a versão mais recente.</p>
      </div>
    </div>
  </div>
);


const StepBaseConhecimento = () => (
  <div className="animate-fade-in">
    <div className="bg-card rounded-2xl border border-border p-8 mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
          <Library size={22} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          Base de <span className="text-accent">Conhecimento</span>
        </h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mt-3">
        Consulte os manuais oficiais para garantir a conformidade dos processos.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          icon: FileText,
          label: "Manuais SA",
          desc: "Soluções de Atendimento — documentação completa dos processos e fluxos de atendimento ao cliente.",
          action: "Abrir PDF",
          actionIcon: Download,
          version: "v3.2",
          date: "Mar 2026",
        },
        {
          icon: BookOpen,
          label: "Manuais NE",
          desc: "Notas Explicativas e Normativas — referência rápida para legislação e regras de cálculo.",
          action: "Acesso Rápido",
          actionIcon: ExternalLink,
          version: "v2.8",
          date: "Fev 2026",
        },
        {
          icon: Globe,
          label: "SGSUN",
          desc: "Sistema de suporte e gestão unificada — acesse o portal ou consulte o manual de uso.",
          action: "Acessar Sistema",
          actionIcon: ExternalLink,
          version: "v1.5",
          date: "Jan 2026",
        },
      ].map((item, i) => {
        const Icon = item.icon;
        const ActionIcon = item.actionIcon;
        return (
          <div key={i} className="group bg-card rounded-2xl border border-border p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-accent/10">
                  <Icon size={28} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{item.label}</h3>
                  <Badge variant="secondary" className="mt-1 text-[10px] gap-1 px-2 py-0.5">
                    <CalendarDays size={10} />
                    {item.version} · {item.date}
                  </Badge>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed flex-1">{item.desc}</p>
            <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent mt-auto">
              <ActionIcon size={16} /> {item.action}
            </a>
            <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2">
              <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={14} />
              <p className="text-success-foreground text-xs font-medium">Versão Atualizada</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const StepTech = () => (
  <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Desenvolvimento */}
    <div className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
          <Database size={22} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Comandos SQL</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Referência rápida de queries e scripts SQL utilizados na gestão de folha de pagamento.
      </p>
      <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent mt-auto">
        <BookOpen size={16} /> Acessar Documentação
        <ExternalLink size={14} className="ml-auto" />
      </a>
      <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-2">
        <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
        <p className="text-success-foreground text-xs font-medium">Sempre teste queries em ambiente de homologação primeiro.</p>
      </div>
    </div>

    {/* IAs */}
    <div className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
          <Brain size={22} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">IAs Utilizadas</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Documentação das inteligências artificiais integradas ao produto e como utilizá-las no dia a dia.
      </p>
      <a href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent mt-auto">
        <BookOpen size={16} /> Acessar Guia
        <ExternalLink size={14} className="ml-auto" />
      </a>
      <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-2">
        <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
        <p className="text-success-foreground text-xs font-medium">Use as IAs como apoio — sempre valide os resultados.</p>
      </div>
    </div>

    {/* Extensões */}
    <div className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
          <Puzzle size={22} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Extensões de Navegador</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Extensões recomendadas que auxiliam no trabalho diário com a gestão de folha.
      </p>
      <div className="flex flex-col gap-2 mt-auto">
        {["JSON Formatter", "React DevTools", "ColorZilla"].map((ext, i) => (
          <a key={i} href="#" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
            <Puzzle size={16} /> {ext}
            <ExternalLink size={14} className="ml-auto" />
          </a>
        ))}
      </div>
    </div>

    {/* Checklist */}
    <div className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
          <CheckSquare size={22} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Checklist de Conclusão</h3>
      </div>
      <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2">
        <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
        <p className="text-success-foreground text-xs font-medium">Complete todas as etapas para finalizar o onboarding.</p>
      </div>
    </div>
  </div>
);

const stepComponents = [StepBoasVindas, StepSistemasCore, StepInstalacoes, StepBaseConhecimento, StepTech];

/* ─── Main Page ─── */

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveContent = stepComponents[activeStep];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero + Stepper */}
      <section className="relative overflow-hidden bg-header px-6 pt-6 pb-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 15% 10%, hsl(150 30% 18% / 0.9), transparent 60%)' }} />
        
        {/* Logo inside header */}
        <div className="container max-w-5xl mx-auto relative z-10 mb-10">
          <span className="font-bold text-primary-foreground/80 text-sm tracking-tight">Thomson Reuters</span>
        </div>

        <div className="container max-w-5xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <BarChart3 className="text-accent" size={32} />
            <span className="text-primary-foreground/70 font-semibold text-sm tracking-widest uppercase">
              Gestão de Produto Folha
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight">
            Onboarding <span className="text-accent">Gestão Folha</span>
          </h1>
          <p className="mt-4 text-primary-foreground/60 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Confiança para agir. <span className="text-[hsl(100_20%_72%)] font-semibold">Segurança para crescer.</span>
          </p>
          <a
            href="#"
            className="inline-block mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-sm px-8 py-3 rounded-lg transition-colors"
          >
            Saiba mais
          </a>
        </div>
      </section>

      {/* Stepper floating */}
      <div className="px-6 -mt-12 relative z-20">
        <div className="container max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-lg border border-border p-6">
            <div className="flex items-center justify-between relative">
              {/* Connecting line */}
              <div className="absolute top-6 left-[10%] right-[10%] h-px bg-border" />

              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === activeStep;
                const isDone = i < activeStep;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className="flex flex-col items-center relative z-10 group cursor-pointer"
                    style={{ width: `${100 / steps.length}%` }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                        ${isActive
                          ? "border-2 border-accent bg-card scale-110 shadow-[0_0_12px_hsl(25_95%_53%/0.35)]"
                          : isDone
                            ? "border-2 border-accent/50 bg-accent/10"
                            : "border-2 border-border bg-card group-hover:border-accent/40 group-hover:scale-105"
                        }`}
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className={`transition-colors ${isActive ? "text-accent" : isDone ? "text-accent/70" : "text-muted-foreground group-hover:text-accent"}`}
                      />
                    </div>
                    <span
                      className={`mt-2 text-xs font-semibold transition-colors leading-tight hidden sm:block
                        ${isActive ? "text-accent" : isDone ? "text-accent/70" : "text-muted-foreground group-hover:text-accent"}`}
                    >
                      {step.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Step Content */}
      <section className="px-6 py-12 md:py-16">
        <div className="container max-w-5xl mx-auto">
          <ActiveContent key={activeStep} />
        </div>
      </section>
    </div>
  );
};

export default Onboarding;
