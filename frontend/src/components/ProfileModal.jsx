export default function ProfileModal({ profile, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="text-right w-full text-gray-500">✕</button>
        <div className="flex gap-4 items-center">
          <img src={profile.foto} alt={profile.nome} className="w-24 h-24 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold">{profile.nome}</h2>
            <p>{profile.cargo}</p>
            <p className="text-gray-500">{profile.localizacao}</p>
          </div>
        </div>

        <section className="mt-4 space-y-2">
          <h3 className="font-semibold">Sobre</h3>
          <p>{profile.resumo}</p>

          <h3 className="font-semibold mt-4">Habilidades Técnicas</h3>
          <div className="flex flex-wrap gap-2">
            {profile.habilidadesTecnicas.map((h, i) => (
              <span key={i} className="bg-blue-100 dark:bg-blue-700 px-2 py-1 rounded-lg text-xs">
                {h}
              </span>
            ))}
          </div>

          <h3 className="font-semibold mt-4">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {profile.softSkills.map((s, i) => (
              <span key={i} className="bg-green-100 dark:bg-green-700 px-2 py-1 rounded-lg text-xs">
                {s}
              </span>
            ))}
          </div>
        </section>

        <div className="flex justify-end gap-4 mt-6">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Recomendar
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
            Enviar mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
