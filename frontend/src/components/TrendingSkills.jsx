// src/components/TrendingSkills.jsx
import React from "react";

export default function TrendingSkills() {
  const skills = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2563EB" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      ),
      titulo: "Inteligência Artificial",
      descricao: "Automação e aprendizado de máquina moldando o futuro do trabalho.",
      nivel: 92,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2563EB" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18m-9 6h9" />
        </svg>
      ),
      titulo: "Desenvolvimento Web",
      descricao: "Frameworks modernos impulsionam a transformação digital.",
      nivel: 88,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2563EB" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5L19.5 4.5M4.5 4.5l15 15" />
        </svg>
      ),
      titulo: "Cloud Computing",
      descricao: "Infraestrutura escalável e acessível para inovação contínua.",
      nivel: 84,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#2563EB" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75l3.75-3.75L12 8.25m0 0L8.25 12l3.75 3.75m0-7.5v7.5" />
        </svg>
      ),
      titulo: "Cibersegurança",
      descricao: "Proteção de dados e privacidade no centro da confiança digital.",
      nivel: 79,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-3xl font-bold text-[#2563EB] mb-4">
        Competências em Alta
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        As habilidades mais valorizadas no mercado estão evoluindo. A Lifonix conecta talentos às tendências do futuro.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              {skill.icon}
              <h3 className="font-semibold text-gray-800 text-lg">{skill.titulo}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">{skill.descricao}</p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div
                className="bg-[#60A5FA] h-2 rounded-full"
                style={{ width: `${skill.nivel}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">{skill.nivel}% em alta</p>
          </div>
        ))}
      </div>
    </section>
  );
}
