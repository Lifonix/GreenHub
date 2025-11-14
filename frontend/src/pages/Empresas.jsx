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
          e um painel completo para gerenciar funcionários e expandir seu impacto.
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
              desc: "Encontre profissionais qualificados, filtrados por propósito, área e especialização."
            },
            {
              title: "Painel Corporativo",
              desc: "Gerencie equipes, acompanhe habilidades e receba recomendações inteligentes."
            },
            {
              title: "Visibilidade da Marca",
              desc: "Destaque sua empresa como líder em inovação e sustentabilidade."
            },
            {
              title: "Relatórios Inteligentes",
              desc: "Relatórios automáticos sobre desempenho, talentos e tendências."
            },
            {
              title: "Contratações Ágeis",
              desc: "Ferramentas modernas para entrevistar, analisar e contratar rápido."
            },
            {
              title: "Ambiente Personalizado",
              desc: "Crie sua própria página empresarial dentro da plataforma."
            }
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

      {/* Seção Premium / Planos */}
      <section className="py-16 bg-gradient-to-r from-[#14532D]/40 to-[#0f2418]/40 backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-center text-[#4ADE80] mb-10">
          Planos Corporativos
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

          {/* Plano Básico */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
            <h3 className="text-xl font-bold text-[#4ADE80]">Básico</h3>
            <p className="mt-2 text-gray-300">Ideal para pequenas empresas</p>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li>✔ Cadastro de 5 funcionários</li>
              <li>✔ Página empresarial simples</li>
              <li>✔ Acesso básico a talentos</li>
            </ul>
            <button className="mt-6 w-full py-2 bg-[#22C55E] hover:bg-[#16A34A] rounded-full text-white font-semibold">
              Escolher
            </button>
          </div>

          {/* Plano Profissional */}
          <div className="bg-[#22C55E] p-8 rounded-2xl shadow-xl border-2 border-[#4ADE80] scale-[1.05]">
            <h3 className="text-xl font-bold text-white">Profissional</h3>
            <p className="mt-2 text-white/90">Para empresas em crescimento</p>
            <ul className="mt-4 space-y-2 text-white">
              <li>✔ Cadastro de 20 funcionários</li>
              <li>✔ Página empresarial completa</li>
              <li>✔ Filtros avançados de talentos</li>
              <li>✔ Relatórios corporativos</li>
            </ul>
            <button className="mt-6 w-full py-2 bg-white text-[#15803D] hover:bg-gray-200 rounded-full font-semibold">
              Escolher
            </button>
          </div>

          {/* Plano Enterprise */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
            <h3 className="text-xl font-bold text-[#4ADE80]">Enterprise</h3>
            <p className="mt-2 text-gray-300">Para grandes empresas</p>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li>✔ Funcionários ilimitados</li>
              <li>✔ Página premium com branding</li>
              <li>✔ Inteligência avançada</li>
              <li>✔ Suporte dedicado</li>
            </ul>
            <button className="mt-6 w-full py-2 bg-[#22C55E] hover:bg-[#16A34A] rounded-full text-white font-semibold">
              Escolher
            </button>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-[#4ADE80] drop-shadow-lg">
          Pronto para transformar sua empresa?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg">
          Construa conexões, fortaleça sua marca e encontre talentos ideais para o seu negócio.
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
