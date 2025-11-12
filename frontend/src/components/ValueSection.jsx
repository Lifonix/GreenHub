// src/components/ValuesSection.jsx
import React from "react";

export default function ValuesSection() {
  const valores = [
    {
      titulo: "Sustentabilidade Digital",
      desc: "Criamos soluções tecnológicas que respeitam o meio ambiente e as pessoas.",
    },
    {
      titulo: "Inclusão e Diversidade",
      desc: "Promovemos a colaboração entre profissionais de diferentes contextos e culturas.",
    },
    {
      titulo: "Inovação Humana",
      desc: "Usamos a tecnologia como ponte para o desenvolvimento humano e profissional.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <h2 className="text-2xl font-bold text-[#2563EB] mb-8">
        Nossos Valores
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {valores.map((v, i) => (
          <div
            key={i}
            className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-gray-800 mb-2">{v.titulo}</h3>
            <p className="text-gray-600 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
