import React from "react";

export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-[#1B2E1D] border border-[#D1FAE5] dark:border-[#14532D]
                 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1
                 p-6 flex flex-col items-center text-center max-w-xs mx-auto"
    >
      {/* Foto com efeito hover */}
      <div className="relative w-28 h-28 mb-4">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-full h-full rounded-full object-cover border-4 border-[#22C55E] dark:border-[#4ADE80]
                     transition-transform duration-500 transform hover:scale-105"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#22C55E]/20 to-[#16A34A]/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Nome e cargo */}
      <h3 className="font-semibold text-lg text-[#166534] dark:text-[#4ADE80] transition-colors duration-500">
        {profile.nome}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 transition-colors duration-500">
        {profile.cargo}
      </p>

      {/* Habilidades técnicas */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-[#DCFCE7] dark:bg-[#14532D] 
                       text-[#166534] dark:text-[#4ADE80] font-medium transition-all duration-300
                       hover:scale-110 hover:bg-[#C6F6D5] dark:hover:bg-[#166534]/30"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Indicador de clique */}
      <div className="mt-4 text-xs text-gray-400 dark:text-gray-500 italic">
        Clique para ver mais
      </div>
    </div>
  );
}
