import React, { useState } from "react";

export default function ProfileModal({ profile, onClose }) {
  const [showRecommend, setShowRecommend] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [recText, setRecText] = useState("");
  const [msgText, setMsgText] = useState("");

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4">
        <div className="bg-white dark:bg-[#1B2E1D] text-gray-800 dark:text-gray-100 rounded-2xl shadow-xl max-w-2xl w-full p-8 relative">

          {/* Botão fechar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-[#22C55E] text-2xl font-bold"
          >
            ×
          </button>

          {/* Cabeçalho */}
          <div className="flex flex-col items-center text-center">
            <img
              src={profile.foto}
              alt={profile.nome}
              className="w-28 h-28 rounded-full border-2 border-[#22C55E] mb-3 object-cover"
            />
            <h2 className="text-2xl font-bold text-[#166534] dark:text-[#4ADE80]">
              {profile.nome}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">{profile.cargo}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{profile.localizacao}</p>
          </div>

          {/* Conteúdo */}
          <div className="mt-6 space-y-5">
            {/* Resumo */}
            <section>
              <h3 className="font-semibold text-[#166534] dark:text-[#4ADE80] mb-1">
                Resumo
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {profile.resumo}
              </p>
            </section>

            {/* Habilidades Técnicas */}
            <section>
              <h3 className="font-semibold text-[#166534] dark:text-[#4ADE80] mb-1">
                Habilidades Técnicas
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.habilidadesTecnicas?.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[#DCFCE7] dark:bg-[#14532D] text-[#166534] dark:text-[#4ADE80]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Soft Skills */}
            <section>
              <h3 className="font-semibold text-[#166534] dark:text-[#4ADE80] mb-1">
                Soft Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.softSkills?.map((soft, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-[#D1FAE5] dark:bg-[#1B2E1D] text-[#166534] dark:text-[#4ADE80]"
                  >
                    {soft}
                  </span>
                ))}
              </div>
            </section>

            {/* Experiências */}
            <section>
              <h3 className="font-semibold text-[#166534] dark:text-[#4ADE80] mb-2">
                Experiências
              </h3>
              <ul className="space-y-2">
                {profile.experiencias?.map((exp, i) => (
                  <li key={i} className="border-l-4 border-[#22C55E] pl-3">
                    <p className="font-medium text-sm">{exp.cargo} — {exp.empresa}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {exp.inicio} - {exp.fim}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{exp.descricao}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Formação */}
            <section>
              <h3 className="font-semibold text-[#166534] dark:text-[#4ADE80] mb-2">
                Formação Acadêmica
              </h3>
              <ul className="space-y-2">
                {profile.formacao?.map((form, i) => (
                  <li key={i} className="text-sm text-gray-700 dark:text-gray-300">
                    🎓 {form.curso} — {form.instituicao} ({form.ano})
                  </li>
                ))}
              </ul>
            </section>

            {/* Projetos */}
            <section>
              <h3 className="font-semibold text-[#166534] dark:text-[#4ADE80] mb-2">
                Projetos
              </h3>
              <ul className="space-y-2">
                {profile.projetos?.map((proj, i) => (
                  <li key={i}>
                    <p className="text-sm font-medium text-[#166534] dark:text-[#4ADE80]">
                      {proj.titulo}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{proj.descricao}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Botões */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setShowRecommend(true)}
              className="px-5 py-2 rounded-full bg-[#22C55E] text-white hover:bg-[#16A34A] transition"
            >
              Recomendar Profissional
            </button>

            <button
              onClick={() => setShowMessage(true)}
              className="px-5 py-2 rounded-full border border-[#22C55E] text-[#22C55E] hover:bg-[#DCFCE7] dark:hover:bg-[#14532D] transition"
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DE RECOMENDAÇÃO */}
      {showRecommend && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] px-4">
          <div className="bg-white dark:bg-[#1B2E1D] p-6 rounded-2xl shadow-xl w-full max-w-md relative">

            <button
              onClick={() => setShowRecommend(false)}
              className="absolute top-3 right-3 text-xl text-gray-400 hover:text-[#22C55E]"
            >
              ×
            </button>

            <h2 className="text-xl font-bold text-[#166534] dark:text-[#4ADE80] mb-3">
              Recomendar {profile.nome}
            </h2>

            <textarea
              value={recText}
              onChange={(e) => setRecText(e.target.value)}
              placeholder="Escreva sua recomendação..."
              className="w-full h-32 p-3 border border-gray-300 dark:border-[#14532D] rounded-md bg-white dark:bg-[#0F2511] text-gray-800 dark:text-gray-100"
            ></textarea>

            <button
              onClick={() => {
                alert("Recomendação enviada!");
                setShowRecommend(false);
                setRecText("");
              }}
              className="mt-4 w-full py-2 bg-[#22C55E] text-white rounded-full hover:bg-[#16A34A]"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {/* MODAL DE MENSAGEM */}
      {showMessage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] px-4">
          <div className="bg-white dark:bg-[#1B2E1D] p-6 rounded-2xl shadow-xl w-full max-w-md relative">

            <button
              onClick={() => setShowMessage(false)}
              className="absolute top-3 right-3 text-xl text-gray-400 hover:text-[#22C55E]"
            >
              ×
            </button>

            <h2 className="text-xl font-bold text-[#166534] dark:text-[#4ADE80] mb-3">
              Enviar mensagem para {profile.nome}
            </h2>

            <textarea
              value={msgText}
              onChange={(e) => setMsgText(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="w-full h-32 p-3 border border-gray-300 dark:border-[#14532D] rounded-md bg-white dark:bg-[#0F2511] text-gray-800 dark:text-gray-100"
            ></textarea>

            <button
              onClick={() => {
                alert("Mensagem enviada!");
                setShowMessage(false);
                setMsgText("");
              }}
              className="mt-4 w-full py-2 bg-[#22C55E] text-white rounded-full hover:bg-[#16A34A]"
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      )}
    </>
  );
}
