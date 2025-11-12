// src/components/StoriesSection.jsx
import React from "react";

export default function StoriesSection() {
  const stories = [
    {
      nome: "Gabriela & Henrique",
      descricao:
        "Gabriela, designer, e Henrique, engenheiro de software, se conheceram pela Lifonix. Hoje, lideram juntos o projeto de UX inclusivo da plataforma.",
      foto: "https://i.pravatar.cc/150?img=47",
    },
    {
      nome: "Luciana & Pedro",
      descricao:
        "Luciana encontrou Pedro pela Lifonix e criou uma startup focada em IA Ética. A parceria nasceu de uma simples recomendação profissional.",
      foto: "https://i.pravatar.cc/150?img=12",
    },
    {
      nome: "Amanda & Tiago",
      descricao:
        "A conexão feita pela Lifonix levou Amanda e Tiago a desenvolver um app que ajuda comunidades a se prepararem para o mercado digital.",
      foto: "https://i.pravatar.cc/150?img=22",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#2563EB] mb-8">
          Histórias de Conexão
        </h2>
        <p className="text-gray-600 mb-10">
          Na Lifonix, conexões se transformam em oportunidades reais e
          transformadoras.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <img
                src={s.foto}
                alt={s.nome}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-800">{s.nome}</h3>
              <p className="text-sm text-gray-600 mt-3">{s.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
