export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <img
        src={profile.foto}
        alt={profile.nome}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />
      <h2 className="text-lg font-semibold text-center mt-2">{profile.nome}</h2>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">
        {profile.cargo}
      </p>
      <div className="flex flex-wrap justify-center gap-1 mt-2">
        {profile.habilidadesTecnicas.slice(0, 3).map((skill, i) => (
          <span
            key={i}
            className="bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
