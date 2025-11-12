import React, { useEffect, useState } from "react";

export default function CommunityMetrics() {
  const metrics = [
    { number: 12000, label: "Profissionais Cadastrados", emoji: "👤" },
    { number: 3500, label: "Conexões Criadas", emoji: "🤝" },
    { number: 480, label: "Projetos Colaborativos", emoji: "📁" },
    { number: 98, label: "Satisfação da Comunidade", emoji: "😊" },
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((val, i) => {
          const target = metrics[i].number;
          const increment = Math.ceil(target / 100);
          return val < target ? Math.min(val + increment, target) : val;
        })
      );
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="comunidade"
      className="py-20 bg-white dark:bg-[#0B1A0D] text-gray-800 dark:text-gray-100 transition-colors border-t border-[#A7F3D0] dark:border-[#14532D]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#15803D] dark:text-[#4ADE80] mb-12">
          🌿 Métricas da Comunidade
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#ECFDF5] dark:bg-[#14532D]/30 border border-[#A7F3D0] dark:border-[#14532D]
                         shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center gap-3"
            >
              <div className="text-5xl">{m.emoji}</div>
              <h3 className="text-3xl font-bold text-[#16A34A] dark:text-[#4ADE80]">
                {counts[i].toLocaleString()} {m.label === "Satisfação da Comunidade" ? "%" : "+"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
