import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();

  const metrics = [
    { number: "12k+", label: "Profissionais Cadastrados" },
    { number: "3.5k+", label: "Conexões Criadas" },
    { number: "480+", label: "Projetos Colaborativos" },
    { number: "98%", label: "Satisfação da Comunidade" },
  ];

  return (
    <div className="bg-white dark:bg-[#0B1A0D] text-gray-900 dark:text-gray-100 transition-colors duration-500 flex flex-col min-h-screen">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#15803D] dark:text-[#4ADE80]">
          Sobre a Lifonix 🌱
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
          Conectamos pessoas, competências e propósito por meio da tecnologia, promovendo um futuro do trabalho inclusivo, colaborativo e inovador.
        </p>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="bg-[#DCFCE7] dark:bg-[#14532D] py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {["Missão", "Visão", "Valores"].map((title, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white dark:bg-[#1B2E1D] shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <h2 className="text-xl font-bold text-[#15803D] dark:text-[#4ADE80] mb-2">{title}</h2>
              <p className="text-gray-700 dark:text-gray-200">
                {title === "Missão" && "Promover a conexão entre pessoas e ideias para gerar impacto social positivo através da tecnologia."}
                {title === "Visão" && "Ser referência em inovação e colaboração, impulsionando o futuro do trabalho sustentável e inclusivo."}
                {title === "Valores" && "Inovação, sustentabilidade, colaboração, ética, inclusão e propósito."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Destaques / Impacto */}
      <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-[#15803D] dark:text-[#4ADE80] mb-4">
            Nosso Impacto 🌿
          </h2>
          <p className="text-gray-700 dark:text-gray-200 mb-4">
            A Lifonix conecta profissionais, cria projetos colaborativos e impulsiona carreiras no futuro do trabalho.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1B2E1D] p-4 rounded-xl shadow-md transition-transform duration-300 transform hover:scale-105 text-center"
              >
                <div className="text-2xl font-bold text-[#16A34A] dark:text-[#4ADE80]">{m.number}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
            alt="Impacto da Lifonix"
            className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      {/* Galeria de imagens */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-[#15803D] dark:text-[#4ADE80] mb-8">
          Nossa Comunidade em Ação 📸
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Galeria ${i + 1}`}
              className="rounded-xl shadow-lg w-full h-48 object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
            />
          ))}
        </div>
      </section>

      {/* Botão voltar para Home */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#22C55E] dark:bg-[#4ADE80] text-white dark:text-black font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          🏠 Voltar para a Home
        </button>
      </section>

      {/* Footer simplificado */}
      <footer className="mt-auto border-t border-[#A7F3D0] dark:border-[#14532D] py-4 text-center text-xs text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Lifonix. Todos os direitos reservados.
      </footer>
    </div>
  );
}
