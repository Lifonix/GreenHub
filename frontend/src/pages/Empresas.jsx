import React from "react";
import { useNavigate } from "react-router-dom";

export default function Empresas() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1A0D] via-[#112418] to-[#0B1A0D] text-white dark:text-gray-100 pt-10">
      {/* Botão Voltar */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium transition"
        >
          ← Voltar para Home
        </button>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 text-center py-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#4ADE80] drop-shadow-lg">
          Conecte Sua Empresa ao Futuro do Trabalho
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          A Lifonix oferece acesso aos melhores talentos, métricas inteligentes
          e um painel completo para gerenciar equipes e expandir seu impacto.
        </p>

        <button
          onClick={() => navigate("/cadastro-empresa")}
          className="mt-8 px-8 py-4 rounded-full bg-[#22C55E] hover:bg-[#16A34A] text-white text-lg font-semibold shadow-lg transition"
        >
          Cadastrar Minha Empresa
        </button>
      </section>

      {/* Benefícios */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center text-[#4ADE80] mb-10">
          Benefícios Para Sua Empresa
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              desc: "Crie sua própria página empresarial dentro da plataforma Lifonix.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-semibold text-[#4ADE80]">{item.title}</h3>
              <p className="text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Como Funciona para Empresas */}
      <section className="py-16 bg-gradient-to-r from-[#14532D]/40 to-[#0f2418]/40 backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-center text-[#4ADE80] mb-10">
          Como Funciona para Empresas
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
            <span className="text-sm font-semibold text-[#4ADE80]">Etapa 1</span>
            <h3 className="text-xl font-bold mt-1 text-white">Crie seu Perfil</h3>
            <p className="mt-3 text-gray-300 text-sm">
              Cadastre sua empresa, defina sua atuação, valores, propósito e áreas
              em que busca talentos e parceiros.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-[#22C55E]">
            <span className="text-sm font-semibold text-[#4ADE80]">Etapa 2</span>
            <h3 className="text-xl font-bold mt-1 text-white">Conecte-se com Talentos</h3>
            <p className="mt-3 text-gray-300 text-sm">
              Utilize filtros inteligentes para encontrar profissionais alinhados à
              sua cultura, projetos e desafios estratégicos.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
            <span className="text-sm font-semibold text-[#4ADE80]">Etapa 3</span>
            <h3 className="text-xl font-bold mt-1 text-white">Acompanhe Resultados</h3>
            <p className="mt-3 text-gray-300 text-sm">
              Monitore engajamento, competências e evolução das conexões da sua
              empresa dentro da Lifonix e da GreenHub.
            </p>
          </div>
        </div>
      </section>

      {/* Sistema de Avaliação & Recompensas de Impacto */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-[#4ADE80] mb-4">
          Índice de Impacto & Bem-Estar
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-10">
          As empresas que adotam práticas sustentáveis e cuidam de suas equipes
          ganham destaque na Lifonix. Criamos um sistema de avaliação que gera
          selos de impacto, visibilidade extra e confiança para talentos e parceiros.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-[#4ADE80]">
              Selo Empresa Verde
            </h3>
            <p className="mt-3 text-gray-300 text-sm">
              Avaliação baseada em ações sustentáveis, uso responsável de recursos
              e participação em projetos de impacto ambiental.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              Empresas com melhor score aparecem primeiro na busca da GreenHub.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/10 border border-[#22C55E] rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-[#4ADE80]">
              Bem-Estar & Cultura
            </h3>
            <p className="mt-3 text-gray-300 text-sm">
              Profissionais podem avaliar a experiência na empresa em critérios como
              respeito, inclusão, equilíbrio de vida e oportunidades de crescimento.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              Bons índices fortalecem a marca empregadora e atraem mais talentos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/10 border border-white/10 rounded-2xl p-6 shadow-xl">
            <h3 className="text-xl font-semibold text-[#4ADE80]">
              Recompensas de Destaque
            </h3>
            <p className="mt-3 text-gray-300 text-sm">
              Empresas com melhor desempenho ganham selos especiais no perfil e
              prioridade em recomendações para projetos e vagas.
            </p>
            <p className="mt-4 text-xs text-gray-400">
              Um diferencial competitivo para quem cuida do planeta e das pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-[#4ADE80] drop-shadow-lg">
          Pronto para transformar sua empresa?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Construa conexões, fortaleça sua marca e alcance um novo nível de impacto
          com a Lifonix e a GreenHub.
        </p>

        <button
          onClick={() => navigate("/cadastro-empresa")}
          className="mt-8 px-10 py-4 text-lg font-semibold rounded-full bg-[#22C55E] hover:bg-[#16A34A] transition shadow-lg"
        >
          Criar Minha Conta Empresarial
        </button>
      </section>
    </div>
  );
}
