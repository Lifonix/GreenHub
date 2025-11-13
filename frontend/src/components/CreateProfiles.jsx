import React from "react";
import FormPerfil from "../components/FormPerfil";

export default function CriarPerfil() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0B1A0D] p-8">
      <h1 className="text-2xl font-bold text-center mb-6 text-[#15803D] dark:text-[#4ADE80]">
        Crie seu Perfil Profissional
      </h1>
      <FormPerfil />
    </div>
  );
}
