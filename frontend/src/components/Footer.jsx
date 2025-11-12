import React from "react";

export default function Footer({ dark }) {
  return (
    <footer
      className={`w-full mt-auto py-8 border-t transition-colors ${
        dark
          ? "bg-[#102913] border-[#14532D] text-[#A7F3D0]"
          : "bg-[#ECFDF5] border-[#BBF7D0] text-[#14532D]"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-4">
        <div>
          <h2 className="text-2xl font-bold text-[#22C55E]">Lifonix</h2>
          <p className="text-sm opacity-80">
            Conectando pessoas, competências e propósitos por meio da tecnologia 🌿
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="/" className="hover:text-[#22C55E] transition">Início</a>
          <a href="/sobre" className="hover:text-[#22C55E] transition">Sobre</a>
          <a href="#contato" className="hover:text-[#22C55E] transition">Contato</a>
        </div>

        <p className="text-xs opacity-70">
          © {new Date().getFullYear()} Lifonix. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
