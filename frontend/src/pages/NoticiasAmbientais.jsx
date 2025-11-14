// src/pages/NoticiasAmbientais.jsx
import React from "react";

const newsItems = [
  {
    id: 1,
    tag: "Energia Limpa",
    title: "Cidade brasileira zera consumo de energia fóssil em prédios públicos",
    summary:
      "Projeto integrado de energia solar em escolas e hospitais reduz em 85% as emissões de CO₂ e serve de modelo para outras regiões.",
    date: "12 nov 2025",
    source: "Programa Cidades Sustentáveis",
    link: "#",
  },
  {
    id: 2,
    tag: "Tecnologia Verde",
    title: "Startup transforma resíduos orgânicos em energia para comunidades rurais",
    summary:
      "Sistema de biodigestores modulares gera biogás e biofertilizante, levando autonomia energética e renda extra para pequenos produtores.",
    date: "10 nov 2025",
    source: "GreenTech Brasil",
    link: "#",
  },
  {
    id: 3,
    tag: "Reflorestamento",
    title: "Iniciativa de reflorestamento conecta empresas e comunidades locais",
    summary:
      "Plataforma digital permite que empresas compensem emissões financiando projetos de restauração ecológica com monitoramento em tempo real.",
    date: "08 nov 2025",
    source: "Coalizão pelo Clima",
    link: "#",
  },
  {
    id: 4,
    tag: "Economia Circular",
    title: "Indústria adota modelo circular e reduz em 60% o descarte de resíduos",
    summary:
      "Parceria entre governo e setor privado cria cadeias de reaproveitamento de materiais, reduzindo custos e impactos ambientais.",
    date: "05 nov 2025",
    source: "Observatório da Indústria Sustentável",
    link: "#",
  },
  {
    id: 5,
    tag: "Inovação",
    title: "Novas soluções de green tech aceleram a transição climática",
    summary:
      "Tecnologias de captura de carbono, mobilidade elétrica e agricultura regenerativa ganham escala e atraem grandes investimentos globais.",
    date: "01 nov 2025",
    source: "Painel Global de Inovação Climática",
    link: "#",
  },
];

export default function NoticiasAmbientais() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#052e16] via-[#022c22] to-black text-gray-100">
      {/* Hero / Cabeçalho da página */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-300 text-xs uppercase tracking-widest">
          GreenHub • Lifonix
        </span>

        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-emerald-300">
          Portal de Notícias Ambientais
        </h1>

        <p className="mt-3 text-sm sm:text-base text-emerald-100/80 max-w-2xl">
          Acompanhe ações reais a favor do meio ambiente, inovação em tecnologia verde
          e iniciativas que estão construindo um futuro mais sustentável.
        </p>

        <p className="mt-2 text-xs text-emerald-200/70">
          Conteúdos inspirados em fontes de jornalismo ambiental e sustentabilidade global.
        </p>
      </section>

      {/* Layout principal */}
      <section className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna principal – lista de notícias */}
        <div className="lg:col-span-2 space-y-5">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl border border-emerald-700/50 bg-emerald-950/40 backdrop-blur-sm p-5 hover:border-emerald-400/80 hover:bg-emerald-950/70 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-emerald-200/80">
                <span className="px-2.5 py-1 rounded-full bg-emerald-900/80 text-emerald-200">
                  {item.tag}
                </span>
                <span className="opacity-80">{item.date} • {item.source}</span>
              </div>

              <h2 className="mt-3 text-lg sm:text-xl font-semibold text-emerald-100 group-hover:text-emerald-300 transition-colors">
                {item.title}
              </h2>

              <p className="mt-2 text-sm text-emerald-100/80">
                {item.summary}
              </p>

              <div className="mt-4 flex items-center justify-between text-xs sm:text-sm">
                <button className="text-emerald-300 hover:text-emerald-200 underline underline-offset-4 decoration-emerald-500/70">
                  Ler mais
                </button>
                <span className="text-emerald-200/70">
                  Impacto positivo para clima e sociedade
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Coluna lateral – destaques / contexto */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-emerald-700/60 bg-emerald-950/40 p-5">
            <h3 className="text-sm font-semibold text-emerald-200">
              Sobre este portal
            </h3>
            <p className="mt-2 text-xs text-emerald-100/80">
              O Portal de Notícias Ambientais GreenHub by Lifonix reúne histórias,
              projetos e tecnologias que mostram como pessoas, empresas e governos
              estão agindo em prol do meio ambiente.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-700/60 bg-emerald-950/40 p-5">
            <h3 className="text-sm font-semibold text-emerald-200">
              Temas em destaque
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-emerald-100/85">
              <li>• Energia limpa e transição energética</li>
              <li>• Cidades inteligentes e sustentáveis</li>
              <li>• Startups de tecnologia verde</li>
              <li>• Reflorestamento e proteção de biomas</li>
              <li>• Economia circular e redução de resíduos</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-emerald-700/60 bg-emerald-950/40 p-5">
            <h3 className="text-sm font-semibold text-emerald-200">
              Inspiração para a GreenHub
            </h3>
            <p className="mt-2 text-xs text-emerald-100/80">
              Use estas notícias como referência para conectar empresas, pessoas
              e projetos dentro do seu ecossistema GreenHub e da plataforma Lifonix.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
