import React from "react";

export default function AboutPage({ dark }) {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center transition-colors ${
        dark ? "bg-[#0D1F10] text-[#BBF7D0]" : "bg-[#F0FDF4] text-[#14532D]"
      }`}
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }} // 👈 espaçamento superior e inferior
    >
      <div className="max-w-5xl mx-auto text-center px-6 space-y-10">
        {/* Título */}
        <h1 className="text-4xl font-bold text-[#22C55E]">Sobre a Lifonix</h1>

        {/* Descrição principal */}
        <p className="max-w-3xl mx-auto leading-relaxed text-lg opacity-90">
          A <strong>Lifonix</strong> é uma rede profissional voltada ao futuro do trabalho.
          Nosso propósito é conectar pessoas, competências e propósitos por meio da tecnologia,
          promovendo colaboração, aprendizado e inclusão. 🌿
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div
            className={`p-6 rounded-xl shadow-md border transition-colors ${
              dark
                ? "bg-[#14532D] border-[#166534] text-[#BBF7D0]"
                : "bg-white border-[#BBF7D0] text-[#14532D]"
            }`}
          >
            <h3 className="font-semibold text-xl text-[#166534] dark:text-[#86EFAC]">🌍 Missão</h3>
            <p className="text-sm opacity-90 mt-2">
              Construir conexões que inspirem profissionais a aprender, ensinar e crescer juntos.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl shadow-md border transition-colors ${
              dark
                ? "bg-[#14532D] border-[#166534] text-[#BBF7D0]"
                : "bg-white border-[#BBF7D0] text-[#14532D]"
            }`}
          >
            <h3 className="font-semibold text-xl text-[#166534] dark:text-[#86EFAC]">🚀 Visão</h3>
            <p className="text-sm opacity-90 mt-2">
              Ser a plataforma referência em conexões humanas e profissionais sustentáveis.
            </p>
          </div>

          <div
            className={`p-6 rounded-xl shadow-md border transition-colors ${
              dark
                ? "bg-[#14532D] border-[#166534] text-[#BBF7D0]"
                : "bg-white border-[#BBF7D0] text-[#14532D]"
            }`}
          >
            <h3 className="font-semibold text-xl text-[#166534] dark:text-[#86EFAC]">💚 Valores</h3>
            <p className="text-sm opacity-90 mt-2">
              Ética, colaboração, diversidade, aprendizado contínuo e empatia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
