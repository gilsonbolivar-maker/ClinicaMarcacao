// Configurações da clínica — troque aqui sem mexer no resto do código.
window.CONFIG = {
  versao: "1.0.0",
  clinica: "Jimena Andrade",
  subtitulo: "Odontologia e Estética",

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
