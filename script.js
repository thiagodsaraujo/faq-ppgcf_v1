
// FAQ Data
const faqData = [
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Processo Seletivo Regular", question: "Como funciona o processo seletivo regular?", answer: "O processo seletivo é a porta de entrada oficial para o programa, regido por um edital público que detalha todas as regras, datas e documentos necessários.", details: [{ icon: '📝', category: 'Categoria Principal: Processo Seletivo', points: ["Edital: É o documento mais importante, publicado com no mínimo 30 dias de antecedência. Define vagas, critérios, cronograma e documentação.", "Inscrição: Geralmente online, exige o preenchimento de formulários e o envio de documentos digitalizados.", "Fluxo Contínuo: O programa pode optar por um modelo de 'fluxo contínuo', permitindo inscrições em qualquer época do ano, conforme edital."] }], legalBasis: "Art. 79 (Normatização), Art. 81 (Fluxo Contínuo), Art. 87 (Comissão de Seleção), Art. 88 (Validade do Processo)", documentation: "Requerimento de inscrição, Formulário de inscrição, Cópia do diploma (ou declaração), Histórico escolar, Currículo Lattes, Comprovante de taxa.", deadlines: "Publicação do Edital: Mínimo 30 dias antes das inscrições. Recursos: Prazo definido no edital, com o Colegiado como primeira instância." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Matrícula Institucional", question: "Fui aprovado! Como faço a matrícula institucional?", answer: "A matrícula institucional é o ato que oficializa seu vínculo com a UEPB. Perder o prazo significa perder a vaga, mesmo tendo sido aprovado.", details: [{ icon: '🔗', category: 'Categoria Principal: Vínculo Acadêmico', points: ["Procedimento: Realizada na secretaria do programa, dentro do prazo estipulado no calendário acadêmico.", "Condição: É um pré-requisito para a primeira matrícula em disciplinas.", "Vedação: É proibido manter matrícula simultânea em mais de um curso de pós-graduação stricto sensu na UEPB."] }], legalBasis: "Art. 100 (Obrigatoriedade e Prazos), Art. 101 (Vedação de Matrícula Simultânea), Art. 102 (Diplomas Estrangeiros), Art. 103 (Matrícula Semestral)", documentation: "Documentos listados no edital de seleção (diploma, histórico, documentos pessoais, etc.).", deadlines: "Prazo definido no calendário escolar do programa. A não efetivação resulta em perda automática da vaga (Art. 100, §4º)." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Transferência", question: "Posso me transferir de outro programa de mestrado/doutorado para o PPGCF?", answer: "Sim, a transferência é possível, mas depende da existência de vagas, da aprovação do Colegiado e do cumprimento de requisitos específicos.", details: [{ icon: '🔄', category: 'Categoria Principal: Mobilidade Acadêmica', points: ["Requisitos: Ser aluno regular de um programa com conceito CAPES igual ou superior, ter cursado no mínimo 6 meses e ter o aceite formal de um orientador do PPGCF.", "Processo: A solicitação deve ser aprovada pelos Colegiados de ambos os programas (origem e destino)."] }], legalBasis: "Art. 86, §1º (Admissão por Transferência), Art. 105 (Condições Mínimas)", documentation: "Requerimento formal, Histórico escolar de origem, Ementas das disciplinas, Carta de aceite do novo orientador, Carta de anuência do programa de origem.", deadlines: "O tempo de curso já cumprido na origem é contabilizado no prazo máximo. A decisão final é do Colegiado do PPGCF." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Reingresso", question: "Fui desligado do programa. Posso tentar entrar novamente?", answer: "Sim, mas existe um período de carência obrigatório. O reingresso não é automático e exige a participação em um novo processo seletivo.", details: [{ icon: '⏳', category: 'Categoria Principal: Reingresso', points: ["Carência: É necessário aguardar um prazo mínimo de 12 meses após a data do desligamento para se inscrever em um novo processo seletivo.", "Nova Matrícula: Se aprovado, o reingresso é considerado uma matrícula nova, sem aproveitamento automático de créditos."] }], legalBasis: "Art. 80 (Prazo de Carência), Art. 112 (Reingresso como Nova Matrícula)", documentation: "A mesma documentação exigida no edital de seleção para novos candidatos.", deadlines: "Prazo mínimo de espera de 12 meses. O candidato compete normalmente no novo processo seletivo." },
    { topic: "INGRESSO E ADMISSÃO", subtopic: "Aluno Especial", question: "O que é um 'Aluno Especial' e como funciona?", answer: "Aluno Especial é aquele que cursa disciplinas isoladas no programa sem ter um vínculo regular. É uma ótima forma de conhecer o programa ou adiantar créditos.", details: [{ icon: '🧑‍🏫', category: 'Categoria Principal: Participação Avulsa', points: ["Direitos: Pode frequentar as aulas e receber um certificado de conclusão da disciplina.", "Limitações: Não tem orientador, não pode receber bolsa e não tem os mesmos direitos de um aluno regular.", "Aproveitamento: Créditos cursados nos últimos 5 anos podem ser aproveitados se o aluno ingressar como regular."] }], legalBasis: "Art. 75 (Definição), Art. 76 (Regras de Aceitação), Arts. 77 e 78 (Possibilidade para alunos de graduação e pesquisadores)", documentation: "Geralmente, diploma de graduação, histórico, currículo e carta de interesse.", deadlines: "Inscrição conforme calendário acadêmico. A aceitação é aprovada pelo Colegiado." },
    { topic: "ESTRUTURA E GOVERNANÇA", subtopic: "Atribuições do Colegiado", question: "Quais são as principais responsabilidades do Colegiado?", answer: "O Colegiado é o órgão máximo de deliberação do programa. Ele define e aprova todas as normas acadêmicas, pedagógicas e administrativas, sendo a principal instância de recurso para decisões da Coordenação.", details: [{ icon: '🏛️', category: 'Principais Competências', points: ["Propor e aprovar alterações no regimento do programa.", "Definir o número de vagas e aprovar editais de seleção.", "Deliberar sobre aproveitamento de créditos, transferências, trancamentos e desligamentos.", "Designar orientadores, coorientadores e homologar comissões examinadoras (bancas).", "Aprovar o calendário acadêmico e a oferta de disciplinas para cada período."] }], legalBasis: "Art. 30, 31, 32", documentation: "Atas de reunião do Colegiado.", deadlines: "As decisões são tomadas em reuniões regulares (pelo menos uma vez por mês) ou extraordinárias." },
    { topic: "ESTRUTURA E GOVERNANÇA", subtopic: "Atribuições da Coordenação", question: "Quais são as funções da Coordenação do Programa?", answer: "A Coordenação é o órgão executivo que administra o dia a dia do programa. Ela executa as decisões do Colegiado, representa o programa e garante o cumprimento de todas as normas e prazos.", details: [{ icon: '🧑‍💼', category: 'Principais Funções', points: ["Presidir as reuniões do Colegiado e executar suas decisões.", "Elaborar e enviar os relatórios para a CAPES (Plataforma Sucupira).", "Gerenciar a aplicação de recursos financeiros (como o PROAP).", "Organizar o calendário acadêmico e fiscalizar o cumprimento das atividades.", "Tomar decisões urgentes 'ad referendum', que devem ser ratificadas pelo Colegiado na reunião seguinte."] }], legalBasis: "Art. 33, 34, 35", documentation: "Relatórios anuais, planos de aplicação de recursos, editais.", deadlines: "Responsável por cumprir os prazos estabelecidos pela CAPES e pela UEPB." },
    { topic: "ESTRUTURA E GOVERNANÇA", subtopic: "Atribuições da Secretaria", question: "Qual o papel da Secretaria do Programa?", answer: "A Secretaria é o órgão de apoio administrativo que executa as funções burocráticas e de controle acadêmico. É o principal ponto de contato para discentes e docentes para questões documentais e de rotina.", details: [{ icon: '🗗', category: 'Principais Tarefas', points: ["Organizar e processar inscrições, matrículas e outros requerimentos.", "Manter atualizados os arquivos, cadastros e históricos de discentes e docentes.", "Secretariar reuniões do Colegiado, defesas e exames de qualificação.", "Controlar a tramitação de correspondências e documentos oficiais do programa."] }], legalBasis: "Art. 36, 37", documentation: "Processos de matrícula, históricos escolares, arquivos de trabalhos finais.", deadlines: "Atuação contínua para garantir o bom funcionamento administrativo." },
    { topic: "CORPO DOCENTE", subtopic: "Credenciamento e Categorias", question: "Como um professor se torna parte do corpo docente do programa?", answer: "Um professor ou pesquisador com título de doutor pode ser autorizado a participar do programa (credenciado) em uma de três categorias: Permanente, Visitante ou Colaborador, após aprovação pelo Colegiado.", details: [{ icon: '🧑‍🏫', category: 'Categorias Docentes', points: ["Permanente: Núcleo principal do programa, com atuação contínua em ensino, pesquisa e orientação.", "Visitante: Docente externo contratado por tempo determinado para colaborar com o programa.", "Colaborador: Participa de forma complementar em projetos, aulas ou orientações, sem os mesmos vínculos do docente permanente."] }], legalBasis: "Art. 43, 44, 45, 46, 49", documentation: "Edital de credenciamento, Currículo Lattes, projeto de pesquisa.", deadlines: "O credenciamento ocorre periodicamente, conforme editais publicados pelo programa." },
    { topic: "CORPO DOCENTE", subtopic: "Deveres do Orientador", question: "Quais são as principais responsabilidades do meu orientador?", answer: "O orientador é responsável por guiar o discente em toda a sua trajetória acadêmica, desde o planejamento dos estudos e escolha de disciplinas até a elaboração e defesa do trabalho final.", details: [{ icon: '🧭', category: 'Principais Atribuições', points: ["Assistir o orientando no planejamento acadêmico e na matrícula.", "Acompanhar e avaliar o desempenho do discente.", "Auxiliar na preparação do projeto e do trabalho final.", "Propor o desligamento do orientando em caso de não cumprimento das atividades.", "Sugerir nomes para bancas e autorizar a defesa do trabalho final."] }], legalBasis: "Art. 69", documentation: "Relatórios de desempenho, pareceres em solicitações do discente.", deadlines: "Acompanhamento contínuo durante todo o curso do orientando." },
    { topic: "QUESTÕES FINANCEIRAS", subtopic: "Bolsas de Estudo", question: "Como funciona a concessão de bolsas de estudo?", answer: "As bolsas não são automáticas e dependem da disponibilidade de cotas das agências de fomento (como a CAPES). A seleção é baseada no mérito acadêmico.", details: [{ icon: '💰', category: 'Categoria Principal: Fomento e Auxílio', points: ["Comissão de Bolsas: Cada programa possui uma comissão responsável por definir os critérios de seleção e acompanhar os bolsistas.", "Critérios de Seleção: Priorizam o mérito acadêmico, geralmente baseado na classificação do processo seletivo.", "Renovação: A bolsa é concedida por 12 meses, renovável anualmente até o limite do curso, mediante bom desempenho."] }], legalBasis: "Art. 167 (Comissão de Bolsas), Art. 168 (Requisitos), Art. 169 (Renovação)", documentation: "Documentos que comprovem ausência de vínculo empregatício remunerado, Termo de compromisso da agência de fomento.", deadlines: "Seleção realizada pela Comissão de Bolsas após o resultado do processo seletivo de ingresso." },
    { topic: "QUESTÕES FINANCEIRAS", subtopic: "Dedicação Exclusiva", question: "Posso trabalhar e receber bolsa ao mesmo tempo?", answer: "Não. A bolsa de estudos exige dedicação integral às atividades do programa.", details: [{ icon: '🚫', category: 'Categoria Principal: Vedações e Regras', points: ["Dedicação Exclusiva: O bolsista deve ter dedicação integral ao curso, o que impede o acúmulo com atividades profissionais remuneradas.", "Exceções: A própria agência de fomento pode prever exceções específicas em seus regulamentos.", "Consequências: O descumprimento leva ao cancelamento da bolsa e à obrigação de ressarcir os valores recebidos."] }], legalBasis: "Art. 168, incisos II e IV (Exigência de Dedicação Integral)", documentation: "Declaração de não acúmulo de bolsas e de ausência de vínculo empregatício.", deadlines: "O aluno é responsável por manter sua condição de dedicação exclusiva e informar qualquer alteração à coordenação." },
    { topic: "VIDA ACADÊMICA", subtopic: "Créditos Mínimos", question: "Quantos créditos preciso para concluir o curso?", answer: "O programa exige um número mínimo de créditos em disciplinas, que devem ser integralizados dentro do prazo do curso.", details: [{ icon: '📊', category: 'Categoria Principal: Estrutura Curricular', points: ["Mestrado: Mínimo de 18 créditos.", "Doutorado: Mínimo de 27 créditos.", "Definição de Crédito: 1 crédito = 15h de aula teórica ou 30h de aula prática.", "Observação: Créditos da dissertação/tese não entram nesta contagem."] }], legalBasis: "Art. 115 (Limites Mínimos de Créditos)", documentation: "O controle é feito via histórico escolar.", deadlines: "Os créditos devem ser cumpridos dentro do prazo máximo do curso. O aluno e o orientador são responsáveis pelo planejamento." },
    { topic: "VIDA ACADÊMICA", subtopic: "Avaliação e Aprovação", question: "Como funciona a avaliação nas disciplinas?", answer: "A aprovação em uma disciplina depende de nota e frequência mínimas.", details: [{ icon: '✅', category: 'Categoria Principal: Desempenho Acadêmico', points: ["Nota Mínima: Aprovação exige nota igual ou superior a 7,0 (Conceito C).", "Frequência Mínima: É obrigatória a presença em, no mínimo, 75% das aulas.", "CRE (Coeficiente de Rendimento Escolar): Manter o CRE acima de 7,0 é condição para a permanência no programa."] }], legalBasis: "Art. 125 (Sistema de Notas), Art. 126 (Frequência Mínima), Art. 110, inciso VI (Desligamento por CRE baixo)", documentation: "Não se aplica.", deadlines: "O professor tem até 30 dias após o término da disciplina para lançar as notas. Reprovar 2x na mesma disciplina ou ter CRE < 7,0 leva ao desligamento." },
    { topic: "VIDA ACADÊMICA", subtopic: "Estágio de Docência", question: "O Estágio de Docência é obrigatório?", answer: "Sim, o estágio de docência é uma atividade acadêmica obrigatória para bolsistas, visando a formação para o ensino superior. Discentes que já são professores podem solicitar a dispensa da atividade.", details: [{ icon: '👨‍🏫', category: 'Detalhes do Estágio', points: ["É obrigatório para discentes bolsistas.", "Mestrandos devem cursar por um semestre; doutorandos por dois semestres.", "As atividades são supervisionadas pelo orientador e por um professor da graduação.", "Ao final, o discente deve elaborar um relatório para obter os créditos."] }], legalBasis: "Art. 118", documentation: "Relatório de atividades do estágio.", deadlines: "Deve ser cumprido dentro do prazo regular do curso." },
    { topic: "VIDA ACADÊMICA", subtopic: "Aproveitamento de Estudos", question: "Posso aproveitar créditos de outros cursos de pós-graduação?", answer: "Sim, o Colegiado pode aceitar créditos de disciplinas cursadas em outros programas de pós-graduação (stricto ou lato sensu), desde que tenham sido concluídas nos últimos 5 anos e sejam relevantes para sua formação.", details: [{ icon: '📚', category: 'Regras para Aproveitamento', points: ["O componente curricular deve ter sido concluído há, no máximo, 5 anos.", "A nota obtida deve ser igual ou superior a 7,0 (ou conceito C).", "O número máximo de créditos a serem aproveitados é definido no regimento de cada programa.", "É necessário apresentar requerimento com histórico escolar e ementas das disciplinas."] }], legalBasis: "Art. 129, Art. 130", documentation: "Requerimento formal, histórico escolar e ementas das disciplinas cursadas.", deadlines: "A solicitação deve ser feita formalmente à coordenação do programa." },
    { topic: "PRAZOS E SITUAÇÕES ESPECIAIS", subtopic: "Prazos do Curso", question: "Qual o prazo máximo para concluir o mestrado/doutorado?", answer: "O regimento estabelece prazos mínimos e máximos para a conclusão do curso, contados a partir da data da primeira matrícula.", details: [{ icon: '⏳', category: 'Categoria Principal: Prazos Regimentais', points: ["Mestrado: Mínimo de 1 ano e máximo de 2 anos e 6 meses (30 meses).", "Doutorado: Mínimo de 2 anos e máximo de 5 anos (60 meses).", "Prorrogação: Em casos excepcionais, o Colegiado pode conceder uma prorrogação de até 6 meses (mestrado) ou 12 meses (doutorado)."] }], legalBasis: "Art. 113 (Prazos), Art. 114 (Prorrogação)", documentation: "Para prorrogação: Requerimento formal, justificativa, parecer do orientador, versão preliminar do trabalho, cronograma.", deadlines: "A solicitação de prorrogação deve ser feita ANTES do vencimento do prazo regular. A decisão é do Colegiado." },
    { topic: "PRAZOS E SITUAÇÕES ESPECIAIS", subtopic: "Trancamento Geral", question: "Posso trancar o curso por um tempo?", answer: "Sim, é possível solicitar a 'Interrupção de Estudos' (trancamento geral), mas apenas por motivos específicos e por um período limitado.", details: [{ icon: '⏸️', category: 'Categoria Principal: Interrupção de Estudos', points: ["Motivos Aceitos: Viagem de trabalho, doença comprovada ou licença maternidade.", "Prazos de Trancamento: Mestrado (1 período letivo), Doutorado (até 2 períodos).", "Efeito: O período trancado não é contado no tempo total do curso.", "Bolsa: A bolsa é suspensa durante a interrupção (exceto licença maternidade)."] }], legalBasis: "Art. 107 (Regras para Interrupção de Estudos)", documentation: "Requerimento formal, documentos comprobatórios, parecer do orientador.", deadlines: "A solicitação deve ser feita antes ou durante o período a ser trancado. A decisão é do Colegiado." },
    { topic: "ORIENTAÇÃO", subtopic: "Definição e Troca de Orientador", question: "Como funciona a definição e a troca de orientador?", answer: "Todo aluno tem direito a um orientador, que é formalizado pelo Colegiado. A troca é possível, mas é um processo que requer acordo e aprovação.", details: [{ icon: '🤝', category: 'Categoria Principal: Relação Orientador-Orientando', points: ["Definição: Designado pelo Colegiado, com base na indicação do aluno e afinidade de pesquisa.", "Mudança pelo Aluno: O aluno pode solicitar a troca, com anuência do orientador atual e do novo.", "Conflito: Em caso de discordância, a decisão final sobre a troca cabe ao Colegiado."] }], legalBasis: "Art. 65 (Definição), Art. 66 (Mudança pelo Discente), Art. 32, inciso XXI (Atribuição do Colegiado)", documentation: "Para troca: Requerimento formal, justificativa, carta de anuência/aceite.", deadlines: "O Colegiado tem até 30 dias para designar um novo orientador em caso de vacância." },
    { topic: "ORIENTAÇÃO", subtopic: "Definição e Troca de Orientador", question: "Um orientador pode deixar de me orientar?", answer: "Sim, um orientador pode solicitar ao Colegiado o direito de abdicar da orientação de um discente. Isso deve ser feito através de uma justificativa formal e circunstanciada, baseada nos relatórios de desempenho do aluno.", details: [{ icon: '👋', category: 'Abdicação da Orientação', points: ["Direito do Orientador: É facultado ao orientador o direito de abdicar da orientação.", "Justificativa: A solicitação deve ser formal e bem fundamentada.", "Aprovação: O pedido precisa ser submetido e aprovado pelo Colegiado do programa.", "Novo Orientador: Em caso de aprovação, o Colegiado designará um novo orientador em até 30 dias."] }], legalBasis: "Art. 67 (Abdicação pelo Orientador), Art. 68 (Tutela da Coordenação)", documentation: "Justificativa formal do orientador.", deadlines: "A decisão final é do Colegiado." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Exame de Qualificação", question: "O que é o Exame de Qualificação?", answer: "O exame de qualificação (ou pré-banca) é uma etapa obrigatória para o doutorado que avalia a capacidade do discente de realizar uma pesquisa original. É um marco importante que antecede a defesa final da tese.", details: [{ icon: '🧐', category: 'Processo de Qualificação', points: ["Objetivo: Avaliar a maturidade da pesquisa e a capacidade do discente.", "Obrigatoriedade: É obrigatório para o Doutorado e pode ser exigido no Mestrado, conforme o regimento do programa.", "Banca: Composta por no mínimo três doutores, aprovada pelo Colegiado.", "Resultado: O discente pode ser 'Aprovado' ou 'Reprovado'. Em caso de reprovação, há uma única chance de repetir o exame."] }], legalBasis: "Art. 147, 148, 149, 150", documentation: "Versão do trabalho para a banca, requerimento de agendamento.", deadlines: "O prazo para a segunda tentativa é de até 120 dias (Doutorado) ou 60 dias (Mestrado) após a primeira." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Requisitos para Defesa", question: "O que preciso fazer para poder defender minha dissertação/tese?", answer: "Para marcar a defesa, é preciso ter cumprido uma série de requisitos acadêmicos e administrativos, formando um checklist obrigatório.", details: [{ icon: '🏁', category: 'Categoria Principal: Conclusão de Curso', points: ["Checklist: Créditos integralizados, aprovação na qualificação, proficiência em língua estrangeira, estágio docência cumprido, declaração de não plágio e recomendação do orientador."] }], legalBasis: "Art. 151 (Requisitos para a Defesa)", documentation: "Requerimento de agendamento, autorização do orientador, versão do trabalho para a banca, sugestão de nomes para a comissão, comprovantes de todos os requisitos.", deadlines: "O Colegiado tem até 30 dias para homologar a banca, e a defesa deve ser marcada em até 30 dias após a homologação." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Banca e Resultados", question: "Como funciona a banca de defesa e quais os possíveis resultados?", answer: "A defesa é uma sessão pública julgada por uma comissão de especialistas. O resultado pode ser aprovação, aprovação com correções ou reprovação.", details: [{ icon: '🧑‍⚖️', category: 'Categoria Principal: Banca Examinadora', points: ["Composição (Mestrado): Orientador + 2 especialistas (1 externo).", "Composição (Doutorado): Orientador + 4 especialistas (2 externos, 1 de outra instituição).", "Resultados: Aprovado(a), Insuficiente (com prazo para correções), Reprovado(a) (leva ao desligamento)."] }], legalBasis: "Art. 156 (Composição da Banca), Art. 157 (Resultados)", documentation: "Ata da sessão de defesa pública.", deadlines: "Prazo para correções (se 'Insuficiente'): 90 dias (Mestrado) ou 180 dias (Doutorado)." },
    { topic: "DEFESA E DIPLOMAÇÃO", subtopic: "Diplomação", question: "Fui aprovado! Como faço para solicitar o diploma?", answer: "Após a aprovação e a realização das correções, é preciso depositar a versão final do trabalho no repositório da UEPB e, então, solicitar formalmente a expedição do diploma.", details: [{ icon: '📜', category: 'Categoria Principal: Diplomação', points: ["Depósito Final: A versão final corrigida (PDF/A com ficha catalográfica) deve ser depositada no Repositório Institucional em até 30 dias após a defesa.", "Solicitação do Diploma: O processo é aberto pelo aluno junto à PRPGP, com toda a documentação comprobatória."] }], legalBasis: "Art. 159 (Depósito Final), Art. 162 (Requisitos para Outorga), Art. 163 (Documentação para Expedição)", documentation: "Requerimento padrão, Ata da defesa, Cópia do diploma anterior, Documentos pessoais, Comprovante de depósito, Declaração de quitação da biblioteca, Declaração e histórico de conclusão.", deadlines: "Prazo para Depósito: 30 dias após a defesa (prorrogável por mais 15). A expedição do diploma é de responsabilidade da PRPGP." },
    { topic: "SITUAÇÕES PROBLEMÁTICAS", subtopic: "Desligamento", question: "Em quais situações posso ser desligado do programa?", answer: "O desligamento é automático em casos de desempenho acadêmico insuficiente, descumprimento de prazos ou infrações graves, como plágio.", details: [{ icon: '❌', category: 'Categoria Principal: Desligamento', points: ["Causas: Reprovar 2x na mesma disciplina, não ser aprovado na proficiência, não se matricular, reprovar 2x na qualificação, esgotar o prazo, ter CRE < 7,0, ser reprovado na defesa, ou plágio."] }], legalBasis: "Art. 110 (Causas de Desligamento), Art. 111 (Abandono)", documentation: "O processo é administrativo, iniciado pela Coordenação.", deadlines: "O aluno pode recorrer da decisão de desligamento, sendo o Colegiado a primeira instância." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Propriedade Intelectual", question: "Quem é o dono da minha pesquisa? Posso pedir sigilo?", answer: "Os resultados da pesquisa são de propriedade da UEPB, mas os direitos autorais são resguardados. Sim, você pode e deve solicitar sigilo se planeja publicar ou patentear.", details: [{ icon: '💡', category: 'Categoria Principal: Propriedade Intelectual', points: ["Propriedade: Os resultados são da UEPB, mas a divulgação deve sempre mencionar a universidade, o orientador e o discente.", "Sigilo: Você tem o direito de solicitar um prazo de sigilo de até 1 ano para a divulgação do seu trabalho no repositório.", "Processo: A solicitação de sigilo é feita no momento do depósito final do trabalho."] }], legalBasis: "Art. 187 (Divulgação e Sigilo), Art. 188 (Propriedade dos Resultados)", documentation: "Formulário de autorização de depósito, com a opção de embargo/sigilo marcada.", deadlines: "Prazo de Sigilo: Até 1 ano, podendo ser ampliado. A solicitação é feita no ato do depósito." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Regras de Transição", question: "Como funcionam as regras de transição para o novo regimento?", answer: "Para discentes que ingressaram até o segundo período letivo de 2023, aplicam-se as disposições do regimento anterior. Esta nova resolução vale para os ingressantes a partir de sua publicação.", details: [{ icon: '📜', category: 'Categoria Principal: Normas Aplicáveis', points: ["Marco Temporal: A data de ingresso no curso define qual regimento se aplica ao aluno.", "Regra Anterior: Alunos ingressantes até 2023.2 seguem o regimento antigo.", "Regra Nova: Alunos ingressantes após a publicação desta resolução seguem as novas regras."] }], legalBasis: "Art. 189", documentation: "Não se aplica documentação específica, a regra é aplicada automaticamente pela secretaria.", deadlines: "A regra de transição é permanente para as turmas especificadas." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Passagem Direta Mestrado-Doutorado", question: "É possível passar do mestrado para o doutorado diretamente (fast track)?", answer: "Sim, os programas podem prever a passagem de alunos do mestrado para o doutorado sem a necessidade de um novo processo seletivo público, contanto que critérios de excelência sejam atendidos.", details: [{ icon: '🚀', category: 'Categoria Principal: Mobilidade Acadêmica Avançada', points: ["Condição: O regimento do programa deve prever e detalhar essa possibilidade.", "Critérios: O aluno deve demonstrar desempenho excepcional, produção acadêmica qualificada e ter um plano de trabalho consistente para o doutorado.", "Avaliação: A passagem depende de uma avaliação rigorosa por uma comissão designada pelo Colegiado."] }], legalBasis: "Art. 104", documentation: "Requerimento formal, histórico escolar, currículo Lattes atualizado, produção científica, plano de trabalho para o doutorado, carta de recomendação do orientador.", deadlines: "A solicitação deve ser feita em um prazo definido pelo regimento do programa, geralmente após a qualificação do mestrado." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Deveres do Discente", question: "Quais são os principais deveres do aluno de pós-graduação?", answer: "Além do respeito às normas da UEPB, o aluno deve cumprir o plano de estudos, manter o orientador informado, participar das atividades, realizar o estágio de docência e submeter projetos ao Comitê de Ética quando necessário.", details: [{ icon: '📋', category: 'Categoria Principal: Responsabilidades Acadêmicas', points: ["Zelar pelo nome da instituição e cumprir o regimento.", "Manter seus dados cadastrais e curriculares atualizados.", "Dedicar-se às atividades do curso e cumprir os prazos.", "Cumprir o Estágio de Docência (obrigatório para bolsistas).", "Observar as diretrizes do Comitê de Ética em Pesquisa."] }], legalBasis: "Art. 74", documentation: "Comprovantes de submissão ao Comitê de Ética, relatórios de estágio de docência, etc., conforme exigido pelo programa.", deadlines: "Os deveres devem ser cumpridos ao longo de todo o curso." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Representação Discente", question: "Como funciona a representação dos alunos no Colegiado?", answer: "Os alunos (discentes) têm direito a uma representação no Colegiado do programa, com direito a voz e voto, garantindo sua participação nas decisões. O mandato é de 1 ano, permitida uma recondução.", details: [{ icon: '🗣️', category: 'Categoria Principal: Governança e Participação', points: ["Composição: O Colegiado inclui representantes dos alunos, eleitos por seus pares.", "Mandato: O mandato do representante discente é de 1 (um) ano.", "Recondução: É permitida uma recondução para um segundo mandato.", "Voz e Voto: Os representantes participam ativamente das reuniões e deliberações."] }], legalBasis: "Art. 31, inciso III e §3º", documentation: "A eleição é organizada pelos próprios alunos e formalizada junto à coordenação do programa.", deadlines: "O mandato é de 1 ano, com eleições periódicas para a escolha dos representantes." },
    { topic: "DIREITOS E GOVERNANÇA", subtopic: "Deveres do Discente", question: "Quais são os principais deveres do aluno de pós-graduação?", answer: "Além do respeito às normas da UEPB, o aluno deve cumprir o plano de estudos, manter o orientador informado, participar das atividades, realizar o estágio de docência e submeter projetos ao Comitê de Ética quando necessário.", details: [{ icon: '📋', category: 'Categoria Principal: Responsabilidades Acadêmicas', points: ["Zelar pelo nome da instituição e cumprir o regimento.", "Manter seus dados cadastrais e curriculares atualizados.", "Dedicar-se às atividades do curso e cumprir os prazos.", "Cumprir o Estágio de Docência (obrigatório para bolsistas).", "Observar as diretrizes do Comitê de Ética em Pesquisa."] }], legalBasis: "Art. 74", documentation: "Comprovantes de submissão ao Comitê de Ética, relatórios de estágio de docência, etc., conforme exigido pelo programa.", deadlines: "Os deveres devem ser cumpridos ao longo de todo o curso." },
    { topic: "REQUISITOS DE CONCLUSÃO", subtopic: "Critérios de Finalização", question: "Quais são os requisitos obrigatórios para concluir o Mestrado em Ciências Farmacêuticas?", answer: "Para concluir o Mestrado no PPGCF/UEPB, o discente deve atender a critérios específicos de prazo, proficiência em idioma e produção científica, variando conforme sua situação de bolsa.", details: [{ icon: '🎯', category: 'Categoria Principal: Requisitos de Conclusão', points: ["Prazo: Duração máxima de 24 meses, com possível prorrogação de até 6 meses mediante aprovação do colegiado.", "Proficiência: Aprovação em Exame de Proficiência em Língua Inglesa de instituição pública reconhecida.", "Produção Científica (sem bolsa): Mínimo de 1 produto submetido (artigo Qualis A, patente ou capítulo de livro).", "Produção Científica (com bolsa): Mínimo de 2 produtos submetidos ou 1 aceito (artigo Qualis A, patente ou capítulo de livro).", "Observação: O discente deve ser primeiro autor dos artigos submetidos."] }], legalBasis: "Regimento Interno do PPGCF", documentation: "Comprovante de proficiência, comprovantes de submissão/aceite de produtos científicos.", deadlines: "Prazo máximo de 24 meses para conclusão, com possibilidade de prorrogação de 6 meses." }
];

// Quick access cards data
const quickAccessCards = [
    { icon: 'fas fa-user-plus', title: 'Ingresso', description: 'Processo seletivo, matrícula e admissão', topic: 'INGRESSO E ADMISSÃO' },
    { icon: 'fas fa-graduation-cap', title: 'Vida Acadêmica', description: 'Créditos, disciplinas e avaliações', topic: 'VIDA ACADÊMICA' },
    { icon: 'fas fa-money-bill-wave', title: 'Bolsas', description: 'Auxílios financeiros e dedicação', topic: 'QUESTÕES FINANCEIRAS' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Orientação', description: 'Orientadores e relacionamento', topic: 'ORIENTAÇÃO' },
    { icon: 'fas fa-certificate', title: 'Defesa', description: 'Qualificação, defesa e diplomação', topic: 'DEFESA E DIPLOMAÇÃO' },
    { icon: 'fas fa-balance-scale', title: 'Direitos e Governança', description: 'Estrutura, funcionamento e direitos', topic: 'DIREITOS E GOVERNANÇA' },
    { icon: 'fas fa-clock', title: 'Prazos e Situações Especiais', description: 'Prazos do curso e situações especiais', topic: 'PRAZOS E SITUAÇÕES ESPECIAIS' },
    { icon: 'fas fa-exclamation-triangle', title: 'Situações Problemáticas', description: 'Desligamento e problemas acadêmicos', topic: 'SITUAÇÕES PROBLEMÁTICAS' },
    { icon: 'fas fa-users', title: 'Corpo Docente', description: 'Professores, orientadores e credenciamento', topic: 'CORPO DOCENTE' },
    { icon: 'fas fa-check-circle', title: 'Requisitos de Conclusão', description: 'Critérios para finalizar o curso', topic: 'REQUISITOS DE CONCLUSÃO' }
];

// Topic icons
const topicIcons = {
    "INGRESSO E ADMISSÃO": "fas fa-door-open",
    "ESTRUTURA E GOVERNANÇA": "fas fa-building",
    "CORPO DOCENTE": "fas fa-users",
    "QUESTÕES FINANCEIRAS": "fas fa-money-bill-wave",
    "VIDA ACADÊMICA": "fas fa-graduation-cap",
    "PRAZOS E SITUAÇÕES ESPECIAIS": "fas fa-clock",
    "ORIENTAÇÃO": "fas fa-chalkboard-teacher",
    "DEFESA E DIPLOMAÇÃO": "fas fa-certificate",
    "SITUAÇÕES PROBLEMÁTICAS": "fas fa-exclamation-triangle",
    "DIREITOS E GOVERNANÇA": "fas fa-balance-scale",
    "REQUISITOS DE CONCLUSÃO": "fas fa-check-circle"
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const topicFilter = document.getElementById('topicFilter');
const subtopicFilter = document.getElementById('subtopicFilter');
const faqContainer = document.getElementById('faqContainer');
const noResults = document.getElementById('noResults');
const resultsCount = document.getElementById('resultsCount');
const quickCards = document.getElementById('quickCards');

// State
let currentResults = faqData;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateFilters();
    renderQuickAccessCards();
    renderFAQ(faqData);
    updateResultsCount(faqData.length);
    updateHeroStats();
    
    // Event listeners
    searchInput.addEventListener('input', debounce(handleSearch, 300));
    topicFilter.addEventListener('change', handleFilter);
    subtopicFilter.addEventListener('change', handleFilter);
}

function updateHeroStats() {
    // Contar perguntas totais
    const totalQuestions = faqData.length;
    
    // Contar categorias únicas (tópicos)
    const uniqueTopics = [...new Set(faqData.map(item => item.topic))].length;
    
    // Atualizar os elementos no DOM
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length >= 2) {
        statNumbers[0].textContent = totalQuestions;
        statNumbers[1].textContent = uniqueTopics;
    }
}

function populateFilters() {
    // Populate topic filter
    const topics = [...new Set(faqData.map(item => item.topic))].sort();
    topics.forEach(topic => {
        const option = document.createElement('option');
        option.value = topic;
        option.textContent = topic;
        topicFilter.appendChild(option);
    });

    // Populate subtopic filter
    const subtopics = [...new Set(faqData.map(item => item.subtopic))].sort();
    subtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        subtopicFilter.appendChild(option);
    });
}

function renderQuickAccessCards() {
    quickCards.innerHTML = quickAccessCards.map(card => `
        <div class="quick-card" onclick="filterByTopic('${card.topic}')">
            <div class="quick-card-icon">
                <i class="${card.icon}"></i>
            </div>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `).join('');
}

function renderFAQ(items) {
    if (items.length === 0) {
        faqContainer.innerHTML = '';
        noResults.classList.add('show');
        return;
    }

    noResults.classList.remove('show');
    
    faqContainer.innerHTML = items.map((item, index) => `
        <div class="faq-item" id="faq-${index}">
            <div class="faq-header-item" onclick="toggleFAQ(${index})">
                <div class="faq-question-content">
                    <div class="faq-question">${item.question}</div>
                    <div class="faq-tags">
                        <span class="faq-tag topic">${item.topic}</span>
                        <span class="faq-tag subtopic">${item.subtopic}</span>
                    </div>
                </div>
                <i class="fas fa-chevron-down faq-chevron"></i>
            </div>
            <div class="faq-content">
                <div class="faq-answer">${item.answer}</div>
                <div class="faq-details">
                    ${renderDetails(item)}
                    ${renderInfoGrid(item)}
                </div>
            </div>
        </div>
    `).join('');
}

function renderDetails(item) {
    return item.details.map(detail => `
        <div class="detail-section">
            <div class="detail-icon">${detail.icon}</div>
            <div class="detail-category">${detail.category}</div>
            <ul class="detail-points">
                ${detail.points.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

function renderInfoGrid(item) {
    return `
        <div class="info-grid">
            <div class="info-item">
                <i class="fas fa-book info-icon"></i>
                <div class="info-content">
                    <h5>Base Legal <i class="fas fa-external-link-alt legal-link-icon" onclick="openLegalDocument(event)"></i></h5>
                    <p>${item.legalBasis}</p>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-file-alt info-icon"></i>
                <div class="info-content">
                    <h5>Documentação</h5>
                    <p>${item.documentation}</p>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-clock info-icon"></i>
                <div class="info-content">
                    <h5>Prazos</h5>
                    <p>${item.deadlines}</p>
                </div>
            </div>
        </div>
    `;
}

function toggleFAQ(index) {
    const faqItem = document.getElementById(`faq-${index}`);
    faqItem.classList.toggle('active');
}

function handleSearch() {
    applyFilters();
}

function handleFilter() {
    applyFilters();
}

function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const selectedTopic = topicFilter.value;
    const selectedSubtopic = subtopicFilter.value;

    // Show/hide quick access cards based on search or any active filter
    const quickAccessSection = document.querySelector('.quick-access');
    const hasActiveFilters = searchTerm || selectedTopic || selectedSubtopic;
    
    if (hasActiveFilters) {
        quickAccessSection.classList.add('hidden');
    } else {
        quickAccessSection.classList.remove('hidden');
    }

    let filtered = faqData.filter(item => {
        // Topic filter
        if (selectedTopic && item.topic !== selectedTopic) return false;
        
        // Subtopic filter
        if (selectedSubtopic && item.subtopic !== selectedSubtopic) return false;
        
        // Search filter
        if (searchTerm) {
            const searchableText = [
                item.question,
                item.answer,
                item.topic,
                item.subtopic,
                item.legalBasis,
                item.documentation,
                item.deadlines,
                ...item.details.flatMap(d => [d.category, ...d.points])
            ].join(' ').toLowerCase();
            
            if (!searchableText.includes(searchTerm)) return false;
        }
        
        return true;
    });

    currentResults = filtered;
    renderFAQ(filtered);
    updateResultsCount(filtered.length);
    
    // Update subtopic filter based on selected topic
    if (selectedTopic) {
        updateSubtopicFilter(selectedTopic);
    } else {
        populateSubtopicFilter();
    }
}

function updateSubtopicFilter(selectedTopic) {
    const relevantSubtopics = [...new Set(
        faqData
            .filter(item => item.topic === selectedTopic)
            .map(item => item.subtopic)
    )].sort();
    
    const currentValue = subtopicFilter.value;
    subtopicFilter.innerHTML = '<option value="">Todos os Subtópicos</option>';
    
    relevantSubtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        if (subtopic === currentValue) option.selected = true;
        subtopicFilter.appendChild(option);
    });
}

function populateSubtopicFilter() {
    const subtopics = [...new Set(faqData.map(item => item.subtopic))].sort();
    const currentValue = subtopicFilter.value;
    subtopicFilter.innerHTML = '<option value="">Todos os Subtópicos</option>';
    
    subtopics.forEach(subtopic => {
        const option = document.createElement('option');
        option.value = subtopic;
        option.textContent = subtopic;
        if (subtopic === currentValue) option.selected = true;
        subtopicFilter.appendChild(option);
    });
}

function filterByTopic(topic) {
    topicFilter.value = topic;
    subtopicFilter.value = '';
    searchInput.value = '';
    applyFilters();
    
    // Scroll to FAQ section
    document.querySelector('.faq-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function updateResultsCount(count) {
    resultsCount.textContent = `${count} resultado${count !== 1 ? 's' : ''}`;
    
    // Mostrar ou ocultar botão de reset baseado nos filtros ativos
    const resetBtn = document.getElementById('resetFiltersBtn');
    const hasActiveFilters = searchInput.value.trim() !== '' || 
                           topicFilter.value !== '' || 
                           subtopicFilter.value !== '';
    
    if (hasActiveFilters) {
        resetBtn.classList.add('show');
    } else {
        resetBtn.classList.remove('show');
    }
}

function resetAllFilters() {
    // Limpar todos os filtros
    searchInput.value = '';
    topicFilter.value = '';
    subtopicFilter.value = '';
    
    // Restaurar filtro de subtópicos
    populateSubtopicFilter();
    
    // Mostrar cards de acesso rápido novamente
    const quickAccessSection = document.querySelector('.quick-access');
    quickAccessSection.classList.remove('hidden');
    
    // Aplicar filtros (que agora estão vazios)
    applyFilters();
    
    // Scroll suave para o topo da seção FAQ
    document.querySelector('.faq-section').scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Function to open legal document
function openLegalDocument(event) {
    event.stopPropagation();
    window.open('https://drive.google.com/file/d/1JLRNmKDOcBQI3TnAFPxKVXyf7K-UTF7o/view?usp=sharing', '_blank', 'noopener,noreferrer');
}

// Back to Top Button functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide back to top button based on scroll position
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open FAQ items
        document.querySelectorAll('.faq-item.active').forEach(item => {
            item.classList.remove('active');
        });
    }
});
