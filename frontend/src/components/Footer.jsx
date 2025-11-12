// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#60A5FA]/10 to-[#2563EB]/10 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo e descrição */}
        <div>
          <h2 className="text-2xl font-bold text-[#2563EB] mb-2">Lifonix</h2>
          <p className="text-gray-600 text-sm">
            Conectando pessoas, competências e propósito através da tecnologia.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Explorar</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#" className="hover:text-[#2563EB] transition">Início</a></li>
            <li><a href="#profissionais" className="hover:text-[#2563EB] transition">Profissionais</a></li>
            <li><a href="#sobre" className="hover:text-[#2563EB] transition">Sobre</a></li>
            <li><a href="#" className="hover:text-[#2563EB] transition">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Fale Conosco</h3>
          <p className="text-gray-600 text-sm">contato@lifonix.com</p>
          <p className="text-gray-600 text-sm">São Paulo, Brasil</p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lifonix. Todos os direitos reservados.
      </div>
    </footer>
  );
}
