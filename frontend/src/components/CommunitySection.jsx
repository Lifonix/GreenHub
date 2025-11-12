// src/components/CommunityStats.jsx
import React from "react";

export default function CommunityStats() {
  const stats = [
    { numero: "+60", titulo: "Profissionais cadastrados" },
    { numero: "+20", titulo: "Áreas de atuação" },
    { numero: "+100", titulo: "Conexões realizadas" },
    { numero: "+15", titulo: "Projetos colaborativos" },
  ];

  return (
    <section className="bg-[#E8F1FF] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-[#2563EB] mb-10">
          Nossa Comunidade em Números
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i}>
              <h3 className="text-4xl font-extrabold text-[#2563EB]">
                {s.numero}
              </h3>
              <p className="text-gray-700 mt-2 text-sm">{s.titulo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
