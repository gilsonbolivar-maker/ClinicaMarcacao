// Configurações da clínica — troque aqui sem mexer no resto do código.
window.CONFIG = {
  versao: "1.1.2",
  clinica: "Jimena Andrade",
  subtitulo: "Odontologia e Estética",

  // Informações da página pública. O que ficar vazio ("") não aparece no site.
  sobre: "Atendimento em Odontologia e Estética, com horário marcado.",
  registro: "",     // ex.: "CRO-BA 00000"
  whatsapp: "",     // só números, com DDD. ex.: "77999990000"
  endereco: "",     // ex.: "Rua Tal, 123 — Centro"
  cidade: "",       // ex.: "Caetité — BA"
  instagram: "",    // ex.: "jimenaandrade" (sem @)

  // Remarcação pelo site: só com esta antecedência (em horas). O banco também confere.
  antecedenciaRemarcarHoras: 72,

  // Banco de dados (Supabase). A chave abaixo é pública por natureza;
  // quem protege os dados são as regras de acesso do banco (só a equipe entra).
  supabaseUrl: "https://meprwchojnjtoottbqry.supabase.co",
  supabaseChave: "sb_publishable_04yVgvpeZRCqHk7XimGl5A_hLnmoWxs",

  // Horário de atendimento
  abre: "08:00",
  fecha: "18:00",
  intervaloMin: 30,          // de quanto em quanto tempo aparecem os horários
  diasAtendimento: [1, 2, 3, 4, 5, 6], // 0=domingo … 6=sábado
  fuso: "-03:00"             // Bahia
};
