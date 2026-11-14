# ClinicaMarcacao
Marcação de atendimento — clínica **Jimena Andrade** (Odontologia e Estética).

## Páginas
| Página | Quem usa | Para quê |
|---|---|---|
| `index.html` | todos | Entrar (e-mail e senha) |
| `assistente.html` | assistente | Marcar paciente, serviço, dia e horário; ver a agenda |
| `agenda.html` | Jimena | Agenda do dia ao vivo, com aviso sonoro quando chega marcação nova |
| `paciente.html` | ambas | Lista de pacientes e ficha com histórico de atendimentos |

## Banco de dados
Supabase (projeto `meprwchojnjtoottbqry`), tabelas `clinica_equipe`, `clinica_servicos`,
`clinica_pacientes`, `clinica_marcacoes`. Só e-mails cadastrados em `clinica_equipe` enxergam os dados.
O banco impede duas marcações no mesmo horário.

Configurações (nome, horário de atendimento, dias) ficam em `config.js`.
