import React from "react";

export default function Footer() {
  return (
    <footer
      className="mt-auto w-full border-t border-[#A7F3D0] dark:border-[#14532D]
                 bg-[#ECFDF5] dark:bg-[#0F1E11] text-gray-700 dark:text-gray-300
                 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#15803D] dark:text-[#4ADE80]">Lifonix</h2>
          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            Conectando pessoas, competências e propósito por meio da tecnologia.
          </p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:text-[#22C55E] dark:hover:text-[#86EFAC] transition">Início</a>
          <a href="/sobre" className="hover:text-[#22C55E] dark:hover:text-[#86EFAC] transition">Sobre nós</a>
          <a href="#comunidade" className="hover:text-[#22C55E] dark:hover:text-[#86EFAC] transition">Comunidade</a>
          <a href="#contato" className="hover:text-[#22C55E] dark:hover:text-[#86EFAC] transition">Contato</a>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Lifonix. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
