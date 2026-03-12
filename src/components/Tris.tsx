import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ExternalLink, Bot, User } from "lucide-react";

interface KnowledgeItem {
  keywords: string[];
  title: string;
  description: string;
  href?: string;
  step?: number;
  stepLabel?: string;
}

const knowledge: KnowledgeItem[] = [
  // Rotina & Gestão
  { keywords: ["ponto", "my time", "mytime", "jornada", "horario", "horário", "registro de ponto"], title: "My Time", description: "Registro e gestão de ponto e jornada de trabalho.", href: "https://mytime.thomsonreuters.com/mytime/MyTimeHome.htm", step: 1, stepLabel: "Workspace" },
  { keywords: ["ado", "board", "tarefas", "sprint", "kanban"], title: "ADO Board", description: "Quadro de tarefas e acompanhamento de sprints.", step: 1, stepLabel: "Workspace" },
  { keywords: ["metas", "pontuação", "pontuações", "meta"], title: "Metas & Pontuações", description: "Acompanhe metas individuais e do time.", step: 1, stepLabel: "Workspace" },
  { keywords: ["sharepoint", "documentos", "arquivos", "repositório"], title: "SharePoint", description: "Repositório central de documentos e arquivos.", step: 1, stepLabel: "Workspace" },
  { keywords: ["certificado", "certificados", "contador"], title: "Certificados", description: "Emissão e consulta de certificados internos.", href: "https://trten-my.sharepoint.com/:x:/r/personal/marianna_saggiorato_thomsonreuters_com/_layouts/15/doc2.aspx?sourcedoc=%7B1EECC60C-AEFF-4395-A5E7-454DFC4548BF%7D&file=Empresas%20Certificado%20Contador.xlsx&action=default&mobileredirect=true", step: 1, stepLabel: "Workspace" },

  // Técnico & Operacional
  { keywords: ["exporta", "importa", "exportação", "importação", "dados"], title: "Exporta/Importa", description: "Ferramentas de exportação e importação de dados.", step: 1, stepLabel: "Workspace" },
  { keywords: ["dw", "data warehouse", "analítico", "dados analíticos"], title: "DW", description: "Data Warehouse — acesso a dados analíticos.", step: 1, stepLabel: "Workspace" },
  { keywords: ["dw prod", "qed", "ambiente"], title: "DW Prod → QED", description: "Transformar ambiente DW Prod em QED.", step: 1, stepLabel: "Workspace" },
  { keywords: ["anomalia", "anomalias", "erro", "bug"], title: "Anomalia", description: "Registro e tratamento de anomalias do sistema.", step: 1, stepLabel: "Workspace" },
  { keywords: ["log", "logs", "aplicação de log", "ferramenta suporte"], title: "Aplicação de Log", description: "Consulta e aplicação de logs operacionais.", href: "https://dominiosistemas.github.io/Ferramenta-para-Suporte/", step: 1, stepLabel: "Workspace" },

  // Conhecimento & Apoio
  { keywords: ["treinamento", "treinamentos", "capacitação", "curso", "cursos"], title: "Central de Treinamentos", description: "Cursos, trilhas e materiais de capacitação. Inclui Central de Soluções, Treinamentos Folha e Treinamento SharePoint.", step: 1, stepLabel: "Workspace" },
  { keywords: ["esocial", "e-social", "leiaute", "portal oficial", "produção restrita"], title: "Manual eSocial/Leiaute", description: "Portal Oficial e Ambiente de Teste do eSocial.", href: "https://login.esocial.gov.br/login.aspx", step: 1, stepLabel: "Workspace" },
  { keywords: ["econet", "tributária", "legislação", "trabalhista", "consultoria"], title: "ECONET", description: "Consultoria tributária e legislação trabalhista.", href: "https://www.econeteditora.com.br/", step: 1, stepLabel: "Workspace" },
  { keywords: ["contato", "contatos", "telefone", "email", "responsável"], title: "Principais Contatos", description: "Tabela de contatos por área/assunto.", step: 1, stepLabel: "Workspace" },

  // Instalações
  { keywords: ["dominio", "domínio", "desktop", "web", "atualização", "atualizações", "instalação dominio"], title: "Domínio", description: "Atualizações, Download Desktop e Acesso Web do sistema Domínio.", href: "https://www.dominioweb.com.br/logout", step: 2, stepLabel: "Instalações" },
  { keywords: ["sharp", "instalador", "configuração"], title: "Sharp", description: "Instalador e arquivo de configuração do Sharp.", step: 2, stepLabel: "Instalações" },
  { keywords: ["filezilla", "ftp", "duckcapture", "backup", "apps", "aplicativos"], title: "Instalação de Apps", description: "FileZilla FTP, DuckCapture e Backup Nuvem.", step: 2, stepLabel: "Instalações" },
  { keywords: ["versão", "versões", "sistema", "download versão"], title: "Versões do Sistema", description: "Baixe a versão atual ou acesse versões anteriores.", step: 2, stepLabel: "Instalações" },

  // Manuais
  { keywords: ["manual sa", "manuais sa", "soluções de atendimento", "atendimento cliente"], title: "Manuais SA", description: "Soluções de Atendimento — documentação completa dos processos.", step: 3, stepLabel: "Manuais" },
  { keywords: ["manual ne", "manuais ne", "notas explicativas", "normativas", "cálculo"], title: "Manuais NE", description: "Notas Explicativas e Normativas — legislação e regras de cálculo.", step: 3, stepLabel: "Manuais" },
  { keywords: ["sgsun", "suporte", "gestão unificada"], title: "SGSUN", description: "Sistema de suporte e gestão unificada.", step: 3, stepLabel: "Manuais" },

  // Tech
  { keywords: ["sql", "query", "queries", "comandos", "banco"], title: "Comandos SQL", description: "Referência rápida de queries e scripts SQL.", step: 4, stepLabel: "Tech" },
  { keywords: ["extensão", "extensões", "navegador", "json formatter", "react devtools", "colorzilla"], title: "Extensões de Navegador", description: "JSON Formatter, React DevTools, ColorZilla.", step: 4, stepLabel: "Tech" },
  { keywords: ["checklist", "conclusão", "finalizar"], title: "Checklist de Conclusão", description: "Complete todas as etapas para finalizar o onboarding.", step: 4, stepLabel: "Tech" },

  // IAs
  { keywords: ["ia", "ias", "inteligência artificial", "ai", "assistente"], title: "IAs Utilizadas", description: "16 IAs disponíveis incluindo IGOR, Chain AI Tria, Ask GPT, Metaprompting e mais.", step: 4, stepLabel: "Tech" },
  { keywords: ["igor", "roteiro", "roteiros"], title: "IGOR", description: "Instrutor de Geração e Otimização de Roteiros.", href: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/34b45254-f1ac-4f0d-a7bc-74aaaee96e88?sidebar=instructions", step: 4, stepLabel: "Tech" },
  { keywords: ["rubrica", "rubricas", "fórmula", "fórmulas"], title: "Rubricas com Fórmulas", description: "IA para análise de rubricas com fórmulas.", href: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/b653d9c8-da78-4860-9347-e08a8c97c145?sidebar=instructions_auto", step: 4, stepLabel: "Tech" },
  { keywords: ["tradução", "traduzir", "inglês", "ingles"], title: "Tradução - Inglês", description: "IA para tradução de textos para inglês.", href: "https://aiplatform.thomsonreuters.com/ai-platform/ai-chains/use/37ec1afe-fd69-44b6-95ae-bef608ce57d1", step: 4, stepLabel: "Tech" },
  { keywords: ["gpt", "ask gpt", "chat gpt"], title: "Ask GPT 5.2", description: "Acesso ao GPT para perguntas e respostas.", href: "https://dataandanalytics.int.thomsonreuters.com/ai-platform/ai-experiences/use/cd8d90f6-ce37-4e69-9433-92e658a33675", step: 4, stepLabel: "Tech" },
  { keywords: ["psai", "valida psai", "validação", "tokens"], title: "Valida PSAI - 200k Tokens", description: "Validação de PSAIs com suporte a 200k tokens.", href: "https://dataandanalytics.int.thomsonreuters.com/ai-platform/ai-chains/use/d80f55af-7d45-420c-adc1-065743520fd4", step: 4, stepLabel: "Tech" },
  { keywords: ["chain", "tria", "dominio ia"], title: "CHAIN AI TRIA - DOMINIO", description: "IA de triagem do Domínio.", href: "https://dataandanalytics.int.thomsonreuters.com/ai-platform/ai-chains/use/3679317a-l205-4c29-a847-08c8c93fb592", step: 4, stepLabel: "Tech" },
  { keywords: ["metaprompting", "prompt", "gerar prompt", "fix prompt"], title: "Metaprompting", description: "Gere ou corrija seus prompts para as IAs.", href: "https://aiplatform.thomsonreuters.com/ai-platform/ai-experiences/use/53737406-b11d-4b13-afd2-57e1e33c1c49?sidebar=instructions_auto", step: 4, stepLabel: "Tech" },

  // Geral
  { keywords: ["onboarding", "começar", "inicio", "início", "novo", "bem vindo", "boas vindas"], title: "Onboarding", description: "Comece aqui! Conheça a história e a cultura do time de Gestão de Produto Folha.", step: 0, stepLabel: "Onboarding" },
  { keywords: ["folha", "pagamento", "folha de pagamento", "gestão folha"], title: "Gestão de Produto Folha", description: "Portal completo de onboarding da equipe de Gestão de Produto Folha.", step: 0, stepLabel: "Onboarding" },
];

function searchKnowledge(query: string): KnowledgeItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  const scored = knowledge.map((item) => {
    let score = 0;
    for (const kw of item.keywords) {
      if (q.includes(kw)) score += 3;
      else if (kw.includes(q)) score += 2;
      else {
        const words = q.split(/\s+/);
        for (const w of words) {
          if (w.length >= 3 && kw.includes(w)) score += 1;
        }
      }
    }
    if (item.title.toLowerCase().includes(q)) score += 4;
    if (item.description.toLowerCase().includes(q)) score += 1;
    return { item, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map((s) => s.item);
}

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
  results?: KnowledgeItem[];
}

const GREETING: ChatMessage = {
  role: "assistant",
  text: "Olá! Sou o Tris, seu assistente do portal de onboarding. Digite o que procura e te ajudo a encontrar!",
};

interface TrisProps {
  onNavigate?: (step: number) => void;
}

const Tris = ({ onNavigate }: TrisProps) => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const handleSend = () => {
    const q = input.trim();
    if (!q) return;

    const userMsg: ChatMessage = { role: "user", text: q };
    const results = searchKnowledge(q);

    const assistantMsg: ChatMessage = results.length > 0
      ? { role: "assistant", text: `Encontrei ${results.length} resultado${results.length > 1 ? "s" : ""} para "${q}":`, results }
      : { role: "assistant", text: `Não encontrei resultados para "${q}". Tente buscar por: ponto, domínio, eSocial, treinamento, IA, SQL, manuais, instalação...` };

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          open
            ? "bg-muted text-foreground rotate-0"
            : "bg-accent text-accent-foreground hover:scale-110"
        }`}
        aria-label="Abrir Tris"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-h-[520px] bg-card rounded-2xl border border-border shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="bg-header px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center">
              <Bot size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-primary-foreground">Tris</h3>
              <p className="text-[10px] text-primary-foreground/60">Thomson Reuters Intelligent Support</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0" style={{ maxHeight: "360px" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Bot size={14} className="text-accent" />
                  </div>
                )}
                <div className={`max-w-[80%] ${msg.role === "user" ? "order-first" : ""}`}>
                  <div className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-accent text-accent-foreground rounded-br-md"
                      : "bg-secondary text-foreground rounded-bl-md"
                  }`}>
                    {msg.text}
                  </div>
                  {msg.results && (
                    <div className="mt-2 space-y-2">
                      {msg.results.map((r, j) => (
                        <div key={j} className="bg-secondary rounded-xl p-3 border border-border">
                          <p className="text-xs font-bold text-foreground">{r.title}</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">{r.description}</p>
                          <div className="flex gap-2 mt-2">
                            {r.href && (
                              <a href={r.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] font-semibold text-accent hover:underline">
                                <ExternalLink size={10} /> Abrir link
                              </a>
                            )}
                            {r.step !== undefined && onNavigate && (
                              <button
                                onClick={() => { onNavigate(r.step!); setOpen(false); }}
                                className="flex items-center gap-1 text-[11px] font-semibold text-primary hover:underline"
                              >
                                → Ir para {r.stepLabel}
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="w-7 h-7 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User size={14} className="text-accent" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border px-4 py-3">
            <form
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="O que você procura?"
                className="flex-1 bg-secondary rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-accent/30"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-lg bg-accent text-accent-foreground flex items-center justify-center transition-colors hover:bg-accent/90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Tris;
