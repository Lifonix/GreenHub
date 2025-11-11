import React from "react";

export default function ProfileCard({ profile, onClick }) {
  return (
    <article onClick={onClick} className="bg-white dark:bg-[#071226] rounded-2xl p-5 border hover:shadow-lg cursor-pointer text-left">
      <div className="flex items-center gap-4">
        <img src={profile.foto} alt={profile.nome} className="w-16 h-16 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">{profile.nome}</h4>
              <div className="text-sm text-gray-500 dark:text-gray-300">{profile.cargo}</div>
              <div className="text-xs text-gray-400 mt-1">{profile.localizacao}</div>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{profile.resumo}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {(profile.habilidadesTecnicas || []).slice(0, 4).map((s, i) => (
              <span key={i} className="text-xs px-2 py-1 rounded-full border bg-gray-50 dark:bg-[#0b1b2a]">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
