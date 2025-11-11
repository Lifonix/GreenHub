export default function ProfileModal({ profile, onClose }) {
  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-xl relative overflow-y-auto max-h-[90vh]">
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>

        {/* Cabeçalho */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 p-6 border-b border-gray-200">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-28 h-28 rounded-full object-cover border-2 border-[#60A5FA]"
          />
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900">{profile.nome}</h2>
            <p className="text-[#60A5FA] font-medium">{profile.cargo}</p>
            <p className="text-gray-500 text-sm mt-1">{profile.localizacao}</p>
            <p className="text-gray-700 mt-3">{profile.resumo}</p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-6">
          {/* Habilidades Técnicas */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              🧠 Habilidades Técnicas
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.habilidadesTecnicas?.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#60A5FA]/10 text-[#60A5FA] rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Soft Skills */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              💬 Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.softSkills?.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#60A5FA]/10 text-[#60A5FA] rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          {/* Experiências */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              💼 Experiências Profissionais
            </h3>
            {profile.experiencias?.map((exp, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-3 mb-2">
                <p className="font-semibold text-gray-800">{exp.cargo}</p>
                <p className="text-sm text-gray-600">{exp.empresa}</p>
                <p className="text-xs text-gray-500 mb-2">
                  {exp.inicio} — {exp.fim}
                </p>
                <p className="text-sm text-gray-700">{exp.descricao}</p>
              </div>
            ))}
          </section>

          {/* Formação */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🎓 Formação Acadêmica
            </h3>
            {profile.formacao?.map((f, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-3 mb-2">
                <p className="font-semibold text-gray-800">{f.curso}</p>
                <p className="text-sm text-gray-600">{f.instituicao}</p>
                <p className="text-xs text-gray-500">Concluído em {f.ano}</p>
              </div>
            ))}
          </section>

          {/* Projetos */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🚀 Projetos
            </h3>
            {profile.projetos?.map((p, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-3 mb-2">
                <p className="font-semibold text-gray-800">{p.titulo}</p>
                <p className="text-sm text-gray-700 mb-2">{p.descricao}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#60A5FA] text-sm hover:underline"
                  >
                    Ver projeto
                  </a>
                )}
              </div>
            ))}
          </section>

          {/* Certificações */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              📜 Certificações
            </h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {profile.certificacoes?.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>

          {/* Idiomas */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">🌍 Idiomas</h3>
            <ul className="list-disc list-inside text-gray-700 text-sm">
              {profile.idiomas?.map((i, idx) => (
                <li key={idx}>
                  {i.idioma} — {i.nivel}
                </li>
              ))}
            </ul>
          </section>

          {/* Áreas de Interesse */}
          <section>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              💡 Áreas de Interesse
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.areaInteresses?.map((a, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#60A5FA]/10 text-[#60A5FA] rounded-full text-sm"
                >
                  {a}
                </span>
              ))}
            </div>
          </section>

          {/* Botões de ação */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={() => alert(`Você recomendou ${profile.nome}!`)}
              className="px-5 py-2 bg-[#60A5FA] text-white rounded-full hover:opacity-90 transition"
            >
              Recomendar profissional
            </button>
            <button
              onClick={() => alert(`Mensagem enviada para ${profile.nome}!`)}
              className="px-5 py-2 border border-[#60A5FA] text-[#60A5FA] rounded-full hover:bg-[#60A5FA]/10 transition"
            >
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
