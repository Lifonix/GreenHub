import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Empresas() {
  const navigate = useNavigate();

  // Tema local da página (claro/escuro)
  const [darkLocal, setDarkLocal] = useState(true);

  const bgClass = darkLocal
    ? "bg-gradient-to-b from-[#020814] via-[#071614] to-[#020814] text-gray-100"
    : "bg-gradient-to-b from-[#f3faf6] via-[#eaf7f1] to-[#f3faf6] text-gray-900";

  const cardBase =
    "rounded-2xl p-6 border transition-colors duration-200 shadow-sm";

  const cardGlass = darkLocal
    ? `${cardBase} bg-white/5 border-white/10`
    : `${cardBase} bg-white border-emerald-100`;

  const smallText = darkLocal ? "text-gray-300" : "text-gray-600";
  const accentTitle = darkLocal ? "text-[#4ADE80]" : "text-emerald-700";
  const heroText = darkLocal ? "text-gray-300" : "text-gray-700";

  return (
    <div
      className={`min-h-screen pt-10 ${bgClass} transition-colors duration-300`}
    >
      {/* Barra superior: Voltar + Tema */}
      <div className="max-w-6xl mx-auto px-6 mb-6 flex items-center justify-between gap-4">
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium transition text-sm"
        >
          ← Voltar para Home
        </button>

        <button
          type="button"
          onClick={() => setDarkLocal(!darkLocal)}
          className={
            "px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-colors duration-200 " +
            (darkLocal
              ? "border-gray-500/60 text-gray-200 hover:border-emerald-400 hover:text-emerald-300 bg-black/10"
              : "border-emerald-300 text-emerald-700 hover:border-emerald-500 hover:text-emerald-900 bg-white/70")
          }
        >
          {darkLocal ? "Modo claro" : "Modo escuro"}
        </button>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 text-center py-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4ADE80]">
          Conecte Sua Empresa ao Futuro do Trabalho
        </h1>
        <p className={`${heroText} max-w-2xl mx-auto mt-4 text-lg`}>
          A Lifonix oferece acesso aos melhores talentos, métricas inteligentes
          e um painel completo para gerenciar equipes e expandir seu impacto.
        </p>

        <button
          onClick={() => navigate("/cadastro-empresa")}
          className="mt-8 px-8 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-base sm:text-lg font-semibold shadow-md transition"
        >
          Cadastrar Minha Empresa
        </button>
      </section>

      {/* Benefícios */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className={`text-3xl font-bold text-center ${accentTitle} mb-8`}>
          Benefícios Para Sua Empresa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              title: "Acesso a Talentos",
              desc: "Encontre profissionais qualificados, filtrados por propósito, área e especialização.",
            },
            {
              title: "Painel Corporativo",
              desc: "Gerencie equipes, acompanhe habilidades e receba recomendações inteligentes.",
            },
            {
              title: "Visibilidade da Marca",
              desc: "Destaque sua empresa como líder em inovação e sustentabilidade.",
            },
            {
              title: "Dados e Insights",
              desc: "Relatórios sobre talentos, competências e engajamento para apoiar decisões.",
            },
            {
              title: "Contratações Ágeis",
              desc: "Ferramentas modernas para entrevistar, analisar e contratar com agilidade.",
            },
            {
              title: "Ambiente Personalizado",
              desc: "Crie sua própria página empresarial dentro da plataforma GreenHub.",
            },
          ].map((item, i) => (
            <div key={i} className={`${cardGlass} hover:translate-y-0.5`}>
              <h3 className={`text-lg font-semibold ${accentTitle}`}>
                {item.title}
              </h3>
              <p className={`${smallText} mt-2 text-sm`}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como Funciona para Empresas */}
      <section
        className={
          "py-12 " +
          (darkLocal
            ? "bg-[#071815]"
            : "bg-emerald-50/60 border-t border-emerald-100")
        }
      >
        <h2 className={`text-3xl font-bold text-center ${accentTitle} mb-8`}>
          Como Funciona para Empresas
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-6">
          <div className={cardGlass}>
            <span className="text-xs font-semibold text-[#4ADE80]">
              Etapa 1
            </span>
            <h3 className="text-lg font-bold mt-1">Crie seu Perfil</h3>
            <p className={`${smallText} mt-3 text-sm`}>
              Cadastre sua empresa, defina sua atuação, valores, propósito e
              áreas em que busca talentos e parceiros.
            </p>
          </div>

          <div
            className={
              cardBase +
              " " +
              (darkLocal
                ? "bg-white/10 border-[#22C55E]"
                : "bg-white border-emerald-400")
            }
          >
            <span className="text-xs font-semibold text-[#4ADE80]">
              Etapa 2
            </span>
            <h3 className="text-lg font-bold mt-1">
              Conecte-se com Talentos
            </h3>
            <p className={`${smallText} mt-3 text-sm`}>
              Utilize filtros inteligentes para encontrar profissionais alinhados
              à sua cultura, projetos e desafios estratégicos.
            </p>
          </div>

          <div className={cardGlass}>
            <span className="text-xs font-semibold text-[#4ADE80]">
              Etapa 3
            </span>
            <h3 className="text-lg font-bold mt-1">Acompanhe Resultados</h3>
            <p className={`${smallText} mt-3 text-sm`}>
              Monitore engajamento, competências e evolução das conexões da sua
              empresa dentro do WorkWell e da GreenHub.
            </p>
          </div>
        </div>
      </section>

      {/* Sistema de Avaliação & Recompensas de Impacto */}
      <section className="py-12 max-w-6xl mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center ${accentTitle} mb-4`}>
          Índice de Impacto & Bem-Estar
        </h2>
        <p
          className={`${smallText} text-center max-w-3xl mx-auto mb-8 text-sm sm:text-base`}
        >
          As empresas que adotam práticas sustentáveis e cuidam de suas equipes
          ganham destaque na GreenHub. Criamos um sistema de avaliação que gera
          selos de impacto, visibilidade extra e confiança para talentos e
          parceiros.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className={cardGlass}>
            <h3 className={`text-lg font-semibold ${accentTitle}`}>
              Selo Empresa Verde
            </h3>
            <p className={`${smallText} mt-3 text-sm`}>
              Avaliação baseada em ações sustentáveis, uso responsável de
              recursos e participação em projetos de impacto ambiental.
            </p>
            <p className="mt-4 text-[11px] text-gray-400">
              Empresas com melhor score aparecem primeiro na busca da GreenHub.
            </p>
          </div>

          <div
            className={
              cardBase +
              " " +
              (darkLocal
                ? "bg-white/10 border-[#22C55E]"
                : "bg-white border-emerald-400")
            }
          >
            <h3 className={`text-lg font-semibold ${accentTitle}`}>
              Bem-Estar & Cultura
            </h3>
            <p className={`${smallText} mt-3 text-sm`}>
              Profissionais podem avaliar a experiência na empresa em critérios
              como respeito, inclusão, equilíbrio de vida e oportunidades de
              crescimento.
            </p>
            <p className="mt-4 text-[11px] text-gray-400">
              Bons índices fortalecem a marca empregadora e atraem mais
              talentos.
            </p>
          </div>

          <div className={cardGlass}>
            <h3 className={`text-lg font-semibold ${accentTitle}`}>
              Recompensas de Destaque
            </h3>
            <p className={`${smallText} mt-3 text-sm`}>
              Empresas com melhor desempenho ganham selos especiais no perfil e
              prioridade em recomendações para projetos e vagas.
            </p>
            <p className="mt-4 text-[11px] text-gray-400">
              Um diferencial competitivo para quem cuida do planeta e das
              pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center py-14 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#4ADE80]">
          Pronto para transformar sua empresa?
        </h2>
        <p
          className={`${heroText} max-w-2xl mx-auto mt-4 text-base sm:text-lg`}
        >
          Construa conexões, fortaleça sua marca e alcance um novo nível de
          impacto com o WorkWell e a GreenHub.
        </p>

        <button
          onClick={() => navigate("/cadastro-empresa")}
          className="mt-8 px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-[#22C55E] hover:bg-[#16A34A] transition shadow-md"
        >
          Criar Minha Conta Empresarial
        </button>
      </section>
    </div>
  );
}
