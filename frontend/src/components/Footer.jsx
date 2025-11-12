import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#E5F0FF] text-gray-700 py-8 mt-auto border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-xl font-semibold text-[#2563EB] mb-2">Lifonix</h3>
        <p className="text-sm text-gray-600 mb-4">
          Conectando pessoas, competências e propósito por meio da tecnologia.
        </p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-[#2563EB]">Sobre</a>
          <a href="#" className="hover:text-[#2563EB]">Termos</a>
          <a href="#" className="hover:text-[#2563EB]">Privacidade</a>
        </div>
        <p className="text-xs text-gray-500">
          © 2025 Lifonix — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
