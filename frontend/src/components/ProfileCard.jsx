export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md rounded-xl p-5 cursor-pointer transition-all border border-gray-100 dark:border-gray-700"
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-24 h-24 rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold mt-3 dark:text-white">
          {profile.nome}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{profile.cargo}</p>
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {profile.habilidadesTecnicas.slice(0, 3).map((skill, i) => (
            <span
              key={i}
              className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
