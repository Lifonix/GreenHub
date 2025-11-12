// src/components/TrendingSkills.jsx
import React from "react";

export default function TrendingSkills() {
  const skills = [
    { skill: "Inteligência Artificial", percent: 35 },
    { skill: "UX Design", percent: 25 },
    { skill: "Cybersegurança", percent: 20 },
    { skill: "Cloud Computing", percent: 20 },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-[#2563EB] mb-8">
        Competências em Alta
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        A Lifonix acompanha as habilidades mais buscadas do mercado e ajuda
        profissionais a desenvolverem competências essenciais para o futuro.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((s, i) => (
          <div
            key={i}
            className="p-6 bg-white shadow-md rounded-xl border border-gray-100 hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-gray-800">{s.skill}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
              <div
                className="bg-[#60A5FA] h-2.5 rounded-full"
                style={{ width: `${s.percent}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">{s.percent}% em alta</p>
          </div>
        ))}
      </div>
    </section>
  );
}
