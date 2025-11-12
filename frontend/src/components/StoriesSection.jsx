import React from "react";

export default function StoriesSection() {
  const stories = [
    {
      nome: "Mariana Souza",
      historia:
        "Encontrei meu parceiro de projeto na Lifonix e juntos criamos uma startup de impacto social.",
      cidade: "Curitiba/PR",
      imagem: "https://i.pravatar.cc/150?img=32",
    },
    {
      nome: "Lucas Andrade",
      historia:
        "Recebi minha primeira recomendação profissional aqui e consegui uma vaga remota em tecnologia verde!",
      cidade: "Belo Horizonte/MG",
      imagem: "https://i.pravatar.cc/150?img=56",
    },
    {
      nome: "Ana Clara Torres",
      historia:
        "A Lifonix me conectou com pessoas incríveis que compartilham os mesmos valores sobre o futuro do trabalho.",
      cidade: "São Paulo/SP",
      imagem: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <section
      id="historias"
      className="py-20 bg-[#F0FDF4] dark:bg-[#0F1E11] border-t border-[#A7F3D0] dark:border-[#14532D] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#15803D] dark:text-[#4ADE80] mb-12">
          💚 Histórias de Conexão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div
              key={i}
              className="p-6 bg-white dark:bg-[#1B2E1D] border border-[#A7F3D0] dark:border-[#14532D]
                         rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 text-left flex flex-col items-center"
            >
              <img
                src={story.imagem}
                alt={story.nome}
                className="w-20 h-20 rounded-full mb-4 border-2 border-[#15803D] dark:border-[#4ADE80]"
              />
              <p className="text-gray-700 dark:text-gray-200 italic mb-4 text-center">
                “{story.historia}”
              </p>
              <h3 className="font-semibold text-[#15803D] dark:text-[#4ADE80]">{story.nome}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{story.cidade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
