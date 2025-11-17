import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function GreenHubStressChart() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function carregar() {
      try {
        const resp = await fetch("http://localhost:1880/dadosGreenHub");
        const json = await resp.json();
        setDados(json);
      } catch (e) {
        console.error("Erro ao buscar dados do Node-RED", e);
      }
    }

    carregar();
    const id = setInterval(carregar, 5000); // atualiza a cada 5s
    return () => clearInterval(id);
  }, []);

  const labels = dados.map((d) => new Date(d.time).toLocaleTimeString());

  const data = {
    labels,
    datasets: [
      {
        label: "Nível de estresse",
        data: dados.map((d) => d.stress),
        borderColor: "#22C55E", // verde GreenHub
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.35,
        pointRadius: 3,
        pointBackgroundColor: "#14532D",
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y1: {
        type: "linear",
        position: "left",
        min: 0,
        max: 3,
        ticks: {
          stepSize: 1,
          callback: (value) => {
            if (value === 0) return "Confortável";
            if (value === 1) return "Alerta";
            if (value === 2) return "Alto";
            if (value === 3) return "Crítico";
            return value;
          },
        },
        title: {
          display: true,
          text: "Nível de estresse",
        },
      },
      x: {
        title: {
          display: true,
          text: "Tempo",
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const v = ctx.parsed.y;
            let nivel = "Desconhecido";
            if (v === 0) nivel = "Confortável";
            if (v === 1) nivel = "Alerta";
            if (v === 2) nivel = "Alto";
            if (v === 3) nivel = "Crítico";
            return `${nivel} (valor: ${v})`;
          },
        },
      },
    },
  };

  if (!dados.length) {
    return (
      <div className="flex items-center justify-center py-10 text-sm text-gray-500">
        Carregando dados em tempo real do Node-RED...
      </div>
    );
  }

  return (
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  );
}


export default GreenHubStressChart;
