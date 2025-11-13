import { useState } from "react";
import axios from "axios";
import Input from "../Shared/Input";
import ExperienciasInput from "./ExperienciasInput";
import ProjetosInput from "./ProjetosInput";
import HabilidadesInput from "./HabilidadesInput";

export default function FormPerfil() {
  const [form, setForm] = useState({
    nome: "",
    foto: "",
    cargo: "",
    resumo: "",
    localizacao: "",
    area: "",
    habilidadesTecnicas: [],
    softSkills: [],
    experiencias: [],
    formacao: [],
    projetos: [],
    certificacoes: [],
    idiomas: [],
    areaInteresses: [],
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/api/perfis", form);
    alert("Perfil criado!");
    setForm({}); // Limpa formulário
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="nome" value={form.nome} onChange={handleChange} label="Nome" />
      <Input name="foto" value={form.foto} onChange={handleChange} label="Foto (URL)" />
      <Input name="cargo" value={form.cargo} onChange={handleChange} label="Cargo" />
      <Input name="resumo" value={form.resumo} onChange={handleChange} label="Resumo" />
      
      <HabilidadesInput form={form} setForm={setForm} />
      <ExperienciasInput form={form} setForm={setForm} />
      <ProjetosInput form={form} setForm={setForm} />
      
      <button type="submit">Criar Perfil</button>
    </form>
  );
}
