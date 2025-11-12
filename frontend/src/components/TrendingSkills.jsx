import React from "react";

export default function TrendingSkills() {
  const skills = [
    { nome: "IA e Machine Learning", nivel: 95 },
    { nome: "Desenvolvimento Web", nivel: 90 },
    { nome: "UX/UI Design", nivel: 88 },
    { nome: "Cloud Computing", nivel: 86 },
    { nome: "Cibersegurança", nivel: 83 },
    { nome: "Análise de Dados", nivel: 87 },
  ];

  return (
    <section className="py-20 bg-[#F1F9F1] dark:bg-[#102312] transition-colors duration-300 border-t border-[#D1FAE5] dark:border-[#14532D]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#166534] dark:text-[#4ADE80] mb-3">
          Competências em Alta
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          As habilidades mais valorizadas no mercado do futuro, impulsionadas pela tecnologia e pela colaboração.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#1B2E1D] border border-[#D1FAE5] dark:border-[#14532D] rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-[#166534] dark:text-[#4ADE80] mb-3">
                {skill.nome}
              </h3>
              <div className="w-full bg-gray-200 dark:bg-[#14532D] h-2 rounded-full">
                <div
                  className="bg-[#22C55E] h-2 rounded-full transition-all"
                  style={{ width: `${skill.nivel}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {skill.nivel}% em alta
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
