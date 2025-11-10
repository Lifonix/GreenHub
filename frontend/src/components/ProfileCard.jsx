export default function ProfileCard({ profile, onClick }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 cursor-pointer hover:shadow-xl transition"
      onClick={onClick}
    >
      <img
        src={profile.foto}
        alt={profile.nome}
        className="w-24 h-24 rounded-full mx-auto object-cover"
      />
      <h2 className="text-xl font-semibold text-center mt-2 dark:text-white">
        {profile.nome}
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300">
        {profile.cargo}
      </p>
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
  );
}
