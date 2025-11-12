import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white text-gray-800 py-20 px-6 max-w-5xl mx-auto" id="sobre">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#3B82F6] mb-4">Sobre a Lifonix</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A Lifonix conecta pessoas, competências e propósito por meio da tecnologia. 
          Nossa missão é transformar o futuro do trabalho, aproximando talentos e promovendo a colaboração entre profissionais.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://cdn.dribbble.com/users/416610/screenshots/16814571/media/d0cce1c515d7dbccffba9b9d08a50d02.png?resize=1000x750&vertical=center"
          alt="Equipe Lifonix colaborando"
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h2 className="text-2xl font-semibold text-[#2563EB] mb-3">Nosso Propósito</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Acreditamos que o trabalho do futuro é humano, ético e colaborativo. 
            Criamos a Lifonix para ajudar profissionais a crescerem juntos — aprendendo novas competências, 
            compartilhando experiências e construindo redes baseadas em propósito.
          </p>

          <h3 className="text-xl font-semibold text-[#2563EB] mb-2">Nossos Pilares</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Inovação:</strong> tecnologia para transformar realidades.</li>
            <li><strong>Colaboração:</strong> conectar talentos e ideias.</li>
            <li><strong>Inclusão:</strong> oportunidades para todos.</li>
            <li><strong>Sustentabilidade:</strong> crescimento com propósito.</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="text-2xl font-semibold text-[#2563EB] mb-4">Contribuímos com os ODS da ONU</h3>
        <p className="text-gray-600 mb-6">
          A Lifonix apoia os Objetivos de Desenvolvimento Sustentável 4, 8, 9 e 10 — 
          educação, trabalho digno, inovação e redução das desigualdades.
        </p>

        <div className="flex justify-center gap-8 flex-wrap">
          <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg" alt="ODS 4" className="w-20 rounded-lg shadow-md" />
          <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg" alt="ODS 8" className="w-20 rounded-lg shadow-md" />
          <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg" alt="ODS 9" className="w-20 rounded-lg shadow-md" />
          <img src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg" alt="ODS 10" className="w-20 rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
}
