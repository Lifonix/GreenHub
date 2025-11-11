import React, { useState } from "react";
import axios from "axios";

export default function ProfileModal({ profile, onClose }) {
  const [sending, setSending] = useState(false);

  if (!profile) return null;

  const handleRecommend = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/api/profissionais/${profile.id}/recomendar`);
      alert(`Recomendação registrada (${res.data.recommendations ?? "ok"})`);
    } catch (err) {
      console.error(err);
      alert("Erro ao recomendar.");
    }
  };

  const handleMessage = async () => {
    const texto = prompt("Escreva a mensagem para " + profile.nome + ":");
    if (!texto) return;
    try {
      setSending(true);
      await axios.post(`http://localhost:5000/api/profissionais/${profile.id}/mensagem`, {
        texto,
        remetente: "Usuário Lifonix"
      });
      alert("Mensagem enviada!");
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar mensagem.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/30" onClick={onClose}></div>

      <div className="relative bg-white dark:bg-[#071226] rounded-2xl shadow-2xl w-full max-w-4xl p-6 overflow-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">✕</button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center md:items-start">
            <img src={profile.foto} alt={profile.nome} className="w-36 h-36 rounded-full object-cover" />
            <h3 className="mt-4 text-xl font-semibold">{profile.nome}</h3>
            <p className="text-sm text-gray-500">{profile.cargo}</p>
            <p className="text-xs text-gray-400 mt-2">{profile.localizacao}</p>

            <div className="mt-6 w-full">
              <button onClick={handleRecommend} className="w-full px-4 py-2 rounded-md bg-[var(--accent)] text-white mb-3">
                Recomendar profissional
              </button>
              <button onClick={handleMessage} disabled={sending} className="w-full px-4 py-2 rounded-md border">
                {sending ? "Enviando..." : "Enviar mensagem"}
              </button>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-sm text-gray-700 dark:text-gray-300">{profile.resumo}</p>

            <section className="mt-4">
              <h4 className="font-semibold">Habilidades técnicas</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {(profile.habilidadesTecnicas || []).map((h, i) => (
                  <span key={i} className="text-xs px-2 py-1 rounded-full border bg-gray-50 dark:bg-[#071a2a]">{h}</span>
                ))}
              </div>
            </section>

            <section className="mt-4">
              <h4 className="font-semibold">Soft skills</h4>
              <div className="mt-2">{(profile.softSkills || []).join(" • ")}</div>
            </section>

            <section className="mt-4">
              <h4 className="font-semibold">Experiências</h4>
              <div className="mt-2 space-y-3">
                {(profile.experiencias || []).map((e, i) => (
                  <div key={i}>
                    <div className="font-semibold">{e.cargo} — {e.empresa}</div>
                    <div className="text-xs text-gray-500">{e.inicio} → {e.fim}</div>
                    <div className="mt-1 text-sm">{e.descricao}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Formação</h4>
                <ul className="mt-2 text-sm space-y-2">
                  {(profile.formacao || []).map((f, i) => (
                    <li key={i}><strong>{f.curso}</strong> — {f.instituicao} ({f.ano})</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Idiomas</h4>
                <div className="mt-2">
                  {(profile.idiomas || []).map((l, i) => <div key={i} className="text-sm">{l.idioma} — {l.nivel}</div>)}
                </div>
              </div>
            </section>

            <section className="mt-4">
              <h4 className="font-semibold">Projetos & certificações</h4>
              <div className="mt-2 space-y-2">
                {(profile.projetos || []).map((p, i) => (
                  <div key={i}>
                    <a href={p.link || "#"} target="_blank" rel="noreferrer" className="font-medium underline">{p.titulo}</a>
                    <div className="text-sm text-gray-600">{p.descricao}</div>
                  </div>
                ))}

                <div className="mt-3">
                  {(profile.certificacoes || []).map((c, i) => <div key={i} className="text-sm">• {c}</div>)}
                </div>
              </div>
            </section>

            <section className="mt-4">
              <h4 className="font-semibold">Áreas de interesse</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {(profile.areaInteresses || []).map((a, i) => <span key={i} className="text-xs px-2 py-1 rounded-full border">{a}</span>)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
