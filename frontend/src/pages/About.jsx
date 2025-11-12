import React from "react";


export default function About() {
  return (
    <div className="bg-white dark:bg-[#0B1A0D] text-gray-900 dark:text-gray-100 transition-colors duration-500 min-h-screen flex flex-col">
      <section className="max-w-5xl mx-auto py-24 px-6 text-center">
        <h1 className="text-4xl font-bold text-[#15803D] dark:text-[#4ADE80] mb-6">Sobre a Lifonix</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
          A <span className="font-semibold text-[#16A34A]">Lifonix</span> nasceu com o propósito de conectar pessoas, competências e propósitos
          por meio da tecnologia. Nossa missão é promover um futuro do trabalho mais inclusivo, justo e colaborativo.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mt-6">
          Acreditamos no poder da inovação verde e no impacto positivo que a tecnologia pode gerar
          quando utilizada para unir pessoas com diferentes talentos e objetivos.
        </p>
      </section>
    </div>
  );
}
