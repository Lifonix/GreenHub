import React from "react";

export default function CommunityMetrics() {
  const metrics = [
    { number: "12k+", label: "Profissionais Cadastrados" },
    { number: "3.5k+", label: "Conexões Criadas" },
    { number: "480+", label: "Projetos Colaborativos" },
    { number: "98%", label: "Satisfação da Comunidade" },
  ];

  return (
    <section
      id="comunidade"
      className="py-20 bg-white dark:bg-[#0B1A0D] text-gray-800 dark:text-gray-100 transition-colors border-t border-[#A7F3D0] dark:border-[#14532D]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#15803D] dark:text-[#4ADE80] mb-10">
          🌿 Métricas da Comunidade
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-[#ECFDF5] dark:bg-[#14532D]/30 border border-[#A7F3D0] dark:border-[#14532D]
                         shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-3xl font-bold text-[#16A34A] dark:text-[#4ADE80]">{m.number}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
