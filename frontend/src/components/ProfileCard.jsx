import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ProfileModal({ profile, onClose, onRecommend, onMessage }) {
  const [mensagem, setMensagem] = useState("");

  const enviarMensagem = () => {
    if (!mensagem.trim()) {
      alert("Digite uma mensagem antes de enviar.");
      return;
    }
    if (onMessage) onMessage(mensagem);
    setMensagem("");
  };

  return (
    <Modal
      isOpen={!!profile}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50"
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 mt-16 w-full max-w-3xl outline-none"
    >
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <img
            src={profile.foto}
            alt={profile.nome}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-semibold">{profile.nome}</h2>
            <p className="text-gray-500 dark:text-gray-300">{profile.cargo}</p>
            <p className="text-xs text-gray-400">{profile.localizacao}</p>
          </div>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-red-500">✕</button>
      </div>

      <p className="mt-4">{profile.resumo}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {profile.habilidadesTecnicas?.map((h) => (
          <span
            key={h}
            className="px-3 py-1 border rounded-full text-sm text-gray-700 dark:text-gray-200"
          >
            {h}
          </span>
        ))}
      </div>

      <textarea
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        className="w-full mt-4 p-2 border rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
        placeholder="Escreva uma mensagem..."
        rows="3"
      ></textarea>

      <div className="flex gap-2 mt-3">
        <button
          onClick={enviarMensagem}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Enviar Mensagem
        </button>
        <button
          onClick={() => onRecommend && onRecommend()}
          className="border px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Recomendar
        </button>
      </div>
    </Modal>
  );
}
