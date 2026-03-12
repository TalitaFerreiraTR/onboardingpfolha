import { useState } from "react";
import {
  Globe, Monitor, Download, Settings, FileArchive, Upload,
  Clock, ClipboardList, FolderSearch, Database, Brain, Puzzle,
  Leaf, ExternalLink, HardDrive, Cloud, BarChart3,
  Handshake, Server, Package, Code, CheckCircle, BookOpen,
  Sparkles, CheckSquare, FileText, Library, CalendarDays,
  Target, Share2, Award, FolderOpen, RefreshCw, AlertTriangle,
  ScrollText, GraduationCap, Scale, Phone, Users, Mail
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

const steps = [
  { icon: Handshake, label: "Onboarding" },
  { icon: Server, label: "Workspace" },
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

/* ─── Ecossistema de Trabalho (antigo Sistemas Core) ─── */

const CategoryHeader = ({ title, icon: Icon }: { title: string; icon: React.ElementType }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
      <Icon size={20} strokeWidth={1.5} className="text-accent" />
    </div>
    <h3 className="text-lg font-bold text-foreground">{title}</h3>
  </div>
);

const EcossistemaCard = ({ icon: Icon, label, desc, href = "#" }: { icon: React.ElementType; label: string; desc: string; href?: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-card rounded-2xl border border-border p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
  >
    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-accent/10">
      <Icon size={30} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
    </div>
    <h4 className="text-sm font-bold text-foreground">{label}</h4>
    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
    <span className="text-xs font-semibold text-accent opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-1">
      <ExternalLink size={14} /> Acessar
    </span>
  </a>
);

const StepEcossistema = () => (
  <div className="animate-fade-in space-y-10">
    {/* Rotina & Gestão */}
    <div>
      <CategoryHeader title="Rotina & Gestão" icon={ClipboardList} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <EcossistemaCard icon={Clock} label="My Time" desc="Registro e gestão de ponto e jornada de trabalho." href="https://mytime.thomsonreuters.com/mytime/MyTimeHome.htm" />
        <EcossistemaCard icon={Target} label="ADO Board" desc="Quadro de tarefas e acompanhamento de sprints." />
        <EcossistemaCard icon={Award} label="Metas & Pontuações" desc="Acompanhe metas individuais e do time." />
        <EcossistemaCard icon={Share2} label="SharePoint" desc="Repositório central de documentos e arquivos." />
        <EcossistemaCard icon={GraduationCap} label="Certificados" desc="Emissão e consulta de certificados internos." href="https://trten-my.sharepoint.com/:x:/r/personal/marianna_saggiorato_thomsonreuters_com/_layouts/15/doc2.aspx?sourcedoc=%7B1EECC60C-AEFF-4395-A5E7-454DFC4548BF%7D&file=Empresas%20Certificado%20Contador.xlsx&action=default&mobileredirect=true&cid=2382acd7-c2d1-4187-900e-c6ceef6eeda8" />
      </div>
    </div>

    {/* Técnico & Operacional */}
    <div>
      <CategoryHeader title="Técnico & Operacional" icon={Database} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <EcossistemaCard icon={Upload} label="Exporta/Importa" desc="Ferramentas de exportação e importação de dados." />
        <EcossistemaCard icon={HardDrive} label="DW" desc="Data Warehouse — acesso a dados analíticos." />
        <EcossistemaCard icon={RefreshCw} label="DW Prod → QED" desc="Transformar ambiente DW Prod em QED." />
        <EcossistemaCard icon={AlertTriangle} label="Anomalia" desc="Registro e tratamento de anomalias do sistema." />
        <EcossistemaCard icon={ScrollText} label="Aplicação de Log" desc="Consulta e aplicação de logs operacionais." href="https://dominiosistemas.github.io/Ferramenta-para-Suporte/" />
      </div>
    </div>

    {/* Conhecimento & Apoio */}
    <div>
      <CategoryHeader title="Conhecimento & Apoio" icon={BookOpen} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="group bg-card rounded-2xl border border-border p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-accent/10">
            <GraduationCap size={30} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
          </div>
          <h4 className="text-sm font-bold text-foreground">Central de Treinamentos</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">Cursos, trilhas e materiais de capacitação.</p>
          <div className="flex flex-col gap-2 w-full mt-auto">
            <a href="https://suporte.dominioatendimento.com/central/faces/central-solucoes-resultados.html?moduloSolucao=13" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
              <ExternalLink size={12} /> Central de Soluções
            </a>
            <a href="https://suporte.dominioatendimento.com/central/faces/solucao.html?codigo=5637" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
              <ExternalLink size={12} /> Treinamentos Folha
            </a>
            <a href="https://trten-my.sharepoint.com/personal/sabrina_guessi_thomsonreuters_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsabrina%5Fguessi%5Fthomsonreuters%5Fcom%2FDocuments%2FTREINAMENTO%20FUNCION%C3%81RIOS%20NOVOS&CT=1754672315002&OR=OWA%2DNT%2DMail&CID=a82e2753%2Dc2c9%2Db7f4%2Def53%2D14e259605bf3&sharingv2=true&fromShare=true&at=9&FolderCTID=0x0120002BAEA7F2C7580140AA6707D43E76E455&view=0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
              <ExternalLink size={12} /> Treinamento SharePoint
            </a>
          </div>
        </div>
        <div className="group bg-card rounded-2xl border border-border p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1">
          <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center transition-colors group-hover:bg-accent/10">
            <FileText size={30} strokeWidth={1.5} className="text-foreground transition-colors group-hover:text-accent" />
          </div>
          <h4 className="text-sm font-bold text-foreground">Manual eSocial/Leiaute</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">Documentação oficial do eSocial e leiautes.</p>
          <div className="flex flex-col gap-2 w-full mt-auto">
            <a href="https://login.esocial.gov.br/login.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
              <ExternalLink size={12} /> Portal Oficial
            </a>
            <a href="https://login.producaorestrita.esocial.gov.br/login.aspx" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
              <ExternalLink size={12} /> Ambiente de Teste
            </a>
          </div>
        </div>
        <EcossistemaCard icon={Scale} label="ECONET" desc="Consultoria tributária e legislação trabalhista." href="https://www.econeteditora.com.br/" />
        <EcossistemaCard icon={Users} label="Principais Contatos" desc="Veja a tabela de contatos abaixo." />
      </div>
    </div>

    {/* Tabela de Contatos */}
    <div className="bg-card rounded-2xl border border-border p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
          <Phone size={20} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Principais Contatos</h3>
      </div>
      <p className="text-sm text-muted-foreground mb-4">Saiba quem procurar para cada área ou assunto.</p>
      <div className="rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary/50">
              <TableHead className="font-bold text-foreground">Área / Assunto</TableHead>
              <TableHead className="font-bold text-foreground">Responsável</TableHead>
              <TableHead className="font-bold text-foreground">Contato</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { area: "Escrita", responsavel: "A definir", contato: "—" },
              { area: "Contabilidade", responsavel: "A definir", contato: "—" },
              { area: "Portal do Cliente", responsavel: "A definir", contato: "—" },
              { area: "Portal do Empregado", responsavel: "A definir", contato: "—" },
              { area: "Inova", responsavel: "A definir", contato: "—" },
              { area: "Suporte Geral", responsavel: "A definir", contato: "—" },
            ].map((row, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium text-foreground">{row.area}</TableCell>
                <TableCell className="text-muted-foreground">{row.responsavel}</TableCell>
                <TableCell>
                  <a href="#" className="text-accent hover:underline text-sm flex items-center gap-1">
                    <Mail size={14} /> {row.contato}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-4">
        <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
        <p className="text-success-foreground text-xs font-medium">
          Os contatos serão atualizados com as URLs do SharePoint em breve.
        </p>
      </div>
    </div>
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
        <a href="https://ftpdownload.dominiosistemas.com.br/atualizacao/contabil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
          <RefreshCw size={16} /> Atualizações
          <ExternalLink size={14} className="ml-auto" />
        </a>
        <a href="https://download.dominiosistemas.com.br/instalacao/contabil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
          <Monitor size={16} /> Download Desktop
          <Download size={14} className="ml-auto" />
        </a>
        <a href="https://www.dominioweb.com.br/logout" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
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
      <a href="https://trten-my.sharepoint.com/personal/sabrina_guessi_thomsonreuters_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fsabrina%5Fguessi%5Fthomsonreuters%5Fcom%2FDocuments%2FTREINAMENTO%20FUNCION%C3%81RIOS%20NOVOS%2FCOMANDOSs&viewid=7309f27f%2D1d49%2D48ce%2Da23b%2D899f2b94c3fb&CT=1754672324831&OR=OWA%2DNT%2DMail&CID=359e6537%2De6da%2D6605%2D9c64%2D77496e398372&sharingv2=true&fromShare=true&at=9&FolderCTID=0x0120002BAEA7F2C7580140AA6707D43E76E455&view=0" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent mt-auto">
        <BookOpen size={16} /> Acessar Documentação
        <ExternalLink size={14} className="ml-auto" />
      </a>
      <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-2">
        <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
        <p className="text-success-foreground text-xs font-medium">Sempre teste queries em ambiente de homologação primeiro.</p>
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

    {/* IAs */}
    <div className="md:col-span-2 bg-card rounded-2xl border border-border p-8 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center">
          <Brain size={22} strokeWidth={1.5} className="text-foreground" />
        </div>
        <h3 className="text-lg font-bold text-foreground">IAs Utilizadas</h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Inteligências artificiais integradas ao produto para apoiar o dia a dia.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
        {[
          { name: "Validação de Estrutura das PSAIs de NEs do Legado", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/d4734fc4-66e0-4ec1-a704-b09e03234634" },
          { name: "Assistente educacional", url: "https://dataandanalytics.int.thomsonreuters.com/ai-platform/ai-chains/use/c09954de-9563-49f9-a898-c452ff48a562" },
          { name: "Criar Rubrica através do assistente de IA", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/52d6965b-c37-49cc-8ce2-ce996fd55ece?sidebar=instructions_auto" },
          { name: "Agrupamento SAIs", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/3caad024-4894-4a6c-9bde-3a7692d450c4?sidebar=instructions_auto" },
          { name: "Análise das irregularidades", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/995e98f3-98ba-4ea3-8556-442693eddce?sidebar=instructions_auto" },
          { name: "Meu Prompt", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/f5fd1d2c-e0bb-4a9c-a494-3c3a42cb6969?sidebar=instructions" },
          { name: "IGOR - Instrutor de Geração e Otimização de Roteiros", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/34b45254-f1ac-4f0d-a7bc-74aaaee96e88?sidebar=instructions" },
          { name: "Assistente de Análise de SAIs - Folha de Pagamento - EXCEL", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/46745cc7-263a-4f00-af8a-f4027e3cf3b5" },
          { name: "CHAIN AI TRIA - DOMINIO", url: "https://dataandanalytics.int.thomsonreuters.com/ai-platform/ai-chains/use/3679317a-l205-4c29-a847-08c8c93fb592" },
          { name: "Rubricas com Fórmulas", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/b653d9c8-da78-4860-9347-e08a8c97c145?sidebar=instructions_auto" },
          { name: "Tradução - Inglês", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/37ec1afe-fd69-44b6-95ae-bef608ce57d1" },
          { name: "Valida PSAI - 200k Tokens", url: "https://dataandanalytics.int.thomsonreuters.com/ai-platform/ai-chains/use/d80f55af-7d45-420c-adc1-065743520fd4" },
          { name: "Definição", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/07a4a529-30ca-4d64-a813-2cfad0848243" },
          { name: "Ask GPT 5.2", url: "https://dataandanalytics.int.thomsonreuters.com/ai-platform/ai-experiences/use/cd8d90f6-ce37-4e69-9433-92e658a33675" },
          { name: "Metaprompting - Generate your Prompt", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-experiences/use/53737406-b11d-4b13-afd2-57e1e33c1c49?sidebar=instructions_auto" },
          { name: "Metaprompting - Fix your Prompt", url: "https://aiplatform.thomsonreuters.com/ai-platform/ai-experiences/use/c67e6f34c-5443-454b-b800-8a7cd4ace2a5?sidebar=instructions_auto" },
        ].map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent">
            <Brain size={14} className="flex-shrink-0" /> <span className="truncate">{item.name}</span>
            <ExternalLink size={12} className="ml-auto flex-shrink-0" />
          </a>
        ))}
      </div>
      <div className="bg-success rounded-xl px-4 py-3 flex items-start gap-2 mt-2">
        <Leaf className="text-success-foreground mt-0.5 flex-shrink-0" size={16} />
        <p className="text-success-foreground text-xs font-medium">Use as IAs como apoio — sempre valide os resultados.</p>
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

const stepComponents = [StepBoasVindas, StepEcossistema, StepInstalacoes, StepBaseConhecimento, StepTech];

/* ─── Main Page ─── */

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const ActiveContent = stepComponents[activeStep];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero + Stepper */}
      <section className="relative overflow-hidden bg-header px-6 pt-6 pb-24 md:pb-28">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 15% 10%, hsl(150 30% 18% / 0.9), transparent 60%)' }} />
        
        {/* Spiral / Kicker decorative element — bottom-left, 10% opacity */}
        <svg
          className="absolute bottom-0 left-0 pointer-events-none"
          width="320"
          height="320"
          viewBox="0 0 320 320"
          fill="none"
          style={{ opacity: 0.1 }}
        >
          <path
            d="M160 20C237.32 20 300 82.68 300 160C300 237.32 237.32 300 160 300C82.68 300 40 257.32 40 200C40 142.68 82.68 100 130 100C177.32 100 210 132.68 210 170C210 207.32 187.32 230 160 230C132.68 230 115 212.32 115 190C115 167.68 132.68 155 150 155C167.32 155 178 165.68 178 178C178 190.32 169.32 198 160 198"
            stroke="hsl(150 40% 70%)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

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
