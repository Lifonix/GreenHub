import React from "react";

export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-[#1B2E1D] border border-[#D1FAE5] dark:border-[#14532D]
                 rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col items-center text-center"
    >
      <img
        src={profile.foto}
        alt={profile.nome}
        className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-[#22C55E]"
      />
      <h3 className="font-semibold text-lg text-[#166534] dark:text-[#4ADE80]">{profile.nome}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{profile.cargo}</p>
      <div className="flex flex-wrap justify-center gap-2 mt-3">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill, i) => (
          <span
            key={i}
            className="text-xs px-3 py-1 rounded-full bg-[#DCFCE7] dark:bg-[#14532D] text-[#166534] dark:text-[#4ADE80]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
