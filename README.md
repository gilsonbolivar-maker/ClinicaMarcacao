# ClinicaMarcacao
Marcação de atendimento — clínica **Jimena Andrade** (Odontologia e Estética).

## Páginas
| Página | Quem usa | Para quê |
|---|---|---|
| `index.html` | público | Página da Jimena Andrade na internet: informações, pedir primeira consulta, remarcar |
| `cliente.html` | paciente | Inscrição, marcar consulta nos horários livres e remarcar (regra das 72 horas) |
| `entrar.html` | equipe | Entrar (e-mail e senha) |
| `assistente.html` | assistente | Marcar paciente, serviço, dia e horário; ver a agenda |
| `agenda.html` | Jimena | Agenda do dia ao vivo, com aviso sonoro quando chega marcação nova |
| `paciente.html` | ambas | Lista de pacientes e ficha com histórico de atendimentos |

## Banco de dados
Supabase (projeto `meprwchojnjtoottbqry`), tabelas `clinica_equipe`, `clinica_servicos`,
`clinica_pacientes`, `clinica_marcacoes`. Só e-mails cadastrados em `clinica_equipe` enxergam os dados.
O banco impede duas marcações no mesmo horário.

Configurações (nome, horário de atendimento, dias) ficam em `config.js`.

## Regras do paciente (conferidas no banco)
- Remarcação pelo site só com 72 horas ou mais de antecedência; com menos, só pessoalmente.
- Pelo site o paciente marca apenas avaliações, limpeza e manutenção de aparelho (coluna `online` em `clinica_servicos`).
- No máximo 3 horários futuros por paciente.
- O paciente entra com telefone e senha; se esquecer, a equipe cria uma senha nova na ficha dele.
