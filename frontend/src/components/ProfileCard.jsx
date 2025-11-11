export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      {/* Foto */}
      <div className="flex flex-col items-center text-center">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-[#60A5FA]"
        />

        {/* Nome e cargo */}
        <h2 className="text-lg font-semibold text-gray-800">{profile.nome}</h2>
        <p className="text-sm text-[#60A5FA] font-medium">{profile.cargo}</p>
        <p className="text-xs text-gray-500 mt-1">{profile.localizacao}</p>

        {/* Skills */}
        <div className="mt-3 flex flex-wrap justify-center gap-1">
          {(profile.habilidadesTecnicas || [])
            .slice(0, 3)
            .map((skill, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-[#60A5FA]/10 text-[#60A5FA]"
              >
                {skill}
              </span>
            ))}
        </div>

        {/* Resumo */}
        <p className="text-sm text-gray-600 mt-3 line-clamp-3">
          {profile.resumo}
        </p>

        {/* Botão de ver mais */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          className="mt-4 px-4 py-2 bg-[#60A5FA] text-white text-sm rounded-full hover:opacity-90 transition"
        >
          Ver perfil completo
        </button>
      </div>
    </div>
  );
}
