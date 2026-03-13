import { useState, useEffect } from "react";
import { MessageSquarePlus, Tag, Clock, User, ExternalLink, Megaphone, Filter } from "lucide-react";

const REPO = "TalitaFerreiraTR/onboardingpfolha";
const CATEGORIES = [
  "Encargos", "eSocial", "Legislação", "Folha de Pagamento",
  "Dúvidas", "Dicas", "Processos", "Geral",
];

const CATEGORY_COLORS: Record<string, string> = {
  Encargos: "bg-blue-100 text-blue-700 border-blue-200",
  eSocial: "bg-purple-100 text-purple-700 border-purple-200",
  "Legislação": "bg-red-100 text-red-700 border-red-200",
  "Folha de Pagamento": "bg-green-100 text-green-700 border-green-200",
  "Dúvidas": "bg-yellow-100 text-yellow-700 border-yellow-200",
  Dicas: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Processos: "bg-indigo-100 text-indigo-700 border-indigo-200",
  Geral: "bg-gray-100 text-gray-700 border-gray-200",
};

interface Issue {
  id: number;
  title: string;
  body: string;
  labels: { name: string }[];
  user: { login: string; avatar_url: string };
  created_at: string;
  html_url: string;
}

const QuadroAvisos = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("Todos");

  useEffect(() => {
    fetch(`https://api.github.com/repos/${REPO}/issues?labels=quadro-avisos&state=open&per_page=50&sort=created&direction=desc`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setIssues(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const getCategory = (issue: Issue) => {
    const cat = issue.labels.find((l) => CATEGORIES.includes(l.name));
    return cat?.name || "Geral";
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
  };

  const filtered = filter === "Todos" ? issues : issues.filter((i) => getCategory(i) === filter);

  const newIssueUrl = `https://github.com/${REPO}/issues/new?labels=quadro-avisos&template=quadro-avisos.md`;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-card rounded-2xl border border-border p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center">
              <Megaphone size={22} strokeWidth={1.5} className="text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Quadro de <span className="text-accent">Avisos</span>
              </h3>
              <p className="text-sm text-muted-foreground">Compartilhe conhecimento com a equipe</p>
            </div>
          </div>
          <a
            href={newIssueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-5 py-2.5 rounded-lg transition-colors hover:bg-accent/90 w-fit"
          >
            <MessageSquarePlus size={16} /> Nova Contribuição
          </a>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {["Todos", ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              filter === cat
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-card text-muted-foreground border-border hover:border-accent/40 hover:text-foreground"
            }`}
          >
            {cat === "Todos" ? <Filter size={12} /> : <Tag size={12} />}
            {cat}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-3 border-accent/30 border-t-accent rounded-full animate-spin" />
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-card rounded-2xl border border-border p-12 text-center">
          <Megaphone size={40} className="mx-auto text-muted-foreground/30 mb-4" />
          <h4 className="text-lg font-bold text-foreground mb-2">
            {issues.length === 0 ? "Nenhuma contribuição ainda" : "Nenhum aviso nesta categoria"}
          </h4>
          <p className="text-sm text-muted-foreground mb-6">
            {issues.length === 0
              ? "Seja o primeiro a compartilhar algo com a equipe!"
              : "Tente outro filtro ou crie uma nova contribuição."}
          </p>
          <a
            href={newIssueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold text-sm px-5 py-2.5 rounded-lg transition-colors hover:bg-accent/90"
          >
            <MessageSquarePlus size={16} /> Criar Primeira Contribuição
          </a>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((issue) => {
            const category = getCategory(issue);
            const colorClass = CATEGORY_COLORS[category] || CATEGORY_COLORS.Geral;
            return (
              <a
                key={issue.id}
                href={issue.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-card rounded-2xl border border-border p-6 flex flex-col gap-3 transition-all duration-300 hover:shadow-lg hover:border-accent/30 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="text-sm font-bold text-foreground leading-snug flex-1 group-hover:text-accent transition-colors">
                    {issue.title}
                  </h4>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap ${colorClass}`}>
                    {category}
                  </span>
                </div>
                {issue.body && (
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {issue.body.slice(0, 200)}{issue.body.length > 200 ? "..." : ""}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-border">
                  <div className="flex items-center gap-2">
                    <img src={issue.user.avatar_url} alt="" className="w-5 h-5 rounded-full" />
                    <span className="text-[11px] text-muted-foreground font-medium">{issue.user.login}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Clock size={10} /> {formatDate(issue.created_at)}
                    </span>
                    <ExternalLink size={12} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuadroAvisos;
