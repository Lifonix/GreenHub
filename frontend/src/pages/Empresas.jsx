import React from "react";

export default function Empresas() {
  return (
    <div className="bg-white dark:bg-[#0B1A0D] text-gray-900 dark:text-gray-100
                    min-h-screen pt-24 px-6 pb-16 transition">

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#15803D] dark:text-[#4ADE80]">
          Soluções para Empresas
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A Lifonix ajuda organizações a encontrarem talentos qualificados,
          gerenciarem equipes e promoverem um ambiente de trabalho mais humano,
          sustentável e inovador.
        </p>
      </div>

      {/* Benefícios */}
      <div className="max-w-5xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="p-6 rounded-2xl border bg-[#F0FDF4] dark:bg-[#14532D]
                        border-[#A7F3D0] dark:border-[#144D27] shadow-sm">
          <h3 className="text-xl font-semibold text-[#166534] dark:text-[#4ADE80]">
            Cadastro de Empresas
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Registre sua instituição e gerencie dados e vagas diretamente pela plataforma.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-[#F0FDF4] dark:bg-[#14532D]
                        border-[#A7F3D0] shadow-sm">
          <h3 className="text-xl font-semibold text-[#166534] dark:text-[#4ADE80]">
            Busca Avançada de Talentos
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Encontre profissionais por habilidades, experiência, região e senioridade.
          </p>
        </div>

        <div className="p-6 rounded-2xl border bg-[#F0FDF4] dark:bg-[#14532D]
                        border-[#A7F3D0] shadow-sm">
          <h3 className="text-xl font-semibold text-[#166534] dark:text-[#4ADE80]">
            Gestão de Equipes
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Organize, visualize e acompanhe o desenvolvimento dos colaboradores.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <h2 className="text-2xl font-bold text-[#15803D] dark:text-[#4ADE80]">
          Cadastre sua empresa hoje mesmo
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Dê o primeiro passo para transformar a experiência profissional do seu time.
        </p>

        <button
          className="mt-6 px-8 py-3 rounded-full bg-[#22C55E] hover:bg-[#16A34A]
                     text-white font-medium text-lg transition shadow-md"
        >
          Cadastrar Empresa
        </button>
      </div>
    </div>
  );
}
