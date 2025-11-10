import { FaTimes } from "react-icons/fa";

export default function ProfileModal({ profile, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-full relative">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <div className="text-center">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-24 h-24 rounded-full mx-auto object-cover"
          />
          <h2 className="text-2xl font-semibold mt-3">{profile.nome}</h2>
          <p className="text-gray-500">{profile.cargo}</p>
          <p className="mt-1 text-sm text-gray-400">{profile.localizacao}</p>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Habilidades Técnicas
          </h3>
          <ul className="flex flex-wrap gap-2">
            {profile.habilidadesTecnicas.map((h, i) => (
              <li
                key={i}
                className="bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full text-xs"
              >
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
            Soft Skills
          </h3>
          <ul className="flex flex-wrap gap-2">
            {profile.softSkills.map((s, i) => (
              <li
                key={i}
                className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Recomendar
          </button>
          <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600">
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
