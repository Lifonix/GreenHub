import React from "react";

export default function StoriesSection() {
  const stories = [
    {
      nome: "Gabriela Souza",
      foto: "https://i.pravatar.cc/150?img=66",
      relato:
        "Encontrei oportunidades alinhadas ao meu propósito. Hoje atuo em projetos que geram impacto positivo.",
    },
    {
      nome: "Henrique Lopes",
      foto: "https://i.pravatar.cc/150?img=67",
      relato:
        "A Lifonix me conectou com talentos incríveis. Transformei ideias em soluções sustentáveis.",
    },
    {
      nome: "Juliana Ribeiro",
      foto: "https://i.pravatar.cc/150?img=49",
      relato:
        "Aqui encontrei uma comunidade colaborativa que valoriza empatia e inovação.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#0C1A0C] border-t border-[#D1FAE5] dark:border-[#14532D] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#166534] dark:text-[#4ADE80] mb-3">
          Histórias de Conexão
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Pessoas que encontraram propósito e colaboração dentro da rede Lifonix.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, i) => (
            <div
              key={i}
              className="bg-[#F1F9F1] dark:bg-[#1B2E1D] border border-[#D1FAE5] dark:border-[#14532D]
                         rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={story.foto}
                alt={story.nome}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-[#22C55E]"
              />
              <h3 className="font-semibold text-[#166534] dark:text-[#4ADE80]">
                {story.nome}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-3 italic leading-relaxed">
                “{story.relato}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
