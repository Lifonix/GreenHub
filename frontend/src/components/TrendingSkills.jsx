import React from "react";

export default function TrendingSkills() {
  const skills = [
    "Inteligência Artificial Ética",
    "Design de Experiência",
    "Gestão Colaborativa",
    "Sustentabilidade Digital",
    "Análise de Dados",
    "UX Research",
  ];

  return (
    <section className="py-16 bg-[#F0FDF4] dark:bg-[#0F1E11] border-t border-[#A7F3D0] dark:border-[#14532D]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#15803D] dark:text-[#4ADE80] mb-8">
          🌱 Competências em Alta
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-5 py-2 bg-[#DCFCE7] dark:bg-[#14532D] text-[#15803D] dark:text-[#86EFAC]
                         rounded-full font-medium text-sm shadow-sm hover:scale-110 hover:shadow-md 
                         transition-transform duration-300 cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
          Estas são as habilidades mais buscadas no mercado do futuro, 
          impulsionadas por tecnologia, empatia e propósito.
        </p>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s forwards;
        }
      `}</style>
    </section>
  );
}
