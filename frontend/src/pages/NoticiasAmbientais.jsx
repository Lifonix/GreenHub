// src/pages/NoticiasAmbientais.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const allNews = [
  {
    id: 1,
    tag: "Energia limpa",
    category: "energia",
    title: "Cidade brasileira zera consumo de energia fóssil em prédios públicos",
    summary:
      "Programa de energia solar em escolas e hospitais reduz emissões de CO₂ e se torna referência em políticas públicas sustentáveis.",
    date: "12 nov 2025",
    source: "Programa Cidades Sustentáveis",
    featured: true,
    image:
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 2,
    tag: "Tecnologia verde",
    category: "tecnologia",
    title: "Startup transforma resíduos orgânicos em energia para comunidades rurais",
    summary:
      "Biodigestores modulares geram biogás e biofertilizante, garantindo autonomia energética e renda para pequenos produtores.",
    date: "10 nov 2025",
    source: "GreenTech Brasil",
    image:
      "https://images.pexels.com/photos/3738681/pexels-photo-3738681.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 3,
    tag: "Reflorestamento",
    category: "natureza",
    title: "Plataforma conecta empresas e comunidades em projetos de reflorestamento",
    summary:
      "Empresas financiam restauração ecológica com monitoramento por satélite e relatórios transparentes de impacto.",
    date: "08 nov 2025",
    source: "Coalizão pelo Clima",
    image:
      "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 4,
    tag: "Economia circular",
    category: "economia",
    title: "Indústria reduz em 60% o descarte com modelo de economia circular",
    summary:
      "Novas cadeias de reaproveitamento de materiais reduzem custos, resíduos e emissões em grandes indústrias.",
    date: "05 nov 2025",
    source: "Observatório da Indústria Sustentável",
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 5,
    tag: "Inovação",
    category: "tecnologia",
    title: "Soluções de green tech aceleram a transição climática",
    summary:
      "Novas tecnologias de captura de carbono, mobilidade elétrica e agricultura regenerativa ganham escala global.",
    date: "01 nov 2025",
    source: "Painel Global de Inovação Climática",
    image:
      "https://images.pexels.com/photos/34092/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 6,
    tag: "Cidades inteligentes",
    category: "cidades",
    title: "Plano de mobilidade prioriza transporte limpo e ciclovias",
    summary:
      "Municípios adotam modais de baixo carbono, ciclovias integradas e incentivos para transporte coletivo sustentável.",
    date: "30 out 2025",
    source: "Rede Cidades Inteligentes",
    image:
      "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 7,
    tag: "Agricultura regenerativa",
    category: "natureza",
    title: "Produtores adotam práticas regenerativas e aumentam produtividade",
    summary:
      "Uso de cobertura vegetal, rotação de culturas e manejo do solo melhora a qualidade ambiental e a renda do campo.",
    date: "27 out 2025",
    source: "Aliança pela Agricultura Regenerativa",
    image:
      "https://images.pexels.com/photos/916406/pexels-photo-916406.jpeg",
  },
  {
    id: 8,
    tag: "Oceano & plásticos",
    category: "natureza",
    title: "Projeto remove toneladas de plástico de rios antes de chegarem ao mar",
    summary:
      "Barreiras inteligentes capturam resíduos em grandes rios, evitando poluição costeira e impactos na vida marinha.",
    date: "22 out 2025",
    source: "Instituto Oceanos Vivos",
    image:
      "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: 9,
    tag: "Educação ambiental",
    category: "cidades",
    title: "Escolas adotam currículo focado em clima e sustentabilidade",
    summary:
      "Estudantes participam de projetos práticos, hortas urbanas e iniciativas de redução de resíduos em suas comunidades.",
    date: "18 out 2025",
    source: "Rede Educação para o Futuro",
    image:
      "https://images.pexels.com/photos/3184641/pexels-photo-3184641.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export default function NoticiasAmbientais() {
  const [category, setCategory] = useState("todas");
  const navigate = useNavigate();

  const featured = allNews.find((n) => n.featured) || allNews[0];
  const filtered = allNews.filter((n) =>
    category === "todas" ? n.id !== featured.id : n.category === category && n.id !== featured.id
  );

  return (
    // Fundo quase preto, igual às páginas principais
    <div className="min-h-screen bg-[#020d06] text-gray-100">
      {/* Faixa hero com verde mais fechado e imagem ao fundo */}
      <section className="relative overflow-hidden bg-[#064e3b]">
        <div className="absolute inset-0 opacity-25">
          <img
            src={featured.image}
            alt={featured.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#064e3b]/90 to-[#022c22]/95" />

        <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-14 flex flex-col lg:flex-row items-start lg:items-center gap-10">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0f3b24] text-emerald-300 text-xs uppercase tracking-widest">
              GreenHub • Lifonix
            </span>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4ade80] leading-tight">
              Portal de Notícias Ambientais
            </h1>

            <p className="mt-3 text-sm sm:text-base text-emerald-100/85 max-w-xl">
              Um hub de conteúdos sobre ações reais a favor do meio ambiente,
              tecnologia verde e iniciativas que estão modelando o futuro do
              trabalho sustentável.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-emerald-100/80">
              <span className="px-3 py-1 rounded-full bg-[#22c55e] text-emerald-950 font-medium">
                Destaque: {featured.tag}
              </span>
              <span>
                {featured.date} • {featured.source}
              </span>
            </div>

            {/* Botão voltar para Home, seguindo o estilo dos botões da sua UI */}
            <div className="mt-6">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22c55e] text-emerald-50 text-xs sm:text-sm hover:bg-[#22c55e] hover:text-emerald-950 transition"
              >
                <span>←</span>
                <span>Voltar para a Home</span>
              </button>
            </div>
          </div>

          {/* Card mini do destaque no hero */}
          <div className="w-full lg:w-80">
            <div className="rounded-2xl border border-[#15803d] bg-[#022012] backdrop-blur-md overflow-hidden shadow-lg shadow-black/50">
              <div className="relative h-32">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-emerald-50">
                  {featured.title}
                </h2>
                <p className="mt-2 text-xs text-emerald-100/80 line-clamp-3">
                  {featured.summary}
                </p>
                <button className="mt-3 w-full px-3 py-2 rounded-full bg-[#22c55e] text-emerald-950 text-xs font-semibold hover:bg-[#16a34a] transition">
                  Ler reportagem completa
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faixa de conteúdo em fundo escuro, como na seção “Nosso Impacto” da imagem */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna esquerda: filtros + lista */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filtros por categoria em chips verdes escuros */}
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            {[
              { id: "todas", label: "Todas" },
              { id: "energia", label: "Energia limpa" },
              { id: "tecnologia", label: "Tecnologia verde" },
              { id: "natureza", label: "Natureza & florestas" },
              { id: "economia", label: "Economia circular" },
              { id: "cidades", label: "Cidades inteligentes" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-3 py-1 rounded-full border text-xs sm:text-sm transition ${
                  category === cat.id
                    ? "bg-[#22c55e] text-emerald-950 border-[#22c55e]"
                    : "border-[#15803d] text-emerald-100 hover:bg-[#064e3b]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid de notícias em cards parecidos com os blocos de “Missão / Visão / Valores” */}
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl overflow-hidden border border-[#0f3b24] bg-[#022012] hover:border-[#22c55e] transition-colors shadow-md shadow-black/40"
              >
                <div className="relative h-40">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-[11px]">
                    <span className="px-2 py-1 rounded-full bg-[#22c55e] text-emerald-950 font-semibold">
                      {item.tag}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-black/60 text-emerald-100">
                      {item.date}
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-emerald-50 group-hover:text-[#4ade80] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-100/80 line-clamp-3">
                    {item.summary}
                  </p>

                  <div className="mt-3 flex items-center justify-between text-[11px] sm:text-xs text-emerald-100/80">
                    <button className="text-[#4ade80] hover:text-emerald-200 underline underline-offset-4 decoration-[#22c55e]">
                      Ler mais
                    </button>
                    <span className="text-emerald-200/70">
                      {item.source}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Coluna direita: sidebar em blocos verdes escuros */}
        <aside className="space-y-6">
          <div className="rounded-2xl border border-[#0f3b24] bg-[#022012] p-5">
            <h3 className="text-sm font-semibold text-[#4ade80]">
              Sobre o portal
            </h3>
            <p className="mt-2 text-xs text-emerald-100/80">
              O Portal de Notícias Ambientais GreenHub by Lifonix reúne histórias,
              projetos e tecnologias que conectam empresas, profissionais e
              comunidades em prol da transição ecológica.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0f3b24] bg-[#022012] p-5">
            <h3 className="text-sm font-semibold text-[#4ade80]">
              Temas em destaque
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-emerald-100/85">
              <li>• Transição energética e descarbonização</li>
              <li>• Startups e inovação em tecnologia verde</li>
              <li>• Projetos de reflorestamento e proteção de biomas</li>
              <li>• Economia circular e redução de resíduos</li>
              <li>• Cidades inteligentes e mobilidade sustentável</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#0f3b24] bg-[#022012] p-5">
            <h3 className="text-sm font-semibold text-[#4ade80]">
              Conecte com a Lifonix
            </h3>
            <p className="mt-2 text-xs text-emerald-100/80">
              Use este portal como inspiração para criar desafios, projetos e
              oportunidades dentro da plataforma, conectando talentos com
              empresas e iniciativas de impacto positivo.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
