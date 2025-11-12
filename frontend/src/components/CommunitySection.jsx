import React from "react";

export default function CommunityMetrics({ dark }) {
  return (
    <section
      className={`w-full py-16 transition-colors ${
        dark ? "bg-[#102913] text-[#BBF7D0]" : "bg-[#D1FAE5] text-[#166534]"
      }`}
    >
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-6">
          A Comunidade Lifonix em Números 🌱
        </h2>
        <p className="text-sm mb-10 max-w-2xl mx-auto opacity-80">
          A Lifonix conecta pessoas, competências e propósitos por meio da tecnologia —
          cultivando um ecossistema de aprendizado e colaboração.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#22C55E] dark:text-[#4ADE80]">
              +5.000
            </span>
            <p className="text-sm opacity-80 mt-2">Profissionais Conectados</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#22C55E] dark:text-[#4ADE80]">
              +1.200
            </span>
            <p className="text-sm opacity-80 mt-2">Projetos Colaborativos</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold text-[#22C55E] dark:text-[#4ADE80]">
              +300
            </span>
            <p className="text-sm opacity-80 mt-2">Cidades Representadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
