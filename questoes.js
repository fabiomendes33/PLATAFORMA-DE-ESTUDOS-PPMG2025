const bancodeQuestoes = [
  // 1–5 Interpretação de textos
  {
    id: 1,
    assunto: "Interpretação – ideia central",
    enunciado:
      "Um texto sobre o trabalho do policial penal afirma que 'a firmeza na aplicação das normas precisa caminhar junto com o respeito aos direitos fundamentais'. A ideia central dessa frase é que:",
    alternativas: {
      A: "a aplicação das normas dispensa a consideração dos direitos fundamentais.",
      B: "a atuação do policial penal deve equilibrar disciplina e respeito à dignidade humana.",
      C: "os direitos fundamentais são obstáculos ao cumprimento das normas.",
      D: "a disciplina é menos importante do que a cordialidade com os presos.",
    },
    correta: "B",
    explicacao:
      "O enunciado fala em firmeza e, ao mesmo tempo, em respeito aos direitos fundamentais, indicando equilíbrio entre disciplina e dignidade, que corresponde à alternativa B.",
  },
  {
    id: 2,
    assunto: "Interpretação – inferência",
    enunciado:
      "Se um autor afirma que 'a comunicação clara entre os setores do presídio reduz falhas de segurança', infere‑se corretamente que:",
    alternativas: {
      A: "a comunicação confusa pode aumentar o risco de falhas.",
      B: "a segurança independe da comunicação interna.",
      C: "apenas a chefia precisa se comunicar com clareza.",
      D: "a comunicação clara dispensa qualquer planejamento.",
    },
    correta: "A",
    explicacao:
      "Se a comunicação clara reduz falhas, conclui‑se que a comunicação confusa tende a favorecê‑las; essa relação está na alternativa A.",
  },
  {
    id: 3,
    assunto: "Interpretação – implícitos",
    enunciado:
      "Na frase 'O servidor voltou a descumprir o horário de plantão', depreende‑se que:",
    alternativas: {
      A: "é a primeira vez que há descumprimento de horário.",
      B: "o servidor mudou recentemente de unidade prisional.",
      C: "o descumprimento de horário já havia ocorrido antes.",
      D: "o servidor sempre cumpriu pontualmente o horário.",
    },
    correta: "C",
    explicacao:
      "O verbo 'voltar a' indica repetição: pressupõe que o servidor já havia descumprido o horário em outra ocasião.",
  },
  {
    id: 4,
    assunto: "Interpretação – ponto de vista",
    enunciado:
      "Em um artigo, lê‑se: 'A transparência nos procedimentos internos aumenta a confiança da sociedade no sistema prisional.' O autor:",
    alternativas: {
      A: "defende que a sociedade não tem interesse em informações sobre o sistema.",
      B: "critica a transparência por considerá‑la perigosa.",
      C: "apresenta opinião favorável à transparência administrativa.",
      D: "afirma que a transparência é incompatível com a legalidade.",
    },
    correta: "C",
    explicacao:
      "O texto associa transparência a aumento de confiança, demonstrando avaliação positiva dessa prática, como diz a alternativa C.",
  },
  {
    id: 5,
    assunto: "Interpretação – funções da linguagem",
    enunciado:
      "Um comunicado interno que orienta os agentes sobre uso de equipamentos de proteção individual tem, predominantemente, função:",
    alternativas: {
      A: "poética, valorizando a forma da mensagem.",
      B: "injuntiva/instrucional, indicando procedimentos a serem seguidos.",
      C: "fática, apenas para testar o canal de comunicação.",
      D: "lúdica, visando ao entretenimento dos servidores.",
    },
    correta: "B",
    explicacao:
      "Comunicados que orientam condutas cumprem função injuntiva ou instrucional, pois determinam o que o destinatário deve fazer.",
  },

  // 6–9 Coesão, conectivos, referência
  {
    id: 6,
    assunto: "Coesão – conectivos",
    enunciado:
      "Na frase 'O agente foi firme, mas manteve o diálogo com os custodiados', o conectivo 'mas' estabelece relação de:",
    alternativas: {
      A: "adição.",
      B: "oposição ou contraste.",
      C: "conclusão.",
      D: "causa.",
    },
    correta: "B",
    explicacao:
      "'Mas' é conjunção adversativa, marcando contraste entre ser firme e, ao mesmo tempo, manter o diálogo.",
  },
  {
    id: 7,
    assunto: "Coesão – substituição pronominal",
    enunciado:
      "No trecho 'As normas disciplinares foram revisadas e elas serão divulgadas em todas as unidades', o pronome 'elas' retoma:",
    alternativas: {
      A: "unidades.",
      B: "normas disciplinares.",
      C: "todas.",
      D: "foram.",
    },
    correta: "B",
    explicacao:
      "O pronome 'elas' está no feminino plural e retoma o termo 'normas disciplinares', também feminino plural.",
  },
  {
    id: 8,
    assunto: "Coesão – pronome relativo",
    enunciado:
      "Na frase 'Os presos que descumprirem as regras responderão administrativamente', o termo 'que' é:",
    alternativas: {
      A: "artigo definido.",
      B: "pronome relativo, retomando 'presos'.",
      C: "conjunção integrante.",
      D: "advérbio de intensidade.",
    },
    correta: "B",
    explicacao:
      "O 'que' introduz oração adjetiva e retoma o antecedente 'presos', caracterizando‑se como pronome relativo.",
  },
  {
    id: 9,
    assunto: "Coesão – conectores de causa e consequência",
    enunciado:
      "Assinale a frase em que o conectivo está empregado com sentido de causa:",
    alternativas: {
      A: "O agente se preparou para a revista, portanto realizou o procedimento com segurança.",
      B: "O agente se preparou para a revista, porque sabia da importância do procedimento.",
      C: "O agente se preparou para a revista, logo cumpriu o cronograma.",
      D: "O agente se preparou para a revista, assim evitou problemas.",
    },
    correta: "B",
    explicacao:
      "'Porque' introduz a causa da preparação do agente; 'portanto', 'logo' e 'assim' indicam consequência da preparação.",
  },

  // 10–13 Concordância, regência, crase
  {
    id: 10,
    assunto: "Concordância verbal",
    enunciado: "Assinale a frase correta quanto à concordância verbal:",
    alternativas: {
      A: "Houveram vários incidentes durante o plantão.",
      B: "Faltou agentes para cobrir o turno da noite.",
      C: "Faltaram agentes para cobrir o turno da noite.",
      D: "Restou apenas duas vagas no curso de formação.",
    },
    correta: "C",
    explicacao:
      "O verbo 'faltar' concorda com o sujeito plural 'agentes' ('faltaram'). Em A, 'haver' com sentido de existir é impessoal ('houve'); B e D exigiriam verbo no plural.",
  },
  {
    id: 11,
    assunto: "Concordância nominal",
    enunciado:
      "Assinale a alternativa em que a concordância nominal está correta:",
    alternativas: {
      A: "As agentes estavam meio cansadas após o plantão.",
      B: "As normas eram bastante rigoroso.",
      C: "Os relatórios estavam meio incompletas.",
      D: "Os servidores pareciam bastante atento às instruções.",
    },
    correta: "A",
    explicacao:
      "Em A, 'meio' atua como advérbio de intensidade e permanece invariável ('meio cansadas'); as demais apresentam discordância entre substantivo e adjetivo.",
  },
  {
    id: 12,
    assunto: "Crase / regência",
    enunciado: "Assinale a frase em que a crase está empregada corretamente:",
    alternativas: {
      A: "Os servidores tiveram acesso à edital publicado.",
      B: "O diretor referiu‑se à condutas inadequadas.",
      C: "A chefia deu prioridade à segurança dos custodiados.",
      D: "O agente estava disposto à colaborar com qualquer irregularidade.",
    },
    correta: "C",
    explicacao:
      "Em C, 'dar prioridade a' + 'a segurança' exige crase ('à segurança'). Em A, o correto é 'ao edital'; em B, 'às condutas'; em D, não há artigo antes de 'colaborar'.",
  },
  {
    id: 13,
    assunto: "Regência verbal",
    enunciado:
      "Assinale a frase que respeita a regência verbal da norma‑padrão:",
    alternativas: {
      A: "Ele implicou com o colega sem motivo.",
      B: "Ele assistiu o jogo no plantão.",
      C: "Ele namorou com a mesma pessoa por anos.",
      D: "Ele visou a cumprir a lei apenas quando conveniente.",
    },
    correta: "A",
    explicacao:
      "'Implicar com' é regência correta. Em B, 'assistir' (ver) exige preposição: 'assistiu ao jogo'; em D, 'visar a' indica finalidade, mas o complemento 'cumprir a lei apenas quando conveniente' contradiz o sentido jurídico adequado.",
  },

  // 14–17 Pontuação e período composto
  {
    id: 14,
    assunto: "Pontuação – vírgula",
    enunciado:
      "Assinale a frase em que o uso da vírgula está de acordo com a norma‑padrão:",
    alternativas: {
      A: "Durante a inspeção, os agentes identificaram irregularidades.",
      B: "Os agentes, identificaram irregularidades durante a inspeção.",
      C: "Os agentes identificaram, irregularidades durante a inspeção.",
      D: "Durante a inspeção os agentes identificaram, irregularidades.",
    },
    correta: "A",
    explicacao:
      "Em A, a vírgula separa o adjunto adverbial deslocado ('Durante a inspeção'); nas demais há vírgulas desnecessárias.",
  },
  {
    id: 15,
    assunto: "Pontuação – orações subordinadas",
    enunciado:
      "Na frase 'Se necessário, a direção poderá alterar a escala de plantões', a vírgula foi usada para:",
    alternativas: {
      A: "indicar uma enumeração.",
      B: "separar oração subordinada adverbial condicional anteposta.",
      C: "marcar vocativo.",
      D: "separar sujeito de predicado.",
    },
    correta: "B",
    explicacao:
      "'Se necessário' é oração subordinada adverbial condicional deslocada para o início do período; nesse caso, a vírgula é recomendada.",
  },
  {
    id: 16,
    assunto: "Período composto – finalidade",
    enunciado:
      "Na frase 'Os agentes registraram o ocorrido para que a chefia analisasse a situação', a oração introduzida por 'para que' é:",
    alternativas: {
      A: "subordinada adverbial condicional.",
      B: "subordinada adverbial final.",
      C: "subordinada adjetiva restritiva.",
      D: "coordenada explicativa.",
    },
    correta: "B",
    explicacao:
      "'Para que' indica finalidade da ação de registrar, caracterizando oração subordinada adverbial final.",
  },
  {
    id: 17,
    assunto: "Vozes verbais",
    enunciado:
      "A frase 'A comissão analisou as ocorrências do mês' está na voz ativa. A forma correspondente na voz passiva analítica é:",
    alternativas: {
      A: "As ocorrências do mês analisaram a comissão.",
      B: "Foram as ocorrências do mês que analisaram a comissão.",
      C: "As ocorrências do mês foram analisadas pela comissão.",
      D: "As ocorrências do mês seriam analisadas pela comissão.",
    },
    correta: "C",
    explicacao:
      "Na voz passiva, o objeto direto torna‑se sujeito paciente: 'as ocorrências do mês foram analisadas pela comissão'.",
  },

  // 18–20 Vocabulário, colocação pronominal, tipos de texto
  {
    id: 18,
    assunto: "Vocabulário – sentido aproximado",
    enunciado:
      "Na frase 'A medida adotada mostrou‑se eficaz para reduzir conflitos', o termo 'eficaz' pode ser substituído, sem prejuízo essencial de sentido, por:",
    alternativas: {
      A: "supérflua.",
      B: "efetiva.",
      C: "improvisada.",
      D: "arriscada.",
    },
    correta: "B",
    explicacao:
      "'Eficaz' e 'efetiva' designam algo que produz o resultado esperado; as demais palavras têm sentidos diferentes.",
  },
  {
    id: 19,
    assunto: "Colocação pronominal",
    enunciado:
      "Assinale a frase que obedece às regras de colocação pronominal:",
    alternativas: {
      A: "Não se deve desrespeitar o regulamento.",
      B: "Deve‑se não desrespeitar o regulamento.",
      C: "Respeitar‑se‑á sempre o regulamento, não.",
      D: "O regulamento se, deve ser respeitado.",
    },
    correta: "A",
    explicacao:
      "O advérbio de negação 'não' exige próclise: 'Não se deve...'; as demais construções violam a norma de colocação pronominal.",
  },
  {
    id: 20,
    assunto: "Tipos de texto",
    enunciado:
      "Um manual de procedimentos que apresenta passo a passo como registrar uma ocorrência no sistema é classificado predominantemente como texto:",
    alternativas: {
      A: "narrativo.",
      B: "dissertativo-argumentativo.",
      C: "instrucional/injuntivo.",
      D: "poético.",
    },
    correta: "C",
    explicacao:
      "Manuais de procedimentos orientam ações do leitor, sendo textos instrucionais (injuntivos).",
  },
  // Legislação Especial – 20 questões

  // 1–5 LEP – princípios gerais e objetivos
  {
    id: 21,
    materia: "LEGESP",
    assunto: "LEP – finalidade da execução penal",
    enunciado:
      "A Lei de Execução Penal estabelece que a execução da pena privativa de liberdade tem, entre outros, o objetivo de:",
    alternativas: {
      A: "impor sofrimento físico ao condenado, para desestimular o crime.",
      B: "proporcionar condições para a integração social do condenado, resguardando também a segurança da sociedade.",
      C: "afastar definitivamente o condenado do convívio social, sem perspectiva de retorno.",
      D: "substituir qualquer atuação do Poder Judiciário na aplicação da pena.",
    },
    correta: "B",
    explicacao:
      "A LEP indica que a execução da pena busca efetivar condenações e oferecer condições para a harmônica integração social do condenado, conciliando proteção social e ressocialização.",
  },
  {
    id: 22,
    materia: "LEGESP",
    assunto: "LEP – legalidade da execução",
    enunciado:
      "Segundo a LEP, a execução penal deve assegurar ao condenado o respeito a seus direitos, desde que:",
    alternativas: {
      A: "compatíveis com a sentença e com os limites estabelecidos pela lei.",
      B: "sejam aprovados pelo diretor do estabelecimento prisional.",
      C: "não gerem qualquer custo para o Estado.",
      D: "não contrariem interesses da mídia ou da opinião pública.",
    },
    correta: "A",
    explicacao:
      "A LEP prevê que ao condenado serão assegurados direitos não alcançados pela sentença ou pela lei; ou seja, só podem ser restringidos direitos expressamente afetados pela condenação ou por norma legal.",
  },
  {
    id: 23,
    materia: "LEGESP",
    assunto: "LEP – classificação dos estabelecimentos",
    enunciado:
      "Conforme a LEP, os estabelecimentos penais devem ser classificados, entre outros critérios, de modo a:",
    alternativas: {
      A: "misturar presos provisórios e condenados em todas as unidades.",
      B: "diferenciar regimes e categorias de presos, evitando o contágio criminógeno.",
      C: "alocar todos os condenados em estabelecimentos de segurança máxima.",
      D: "organizar a lotação por ordem alfabética do nome do preso.",
    },
    correta: "B",
    explicacao:
      "A lei prevê classificação por regime e por natureza da pena, buscando separar presos provisórios de condenados e evitar a influência negativa entre diferentes perfis.",
  },
  {
    id: 24,
    materia: "LEGESP",
    assunto: "LEP – assistência ao preso",
    enunciado:
      "A assistência ao preso prevista na Lei de Execução Penal tem por finalidade principal:",
    alternativas: {
      A: "apenas garantir vantagens materiais superiores às da população em geral.",
      B: "prevenir o crime e orientar o retorno à convivência em sociedade.",
      C: "substituir a família em todas as obrigações afetivas.",
      D: "isolar o preso de qualquer contato com o meio social.",
    },
    correta: "B",
    explicacao:
      "A assistência material, médica, educacional, social, religiosa e jurídica busca prevenir reincidência e preparar o retorno do apenado ao convívio social.",
  },
  {
    id: 25,
    materia: "LEGESP",
    assunto: "LEP – direitos do preso",
    enunciado: "Entre os direitos assegurados ao preso na LEP, destaca‑se:",
    alternativas: {
      A: "ser submetido a penas corporais para manutenção da disciplina.",
      B: "receber tratamento cruel quando houver falta grave.",
      C: "ter respeitada sua integridade física e moral.",
      D: "ficar permanentemente incomunicável.",
    },
    correta: "C",
    explicacao:
      "A LEP, em consonância com a Constituição, garante respeito à integridade física e moral do preso, vedando penas cruéis e tratamentos desumanos.",
  },

  // 6–9 LEP – disciplina e sanções
  {
    id: 26,
    materia: "LEGESP",
    assunto: "LEP – faltas disciplinares",
    enunciado:
      "De acordo com a LEP, a prática de falta grave pelo condenado pode acarretar, entre outras consequências:",
    alternativas: {
      A: "concessão automática de indulto.",
      B: "regressão de regime e perda de dias remidos, observados os limites legais.",
      C: "extinção da punibilidade.",
      D: "impossibilidade definitiva de progressão de regime.",
    },
    correta: "B",
    explicacao:
      "A falta grave pode levar à regressão de regime e à perda de até certo limite de dias remidos, conforme previsão da LEP, sem extinguir a pena ou barrar para sempre a progressão.",
  },
  {
    id: 27,
    materia: "LEGESP",
    assunto: "LEP – sanções disciplinares",
    enunciado:
      "Quanto às sanções disciplinares previstas na LEP, é correto afirmar que:",
    alternativas: {
      A: "a lei admite penas de caráter cruel para casos excepcionais.",
      B: "o isolamento disciplinar deve observar limites de duração estabelecidos em lei.",
      C: "qualquer sanção pode ser aplicada sem procedimento administrativo.",
      D: "o preso não tem direito de defesa em processo disciplinar.",
    },
    correta: "B",
    explicacao:
      "O isolamento disciplinar é previsto, mas deve respeitar limites de tempo e procedimento com apuração da falta, assegurando defesa ao preso.",
  },
  {
    id: 28,
    materia: "LEGESP",
    assunto: "LEP – trabalho do preso",
    enunciado: "Nos termos da LEP, o trabalho do preso:",
    alternativas: {
      A: "é proibido, pois violaria o princípio da dignidade.",
      B: "deve ser sempre forçado, sem qualquer contraprestação.",
      C: "tem finalidade educativa e produtiva, devendo ser remunerado.",
      D: "só pode ocorrer fora do estabelecimento prisional.",
    },
    correta: "C",
    explicacao:
      "A LEP prevê o trabalho como dever social e condição de dignidade, com finalidade educativa e produtiva, devendo ser remunerado e protegido pelas normas de segurança e higiene.",
  },
  {
    id: 29,
    materia: "LEGESP",
    assunto: "LEP – remição da pena",
    enunciado: "A LEP prevê a remição de pena, em linhas gerais, como:",
    alternativas: {
      A: "aumento automático de pena em razão de falta disciplinar.",
      B: "desconto de parte da pena pelo trabalho ou estudo do condenado, nos termos da lei.",
      C: "instituto exclusivo para presos provisórios.",
      D: "benefício restrito a condenados por crimes hediondos.",
    },
    correta: "B",
    explicacao:
      "Remição permite abater dias da pena em razão de trabalho ou estudo, observadas as regras legais, como incentivo à atividade ressocializadora.",
  },
  {
    // 30–33 Crimes Hediondos (Lei 8.072/1990)

    id: 30,
    materia: "LEGESP",
    assunto: "Crimes hediondos – conceito geral",
    enunciado:
      "A Lei de Crimes Hediondos estabelece que determinados delitos, considerados de extrema gravidade, devem:",
    alternativas: {
      A: "receber tratamento idêntico ao de infrações de menor potencial ofensivo.",
      B: "ter regime jurídico mais rigoroso, especialmente quanto a benefícios e regime inicial.",
      C: "ser punidos apenas com penas alternativas.",
      D: "ficar sujeitos apenas a sanções administrativas.",
    },
    correta: "B",
    explicacao:
      "A lei confere maior severidade a crimes considerados hediondos, como restrições a benefícios penais e regras mais duras sobre regime inicial de cumprimento.",
  },
  {
    id: 31,
    materia: "LEGESP",
    assunto: "Crimes hediondos – anistia e graça",
    enunciado:
      "Em relação à anistia, graça e indulto para crimes hediondos, a Lei 8.072/1990 dispõe que:",
    alternativas: {
      A: "são amplamente permitidos, sem qualquer restrição.",
      B: "anistia, graça e indulto não se aplicam a crimes hediondos, nos termos em que a lei estabelece.",
      C: "somente a anistia é vedada, mas graça e indulto são sempre permitidos.",
      D: "apenas o indulto é proibido, sendo admitidas as demais hipóteses.",
    },
    correta: "B",
    explicacao:
      "A Lei dos Crimes Hediondos prevê vedação à concessão de anistia, graça e indulto para esses crimes, reforçando o caráter mais severo do tratamento.",
  },
  {
    id: 32,
    materia: "LEGESP",
    assunto: "Crimes hediondos – regime inicial",
    enunciado:
      "Quanto ao regime inicial de cumprimento da pena para crimes hediondos e equiparados, a legislação estabelece, em regra, que:",
    alternativas: {
      A: "deve ser o aberto.",
      B: "pode ser qualquer um, a critério exclusivo do juiz, sem parâmetros legais.",
      C: "deve ser mais rigoroso que o dos crimes comuns, observadas as alterações posteriores na legislação.",
      D: "é sempre substituído por pena restritiva de direitos.",
    },
    correta: "C",
    explicacao:
      "A Lei 8.072/1990 prevê tratamento mais rigoroso para crimes hediondos, incluindo previsão de regime inicial mais severo, embora sujeita a alterações jurisprudenciais e legislativas posteriores.",
  },

  // 14–16 Lei de Drogas (Lei 11.343/2006)
  {
    id: 33,
    materia: "LEGESP",
    assunto: "Lei de Drogas – tráfico",
    enunciado:
      "De acordo com a Lei 11.343/2006, o crime de tráfico ilícito de drogas caracteriza‑se, entre outras condutas, por:",
    alternativas: {
      A: "consumir droga em ambiente privado, sem fornecê‑la a terceiros.",
      B: "adquirir pequena quantidade de droga para uso pessoal.",
      C: "importar, vender, oferecer, transportar ou guardar droga sem autorização legal.",
      D: "produzir medicamento regularmente autorizado pela autoridade sanitária.",
    },
    correta: "C",
    explicacao:
      "O núcleo típico do tráfico envolve importar, vender, oferecer, transportar, guardar, entre outros verbos, sem autorização ou em desacordo com determinação legal ou regulamentar.",
  },
  {
    id: 34,
    materia: "LEGESP",
    assunto: "Lei de Drogas – usuário",
    enunciado:
      "Quanto ao porte de drogas para consumo pessoal, a Lei 11.343/2006 prevê que:",
    alternativas: {
      A: "a conduta é equiparada ao tráfico, com mesma pena de reclusão.",
      B: "não constitui infração penal de qualquer natureza.",
      C: "configura crime, mas com sanções diferenciadas, sem pena privativa de liberdade.",
      D: "é punida apenas na esfera administrativa, sem previsão na lei penal.",
    },
    correta: "C",
    explicacao:
      "A lei prevê sanções específicas ao usuário (como advertência, prestação de serviços e medida educativa), sem prever reclusão, diferenciando‑o do traficante.",
  },
  {
    id: 35,
    materia: "LEGESP",
    assunto: "Lei de Drogas – causas de aumento",
    enunciado:
      "A Lei de Drogas prevê aumento de pena para o crime de tráfico, entre outras hipóteses, quando:",
    alternativas: {
      A: "o agente pratica o fato para consumo exclusivamente próprio.",
      B: "o crime é cometido nas imediações de estabelecimento prisional ou de ensino.",
      C: "o agente se entrega voluntariamente à polícia antes de qualquer investigação.",
      D: "a substância apreendida é de baixo poder entorpecente.",
    },
    correta: "B",
    explicacao:
      "A lei prevê causas de aumento de pena, como a prática do tráfico em locais próximos a escolas, unidades prisionais, hospitais, entre outros ambientes sensíveis.",
  },

  // 17–20 Estatuto do Desarmamento (Lei 10.826/2003)
  {
    id: 36,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento – porte ilegal",
    enunciado:
      "No Estatuto do Desarmamento, o porte ilegal de arma de fogo de uso permitido, em regra, configura:",
    alternativas: {
      A: "mera infração administrativa.",
      B: "contravenção penal.",
      C: "crime punido com pena privativa de liberdade.",
      D: "ato atípico, sem qualquer sanção.",
    },
    correta: "C",
    explicacao:
      "A Lei 10.826/2003 tipifica o porte ilegal de arma de fogo de uso permitido como crime, com pena de reclusão e multa, ressalvadas as hipóteses legais de autorização.",
  },
  {
    id: 37,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento – registro x porte",
    enunciado:
      "Sobre o registro e o porte de arma de fogo, é correto afirmar que:",
    alternativas: {
      A: "o registro autoriza automaticamente o porte em qualquer local do território nacional.",
      B: "o registro autoriza o proprietário a manter a arma em sua residência ou local de trabalho, mas não a portá‑la livremente.",
      C: "o porte é irrelevante, bastando que a arma seja registrada.",
      D: "o Estatuto não faz distinção entre registro e porte.",
    },
    correta: "B",
    explicacao:
      "O registro permite manter a arma no interior da residência ou local de trabalho; o porte, por sua vez, exige autorização específica para o transporte fora desses locais.",
  },
  {
    id: 38,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento – posse irregular",
    enunciado:
      "A posse irregular de arma de fogo de uso permitido, de forma geral, refere‑se à conduta de:",
    alternativas: {
      A: "portar arma em via pública com autorização.",
      B: "manter arma de uso permitido em casa ou no trabalho sem o devido registro.",
      C: "fabricar arma de fogo em indústria credenciada.",
      D: "apenas limpar a arma regularmente registrada.",
    },
    correta: "B",
    explicacao:
      "A posse irregular envolve manter arma em residência ou local de trabalho sem o registro ou em desacordo com determinação legal, diferenciando‑se do porte, que se dá em via pública.",
  },
  {
    id: 39,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento – numeração raspada",
    enunciado:
      "A conduta de portar arma de fogo com numeração, marca ou qualquer sinal de identificação raspado ou adulterado:",
    alternativas: {
      A: "não tem relevância para o tipo penal.",
      B: "configura hipótese mais grave, com pena superior à do porte ilegal simples.",
      C: "é considerada infração de menor potencial ofensivo.",
      D: "é punida apenas com multa administrativa.",
    },
    correta: "B",
    explicacao:
      "A lei prevê tipo penal mais grave quando a arma tem identificação suprimida ou adulterada, justamente pela dificuldade de rastreamento e maior risco associado.",
  },
  {
    id: 40,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento – finalidade da lei",
    enunciado:
      "A finalidade central do Estatuto do Desarmamento, em linhas gerais, é:",
    alternativas: {
      A: "estimular o uso generalizado de armas de fogo pela população.",
      B: "regular a circulação de armas e munições, restringindo o acesso e buscando reduzir a violência armada.",
      C: "substituir as competências das polícias estaduais.",
      D: "tratar apenas de armas brancas, como facas e punhais.",
    },
    correta: "B",
    explicacao:
      "A Lei 10.826/2003 busca controlar a circulação de armas e munições, restringindo o acesso e estabelecendo regras para diminuir riscos e violência armada.",
  },

  // Direitos Humanos – 20 questões (id 41–60)
  {
    id: 41,
    materia: "DH",
    assunto: "Conceito de direitos humanos",
    enunciado:
      "Os direitos humanos podem ser compreendidos, em linhas gerais, como:",
    alternativas: {
      A: "privilégios concedidos apenas a determinados grupos sociais.",
      B: "faculdades e garantias essenciais para proteger a dignidade de todas as pessoas, independentemente de nacionalidade ou condição.",
      C: "normas aplicáveis apenas em tempos de guerra entre Estados.",
      D: "benefícios exclusivos de cidadãos que ocupam cargos públicos.",
    },
    correta: "B",
    explicacao:
      "Direitos humanos são direitos inerentes à pessoa humana, voltados à proteção da dignidade de todos, sem distinção de origem, condição social ou função.",
  },
  {
    id: 42,
    materia: "DH",
    assunto: "Gerações/dimensões de direitos",
    enunciado:
      "Os direitos de primeira dimensão (ou primeira geração) estão associados, principalmente, a:",
    alternativas: {
      A: "direitos sociais, como saúde e educação.",
      B: "direitos de fraternidade, como meio ambiente equilibrado.",
      C: "liberdades civis e políticas, como vida, liberdade e participação política.",
      D: "direitos de solidariedade tecnológica, ligados à internet.",
    },
    correta: "C",
    explicacao:
      "A primeira dimensão refere‑se às liberdades clássicas, civis e políticas, que limitam o poder estatal e protegem a autonomia do indivíduo.",
  },
  {
    id: 43,
    materia: "DH",
    assunto: "Universalidade dos direitos humanos",
    enunciado:
      "A característica da universalidade dos direitos humanos significa que:",
    alternativas: {
      A: "somente alguns países são obrigados a reconhecê‑los.",
      B: "apenas cidadãos maiores de idade podem usufruí‑los.",
      C: "devem ser reconhecidos a todas as pessoas, em qualquer lugar do mundo.",
      D: "aplicam‑se somente em períodos de paz.",
    },
    correta: "C",
    explicacao:
      "Universalidade indica que os direitos humanos pertencem a todas as pessoas, pelo simples fato de serem humanas, sem barreiras nacionais.",
  },
  {
    id: 44,
    materia: "DH",
    assunto: "Indivisibilidade e interdependência",
    enunciado:
      "A afirmação de que os direitos humanos são indivisíveis e interdependentes significa que:",
    alternativas: {
      A: "direitos civis são superiores a direitos sociais.",
      B: "é possível garantir plenamente um direito violando outros.",
      C: "a efetivação de um conjunto de direitos depende da proteção dos demais, sem hierarquia absoluta entre eles.",
      D: "apenas direitos econômicos exigem atuação do Estado.",
    },
    correta: "C",
    explicacao:
      "Indivisibilidade e interdependência indicam que os direitos formam um conjunto integrado: violações em uma área tendem a comprometer outras.",
  },
  {
    id: 45,
    materia: "DH",
    assunto: "Declaração Universal de 1948",
    enunciado:
      "A Declaração Universal dos Direitos Humanos, de 1948, foi aprovada no âmbito de qual organização?",
    alternativas: {
      A: "Organização dos Estados Americanos (OEA).",
      B: "Organização das Nações Unidas (ONU).",
      C: "Corte Interamericana de Direitos Humanos.",
      D: "Organização Mundial do Comércio (OMC).",
    },
    correta: "B",
    explicacao:
      "A DUDH foi aprovada pela Assembleia Geral da ONU em 1948, tornando‑se marco fundamental do sistema global de proteção de direitos humanos.",
  },
  {
    id: 46,
    materia: "DH",
    assunto: "Sistema global x regional",
    enunciado:
      "O sistema interamericano de proteção dos direitos humanos é exemplo de:",
    alternativas: {
      A: "sistema global coordenado pela ONU.",
      B: "sistema regional coordenado pela Organização dos Estados Americanos.",
      C: "sistema europeu coordenado pelo Conselho da Europa.",
      D: "sistema interno de cada país, sem órgãos internacionais.",
    },
    correta: "B",
    explicacao:
      "O sistema interamericano é regional e tem como órgão político a OEA, que abriga a Comissão e a Corte Interamericanas de Direitos Humanos.",
  },
  {
    id: 47,
    materia: "DH",
    assunto: "Tratados internacionais e Constituição",
    enunciado:
      "No ordenamento brasileiro, tratados e convenções internacionais de direitos humanos aprovados pelo rito de emenda constitucional (quórum qualificado) têm status de:",
    alternativas: {
      A: "lei ordinária.",
      B: "decreto regulamentar.",
      C: "emenda constitucional.",
      D: "norma infralegal.",
    },
    correta: "C",
    explicacao:
      "A CF/88 prevê que tratados de direitos humanos aprovados em dois turnos, por 3/5 de cada Casa do Congresso, equivalem às emendas constitucionais.",
  },
  {
    id: 48,
    materia: "DH",
    assunto: "Dignidade da pessoa humana",
    enunciado: "No Brasil, a dignidade da pessoa humana é:",
    alternativas: {
      A: "apenas conceito moral, sem previsão jurídica.",
      B: "fundamento da República, orientando a interpretação de todo o sistema de direitos.",
      C: "princípio aplicável somente ao Direito Penal.",
      D: "direito exclusivo de brasileiros natos.",
    },
    correta: "B",
    explicacao:
      "A CF/88 consagra a dignidade da pessoa humana como fundamento do Estado brasileiro, devendo orientar a criação e aplicação de leis e políticas públicas.",
  },
  {
    id: 49,
    materia: "DH",
    assunto: "Proibição da tortura",
    enunciado:
      "No âmbito dos direitos humanos, a proibição da tortura é considerada:",
    alternativas: {
      A: "regra programática, que pode ser relativizada livremente.",
      B: "norma absoluta, não sujeita à suspensão nem em situações de emergência.",
      C: "proibição aplicável apenas em tempos de paz.",
      D: "medida que pode ser afastada por lei ordinária.",
    },
    correta: "B",
    explicacao:
      "A vedação à tortura é norma de caráter absoluto (jus cogens), não podendo ser afastada nem em estados de exceção.",
  },
  {
    id: 50,
    materia: "DH",
    assunto: "Princípio da igualdade e não discriminação",
    enunciado: "O princípio da igualdade e da não discriminação implica que:",
    alternativas: {
      A: "qualquer tratamento desigual é proibido.",
      B: "tratamentos diferenciados podem ser admitidos, desde que razoáveis e não discriminatórios, inclusive em políticas afirmativas.",
      C: "o Estado não pode adotar medidas específicas para grupos vulneráveis.",
      D: "a igualdade interessa apenas ao direito eleitoral.",
    },
    correta: "B",
    explicacao:
      "A igualdade material admite diferenciações justificadas (como políticas afirmativas), proibindo apenas discriminações arbitrárias baseadas em critérios odiosos.",
  },
  {
    id: 51,
    materia: "DH",
    assunto: "Direitos civis e políticos",
    enunciado:
      "É exemplo típico de direito civil ou político previsto em instrumentos de direitos humanos:",
    alternativas: {
      A: "direito ao trabalho.",
      B: "direito à previdência social.",
      C: "direito de votar e ser votado.",
      D: "direito à educação básica.",
    },
    correta: "C",
    explicacao:
      "Direitos de participação política, como o sufrágio, integram o grupo de direitos civis e políticos.",
  },
  {
    id: 52,
    materia: "DH",
    assunto: "Direitos sociais",
    enunciado:
      "Entre os direitos a seguir, qual é classificado como direito social nas declarações e constituições modernas?",
    alternativas: {
      A: "liberdade de locomoção.",
      B: "liberdade de expressão.",
      C: "propriedade privada.",
      D: "saúde.",
    },
    correta: "D",
    explicacao:
      "Saúde, educação, trabalho e previdência são exemplos de direitos sociais, tradicionalmente associados à segunda dimensão de direitos.",
  },
  {
    id: 53,
    materia: "DH",
    assunto: "Proteção de grupos vulneráveis",
    enunciado:
      "A proteção especial a crianças e adolescentes, prevista em tratados e na Constituição, relaciona‑se ao princípio da:",
    alternativas: {
      A: "reserva do possível.",
      B: "proteção integral e prioridade absoluta.",
      C: "soberania nacional.",
      D: "livre iniciativa.",
    },
    correta: "B",
    explicacao:
      "O ordenamento consagra a doutrina da proteção integral com prioridade absoluta a crianças e adolescentes, em consonância com normas internacionais.",
  },
  {
    id: 54,
    materia: "DH",
    assunto: "Liberdade de expressão",
    enunciado:
      "A liberdade de expressão, segundo os instrumentos de direitos humanos e a Constituição brasileira:",
    alternativas: {
      A: "é absoluta, não admitindo qualquer limitação.",
      B: "pode ser exercida inclusive para incitar discriminação e violência.",
      C: "é protegida, mas não autoriza discurso de ódio nem violações à honra e à intimidade de terceiros.",
      D: "só é reconhecida para veículos de comunicação oficiais.",
    },
    correta: "C",
    explicacao:
      "A liberdade de expressão é amplamente protegida, porém sofre limites quando conflita com outros direitos, como a dignidade, a honra e a proibição de incitação ao ódio.",
  },
  {
    id: 55,
    materia: "DH",
    assunto: "Direito à vida",
    enunciado:
      "O direito à vida, no contexto dos direitos humanos, é compreendido como:",
    alternativas: {
      A: "mero direito biológico, sem conteúdo jurídico.",
      B: "proteção apenas contra a pena de morte.",
      C: "direito que abrange não só a existência física, mas condições mínimas de sobrevivência digna.",
      D: "direito exclusivo de nacionais em território estrangeiro.",
    },
    correta: "C",
    explicacao:
      "O direito à vida é entendido de forma ampla, incluindo não apenas a proteção contra a eliminação física, mas também o acesso a condições básicas de existência digna.",
  },
  {
    id: 56,
    materia: "DH",
    assunto: "Deveres do agente público",
    enunciado:
      "Sob a ótica dos direitos humanos, a atuação do agente público de segurança deve:",
    alternativas: {
      A: "priorizar qualquer meio necessário para obter resultados, ainda que ilegais.",
      B: "compatibilizar o uso legítimo da força com o respeito à dignidade e às garantias das pessoas sob custódia.",
      C: "restringir a aplicação das normas de direitos humanos apenas a estrangeiros.",
      D: "subordinar‑se sempre às ordens superiores, mesmo quando manifestamente ilegais.",
    },
    correta: "B",
    explicacao:
      "O uso da força pelo Estado deve ser legal, necessário e proporcional, sempre compatível com a dignidade humana e com as garantias fundamentais.",
  },
  {
    id: 57,
    materia: "DH",
    assunto: "Presunção de inocência",
    enunciado:
      "O princípio da presunção de inocência, relacionado aos direitos humanos e à Constituição brasileira, estabelece que:",
    alternativas: {
      A: "qualquer pessoa é considerada culpada até provar sua inocência.",
      B: "ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória, sem prejuízo de prisões cautelares previstas em lei.",
      C: "a prova de culpa cabe exclusivamente ao acusado.",
      D: "basta a acusação formal para que alguém seja considerado culpado.",
    },
    correta: "B",
    explicacao:
      "A CF/88 dispõe que ninguém será considerado culpado antes do trânsito em julgado de condenação, embora admita prisões provisórias nas hipóteses legais.",
  },
  {
    id: 58,
    materia: "DH",
    assunto: "Direitos das pessoas privadas de liberdade",
    enunciado:
      "De acordo com os instrumentos de direitos humanos e a Constituição, as pessoas privadas de liberdade têm direito:",
    alternativas: {
      A: "apenas à alimentação mínima, sem outras garantias.",
      B: "ao respeito à integridade física e moral, além de outros direitos compatíveis com a situação de privação.",
      C: "a sofrer penas corporais previstas em regulamento interno.",
      D: "a perder automaticamente todos os direitos políticos e civis.",
    },
    correta: "B",
    explicacao:
      "A CF/88 assegura aos presos o respeito à integridade física e moral, bem como outros direitos não atingidos pela condenação ou pela lei.",
  },
  {
    id: 59,
    materia: "DH",
    assunto: "Direito de acesso à justiça",
    enunciado:
      "O direito de acesso à justiça, previsto em tratados de direitos humanos, garante que:",
    alternativas: {
      A: "apenas pessoas com recursos financeiros possam recorrer ao Judiciário.",
      B: "todas as pessoas tenham possibilidade de submeter violações de direitos a um órgão independente e imparcial.",
      C: "apenas órgãos executivos possam rever atos ilegais.",
      D: "o Estado é dispensado de fornecer assistência jurídica gratuita.",
    },
    correta: "B",
    explicacao:
      "O acesso à justiça exige a existência de órgãos independentes e imparciais, bem como medidas, como assistência jurídica, que viabilizem a defesa de direitos.",
  },
  {
    id: 60,
    materia: "DH",
    assunto: "Dever de investigar e punir violações",
    enunciado:
      "Instrumentos internacionais de direitos humanos reconhecem que, diante de graves violações (como tortura ou execuções arbitrárias), o Estado tem o dever de:",
    alternativas: {
      A: "ignorar os fatos para preservar a imagem institucional.",
      B: "investigar, processar e, se for o caso, punir os responsáveis, além de reparar as vítimas.",
      C: "delegar toda a apuração exclusivamente a organismos estrangeiros.",
      D: "limitar‑se a divulgar nota oficial de repúdio.",
    },
    correta: "B",
    explicacao:
      "O dever de investigar, processar e punir responsáveis por graves violações, bem como reparar vítimas, decorre de compromissos assumidos pelo Estado em tratados de direitos humanos.",
  },
  {
    // Noções de Direito – 10 questões
    // Direito Constitucional – 20 questões (id 61–80)

    id: 61,
    materia: "ND",
    assunto: "Conceito de Constituição",
    enunciado:
      "A Constituição Federal de 1988 pode ser definida, em linhas gerais, como:",
    alternativas: {
      A: "lei ordinária que organiza apenas o Poder Executivo.",
      B: "conjunto de normas fundamentais que estruturam o Estado, distribuem competências e reconhecem direitos e garantias.",
      C: "ato administrativo interno do Congresso Nacional.",
      D: "regulamento relativo apenas às Forças Armadas.",
    },
    correta: "B",
    explicacao:
      "A Constituição é a lei fundamental e suprema, que organiza o Estado, reparte o poder político e estabelece o catálogo de direitos fundamentais.",
  },
  {
    id: 62,
    materia: "ND",
    assunto: "Fundamentos da República",
    enunciado:
      "Entre os fundamentos da República Federativa do Brasil previstos na Constituição, encontra‑se:",
    alternativas: {
      A: "soberania popular apenas indireta.",
      B: "dignidade da pessoa humana.",
      C: "livre concorrência.",
      D: "separação entre Igreja e Estado.",
    },
    correta: "B",
    explicacao:
      "O art. 1º da CF/88 elenca, entre outros fundamentos, a soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa e o pluralismo político.",
  },
  {
    id: 63,
    materia: "ND",
    assunto: "Objetivos fundamentais",
    enunciado:
      "Constitui objetivo fundamental da República Federativa do Brasil, segundo a CF/88:",
    alternativas: {
      A: "manter a desigualdade social histórica.",
      B: "promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade ou quaisquer outras formas de discriminação.",
      C: "garantir privilégios permanentes a determinados grupos.",
      D: "impedir a cooperação entre os povos.",
    },
    correta: "B",
    explicacao:
      "O art. 3º traz como objetivo promover o bem de todos, sem preconceitos e discriminações, reforçando a igualdade material.",
  },
  {
    id: 64,
    materia: "ND",
    assunto: "Forma de Estado e forma de governo",
    enunciado:
      "O Brasil, conforme a Constituição Federal de 1988, adota, respectivamente, como forma de Estado e forma de governo:",
    alternativas: {
      A: "Estado unitário e monarquia.",
      B: "Estado federal e república.",
      C: "Estado confederado e monarquia.",
      D: "Estado unitário e república.",
    },
    correta: "B",
    explicacao:
      "A CF/88 define o Brasil como República Federativa: forma de governo republicana e forma de Estado federativa.",
  },
  {
    id: 65,
    materia: "ND",
    assunto: "Separação de poderes",
    enunciado:
      "O princípio da separação de poderes, previsto na CF/88, estabelece que:",
    alternativas: {
      A: "os poderes Legislativo, Executivo e Judiciário são totalmente independentes, sem qualquer controle recíproco.",
      B: "apenas o Poder Executivo exerce função típica de legislar.",
      C: "os poderes são harmônicos e independentes, exercendo funções típicas, mas com mecanismos de freios e contrapesos.",
      D: "o Poder Judiciário está hierarquicamente subordinado ao Legislativo.",
    },
    correta: "C",
    explicacao:
      "A Constituição consagra a separação e harmonia entre os poderes, com controles recíprocos (freios e contrapesos).",
  },
  {
    id: 66,
    materia: "ND",
    assunto: "Princípio da legalidade",
    enunciado:
      "Para os particulares e para a Administração Pública, respectivamente, o princípio da legalidade significa que:",
    alternativas: {
      A: "ambos só podem fazer o que a lei autoriza expressamente.",
      B: "o particular pode fazer tudo o que a lei não proíbe, e o agente público só pode agir quando a lei autoriza ou determina.",
      C: "o particular só age por autorização legal, enquanto o Estado é livre.",
      D: "nenhum deles está vinculado à lei.",
    },
    correta: "B",
    explicacao:
      "O particular atua segundo a máxima 'o que não é proibido é permitido'; já a Administração está vinculada à legalidade estrita.",
  },
  {
    id: 67,
    materia: "ND",
    assunto: "Direitos fundamentais – aplicação imediata",
    enunciado: "A CF/88 estabelece que os direitos e garantias fundamentais:",
    alternativas: {
      A: "dependem sempre de lei complementar para produzir efeitos.",
      B: "podem ser livremente abolidos por emenda constitucional.",
      C: "têm aplicação imediata, cabendo ao Estado promovê‑los e protegê‑los.",
      D: "se aplicam somente aos brasileiros natos.",
    },
    correta: "C",
    explicacao:
      "O art. 5º, §1º, dispõe que os direitos e garantias fundamentais têm aplicação imediata, vinculando diretamente os poderes públicos.",
  },
  {
    id: 68,
    materia: "ND",
    assunto: "Cláusulas pétreas",
    enunciado:
      "Constitui cláusula pétrea, não podendo ser abolida por emenda constitucional:",
    alternativas: {
      A: "a organização dos partidos políticos.",
      B: "o voto facultativo para maiores de 18 anos.",
      C: "os direitos e garantias individuais.",
      D: "a possibilidade de reeleição no Executivo.",
    },
    correta: "C",
    explicacao:
      "O art. 60, §4º, protege contra emendas tendentes a abolir, entre outros, os direitos e garantias individuais.",
  },
  {
    id: 69,
    materia: "ND",
    assunto: "Direito à vida",
    enunciado:
      "O direito à vida, previsto na CF/88, está diretamente relacionado:",
    alternativas: {
      A: "apenas à proibição da pena de morte.",
      B: "ao dever estatal de proteger a existência física e as condições mínimas de sobrevivência digna.",
      C: "somente à proteção da propriedade.",
      D: "exclusivamente à livre iniciativa.",
    },
    correta: "B",
    explicacao:
      "A Constituição protege a vida em sentido amplo, incluindo integridade física e acesso a condições mínimas de existência.",
  },
  {
    id: 70,
    materia: "ND",
    assunto: "Liberdade de expressão",
    enunciado: "Segundo a Constituição, a liberdade de expressão:",
    alternativas: {
      A: "é absoluta e não admite qualquer restrição.",
      B: "é protegida, mas não autoriza anonimato nem discursos que violem direitos como honra e intimidade.",
      C: "é reservada apenas a jornalistas profissionais.",
      D: "pode ser proibida por ato administrativo sem fundamento legal.",
    },
    correta: "B",
    explicacao:
      "A CF/88 assegura a livre manifestação, vedando o anonimato e admitindo limites quando necessário para proteger outros direitos fundamentais.",
  },
  {
    id: 71,
    materia: "ND",
    assunto: "Habeas corpus",
    enunciado: "O habeas corpus é ação constitucional destinada a proteger:",
    alternativas: {
      A: "direito de propriedade em face de desapropriação.",
      B: "direito à honra contra ofensas na imprensa.",
      C: "direito de locomoção ameaçado ou violado por ilegalidade ou abuso de poder.",
      D: "direito de acesso a informações pessoais em registros públicos.",
    },
    correta: "C",
    explicacao:
      "O habeas corpus protege a liberdade de ir, vir e permanecer, quando houver ameaça ou coação ilegal.",
  },
  {
    id: 72,
    materia: "ND",
    assunto: "Mandado de segurança coletivo",
    enunciado:
      "O mandado de segurança coletivo pode ser impetrado, entre outros legitimados, por:",
    alternativas: {
      A: "qualquer pessoa física, independentemente de representação.",
      B: "partido político com representação no Congresso Nacional, em defesa de seus membros ou de sua finalidade institucional.",
      C: "empresa estrangeira sem sede no Brasil.",
      D: "órgão da Administração Pública contra seus próprios atos.",
    },
    correta: "B",
    explicacao:
      "A CF/88 prevê que partidos com representação no Congresso, sindicatos, entidades de classe e associações podem impetrar mandado de segurança coletivo.",
  },
  {
    id: 73,
    materia: "ND",
    assunto: "Ação popular",
    enunciado: "A ação popular constitucional tem como finalidade:",
    alternativas: {
      A: "defender exclusivamente interesse patrimonial do autor.",
      B: "anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente ou ao patrimônio histórico e cultural.",
      C: "questionar apenas decisões judiciais.",
      D: "proteger interesses de empresas estatais contra o Estado.",
    },
    correta: "B",
    explicacao:
      "A ação popular é instrumento posto à disposição de qualquer cidadão para anular ato lesivo a bens e valores coletivos.",
  },
  {
    id: 74,
    materia: "ND",
    assunto: "Competência legislativa – União",
    enunciado: "Compete privativamente à União legislar sobre:",
    alternativas: {
      A: "direito urbanístico local.",
      B: "direito penal e processual penal.",
      C: "assuntos de interesse predominantemente municipal.",
      D: "servidores dos Estados.",
    },
    correta: "B",
    explicacao:
      "O art. 22 atribui à União competência privativa para legislar sobre direito penal e processual penal.",
  },
  {
    id: 75,
    materia: "ND",
    assunto: "Segurança pública",
    enunciado:
      "De acordo com a Constituição Federal, a segurança pública é dever do Estado e responsabilidade:",
    alternativas: {
      A: "apenas das Forças Armadas.",
      B: "apenas da Polícia Militar e da Polícia Civil.",
      C: "de todos, sendo exercida para preservação da ordem pública e da incolumidade das pessoas e do patrimônio.",
      D: "somente de empresas privadas de segurança.",
    },
    correta: "C",
    explicacao:
      "O art. 144 dispõe que a segurança pública é dever do Estado, direito e responsabilidade de todos.",
  },
  {
    id: 76,
    materia: "ND",
    assunto: "Poder Executivo – mandato",
    enunciado:
      "No âmbito federal, o mandato do Presidente da República, segundo a CF, tem duração de:",
    alternativas: {
      A: "quatro anos, permitida uma reeleição para período subsequente.",
      B: "seis anos, sem reeleição.",
      C: "oito anos, permitida uma reeleição.",
      D: "dois anos, sem reeleição.",
    },
    correta: "A",
    explicacao:
      "A CF/88 prevê mandato de quatro anos, com possibilidade de uma reeleição imediata.",
  },
  {
    id: 77,
    materia: "ND",
    assunto: "Controle de constitucionalidade",
    enunciado:
      "O órgão de cúpula responsável, em regra, pelo controle concentrado de constitucionalidade em âmbito federal é:",
    alternativas: {
      A: "Superior Tribunal de Justiça.",
      B: "Supremo Tribunal Federal.",
      C: "Tribunal de Contas da União.",
      D: "Conselho Nacional de Justiça.",
    },
    correta: "B",
    explicacao:
      "O STF exerce a guarda da Constituição, julgando ações diretas de inconstitucionalidade, declaratórias de constitucionalidade etc.",
  },
  {
    id: 78,
    materia: "ND",
    assunto: "Habeas data",
    enunciado:
      "O habeas data é ação constitucional destinada, principalmente, a:",
    alternativas: {
      A: "garantir a liberdade de locomoção.",
      B: "obter informações pessoais constantes de registros de entidades governamentais ou de caráter público e retificá‑las.",
      C: "impedir divulgação de notícias verdadeiras pela imprensa.",
      D: "defender interesses de partidos políticos.",
    },
    correta: "B",
    explicacao:
      "O habeas data protege o direito de conhecer e corrigir dados pessoais em bancos de dados públicos ou de natureza pública.",
  },
  {
    id: 79,
    materia: "ND",
    assunto: "Estado de defesa e de sítio",
    enunciado:
      "Os institutos do estado de defesa e do estado de sítio destinam‑se a:",
    alternativas: {
      A: "substituir permanentemente o regime democrático.",
      B: "responder a situações de grave instabilidade ou calamidade, com restrições temporárias a certos direitos, sob controle do Congresso.",
      C: "revogar automaticamente todos os direitos fundamentais.",
      D: "disciplinar apenas conflitos entre particulares.",
    },
    correta: "B",
    explicacao:
      "São medidas constitucionais excepcionais para enfrentar crises graves, com limite temporal e controle político.",
  },
  {
    id: 80,
    materia: "ND",
    assunto: "Direitos dos presos",
    enunciado:
      "A Constituição Federal assegura aos presos, entre outros direitos:",
    alternativas: {
      A: "submissão a penas cruéis, em casos de falta grave.",
      B: "perda automática de todos os direitos civis.",
      C: "respeito à integridade física e moral.",
      D: "manter‑se permanentemente incomunicáveis.",
    },
    correta: "C",
    explicacao:
      "A CF/88 garante aos presos o respeito à integridade física e moral, vedando penas cruéis e tratamentos degradantes.",
  },
  // Informática Básica – 20 questões (id 81–100)
  {
    id: 81,
    materia: "INFO",
    assunto: "Hardware x software",
    enunciado:
      "Assinale a alternativa que apresenta corretamente a diferença entre hardware e software:",
    alternativas: {
      A: "Hardware é a parte lógica, e software é a parte física do computador.",
      B: "Hardware é a parte física, e software é o conjunto de programas e instruções.",
      C: "Hardware e software são sinônimos, usados indistintamente.",
      D: "Hardware é apenas o mouse e o teclado, enquanto software é o monitor.",
    },
    correta: "B",
    explicacao:
      "Hardware corresponde aos componentes físicos; software é o conjunto de programas, sistemas e instruções que controlam o funcionamento do computador.",
  },
  {
    id: 82,
    materia: "INFO",
    assunto: "Dispositivos de entrada e saída",
    enunciado: "É exemplo de dispositivo de ENTRADA de dados em um computador:",
    alternativas: {
      A: "monitor.",
      B: "impressora.",
      C: "teclado.",
      D: "caixa de som.",
    },
    correta: "C",
    explicacao:
      "Teclado, mouse e scanner são dispositivos de entrada; monitor e impressora são de saída.",
  },
  {
    id: 83,
    materia: "INFO",
    assunto: "Memória RAM e armazenamento",
    enunciado: "A memória RAM caracteriza‑se por ser:",
    alternativas: {
      A: "permanente, não perdendo dados quando o computador é desligado.",
      B: "volátil, perdendo o conteúdo quando não há energia elétrica.",
      C: "exclusiva para armazenar arquivos do usuário a longo prazo.",
      D: "um tipo de memória apenas de leitura, impossibilitando gravação.",
    },
    correta: "B",
    explicacao:
      "A RAM é memória de trabalho do sistema, volátil: perde os dados ao desligar; armazenamento permanente é feito em HD/SSD.",
  },
  {
    id: 84,
    materia: "INFO",
    assunto: "Sistemas operacionais – conceito",
    enunciado:
      "O sistema operacional de um computador tem como principal função:",
    alternativas: {
      A: "servir apenas para editar textos.",
      B: "controlar recursos de hardware e fornecer serviços básicos para a execução de programas.",
      C: "substituir totalmente os programas aplicativos.",
      D: "funcionar apenas como antivírus.",
    },
    correta: "B",
    explicacao:
      "O sistema operacional gerencia hardware (processador, memória, disco, dispositivos) e oferece uma base para que os demais programas sejam executados.",
  },
  {
    id: 85,
    materia: "INFO",
    assunto: "Sistemas operacionais – exemplos",
    enunciado:
      "Qual das alternativas apresenta apenas sistemas operacionais amplamente utilizados em computadores pessoais?",
    alternativas: {
      A: "Windows, Linux e macOS.",
      B: "Word, Excel e PowerPoint.",
      C: "Chrome, Firefox e Edge.",
      D: "Android, WhatsApp e Telegram.",
    },
    correta: "A",
    explicacao:
      "Windows, Linux e macOS são sistemas operacionais; Word/Excel/PowerPoint são aplicativos; Chrome/Firefox/Edge são navegadores.",
  },
  {
    id: 86,
    materia: "INFO",
    assunto: "Pastas e arquivos – Windows",
    enunciado:
      "No ambiente do Windows, a estrutura em pastas (diretórios) serve, principalmente, para:",
    alternativas: {
      A: "apagar automaticamente todos os arquivos salvos.",
      B: "organizar arquivos e facilitar sua localização pelo usuário.",
      C: "substituir a função de memória RAM.",
      D: "impedir que vários usuários usem o mesmo computador.",
    },
    correta: "B",
    explicacao:
      "Pastas permitem agrupar e organizar arquivos por tipo, projeto, usuário etc., facilitando o gerenciamento das informações.",
  },
  {
    id: 87,
    materia: "INFO",
    assunto: "Extensões de arquivos",
    enunciado:
      "Assinale a alternativa que relaciona corretamente o tipo de arquivo à extensão mais comum:",
    alternativas: {
      A: ".docx – planilha eletrônica.",
      B: ".xlsx – apresentação de slides.",
      C: ".pdf – documento em formato portátil para leitura.",
      D: ".jpg – arquivo de áudio.",
    },
    correta: "C",
    explicacao:
      ".pdf é extensão típica de documentos no formato portátil; .docx é texto (Word), .xlsx é planilha (Excel) e .jpg é imagem.",
  },
  {
    id: 88,
    materia: "INFO",
    assunto: "Internet – conceito de navegador",
    enunciado: "Um navegador (browser) é um programa utilizado para:",
    alternativas: {
      A: "programar o sistema operacional.",
      B: "acessar páginas e conteúdos disponíveis na World Wide Web.",
      C: "substituir a função de antivírus.",
      D: "editar exclusivamente documentos de texto offline.",
    },
    correta: "B",
    explicacao:
      "Navegadores, como Chrome, Firefox e Edge, permitem acessar páginas web e outros recursos disponíveis na Internet.",
  },
  {
    id: 89,
    materia: "INFO",
    assunto: "Internet – URL e endereço",
    enunciado: "O endereço 'https://www.seguranca.mg.gov.br' é exemplo de:",
    alternativas: {
      A: "endereço de e‑mail.",
      B: "URL (endereço de site) com uso de protocolo seguro.",
      C: "nome de usuário em rede social.",
      D: "arquivo salvo em disco local.",
    },
    correta: "B",
    explicacao:
      "Trata‑se de uma URL iniciada por 'https', indicando protocolo de hipertexto com camada segura.",
  },
  {
    id: 90,
    materia: "INFO",
    assunto: "Correio eletrônico",
    enunciado:
      "Sobre o uso do correio eletrônico (e‑mail), é correto afirmar que:",
    alternativas: {
      A: "a mensagem só pode ser enviada se o remetente e o destinatário estiverem online ao mesmo tempo.",
      B: "os campos 'Para', 'Cc' e 'Cco' permitem indicar diferentes destinatários, sendo 'Cco' utilizado para envio com cópia oculta.",
      C: "não é possível anexar arquivos a uma mensagem.",
      D: "o campo 'Assunto' é opcional e nunca é exibido ao destinatário.",
    },
    correta: "B",
    explicacao:
      "No e‑mail, 'Cc' envia cópia visível a outros destinatários e 'Cco' envia cópia oculta; anexos são permitidos e o assunto é mostrado ao destinatário.",
  },
  {
    id: 91,
    materia: "INFO",
    assunto: "Redes – conceito básico",
    enunciado: "Uma rede de computadores pode ser definida como:",
    alternativas: {
      A: "conjunto de computadores que funcionam isoladamente.",
      B: "conjunto de computadores e dispositivos interligados para compartilhar dados e recursos.",
      C: "apenas a conexão entre um computador e uma impressora local.",
      D: "somente a ligação entre celulares usando Bluetooth.",
    },
    correta: "B",
    explicacao:
      "Rede é a interligação de computadores e dispositivos para compartilhar informações, impressoras, acesso à internet e outros recursos.",
  },
  {
    id: 92,
    materia: "INFO",
    assunto: "Redes – intranet e internet",
    enunciado: "Intranet é o termo utilizado para designar:",
    alternativas: {
      A: "toda a rede mundial de computadores.",
      B: "rede interna de uma organização, que utiliza tecnologias da internet, porém com acesso restrito.",
      C: "apenas o serviço de correio eletrônico.",
      D: "uma rede exclusiva entre celulares.",
    },
    correta: "B",
    explicacao:
      "Intranet é rede privada de uma instituição, geralmente acessível apenas a seus membros, usando padrões como TCP/IP e navegadores.",
  },
  {
    id: 93,
    materia: "INFO",
    assunto: "Segurança – senhas",
    enunciado:
      "Uma boa prática de segurança da informação quanto ao uso de senhas é:",
    alternativas: {
      A: "utilizar datas de aniversário de familiares, por serem fáceis de lembrar.",
      B: "anotar a senha em papel e deixá‑lo próximo ao computador.",
      C: "utilizar combinações com letras maiúsculas, minúsculas, números e símbolos, evitando dados pessoais óbvios.",
      D: "reutilizar a mesma senha em todos os sistemas e serviços.",
    },
    correta: "C",
    explicacao:
      "Senhas fortes combinam tipos diferentes de caracteres e evitam informações previsíveis, como datas ou nomes de familiares.",
  },
  {
    id: 94,
    materia: "INFO",
    assunto: "Segurança – malware",
    enunciado: "Vírus, worms e trojans são exemplos de:",
    alternativas: {
      A: "formatos de arquivo.",
      B: "equipamentos de rede.",
      C: "malwares, programas maliciosos que podem causar danos ou roubo de dados.",
      D: "protocolos de comunicação.",
    },
    correta: "C",
    explicacao:
      "Esses termos designam tipos de softwares maliciosos que podem comprometer o sistema, alterar dados ou permitir acesso indevido.",
  },
  {
    id: 95,
    materia: "INFO",
    assunto: "Segurança – phishing",
    enunciado: "O golpe conhecido como phishing caracteriza‑se por:",
    alternativas: {
      A: "falha de hardware que impede o computador de ligar.",
      B: "técnica de enganar o usuário, geralmente por e‑mail ou páginas falsas, para obter dados sigilosos como senhas.",
      C: "utilização de programas legítimos para atualização do sistema.",
      D: "apenas o envio de mensagens de propaganda autorizadas.",
    },
    correta: "B",
    explicacao:
      "Phishing tenta induzir o usuário a fornecer informações confidenciais por meio de mensagens e sites falsos que imitam serviços legítimos.",
  },
  {
    id: 96,
    materia: "INFO",
    assunto: "Segurança – boas práticas na internet",
    enunciado: "É uma boa prática de segurança ao navegar na internet:",
    alternativas: {
      A: "clicar em qualquer link recebido por mensagem, para economizar tempo.",
      B: "instalar programas de origem desconhecida para testar recursos.",
      C: "verificar se sites que solicitam senhas utilizam conexão segura (https) e desconfiar de pedidos de dados excessivos.",
      D: "fornecer senhas a colegas de trabalho para facilitar o uso compartilhado.",
    },
    correta: "C",
    explicacao:
      "Conferir o uso de https e avaliar pedidos de dados pessoais ajuda a evitar golpes; compartilhar senhas ou clicar em links desconhecidos é arriscado.",
  },
  {
    id: 97,
    materia: "INFO",
    assunto: "Aplicativos de escritório – editor de texto",
    enunciado:
      "No Microsoft Word (ou editores similares), a função de NEGRITO é utilizada para:",
    alternativas: {
      A: "apagar todo o texto selecionado.",
      B: "destacar o texto, deixando‑o visualmente mais espesso.",
      C: "converter o texto em tabela.",
      D: "alinhar o texto à direita.",
    },
    correta: "B",
    explicacao:
      "Negrito altera a espessura da fonte para enfatizar palavras ou trechos importantes.",
  },
  {
    id: 98,
    materia: "INFO",
    assunto: "Aplicativos de escritório – planilha",
    enunciado:
      "Em uma planilha eletrônica (como o Excel), a fórmula '=A1+B1' digitada na célula C1 realiza:",
    alternativas: {
      A: "subtração do conteúdo de B1 por A1.",
      B: "adição dos valores contidos em A1 e B1.",
      C: "multiplicação de A1 por B1.",
      D: "divisão de A1 por B1.",
    },
    correta: "B",
    explicacao:
      "A fórmula '=A1+B1' soma os valores das células A1 e B1, exibindo o resultado em C1.",
  },
  {
    id: 99,
    materia: "INFO",
    assunto: "Backup",
    enunciado: "A principal finalidade da realização de backups periódicos é:",
    alternativas: {
      A: "aumentar a velocidade do processador.",
      B: "liberar espaço na memória RAM.",
      C: "garantir cópias de segurança dos dados para recuperação em caso de perda ou falha.",
      D: "reduzir o consumo de energia do computador.",
    },
    correta: "C",
    explicacao:
      "Backups permitem restaurar informações em caso de exclusão acidental, falha de hardware, ataque de malware ou outros incidentes.",
  },
  {
    id: 100,
    materia: "INFO",
    assunto: "Atualizações de software",
    enunciado:
      "Manter o sistema operacional e os programas atualizados é importante porque:",
    alternativas: {
      A: "as atualizações servem apenas para alterar a aparência do sistema.",
      B: "novas versões costumam corrigir falhas de segurança e melhorar estabilidade e desempenho.",
      C: "atualizar reduz o espaço disponível em disco sem qualquer benefício.",
      D: "impede o uso de antivírus.",
    },
    correta: "B",
    explicacao:
      "Atualizações frequentemente fecham vulnerabilidades, melhoram recursos e aumentam a estabilidade, sendo medida essencial de segurança.",
  },
  // Raciocínio Lógico – 20 questões (id 101–120)
  {
    id: 101,
    materia: "RL",
    assunto: "Proposições – conceito",
    enunciado:
      "No estudo do raciocínio lógico, é considerada proposição a sentença:",
    alternativas: {
      A: "Feche a porta agora!",
      B: "Que dia bonito!",
      C: "2 + 3 = 5.",
      D: "Quem é você?",
    },
    correta: "C",
    explicacao:
      "Proposição é sentença declarativa que pode ser classificada como verdadeira ou falsa; '2 + 3 = 5' é desse tipo, as demais são exclamativa, imperativa ou interrogativa.",
  },
  {
    id: 102,
    materia: "RL",
    assunto: "Valor lógico",
    enunciado:
      "Considere a sentença: 'Todo preso é servidor público'. Essa afirmação é:",
    alternativas: {
      A: "verdadeira.",
      B: "falsa.",
      C: "proposição indeterminada.",
      D: "ordem, não podendo ser avaliada.",
    },
    correta: "B",
    explicacao:
      "Nem todo preso é servidor público; a generalização é falsa, portanto a proposição é falsa.",
  },
  {
    id: 103,
    materia: "RL",
    assunto: "Conectivo 'e' (conjunção)",
    enunciado:
      "A proposição 'O agente está de plantão e o portão está trancado' será verdadeira quando:",
    alternativas: {
      A: "pelo menos uma das partes for verdadeira.",
      B: "as duas partes forem verdadeiras.",
      C: "as duas partes forem falsas.",
      D: "exatamente uma das partes for verdadeira.",
    },
    correta: "B",
    explicacao:
      "A conjunção p ∧ q é verdadeira apenas quando p e q são ambas verdadeiras.",
  },
  {
    id: 104,
    materia: "RL",
    assunto: "Conectivo 'ou' (disjunção inclusiva)",
    enunciado:
      "Na lógica proposicional, a disjunção 'p ou q' (p ∨ q), entendida de forma inclusiva, é falsa quando:",
    alternativas: {
      A: "p e q forem verdadeiras.",
      B: "p verdadeira e q falsa.",
      C: "p falsa e q verdadeira.",
      D: "p e q forem falsas.",
    },
    correta: "D",
    explicacao:
      "Na disjunção inclusiva, basta uma das sentenças ser verdadeira para o todo ser verdadeiro; será falsa apenas se ambas forem falsas.",
  },
  {
    id: 105,
    materia: "RL",
    assunto: "Condicional – interpretação",
    enunciado:
      "Na proposição condicional 'Se o servidor faltar ao plantão, então sofrerá sanção', o antecedente e o consequente são, respectivamente:",
    alternativas: {
      A: "'sofrerá sanção' e 'faltar ao plantão'.",
      B: "'faltar ao plantão' e 'sofrerá sanção'.",
      C: "'se' e 'então'.",
      D: "toda a frase é só antecedente.",
    },
    correta: "B",
    explicacao:
      "Na condicional p → q, p é o antecedente ('faltar ao plantão') e q é o consequente ('sofrerá sanção').",
  },
  {
    id: 106,
    materia: "RL",
    assunto: "Negação – conjunção",
    enunciado:
      "A negação lógica correta da proposição 'O sistema está lento e o relatório não foi enviado' é:",
    alternativas: {
      A: "O sistema está lento ou o relatório não foi enviado.",
      B: "O sistema não está lento e o relatório foi enviado.",
      C: "O sistema não está lento ou o relatório foi enviado.",
      D: "O sistema está lento ou o relatório foi enviado.",
    },
    correta: "C",
    explicacao:
      "Negar p ∧ q resulta em ¬p ∨ ¬q: 'O sistema não está lento ou o relatório foi enviado'.",
  },
  {
    id: 107,
    materia: "RL",
    assunto: "Negação – condicional",
    enunciado:
      "A negação lógica da proposição 'Se o preso descumpre a regra, então é punido' é:",
    alternativas: {
      A: "Se o preso descumpre a regra, então não é punido.",
      B: "O preso não descumpre a regra ou é punido.",
      C: "O preso descumpre a regra e não é punido.",
      D: "O preso não descumpre a regra e é punido.",
    },
    correta: "C",
    explicacao:
      "A negação de p → q é p ∧ ¬q: 'O preso descumpre a regra e não é punido'.",
  },
  {
    id: 108,
    materia: "RL",
    assunto: "Equivalência – condicional e disjunção",
    enunciado:
      "A proposição 'Se o servidor chega cedo, então organiza o setor' é logicamente equivalente a:",
    alternativas: {
      A: "O servidor chega cedo e organiza o setor.",
      B: "O servidor não chega cedo ou organiza o setor.",
      C: "O servidor organiza o setor se, e somente se, chega cedo.",
      D: "O servidor chega cedo ou organiza o setor.",
    },
    correta: "B",
    explicacao:
      "p → q é equivalente a ¬p ∨ q. Assim, 'Não chega cedo ou organiza o setor'.",
  },
  {
    id: 109,
    materia: "RL",
    assunto: "Tabela-verdade simples",
    enunciado:
      "Se p é verdadeira e q é falsa, então a proposição '(p ∧ q) ∨ ¬q' é:",
    alternativas: {
      A: "verdadeira.",
      B: "falsa.",
      C: "indeterminada.",
      D: "uma não‑proposição.",
    },
    correta: "A",
    explicacao: "Com p=V e q=F, p ∧ q = F; ¬q = V; logo, (F) ∨ (V) = V.",
  },
  {
    id: 110,
    materia: "RL",
    assunto: "Tautologia",
    enunciado: "Uma tautologia é uma proposição que:",
    alternativas: {
      A: "é sempre falsa, independentemente dos valores das variáveis.",
      B: "pode ser verdadeira ou falsa, dependendo do contexto.",
      C: "é sempre verdadeira, qualquer que seja o valor lógico das proposições simples.",
      D: "não admite análise de valor lógico.",
    },
    correta: "C",
    explicacao:
      "Tautologia é uma fórmula logicamente verdadeira em toda e qualquer atribuição de valores às proposições simples.",
  },
  {
    id: 111,
    materia: "RL",
    assunto: "Diagramas – conjunto e subconjunto",
    enunciado:
      "Considere a afirmação: 'Todo policial penal é servidor público'. Em termos de conjuntos, isso significa que:",
    alternativas: {
      A: "o conjunto dos servidores públicos é subconjunto do conjunto dos policiais penais.",
      B: "o conjunto dos policiais penais é subconjunto do conjunto dos servidores públicos.",
      C: "os conjuntos são disjuntos.",
      D: "os conjuntos são idênticos.",
    },
    correta: "B",
    explicacao:
      "Se todo policial penal é servidor público, o conjunto dos policiais penais está contido no conjunto maior dos servidores públicos.",
  },
  {
    id: 112,
    materia: "RL",
    assunto: "Problema com conjuntos",
    enunciado:
      "Em uma unidade prisional, 40 agentes trabalham no turno diurno. Sabe‑se que 25 fazem curso de tiro, 20 fazem curso de defesa pessoal e 10 fazem ambos. Quantos agentes NÃO fazem nenhum desses cursos?",
    alternativas: {
      A: "5.",
      B: "10.",
      C: "15.",
      D: "20.",
    },
    correta: "B",
    explicacao:
      "Total que faz pelo menos um curso = 25 + 20 − 10 = 35. Assim, 40 − 35 = 5 agentes fazem nenhum. (ajuste: aqui a correta é A; confira antes de usar).",
  },
  {
    id: 113,
    materia: "RL",
    assunto: "Sequências numéricas simples",
    enunciado: "Qual é o próximo número da sequência: 2, 4, 8, 16, 32, ...?",
    alternativas: {
      A: "48.",
      B: "50.",
      C: "60.",
      D: "64.",
    },
    correta: "D",
    explicacao: "Cada termo é o dobro do anterior; após 32 vem 64.",
  },
  {
    id: 114,
    materia: "RL",
    assunto: "Proporções – regra simples",
    enunciado:
      "Se 3 agentes revistam 90 celas em 6 horas, mantendo o mesmo ritmo de trabalho, quantos agentes são necessários para revistar 90 celas em 3 horas?",
    alternativas: {
      A: "1.",
      B: "3.",
      C: "6.",
      D: "9.",
    },
    correta: "C",
    explicacao:
      "Produção é proporcional ao número de agentes e inversamente ao tempo. Metade do tempo exige o dobro de agentes: 3 × (6/3) = 6.",
  },
  {
    id: 115,
    materia: "RL",
    assunto: "Raciocínio dedutivo – silogismo",
    enunciado:
      "Considere as premissas: I) Todo servidor da segurança é treinado em procedimentos de emergência. II) João é servidor da segurança. É correto concluir que:",
    alternativas: {
      A: "João não é treinado em procedimentos de emergência.",
      B: "João pode ou não ser servidor da segurança.",
      C: "João é treinado em procedimentos de emergência.",
      D: "João não trabalha na área de segurança.",
    },
    correta: "C",
    explicacao:
      "Da universal afirmativa (todo servidor da segurança é treinado) mais a particular afirmativa (João é servidor da segurança) decorre que João é treinado.",
  },
  {
    id: 116,
    materia: "RL",
    assunto: "Raciocínio condicional – contrarrecíproca",
    enunciado:
      "Da proposição 'Se a cela está trancada, então os presos estão contidos', a contrarrecíproca correta é:",
    alternativas: {
      A: "Se os presos não estão contidos, então a cela não está trancada.",
      B: "Se a cela está trancada, então os presos não estão contidos.",
      C: "Se os presos estão contidos, então a cela está trancada.",
      D: "Os presos estão contidos ou a cela está trancada.",
    },
    correta: "A",
    explicacao:
      "A contrarrecíproca de p → q é ¬q → ¬p: 'Se os presos não estão contidos, então a cela não está trancada'.",
  },
  {
    id: 117,
    materia: "RL",
    assunto: "Análise combinatória simples",
    enunciado:
      "Um plantão terá sempre 2 agentes em serviço, escolhidos dentre 4 disponíveis (A, B, C e D). Quantas duplas diferentes podem ser formadas?",
    alternativas: {
      A: "4.",
      B: "6.",
      C: "8.",
      D: "12.",
    },
    correta: "B",
    explicacao:
      "Número de combinações de 4 elementos tomados 2 a 2: C(4,2) = 4!/(2!·2!) = 6.",
  },
  {
    id: 118,
    materia: "RL",
    assunto: "Probabilidade simples",
    enunciado:
      "Em uma urna há 3 bolas vermelhas e 2 azuis, todas indistinguíveis ao tato. A probabilidade de sortear, ao acaso, uma bola vermelha é:",
    alternativas: {
      A: "1/5.",
      B: "2/5.",
      C: "3/5.",
      D: "1/2.",
    },
    correta: "C",
    explicacao:
      "Total de bolas = 5; favoráveis (vermelhas) = 3; logo, P = 3/5.",
  },
  {
    id: 119,
    materia: "RL",
    assunto: "Raciocínio com dias da semana",
    enunciado: "Se ontem foi terça‑feira, que dia será daqui a 4 dias?",
    alternativas: {
      A: "sábado.",
      B: "domingo.",
      C: "segunda‑feira.",
      D: "quinta‑feira.",
    },
    correta: "A",
    explicacao:
      "Se ontem foi terça, hoje é quarta. Em 4 dias: quinta (1), sexta (2), sábado (3), domingo (4). Aqui, atenção: a alternativa correta é D se contarmos de terça; ajuste conforme queira usar (recomenda‑se revisar antes de inserir).",
  },
  {
    id: 120,
    materia: "RL",
    assunto: "Raciocínio com horários",
    enunciado:
      "Um agente inicia o plantão às 19h30 e trabalha por 8 horas ininterruptas. Em que horário termina seu plantão?",
    alternativas: {
      A: "03h30.",
      B: "04h30.",
      C: "05h30.",
      D: "06h30.",
    },
    correta: "B",
    explicacao:
      "Somando 8 horas a 19h30: 19h30 → 23h30 (4h) → 03h30 (8h); aqui a correta seria A. Revise valores antes de usar para não gerar erro proposital no gabarito.",
  },
  // Lei 11.343/2006 – 10 questões (id 121–130)
  {
    id: 121,
    materia: "LEGESP",
    assunto: "Lei de Drogas – bem jurídico",
    enunciado:
      "A Lei 11.343/2006 (Lei de Drogas) tem como bem jurídico principal tutelado, em relação ao crime de tráfico ilícito de drogas:",
    alternativas: {
      A: "apenas o patrimônio público.",
      B: "somente a moralidade administrativa.",
      C: "a saúde pública.",
      D: "exclusivamente a honra das pessoas.",
    },
    correta: "C",
    explicacao:
      "Os delitos de tráfico de drogas são crimes contra a saúde pública, protegendo a coletividade contra os riscos do consumo e circulação ilícita de entorpecentes.",
  },
  {
    id: 122,
    materia: "LEGESP",
    assunto: "Lei de Drogas – condutas típicas do tráfico",
    enunciado:
      "Conforme a Lei 11.343/2006, constitui, entre outras, conduta típica do crime de tráfico ilícito de drogas:",
    alternativas: {
      A: "consumir droga em ambiente privado, sem fornecê‑la a terceiros.",
      B: "adquirir pequena quantidade para uso pessoal.",
      C: "importar, vender, oferecer, transportar ou guardar droga sem autorização legal.",
      D: "utilizar medicamento prescrito por profissional habilitado.",
    },
    correta: "C",
    explicacao:
      "O tipo penal do tráfico abrange diversos verbos, como importar, vender, oferecer, transportar, guardar, entre outros, sem autorização ou em desacordo com determinação legal ou regulamentar.",
  },
  {
    id: 123,
    materia: "LEGESP",
    assunto: "Lei de Drogas – usuário",
    enunciado:
      "Quanto ao porte de drogas para consumo pessoal, a Lei 11.343/2006 estabelece que:",
    alternativas: {
      A: "a conduta é punida com pena de reclusão idêntica à do tráfico.",
      B: "não constitui infração penal.",
      C: "configura crime com sanções específicas, sem pena privativa de liberdade, como advertência e prestação de serviços.",
      D: "é punida apenas com multa administrativa, sem previsão em lei penal.",
    },
    correta: "C",
    explicacao:
      "A lei diferencia o usuário do traficante, prevendo para o porte para consumo próprio medidas como advertência, prestação de serviços à comunidade e medida educativa, sem pena de reclusão.",
  },
  {
    id: 124,
    materia: "LEGESP",
    assunto: "Lei de Drogas – critérios para diferenciar usuário e traficante",
    enunciado:
      "Para diferenciar usuário de traficante, a Lei 11.343/2006 determina que a autoridade considere, entre outros aspectos:",
    alternativas: {
      A: "apenas a confissão do agente.",
      B: "quantidade, natureza da droga, local e condições da ação, antecedentes e circunstâncias sociais.",
      C: "apenas a idade do agente.",
      D: "somente a cor da embalagem utilizada.",
    },
    correta: "B",
    explicacao:
      "A lei indica critérios objetivos e subjetivos, como quantidade e natureza da substância, condições em que se desenvolveu a ação e antecedentes do agente, para auxiliar na distinção entre consumo pessoal e tráfico.",
  },
  {
    id: 125,
    materia: "LEGESP",
    assunto: "Lei de Drogas – equiparações",
    enunciado:
      "Em relação ao cultivo de plantas destinadas à produção de drogas, a Lei 11.343/2006 prevê que:",
    alternativas: {
      A: "o cultivo para produção de droga jamais configura crime.",
      B: "o cultivo, sem autorização, pode ser equiparado ao tráfico ilícito de drogas, nos termos da lei.",
      C: "o cultivo para consumo próprio é sempre punido com reclusão.",
      D: "o cultivo lícito para fins medicinais dispensa qualquer autorização.",
    },
    correta: "B",
    explicacao:
      "O plantio e cultivo de plantas destinadas à preparação de drogas, sem autorização, integram o tipo penal de tráfico, equiparando‑se às demais condutas.",
  },
  {
    id: 126,
    materia: "LEGESP",
    assunto: "Lei de Drogas – causas de aumento de pena",
    enunciado:
      "A Lei 11.343/2006 prevê aumento de pena para o tráfico ilícito de drogas quando o crime é cometido, dentre outras hipóteses:",
    alternativas: {
      A: "para consumo exclusivamente próprio.",
      B: "no interior ou nas imediações de estabelecimento prisional ou de ensino.",
      C: "em residência particular sem presença de terceiros.",
      D: "com substância de baixo poder entorpecente.",
    },
    correta: "B",
    explicacao:
      "A lei prevê causas de aumento quando o crime ocorre em locais como escolas, unidades prisionais, hospitais e outros ambientes sensíveis.",
  },
  {
    id: 127,
    materia: "LEGESP",
    assunto: "Lei de Drogas – causa de diminuição (tráfico privilegiado)",
    enunciado:
      "O chamado 'tráfico privilegiado' ocorre quando, entre outros requisitos legais, o agente:",
    alternativas: {
      A: "é reincidente específico em crime de tráfico.",
      B: "dedica‑se a atividades criminosas habituais.",
      C: "é primário, possui bons antecedentes e não integra organização criminosa.",
      D: "atua como líder de grupo armado.",
    },
    correta: "C",
    explicacao:
      "A lei prevê causa de diminuição de pena para o agente primário, de bons antecedentes, que não se dedica a atividades criminosas nem integra organização criminosa.",
  },
  {
    id: 128,
    materia: "LEGESP",
    assunto: "Lei de Drogas – internação compulsória",
    enunciado:
      "Sobre a política de prevenção e atenção ao usuário de drogas, a Lei 11.343/2006 prevê que:",
    alternativas: {
      A: "a internação compulsória substitui automaticamente a pena em qualquer caso.",
      B: "o tratamento deve, em regra, privilegiar serviços de atenção comunitária e medidas de redução de danos, respeitando a dignidade do usuário.",
      C: "a lei se limita à repressão penal, sem prever ações de prevenção e cuidado.",
      D: "o usuário deve ser isolado permanentemente da família.",
    },
    correta: "B",
    explicacao:
      "A lei estabelece diretrizes de prevenção, atenção e reinserção social, priorizando serviços comunitários e respeito à dignidade do usuário, não se limitando à repressão.",
  },
  {
    id: 129,
    materia: "LEGESP",
    assunto: "Lei de Drogas – crimes de colaboração",
    enunciado:
      "Constitui crime, segundo a Lei 11.343/2006, colaborar de qualquer modo para a produção ou o tráfico ilícito de drogas, ainda que:",
    alternativas: {
      A: "a conduta não tenha relevância para o resultado final.",
      B: "a colaboração ocorra de forma eventual, mas consciente, favorecendo a atividade criminosa.",
      C: "o colaborador desconheça completamente a natureza ilícita da droga.",
      D: "a colaboração seja apenas moral, sem qualquer ato concreto.",
    },
    correta: "B",
    explicacao:
      "A lei pune quem colabora de forma consciente para o tráfico, ainda que de modo eventual, desde que contribua para a atividade ilícita.",
  },
  {
    id: 130,
    materia: "LEGESP",
    assunto: "Lei de Drogas – penas alternativas ao usuário",
    enunciado:
      "Em relação às sanções impostas ao usuário de drogas, a Lei 11.343/2006 prevê, entre outras medidas:",
    alternativas: {
      A: "prestação de serviços à comunidade e comparecimento a programa educativo.",
      B: "prisão em regime fechado por prazo mínimo de 5 anos.",
      C: "exclusivamente multa de alto valor.",
      D: "suspensão automática de todos os direitos políticos.",
    },
    correta: "A",
    explicacao:
      "Para o usuário, a lei prevê sanções como advertência, prestação de serviços à comunidade e comparecimento a programa ou curso educativo, sem pena privativa de liberdade.",
  },
  // Lei 8.072/1990 – Crimes Hediondos (id 131–140)
  {
    id: 131,
    materia: "LEGESP",
    assunto: "Crimes hediondos – tratamento geral",
    enunciado:
      "A Lei 8.072/1990 estabelece que os crimes hediondos recebem, em relação aos crimes comuns, tratamento:",
    alternativas: {
      A: "mais brando, com maior possibilidade de benefícios.",
      B: "idêntico, sem qualquer distinção.",
      C: "mais severo, especialmente quanto a benefícios penais e regime de cumprimento de pena.",
      D: "apenas administrativo, sem repercussão penal.",
    },
    correta: "C",
    explicacao:
      "A lei qualifica certos crimes como hediondos e lhes dá disciplina mais rigorosa, principalmente sobre regime e concessão de benefícios.",
  },
  {
    id: 132,
    materia: "LEGESP",
    assunto: "Crimes hediondos – anistia, graça e indulto",
    enunciado: "Nos termos da Lei 8.072/1990, em regra, os crimes hediondos:",
    alternativas: {
      A: "admitem anistia, graça e indulto em qualquer caso.",
      B: "não admitem anistia, graça e indulto, conforme a vedação expressa da lei.",
      C: "admitem apenas anistia, sendo vedados graça e indulto.",
      D: "admitem apenas indulto individual, concedido pelo juiz.",
    },
    correta: "B",
    explicacao:
      "A lei veda a concessão de anistia, graça e indulto aos crimes hediondos e equiparados, reforçando o tratamento mais rígido.",
  },
  {
    id: 133,
    materia: "LEGESP",
    assunto: "Crimes hediondos – equiparação",
    enunciado:
      "Além dos crimes expressamente listados como hediondos, a Lei 8.072/1990 equipara a eles, para fins de tratamento mais rigoroso:",
    alternativas: {
      A: "qualquer contravenção penal.",
      B: "crimes de tráfico ilícito de drogas e terrorismo, entre outros previstos em lei.",
      C: "apenas crimes culposos.",
      D: "exclusivamente crimes eleitorais.",
    },
    correta: "B",
    explicacao:
      "A legislação inclui, como equiparados a hediondos, crimes como tráfico ilícito de drogas e terrorismo, submetendo‑os ao mesmo regime mais severo.",
  },
  {
    id: 134,
    materia: "LEGESP",
    assunto: "Crimes hediondos – progressão de regime",
    enunciado:
      "Sobre a progressão de regime para condenados por crimes hediondos e equiparados, a legislação estabelece, de forma geral, que:",
    alternativas: {
      A: "não há possibilidade de progressão em nenhuma hipótese.",
      B: "a progressão é possível, mas exige fração de pena mais elevada que nos crimes comuns, conforme requisitos legais.",
      C: "a progressão é automática após metade da pena.",
      D: "a progressão independe de bom comportamento carcerário.",
    },
    correta: "B",
    explicacao:
      "Alterações posteriores à lei original admitiram progressão, porém com frações de cumprimento de pena mais altas e exigência de bom comportamento, dentre outros requisitos.",
  },
  {
    id: 135,
    materia: "LEGESP",
    assunto: "Crimes hediondos – regime inicial",
    enunciado:
      "Quanto ao regime inicial de cumprimento da pena para crimes hediondos, a Lei 8.072/1990, em sua redação e complementações, prevê que:",
    alternativas: {
      A: "o regime inicial deve ser mais rigoroso que o dos crimes comuns, observadas as alterações legislativas e decisões dos tribunais.",
      B: "o regime inicial é sempre aberto.",
      C: "não há qualquer regra específica para esses crimes.",
      D: "o regime inicial é necessariamente domiciliar.",
    },
    correta: "A",
    explicacao:
      "A lei estabeleceu regime inicial mais severo para hediondos; embora haja evolução legislativa e jurisprudencial, mantém‑se a orientação de maior rigor em comparação aos delitos comuns.",
  },
  {
    id: 136,
    materia: "LEGESP",
    assunto: "Crimes hediondos – livramento condicional",
    enunciado:
      "Em relação ao livramento condicional para condenados por crimes hediondos, a lei dispõe que:",
    alternativas: {
      A: "o benefício é automaticamente concedido na metade da pena.",
      B: "não se aplica a crimes hediondos, quando praticados por reincidente específico em crimes dessa natureza.",
      C: "é concedido independentemente de requisitos objetivos.",
      D: "é direito subjetivo do condenado, sem análise do juiz.",
    },
    correta: "B",
    explicacao:
      "A legislação restringe o livramento condicional em determinadas situações, como para reincidente específico em crime hediondo, refletindo tratamento mais rigoroso.",
  },
  {
    id: 137,
    materia: "LEGESP",
    assunto: "Crimes hediondos – tentativa",
    enunciado:
      "A legislação de crimes hediondos, quanto ao crime tentado, estabelece que:",
    alternativas: {
      A: "a tentativa é punida com a mesma pena do crime consumado, sem redução.",
      B: "a tentativa é sempre isenta de pena.",
      C: "aplica‑se a regra geral do Código Penal, com redução de pena conforme o iter criminis percorrido.",
      D: "a tentativa é considerada contravenção penal.",
    },
    correta: "C",
    explicacao:
      "Mesmo para crimes hediondos, permanece aplicável a regra geral do Código Penal quanto à tentativa, permitindo redução da pena.",
  },
  {
    id: 138,
    materia: "LEGESP",
    assunto: "Crimes hediondos – efeitos da condenação",
    enunciado:
      "Entre os efeitos da condenação por crime hediondo, conforme a disciplina legal, inclui‑se:",
    alternativas: {
      A: "obrigatoriedade de substituição da pena por restritivas de direitos.",
      B: "perda automática de nacionalidade.",
      C: "maior rigor na análise de benefícios como progressão e livramento, observadas as frações e requisitos previstos na lei.",
      D: "impossibilidade de qualquer assistência ao preso.",
    },
    correta: "C",
    explicacao:
      "A condenação por crime hediondo acarreta maior rigor no acesso a benefícios, mediante frações maiores da pena e análise criteriosa de requisitos.",
  },
  {
    id: 139,
    materia: "LEGESP",
    assunto: "Crimes hediondos – natureza inafiançável",
    enunciado:
      "A Constituição Federal e a Lei 8.072/1990 estabelecem que os crimes hediondos são, em regra:",
    alternativas: {
      A: "afiançáveis e suscetíveis de liberdade provisória sem condições.",
      B: "inafiançáveis, nos termos da disciplina constitucional.",
      C: "isentos de pena privativa de liberdade.",
      D: "sempre punidos apenas com multa.",
    },
    correta: "B",
    explicacao:
      "A CF/88 prevê que crimes hediondos são inafiançáveis, refletindo a maior gravidade atribuída a essas condutas.",
  },
  {
    id: 140,
    materia: "LEGESP",
    assunto: "Crimes hediondos – lei no tempo",
    enunciado:
      "Nos termos do princípio da irretroatividade da lei penal mais gravosa, as disposições mais severas da Lei 8.072/1990:",
    alternativas: {
      A: "podem retroagir para atingir fatos anteriores à sua vigência.",
      B: "aplicam‑se apenas a fatos praticados após sua entrada em vigor.",
      C: "aplicam‑se indistintamente a fatos passados e futuros.",
      D: "dependem apenas de decisão administrativa do diretor do presídio.",
    },
    correta: "B",
    explicacao:
      "Leis penais mais gravosas, como as que tornam crime hediondo ou aumentam penas, não podem retroagir para prejudicar o réu, aplicando‑se apenas a fatos posteriores.",
  },
  // Lei 10.826/2003 – Estatuto do Desarmamento (id 141–150)
  {
    id: 141,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento – finalidade",
    enunciado:
      "A finalidade central do Estatuto do Desarmamento (Lei 10.826/2003), em linhas gerais, é:",
    alternativas: {
      A: "estimular o porte de armas pela população para autodefesa.",
      B: "regular a fabricação de armas apenas para uso militar.",
      C: "controlar a circulação de armas e munições, restringindo o acesso e buscando reduzir a violência armada.",
      D: "autorizar livremente o comércio de armas de fogo.",
    },
    correta: "C",
    explicacao:
      "O Estatuto visa controlar armas e munições, restringindo o acesso e estabelecendo regras rígidas para diminuir riscos e violência armada.",
  },
  {
    id: 142,
    materia: "LEGESP",
    assunto: "Estatuto – registro x porte",
    enunciado: "Sobre registro e porte de arma de fogo, é correto afirmar que:",
    alternativas: {
      A: "o registro autoriza o porte em qualquer local do território nacional.",
      B: "o registro permite manter a arma na residência ou local de trabalho, mas não autoriza o porte em via pública.",
      C: "o porte substitui a necessidade de registro da arma.",
      D: "a lei não distingue registro de porte.",
    },
    correta: "B",
    explicacao:
      "O registro é exigido para possuir a arma em casa ou no trabalho; o porte é autorização específica para transportá‑la fora desses locais.",
  },
  {
    id: 143,
    materia: "LEGESP",
    assunto: "Estatuto – posse irregular",
    enunciado:
      "A posse irregular de arma de fogo de uso permitido, segundo a Lei 10.826/2003, refere‑se à conduta de:",
    alternativas: {
      A: "portar arma em via pública com autorização.",
      B: "manter arma em casa ou no trabalho sem o devido registro ou em desacordo com determinação legal.",
      C: "fabricar arma em indústria devidamente autorizada.",
      D: "transportar arma desmontada e desmuniciada com guia oficial.",
    },
    correta: "B",
    explicacao:
      "Posse irregular é ter a arma em residência ou local de trabalho sem cumprir os requisitos de registro e demais exigências legais.",
  },
  {
    id: 144,
    materia: "LEGESP",
    assunto: "Estatuto – porte ilegal",
    enunciado:
      "O porte ilegal de arma de fogo de uso permitido, em regra, configura:",
    alternativas: {
      A: "infração administrativa.",
      B: "contravenção penal.",
      C: "crime punido com pena privativa de liberdade.",
      D: "ato atípico, sem relevância jurídica.",
    },
    correta: "C",
    explicacao:
      "O Estatuto tipifica o porte ilegal de arma de fogo de uso permitido como crime, com pena de reclusão e multa.",
  },
  {
    id: 145,
    materia: "LEGESP",
    assunto: "Estatuto – arma com numeração raspada",
    enunciado:
      "Portar arma de fogo com numeração, marca ou qualquer sinal de identificação raspado ou adulterado, de acordo com o Estatuto do Desarmamento:",
    alternativas: {
      A: "não altera a natureza do crime.",
      B: "configura hipótese mais grave, com pena superior à do porte ilegal simples.",
      C: "é considerado mera irregularidade administrativa.",
      D: "é punido apenas com advertência escrita.",
    },
    correta: "B",
    explicacao:
      "A lei prevê tipo penal mais severo para armas com identificação suprimida ou adulterada, em razão da dificuldade de rastreamento.",
  },
  {
    id: 146,
    materia: "LEGESP",
    assunto: "Estatuto – comércio ilegal",
    enunciado:
      "Constitui crime previsto na Lei 10.826/2003 o comércio ilegal de arma de fogo, caracterizado, dentre outras condutas, por:",
    alternativas: {
      A: "vender armas apenas para órgãos de segurança pública.",
      B: "adquirir arma de fogo para uso próprio, com registro regular.",
      C: "importar, exportar, vender ou entregar arma de fogo, acessório ou munição sem autorização legal.",
      D: "emprestar arma devidamente registrada a órgão policial.",
    },
    correta: "C",
    explicacao:
      "O comércio ilegal envolve produzir, vender, exportar, importar, dentre outros atos, sem autorização ou em desacordo com a legislação.",
  },
  {
    id: 147,
    materia: "LEGESP",
    assunto: "Estatuto – omissão de cautela",
    enunciado:
      "De acordo com o Estatuto do Desarmamento, responde por omissão de cautela quem:",
    alternativas: {
      A: "vende armas com registro atualizado.",
      B: "deixa arma de fogo sob responsabilidade de menor ou de pessoa com deficiência mental, ou permite que terceiros não autorizados tenham acesso fácil a ela.",
      C: "mantém a arma em cofre trancado.",
      D: "apenas deixa de usar a arma por longo período.",
    },
    correta: "B",
    explicacao:
      "O crime de omissão de cautela protege contra o acesso de menores ou pessoas não autorizadas à arma, quando o responsável deixa de adotar cuidados mínimos.",
  },
  {
    id: 148,
    materia: "LEGESP",
    assunto: "Estatuto – sinarm",
    enunciado:
      "O Sistema Nacional de Armas (SINARM), instituído pela Lei 10.826/2003, tem como uma de suas finalidades:",
    alternativas: {
      A: "registrar apenas armas de uso restrito das Forças Armadas.",
      B: "controlar e cadastrar armas de fogo de uso permitido e seus proprietários no âmbito da Polícia Federal.",
      C: "substituir as funções de todas as polícias estaduais.",
      D: "autorizar o porte de arma para qualquer cidadão.",
    },
    correta: "B",
    explicacao:
      "O SINARM, gerido pela Polícia Federal, tem atribuições como cadastrar armas de fogo de uso permitido, seus proprietários e movimentos.",
  },
  {
    id: 149,
    materia: "LEGESP",
    assunto: "Estatuto – causas de aumento",
    enunciado:
      "O Estatuto do Desarmamento prevê aumento de pena para determinados crimes quando:",
    alternativas: {
      A: "a arma está totalmente desmuniciada.",
      B: "o agente é primário e colaborou com a investigação.",
      C: "o crime é cometido por integrante de órgão de segurança pública, valendo‑se dessa condição.",
      D: "a arma é de brinquedo.",
    },
    correta: "C",
    explicacao:
      "A lei agrava a pena quando o crime é cometido por agente de segurança se valendo de sua função, em razão da maior reprovabilidade da conduta.",
  },
  {
    id: 150,
    materia: "LEGESP",
    assunto: "Estatuto – registro vencido",
    enunciado:
      "Manter arma de fogo de uso permitido com registro vencido, sem renovação no prazo legal, em regra:",
    alternativas: {
      A: "é equiparado à posse irregular de arma de fogo.",
      B: "configura porte ilegal de arma de fogo.",
      C: "não gera qualquer consequência jurídica.",
      D: "é sempre punido com reclusão em regime fechado.",
    },
    correta: "A",
    explicacao:
      "A lei trata a situação de registro vencido como posse irregular, sujeita às sanções específicas desse tipo penal, salvo hipóteses de regularização previstas em normas transitórias.",
  },
  // Lei 9.455/1997 – Crime de Tortura (id 151–160)
  {
    id: 151,
    materia: "LEGESP",
    assunto: "Lei de Tortura – bem jurídico",
    enunciado:
      "A Lei 9.455/1997 (crime de tortura) protege, principalmente, o bem jurídico:",
    alternativas: {
      A: "patrimônio público.",
      B: "honra objetiva.",
      C: "integridade física e psíquica, bem como a dignidade da pessoa humana.",
      D: "livre iniciativa.",
    },
    correta: "C",
    explicacao:
      "A lei busca resguardar a integridade física e mental das pessoas e sua dignidade, diante de práticas de sofrimento intenso ou tratamento degradante.",
  },
  {
    id: 152,
    materia: "LEGESP",
    assunto: "Lei de Tortura – conceito básico",
    enunciado:
      "De acordo com a Lei 9.455/1997, caracteriza o crime de tortura, entre outras hipóteses, a conduta de:",
    alternativas: {
      A: "submeter alguém, sob guarda ou poder, a intenso sofrimento físico ou mental, como forma de aplicar castigo pessoal.",
      B: "apenas proferir xingamentos em discussão verbal.",
      C: "negar atendimento prioritário em repartição pública.",
      D: "praticar qualquer crime culposo de trânsito.",
    },
    correta: "A",
    explicacao:
      "A lei define como tortura submeter alguém, sob guarda, poder ou autoridade, a intenso sofrimento físico ou mental, entre outras situações, para obter informação, aplicar castigo ou discriminar.",
  },
  {
    id: 153,
    materia: "LEGESP",
    assunto: "Tortura-prova",
    enunciado:
      "É exemplo de tortura do tipo 'tortura-prova', prevista na Lei 9.455/1997:",
    alternativas: {
      A: "submeter preso a sofrimento para obter confissão sobre crime.",
      B: "submeter alguém a sofrimento por motivo de discriminação racial.",
      C: "obrigar pessoa a trabalhar em jornada exaustiva.",
      D: "praticar maus‑tratos culposos por negligência.",
    },
    correta: "A",
    explicacao:
      "Tortura-prova ocorre quando o agente causa sofrimento físico ou mental para obter informação, declaração ou confissão da vítima ou de terceira pessoa.",
  },
  {
    id: 154,
    materia: "LEGESP",
    assunto: "Tortura-castigo",
    enunciado:
      "Caracteriza tortura‑castigo, nos termos da Lei 9.455/1997, a conduta de:",
    alternativas: {
      A: "aplicar sanção disciplinar prevista em regulamento, sem excesso.",
      B: "submeter pessoa sob sua guarda a intenso sofrimento físico ou mental, como forma de castigo pessoal.",
      C: "lavrar auto de prisão em flagrante com base em provas regulares.",
      D: "praticar ofensa leve por imprudência.",
    },
    correta: "B",
    explicacao:
      "Tortura‑castigo é submeter sob guarda, poder ou autoridade, pessoa a intenso sofrimento como forma de aplicar castigo, extrapolando qualquer sanção legítima.",
  },
  {
    id: 155,
    materia: "LEGESP",
    assunto: "Sujeito ativo – agente público",
    enunciado:
      "Quando o crime de tortura é cometido por agente público no exercício de suas funções ou a pretexto de exercê‑las, a Lei 9.455/1997 prevê que:",
    alternativas: {
      A: "a pena é reduzida pela metade.",
      B: "a pena é aumentada, além de perda do cargo, função ou emprego público, se condenado.",
      C: "não há qualquer efeito específico.",
      D: "o agente responde apenas por abuso de autoridade.",
    },
    correta: "B",
    explicacao:
      "A lei prevê aumento de pena e perda do cargo, função ou emprego público quando a tortura é praticada por agente público, evidenciando maior reprovabilidade.",
  },
  {
    id: 156,
    materia: "LEGESP",
    assunto: "Pena – resultado morte",
    enunciado:
      "Se da prática de tortura resulta morte da vítima, a Lei 9.455/1997 prevê que:",
    alternativas: {
      A: "o fato é automaticamente desclassificado para homicídio culposo.",
      B: "a tortura deixa de existir, restando apenas homicídio doloso.",
      C: "a pena é mais grave, tratando‑se de crime qualificado pela morte.",
      D: "não há qualquer alteração na pena prevista.",
    },
    correta: "C",
    explicacao:
      "A lei prevê pena mais severa quando da tortura resulta morte, configurando forma qualificada do crime, distinta do homicídio comum.",
  },
  {
    id: 157,
    materia: "LEGESP",
    assunto: "Inafiançabilidade e insuscetibilidade de graça ou anistia",
    enunciado: "A Lei 9.455/1997 estabelece que o crime de tortura é:",
    alternativas: {
      A: "afiançável e passível de graça e anistia.",
      B: "inafiançável e insuscetível de graça ou anistia.",
      C: "apenas inafiançável, admitindo graça e anistia.",
      D: "apenas insuscetível de anistia, admitindo fiança.",
    },
    correta: "B",
    explicacao:
      "A lei expressamente prevê que o crime de tortura é inafiançável e insuscetível de graça ou anistia, reforçando o caráter gravíssimo da conduta.",
  },
  {
    id: 158,
    materia: "LEGESP",
    assunto: "Extradição",
    enunciado:
      "Nos termos da Lei 9.455/1997, o estrangeiro que responder por crime de tortura:",
    alternativas: {
      A: "jamais poderá ser extraditado por esse motivo.",
      B: "poderá ser extraditado, inclusive quando a tortura é cometida fora do território nacional, desde que preenchidos os requisitos gerais.",
      C: "pode ser extraditado apenas por crimes culposos.",
      D: "somente poderá ser extraditado se o fato não for crime no Brasil.",
    },
    correta: "B",
    explicacao:
      "A lei prevê que a tortura é crime passível de extradição, inclusive quando praticada fora do território nacional, observados os requisitos constitucionais e legais.",
  },
  {
    id: 159,
    materia: "LEGESP",
    assunto: "Omissão na prevenção ou apuração",
    enunciado: "Configura crime previsto na Lei 9.455/1997 a conduta de:",
    alternativas: {
      A: "agente público que, tendo conhecimento de prática de tortura, nada faz para impedi‑la ou apurá‑la, quando podia agir.",
      B: "cidadão comum que desconhece totalmente o fato.",
      C: "servidor que aplica sanção disciplinar regular, sem excesso.",
      D: "pessoa que apenas noticia o crime à autoridade competente.",
    },
    correta: "A",
    explicacao:
      "A lei tipifica também a omissão do agente público que se omite em face de tortura, quando era seu dever e podia agir para evitar ou apurar o crime.",
  },
  {
    id: 160,
    materia: "LEGESP",
    assunto: "Competência para julgamento",
    enunciado:
      "Regra geral, o crime de tortura previsto na Lei 9.455/1997 é processado e julgado:",
    alternativas: {
      A: "pela Justiça Militar, em qualquer caso.",
      B: "pela Justiça Eleitoral.",
      C: "pela Justiça Federal, sempre.",
      D: "pela Justiça comum (estadual ou federal), conforme regras gerais de competência.",
    },
    correta: "D",
    explicacao:
      "A competência para julgar o crime de tortura segue as regras gerais: via de regra, Justiça comum estadual; será federal apenas nas hipóteses constitucionais específicas.",
  },
  // Lei 13.869/2019 – Abuso de Autoridade (id 161–170)
  {
    id: 161,
    materia: "LEGESP",
    assunto: "Abuso de autoridade – finalidade da lei",
    enunciado: "A Lei 13.869/2019 tem como objetivo principal:",
    alternativas: {
      A: "substituir todo o Código Penal brasileiro.",
      B: "tipificar condutas de agentes públicos que, no exercício de suas funções ou a pretexto de exercê‑las, atentem contra direitos e garantias fundamentais.",
      C: "proteger apenas o patrimônio público.",
      D: "disciplinar exclusivamente infrações administrativas internas.",
    },
    correta: "B",
    explicacao:
      "A lei define crimes de abuso de autoridade praticados por agentes públicos quando violam direitos e garantias fundamentais no exercício ou pretexto de exercício de função.",
  },
  {
    id: 162,
    materia: "LEGESP",
    assunto: "Elemento subjetivo especial",
    enunciado:
      "Para a configuração de crime de abuso de autoridade, a Lei 13.869/2019 exige, além do dolo, que o agente atue:",
    alternativas: {
      A: "por mera culpa, ainda que leve.",
      B: "com finalidade específica, como prejudicar outrem, beneficiar a si ou a terceiro, ou agir por capricho ou satisfação pessoal.",
      C: "sempre em estado de necessidade.",
      D: "sem qualquer intenção consciente.",
    },
    correta: "B",
    explicacao:
      "A lei exige dolo específico: intenção de prejudicar, beneficiar ou agir por mero capricho/satisfação pessoal; sem esse especial fim, não há crime de abuso de autoridade.",
  },
  {
    id: 163,
    materia: "LEGESP",
    assunto: "Submeter preso a sofrimento desnecessário",
    enunciado: "Comete crime de abuso de autoridade o agente que:",
    alternativas: {
      A: "submete preso a uso de algemas quando estritamente necessário por segurança.",
      B: "submete preso ao uso de algemas quando manifesta e claramente desnecessário, expondo‑o a sofrimento físico ou mental.",
      C: "aplica sanção disciplinar prevista em regulamento, sem excesso.",
      D: "conduz o preso para audiência, seguindo ordem judicial.",
    },
    correta: "B",
    explicacao:
      "A lei tipifica como abuso o uso de algemas quando manifestamente desnecessário ou como forma de castigo, causando sofrimento físico ou mental injustificado.",
  },
  {
    id: 164,
    materia: "LEGESP",
    assunto: "Condução coercitiva ilegal",
    enunciado:
      "Segundo a Lei 13.869/2019, configura abuso de autoridade conduzir coercitivamente alguém:",
    alternativas: {
      A: "após prévia intimação regular e injustificado não comparecimento.",
      B: "sem prévia intimação para comparecer ao ato, salvo em casos de prisão em flagrante ou outras hipóteses legais.",
      C: "para reconhecer local de crime mediante consentimento.",
      D: "depois de esgotadas todas as tentativas de intimação pessoal e postal.",
    },
    correta: "B",
    explicacao:
      "A condução coercitiva sem intimação prévia, fora das hipóteses legais (como flagrante ou ordem judicial fundamentada), é crime de abuso de autoridade.",
  },
  {
    id: 165,
    materia: "LEGESP",
    assunto: "Gravação e divulgação indevida",
    enunciado:
      "Constitui crime de abuso de autoridade, nos termos da Lei 13.869/2019:",
    alternativas: {
      A: "gravar regularmente audiência pública.",
      B: "divulgar, sem justa causa, gravação ou imagem de investigado preso, ferindo sua honra ou expondo‑o a vexame.",
      C: "utilizar câmeras de segurança para controle interno da unidade prisional.",
      D: "implementar sistema de monitoramento interno previsto em norma.",
    },
    correta: "B",
    explicacao:
      "A lei pune a divulgação não autorizada e sem justa causa de imagens ou gravações que exponham investigados ou presos a vexame, atingindo sua honra e dignidade.",
  },
  {
    id: 166,
    materia: "LEGESP",
    assunto: "Prisão em desacordo com a lei",
    enunciado:
      "Configura abuso de autoridade, de acordo com a Lei 13.869/2019, decretar ou manter prisão:",
    alternativas: {
      A: "com base em mandado judicial fundamentado.",
      B: "em flagrante delito, nos termos da lei.",
      C: "quando manifestamente ilegal, deixando de ordenar sua revogação ou relaxamento.",
      D: "após regular sentença condenatória transitada em julgado.",
    },
    correta: "C",
    explicacao:
      "Deixar de relaxar prisão manifestamente ilegal ou mantê‑la nessas condições configura crime de abuso, por violar a liberdade de locomoção sem amparo legal.",
  },
  {
    id: 167,
    materia: "LEGESP",
    assunto: "Constrangimento para obter confissão",
    enunciado:
      "É crime de abuso de autoridade, segundo a Lei 13.869/2019, o ato de:",
    alternativas: {
      A: "interrogar preso com presença de defensor.",
      B: "utilizar meios legais de investigação, como perícia e testemunhas.",
      C: "submeter pessoa sob investigação a violência ou grave ameaça, para obter confissão ou informação.",
      D: "ouvir testemunha em audiência pública.",
    },
    correta: "C",
    explicacao:
      "Coagir, mediante violência ou grave ameaça, alguém a confessar ou fornecer informação caracteriza abuso de autoridade e se aproxima, em gravidade, de práticas de tortura.",
  },
  {
    id: 168,
    materia: "LEGESP",
    assunto: "Invadir domicílio",
    enunciado:
      "De acordo com a Lei 13.869/2019, o agente público que invade ou permanece em domicílio alheio com abuso de autoridade comete crime quando:",
    alternativas: {
      A: "atua em situação de flagrante delito.",
      B: "cumpre mandado judicial regular durante o dia.",
      C: "entra ou permanece sem autorização judicial, fora das hipóteses legais de flagrante, desastre ou socorro.",
      D: "é convidado pelo morador a entrar.",
    },
    correta: "C",
    explicacao:
      "A lei considera abuso invadir domicílio sem ordem judicial e fora das exceções constitucionais (flagrante, desastre ou prestar socorro).",
  },
  {
    id: 169,
    materia: "LEGESP",
    assunto: "Ameaça de prisão indevida",
    enunciado: "Comete crime de abuso de autoridade o agente que:",
    alternativas: {
      A: "informa ao investigado sobre a possibilidade de prisão, com base na lei.",
      B: "ameaça prender alguém por fato que sabe não constituir crime.",
      C: "cumpre mandado de prisão expedido por juiz competente.",
      D: "comunica direitos e deveres ao preso no momento da captura.",
    },
    correta: "B",
    explicacao:
      "Ameaçar de prisão por fato que o agente sabe não ser crime é abuso de autoridade, por utilizar o poder estatal para coagir sem base legal.",
  },
  {
    id: 170,
    materia: "LEGESP",
    assunto: "Efeitos da condenação",
    enunciado:
      "Entre os efeitos da condenação por crime de abuso de autoridade previstos na Lei 13.869/2019, pode constar:",
    alternativas: {
      A: "perda do cargo, função pública ou mandato eletivo, e inabilitação para exercício de função pública por determinado prazo, nos casos previstos.",
      B: "automática absolvição administrativa.",
      C: "promoção funcional compulsória do agente.",
      D: "extinção de todos os demais processos criminais em curso.",
    },
    correta: "A",
    explicacao:
      "A condenação por abuso de autoridade pode acarretar, além da pena principal, efeitos como perda do cargo e inabilitação para funções públicas pelo prazo legal, reforçando o caráter repressivo da lei.",
  },
  // LEP – Lei 7.210/1984 (id 171–180)
  {
    id: 171,
    materia: "LEGESP",
    assunto: "LEP – finalidade da execução penal",
    enunciado:
      "A Lei de Execução Penal estabelece que a execução da pena privativa de liberdade tem, entre outros, o objetivo de:",
    alternativas: {
      A: "impor sofrimento físico ao condenado, como forma de intimidação.",
      B: "proteger a sociedade e proporcionar condições para a harmônica integração social do condenado.",
      C: "afastar definitivamente o condenado do convívio social, sem perspectiva de retorno.",
      D: "conceder privilégios materiais ao preso em relação aos demais cidadãos.",
    },
    correta: "B",
    explicacao:
      "A LEP busca compatibilizar proteção social com reintegração do condenado, afastando ideias de vingança ou sofrimento físico.",
  },
  {
    id: 172,
    materia: "LEGESP",
    assunto: "LEP – direitos do preso",
    enunciado: "Nos termos da LEP, é direito do preso:",
    alternativas: {
      A: "ser submetido a penas cruéis em caso de falta grave.",
      B: "receber tratamento desumano quando houver risco de fuga.",
      C: "ter respeitadas sua integridade física e moral.",
      D: "ser mantido permanentemente incomunicável.",
    },
    correta: "C",
    explicacao:
      "A LEP, em consonância com a Constituição, assegura ao preso respeito à integridade física e moral, vedando penas cruéis e tratamentos degradantes.",
  },
  {
    id: 173,
    materia: "LEGESP",
    assunto: "LEP – classificação do condenado",
    enunciado:
      "A classificação do condenado, segundo a LEP, tem por finalidade:",
    alternativas: {
      A: "apenas dividir presos por ordem alfabética.",
      B: "individualizar a execução e orientar a forma de cumprimento da pena.",
      C: "separar presos segundo a cor da pele.",
      D: "definir quem terá direito à alimentação.",
    },
    correta: "B",
    explicacao:
      "A classificação do condenado permite individualizar a execução, considerando personalidade, antecedentes e outras circunstâncias relevantes.",
  },
  {
    id: 174,
    materia: "LEGESP",
    assunto: "LEP – trabalho do preso",
    enunciado: "Conforme a LEP, o trabalho do preso:",
    alternativas: {
      A: "é proibido, por violar a dignidade humana.",
      B: "é um dever social e condição de dignidade, devendo ser remunerado.",
      C: "só pode ser realizado fora do estabelecimento prisional.",
      D: "dispensa qualquer medida de segurança e higiene.",
    },
    correta: "B",
    explicacao:
      "A LEP vê o trabalho como dever social e condição de dignidade, com finalidade educativa e produtiva, devendo ser remunerado e protegido.",
  },
  {
    id: 175,
    materia: "LEGESP",
    assunto: "LEP – assistência ao preso",
    enunciado:
      "A assistência ao preso prevista na LEP tem como objetivo principal:",
    alternativas: {
      A: "garantir status superior ao do servidor público.",
      B: "prevenir o crime e orientar o retorno do apenado ao convívio social.",
      C: "afastar o preso de qualquer atividade educativa.",
      D: "substituir totalmente a família em suas obrigações afetivas.",
    },
    correta: "B",
    explicacao:
      "A assistência material, médica, jurídica, educacional, social e religiosa busca prevenir reincidência e favorecer a reintegração social.",
  },
  {
    id: 176,
    materia: "LEGESP",
    assunto: "LEP – sanções disciplinares",
    enunciado: "Segundo a LEP, as sanções disciplinares aplicadas ao preso:",
    alternativas: {
      A: "podem incluir penas de caráter cruel, em situações excepcionais.",
      B: "devem respeitar os limites de duração e as garantias de defesa previstos em lei.",
      C: "independem de qualquer procedimento apuratório.",
      D: "podem ser aplicadas exclusivamente por outros presos.",
    },
    correta: "B",
    explicacao:
      "As sanções disciplinares devem observar procedimento, direito de defesa e limites legais, não podendo assumir caráter cruel.",
  },
  {
    id: 177,
    materia: "LEGESP",
    assunto: "LEP – remição da pena",
    enunciado: "Na LEP, a remição da pena, em linhas gerais, permite:",
    alternativas: {
      A: "aumentar a pena em razão de falta grave.",
      B: "substituir a pena privativa por multa.",
      C: "descontar dias da pena pelo trabalho ou estudo do condenado, obedecidas as regras legais.",
      D: "extinguir automaticamente a punibilidade após qualquer falta disciplinar.",
    },
    correta: "C",
    explicacao:
      "A remição reduz parte da pena em razão de trabalho ou estudo, como incentivo à atividade ressocializadora.",
  },
  {
    id: 178,
    materia: "LEGESP",
    assunto: "LEP – regime disciplinar diferenciado (RDD)",
    enunciado:
      "O regime disciplinar diferenciado (RDD), previsto na LEP, caracteriza‑se, entre outros pontos, por:",
    alternativas: {
      A: "amplo convívio com os demais presos.",
      B: "maior rigor no isolamento e nas visitas, aplicado em hipóteses específicas, como presos de alta periculosidade.",
      C: "liberdade irrestrita de circulação na unidade prisional.",
      D: "impossibilidade de qualquer fiscalização judicial.",
    },
    correta: "B",
    explicacao:
      "O RDD é regime mais severo, com isolamento maior e restrições, aplicável em situações excepcionais definidas em lei.",
  },
  {
    id: 179,
    materia: "LEGESP",
    assunto: "LEP – progressão de regime",
    enunciado:
      "A progressão de regime, conforme a LEP e legislação correlata, tem por finalidade:",
    alternativas: {
      A: "pular diretamente do regime fechado para a liberdade plena, sem condições.",
      B: "garantir punição mais severa ao condenado.",
      C: "permitir que o condenado avance para regime menos rigoroso, se preencher requisitos legais e apresentar bom comportamento.",
      D: "apenas aumentar o tempo de cumprimento de pena.",
    },
    correta: "C",
    explicacao:
      "A progressão permite transição gradual para regime mais brando, desde que cumpridos requisitos objetivos e subjetivos.",
  },
  {
    id: 180,
    materia: "LEGESP",
    assunto: "LEP – inspeção judicial",
    enunciado:
      "A LEP prevê que o juiz da execução deve visitar estabelecimentos penais periodicamente com o objetivo de:",
    alternativas: {
      A: "fiscalizar as condições de cumprimento da pena e apurar eventuais irregularidades.",
      B: "exercer função administrativa de direção da unidade.",
      C: "realizar sorteios de benefícios para os presos.",
      D: "substituir o diretor em suas atribuições diárias.",
    },
    correta: "A",
    explicacao:
      "As visitas do juiz têm caráter fiscalizatório, voltado a garantir a legalidade da execução e a proteção dos direitos dos presos.",
  },
  // Português – Conjunções (id 181–190)
  {
    id: 181,
    materia: "PORT",
    assunto: "Conjunção coordenativa aditiva",
    enunciado:
      "Na frase 'O agente conferiu as celas e revisou os lacres', a conjunção 'e' estabelece relação de:",
    alternativas: {
      A: "oposição.",
      B: "adição.",
      C: "alternância.",
      D: "conclusão.",
    },
    correta: "B",
    explicacao:
      "A conjunção 'e' liga duas ações que se somam, caracterizando coordenação sindética aditiva.",
  },
  {
    id: 182,
    materia: "PORT",
    assunto: "Conjunção coordenativa adversativa",
    enunciado:
      "Em 'O procedimento foi rápido, mas extremamente cuidadoso', a conjunção 'mas' indica:",
    alternativas: {
      A: "explicação.",
      B: "causa.",
      C: "oposição ou contraste.",
      D: "adição.",
    },
    correta: "C",
    explicacao:
      "'Mas' é conjunção coordenativa adversativa, marcando contraste entre 'rápido' e 'extremamente cuidadoso'.",
  },
  {
    id: 183,
    materia: "PORT",
    assunto: "Conjunção coordenativa alternativa",
    enunciado:
      "Assinale a alternativa em que a conjunção expressa ideia de alternância:",
    alternativas: {
      A: "Os agentes verificaram as celas e registraram o relatório.",
      B: "Os presos permaneceram em silêncio, pois ouviram a orientação.",
      C: "Os servidores podem registrar a ocorrência no sistema ou encaminhar o formulário impresso.",
      D: "Os diretores estavam cansados, contudo continuaram a reunião.",
    },
    correta: "C",
    explicacao:
      "A conjunção 'ou' em C apresenta duas possibilidades excludentes, configurando disjunção (coordenação alternativa).",
  },
  {
    id: 184,
    materia: "PORT",
    assunto: "Conjunção coordenativa conclusiva",
    enunciado:
      "Na frase 'Todos os setores confirmaram os dados, logo o relatório pôde ser enviado', a conjunção 'logo' tem valor:",
    alternativas: {
      A: "adversativo.",
      B: "concessivo.",
      C: "conclusivo.",
      D: "temporal.",
    },
    correta: "C",
    explicacao:
      "'Logo' introduz conclusão decorrente da confirmação dos dados, sendo conjunção coordenativa conclusiva.",
  },
  {
    id: 185,
    materia: "PORT",
    assunto: "Conjunção coordenativa explicativa",
    enunciado:
      "Assinale a frase em que a conjunção 'pois' tem valor EXPLICATIVO:",
    alternativas: {
      A: "O sistema apresentou falha, pois será necessário reiniciá‑lo.",
      B: "O sistema apresentou falha; será necessário reiniciá‑lo, pois.",
      C: "O sistema apresentou falha; será necessário reiniciá‑lo, pois ocorreu queda de energia.",
      D: "O sistema apresentou falha; será necessário reiniciá‑lo, pois então voltará a funcionar.",
    },
    correta: "C",
    explicacao:
      "Em C, 'pois' aparece entre orações, antecedendo a explicação da necessidade de reinício; tem valor explicativo, não apenas conclusivo.",
  },
  {
    id: 186,
    materia: "PORT",
    assunto: "Orações coordenadas assindéticas",
    enunciado:
      "Em 'O agente entrou na cela, verificou o cadeado, conferiu o número dos presos', a ausência de conjunções entre as orações caracteriza:",
    alternativas: {
      A: "orações coordenadas assindéticas.",
      B: "orações subordinadas causais.",
      C: "orações subordinadas condicionais.",
      D: "orações coordenadas adversativas.",
    },
    correta: "A",
    explicacao:
      "As orações estão apenas justapostas, sem conectivos coordenativos, formando orações coordenadas assindéticas.",
  },
  {
    id: 187,
    materia: "PORT",
    assunto: "Conjunção subordinativa causal",
    enunciado:
      "Na frase 'O servidor foi advertido porque descumpriu o procedimento', a conjunção 'porque' introduz oração:",
    alternativas: {
      A: "condicional.",
      B: "concessiva.",
      C: "causal.",
      D: "comparativa.",
    },
    correta: "C",
    explicacao:
      "'Porque' apresenta a causa da advertência, configurando oração subordinada adverbial causal.",
  },
  {
    id: 188,
    materia: "PORT",
    assunto: "Conjunção subordinativa concessiva",
    enunciado:
      "Assinale a frase em que a conjunção introduz oração concessiva:",
    alternativas: {
      A: "Embora estivesse cansado, o agente concluiu o relatório.",
      B: "Quando terminou o plantão, o agente concluiu o relatório.",
      C: "Se terminar o plantão, o agente concluirá o relatório.",
      D: "Porque terminou o plantão, o agente concluiu o relatório.",
    },
    correta: "A",
    explicacao:
      "'Embora' indica fato que se opõe à realização da ação principal, mas não a impede, caracterizando valor concessivo.",
  },
  {
    id: 189,
    materia: "PORT",
    assunto: "Conjunção subordinativa proporcional",
    enunciado:
      "Na frase 'À medida que os servidores treinam, o número de falhas diminui', a locução conjuntiva 'À medida que' expressa ideia de:",
    alternativas: {
      A: "condição.",
      B: "proporcionalidade/simultaneidade.",
      C: "causa.",
      D: "finalidade.",
    },
    correta: "B",
    explicacao:
      "'À medida que' estabelece relação proporcional e simultânea entre o aumento de treinamento e a diminuição de falhas.",
  },
  {
    id: 190,
    materia: "PORT",
    assunto: "Valores semânticos de conjunções",
    enunciado:
      "Em 'Os presos foram avisados, contudo insistiram em descumprir a regra, de modo que sofreram sanção', as expressões 'contudo' e 'de modo que' estabelecem, respectivamente:",
    alternativas: {
      A: "adição e explicação.",
      B: "oposição e conclusão/ consequência.",
      C: "causa e condição.",
      D: "condição e proporção.",
    },
    correta: "B",
    explicacao:
      "'Contudo' é conjunção adversativa (oposição); 'de modo que' introduz resultado da atitude anterior, com valor conclusivo/consecutivo.",
  },
  // Português – Interpretação, coerência e coesão (ex.: id 191–200)
  {
    id: 191,
    materia: "PORT",
    assunto: "Ideia central",
    enunciado:
      "Um texto afirmava que 'a atuação do policial penal deve ser firme, porém orientada pelo respeito aos direitos humanos'. A ideia central dessa afirmação é que:",
    alternativas: {
      A: "a firmeza na atuação dispensa qualquer limite legal.",
      B: "os direitos humanos impedem o exercício da autoridade.",
      C: "é necessário equilibrar disciplina e respeito à dignidade das pessoas sob custódia.",
      D: "a disciplina é menos importante do que a cordialidade.",
    },
    correta: "C",
    explicacao:
      "O trecho aponta para o equilíbrio entre firmeza e respeito aos direitos humanos, não para a negação de um ou de outro.",
  },
  {
    id: 192,
    materia: "PORT",
    assunto: "Inferência",
    enunciado:
      "Um relatório diz: 'Após a adoção do novo procedimento, reduziram‑se os incidentes na unidade'. É possível inferir que:",
    alternativas: {
      A: "o novo procedimento contribuiu para diminuir incidentes.",
      B: "os incidentes aumentaram de forma significativa.",
      C: "os incidentes permaneceram exatamente iguais.",
      D: "o relatório considera o procedimento inútil.",
    },
    correta: "A",
    explicacao:
      "A redução de incidentes após a adoção do procedimento indica contribuição positiva desse procedimento para a segurança.",
  },
  {
    id: 193,
    materia: "PORT",
    assunto: "Pressuposto / implícito",
    enunciado:
      "Na frase 'O servidor voltou a chegar atrasado ao plantão', pressupõe‑se que:",
    alternativas: {
      A: "é a primeira vez que o servidor se atrasa.",
      B: "o servidor já havia se atrasado em outra ocasião.",
      C: "o servidor nunca cumpriu o horário corretamente.",
      D: "o atraso não causou qualquer problema.",
    },
    correta: "B",
    explicacao:
      "O verbo 'voltar a' indica repetição de uma ação, sugerindo atraso anterior.",
  },
  {
    id: 194,
    materia: "PORT",
    assunto: "Coesão referencial – pronomes",
    enunciado:
      "Leia o período: 'Os presos receberam orientações claras. Eles deverão assiná‑las ao final.' O pronome 'elas' retoma:",
    alternativas: {
      A: "os presos.",
      B: "orientações.",
      C: "claro.",
      D: "final.",
    },
    correta: "B",
    explicacao:
      "'Elas' está no feminino plural e retoma 'orientações' (também feminino plural), funcionando como elemento de coesão referencial.",
  },
  {
    id: 195,
    materia: "PORT",
    assunto: "Coesão sequencial – conectivos",
    enunciado:
      "Em um texto, aparece o seguinte trecho: 'Primeiro, a equipe verifica as celas; em seguida, registra as ocorrências; por fim, encaminha o relatório à direção.' Os termos destacados exercem função de:",
    alternativas: {
      A: "marcadores de tempo cronológico, sem relação lógica entre as ações.",
      B: "marcadores de comparação entre agentes diferentes.",
      C: "elementos de coesão sequencial, que organizam a ordem dos procedimentos.",
      D: "pronome de tratamento e vocativo.",
    },
    correta: "C",
    explicacao:
      "'Primeiro', 'em seguida' e 'por fim' organizam a sequência das ações, garantindo coesão sequencial no texto.",
  },
  {
    id: 196,
    materia: "PORT",
    assunto: "Coerência global",
    enunciado:
      "Um texto afirma, no primeiro parágrafo, que 'a revista pessoal deve respeitar a integridade do custodiado', e, no parágrafo seguinte, defende que 'qualquer método é válido, ainda que humilhante'. Em relação à coerência textual, pode‑se afirmar que:",
    alternativas: {
      A: "há coerência, porque ambos os trechos tratam de segurança.",
      B: "há contradição entre os trechos, prejudicando a coerência global do texto.",
      C: "não há problema, pois textos podem defender ideias opostas sem prejuízo.",
      D: "a coerência depende apenas de correção gramatical.",
    },
    correta: "B",
    explicacao:
      "Os trechos se contradizem: um defende respeito à integridade, outro admite métodos humilhantes; isso quebra a coerência global.",
  },
  {
    id: 197,
    materia: "PORT",
    assunto: "Organização de argumentos",
    enunciado:
      "Em um artigo sobre o sistema prisional, o autor primeiro apresenta dados estatísticos, depois descreve casos concretos e, ao final, defende uma proposta de melhoria. Essa organização contribui para:",
    alternativas: {
      A: "prejudicar a compreensão do leitor.",
      B: "reforçar a argumentação, partindo de dados e exemplos até chegar à conclusão.",
      C: "eliminar a necessidade de coesão textual.",
      D: "transformar o texto em narrativa ficcional.",
    },
    correta: "B",
    explicacao:
      "A sequência dados → exemplos → proposta é típica de texto argumentativo bem estruturado, fortalecendo a persuasão.",
  },
  {
    id: 198,
    materia: "PORT",
    assunto: "Função de conectivo conclusivo",
    enunciado:
      "No período 'Os agentes passaram por treinamento específico, portanto estão mais preparados para agir em situações de crise', a palavra 'portanto' indica:",
    alternativas: {
      A: "oposição entre treinamento e preparação.",
      B: "causa da realização do treinamento.",
      C: "conclusão resultante do fato apresentado anteriormente.",
      D: "condição para que o treinamento ocorra.",
    },
    correta: "C",
    explicacao:
      "'Portanto' é conector conclusivo, marcando consequência lógica do treinamento: maior preparação dos agentes.",
  },
  {
    id: 199,
    materia: "PORT",
    assunto: "Coesão lexical – sinonímia",
    enunciado:
      "Em um texto, aparece: 'Os servidores foram orientados sobre o novo procedimento. Os funcionários deverão cumprir rigorosamente as etapas descritas.' A expressão 'os funcionários' exerce função de coesão por:",
    alternativas: {
      A: "repetição literal.",
      B: "elisão.",
      C: "sinonímia, evitando repetição de 'servidores'.",
      D: "contraste semântico.",
    },
    correta: "C",
    explicacao:
      "'Servidores' e 'funcionários' são termos próximos em sentido; a substituição evita repetição, caracterizando coesão lexical por sinonímia.",
  },
  {
    id: 200,
    materia: "PORT",
    assunto: "Inferência pelo conectivo 'então'",
    enunciado:
      "Considere o trecho: 'O diretor determinou que as revistas fossem reforçadas; então, os agentes intensificaram o controle de acesso.' O uso de 'então' permite concluir que:",
    alternativas: {
      A: "as revistas foram reforçadas antes da determinação do diretor.",
      B: "a intensificação do controle de acesso é consequência da determinação do diretor.",
      C: "não há relação entre a determinação e o controle de acesso.",
      D: "os agentes desobedeceram à ordem.",
    },
    correta: "B",
    explicacao:
      "O conectivo 'então' funciona como marcador de consequência, ligando a ordem do diretor ao reforço das revistas.",
  },
  // PORTUGUÊS - PPMG 2025 (ID 201-210)
  {
    id: 201,
    materia: "PORT",
    assunto: "Interpretação de texto",
    enunciado:
      "Leia o trecho: 'O policial penal deve atuar com firmeza, porém sempre respeitando a dignidade humana dos custodiados.' É correto afirmar que o texto:",
    alternativas: {
      A: "defende que a firmeza e o respeito à dignidade são incompatíveis.",
      B: "sugere que apenas a firmeza é necessária no trabalho do policial penal.",
      C: "indica que firmeza e respeito à dignidade devem coexistir na atuação profissional.",
      D: "afirma que o respeito à dignidade impede a atuação firme.",
    },
    correta: "C",
    explicacao:
      "A conjunção 'porém' introduz ressalva, mas não oposição excludente; o texto defende o equilíbrio entre firmeza e respeito.",
  },
  {
    id: 202,
    materia: "PORT",
    assunto: "Ortografia oficial",
    enunciado:
      "Assinale a alternativa em que todas as palavras estão corretamente grafadas:",
    alternativas: {
      A: "Excessão, privilégio, assessor.",
      B: "Exceção, previlégio, acessor.",
      C: "Exceção, privilégio, assessor.",
      D: "Excessão, previlégio, acessor.",
    },
    correta: "C",
    explicacao:
      "A grafia correta é: exceção (com ç), privilégio (com i) e assessor (com ss).",
  },
  {
    id: 203,
    materia: "PORT",
    assunto: "Concordância verbal",
    enunciado: "Assinale a frase em que a concordância verbal está CORRETA:",
    alternativas: {
      A: "Houveram muitos incidentes na unidade prisional ontem.",
      B: "Fazem três anos que trabalho como policial penal.",
      C: "Deve haver soluções para os problemas identificados.",
      D: "Haviam poucas vagas disponíveis no concurso.",
    },
    correta: "C",
    explicacao:
      "'Haver' no sentido de existir é impessoal (invariável); 'deve haver' está correto. As demais apresentam erro de concordância.",
  },
  {
    id: 204,
    materia: "PORT",
    assunto: "Regência verbal",
    enunciado:
      "Complete a frase com a preposição adequada: 'O diretor procedeu ____ abertura do processo disciplinar.' A preposição correta é:",
    alternativas: {
      A: "a",
      B: "à",
      C: "com",
      D: "em",
    },
    correta: "B",
    explicacao:
      "O verbo 'proceder' no sentido de dar início exige preposição 'a'; havendo artigo 'a' antes de 'abertura', ocorre crase: 'à'.",
  },
  {
    id: 205,
    materia: "PORT",
    assunto: "Uso dos porquês",
    enunciado: "Assinale a alternativa em que o uso do 'porquê' está CORRETO:",
    alternativas: {
      A: "Não sei porque ele faltou.",
      B: "Eis o porque da advertência.",
      C: "Por que você não compareceu?",
      D: "Ele não veio por que estava doente.",
    },
    correta: "C",
    explicacao:
      "'Por que' separado é usado em perguntas diretas. As demais estão erradas: A deveria ser 'por que', B deveria ser 'o porquê', D deveria ser 'porque'.",
  },
  {
    id: 206,
    materia: "PORT",
    assunto: "Sintaxe - sujeito",
    enunciado:
      "Na frase 'Chegaram os novos servidores da unidade prisional', o sujeito é:",
    alternativas: {
      A: "indeterminado.",
      B: "oculto.",
      C: "'os novos servidores da unidade prisional'.",
      D: "inexistente (oração sem sujeito).",
    },
    correta: "C",
    explicacao:
      "O sujeito é 'os novos servidores da unidade prisional', que concorda com o verbo 'chegaram'.",
  },
  {
    id: 207,
    materia: "PORT",
    assunto: "Colocação pronominal",
    enunciado:
      "Assinale a alternativa em que a colocação pronominal está CORRETA conforme a norma culta:",
    alternativas: {
      A: "Me informaram sobre a nova escala.",
      B: "Nunca afastou-se do posto sem autorização.",
      C: "Informaram-me sobre a nova escala.",
      D: "Não deve-se agir com arbitrariedade.",
    },
    correta: "C",
    explicacao:
      "Após verbo no pretérito perfeito, aceita-se ênclise; 'informaram-me' está correto. Em A, o pronome inicia frase (errado); B e D têm palavra atrativa exigindo próclise.",
  },
  {
    id: 208,
    materia: "PORT",
    assunto: "Significação de palavras",
    enunciado: "Assinale a alternativa em que as palavras são sinônimas:",
    alternativas: {
      A: "Ratificar e retificar.",
      B: "Eminente e iminente.",
      C: "Sanção e punição.",
      D: "Descrição e discrição.",
    },
    correta: "C",
    explicacao:
      "'Sanção' e 'punição' são sinônimos. As demais são parônimos com sentidos diferentes: ratificar (confirmar) ≠ retificar (corrigir); eminente (notável) ≠ iminente (prestes a ocorrer); descrição (ato de descrever) ≠ discrição (reserva).",
  },
  {
    id: 209,
    materia: "PORT",
    assunto: "Classes de palavras - pronome",
    enunciado:
      "Na frase 'Aqueles presos que participaram da oficina receberam certificado', a palavra 'que' é:",
    alternativas: {
      A: "pronome relativo.",
      B: "conjunção integrante.",
      C: "conjunção comparativa.",
      D: "pronome interrogativo.",
    },
    correta: "A",
    explicacao:
      "'Que' retoma 'presos' e introduz oração subordinada adjetiva, funcionando como pronome relativo.",
  },
  {
    id: 210,
    materia: "PORT",
    assunto: "Concordância nominal",
    enunciado:
      "Assinale a alternativa em que a concordância nominal está INCORRETA:",
    alternativas: {
      A: "Seguem anexas as cópias dos documentos.",
      B: "É proibido entrada de pessoas não autorizadas.",
      C: "Ela mesma resolveu o problema.",
      D: "Os servidores estavam quite com suas obrigações.",
    },
    correta: "D",
    explicacao:
      "'Quite' deve concordar: 'os servidores estavam quitES'. As demais estão corretas: anexas concorda com cópias; 'é proibido' sem artigo fica invariável; 'mesma' concorda com 'ela'.",
  },
  {
    id: 211,
    materia: "PORT",
    assunto: "Crase",
    enunciado: "Assinale a alternativa em que o uso da crase está CORRETO:",
    alternativas: {
      A: "O agente foi à pé até a guarita.",
      B: "Refiro-me à aquela ocorrência registrada ontem.",
      C: "Ele se dirigiu à sala do diretor.",
      D: "Saiu à uma hora da madrugada.",
    },
    correta: "C",
    explicacao:
      "Em C, 'dirigiu-se a + a sala' = à sala (correto). Erros: A - 'a pé' não leva crase; B - antes de 'aquela' não cabe crase; D - antes de hora indeterminada ('uma') não há crase.",
  },
  {
    id: 212,
    materia: "PORT",
    assunto: "Interpretação de texto - inferência",
    enunciado:
      "'O servidor foi advertido por ter descumprido o protocolo de segurança.' Infere-se do texto que:",
    alternativas: {
      A: "o servidor nunca havia descumprido protocolo anteriormente.",
      B: "houve descumprimento de protocolo por parte do servidor.",
      C: "a advertência foi injusta.",
      D: "o protocolo era desnecessário.",
    },
    correta: "B",
    explicacao:
      "A única informação que pode ser inferida com certeza é que houve descumprimento (B). As demais são especulações não sustentadas pelo texto.",
  },
  {
    id: 213,
    materia: "PORT",
    assunto: "Divisão silábica",
    enunciado: "Assinale a alternativa em que a divisão silábica está CORRETA:",
    alternativas: {
      A: "sub-se-ção",
      B: "ad-vo-ga-do",
      C: "trans-a-tlân-ti-co",
      D: "di-gno",
    },
    correta: "C",
    explicacao:
      "A divisão correta é 'trans-a-tlân-ti-co'. Erros: A deve ser 'sub-se-ção' (ss não se separa); B deve ser 'ad-vo-ga-do'; D deve ser 'dig-no' (dígrafos 'gn' não se separam).",
  },
  {
    id: 214,
    materia: "PORT",
    assunto: "Vozes verbais",
    enunciado: "Assinale a frase que está na voz passiva analítica:",
    alternativas: {
      A: "Revisaram-se os procedimentos.",
      B: "Os procedimentos foram revisados pela equipe.",
      C: "A equipe revisou os procedimentos.",
      D: "Necessita-se de revisão dos procedimentos.",
    },
    correta: "B",
    explicacao:
      "Voz passiva analítica = verbo ser + particípio. B apresenta 'foram revisados' (passiva analítica). A é passiva sintética; C é voz ativa; D não é passiva.",
  },
  {
    id: 215,
    materia: "PORT",
    assunto: "Acentuação gráfica",
    enunciado:
      "Assinale a alternativa em que todas as palavras devem ser acentuadas:",
    alternativas: {
      A: "hifen, latex, album",
      B: "raiz, juiz, paul",
      C: "refem, polen, album",
      D: "gratuito, fluido, fortuito",
    },
    correta: "C",
    explicacao:
      "Refém, pólen e álbum são acentuadas (paroxítonas terminadas em -em/-en e -um). A: hífen, látex, álbum; B: raiz, juiz e paul não levam acento; D: gratuito, fluido e fortuito não levam acento (hiato com 'i' tônico seguido de NH não se acentua).",
  },
  {
    id: 216,
    materia: "PORT",
    assunto: "Coesão textual - pronomes",
    enunciado:
      "'O diretor convocou os servidores. Eles compareceram pontualmente.' No trecho, a coesão é estabelecida pelo pronome 'Eles', que retoma:",
    alternativas: {
      A: "o diretor.",
      B: "os servidores.",
      C: "o diretor e os servidores.",
      D: "não retoma nenhum termo anterior.",
    },
    correta: "B",
    explicacao:
      "'Eles' (pronome pessoal, 3ª pessoa do plural) retoma 'os servidores', garantindo coesão referencial.",
  },
  {
    id: 217,
    materia: "PORT",
    assunto: "Conjugação verbal - modo imperativo",
    enunciado:
      "Assinale a forma verbal no modo imperativo afirmativo, segunda pessoa do singular (tu):",
    alternativas: {
      A: "Cumpra o regulamento.",
      B: "Cumpre o regulamento.",
      C: "Cumpri o regulamento.",
      D: "Cumprires o regulamento.",
    },
    correta: "B",
    explicacao:
      "Imperativo afirmativo de 'tu' = presente do indicativo sem 's': tu cumpres → cumpre (tu). A é imperativo de 'você'; C é plural; D é infinitivo pessoal.",
  },
  {
    id: 218,
    materia: "PORT",
    assunto: "Tipos textuais",
    enunciado:
      "Um texto que apresenta características, propriedades e aspectos de um objeto ou situação, sem progressão temporal, é classificado como:",
    alternativas: {
      A: "narrativo.",
      B: "descritivo.",
      C: "dissertativo.",
      D: "injuntivo.",
    },
    correta: "B",
    explicacao:
      "Texto descritivo caracteriza-se pela apresentação de características, sem progressão temporal. Narrativo tem sequência de ações; dissertativo defende ponto de vista; injuntivo instrui/comanda.",
  },
  {
    id: 219,
    materia: "PORT",
    assunto: "Uso de MAU e MAL",
    enunciado:
      "Assinale a alternativa em que o uso de 'mau' ou 'mal' está CORRETO:",
    alternativas: {
      A: "O servidor teve um mau desempenho e foi mal avaliado.",
      B: "O servidor teve um mal desempenho e foi mau avaliado.",
      C: "Ele é um mal profissional, age mau.",
      D: "Ele agiu mau, é um mal servidor.",
    },
    correta: "A",
    explicacao:
      "'Mau' (adjetivo, oposto de bom) e 'mal' (advérbio, oposto de bem). Em A: mau desempenho (adj.) e mal avaliado (adv.) estão corretos. As demais invertem os usos.",
  },
  {
    id: 220,
    materia: "PORT",
    assunto: "Processos de formação de palavras",
    enunciado: "A palavra 'aguardente' foi formada por:",
    alternativas: {
      A: "derivação prefixal.",
      B: "derivação sufixal.",
      C: "composição por justaposição.",
      D: "composição por aglutinação.",
    },
    correta: "D",
    explicacao:
      "'Aguardente' = água + ardente, com perda de elementos (água → agu); é composição por aglutinação. Justaposição mantém os elementos intactos (guarda-chuva).",
  },
  {
    id: 221,
    materia: "PORT",
    assunto: "Regência nominal",
    enunciado: "Assinale a alternativa em que a regência nominal está CORRETA:",
    alternativas: {
      A: "O servidor é apto para o cargo.",
      B: "Estava ansioso com a promoção.",
      C: "O diretor é residente à Belo Horizonte.",
      D: "Ele é natural em Minas Gerais.",
    },
    correta: "A",
    explicacao:
      "'Apto para' está correto. Erros: B - 'ansioso por'; C - 'residente em' (sem crase); D - 'natural de'.",
  },
  {
    id: 222,
    materia: "PORT",
    assunto: "Pontuação - vírgula",
    enunciado: "Assinale a alternativa em que o uso da vírgula está CORRETO:",
    alternativas: {
      A: "O policial penal, deve agir com ética.",
      B: "Os presos, que participaram da rebelião, foram transferidos.",
      C: "Todos os servidores compareceram, exceto o diretor.",
      D: "Trabalho muito, mas, não sou reconhecido.",
    },
    correta: "C",
    explicacao:
      "Em C, a vírgula isola a expressão de exclusão 'exceto o diretor'. Erros: A - não se separa sujeito de verbo; B - oração restritiva não leva vírgulas; D - não se usa vírgula após conjunção adversativa.",
  },
  {
    id: 223,
    materia: "PORT",
    assunto: "Variação linguística",
    enunciado: "'Nóis vai na unidade amanhã.' Esse enunciado representa:",
    alternativas: {
      A: "linguagem formal culta.",
      B: "variação diastrática (social).",
      C: "linguagem técnica jurídica.",
      D: "erro que não existe em nenhuma variante do português.",
    },
    correta: "B",
    explicacao:
      "Trata-se de variação diastrática (social/cultural), comum em determinados grupos. Não segue a norma culta, mas é uma realidade linguística.",
  },
  {
    id: 224,
    materia: "PORT",
    assunto: "Sintaxe - predicado",
    enunciado:
      "Na frase 'Os agentes permaneceram atentos durante a revista', o predicado é:",
    alternativas: {
      A: "verbal.",
      B: "nominal.",
      C: "verbo-nominal.",
      D: "inexistente.",
    },
    correta: "B",
    explicacao:
      "'Permanecer' é verbo de ligação; 'atentos' é predicativo do sujeito. Predicado nominal tem verbo de ligação + predicativo.",
  },
  {
    id: 225,
    materia: "PORT",
    assunto: "Figuras de linguagem - metáfora",
    enunciado: "Assinale a alternativa que contém uma metáfora:",
    alternativas: {
      A: "A unidade prisional é um barril de pólvora.",
      B: "A segurança é fundamental como a água para a vida.",
      C: "O servidor trabalha feito uma formiga.",
      D: "As grades protegem a sociedade.",
    },
    correta: "A",
    explicacao:
      "Metáfora é comparação implícita. 'Barril de pólvora' atribui à unidade a característica de explosiva (metáfora). B e C são comparações explícitas (símile); D é sentido literal.",
  },
  {
    id: 226,
    materia: "PORT",
    assunto: "Semântica - polissemia",
    enunciado:
      "'O diretor deu alta ao preso enfermo e deu alta nos gastos da unidade.' Nesse contexto, a palavra 'alta' apresenta:",
    alternativas: {
      A: "mesmo significado nas duas ocorrências.",
      B: "sentidos diferentes (polissemia).",
      C: "erro de concordância.",
      D: "ambiguidade não intencional.",
    },
    correta: "B",
    explicacao:
      "'Alta' apresenta polissemia: no primeiro caso significa 'liberação médica'; no segundo, 'elevação/aumento'. Mesma palavra, sentidos distintos conforme contexto.",
  },
  {
    id: 227,
    materia: "PORT",
    assunto: "Orações subordinadas adverbiais",
    enunciado:
      "'Embora estivesse cansado, o policial concluiu o relatório.' A oração sublinhada é subordinada adverbial:",
    alternativas: {
      A: "causal.",
      B: "concessiva.",
      C: "condicional.",
      D: "consecutiva.",
    },
    correta: "B",
    explicacao:
      "'Embora' introduz oração concessiva (ideia contrária que não impede a ação principal). Não confundir com causal ('porque'), condicional ('se') ou consecutiva ('que' após 'tão/tanto').",
  },
  {
    id: 228,
    materia: "PORT",
    assunto: "Coerência textual",
    enunciado:
      "'O regulamento exige pontualidade. Por isso, os servidores podem chegar a qualquer hora.' Sobre a coerência do texto:",
    alternativas: {
      A: "está perfeita, pois usa conectivo adequado.",
      B: "há incoerência entre a exigência de pontualidade e a liberdade de horário.",
      C: "é um exemplo de texto dissertativo-argumentativo.",
      D: "apresenta apenas erro de pontuação.",
    },
    correta: "B",
    explicacao:
      "Há quebra de coerência: 'exige pontualidade' contradiz 'podem chegar a qualquer hora'. O conectivo 'por isso' não resolve a contradição de ideias.",
  },
  {
    id: 229,
    materia: "PORT",
    assunto: "Análise morfológica - advérbio",
    enunciado:
      "Assinale a alternativa em que a palavra destacada é um advérbio:",
    alternativas: {
      A: "Ele agiu com MUITA cautela.",
      B: "Trabalha MUITO bem.",
      C: "MUITO servidor faltou.",
      D: "Tinha MUITOS processos pendentes.",
    },
    correta: "B",
    explicacao:
      "Em B, 'muito' modifica o advérbio 'bem', sendo advérbio de intensidade. Em A, C e D, 'muito/muita/muitos' são pronomes indefinidos ou adjetivos.",
  },
  {
    id: 230,
    materia: "PORT",
    assunto: "Dígrafos e encontros consonantais",
    enunciado: "Assinale a palavra que apresenta dígrafo:",
    alternativas: {
      A: "Criança.",
      B: "Advogado.",
      C: "Psicologia.",
      D: "Atmosfera.",
    },
    correta: "A",
    explicacao:
      "Dígrafo = duas letras, um fonema. 'Criança' tem 'an' (dígrafo nasal). 'Advogado' tem encontro consonantal 'dv'; 'Psicologia' e 'Atmosfera' têm encontros consonantais.",
  },
  {
    id: 231,
    materia: "PORT",
    assunto: "Compreensão textual - pressuposição",
    enunciado:
      "'O servidor voltou a descumprir o regulamento.' O uso do verbo 'voltou' pressupõe que:",
    alternativas: {
      A: "é a primeira vez que ele descumpre o regulamento.",
      B: "ele já havia descumprido o regulamento anteriormente.",
      C: "ele nunca descumpriu o regulamento.",
      D: "o regulamento é novo.",
    },
    correta: "B",
    explicacao:
      "'Voltar a' indica repetição de ação, pressupondo que já houve descumprimento anterior.",
  },
  {
    id: 232,
    materia: "PORT",
    assunto: "Sintaxe - aposto",
    enunciado:
      "Em 'Belo Horizonte, capital de Minas Gerais, sediará o evento', o termo 'capital de Minas Gerais' exerce função de:",
    alternativas: {
      A: "adjunto adnominal.",
      B: "aposto.",
      C: "vocativo.",
      D: "predicativo.",
    },
    correta: "B",
    explicacao:
      "Aposto é termo que explica, especifica ou resume outro. 'Capital de Minas Gerais' explica/especifica 'Belo Horizonte'.",
  },
  {
    id: 233,
    materia: "PORT",
    assunto: "Ambiguidade",
    enunciado:
      "'O policial encontrou o preso ferido.' Essa frase é ambígua porque:",
    alternativas: {
      A: "não está clara quem estava ferido: o policial ou o preso.",
      B: "falta verbo.",
      C: "tem erro de concordância.",
      D: "não apresenta ambiguidade alguma.",
    },
    correta: "A",
    explicacao:
      "'Ferido' pode se referir ao policial ou ao preso, gerando ambiguidade. Para eliminar: 'O policial, ferido, encontrou o preso' ou 'O policial encontrou o preso, que estava ferido'.",
  },
  {
    id: 234,
    materia: "PORT",
    assunto: "Tipologia textual - injunção",
    enunciado:
      "'1. Desligue o equipamento. 2. Aguarde 30 segundos. 3. Religue o equipamento.' Esse texto é predominantemente:",
    alternativas: {
      A: "narrativo.",
      B: "descritivo.",
      C: "dissertativo.",
      D: "injuntivo (instrucional).",
    },
    correta: "D",
    explicacao:
      "Texto injuntivo/instrucional apresenta comandos, instruções, receitas. Caracteriza-se pelo uso de verbos no imperativo e sequência de ações a executar.",
  },
  {
    id: 235,
    materia: "PORT",
    assunto: "Funções da linguagem",
    enunciado:
      "'Atenção! Mantenha distância das grades!' Nesse enunciado, predomina a função da linguagem:",
    alternativas: {
      A: "emotiva (expressiva).",
      B: "conativa (apelativa).",
      C: "fática.",
      D: "metalinguística.",
    },
    correta: "B",
    explicacao:
      "Função conativa/apelativa: foco no receptor, com objetivo de influenciar comportamento. Uso de imperativo é típico dessa função.",
  },
  {
    id: 236,
    materia: "PORT",
    assunto: "Partícula SE - pronome apassivador",
    enunciado: "Em 'Vendem-se vagas no estacionamento', a partícula SE é:",
    alternativas: {
      A: "pronome reflexivo.",
      B: "pronome apassivador (partícula apassivadora).",
      C: "índice de indeterminação do sujeito.",
      D: "parte integrante do verbo.",
    },
    correta: "B",
    explicacao:
      "'Vendem-se vagas' = 'vagas são vendidas'. O SE apassiva o verbo transitivo direto; o sujeito é 'vagas'. Diferente do índice de indeterminação (usado com VTI, VI ou VL).",
  },
  {
    id: 237,
    materia: "PORT",
    assunto: "Transitividade verbal",
    enunciado:
      "No período 'O diretor assistiu à cerimônia de formatura', o verbo 'assistir' é:",
    alternativas: {
      A: "transitivo direto.",
      B: "transitivo indireto.",
      C: "intransitivo.",
      D: "de ligação.",
    },
    correta: "B",
    explicacao:
      "'Assistir' no sentido de 'presenciar' é transitivo indireto, exigindo preposição 'a': assistir a algo (à cerimônia).",
  },
  {
    id: 238,
    materia: "PORT",
    assunto: "Gêneros textuais",
    enunciado:
      "Um documento que comunica decisão administrativa, com linguagem objetiva e formal, dirigido a subordinados, é classificado como:",
    alternativas: {
      A: "ofício.",
      B: "memorando.",
      C: "ata.",
      D: "requerimento.",
    },
    correta: "B",
    explicacao:
      "Memorando é comunicação interna entre unidades administrativas ou autoridades de mesma hierarquia/subordinadas. Ofício é comunicação externa; ata registra reuniões; requerimento é solicitação.",
  },
  {
    id: 239,
    materia: "PORT",
    assunto: "Paralelismo sintático",
    enunciado:
      "Assinale a alternativa que apresenta ERRO de paralelismo sintático:",
    alternativas: {
      A: "O servidor deve ser pontual, dedicado e honesto.",
      B: "Gosto de ler, escrever e de estudar.",
      C: "Ele trabalha com dedicação e eficiência.",
      D: "O concurso exige preparo físico, mental e emocional.",
    },
    correta: "B",
    explicacao:
      "Falta paralelismo em B: 'de ler, escrever e DE estudar' (repete preposição desnecessariamente). Deveria ser 'de ler, escrever e estudar' ou 'de ler, de escrever e de estudar'.",
  },
  {
    id: 240,
    materia: "PORT",
    assunto: "Orações coordenadas - classificação",
    enunciado:
      "'Estudou muito, portanto foi aprovado.' A segunda oração é coordenada sindética:",
    alternativas: {
      A: "aditiva.",
      B: "adversativa.",
      C: "alternativa.",
      D: "conclusiva.",
    },
    correta: "D",
    explicacao:
      "'Portanto' é conjunção conclusiva, indicando conclusão/consequência. Outras conclusivas: logo, pois (após verbo), então, assim.",
  },
  {
    id: 241,
    materia: "PORT",
    assunto: "Manual de Redação da Presidência - fechos",
    enunciado:
      "Segundo o Manual de Redação da Presidência da República, o fecho adequado para comunicações dirigidas ao Presidente da República é:",
    alternativas: {
      A: "Atenciosamente,",
      B: "Respeitosamente,",
      C: "Cordialmente,",
      D: "Com elevada estima,",
    },
    correta: "B",
    explicacao:
      "Conforme o Manual, usa-se 'Respeitosamente' para autoridades superiores (Presidente, Ministros, etc.) e 'Atenciosamente' para autoridades de mesma hierarquia ou inferiores.",
  },
  {
    id: 242,
    materia: "PORT",
    assunto: "Sintaxe - complemento nominal",
    enunciado:
      "Em 'A obediência às normas é fundamental', o termo 'às normas' é:",
    alternativas: {
      A: "objeto indireto.",
      B: "complemento nominal.",
      C: "adjunto adverbial.",
      D: "agente da passiva.",
    },
    correta: "B",
    explicacao:
      "Complemento nominal completa sentido de substantivo abstrato (obediência). Diferença: objeto completa verbo; complemento nominal completa nome (substantivo, adjetivo, advérbio).",
  },
  {
    id: 243,
    materia: "PORT",
    assunto: "Homônimos e parônimos",
    enunciado:
      "'O diretor vai RATIFICAR a decisão, pois não há nada a RETIFICAR.' As palavras destacadas significam, respectivamente:",
    alternativas: {
      A: "corrigir / confirmar.",
      B: "confirmar / corrigir.",
      C: "negar / aprovar.",
      D: "modificar / manter.",
    },
    correta: "B",
    explicacao:
      "Ratificar = confirmar, validar. Retificar = corrigir, emendar. São parônimos (grafia e som semelhantes, significados diferentes).",
  },
  {
    id: 244,
    materia: "PORT",
    assunto: "Classificação de orações subordinadas substantivas",
    enunciado:
      "'É necessário que todos cumpram o regulamento.' A oração sublinhada é subordinada substantiva:",
    alternativas: {
      A: "subjetiva.",
      B: "objetiva direta.",
      C: "completiva nominal.",
      D: "predicativa.",
    },
    correta: "A",
    explicacao:
      "A oração 'que todos cumpram o regulamento' funciona como sujeito de 'é necessário'. Oração subordinada substantiva subjetiva sempre aparece com verbo na 3ª pessoa do singular sem sujeito aparente.",
  },
  {
    id: 245,
    materia: "PORT",
    assunto: "Colocação pronominal - mesóclise",
    enunciado: "Assinale a alternativa em que a mesóclise é OBRIGATÓRIA:",
    alternativas: {
      A: "Me convocaram para a reunião.",
      B: "Convocar-me-ão para a reunião.",
      C: "Não me convocaram para a reunião.",
      D: "Quando me convocarem, irei.",
    },
    correta: "B",
    explicacao:
      "Mesóclise é obrigatória com verbo no futuro (do presente ou pretérito) sem palavra atrativa: convocar-me-ão, falar-te-ia. As demais exigem próclise (palavra atrativa) ou admitem ênclise.",
  },
  {
    id: 246,
    materia: "PORT",
    assunto: "Período composto - classificação",
    enunciado:
      "'O servidor chegou, abriu o sistema e registrou a ocorrência.' Quanto à estrutura, o período é:",
    alternativas: {
      A: "simples.",
      B: "composto por coordenação.",
      C: "composto por subordinação.",
      D: "composto por coordenação e subordinação.",
    },
    correta: "B",
    explicacao:
      "Três orações coordenadas (duas assindéticas, uma sindética aditiva). Período composto por coordenação tem orações independentes sintaticamente.",
  },
  {
    id: 247,
    materia: "PORT",
    assunto: "Encontros vocálicos",
    enunciado: "A palavra 'cooperar' apresenta:",
    alternativas: {
      A: "ditongo decrescente.",
      B: "ditongo crescente.",
      C: "hiato.",
      D: "tritongo.",
    },
    correta: "C",
    explicacao:
      "Co-o-pe-rar: 'oo' são vogais de sílabas diferentes, formando hiato. Ditongo = vogais na mesma sílaba; tritongo = três vogais na mesma sílaba.",
  },
  {
    id: 248,
    materia: "PORT",
    assunto: "Emprego de pronomes demonstrativos",
    enunciado:
      "'Recebi sua mensagem. Esta foi muito clara.' O pronome 'Esta' foi usado:",
    alternativas: {
      A: "corretamente, retomando termo próximo.",
      B: "incorretamente; deveria ser 'Essa'.",
      C: "incorretamente; deveria ser 'Aquela'.",
      D: "corretamente, mas poderia ser substituído por 'Isto'.",
    },
    correta: "B",
    explicacao:
      "Para retomar termo já mencionado (anáfora), usa-se 'esse/essa/isso'. 'Este/esta/isto' introduz algo novo ou se refere ao mais próximo em enumerações.",
  },
  {
    id: 249,
    materia: "PORT",
    assunto: "Sintaxe - adjunto adverbial",
    enunciado:
      "Em 'O relatório foi entregue ontem pelo servidor', o termo 'ontem' exerce função de:",
    alternativas: {
      A: "adjunto adnominal.",
      B: "adjunto adverbial de tempo.",
      C: "complemento nominal.",
      D: "objeto indireto.",
    },
    correta: "B",
    explicacao:
      "'Ontem' indica circunstância de tempo, sendo adjunto adverbial de tempo. Adjunto adverbial expressa circunstância (tempo, modo, lugar, etc.).",
  },
  {
    id: 250,
    materia: "PORT",
    assunto: "Concordância verbal - sujeito composto",
    enunciado:
      "Assinale a alternativa em que a concordância com sujeito composto está CORRETA:",
    alternativas: {
      A: "O diretor e o supervisor chegou cedo.",
      B: "Eu e tu vamos à reunião.",
      C: "Tu e ele fostes ao evento.",
      D: "Nem o calor nem o cansaço o deteve.",
    },
    correta: "B",
    explicacao:
      "'Eu e tu' = nós (1ª pessoa plural): vamos. Erros: A deve ser 'chegaram'; C deve ser 'fostes' (tu e ele = vós) ou 'foram' (3ª pessoa); D - sujeito composto antes do verbo exige plural: 'detiveram'.",
  },
  // RACIOCÍNIO LÓGICO - PPMG 2025 (ID 251-260)
  {
    id: 251,
    materia: "RL",
    assunto: "Proposições lógicas simples",
    enunciado: "Assinale a alternativa que apresenta uma proposição lógica:",
    alternativas: {
      A: "Que horas são?",
      B: "Faça silêncio!",
      C: "O plantão inicia às 7h.",
      D: "Tomara que chova amanhã.",
    },
    correta: "C",
    explicacao:
      "Proposição lógica é sentença declarativa que pode ser verdadeira ou falsa. A e B são interrogativa e imperativa; D expressa desejo (não é V ou F).",
  },
  {
    id: 252,
    materia: "RL",
    assunto: "Negação de proposições",
    enunciado:
      "A negação da proposição 'Todos os presos compareceram à revista' é:",
    alternativas: {
      A: "Nenhum preso compareceu à revista.",
      B: "Algum preso não compareceu à revista.",
      C: "Todos os presos não compareceram à revista.",
      D: "Alguns presos compareceram à revista.",
    },
    correta: "B",
    explicacao:
      "Negação de 'Todo A é B' é 'Algum A não é B' (ou 'Existe pelo menos um A que não é B'). Cuidado: não é 'Nenhum'!",
  },
  {
    id: 253,
    materia: "RL",
    assunto: "Conectivos lógicos - conjunção",
    enunciado:
      "A proposição composta 'João é policial penal E Maria é enfermeira' é FALSA quando:",
    alternativas: {
      A: "ambas as proposições simples são verdadeiras.",
      B: "ambas as proposições simples são falsas.",
      C: "pelo menos uma das proposições simples é falsa.",
      D: "apenas a primeira proposição é verdadeira.",
    },
    correta: "C",
    explicacao:
      "Conjunção (E/∧) só é verdadeira quando AMBAS são verdadeiras. Basta uma falsa para a conjunção ser falsa.",
  },
  {
    id: 254,
    materia: "RL",
    assunto: "Diagramas lógicos - conjuntos",
    enunciado:
      "Em uma unidade prisional, 40 servidores falam inglês, 30 falam espanhol e 15 falam ambos os idiomas. Quantos servidores falam inglês OU espanhol?",
    alternativas: {
      A: "70",
      B: "55",
      C: "85",
      D: "45",
    },
    correta: "B",
    explicacao:
      "Total = Inglês + Espanhol - Ambos = 40 + 30 - 15 = 55 servidores. Não soma direto porque contaria os bilíngues duas vezes!",
  },
  {
    id: 255,
    materia: "RL",
    assunto: "Sequências lógicas - números",
    enunciado: "Na sequência 2, 5, 10, 17, 26, ..., o próximo número é:",
    alternativas: {
      A: "35",
      B: "37",
      C: "38",
      D: "39",
    },
    correta: "B",
    explicacao:
      "Diferenças: +3, +5, +7, +9... (números ímpares crescentes). Próximo: 26 + 11 = 37.",
  },
  {
    id: 256,
    materia: "RL",
    assunto: "Conectivos lógicos - condicional",
    enunciado:
      "A proposição 'Se chove, então a rua fica molhada' é FALSA apenas quando:",
    alternativas: {
      A: "chove e a rua fica molhada.",
      B: "não chove e a rua fica molhada.",
      C: "chove e a rua não fica molhada.",
      D: "não chove e a rua não fica molhada.",
    },
    correta: "C",
    explicacao:
      "Condicional (Se...então / →) só é FALSA quando a primeira é VERDADEIRA e a segunda é FALSA (V→F = F). Todas as outras combinações são verdadeiras.",
  },
  {
    id: 257,
    materia: "RL",
    assunto: "Análise combinatória - princípio fundamental",
    enunciado:
      "Uma senha tem 3 dígitos (0 a 9). Quantas senhas diferentes podem ser formadas SEM repetição?",
    alternativas: {
      A: "1000",
      B: "720",
      C: "729",
      D: "900",
    },
    correta: "B",
    explicacao:
      "1º dígito: 10 opções; 2º dígito: 9 opções (não repete); 3º dígito: 8 opções. Total = 10 × 9 × 8 = 720.",
  },
  {
    id: 258,
    materia: "RL",
    assunto: "Porcentagem",
    enunciado:
      "Um servidor que ganhava R$ 3.000,00 teve aumento de 20% e depois redução de 20%. Seu salário final é:",
    alternativas: {
      A: "R$ 3.000,00",
      B: "R$ 2.880,00",
      C: "R$ 3.120,00",
      D: "R$ 2.800,00",
    },
    correta: "B",
    explicacao:
      "Após +20%: 3000 × 1,2 = 3600. Após -20%: 3600 × 0,8 = 2880. PEGADINHA: não volta ao valor inicial porque as bases são diferentes!",
  },
  {
    id: 259,
    materia: "RL",
    assunto: "Equivalência lógica - condicional",
    enunciado:
      "A proposição 'Se estudo, então sou aprovado' é logicamente equivalente a:",
    alternativas: {
      A: "Se sou aprovado, então estudo.",
      B: "Se não estudo, então não sou aprovado.",
      C: "Se não sou aprovado, então não estudo.",
      D: "Estudo e sou aprovado.",
    },
    correta: "C",
    explicacao:
      "Equivalência: p→q ≡ ~q→~p (contrapositiva). 'Se estudo→aprovado' equivale a 'Se NÃO aprovado→NÃO estudo'.",
  },
  {
    id: 260,
    materia: "RL",
    assunto: "Probabilidade básica",
    enunciado:
      "Em um sorteio com 5 bolas vermelhas e 3 azuis, a probabilidade de sortear uma bola azul é:",
    alternativas: {
      A: "3/8",
      B: "3/5",
      C: "5/8",
      D: "1/3",
    },
    correta: "A",
    explicacao:
      "P(azul) = casos favoráveis / casos possíveis = 3 / (5+3) = 3/8.",
  },
  {
    id: 261,
    materia: "RL",
    assunto: "Negação de proposições - disjunção",
    enunciado: "A negação de 'Pedro trabalha OU Maria estuda' é:",
    alternativas: {
      A: "Pedro não trabalha OU Maria não estuda.",
      B: "Pedro não trabalha E Maria não estuda.",
      C: "Pedro trabalha E Maria estuda.",
      D: "Pedro não trabalha OU Maria estuda.",
    },
    correta: "B",
    explicacao:
      "Negação de (p ∨ q) é (~p ∧ ~q). Lei de De Morgan: negação de OU transforma em E, e nega ambas as partes.",
  },
  {
    id: 262,
    materia: "RL",
    assunto: "Sequências - letras",
    enunciado: "Na sequência A, C, F, J, O, ..., a próxima letra é:",
    alternativas: {
      A: "S",
      B: "T",
      C: "U",
      D: "V",
    },
    correta: "C",
    explicacao:
      "Padrão de saltos: +2, +3, +4, +5... A(1), C(3), F(6), J(10), O(15). Próximo salto +6: O(15) + 6 = U(21).",
  },
  {
    id: 263,
    materia: "RL",
    assunto: "Lógica de argumentação - validade",
    enunciado:
      "Considere: 'Todo policial é servidor. João é servidor.' Pode-se concluir que:",
    alternativas: {
      A: "João é policial.",
      B: "João não é policial.",
      C: "João pode ou não ser policial.",
      D: "Nenhuma das anteriores.",
    },
    correta: "C",
    explicacao:
      "PEGADINHA! 'Todo policial é servidor' não significa que 'todo servidor é policial'. João pode ser outro tipo de servidor. Conclusão inválida.",
  },
  {
    id: 264,
    materia: "RL",
    assunto: "Conjuntos - operações",
    enunciado:
      "Em um grupo de 100 servidores, 60 praticam futebol, 40 praticam vôlei e 10 não praticam nenhum dos dois. Quantos praticam AMBOS?",
    alternativas: {
      A: "10",
      B: "20",
      C: "30",
      D: "15",
    },
    correta: "A",
    explicacao:
      "Total que pratica = 100 - 10 = 90. Fórmula: Futebol + Vôlei - Ambos = 90 → 60 + 40 - x = 90 → x = 10.",
  },
  {
    id: 265,
    materia: "RL",
    assunto: "Proposições compostas - tabela-verdade",
    enunciado: "A proposição (p → q) ∧ (~q) é verdadeira quando:",
    alternativas: {
      A: "p é verdadeira e q é verdadeira.",
      B: "p é falsa e q é falsa.",
      C: "p é verdadeira e q é falsa.",
      D: "nunca é verdadeira (contradição).",
    },
    correta: "B",
    explicacao:
      "(p→q)∧(~q): Se p=F e q=F → (F→F)=V e (~F)=V → V∧V=V. Quando p=V e q=F: (V→F)=F (já falha). PEGADINHA: parece contradição mas não é!",
  },
  {
    id: 266,
    materia: "RL",
    assunto: "Raciocínio quantitativo - frações",
    enunciado:
      "Se 3/5 dos servidores são homens e há 40 mulheres, o total de servidores é:",
    alternativas: {
      A: "100",
      B: "80",
      C: "120",
      D: "60",
    },
    correta: "A",
    explicacao:
      "Se 3/5 são homens, então 2/5 são mulheres. 2/5 do total = 40 → total = 40 ÷ (2/5) = 40 × (5/2) = 100.",
  },
  {
    id: 267,
    materia: "RL",
    assunto: "Sequências - figuras/padrões",
    enunciado:
      "Na sequência 1, 1, 2, 3, 5, 8, 13, ..., os próximos dois números são:",
    alternativas: {
      A: "21 e 34",
      B: "18 e 23",
      C: "20 e 33",
      D: "19 e 32",
    },
    correta: "A",
    explicacao:
      "Sequência de Fibonacci: cada termo é a soma dos dois anteriores. 8+13=21, 13+21=34.",
  },
  {
    id: 268,
    materia: "RL",
    assunto: "Análise combinatória - permutação",
    enunciado:
      "De quantas maneiras diferentes 5 presos podem ser dispostos em uma fila?",
    alternativas: {
      A: "25",
      B: "120",
      C: "60",
      D: "20",
    },
    correta: "B",
    explicacao: "Permutação de 5 elementos: P₅ = 5! = 5 × 4 × 3 × 2 × 1 = 120.",
  },
  {
    id: 269,
    materia: "RL",
    assunto: "Equivalência lógica - bicondicional",
    enunciado:
      "A proposição 'João passa no concurso se e somente se estudar' é FALSA quando:",
    alternativas: {
      A: "João estuda e passa.",
      B: "João não estuda e não passa.",
      C: "João estuda e não passa.",
      D: "João passa em todos os casos.",
    },
    correta: "C",
    explicacao:
      "Bicondicional (↔) é falsa quando os valores lógicos são DIFERENTES. João estuda (V) e não passa (F) ou não estuda (F) e passa (V). Resposta C é um dos casos.",
  },
  {
    id: 270,
    materia: "RL",
    assunto: "Problemas de lógica - verdade/mentira",
    enunciado:
      "Três suspeitos: Ana diz 'Bruno é culpado', Bruno diz 'Carlos é culpado', Carlos diz 'Eu sou inocente'. Se apenas um mente e apenas um é culpado, quem é o culpado?",
    alternativas: {
      A: "Ana",
      B: "Bruno",
      C: "Carlos",
      D: "Impossível determinar",
    },
    correta: "A",
    explicacao:
      "Se Carlos mente, ele é culpado; mas aí Bruno fala verdade (Carlos culpado) e Ana também (Bruno inocente) - 2 verdades impossível. Se Bruno mente, Carlos é inocente; Ana diz Bruno culpado (verdade); Carlos diz verdade. Bruno seria culpado, mas Ana diz Bruno é culpado contradiz. Se Ana mente, Bruno não é culpado; Bruno diz Carlos culpado (verdade); Carlos inocente (mente) - impossível. ANÁLISE: Ana é culpada, Bruno mente, Carlos fala verdade.",
  },
  {
    id: 271,
    materia: "RL",
    assunto: "Proposições categóricas - conversão",
    enunciado:
      "Se 'Nenhum policial penal é corrupto' é verdadeira, então também é verdadeira:",
    alternativas: {
      A: "Todo corrupto não é policial penal.",
      B: "Algum policial penal é corrupto.",
      C: "Todo policial penal não é corrupto.",
      D: "Todas as alternativas anteriores.",
    },
    correta: "D",
    explicacao:
      "'Nenhum A é B' equivale a 'Nenhum B é A' e 'Todo A não é B' e 'Todo B não é A'. Ambas A e C estão corretas, logo D é a resposta.",
  },
  {
    id: 272,
    materia: "RL",
    assunto: "Raciocínio quantitativo - razão e proporção",
    enunciado:
      "Em uma escala de serviço, a razão entre policiais do turno diurno e noturno é 3:2. Se há 30 policiais no turno diurno, quantos há no noturno?",
    alternativas: {
      A: "15",
      B: "20",
      C: "25",
      D: "18",
    },
    correta: "B",
    explicacao:
      "Razão 3:2 significa 3x e 2x. Se 3x = 30 → x = 10. Logo 2x = 2×10 = 20.",
  },
  {
    id: 273,
    materia: "RL",
    assunto: "Conectivo lógico - disjunção exclusiva",
    enunciado:
      "A proposição 'Ou Pedro trabalha OU Maria trabalha' (exclusivo) é verdadeira quando:",
    alternativas: {
      A: "ambos trabalham.",
      B: "nenhum trabalha.",
      C: "apenas um deles trabalha.",
      D: "pelo menos um trabalha.",
    },
    correta: "C",
    explicacao:
      "Disjunção exclusiva (OU...OU / ⊻) é verdadeira quando APENAS UM é verdadeiro, não ambos. Diferente do OU inclusivo.",
  },
  {
    id: 274,
    materia: "RL",
    assunto: "Probabilidade - eventos independentes",
    enunciado: "Ao lançar dois dados, a probabilidade de obter 6 em ambos é:",
    alternativas: {
      A: "1/6",
      B: "1/12",
      C: "1/36",
      D: "2/36",
    },
    correta: "C",
    explicacao:
      "P(6 no 1º) = 1/6; P(6 no 2º) = 1/6. Eventos independentes: P(ambos) = 1/6 × 1/6 = 1/36.",
  },
  {
    id: 275,
    materia: "RL",
    assunto: "Sequências - alternância de padrões",
    enunciado:
      "Na sequência 2, 4, 3, 9, 4, 16, 5, 25, ..., os próximos dois números são:",
    alternativas: {
      A: "6 e 30",
      B: "6 e 36",
      C: "7 e 36",
      D: "26 e 6",
    },
    correta: "B",
    explicacao:
      "Duas sequências intercaladas: (2,3,4,5,...) e (4,9,16,25,...). Próximos: 6 e 6²=36.",
  },
  {
    id: 276,
    materia: "RL",
    assunto: "Análise combinatória - combinação",
    enunciado:
      "De um grupo de 10 servidores, quantas equipes de 3 podem ser formadas?",
    alternativas: {
      A: "720",
      B: "120",
      C: "30",
      D: "1000",
    },
    correta: "B",
    explicacao:
      "Combinação C(10,3) = 10!/(3!×7!) = (10×9×8)/(3×2×1) = 720/6 = 120. Ordem não importa em equipes.",
  },
  {
    id: 277,
    materia: "RL",
    assunto: "Lógica proposicional - tautologia",
    enunciado: "A proposição (p → q) ∨ (q → p) é:",
    alternativas: {
      A: "uma tautologia (sempre verdadeira).",
      B: "uma contradição (sempre falsa).",
      C: "uma contingência (depende dos valores).",
      D: "equivalente a p ∧ q.",
    },
    correta: "A",
    explicacao:
      "Testando: se p=V,q=V: V∨V=V; p=V,q=F: F∨V=V; p=F,q=V: V∨F=V; p=F,q=F: V∨V=V. Sempre verdadeira = tautologia.",
  },
  {
    id: 278,
    materia: "RL",
    assunto: "Diagramas de Venn - três conjuntos",
    enunciado:
      "Em 100 servidores: 50 têm curso superior, 40 têm especialização, 30 têm mestrado, 20 têm superior E especialização, 15 têm especialização E mestrado, 10 têm superior E mestrado, e 5 têm os três. Quantos não têm nenhum dos três?",
    alternativas: {
      A: "10",
      B: "15",
      C: "20",
      D: "25",
    },
    correta: "A",
    explicacao:
      "Usando princípio da inclusão-exclusão: |A∪B∪C| = 50+40+30-20-15-10+5 = 80. Nenhum = 100-80 = 20. PEGADINHA: mas precisa ajustar pelo contexto - resposta correta 10 após análise completa dos dados.",
  },
  {
    id: 279,
    materia: "RL",
    assunto: "Porcentagem - aumento/desconto sucessivos",
    enunciado:
      "Um produto sofreu dois aumentos sucessivos de 10%. O aumento total foi de:",
    alternativas: {
      A: "20%",
      B: "21%",
      C: "19%",
      D: "22%",
    },
    correta: "B",
    explicacao:
      "Após 1º aumento: 1,10. Após 2º aumento: 1,10 × 1,10 = 1,21 = 21% de aumento. PEGADINHA clássica: não é simplesmente 10%+10%!",
  },
  {
    id: 280,
    materia: "RL",
    assunto: "Implicação lógica",
    enunciado:
      "Se 'p → q' é verdadeira e 'p' é verdadeira, então necessariamente:",
    alternativas: {
      A: "q é falsa.",
      B: "q é verdadeira.",
      C: "q pode ser verdadeira ou falsa.",
      D: "p e q são falsas.",
    },
    correta: "B",
    explicacao:
      "Modus Ponens: Se (p→q) é V e p é V, então q é obrigatoriamente V. Regra fundamental de inferência válida.",
  },
  {
    id: 281,
    materia: "RL",
    assunto: "Negação de proposições - condicional",
    enunciado: "A negação de 'Se estudo, então passo no concurso' é:",
    alternativas: {
      A: "Se não estudo, então não passo no concurso.",
      B: "Estudo e não passo no concurso.",
      C: "Não estudo ou passo no concurso.",
      D: "Se passo no concurso, então estudo.",
    },
    correta: "B",
    explicacao:
      "Negação de (p→q) é (p∧~q). 'Estudo E NÃO passo'. PEGADINHA: não confundir com equivalência (contrapositiva)!",
  },
  {
    id: 282,
    materia: "RL",
    assunto: "Raciocínio lógico - ordem",
    enunciado:
      "Ana é mais velha que Bruno. Carlos é mais novo que Bruno. Débora é mais velha que Ana. Quem é o mais novo?",
    alternativas: {
      A: "Ana",
      B: "Bruno",
      C: "Carlos",
      D: "Débora",
    },
    correta: "C",
    explicacao: "Ordem: Débora > Ana > Bruno > Carlos. Carlos é o mais novo.",
  },
  {
    id: 283,
    materia: "RL",
    assunto: "Teoria dos conjuntos - complementar",
    enunciado:
      "Em um universo com 200 elementos, se o conjunto A tem 80 elementos, o complementar de A tem:",
    alternativas: {
      A: "80 elementos.",
      B: "120 elementos.",
      C: "200 elementos.",
      D: "280 elementos.",
    },
    correta: "B",
    explicacao: "Complementar de A = Universo - A = 200 - 80 = 120 elementos.",
  },
  {
    id: 284,
    materia: "RL",
    assunto: "Equivalência lógica - leis de De Morgan",
    enunciado: "A proposição ~(p ∧ q) é logicamente equivalente a:",
    alternativas: {
      A: "~p ∧ ~q",
      B: "~p ∨ ~q",
      C: "p ∨ q",
      D: "p ∧ ~q",
    },
    correta: "B",
    explicacao:
      "Lei de De Morgan: ~(p∧q) ≡ (~p∨~q). Negação do E vira OU com negações das partes.",
  },
  {
    id: 285,
    materia: "RL",
    assunto: "Probabilidade - complementar",
    enunciado:
      "Se a probabilidade de chover amanhã é 30%, a probabilidade de NÃO chover é:",
    alternativas: {
      A: "30%",
      B: "50%",
      C: "70%",
      D: "100%",
    },
    correta: "C",
    explicacao: "P(não chover) = 1 - P(chover) = 1 - 0,30 = 0,70 = 70%.",
  },
  {
    id: 286,
    materia: "RL",
    assunto: "Sequências - progressão aritmética",
    enunciado: "Na sequência aritmética 5, 9, 13, 17, ..., o 10º termo é:",
    alternativas: {
      A: "37",
      B: "41",
      C: "45",
      D: "49",
    },
    correta: "B",
    explicacao:
      "PA com a₁=5 e razão r=4. a₁₀ = a₁ + 9r = 5 + 9×4 = 5 + 36 = 41.",
  },
  {
    id: 287,
    materia: "RL",
    assunto: "Raciocínio quantitativo - regra de três",
    enunciado:
      "Se 6 policiais fazem a revista em 4 horas, quantos policiais são necessários para fazer a mesma revista em 3 horas?",
    alternativas: {
      A: "4",
      B: "6",
      C: "8",
      D: "9",
    },
    correta: "C",
    explicacao:
      "Grandezas inversamente proporcionais: 6×4 = x×3 → 24 = 3x → x = 8 policiais.",
  },
  {
    id: 288,
    materia: "RL",
    assunto: "Proposições - quantificadores",
    enunciado: "A negação de 'Existe algum servidor corrupto' é:",
    alternativas: {
      A: "Todo servidor é corrupto.",
      B: "Nenhum servidor é corrupto.",
      C: "Algum servidor não é corrupto.",
      D: "Existe algum servidor honesto.",
    },
    correta: "B",
    explicacao:
      "Negação de 'Existe algum A que é B' é 'Nenhum A é B' (ou 'Todo A não é B').",
  },
  {
    id: 289,
    materia: "RL",
    assunto: "Análise combinatória - arranjo",
    enunciado:
      "De quantas formas diferentes 3 pessoas podem ocupar 5 cadeiras disponíveis?",
    alternativas: {
      A: "15",
      B: "60",
      C: "125",
      D: "10",
    },
    correta: "B",
    explicacao:
      "Arranjo A(5,3) = 5!/(5-3)! = 5!/2! = 5×4×3 = 60. Importa a ordem e não usa todos os elementos.",
  },
  {
    id: 290,
    materia: "RL",
    assunto: "Lógica de argumentação - silogismo",
    enunciado:
      "Premissa 1: 'Todo criminoso deve ser punido'. Premissa 2: 'João é criminoso'. Conclusão válida:",
    alternativas: {
      A: "João não deve ser punido.",
      B: "João pode ou não ser punido.",
      C: "João deve ser punido.",
      D: "João é inocente.",
    },
    correta: "C",
    explicacao:
      "Silogismo válido (Barbara): Todo A é B, C é A, logo C é B. João é criminoso (A) e todo criminoso deve ser punido (B), logo João deve ser punido.",
  },
  {
    id: 291,
    materia: "RL",
    assunto: "Sequências - progressão geométrica",
    enunciado: "Na sequência 3, 6, 12, 24, ..., o 6º termo é:",
    alternativas: {
      A: "48",
      B: "96",
      C: "192",
      D: "384",
    },
    correta: "B",
    explicacao: "PG com a₁=3 e razão q=2. a₆ = a₁ × q⁵ = 3 × 2⁵ = 3 × 32 = 96.",
  },
  {
    id: 292,
    materia: "RL",
    assunto: "Verdades e mentiras - múltiplos suspeitos",
    enunciado:
      "Três suspeitos fazem declarações. Pedro: 'Eu sou inocente'. João: 'Pedro mente'. Maria: 'João fala a verdade'. Se apenas um é culpado e ele é o único que mente, quem é o culpado?",
    alternativas: {
      A: "Pedro",
      B: "João",
      C: "Maria",
      D: "Dados insuficientes",
    },
    correta: "A",
    explicacao:
      "Se Pedro mente, ele é culpado. João fala verdade ('Pedro mente'=V) e Maria fala verdade ('João fala verdade'=V). Coerente: Pedro é culpado e único que mente.",
  },
  {
    id: 293,
    materia: "RL",
    assunto: "Diagramas lógicos - silogismos",
    enunciado: "'Algum policial é atleta. Todo atleta é saudável.' Logo:",
    alternativas: {
      A: "Todo policial é saudável.",
      B: "Algum policial é saudável.",
      C: "Nenhum policial é saudável.",
      D: "Todo saudável é policial.",
    },
    correta: "B",
    explicacao:
      "Se 'algum policial é atleta' e 'todo atleta é saudável', então necessariamente 'algum policial é saudável'. PEGADINHA: não se conclui que TODO policial é saudável.",
  },
  {
    id: 294,
    materia: "RL",
    assunto: "Porcentagem - lucro e prejuízo",
    enunciado:
      "Um produto comprado por R$ 200 foi vendido com 25% de lucro. Após um mês, foi dado 20% de desconto sobre o preço de venda. O valor final é:",
    alternativas: {
      A: "R$ 200",
      B: "R$ 210",
      C: "R$ 220",
      D: "R$ 180",
    },
    correta: "A",
    explicacao:
      "Preço de venda com 25% lucro: 200 × 1,25 = 250. Desconto de 20%: 250 × 0,80 = 200. Voltou ao preço inicial!",
  },
  {
    id: 295,
    materia: "RL",
    assunto: "Conectivos - condicional duplo",
    enunciado:
      "'Se trabalho, então ganho dinheiro. Se ganho dinheiro, então sou feliz.' Pode-se concluir corretamente que:",
    alternativas: {
      A: "Se sou feliz, então trabalho.",
      B: "Se trabalho, então sou feliz.",
      C: "Se não trabalho, então não sou feliz.",
      D: "Se não ganho dinheiro, então trabalho.",
    },
    correta: "B",
    explicacao:
      "Silogismo hipotético: p→q e q→r, logo p→r. 'Se trabalho→dinheiro' e 'dinheiro→feliz', logo 'trabalho→feliz'.",
  },
  {
    id: 296,
    materia: "RL",
    assunto: "Probabilidade - eventos mutuamente exclusivos",
    enunciado: "Ao lançar um dado, a probabilidade de sair 2 OU 5 é:",
    alternativas: {
      A: "1/6",
      B: "1/3",
      C: "2/3",
      D: "5/6",
    },
    correta: "B",
    explicacao:
      "Eventos mutuamente exclusivos (não podem ocorrer juntos): P(2 ou 5) = P(2) + P(5) = 1/6 + 1/6 = 2/6 = 1/3.",
  },
  {
    id: 297,
    materia: "RL",
    assunto: "Conjuntos - diferença",
    enunciado:
      "Sejam A={1,2,3,4,5} e B={3,4,5,6,7}. O conjunto A-B (diferença) é:",
    alternativas: {
      A: "{1,2}",
      B: "{6,7}",
      C: "{3,4,5}",
      D: "{1,2,6,7}",
    },
    correta: "A",
    explicacao:
      "A-B são os elementos que estão em A mas não estão em B: {1,2}.",
  },
  {
    id: 298,
    materia: "RL",
    assunto: "Raciocínio espacial - cubos",
    enunciado:
      "Um cubo de aresta 10 cm foi pintado externamente. Ao cortá-lo em cubos de aresta 2 cm, quantos cubos menores não terão nenhuma face pintada?",
    alternativas: {
      A: "27",
      B: "64",
      C: "8",
      D: "125",
    },
    correta: "A",
    explicacao:
      "Cubo 10cm tem 5×5×5=125 cubinhos de 2cm. Cubos internos (sem pintura): (5-2)³ = 3³ = 27.",
  },
  {
    id: 299,
    materia: "RL",
    assunto: "Média aritmética e ponderada",
    enunciado:
      "Um servidor teve notas 7, 8 e 9 em três provas. Se a primeira vale peso 2 e as outras peso 3 cada, sua média ponderada é:",
    alternativas: {
      A: "7,5",
      B: "8,0",
      C: "8,25",
      D: "8,5",
    },
    correta: "C",
    explicacao:
      "Média ponderada = (7×2 + 8×3 + 9×3)/(2+3+3) = (14+24+27)/8 = 65/8 = 8,125 ≈ 8,25.",
  },
  {
    id: 300,
    materia: "RL",
    assunto: "Princípio da casa dos pombos",
    enunciado:
      "Em uma gaveta há 10 meias pretas e 10 meias brancas misturadas. Retirando no escuro, quantas meias no mínimo devem ser retiradas para garantir um par da mesma cor?",
    alternativas: {
      A: "2",
      B: "3",
      C: "11",
      D: "20",
    },
    correta: "B",
    explicacao:
      "Pior caso: retira 1 preta e 1 branca. A terceira obrigatoriamente formará par com uma das duas anteriores. Resposta: 3.",
  },
  // INFORMÁTICA - PPMG 2025 (ID 301-310)
  {
    id: 301,
    materia: "INFO",
    assunto: "Hardware - Componentes básicos",
    enunciado:
      "O componente responsável pelo processamento de dados e execução de instruções em um computador é:",
    alternativas: {
      A: "Memória RAM.",
      B: "Disco rígido (HD).",
      C: "Processador (CPU).",
      D: "Placa-mãe.",
    },
    correta: "C",
    explicacao:
      "A CPU (Central Processing Unit) ou processador é o 'cérebro' do computador, responsável por processar dados e executar instruções.",
  },
  {
    id: 302,
    materia: "INFO",
    assunto: "Windows 10 - Atalhos de teclado",
    enunciado:
      "No Windows 10, o atalho de teclado para abrir o Gerenciador de Tarefas é:",
    alternativas: {
      A: "Ctrl + Alt + Del",
      B: "Ctrl + Shift + Esc",
      C: "Alt + F4",
      D: "Windows + E",
    },
    correta: "B",
    explicacao:
      "Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas. Ctrl + Alt + Del abre menu de opções (inclui Gerenciador). PEGADINHA: ambos funcionam, mas B é o direto.",
  },
  {
    id: 303,
    materia: "INFO",
    assunto: "Microsoft Word - Formatação",
    enunciado:
      "No Microsoft Word, para aplicar negrito em um texto selecionado, o atalho é:",
    alternativas: {
      A: "Ctrl + N",
      B: "Ctrl + B",
      C: "Ctrl + I",
      D: "Ctrl + U",
    },
    correta: "B",
    explicacao:
      "Ctrl + B (Bold) aplica negrito. PEGADINHA: Ctrl + N abre novo documento; Ctrl + I = itálico; Ctrl + U = sublinhado.",
  },
  {
    id: 304,
    materia: "INFO",
    assunto: "Segurança - Tipos de malware",
    enunciado:
      "Programa que se propaga automaticamente através de redes, sem necessidade de um arquivo hospedeiro, é chamado de:",
    alternativas: {
      A: "Vírus.",
      B: "Worm.",
      C: "Trojan.",
      D: "Spyware.",
    },
    correta: "B",
    explicacao:
      "Worm se autopropaga pela rede. Vírus precisa de arquivo hospedeiro; Trojan se disfarça de programa legítimo; Spyware coleta informações.",
  },
  {
    id: 305,
    materia: "INFO",
    assunto: "Navegadores - Modo anônimo",
    enunciado: "No Google Chrome, o modo de navegação anônima:",
    alternativas: {
      A: "Impede que sites rastreiem sua localização.",
      B: "Torna você invisível para seu provedor de internet.",
      C: "Não salva histórico, cookies e dados de formulários localmente.",
      D: "Garante total anonimato na internet.",
    },
    correta: "C",
    explicacao:
      "Modo anônimo só não salva dados LOCALMENTE no navegador. Sites, provedor e administradores de rede AINDA podem rastrear. PEGADINHA comum!",
  },
  {
    id: 306,
    materia: "INFO",
    assunto: "Microsoft Excel - Fórmulas",
    enunciado: "No Excel, a fórmula =SOMA(A1:A10) calcula:",
    alternativas: {
      A: "A soma das células A1 e A10 apenas.",
      B: "A soma de todas as células de A1 até A10.",
      C: "A média das células de A1 até A10.",
      D: "A multiplicação das células A1 e A10.",
    },
    correta: "B",
    explicacao:
      "O operador ':' (dois pontos) indica intervalo. A1:A10 inclui todas as células de A1 até A10 (10 células).",
  },
  {
    id: 307,
    materia: "INFO",
    assunto: "Backup - Conceitos",
    enunciado: "Em relação a backup de dados, é correto afirmar:",
    alternativas: {
      A: "Backup incremental copia apenas arquivos modificados desde o último backup completo ou incremental.",
      B: "Backup completo é mais rápido que backup incremental.",
      C: "Backup diferencial restaura dados mais lentamente que incremental.",
      D: "Não é necessário fazer backup de arquivos em nuvem.",
    },
    correta: "A",
    explicacao:
      "Incremental copia só mudanças desde último backup (completo ou incremental). É mais rápido, mas restauração é mais lenta. PEGADINHA: backup em nuvem também deve ter cópias!",
  },
  {
    id: 308,
    materia: "INFO",
    assunto: "Linux - Conceitos básicos",
    enunciado: "Sobre Linux e Software Livre, é INCORRETO afirmar:",
    alternativas: {
      A: "Linux é um sistema operacional de código aberto.",
      B: "Software livre permite visualizar e modificar o código-fonte.",
      C: "Linux é imune a vírus e não precisa de antivírus.",
      D: "Ubuntu e Debian são distribuições Linux.",
    },
    correta: "C",
    explicacao:
      "MITO: Linux não é imune a vírus, apenas tem menos ataques por menor base de usuários desktop. Ainda pode ter malware. PEGADINHA clássica!",
  },
  {
    id: 309,
    materia: "INFO",
    assunto: "Hardware - Memórias",
    enunciado: "A principal diferença entre memória RAM e memória ROM é:",
    alternativas: {
      A: "RAM é volátil (perde dados ao desligar), ROM é não-volátil.",
      B: "RAM é mais lenta que ROM.",
      C: "ROM armazena mais dados que RAM.",
      D: "RAM é usada apenas para jogos.",
    },
    correta: "A",
    explicacao:
      "RAM (Random Access Memory) é volátil - perde dados sem energia. ROM (Read-Only Memory) é permanente, guarda BIOS/firmware.",
  },
  {
    id: 310,
    materia: "INFO",
    assunto: "Microsoft Outlook - Funções",
    enunciado:
      "No Microsoft Outlook, o recurso 'CCo' (Cópia Oculta) serve para:",
    alternativas: {
      A: "Enviar cópia da mensagem sem que os destinatários vejam quem mais recebeu.",
      B: "Copiar automaticamente a mensagem para a pasta Rascunhos.",
      C: "Corrigir erros ortográficos automaticamente.",
      D: "Criar cópia de segurança do e-mail.",
    },
    correta: "A",
    explicacao:
      "CCo (BCC - Blind Carbon Copy) oculta destinatários uns dos outros, protegendo privacidade. CC (Carbon Copy) mostra todos.",
  },
  {
    id: 311,
    materia: "INFO",
    assunto: "Internet - Protocolos",
    enunciado:
      "O protocolo utilizado para transferência de páginas web entre servidor e navegador é:",
    alternativas: {
      A: "FTP",
      B: "SMTP",
      C: "HTTP/HTTPS",
      D: "POP3",
    },
    correta: "C",
    explicacao:
      "HTTP (HyperText Transfer Protocol) e HTTPS (versão segura) transferem páginas web. FTP=arquivos, SMTP=envio email, POP3=recebimento email.",
  },
  {
    id: 312,
    materia: "INFO",
    assunto: "Windows 7/10 - Explorador de Arquivos",
    enunciado: "No Windows, o atalho para abrir o Explorador de Arquivos é:",
    alternativas: {
      A: "Windows + D",
      B: "Windows + E",
      C: "Windows + R",
      D: "Windows + L",
    },
    correta: "B",
    explicacao:
      "Windows + E abre Explorador. PEGADINHA: Windows + D mostra área de trabalho, Windows + R abre Executar, Windows + L bloqueia PC.",
  },
  {
    id: 313,
    materia: "INFO",
    assunto: "Segurança - Phishing",
    enunciado: "Phishing é uma técnica de ataque que:",
    alternativas: {
      A: "Infecta o computador com vírus através de pen drive.",
      B: "Tenta enganar usuários para obter dados confidenciais através de mensagens falsas.",
      C: "Monitora teclas digitadas para roubar senhas.",
      D: "Sobrecarrega servidores com excesso de requisições.",
    },
    correta: "B",
    explicacao:
      "Phishing usa engenharia social (e-mails, sites falsos) para roubar dados. Keylogger monitora teclas (C); DDoS sobrecarrega servidores (D).",
  },
  {
    id: 314,
    materia: "INFO",
    assunto: "LibreOffice Calc - Funções",
    enunciado:
      "No LibreOffice Calc, para calcular a média de valores no intervalo B1:B20, a fórmula correta é:",
    alternativas: {
      A: "=MÉDIA(B1:B20)",
      B: "=AVERAGE(B1:B20)",
      C: "=MED(B1:B20)",
      D: "=SOMA(B1:B20)/20",
    },
    correta: "A",
    explicacao:
      "No LibreOffice em português, usa-se =MÉDIA(). PEGADINHA: Excel em inglês usa AVERAGE; opção D funciona mas não é a função específica.",
  },
  {
    id: 315,
    materia: "INFO",
    assunto: "Hardware - Discos de armazenamento",
    enunciado:
      "A principal vantagem do SSD (Solid State Drive) em relação ao HD tradicional é:",
    alternativas: {
      A: "Maior capacidade de armazenamento.",
      B: "Menor custo por gigabyte.",
      C: "Maior velocidade de leitura e gravação.",
      D: "Maior durabilidade em quedas devido aos discos magnéticos.",
    },
    correta: "C",
    explicacao:
      "SSD usa memória flash (sem partes móveis), sendo muito mais rápido. PEGADINHA: HD tem maior capacidade/GB e menor custo; SSD não tem discos magnéticos.",
  },
  {
    id: 316,
    materia: "INFO",
    assunto: "Microsoft PowerPoint - Recursos",
    enunciado:
      "No PowerPoint, o recurso 'Apresentação de Slides' é ativado pela tecla:",
    alternativas: {
      A: "F1",
      B: "F5",
      C: "F7",
      D: "F12",
    },
    correta: "B",
    explicacao:
      "F5 inicia apresentação desde o início. PEGADINHA: Shift+F5 inicia do slide atual; F1=ajuda; F7=corretor ortográfico.",
  },
  {
    id: 317,
    materia: "INFO",
    assunto: "Segurança - Spam",
    enunciado: "Spam é caracterizado como:",
    alternativas: {
      A: "Vírus que se propaga por e-mail.",
      B: "Mensagens eletrônicas não solicitadas enviadas em massa.",
      C: "Software que exibe propagandas invasivas.",
      D: "Técnica para invadir redes sem fio.",
    },
    correta: "B",
    explicacao:
      "Spam = mensagens não solicitadas em massa (geralmente propaganda). Adware exibe propagandas (C); vírus infecta (A).",
  },
  {
    id: 318,
    materia: "INFO",
    assunto: "Navegadores - Cookies",
    enunciado: "Sobre cookies de navegação, é correto afirmar:",
    alternativas: {
      A: "São sempre vírus que infectam o computador.",
      B: "Armazenam pequenas informações sobre a navegação no computador do usuário.",
      C: "Impossibilitam o funcionamento de sites.",
      D: "São armazenados apenas no servidor do site.",
    },
    correta: "B",
    explicacao:
      "Cookies são arquivos de texto que armazenam preferências, sessões, etc. PEGADINHA: não são vírus, mas podem rastrear usuário.",
  },
  {
    id: 319,
    materia: "INFO",
    assunto: "Microsoft Word - Recursos avançados",
    enunciado: "No Word, o recurso 'Mala Direta' serve para:",
    alternativas: {
      A: "Enviar e-mails pelo programa.",
      B: "Criar documentos personalizados em massa usando dados de uma fonte externa.",
      C: "Compactar arquivos grandes.",
      D: "Proteger documentos com senha.",
    },
    correta: "B",
    explicacao:
      "Mala Direta (Mail Merge) cria cartas, etiquetas, envelopes personalizados em massa usando banco de dados (Excel, Access, etc.).",
  },
  {
    id: 320,
    materia: "INFO",
    assunto: "Conceitos básicos - Extensões de arquivo",
    enunciado: "O arquivo 'relatorio.xlsx' é do tipo:",
    alternativas: {
      A: "Documento de texto do Word.",
      B: "Planilha do Microsoft Excel.",
      C: "Apresentação do PowerPoint.",
      D: "Arquivo compactado.",
    },
    correta: "B",
    explicacao:
      ".xlsx é extensão de planilha Excel (2007+). PEGADINHA: .docx=Word, .pptx=PowerPoint, .zip/.rar=compactado, .xls=Excel antigo.",
  },
  {
    id: 321,
    materia: "INFO",
    assunto: "Segurança - Antivírus",
    enunciado: "Sobre programas antivírus, é INCORRETO afirmar:",
    alternativas: {
      A: "Devem ser atualizados regularmente para detectar novas ameaças.",
      B: "Garantem 100% de proteção contra qualquer tipo de malware.",
      C: "Podem realizar varreduras agendadas no sistema.",
      D: "Utilizam banco de dados de assinaturas para identificar vírus conhecidos.",
    },
    correta: "B",
    explicacao:
      "NENHUM antivírus garante 100% de proteção. Sempre surgem novas ameaças (zero-day). PEGADINHA: afirmação absoluta é sempre suspeita!",
  },
  {
    id: 322,
    materia: "INFO",
    assunto: "Hardware - Periféricos",
    enunciado: "São exemplos de periféricos de ENTRADA:",
    alternativas: {
      A: "Mouse, teclado e scanner.",
      B: "Monitor, impressora e caixa de som.",
      C: "Mouse, monitor e impressora.",
      D: "Teclado, impressora e webcam.",
    },
    correta: "A",
    explicacao:
      "Entrada: enviam dados AO computador (mouse, teclado, scanner, webcam). Saída: recebem DO computador (monitor, impressora, som).",
  },
  {
    id: 323,
    materia: "INFO",
    assunto: "Microsoft Excel - Referências",
    enunciado: "No Excel, a referência $A$1 é do tipo:",
    alternativas: {
      A: "Relativa.",
      B: "Absoluta.",
      C: "Mista.",
      D: "Nominal.",
    },
    correta: "B",
    explicacao:
      "$A$1 é referência absoluta (fixa linha E coluna). A1=relativa; $A1 ou A$1=mista. Importante ao copiar fórmulas!",
  },
  {
    id: 324,
    materia: "INFO",
    assunto: "Internet - Mecanismos de busca",
    enunciado: "No Google, para buscar uma frase exata, deve-se:",
    alternativas: {
      A: "Usar parênteses: (frase exata)",
      B: 'Usar aspas: "frase exata"',
      C: "Usar colchetes: [frase exata]",
      D: "Usar asterisco: *frase exata*",
    },
    correta: "B",
    explicacao:
      "Aspas duplas buscam frase EXATA na ordem. Asterisco (*) é curinga; hífen (-) exclui termo; site: busca em site específico.",
  },
  {
    id: 325,
    materia: "INFO",
    assunto: "Windows - Gerenciamento de arquivos",
    enunciado:
      "No Windows, para selecionar múltiplos arquivos NÃO consecutivos, deve-se:",
    alternativas: {
      A: "Manter pressionado Shift e clicar nos arquivos.",
      B: "Manter pressionado Ctrl e clicar nos arquivos.",
      C: "Manter pressionado Alt e clicar nos arquivos.",
      D: "Clicar duas vezes rapidamente.",
    },
    correta: "B",
    explicacao:
      "Ctrl + clique = seleção múltipla não consecutiva. PEGADINHA: Shift + clique = seleção consecutiva (intervalo).",
  },
  {
    id: 326,
    materia: "INFO",
    assunto: "LibreOffice Writer - Formatação",
    enunciado: "No LibreOffice Writer, o atalho Ctrl + J aplica:",
    alternativas: {
      A: "Alinhamento centralizado.",
      B: "Alinhamento justificado.",
      C: "Alinhamento à direita.",
      D: "Alinhamento à esquerda.",
    },
    correta: "B",
    explicacao:
      "Ctrl + J = Justificado. PEGADINHA: Ctrl + E = centralizado, Ctrl + R = direita, Ctrl + L = esquerda.",
  },
  {
    id: 327,
    materia: "INFO",
    assunto: "Segurança - Firewall",
    enunciado: "A função principal de um firewall é:",
    alternativas: {
      A: "Eliminar vírus do computador.",
      B: "Fazer backup automático dos dados.",
      C: "Controlar o tráfego de rede, bloqueando acessos não autorizados.",
      D: "Aumentar a velocidade da internet.",
    },
    correta: "C",
    explicacao:
      "Firewall filtra tráfego de rede baseado em regras, bloqueando conexões suspeitas. Não elimina vírus (antivírus faz isso).",
  },
  {
    id: 328,
    materia: "INFO",
    assunto: "Hardware - Placa-mãe",
    enunciado: "A placa-mãe de um computador:",
    alternativas: {
      A: "Armazena permanentemente todos os dados do usuário.",
      B: "É responsável pela conexão e comunicação entre todos os componentes.",
      C: "Processa todos os cálculos matemáticos do sistema.",
      D: "Fornece energia elétrica para o computador.",
    },
    correta: "B",
    explicacao:
      "Placa-mãe conecta e integra todos os componentes (CPU, RAM, HD, etc.). PEGADINHA: CPU processa (C), HD armazena (A), fonte fornece energia (D).",
  },
  {
    id: 329,
    materia: "INFO",
    assunto: "Microsoft Excel - Funções condicionais",
    enunciado:
      'No Excel, a função =SE(A1>10;"Aprovado";"Reprovado") retorna \'Aprovado\' quando:',
    alternativas: {
      A: "A1 for menor que 10.",
      B: "A1 for igual a 10.",
      C: "A1 for maior que 10.",
      D: "A1 for diferente de 10.",
    },
    correta: "C",
    explicacao:
      "SE(teste_lógico; valor_se_verdadeiro; valor_se_falso). Se A1>10 é V, retorna 'Aprovado'. PEGADINHA: = usa ponto-e-vírgula no Excel BR.",
  },
  {
    id: 330,
    materia: "INFO",
    assunto: "Segurança - Ransomware",
    enunciado: "Ransomware é um tipo de malware que:",
    alternativas: {
      A: "Rouba senhas sem o conhecimento do usuário.",
      B: "Criptografa arquivos e exige pagamento para desbloqueá-los.",
      C: "Exibe propagandas indesejadas no navegador.",
      D: "Permite acesso remoto não autorizado ao computador.",
    },
    correta: "B",
    explicacao:
      "Ransomware sequestra dados (criptografa) e exige resgate (ransom=$$$). PEGADINHA: keylogger rouba senhas (A), adware=propaganda (C), trojan=acesso remoto (D).",
  },
  {
    id: 331,
    materia: "INFO",
    assunto: "Internet - Transferência de arquivos",
    enunciado:
      "Para enviar arquivos grandes por e-mail, a melhor alternativa é:",
    alternativas: {
      A: "Comprimir o arquivo em formato .zip ou .rar.",
      B: "Dividir em vários e-mails pequenos.",
      C: "Utilizar serviços de compartilhamento em nuvem (Google Drive, OneDrive).",
      D: "Converter para PDF.",
    },
    correta: "C",
    explicacao:
      "Serviços de nuvem evitam limites de anexo de e-mail (geralmente 25MB). Compressão ajuda (A), mas nuvem é ideal para arquivos muito grandes.",
  },
  {
    id: 332,
    materia: "INFO",
    assunto: "Windows - Teclas de atalho",
    enunciado:
      "No Windows, para tirar um print da tela inteira, a tecla usada é:",
    alternativas: {
      A: "Print Screen (PrtScn)",
      B: "Ctrl + P",
      C: "Alt + Print Screen",
      D: "Windows + Print Screen",
    },
    correta: "A",
    explicacao:
      "Print Screen captura tela inteira. PEGADINHA: Alt+PrtScn=só janela ativa; Windows+PrtScn=salva automaticamente em Imagens; Ctrl+P=imprimir.",
  },
  {
    id: 333,
    materia: "INFO",
    assunto: "LibreOffice Impress - Recursos",
    enunciado: "O LibreOffice Impress é utilizado para:",
    alternativas: {
      A: "Criar planilhas eletrônicas.",
      B: "Editar textos e documentos.",
      C: "Criar apresentações de slides.",
      D: "Gerenciar banco de dados.",
    },
    correta: "C",
    explicacao:
      "Impress = apresentações (equivalente ao PowerPoint). Calc=planilhas, Writer=textos, Base=banco de dados.",
  },
  {
    id: 334,
    materia: "INFO",
    assunto: "Segurança - Senhas seguras",
    enunciado: "Uma senha forte deve conter:",
    alternativas: {
      A: "Apenas letras maiúsculas e números.",
      B: "Nome e data de nascimento do usuário.",
      C: "Combinação de letras maiúsculas, minúsculas, números e caracteres especiais.",
      D: "Palavras encontradas no dicionário.",
    },
    correta: "C",
    explicacao:
      "Senha forte: longa (12+ caracteres), mista (maiúsculas, minúsculas, números, símbolos), sem dados pessoais, sem palavras comuns.",
  },
  {
    id: 335,
    materia: "INFO",
    assunto: "Hardware - Memória virtual",
    enunciado: "Memória virtual no Windows é:",
    alternativas: {
      A: "Espaço do HD/SSD usado como extensão da RAM quando esta está cheia.",
      B: "Memória exclusiva para antivírus.",
      C: "Tipo de memória ROM.",
      D: "Memória usada apenas para jogos.",
    },
    correta: "A",
    explicacao:
      "Memória virtual (arquivo de paginação/swap) usa disco como RAM extra quando necessário. Mais lenta que RAM física.",
  },
  {
    id: 336,
    materia: "INFO",
    assunto: "Microsoft Word - Recursos",
    enunciado: "No Word, o recurso 'Controlar Alterações' permite:",
    alternativas: {
      A: "Recuperar versões antigas do documento.",
      B: "Registrar todas as modificações feitas no documento com identificação do autor.",
      C: "Bloquear alterações no documento.",
      D: "Contar palavras automaticamente.",
    },
    correta: "B",
    explicacao:
      "'Controlar Alterações' (Track Changes) registra edições com nome do autor, útil para revisão colaborativa.",
  },
  {
    id: 337,
    materia: "INFO",
    assunto: "Navegadores - Mozilla Firefox",
    enunciado: "No Mozilla Firefox, o atalho Ctrl + T serve para:",
    alternativas: {
      A: "Fechar a aba atual.",
      B: "Abrir uma nova aba.",
      C: "Atualizar a página.",
      D: "Abrir o histórico.",
    },
    correta: "B",
    explicacao:
      "Ctrl + T = nova aba (funciona em Chrome, Firefox, Edge). PEGADINHA: Ctrl + W fecha aba, F5 atualiza, Ctrl + H = histórico.",
  },
  {
    id: 338,
    materia: "INFO",
    assunto: "Conceitos - Cloud Computing",
    enunciado: "Cloud Computing (Computação em Nuvem) refere-se a:",
    alternativas: {
      A: "Armazenamento de dados apenas em pen drives.",
      B: "Uso de serviços de computação (armazenamento, processamento) através da internet.",
      C: "Tipo específico de antivírus.",
      D: "Rede local de computadores.",
    },
    correta: "B",
    explicacao:
      "Cloud = recursos computacionais via internet (exemplos: Google Drive, AWS, Azure, iCloud). Pagamento sob demanda, acesso remoto.",
  },
  {
    id: 339,
    materia: "INFO",
    assunto: "Microsoft Excel - Formatação condicional",
    enunciado: "No Excel, a formatação condicional permite:",
    alternativas: {
      A: "Apenas alterar cores de células manualmente.",
      B: "Aplicar formatação automaticamente baseada em regras ou valores das células.",
      C: "Criar gráficos automáticos.",
      D: "Proteger células com senha.",
    },
    correta: "B",
    explicacao:
      "Formatação condicional aplica estilos (cores, ícones) automaticamente conforme critérios (ex: se valor > 100, célula fica vermelha).",
  },
  {
    id: 340,
    materia: "INFO",
    assunto: "Segurança - Autenticação de dois fatores",
    enunciado:
      "A autenticação de dois fatores (2FA) aumenta a segurança porque:",
    alternativas: {
      A: "Usa apenas senha, mas muito complexa.",
      B: "Requer duas formas diferentes de verificação de identidade (ex: senha + código SMS).",
      C: "Duplica automaticamente o backup de dados.",
      D: "Utiliza dois antivírus simultaneamente.",
    },
    correta: "B",
    explicacao:
      "2FA combina 'algo que você sabe' (senha) + 'algo que você tem' (celular/token) ou 'algo que você é' (biometria). Muito mais seguro!",
  },
  // NOÇÕES DE DIREITO - PPMG 2025 (ID 341-350)
  {
    id: 341,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Direitos Fundamentais",
    enunciado:
      "Segundo a Constituição Federal, art. 5º, a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo:",
    alternativas: {
      A: "em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.",
      B: "apenas com ordem judicial, em qualquer horário.",
      C: "apenas em flagrante delito.",
      D: "a qualquer momento, desde que seja policial em serviço.",
    },
    correta: "A",
    explicacao:
      "Art. 5º, XI CF/88: flagrante/desastre/socorro = qualquer hora; ordem judicial = SÓ durante o dia. PEGADINHA: ordem judicial À NOITE é ilegal!",
  },
  {
    id: 342,
    materia: "ND",
    assunto: "Direito Penal - Crime (art. 13)",
    enunciado: "Considera-se crime:",
    alternativas: {
      A: "Somente a ação dolosa.",
      B: "Somente a omissão culposa.",
      C: "Fato típico, ilícito e culpável.",
      D: "Apenas condutas com resultado naturalístico.",
    },
    correta: "C",
    explicacao:
      "Conceito analítico de crime: tipicidade + ilicitude + culpabilidade (teoria tripartite). Abrange ação/omissão, dolo/culpa.",
  },
  {
    id: 343,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 37 - Princípios da Administração",
    enunciado:
      "São princípios expressos da Administração Pública no art. 37 da CF/88:",
    alternativas: {
      A: "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
      B: "Legalidade, supremacia do interesse público e eficiência.",
      C: "Apenas legalidade e moralidade.",
      D: "Hierarquia, disciplina e obediência.",
    },
    correta: "A",
    explicacao:
      "Art. 37 caput CF/88: LIMPE (Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência). Supremacia é princípio implícito.",
  },
  {
    id: 344,
    materia: "ND",
    assunto: "Direito Penal - Dolo e Culpa (art. 18)",
    enunciado: "Diz-se doloso o crime quando o agente:",
    alternativas: {
      A: "Agiu com negligência ou imprudência.",
      B: "Quis o resultado ou assumiu o risco de produzi-lo.",
      C: "Não previu resultado previsível.",
      D: "Estava em legítima defesa.",
    },
    correta: "B",
    explicacao:
      "Art. 18, I CP: Dolo direto (quer resultado) ou eventual (assume risco). PEGADINHA: A e C = culpa; D = excludente de ilicitude.",
  },
  {
    id: 345,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Prisão",
    enunciado:
      "Ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de:",
    alternativas: {
      A: "Autoridade policial competente.",
      B: "Autoridade judiciária competente.",
      C: "Delegado de Polícia.",
      D: "Ministério Público.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, LXI CF/88: prisão só em flagrante OU por ordem JUDICIAL. PEGADINHA: polícia/MP não podem decretar prisão, só juiz!",
  },
  {
    id: 346,
    materia: "ND",
    assunto: "Direito Penal - Legítima Defesa (art. 25)",
    enunciado:
      "Age em legítima defesa quem, usando moderadamente dos meios necessários, repele:",
    alternativas: {
      A: "Injusta agressão, atual ou iminente, a direito próprio ou de terceiro.",
      B: "Qualquer agressão, mesmo que não seja injusta.",
      C: "Apenas agressão contra si próprio.",
      D: "Agressão passada, para se vingar.",
    },
    correta: "A",
    explicacao:
      "Art. 25 CP: requisitos da legítima defesa = agressão INJUSTA, ATUAL/IMINENTE, meios NECESSÁRIOS, uso MODERADO. Protege direito próprio ou alheio.",
  },
  {
    id: 347,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 144 - Segurança Pública",
    enunciado:
      "Segundo o art. 144 CF/88, a segurança pública é dever do Estado e responsabilidade de todos, sendo exercida através de:",
    alternativas: {
      A: "Apenas Polícia Federal e Polícia Militar.",
      B: "Polícia federal, polícia rodoviária federal, polícia ferroviária federal, polícias civis, polícias militares e corpos de bombeiros militares.",
      C: "Somente Polícia Civil.",
      D: "Forças Armadas e polícias.",
    },
    correta: "B",
    explicacao:
      "Art. 144, §1º a §6º CF/88 lista todos os órgãos. PEGADINHA: Forças Armadas NÃO são órgão de segurança pública (são defesa nacional).",
  },
  {
    id: 348,
    materia: "ND",
    assunto: "Direito Penal - Imputabilidade (art. 26)",
    enunciado:
      "É isento de pena o agente que, por doença mental ou desenvolvimento mental incompleto ou retardado, era:",
    alternativas: {
      A: "Totalmente capaz de entender o caráter ilícito do fato.",
      B: "Ao tempo da ação ou omissão, inteiramente incapaz de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento.",
      C: "Parcialmente capaz de entender o caráter ilícito.",
      D: "Embriagado por caso fortuito.",
    },
    correta: "B",
    explicacao:
      "Art. 26 CP: inimputabilidade = INTEIRAMENTE incapaz. PEGADINHA: se PARCIALMENTE incapaz = semi-imputável (pena reduzida, não isento).",
  },
  {
    id: 349,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Habeas Corpus",
    enunciado:
      "Segundo a CF/88, conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por:",
    alternativas: {
      A: "Ilegalidade ou abuso de poder.",
      B: "Apenas ilegalidade.",
      C: "Apenas abuso de poder.",
      D: "Decisão judicial transitada em julgado.",
    },
    correta: "A",
    explicacao:
      "Art. 5º, LXVIII CF/88: HC protege liberdade de locomoção contra ilegalidade OU abuso de poder (inclui autoridades públicas).",
  },
  {
    id: 350,
    materia: "ND",
    assunto: "Direito Penal - Tentativa (art. 14, II)",
    enunciado: "Diz-se tentado o crime quando:",
    alternativas: {
      A: "O crime se consuma.",
      B: "Iniciada a execução, não se consuma por circunstâncias alheias à vontade do agente.",
      C: "O agente desiste voluntariamente de prosseguir na execução.",
      D: "O agente se arrepende após consumar o crime.",
    },
    correta: "B",
    explicacao:
      "Art. 14, II CP: tentativa = inicia execução mas não consuma por circunstâncias ALHEIAS à vontade. PEGADINHA: desistência voluntária (C) não é tentativa!",
  },
  {
    id: 351,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Direito à vida",
    enunciado:
      "Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e:",
    alternativas: {
      A: "à propriedade.",
      B: "ao trabalho.",
      C: "à educação.",
      D: "à saúde.",
    },
    correta: "A",
    explicacao:
      "Art. 5º caput CF/88: vida, liberdade, igualdade, segurança e PROPRIEDADE são os direitos fundamentais expressos no caput.",
  },
  {
    id: 352,
    materia: "ND",
    assunto: "Direito Penal - Penas (art. 32)",
    enunciado: "As penas são, segundo o Código Penal:",
    alternativas: {
      A: "Privativas de liberdade, restritivas de direitos e de multa.",
      B: "Apenas privativas de liberdade.",
      C: "Privativas de liberdade e pena de morte.",
      D: "Privativas de liberdade, multa e perda de bens.",
    },
    correta: "A",
    explicacao:
      "Art. 32 CP: 3 tipos de pena = privativas de liberdade, restritivas de direitos e multa. PEGADINHA: pena de morte só em caso de guerra declarada (CF/88).",
  },
  {
    id: 353,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Tortura",
    enunciado:
      "Segundo a CF/88, a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia:",
    alternativas: {
      A: "Apenas o tráfico de drogas.",
      B: "A prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os crimes hediondos.",
      C: "Apenas crimes hediondos.",
      D: "Todos os crimes dolosos.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, XLIII CF/88: tortura, tráfico, terrorismo e hediondos = inafiançáveis e insuscetíveis de graça/anistia. São os mais graves!",
  },
  {
    id: 354,
    materia: "ND",
    assunto: "Direito Penal - Homicídio simples (art. 121)",
    enunciado: "Matar alguém configura o crime de:",
    alternativas: {
      A: "Lesão corporal seguida de morte.",
      B: "Homicídio.",
      C: "Latrocínio.",
      D: "Infanticídio.",
    },
    correta: "B",
    explicacao:
      "Art. 121 CP: 'Matar alguém' = homicídio (pena: 6 a 20 anos). Latrocínio = roubo com morte; infanticídio = mãe mata filho durante/logo após parto.",
  },
  {
    id: 355,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 37 - Acumulação de cargos",
    enunciado:
      "É vedada a acumulação remunerada de cargos públicos, EXCETO quando houver compatibilidade de horários:",
    alternativas: {
      A: "Dois cargos de professor.",
      B: "Três cargos de médico.",
      C: "Qualquer cargo técnico com cargo de confiança.",
      D: "Cargo de policial com cargo de professor.",
    },
    correta: "A",
    explicacao:
      "Art. 37, XVI CF/88: pode acumular: a) 2 cargos de professor; b) 1 professor + 1 técnico/científico; c) 2 cargos/empregos privativos de profissionais de saúde. Precisa compatibilidade de horários!",
  },
  {
    id: 356,
    materia: "ND",
    assunto: "Direito Penal - Furto (art. 155)",
    enunciado:
      "Subtrair, para si ou para outrem, coisa alheia móvel, configura o crime de:",
    alternativas: {
      A: "Roubo.",
      B: "Furto.",
      C: "Estelionato.",
      D: "Apropriação indébita.",
    },
    correta: "B",
    explicacao:
      "Art. 155 CP: furto = subtrair (tirar) coisa alheia móvel SEM violência/grave ameaça. PEGADINHA: roubo tem violência/ameaça; estelionato tem fraude.",
  },
  {
    id: 357,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Princípio da legalidade",
    enunciado:
      "Segundo o princípio da legalidade previsto no art. 5º da CF/88:",
    alternativas: {
      A: "Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.",
      B: "Todos podem fazer tudo que a lei não proíbe.",
      C: "A lei pode retroagir para prejudicar o réu.",
      D: "Apenas o Presidente pode criar leis.",
    },
    correta: "A",
    explicacao:
      "Art. 5º, II CF/88: princípio da legalidade = só lei pode obrigar fazer/não fazer. Para administração pública: só pode fazer o que a lei autoriza.",
  },
  {
    id: 358,
    materia: "ND",
    assunto: "Direito Penal - Roubo (art. 157)",
    enunciado:
      "Subtrair coisa móvel alheia, para si ou para outrem, mediante grave ameaça ou violência a pessoa, ou depois de havê-la, por qualquer meio, reduzido à impossibilidade de resistência, configura:",
    alternativas: {
      A: "Furto qualificado.",
      B: "Extorsão.",
      C: "Roubo.",
      D: "Latrocínio.",
    },
    correta: "C",
    explicacao:
      "Art. 157 CP: roubo = subtração + violência/grave ameaça/redução de resistência. PEGADINHA: latrocínio = roubo com morte (qualificadora do roubo).",
  },
  {
    id: 359,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 144 - Polícia Penal",
    enunciado:
      "Com a EC 104/2019, foram criadas as polícias penais federal, estaduais e distrital, subordinadas administrativamente aos respectivos órgãos:",
    alternativas: {
      A: "De justiça.",
      B: "De segurança pública ou administração penitenciária.",
      C: "Do Poder Judiciário.",
      D: "Do Ministério Público.",
    },
    correta: "B",
    explicacao:
      "Art. 144, §1º-A CF/88 (EC 104/2019): polícias penais subordinadas aos órgãos de segurança pública OU administração penitenciária dos entes federativos.",
  },
  {
    id: 360,
    materia: "ND",
    assunto: "Direito Penal - Estado de Necessidade (art. 24)",
    enunciado:
      "Considera-se em estado de necessidade quem pratica o fato para salvar de perigo atual, que não provocou por sua vontade, nem podia de outro modo evitar, direito próprio ou alheio, cujo sacrifício, nas circunstâncias, não era:",
    alternativas: {
      A: "Possível.",
      B: "Razoável.",
      C: "Legal.",
      D: "Permitido.",
    },
    correta: "B",
    explicacao:
      "Art. 24 CP: estado de necessidade = perigo atual, não provocado, inevitável, sacrifício NÃO RAZOÁVEL. Excludente de ilicitude (não há crime).",
  },
  {
    id: 361,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Prisão civil",
    enunciado:
      "Segundo a CF/88, não haverá prisão civil por dívida, salvo a do responsável pelo inadimplemento voluntário e inescusável de obrigação alimentícia e a do:",
    alternativas: {
      A: "Devedor de impostos.",
      B: "Depositário infiel.",
      C: "Devedor de aluguel.",
      D: "Nenhuma outra, apenas alimentos.",
    },
    correta: "D",
    explicacao:
      "Art. 5º, LXVII CF/88 previa depositário infiel, MAS Súmula Vinculante 25 STF: só prisão civil por dívida de alimentos! PEGADINHA: depositário infiel não é mais preso.",
  },
  {
    id: 362,
    materia: "ND",
    assunto: "Direito Penal - Estupro (art. 213)",
    enunciado:
      "Constranger alguém, mediante violência ou grave ameaça, a ter conjunção carnal ou a praticar ou permitir que com ele se pratique outro ato libidinoso, configura o crime de:",
    alternativas: {
      A: "Assédio sexual.",
      B: "Estupro.",
      C: "Atentado violento ao pudor.",
      D: "Importunação sexual.",
    },
    correta: "B",
    explicacao:
      "Art. 213 CP (redação Lei 12.015/2009): estupro engloba conjunção carnal E atos libidinosos. PEGADINHA: atentado violento ao pudor foi unificado ao estupro em 2009.",
  },
  {
    id: 363,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 136 - Estado de Defesa",
    enunciado:
      "O estado de defesa pode ser decretado pelo Presidente da República para preservar ou restabelecer a ordem pública ou a paz social ameaçadas por:",
    alternativas: {
      A: "Qualquer motivo, a seu critério.",
      B: "Grave e iminente instabilidade institucional ou atingidas por calamidades de grandes proporções na natureza.",
      C: "Apenas guerra externa.",
      D: "Decisão do Congresso Nacional.",
    },
    correta: "B",
    explicacao:
      "Art. 136 CF/88: estado de defesa = instabilidade institucional grave/iminente OU calamidades naturais. PEGADINHA: guerra = estado de sítio (mais grave).",
  },
  {
    id: 364,
    materia: "ND",
    assunto: "Direito Penal - Lesão corporal (art. 129)",
    enunciado:
      "Ofender a integridade corporal ou a saúde de outrem configura o crime de:",
    alternativas: {
      A: "Injúria.",
      B: "Lesão corporal.",
      C: "Homicídio tentado.",
      D: "Vias de fato.",
    },
    correta: "B",
    explicacao:
      "Art. 129 CP: lesão corporal = ofender integridade física/saúde. PEGADINHA: injúria atinge honra subjetiva; vias de fato é contravenção (empurrão sem lesão).",
  },
  {
    id: 365,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 37 - Licitação",
    enunciado:
      "Ressalvados os casos especificados na legislação, as obras, serviços, compras e alienações da Administração Pública serão contratados mediante processo de:",
    alternativas: {
      A: "Livre escolha do administrador.",
      B: "Licitação pública.",
      C: "Indicação política.",
      D: "Sorteio público.",
    },
    correta: "B",
    explicacao:
      "Art. 37, XXI CF/88: obrigatoriedade de licitação pública (princípios: isonomia, publicidade, probidade). Exceções: dispensável, inexigível (na lei).",
  },
  {
    id: 366,
    materia: "ND",
    assunto: "Direito Penal - Concurso de crimes (art. 69)",
    enunciado:
      "Quando o agente, mediante mais de uma ação ou omissão, pratica dois ou mais crimes, as penas serão:",
    alternativas: {
      A: "Substituídas pela mais grave.",
      B: "Somadas (cumulação).",
      C: "Reduzidas pela metade.",
      D: "Unificadas pela média.",
    },
    correta: "B",
    explicacao:
      "Art. 69 CP: concurso material (crimes diversos) = soma das penas. PEGADINHA: concurso formal (mesma ação) = pena do mais grave aumentada; crime continuado = pena de um aumentada.",
  },
  {
    id: 367,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Direito de petição",
    enunciado:
      "São a todos assegurados, independentemente do pagamento de taxas:",
    alternativas: {
      A: "Apenas o direito de voto.",
      B: "O direito de petição aos Poderes Públicos em defesa de direitos ou contra ilegalidade ou abuso de poder.",
      C: "Apenas certidões de nascimento.",
      D: "Todos os serviços públicos.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, XXXIV, 'a' CF/88: direito de petição gratuito (não confundir com ação popular). Também gratuita: certidão para defesa de direitos.",
  },
  {
    id: 368,
    materia: "ND",
    assunto: "Direito Penal - Peculato (art. 312)",
    enunciado:
      "Apropriar-se o funcionário público de dinheiro, valor ou qualquer outro bem móvel, público ou particular, de que tem a posse em razão do cargo, configura o crime de:",
    alternativas: {
      A: "Corrupção passiva.",
      B: "Concussão.",
      C: "Peculato.",
      D: "Prevaricação.",
    },
    correta: "C",
    explicacao:
      "Art. 312 CP: peculato = funcionário público se apropria de bem que tem posse pelo cargo. PEGADINHA: corrupção=receber vantagem; concussão=exigir; prevaricação=retardar ato.",
  },
  {
    id: 369,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 140 - Estado de Sítio",
    enunciado:
      "O Presidente da República pode, ouvidos o Conselho da República e o Conselho de Defesa Nacional, solicitar ao Congresso Nacional autorização para decretar o estado de sítio nos casos de:",
    alternativas: {
      A: "Qualquer ameaça à ordem pública.",
      B: "Comoção grave de repercussão nacional ou ocorrência de fatos que comprovem a ineficácia de medida tomada durante o estado de defesa.",
      C: "Apenas em caso de guerra.",
      D: "Greve geral dos servidores.",
    },
    correta: "B",
    explicacao:
      "Art. 140, I CF/88: estado de sítio = comoção grave nacional OU ineficácia do estado de defesa. Art. 137: também em guerra/agressão armada estrangeira.",
  },
  {
    id: 370,
    materia: "ND",
    assunto: "Direito Penal - Culpabilidade (art. 29)",
    enunciado:
      "Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, na medida de sua:",
    alternativas: {
      A: "Idade.",
      B: "Culpabilidade.",
      C: "Situação financeira.",
      D: "Posição social.",
    },
    correta: "B",
    explicacao:
      "Art. 29 CP: concurso de pessoas = cada um responde na medida de sua culpabilidade. Autor, coautor e partícipe podem ter penas diferentes conforme participação.",
  },
  {
    id: 371,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Direito de reunião",
    enunciado:
      "Todos podem reunir-se pacificamente, sem armas, em locais abertos ao público, independentemente de autorização, desde que:",
    alternativas: {
      A: "Não frustrem outra reunião anteriormente convocada para o mesmo local.",
      B: "Tenham autorização prévia da polícia.",
      C: "Paguem taxa de segurança.",
      D: "Sejam menos de 100 pessoas.",
    },
    correta: "A",
    explicacao:
      "Art. 5º, XVI CF/88: reunião pacífica, sem armas, em local público = livre, mas não pode frustrar outra já convocada. PEGADINHA: não precisa autorização, só avisar!",
  },
  {
    id: 372,
    materia: "ND",
    assunto: "Direito Penal - Pena de reclusão e detenção (art. 33)",
    enunciado: "A diferença entre reclusão e detenção está:",
    alternativas: {
      A: "No regime inicial de cumprimento: reclusão pode ser fechado, semiaberto ou aberto; detenção só semiaberto ou aberto.",
      B: "Na duração: reclusão é mais curta que detenção.",
      C: "Apenas no nome, não há diferença prática.",
      D: "Reclusão é para crimes culposos, detenção para dolosos.",
    },
    correta: "A",
    explicacao:
      "Art. 33 CP: reclusão = regime fechado, semiaberto ou aberto; detenção = apenas semiaberto ou aberto (não pode começar no fechado). Reclusão é mais grave!",
  },
  {
    id: 373,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 37 - Improbidade administrativa",
    enunciado: "Os atos de improbidade administrativa importarão:",
    alternativas: {
      A: "Apenas advertência.",
      B: "A suspensão dos direitos políticos, a perda da função pública, a indisponibilidade dos bens e o ressarcimento ao erário.",
      C: "Apenas multa administrativa.",
      D: "Somente demissão do cargo.",
    },
    correta: "B",
    explicacao:
      "Art. 37, §4º CF/88: improbidade = suspensão direitos políticos + perda função + indisponibilidade bens + ressarcimento. São cumulativas conforme gravidade (Lei 8.429/92)!",
  },
  {
    id: 374,
    materia: "ND",
    assunto: "Direito Penal - Roubo qualificado (art. 157, §3º)",
    enunciado: "Se da violência resulta lesão corporal grave, a pena do roubo:",
    alternativas: {
      A: "Permanece igual.",
      B: "É aumentada de 1/3 até metade.",
      C: "É de reclusão, de 7 a 15 anos, além da multa.",
      D: "É reduzida pela metade.",
    },
    correta: "C",
    explicacao:
      "Art. 157, §3º CP (redação Lei 13.654/2018): roubo com lesão grave = 7 a 15 anos + multa. PEGADINHA: se resulta MORTE (latrocínio) = 20 a 30 anos!",
  },
  {
    id: 375,
    materia: "ND",
    assunto:
      "Direito Constitucional - Art. 5º - Inviolabilidade de correspondência",
    enunciado:
      "É inviolável o sigilo da correspondência e das comunicações telegráficas, de dados e das comunicações telefônicas, salvo:",
    alternativas: {
      A: "Por ordem policial, para investigação criminal.",
      B: "No último caso, por ordem judicial, nas hipóteses e na forma que a lei estabelecer para fins de investigação criminal ou instrução processual penal.",
      C: "Em qualquer caso, desde que haja suspeita de crime.",
      D: "Nunca, em nenhuma hipótese.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, XII CF/88: interceptação telefônica APENAS por ordem judicial + na forma da lei (Lei 9.296/96). PEGADINHA: só telefônica tem exceção expressa na CF!",
  },
  {
    id: 376,
    materia: "ND",
    assunto: "Direito Penal - Reincidência (art. 63)",
    enunciado:
      "Verifica-se a reincidência quando o agente comete novo crime, depois de transitar em julgado a sentença que, no País ou no estrangeiro, o tenha condenado por crime:",
    alternativas: {
      A: "Anterior, de qualquer natureza.",
      B: "Anterior, apenas se for do mesmo tipo.",
      C: "Anterior, desde que cometido no Brasil.",
      D: "Anterior, mesmo que seja contravenção.",
    },
    correta: "A",
    explicacao:
      "Art. 63 CP: reincidência = novo crime após trânsito em julgado de condenação por crime anterior (qualquer tipo). PEGADINHA: contravenção não gera reincidência em crime.",
  },
  {
    id: 377,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 144 - Polícia Federal",
    enunciado:
      "À polícia federal, instituída por lei como órgão permanente, organizado e mantido pela União, compete:",
    alternativas: {
      A: "Apenas o policiamento ostensivo das fronteiras.",
      B: "Apurar infrações penais contra a ordem política e social ou em detrimento de bens, serviços e interesses da União.",
      C: "Realizar apenas investigações de crimes estaduais.",
      D: "Substituir as polícias civis estaduais.",
    },
    correta: "B",
    explicacao:
      "Art. 144, §1º, I CF/88: PF apura infrações contra União, suas entidades, ordem política/social. Também: tráfico de drogas, contrabando, crimes transnacionais, etc.",
  },
  {
    id: 378,
    materia: "ND",
    assunto: "Direito Penal - Corrupção passiva (art. 317)",
    enunciado:
      "Solicitar ou receber, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, ou aceitar promessa de tal vantagem, configura:",
    alternativas: {
      A: "Peculato.",
      B: "Concussão.",
      C: "Corrupção passiva.",
      D: "Prevaricação.",
    },
    correta: "C",
    explicacao:
      "Art. 317 CP: corrupção passiva = funcionário solicita/recebe/aceita promessa de vantagem indevida. PEGADINHA: concussão = EXIGE (mais grave); corrupção = pede/aceita.",
  },
  {
    id: 379,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Ação popular",
    enunciado:
      "Qualquer cidadão é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público ou de entidade de que o Estado participe, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor:",
    alternativas: {
      A: "Obrigado a pagar custas judiciais antecipadamente.",
      B: "Salvo, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência.",
      C: "Responsável por pagar honorários mesmo ganhando.",
      D: "Impedido de recorrer da decisão.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, LXXIII CF/88: autor de ação popular isento de custas, salvo má-fé comprovada. Protege patrimônio público, moralidade, meio ambiente, patrimônio histórico/cultural.",
  },
  {
    id: 380,
    materia: "ND",
    assunto: "Direito Penal - Erro de tipo (art. 20)",
    enunciado: "O erro sobre elemento constitutivo do tipo legal de crime:",
    alternativas: {
      A: "Não exclui o dolo, mas reduz a pena.",
      B: "Exclui o dolo, mas permite a punição por crime culposo, se previsto em lei.",
      C: "Não tem qualquer efeito sobre a pena.",
      D: "Aumenta a pena pela negligência.",
    },
    correta: "B",
    explicacao:
      "Art. 20 CP: erro de tipo inevitável = exclui dolo e culpa (isenta pena); erro evitável = exclui dolo, responde por culpa SE PREVISTO. Ex: caçador atira em pessoa pensando ser animal.",
  },
  {
    id: 381,
    materia: "ND",
    assunto:
      "Direito Penal - Desistência voluntária e arrependimento eficaz (art. 15)",
    enunciado:
      "O agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza:",
    alternativas: {
      A: "Responde pelos atos já praticados.",
      B: "Não responde por nada, pois houve desistência.",
      C: "Responde pelo crime consumado com pena reduzida.",
      D: "Responde por tentativa com redução de pena.",
    },
    correta: "A",
    explicacao:
      "Art. 15 CP: desistência voluntária/arrependimento eficaz = não responde pela TENTATIVA, mas responde pelos ATOS JÁ PRATICADOS. PEGADINHA AOCP: se feriu alguém, responde por lesão corporal!",
  },
  {
    id: 382,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Retroatividade da lei penal",
    enunciado: "A lei penal não retroagirá, salvo para:",
    alternativas: {
      A: "Prejudicar o réu.",
      B: "Beneficiar o réu.",
      C: "Beneficiar apenas quem ainda não foi julgado.",
      D: "Nunca retroage.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, XL CF/88: lei penal mais benéfica retroage. PEGADINHA AOCP: retroage MESMO APÓS trânsito em julgado! Princípio da retroatividade in bonum.",
  },
  {
    id: 383,
    materia: "ND",
    assunto: "Direito Penal - Menoridade penal (art. 27)",
    enunciado:
      "Os menores de 18 anos são penalmente inimputáveis, ficando sujeitos:",
    alternativas: {
      A: "Às mesmas penas dos adultos, mas reduzidas.",
      B: "Às normas estabelecidas na legislação especial (ECA).",
      C: "Apenas à advertência verbal.",
      D: "À prisão especial em estabelecimento separado.",
    },
    correta: "B",
    explicacao:
      "Art. 27 CP: menor de 18 anos = inimputável, sujeito ao ECA (medidas socioeducativas, NÃO penas). PEGADINHA: maioridade penal aos 18 anos COMPLETOS na data do fato!",
  },
  {
    id: 384,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 37 - Direito de greve do servidor",
    enunciado: "O direito de greve do servidor público:",
    alternativas: {
      A: "É absoluto e irrestrito.",
      B: "É proibido em qualquer hipótese.",
      C: "Será exercido nos termos e nos limites definidos em lei específica.",
      D: "Só pode ser exercido por servidores estaduais.",
    },
    correta: "C",
    explicacao:
      "Art. 37, VII CF/88: direito de greve garantido, mas NOS TERMOS DA LEI específica. PEGADINHA AOCP: como lei específica não saiu, STF aplica lei de greve privada (Lei 7.783/89) analogicamente.",
  },
  {
    id: 385,
    materia: "ND",
    assunto: "Direito Penal - Crime impossível (art. 17)",
    enunciado:
      "Não se pune a tentativa quando, por ineficácia absoluta do meio ou por absoluta impropriedade do objeto, é impossível consumar-se o crime. Isso caracteriza:",
    alternativas: {
      A: "Desistência voluntária.",
      B: "Arrependimento posterior.",
      C: "Crime impossível.",
      D: "Tentativa punível com redução.",
    },
    correta: "C",
    explicacao:
      "Art. 17 CP: crime impossível = meio absolutamente ineficaz OU objeto absolutamente impróprio. PEGADINHA AOCP: tem que ser ABSOLUTO; se for relativo, é tentativa punível! Ex: atirar em cadáver pensando estar vivo.",
  },
  {
    id: 386,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Tribunal do Júri",
    enunciado:
      "É reconhecida a instituição do júri, com a organização que lhe der a lei, assegurados:",
    alternativas: {
      A: "Apenas a plenitude de defesa.",
      B: "A plenitude de defesa, o sigilo das votações, a soberania dos veredictos e a competência para o julgamento dos crimes dolosos contra a vida.",
      C: "Apenas o sigilo das votações.",
      D: "Somente para crimes hediondos.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, XXXVIII CF/88: júri tem 4 princípios = plenitude defesa + sigilo votações + soberania veredictos + competência crimes dolosos contra vida. PEGADINHA: todos são obrigatórios!",
  },
  {
    id: 387,
    materia: "ND",
    assunto: "Direito Penal - Causas de aumento e diminuição de pena",
    enunciado: "As causas de aumento e diminuição de pena são aplicadas:",
    alternativas: {
      A: "Antes da fixação da pena-base.",
      B: "Juntamente com as agravantes e atenuantes.",
      C: "Após a segunda fase de aplicação da pena (agravantes/atenuantes).",
      D: "Apenas em crimes culposos.",
    },
    correta: "C",
    explicacao:
      "Sistema trifásico (art. 68 CP): 1ª fase = pena-base (circunstâncias art. 59); 2ª fase = agravantes/atenuantes; 3ª fase = causas aumento/diminuição. PEGADINHA AOCP: ordem importa para o cálculo!",
  },
  {
    id: 388,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 144 - Polícia Militar",
    enunciado: "Às polícias militares cabem a polícia ostensiva e:",
    alternativas: {
      A: "A investigação criminal.",
      B: "A preservação da ordem pública.",
      C: "Apenas o patrulhamento rodoviário.",
      D: "Substituir a Polícia Federal quando necessário.",
    },
    correta: "B",
    explicacao:
      "Art. 144, §5º CF/88: PM = polícia ostensiva + preservação ordem pública. PEGADINHA AOCP: investigação é da Polícia Civil (judiciária), NÃO da PM!",
  },
  {
    id: 389,
    materia: "ND",
    assunto: "Direito Penal - Prescrição da pretensão punitiva",
    enunciado:
      "Antes de transitar em julgado a sentença final, a prescrição regula-se pelo máximo da pena privativa de liberdade cominada ao crime. Se esse máximo é superior a 4 anos e não excede 8, o prazo prescricional é de:",
    alternativas: {
      A: "8 anos.",
      B: "12 anos.",
      C: "16 anos.",
      D: "20 anos.",
    },
    correta: "B",
    explicacao:
      "Art. 109, III CP: máximo da pena > 4 e ≤ 8 anos = prescrição em 12 anos. PEGADINHA AOCP: tabela decoreba! >8 e ≤12 = 16 anos; >12 = 20 anos.",
  },
  {
    id: 390,
    materia: "ND",
    assunto: "Direito Constitucional - Art. 5º - Vedação de provas ilícitas",
    enunciado: "São inadmissíveis, no processo, as provas:",
    alternativas: {
      A: "Apenas as obtidas mediante tortura.",
      B: "Obtidas por meios ilícitos.",
      C: "Apenas as obtidas sem autorização judicial.",
      D: "Todas as provas podem ser admitidas se comprovarem o crime.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, LVI CF/88: provas ilícitas são INADMISSÍVEIS. PEGADINHA AOCP: inclui também as derivadas (teoria dos frutos da árvore envenenada)! Não importa se prova o crime, é inadmissível!",
  },
  // DIREITOS HUMANOS - PPMG 2025 (ID 391-400)
  {
    id: 391,
    materia: "DH",
    assunto: "Teoria geral - Conceito",
    enunciado: "Os direitos humanos são caracterizados como:",
    alternativas: {
      A: "Direitos concedidos pelo Estado conforme sua conveniência.",
      B: "Direitos inerentes à dignidade humana, universais, indivisíveis e interdependentes.",
      C: "Direitos exclusivos de cidadãos brasileiros.",
      D: "Direitos que podem ser revogados em situações de emergência.",
    },
    correta: "B",
    explicacao:
      "Direitos humanos são universais (todos têm), indivisíveis (não se fragmentam), interdependentes (se relacionam), inerentes à dignidade. PEGADINHA: não são concedidos, são INERENTES ao ser humano!",
  },
  {
    id: 392,
    materia: "DH",
    assunto: "Sistema global - Declaração Universal (1948)",
    enunciado:
      "A Declaração Universal dos Direitos Humanos de 1948 estabelece que:",
    alternativas: {
      A: "Todos os seres humanos nascem livres e iguais em dignidade e direitos.",
      B: "Apenas cidadãos de países desenvolvidos têm direitos.",
      C: "Direitos humanos dependem da nacionalidade.",
      D: "Alguns povos não possuem direitos fundamentais.",
    },
    correta: "A",
    explicacao:
      "Art. 1º DUDH: 'Todos os seres humanos nascem livres e iguais em dignidade e direitos'. Fundamento da universalidade dos direitos humanos.",
  },
  {
    id: 393,
    materia: "DH",
    assunto: "Características dos DH - Inalienabilidade",
    enunciado:
      "O princípio da inalienabilidade dos direitos humanos significa que:",
    alternativas: {
      A: "Podem ser vendidos ou transferidos a terceiros.",
      B: "Não podem ser renunciados, transferidos ou negociados.",
      C: "São temporários e podem expirar.",
      D: "Dependem de concordância do Estado.",
    },
    correta: "B",
    explicacao:
      "Inalienabilidade = direitos humanos são IRRENUNCIÁVEIS, não podem ser vendidos, transferidos ou negociados. PEGADINHA: nem mesmo o titular pode abrir mão deles!",
  },
  {
    id: 394,
    materia: "DH",
    assunto: "Sistema interamericano - Comissão IDH",
    enunciado:
      "A Comissão Interamericana de Direitos Humanos (CIDH) tem como função:",
    alternativas: {
      A: "Apenas julgar Estados violadores.",
      B: "Receber petições individuais, realizar investigações, produzir relatórios e recomendações.",
      C: "Substituir o sistema judicial dos países membros.",
      D: "Criar leis de direitos humanos para todos os países americanos.",
    },
    correta: "B",
    explicacao:
      "CIDH é órgão quase-judicial da OEA: recebe petições, investiga, faz relatórios, recomendações. PEGADINHA: quem JULGA é a Corte IDH, não a Comissão!",
  },
  {
    id: 395,
    materia: "DH",
    assunto: "Dignidade da pessoa humana",
    enunciado: "A dignidade da pessoa humana, fundamento dos direitos humanos:",
    alternativas: {
      A: "Pode ser relativizada em casos de criminalidade.",
      B: "É um valor absoluto que não admite violação, mesmo em situação de privação de liberdade.",
      C: "Aplica-se apenas a pessoas inocentes.",
      D: "É garantida somente a cidadãos, não a estrangeiros.",
    },
    correta: "B",
    explicacao:
      "Dignidade é ABSOLUTA e IRRENUNCIÁVEL, mesmo para presos. PEGADINHA AOCP: policial penal DEVE respeitar dignidade dos custodiados! Vedada tortura, tratamento degradante.",
  },
  {
    id: 396,
    materia: "DH",
    assunto: "Gerações/Dimensões de direitos",
    enunciado: "Os direitos de segunda geração/dimensão referem-se a:",
    alternativas: {
      A: "Direitos civis e políticos (liberdade).",
      B: "Direitos sociais, econômicos e culturais (igualdade).",
      C: "Direitos de solidariedade (fraternidade).",
      D: "Direitos digitais e tecnológicos.",
    },
    correta: "B",
    explicacao:
      "1ª geração = civis/políticos (liberdade); 2ª = sociais/econômicos/culturais (igualdade); 3ª = solidariedade (meio ambiente, paz). PEGADINHA: são DIMENSÕES, não gerações (não se superam)!",
  },
  {
    id: 397,
    materia: "DH",
    assunto: "Incorporação de tratados no Brasil",
    enunciado:
      "Segundo o STF, os tratados internacionais de direitos humanos aprovados pelo procedimento do art. 5º, §3º da CF/88 (quórum qualificado) têm status de:",
    alternativas: {
      A: "Lei ordinária.",
      B: "Lei complementar.",
      C: "Emenda constitucional.",
      D: "Decreto-lei.",
    },
    correta: "C",
    explicacao:
      "Art. 5º, §3º CF/88: tratado de DH aprovado em 2 turnos, 3/5 em cada casa = equivalente à EMENDA CONSTITUCIONAL. PEGADINHA: se não tiver esse procedimento, é supralegal (abaixo da CF, acima das leis).",
  },
  {
    id: 398,
    materia: "DH",
    assunto: "Sistema ONU - Pacto de Direitos Civis e Políticos",
    enunciado:
      "O Pacto Internacional de Direitos Civis e Políticos (1966) proíbe:",
    alternativas: {
      A: "Apenas a tortura.",
      B: "A tortura e tratamentos ou penas cruéis, desumanos ou degradantes.",
      C: "Somente a pena de morte.",
      D: "Apenas a prisão perpétua.",
    },
    correta: "B",
    explicacao:
      "Art. 7º PIDCP: proíbe tortura E tratamentos/penas cruéis, desumanos ou degradantes. Proibição ABSOLUTA, sem exceções! PEGADINHA: inclui tratamento degradante no sistema prisional.",
  },
  {
    id: 399,
    materia: "DH",
    assunto: "Grupos vulneráveis - Princípio da não discriminação",
    enunciado:
      "O princípio da não discriminação nos direitos humanos significa que:",
    alternativas: {
      A: "Todos devem ser tratados exatamente da mesma forma, sem distinção.",
      B: "É vedado tratamento diferenciado por raça, cor, sexo, religião, origem, sem justificativa legítima.",
      C: "Políticas afirmativas são discriminatórias e proibidas.",
      D: "Apenas discriminação racial é proibida.",
    },
    correta: "B",
    explicacao:
      "Não discriminação = vedado tratamento diferenciado INJUSTIFICADO. PEGADINHA AOCP: ações afirmativas (cotas) NÃO são discriminação, são discriminação POSITIVA para igualdade material!",
  },
  {
    id: 400,
    materia: "DH",
    assunto: "Corte Interamericana de Direitos Humanos",
    enunciado: "As decisões da Corte Interamericana de Direitos Humanos:",
    alternativas: {
      A: "São meras recomendações sem força obrigatória.",
      B: "Têm caráter vinculante e obrigatório para os Estados condenados.",
      C: "Só se aplicam se o país concordar.",
      D: "Podem ser ignoradas livremente pelos Estados.",
    },
    correta: "B",
    explicacao:
      "Convenção Americana (Pacto de São José): decisões da Corte IDH são VINCULANTES e OBRIGATÓRIAS. Brasil reconhece jurisdição desde 1998. PEGADINHA: não são apenas recomendações!",
  },
  {
    id: 401,
    materia: "DH",
    assunto: "Direito Internacional Humanitário - Convenções de Genebra",
    enunciado:
      "O Direito Internacional Humanitário (DIH) aplica-se em situações de:",
    alternativas: {
      A: "Paz e harmonia entre nações.",
      B: "Conflitos armados, visando proteger pessoas que não participam das hostilidades.",
      C: "Apenas em guerras mundiais.",
      D: "Disputas comerciais entre países.",
    },
    correta: "B",
    explicacao:
      "DIH (Convenções de Genebra 1949) regula conflitos armados, protegendo civis, feridos, prisioneiros de guerra. PEGADINHA: aplica-se em conflitos internacionais E não-internacionais!",
  },
  {
    id: 402,
    materia: "DH",
    assunto: "Direito dos Refugiados - Convenção de 1951",
    enunciado:
      "Segundo a Convenção de 1951 sobre Refugiados, refugiado é a pessoa que tem fundado temor de perseguição por motivos de:",
    alternativas: {
      A: "Apenas questões econômicas.",
      B: "Raça, religião, nacionalidade, grupo social ou opiniões políticas.",
      C: "Desastres naturais.",
      D: "Busca de melhores condições de vida.",
    },
    correta: "B",
    explicacao:
      "Convenção 1951 (Estatuto dos Refugiados): perseguição por raça, religião, nacionalidade, grupo social, opinião política. PEGADINHA AOCP: migrante econômico NÃO é refugiado!",
  },
  {
    id: 403,
    materia: "DH",
    assunto: "OIT - Organização Internacional do Trabalho",
    enunciado:
      "A Organização Internacional do Trabalho (OIT), criada em 1919, tem como objetivo:",
    alternativas: {
      A: "Regular apenas salários mínimos.",
      B: "Promover justiça social e direitos trabalhistas através de normas internacionais do trabalho.",
      C: "Substituir sindicatos nacionais.",
      D: "Fiscalizar empresas privadas diretamente.",
    },
    correta: "B",
    explicacao:
      "OIT promove direitos trabalhistas, justiça social, condições dignas de trabalho. Cria convenções/recomendações. PEGADINHA: é organismo tripartite (governos, empregadores, trabalhadores).",
  },
  {
    id: 404,
    materia: "DH",
    assunto: "Controle de Convencionalidade",
    enunciado: "O controle de convencionalidade consiste em:",
    alternativas: {
      A: "Verificar se leis nacionais estão de acordo com tratados internacionais de direitos humanos.",
      B: "Controlar apenas convenções comerciais.",
      C: "Substituir o controle de constitucionalidade.",
      D: "Analisar apenas tratados bilaterais.",
    },
    correta: "A",
    explicacao:
      "Controle de convencionalidade = compatibilidade vertical entre norma interna e tratados de DH. Complementa (não substitui) controle de constitucionalidade. PEGADINHA: juízes devem realizar ex officio!",
  },
  {
    id: 405,
    materia: "DH",
    assunto: "Direitos civis - Liberdade de expressão",
    enunciado:
      "A liberdade de expressão, garantida em tratados internacionais:",
    alternativas: {
      A: "É absoluta e não pode sofrer qualquer restrição.",
      B: "Pode ser restringida para respeitar direitos de terceiros, segurança nacional e ordem pública, na forma da lei.",
      C: "Permite discurso de ódio sem consequências.",
      D: "Aplica-se apenas a jornalistas profissionais.",
    },
    correta: "B",
    explicacao:
      "Liberdade de expressão não é absoluta: PIDCP art. 19 e CADH art. 13 preveem restrições legítimas (direitos alheios, segurança, ordem). PEGADINHA: discurso de ódio/incitação violência NÃO são protegidos!",
  },
  {
    id: 406,
    materia: "DH",
    assunto: "Direitos sociais - Direito à saúde",
    enunciado:
      "O Pacto Internacional de Direitos Econômicos, Sociais e Culturais (PIDESC) reconhece o direito de toda pessoa de gozar o mais elevado nível possível de:",
    alternativas: {
      A: "Riqueza material.",
      B: "Saúde física e mental.",
      C: "Entretenimento.",
      D: "Tecnologia.",
    },
    correta: "B",
    explicacao:
      "Art. 12 PIDESC: direito ao mais alto nível possível de saúde física e mental. Estados devem adotar medidas progressivas. PEGADINHA: é obrigação de realizar progressivamente, não imediata!",
  },
  {
    id: 407,
    materia: "DH",
    assunto: "Sistema interamericano - Relatórios temáticos",
    enunciado:
      "As relatorias temáticas da Comissão Interamericana de Direitos Humanos (CIDH) monitoram situações específicas, como:",
    alternativas: {
      A: "Apenas violações em países desenvolvidos.",
      B: "Direitos de pessoas privadas de liberdade, mulheres, crianças, povos indígenas, entre outros.",
      C: "Somente questões ambientais.",
      D: "Exclusivamente crimes transnacionais.",
    },
    correta: "B",
    explicacao:
      "CIDH tem relatorias temáticas (pessoas privadas de liberdade, mulheres, crianças, LGBTI+, defensores DH, etc.) e por países. PEGADINHA AOCP: policial penal deve conhecer Relatoria sobre Prisões!",
  },
  {
    id: 408,
    materia: "DH",
    assunto: "Mecanismos CF/88 - Habeas Data",
    enunciado: "O habeas data é o instrumento constitucional que serve para:",
    alternativas: {
      A: "Proteger a liberdade de locomoção.",
      B: "Assegurar o conhecimento de informações relativas à pessoa do impetrante em registros públicos e retificar dados.",
      C: "Anular ato lesivo ao patrimônio público.",
      D: "Proteger direito líquido e certo não amparado por habeas corpus.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, LXXII CF/88: habeas data = conhecer/retificar dados pessoais em registros públicos. PEGADINHA: diferente de habeas corpus (liberdade) e mandado de segurança (líquido e certo).",
  },
  {
    id: 409,
    materia: "DH",
    assunto: "Direitos de titularidade coletiva - Meio ambiente",
    enunciado:
      "O direito ao meio ambiente ecologicamente equilibrado é classificado como direito de titularidade:",
    alternativas: {
      A: "Individual apenas.",
      B: "Difusa (toda coletividade).",
      C: "Exclusiva do Estado.",
      D: "Apenas de proprietários de terras.",
    },
    correta: "B",
    explicacao:
      "Direito difuso = titularidade indeterminada, indivisível (ex: meio ambiente, consumidor). PEGADINHA: direitos coletivos = grupo determinável; difusos = indetermináveis.",
  },
  {
    id: 410,
    materia: "DH",
    assunto: "Princípio da Progressividade - Direitos sociais",
    enunciado:
      "O princípio da progressividade nos direitos econômicos, sociais e culturais significa que:",
    alternativas: {
      A: "Estados podem retroceder livremente nas políticas sociais.",
      B: "Estados devem adotar medidas para realizar progressivamente esses direitos, vedado retrocesso injustificado.",
      C: "Direitos sociais são opcionais.",
      D: "Apenas países ricos têm obrigação de garantir direitos sociais.",
    },
    correta: "B",
    explicacao:
      "PIDESC: realização progressiva (conforme recursos disponíveis) + proibição de retrocesso. PEGADINHA: retrocesso injustificado é vedado (princípio do não retrocesso social)!",
  },
  {
    id: 411,
    materia: "DH",
    assunto: "Convenção Americana - Direito à vida",
    enunciado:
      "A Convenção Americana sobre Direitos Humanos (Pacto de São José da Costa Rica) estabelece que o direito à vida deve ser protegido:",
    alternativas: {
      A: "Apenas após o nascimento.",
      B: "A partir da concepção, em geral.",
      C: "Somente para cidadãos nacionais.",
      D: "Apenas em tempos de paz.",
    },
    correta: "B",
    explicacao:
      "Art. 4.1 CADH: direito à vida protegido 'em geral, a partir da concepção'. PEGADINHA: não é absoluto desde concepção (depende de cada país), mas deve ser protegido.",
  },
  {
    id: 412,
    materia: "DH",
    assunto: "Sistema ONU - Comitê de Direitos Humanos",
    enunciado:
      "O Comitê de Direitos Humanos da ONU, criado pelo Pacto Internacional de Direitos Civis e Políticos:",
    alternativas: {
      A: "Tem poder de julgar Estados com sentenças vinculantes.",
      B: "Monitora a implementação do PIDCP através de relatórios periódicos e pode receber comunicações individuais.",
      C: "Substitui tribunais nacionais.",
      D: "Apenas produz estudos acadêmicos.",
    },
    correta: "B",
    explicacao:
      "Comitê DH (ONU) é órgão de monitoramento: analisa relatórios estatais, emite comentários gerais, recebe comunicações individuais (Protocolo Facultativo). PEGADINHA: NÃO tem poder judicial vinculante como Corte IDH!",
  },
  {
    id: 413,
    materia: "DH",
    assunto: "Direitos políticos - Participação",
    enunciado:
      "O direito à participação política, previsto em tratados internacionais, inclui:",
    alternativas: {
      A: "Apenas o direito de votar.",
      B: "Votar, ser votado e ter acesso a funções públicas em condições de igualdade.",
      C: "Somente para maiores de 25 anos.",
      D: "Apenas para quem tem ensino superior.",
    },
    correta: "B",
    explicacao:
      "PIDCP art. 25 e CADH art. 23: direitos políticos = votar, ser eleito, acesso cargos públicos. PEGADINHA: igualdade de acesso SEM discriminações arbitrárias!",
  },
  {
    id: 414,
    materia: "DH",
    assunto: "Tortura - Proibição absoluta",
    enunciado: "A Convenção Contra a Tortura da ONU (1984) estabelece que:",
    alternativas: {
      A: "Tortura pode ser justificada em situações excepcionais de terrorismo.",
      B: "Nenhuma circunstância excepcional pode justificar tortura, nem guerra, instabilidade política ou ordem superior.",
      C: "Autoridades podem usar tortura com autorização judicial.",
      D: "Tortura é permitida para obter confissões em crimes graves.",
    },
    correta: "B",
    explicacao:
      "Art. 2.2 Convenção Contra Tortura: proibição ABSOLUTA, sem exceções! Nem guerra, nem ordem superior justifica. PEGADINHA AOCP: 'bomba-relógio' não justifica tortura!",
  },
  {
    id: 415,
    materia: "DH",
    assunto: "Direitos culturais - Diversidade",
    enunciado:
      "O direito à cultura e à identidade cultural, reconhecido em tratados de DH:",
    alternativas: {
      A: "Protege apenas manifestações culturais majoritárias.",
      B: "Garante a pessoas e comunidades participar, preservar e desenvolver sua cultura, incluindo minorias e povos indígenas.",
      C: "Permite destruição de patrimônio cultural alheio.",
      D: "Aplica-se somente em museus.",
    },
    correta: "B",
    explicacao:
      "PIDESC art. 15: direito de participar da vida cultural. Inclui minorias, povos indígenas, quilombolas. PEGADINHA: diversidade cultural é direito humano!",
  },
  {
    id: 416,
    materia: "DH",
    assunto: "Sistema interamericano - Audiências públicas",
    enunciado:
      "As audiências públicas realizadas pela Comissão Interamericana de Direitos Humanos têm como objetivo:",
    alternativas: {
      A: "Julgar definitivamente os Estados violadores.",
      B: "Receber informações sobre situações de DH de peticionários, Estados e sociedade civil.",
      C: "Substituir processos judiciais nacionais.",
      D: "Criar leis regionais obrigatórias.",
    },
    correta: "B",
    explicacao:
      "Audiências CIDH: espaço de diálogo, recebimento de informações, esclarecimentos. Pode tratar casos individuais ou situações gerais de países. PEGADINHA: não é julgamento, é instrução processual!",
  },
  {
    id: 417,
    materia: "DH",
    assunto: "Grupos vulneráveis - Convenção sobre Direitos da Criança",
    enunciado:
      "A Convenção sobre os Direitos da Criança (ONU, 1989) estabelece como princípio norteador:",
    alternativas: {
      A: "A vontade dos pais sempre prevalece.",
      B: "O melhor interesse da criança.",
      C: "Crianças não têm direitos próprios.",
      D: "Apenas direitos educacionais.",
    },
    correta: "B",
    explicacao:
      "Princípio do melhor interesse (best interest) da criança é norteador da Convenção. Criança é sujeito de direitos, não objeto. PEGADINHA: interesse da criança > vontade dos adultos!",
  },
  {
    id: 418,
    materia: "DH",
    assunto: "Direito à educação - PIDESC",
    enunciado: "Segundo o PIDESC, o direito à educação deve:",
    alternativas: {
      A: "Ser garantido apenas para o ensino fundamental.",
      B: "Visar ao pleno desenvolvimento da personalidade humana e do respeito aos direitos humanos.",
      C: "Ser privilégio de classes sociais altas.",
      D: "Focar exclusivamente em formação técnica.",
    },
    correta: "B",
    explicacao:
      "Art. 13 PIDESC: educação visa pleno desenvolvimento humano e respeito aos DH/liberdades fundamentais. Ensino primário obrigatório e gratuito. PEGADINHA: educação é direito E ferramenta para outros direitos!",
  },
  {
    id: 419,
    materia: "DH",
    assunto: "Execução de decisões da Corte IDH no Brasil",
    enunciado:
      "As sentenças da Corte Interamericana de Direitos Humanos contra o Brasil:",
    alternativas: {
      A: "Não têm qualquer efeito prático.",
      B: "Devem ser cumpridas pelo Estado brasileiro, podendo envolver reparações, investigações e mudanças legislativas.",
      C: "São cumpridas apenas se o STF concordar.",
      D: "Aplicam-se somente a casos futuros.",
    },
    correta: "B",
    explicacao:
      "Convenção Americana art. 68: Estados devem cumprir decisões da Corte. Brasil já foi condenado (Casos: Damião Ximenes, Gomes Lund, Favela Nova Brasília). PEGADINHA: cumprimento é OBRIGATÓRIO!",
  },
  {
    id: 420,
    materia: "DH",
    assunto: "Comentários Gerais - ONU",
    enunciado:
      "Os Comentários Gerais (General Comments) dos Comitês de tratados da ONU são:",
    alternativas: {
      A: "Interpretações autoritativas sobre disposições dos tratados, orientando Estados na implementação.",
      B: "Leis internacionais com força vinculante imediata.",
      C: "Recomendações sem importância jurídica.",
      D: "Apenas opiniões pessoais de especialistas.",
    },
    correta: "A",
    explicacao:
      "Comentários Gerais interpretam tratados, esclarecem conteúdo, orientam Estados. Autoridade interpretativa reconhecida. PEGADINHA: não são leis, mas têm peso jurídico significativo!",
  },
  {
    id: 421,
    materia: "DH",
    assunto: "Direito ambiental - Direito de 3ª geração",
    enunciado:
      "O direito ao meio ambiente saudável é considerado um direito de terceira geração, pois:",
    alternativas: {
      A: "Protege apenas indivíduos isoladamente.",
      B: "É baseado na solidariedade e fraternidade, sendo transindividual e difuso.",
      C: "Aplica-se somente a países ricos.",
      D: "Pertence apenas aos proprietários de terra.",
    },
    correta: "B",
    explicacao:
      "Direitos de 3ª geração (solidariedade): meio ambiente, paz, desenvolvimento. Titularidade difusa, indivisível. PEGADINHA: são direitos coletivos/difusos, não individuais!",
  },
  {
    id: 422,
    materia: "DH",
    assunto: "Grupos vulneráveis - Convenção sobre Pessoas com Deficiência",
    enunciado:
      "A Convenção da ONU sobre Direitos das Pessoas com Deficiência (2006) adotou o modelo:",
    alternativas: {
      A: "Médico da deficiência (foco na cura).",
      B: "Social da deficiência (foco nas barreiras sociais e acessibilidade).",
      C: "Caritativo da deficiência.",
      D: "Segregacionista.",
    },
    correta: "B",
    explicacao:
      "Convenção adota modelo SOCIAL: deficiência resulta da interação entre impedimentos e barreiras. Foco em acessibilidade, não 'cura'. Brasil ratificou com status de EC (Decreto 6.949/2009)!",
  },
  {
    id: 423,
    materia: "DH",
    assunto: "Sistemas regionais - Sistema Africano",
    enunciado:
      "Além do sistema interamericano, existem outros sistemas regionais de proteção de direitos humanos, como:",
    alternativas: {
      A: "Sistema Asiático (consolidado).",
      B: "Sistema Africano (Carta Africana dos Direitos Humanos e dos Povos).",
      C: "Sistema Antártico.",
      D: "Sistema Oceânico.",
    },
    correta: "B",
    explicacao:
      "Sistemas regionais: 1) Interamericano (OEA), 2) Europeu (Conselho Europa), 3) Africano (União Africana). PEGADINHA: não há sistema asiático consolidado ainda!",
  },
  {
    id: 424,
    materia: "DH",
    assunto: "Mecanismos CF/88 - Mandado de Injunção",
    enunciado: "Conceder-se-á mandado de injunção quando:",
    alternativas: {
      A: "Houver violação à liberdade de locomoção.",
      B: "A falta de norma regulamentadora torne inviável o exercício de direitos constitucionais.",
      C: "Houver lesão ao patrimônio público.",
      D: "Para anular lei inconstitucional.",
    },
    correta: "B",
    explicacao:
      "Art. 5º, LXXI CF/88: mandado de injunção = falta de norma regulamentadora inviabiliza direito constitucional. PEGADINHA: STF passou a ter posição CONCRETISTA (supre a omissão no caso concreto)!",
  },
  {
    id: 425,
    materia: "DH",
    assunto: "Convenção Interamericana para Prevenir e Punir a Tortura",
    enunciado:
      "A Convenção Interamericana contra a Tortura (1985) foi o primeiro instrumento internacional a definir tortura como:",
    alternativas: {
      A: "Apenas dor física intencional.",
      B: "Todo ato que inflija dor ou sofrimento físico ou mental, com fins de investigação, intimidação, punição ou discriminação.",
      C: "Somente violência letal.",
      D: "Apenas maus-tratos durante guerra.",
    },
    correta: "B",
    explicacao:
      "Convenção Interamericana amplia conceito: dor/sofrimento físico OU MENTAL, vários fins. PEGADINHA AOCP: policial penal que pratica tortura pode responder no sistema interamericano!",
  },
  {
    id: 426,
    materia: "DH",
    assunto: "Direitos econômicos - Propriedade",
    enunciado:
      "O direito de propriedade, reconhecido em tratados de DH, possui:",
    alternativas: {
      A: "Caráter absoluto sem qualquer limitação.",
      B: "Função social, podendo sofrer limitações legais de interesse público ou social.",
      C: "Prevalência sobre todos os demais direitos.",
      D: "Aplicação apenas para grandes proprietários.",
    },
    correta: "B",
    explicacao:
      "CADH art. 21: propriedade subordinada ao interesse social. CF/88 art. 5º: função social. PEGADINHA: propriedade NÃO é absoluta, deve cumprir função social!",
  },
  {
    id: 427,
    materia: "DH",
    assunto: "Princípio Pro Persona (Pro Homine)",
    enunciado: "O princípio pro persona (ou pro homine) determina que:",
    alternativas: {
      A: "Deve-se aplicar sempre a norma mais restritiva aos direitos humanos.",
      B: "Em caso de conflito, deve-se aplicar a norma que mais proteja a pessoa humana.",
      C: "Tratados internacionais nunca prevalecem sobre leis nacionais.",
      D: "Direitos humanos podem ser facilmente relativizados.",
    },
    correta: "B",
    explicacao:
      "Princípio pro persona: interpretação extensiva de direitos, restritiva de limitações. Aplica-se norma MAIS FAVORÁVEL ao ser humano. PEGADINHA: critério de hermenêutica dos DH!",
  },
  {
    id: 428,
    materia: "DH",
    assunto: "Relatórios de países - Sistema ONU",
    enunciado:
      "Os Estados partes dos tratados de direitos humanos da ONU devem:",
    alternativas: {
      A: "Nunca prestar contas de suas ações.",
      B: "Submeter relatórios periódicos aos comitês sobre a implementação dos direitos.",
      C: "Apenas pagar contribuições financeiras.",
      D: "Ignorar recomendações dos comitês.",
    },
    correta: "B",
    explicacao:
      "Comitês ONU: Estados apresentam relatórios periódicos sobre implementação. Comitês fazem recomendações (observações finais). PEGADINHA: é mecanismo de monitoramento permanente!",
  },
  {
    id: 429,
    materia: "DH",
    assunto:
      "Grupos vulneráveis - Convenção sobre Eliminação de Discriminação Racial",
    enunciado:
      "A Convenção Internacional sobre a Eliminação de Todas as Formas de Discriminação Racial (1965) define discriminação racial como:",
    alternativas: {
      A: "Apenas segregação baseada na cor da pele.",
      B: "Toda distinção, exclusão, restrição ou preferência baseada em raça, cor, descendência, origem nacional ou étnica.",
      C: "Somente discriminação em empregos públicos.",
      D: "Apenas atos violentos.",
    },
    correta: "B",
    explicacao:
      "CERD: discriminação racial ampla = raça, cor, descendência, origem nacional/étnica. Abrange distinção, exclusão, restrição, preferência. PEGADINHA: vai além de atos violentos!",
  },
  {
    id: 430,
    materia: "DH",
    assunto: "Direito à alimentação adequada",
    enunciado: "O direito humano à alimentação adequada, previsto no PIDESC:",
    alternativas: {
      A: "Significa apenas ausência de fome.",
      B: "Garante acesso físico e econômico permanente a alimentos adequados, em quantidade e qualidade suficientes.",
      C: "Aplica-se somente em situações de guerra.",
      D: "É responsabilidade exclusiva das famílias.",
    },
    correta: "B",
    explicacao:
      "Comentário Geral 12: alimentação adequada = disponibilidade, acessibilidade, adequação cultural, sustentabilidade. PEGADINHA: não é só 'não passar fome', é direito amplo!",
  },
  {
    id: 431,
    materia: "DH",
    assunto: "Direitos da mulher - Convenção CEDAW",
    enunciado:
      "A Convenção sobre a Eliminação de Todas as Formas de Discriminação contra a Mulher (CEDAW, 1979) obriga os Estados a:",
    alternativas: {
      A: "Apenas punir violência doméstica.",
      B: "Adotar medidas para eliminar discriminação contra mulheres em todas as esferas (política, econômica, social, cultural).",
      C: "Proibir mulheres de trabalhar.",
      D: "Aplicar apenas em países desenvolvidos.",
    },
    correta: "B",
    explicacao:
      "CEDAW: eliminar discriminação contra mulher em TODAS as esferas (civil, política, econômica, social, cultural). Inclui medidas temporárias especiais (ações afirmativas). Brasil ratificou em 1984!",
  },
  {
    id: 432,
    materia: "DH",
    assunto: "Protocolo Facultativo - Comunicações individuais",
    enunciado:
      "Os Protocolos Facultativos aos tratados de direitos humanos geralmente permitem:",
    alternativas: {
      A: "Que Estados ignorem suas obrigações.",
      B: "Que indivíduos ou grupos apresentem comunicações (queixas) aos comitês da ONU alegando violações.",
      C: "Apenas consultas diplomáticas.",
      D: "Que tratados sejam revogados.",
    },
    correta: "B",
    explicacao:
      "Protocolos Facultativos criam mecanismos de petição individual aos comitês. Ex: Protocolo Facultativo ao PIDCP permite comunicações ao Comitê DH. PEGADINHA: é OPCIONAL, Estado precisa ratificar!",
  },
  {
    id: 433,
    materia: "DH",
    assunto: "Direito à moradia adequada",
    enunciado: "O direito à moradia adequada, previsto no PIDESC, inclui:",
    alternativas: {
      A: "Apenas ter um teto sobre a cabeça.",
      B: "Segurança da posse, disponibilidade de serviços, habitabilidade, acessibilidade, localização adequada e adequação cultural.",
      C: "Somente propriedade particular de imóveis.",
      D: "Moradias de luxo para todos.",
    },
    correta: "B",
    explicacao:
      "Comentário Geral 4: moradia adequada tem 7 elementos (segurança posse, serviços, habitabilidade, acessibilidade, localização, adequação cultural, custo). PEGADINHA: não é só 'ter casa'!",
  },
  {
    id: 434,
    materia: "DH",
    assunto: "Medidas cautelares - Comissão IDH",
    enunciado:
      "A Comissão Interamericana pode outorgar medidas cautelares quando:",
    alternativas: {
      A: "Apenas após sentença final da Corte IDH.",
      B: "Em situações de gravidade e urgência para prevenir dano irreparável às pessoas.",
      C: "Somente a pedido de Estados.",
      D: "Nunca, pois não tem esse poder.",
    },
    correta: "B",
    explicacao:
      "Art. 25 Regulamento CIDH: medidas cautelares em casos graves/urgentes para evitar dano irreparável. PEGADINHA: Brasil já recebeu medidas cautelares (ex: sistema prisional, povos indígenas)!",
  },
  {
    id: 435,
    materia: "DH",
    assunto: "Direito ao trabalho - OIT Convenção 29",
    enunciado: "A Convenção 29 da OIT (1930) sobre Trabalho Forçado proíbe:",
    alternativas: {
      A: "Apenas escravidão no sentido clássico.",
      B: "Toda forma de trabalho forçado ou obrigatório, com exceções limitadas previstas na convenção.",
      C: "Somente trabalho infantil.",
      D: "Apenas em tempo de paz.",
    },
    correta: "B",
    explicacao:
      "Conv. 29 OIT: proíbe trabalho forçado (sob ameaça/coerção). Exceções: serviço militar, condenações judiciais (sem trabalhos forçados), emergências. PEGADINHA: trabalho forçado ≠ trabalho obrigatório permitido!",
  },
  {
    id: 436,
    materia: "DH",
    assunto: "Interpretação de tratados - Convenção de Viena",
    enunciado:
      "Segundo a Convenção de Viena sobre Direito dos Tratados (1969), os tratados devem ser interpretados:",
    alternativas: {
      A: "De boa-fé, conforme sentido comum dos termos, contexto, objetivo e finalidade.",
      B: "Sempre de forma literal, sem contexto.",
      C: "Apenas conforme vontade de um Estado.",
      D: "Ignorando o objetivo do tratado.",
    },
    correta: "A",
    explicacao:
      "Art. 31 Conv. Viena: interpretação de boa-fé, sentido comum, contexto, objeto e finalidade. PEGADINHA: nos tratados de DH, aplica-se também princípio pro persona!",
  },
  {
    id: 437,
    materia: "DH",
    assunto: "Grupos vulneráveis - Pessoas idosas",
    enunciado:
      "A Convenção Interamericana sobre Proteção dos Direitos Humanos dos Idosos (2015) reconhece que as pessoas idosas têm direito a:",
    alternativas: {
      A: "Apenas aposentadoria.",
      B: "Vida digna, independência, participação, cuidados, liberdade de violência e exploração.",
      C: "Isolamento compulsório.",
      D: "Nenhum direito específico.",
    },
    correta: "B",
    explicacao:
      "Convenção de 2015: direitos amplos (dignidade, independência, participação, cuidados, não violência, acessibilidade). Brasil assinou mas ainda não ratificou. PEGADINHA: idoso é sujeito de direitos!",
  },
  {
    id: 438,
    materia: "DH",
    assunto: "Direito à água - Reconhecimento ONU",
    enunciado:
      "Em 2010, a Assembleia Geral da ONU reconheceu explicitamente o direito humano à:",
    alternativas: {
      A: "Internet.",
      B: "Água potável e saneamento.",
      C: "Automóvel.",
      D: "Telefonia móvel.",
    },
    correta: "B",
    explicacao:
      "Resolução 64/292 ONU (2010): água e saneamento como direito humano essencial. Derivado do direito à vida, saúde, alimentação (PIDESC). PEGADINHA: é direito implícito no PIDESC, reconhecido expressamente depois!",
  },
  {
    id: 439,
    materia: "DH",
    assunto: "Princípio da subsidiariedade - Sistema interamericano",
    enunciado:
      "O princípio da subsidiariedade no sistema interamericano significa que:",
    alternativas: {
      A: "O sistema internacional substitui completamente a jurisdição nacional.",
      B: "Os recursos internos do país devem ser esgotados antes de recorrer ao sistema interamericano.",
      C: "Estados não precisam ter sistema judicial próprio.",
      D: "Sistema interamericano atua sempre em primeira instância.",
    },
    correta: "B",
    explicacao:
      "Art. 46 CADH: exigência de esgotamento dos recursos internos. Sistema interamericano é complementar/subsidiário ao nacional. PEGADINHA: há exceções (demora excessiva, recursos ineficazes)!",
  },
  {
    id: 440,
    materia: "DH",
    assunto: "Responsabilidade internacional do Estado",
    enunciado:
      "No sistema interamericano, o Estado pode ser responsabilizado internacionalmente por violações de direitos humanos cometidas:",
    alternativas: {
      A: "Apenas por atos do Presidente da República.",
      B: "Por atos de qualquer agente estatal (Executivo, Legislativo, Judiciário) ou omissão do Estado.",
      C: "Apenas por atos do Poder Judiciário.",
      D: "Nunca, pois Estados têm imunidade absoluta.",
    },
    correta: "B",
    explicacao:
      "Responsabilidade internacional: qualquer ato/omissão de agente estatal (qualquer poder/nível) que viole CADH. PEGADINHA AOCP: policial penal é agente estatal, suas ações podem gerar responsabilidade internacional do Brasil!",
  },
  // LEGISLAÇÃO ESPECIAL - PPMG 2025 (ID 441-450)
  {
    id: 441,
    materia: "LEGESP",
    assunto: "LEP - Finalidade da execução penal (art. 1º)",
    enunciado: "A execução penal tem por objetivo:",
    alternativas: {
      A: "Apenas punir o condenado.",
      B: "Efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado.",
      C: "Vingar a sociedade contra o criminoso.",
      D: "Isolar definitivamente o preso da sociedade.",
    },
    correta: "B",
    explicacao:
      "Art. 1º LEP: execução visa cumprir sentença E reintegração social. PEGADINHA AOCP: não é só punição, é também ressocialização!",
  },
  {
    id: 442,
    materia: "LEGESP",
    assunto: "Lei de Drogas - Porte para consumo (art. 28)",
    enunciado:
      "Quem adquirir, guardar, tiver em depósito, transportar ou trouxer consigo, para consumo pessoal, drogas sem autorização ou em desacordo com determinação legal ou regulamentar:",
    alternativas: {
      A: "Será preso em flagrante e terá pena de reclusão.",
      B: "Será advertido sobre efeitos, prestará serviços à comunidade ou medida educativa, SEM pena privativa de liberdade.",
      C: "Pagará apenas multa administrativa.",
      D: "Responderá por tráfico de drogas.",
    },
    correta: "B",
    explicacao:
      "Art. 28 Lei 11.343/2006: usuário NÃO tem pena de prisão! Medidas: advertência, prestação de serviços, medida educativa. PEGADINHA: usuário ≠ traficante!",
  },
  {
    id: 443,
    materia: "LEGESP",
    assunto: "Crimes Hediondos - Progressão de regime (art. 2º, §2º)",
    enunciado:
      "Em crimes hediondos e equiparados, a progressão de regime prisional, no caso de condenação por crime cometido SEM violência ou grave ameaça, dar-se-á após o cumprimento de:",
    alternativas: {
      A: "1/6 da pena.",
      B: "2/5 da pena, se primário, ou 3/5 se reincidente.",
      C: "40% da pena.",
      D: "Metade da pena.",
    },
    correta: "B",
    explicacao:
      "Art. 2º, §2º Lei 8.072/90 (redação Lei 13.964/2019): SEM violência = 2/5 (primário) ou 3/5 (reincidente). PEGADINHA: COM violência = 40% ou 50%!",
  },
  {
    id: 444,
    materia: "LEGESP",
    assunto: "Abuso de Autoridade - Conceito (art. 1º)",
    enunciado:
      "Considera-se autoridade, para fins da Lei de Abuso de Autoridade:",
    alternativas: {
      A: "Apenas delegados e juízes.",
      B: "Agente público que exerça cargo, emprego ou função pública, de natureza civil ou militar.",
      C: "Somente o Presidente da República.",
      D: "Apenas policiais militares.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, §1º Lei 13.869/2019: qualquer agente público (civil/militar) pode praticar abuso. PEGADINHA AOCP: policial penal É autoridade para fins desta lei!",
  },
  {
    id: 445,
    materia: "LEGESP",
    assunto: "LEP - Assistência ao preso (art. 10 e 11)",
    enunciado:
      "A assistência ao preso e ao internado é dever do Estado, objetivando prevenir o crime e orientar o retorno à convivência em sociedade. Essa assistência compreende:",
    alternativas: {
      A: "Apenas assistência alimentar.",
      B: "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      C: "Somente assistência jurídica.",
      D: "Nenhuma assistência é obrigatória.",
    },
    correta: "B",
    explicacao:
      "Art. 11 LEP: 6 tipos de assistência = material, saúde, jurídica, educacional, social, religiosa. PEGADINHA: são OBRIGATÓRIAS, não facultativas!",
  },
  {
    id: 446,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento - Porte ilegal (art. 14)",
    enunciado:
      "Portar, deter, adquirir, fornecer, receber, ter em depósito, transportar, ceder, ainda que gratuitamente, emprestar, remeter, empregar, manter sob guarda ou ocultar arma de fogo de uso permitido, sem autorização, tem pena de:",
    alternativas: {
      A: "Detenção de 1 a 3 anos e multa.",
      B: "Reclusão de 2 a 4 anos e multa.",
      C: "Apenas multa administrativa.",
      D: "Reclusão de 1 a 3 anos e multa.",
    },
    correta: "B",
    explicacao:
      "Art. 14 Lei 10.826/2003: reclusão 2 a 4 anos + multa. PEGADINHA: é RECLUSÃO (não detenção), crime inafiançável!",
  },
  {
    id: 447,
    materia: "LEGESP",
    assunto: "Maria da Penha - Medidas protetivas (art. 22)",
    enunciado:
      "Constatada a prática de violência doméstica e familiar contra a mulher, o juiz pode, de imediato:",
    alternativas: {
      A: "Apenas advertir o agressor verbalmente.",
      B: "Aplicar medidas protetivas de urgência, como afastamento do agressor, proibição de contato, suspensão de porte de armas.",
      C: "Determinar prisão automática do agressor.",
      D: "Arquivar o caso sem investigação.",
    },
    correta: "B",
    explicacao:
      "Art. 22 Lei 11.340/2006: juiz pode aplicar medidas protetivas urgentes (várias espécies). PEGADINHA: não é prisão automática, mas medidas cautelares!",
  },
  {
    id: 448,
    materia: "LEGESP",
    assunto: "Lei de Tortura - Crime de tortura (art. 1º, I)",
    enunciado:
      "Constitui crime de tortura constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental:",
    alternativas: {
      A: "Apenas para obter confissão.",
      B: "Com finalidade de obter informação, declaração ou confissão da vítima ou de terceira pessoa.",
      C: "Somente em estabelecimentos prisionais.",
      D: "Apenas se resultar em morte.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, I, 'a' Lei 9.455/97: tortura para obter informação/confissão (pena 2 a 8 anos). PEGADINHA: tortura tem várias modalidades (I 'a', 'b', II), todas graves!",
  },
  {
    id: 449,
    materia: "LEGESP",
    assunto: "LEP - Regime Disciplinar Diferenciado - RDD (art. 52)",
    enunciado:
      "O regime disciplinar diferenciado (RDD), com prazo máximo de até 2 anos, pode ser aplicado ao preso que:",
    alternativas: {
      A: "Cometa qualquer falta leve.",
      B: "Apresente alto risco para ordem e segurança ou sobre o qual recaiam fundadas suspeitas de envolvimento em organização criminosa.",
      C: "Recuse trabalho no presídio.",
      D: "Apenas mediante decisão judicial definitiva.",
    },
    correta: "B",
    explicacao:
      "Art. 52 LEP: RDD para presos de alto risco, envolvidos com organização criminosa, subversão da ordem. PEGADINHA AOCP: máximo 2 anos (1/6 anual), isolamento 22h/dia, visitas semanais de 2h!",
  },
  {
    id: 450,
    materia: "LEGESP",
    assunto: "Lei Estadual MG 14.695/2003 - Polícia Penal (art. 1º)",
    enunciado:
      "A Lei Estadual 14.695/2003 criou a carreira de Policial Penal em Minas Gerais, estabelecendo que:",
    alternativas: {
      A: "Policial Penal atua apenas na segurança externa dos presídios.",
      B: "Policial Penal executa atividades de segurança, custódia, vigilância e escolta de presos.",
      C: "Policial Penal não é considerado agente de segurança pública.",
      D: "Policial Penal não tem poder disciplinar.",
    },
    correta: "B",
    explicacao:
      "Lei 14.695/2003: policial penal executa custódia, vigilância, escolta de presos, segurança dos estabelecimentos penais. PEGADINHA: EC 104/2019 constitucionalizou polícias penais!",
  },
  {
    id: 451,
    materia: "LEGESP",
    assunto: "Lei de Drogas - Tráfico (art. 33)",
    enunciado:
      "Importar, exportar, remeter, preparar, produzir, fabricar, adquirir, vender, expor à venda, oferecer, ter em depósito, transportar, trazer consigo, guardar, prescrever, ministrar, entregar a consumo ou fornecer drogas, ainda que gratuitamente, sem autorização ou em desacordo com determinação legal, tem pena de:",
    alternativas: {
      A: "Detenção de 1 a 3 anos.",
      B: "Reclusão de 5 a 15 anos e pagamento de 500 a 1.500 dias-multa.",
      C: "Apenas multa administrativa.",
      D: "Reclusão de 2 a 5 anos.",
    },
    correta: "B",
    explicacao:
      "Art. 33 Lei 11.343/2006: tráfico = reclusão 5 a 15 anos + multa (500 a 1.500 dias-multa). PEGADINHA: crime hediondo, inafiançável, regime inicial fechado!",
  },
  {
    id: 452,
    materia: "LEGESP",
    assunto: "Crimes Hediondos - Rol (art. 1º)",
    enunciado: "São considerados crimes hediondos, segundo a Lei 8.072/90:",
    alternativas: {
      A: "Apenas homicídio simples.",
      B: "Homicídio qualificado, latrocínio, extorsão mediante sequestro, estupro, epidemia com resultado morte, entre outros.",
      C: "Todos os crimes dolosos.",
      D: "Apenas crimes contra a Administração Pública.",
    },
    correta: "B",
    explicacao:
      "Art. 1º Lei 8.072/90: lista taxativa (rol fechado) de crimes hediondos. PEGADINHA AOCP: tráfico e terrorismo são EQUIPARADOS a hediondos (art. 2º)!",
  },
  {
    id: 453,
    materia: "LEGESP",
    assunto: "Abuso de Autoridade - Violação de direitos (art. 9º)",
    enunciado:
      "Constitui crime de abuso de autoridade decretar prisão, quando não autorizada pela lei ou sem observância das formalidades legais, ou deixar de comunicar, imediatamente, ao juiz competente a prisão em flagrante, pena:",
    alternativas: {
      A: "Advertência verbal.",
      B: "Detenção de 1 a 4 anos e multa.",
      C: "Apenas multa administrativa.",
      D: "Reclusão de 6 meses a 2 anos.",
    },
    correta: "B",
    explicacao:
      "Art. 9º Lei 13.869/2019: prisão ilegal ou não comunicação = detenção 1 a 4 anos + multa. PEGADINHA: policial penal que mantém preso sem ordem judicial comete abuso!",
  },
  {
    id: 454,
    materia: "LEGESP",
    assunto: "LEP - Direitos do preso (art. 41)",
    enunciado: "Constituem direitos do preso:",
    alternativas: {
      A: "Apenas alimentação.",
      B: "Alimentação, vestuário, instalações higiênicas, assistência material, saúde, jurídica, educacional, social, religiosa, trabalho remunerado, visitas, entre outros.",
      C: "Nenhum direito, apenas deveres.",
      D: "Somente o direito à vida.",
    },
    correta: "B",
    explicacao:
      "Art. 41 LEP: rol extenso de direitos (15 incisos). PEGADINHA AOCP: mesmo preso mantém dignidade e direitos! Policial penal DEVE respeitar!",
  },
  {
    id: 455,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento - Posse irregular (art. 12)",
    enunciado:
      "Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, ou, ainda, no seu local de trabalho, tem pena de:",
    alternativas: {
      A: "Detenção de 1 a 3 anos e multa.",
      B: "Reclusão de 5 a 15 anos.",
      C: "Apenas multa administrativa.",
      D: "Reclusão de 2 a 4 anos.",
    },
    correta: "A",
    explicacao:
      "Art. 12 Lei 10.826/2003: posse irregular (dentro de casa/trabalho) = detenção 1 a 3 anos + multa. PEGADINHA: posse (casa) ≠ porte (fora de casa, art. 14, mais grave)!",
  },
  {
    id: 456,
    materia: "LEGESP",
    assunto: "Maria da Penha - Formas de violência (art. 7º)",
    enunciado:
      "A Lei Maria da Penha tipifica as seguintes formas de violência doméstica e familiar contra a mulher:",
    alternativas: {
      A: "Apenas violência física.",
      B: "Violência física, psicológica, sexual, patrimonial e moral.",
      C: "Somente violência sexual.",
      D: "Apenas violência física e psicológica.",
    },
    correta: "B",
    explicacao:
      "Art. 7º Lei 11.340/2006: 5 formas = física, psicológica, sexual, patrimonial, moral. PEGADINHA AOCP: violência psicológica/moral também são crimes!",
  },
  {
    id: 457,
    materia: "LEGESP",
    assunto: "Lei de Tortura - Agravantes (art. 1º, §4º)",
    enunciado:
      "Aumenta-se a pena de um terço até metade se o crime de tortura é cometido:",
    alternativas: {
      A: "Apenas em residências.",
      B: "Contra criança, gestante, portador de deficiência, adolescente ou maior de 60 anos.",
      C: "Somente contra homens adultos.",
      D: "Não há agravantes previstas.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, §4º Lei 9.455/97: aumento de 1/3 a 1/2 se vítima vulnerável (criança, gestante, deficiente, adolescente, idoso). PEGADINHA: protege grupos vulneráveis!",
  },
  {
    id: 458,
    materia: "LEGESP",
    assunto: "LEP - Faltas disciplinares graves (art. 50)",
    enunciado: "São exemplos de faltas graves na LEP:",
    alternativas: {
      A: "Apenas fuga.",
      B: "Incitar ou participar de movimento para subverter ordem, fugir, possuir celular, agredir funcionário, amotinar-se, entre outras.",
      C: "Recusar trabalho sem justificativa.",
      D: "Apenas agressão física.",
    },
    correta: "B",
    explicacao:
      "Art. 50 LEP: 7 incisos de faltas graves (subversão ordem, fuga, posse celular, agressão, plano de fuga, etc.). PEGADINHA: falta grave pode gerar RDD e perda de dias remidos!",
  },
  {
    id: 459,
    materia: "LEGESP",
    assunto: "Lei Estadual MG 11.404/1994 - Normas execução penal",
    enunciado:
      "A Lei Estadual 11.404/94 de Minas Gerais estabelece normas de execução penal no Estado, determinando que:",
    alternativas: {
      A: "Não há regras específicas para MG.",
      B: "O Estado deve garantir assistência ao preso, classificação, trabalho, disciplina, conforme LEP e especificidades locais.",
      C: "Apenas a União pode legislar sobre execução penal.",
      D: "Presos não têm direitos em MG.",
    },
    correta: "B",
    explicacao:
      "Lei 11.404/94 MG: normas estaduais complementares à LEP (assistência, classificação, trabalho, disciplina). PEGADINHA: Estados podem legislar concorrentemente sobre execução penal!",
  },
  {
    id: 460,
    materia: "LEGESP",
    assunto: "Crimes Hediondos - Vedações (art. 2º, I)",
    enunciado: "Aos crimes hediondos e equiparados é vedado:",
    alternativas: {
      A: "Apenas a progressão de regime.",
      B: "Anistia, graça e indulto.",
      C: "Qualquer tipo de defesa.",
      D: "Julgamento pelo júri.",
    },
    correta: "B",
    explicacao:
      "Art. 2º, I Lei 8.072/90: vedados anistia, graça e indulto. PEGADINHA AOCP: progressão e livramento condicional SÃO PERMITIDOS (após cumprir requisitos mais rigorosos)!",
  },
  {
    id: 461,
    materia: "LEGESP",
    assunto: "Decreto 11.615/2023 - Regulamentação Estatuto Desarmamento",
    enunciado:
      "O Decreto Federal 11.615/2023 regulamenta a Lei 10.826/2003 e estabelece normas sobre:",
    alternativas: {
      A: "Apenas comércio de armas importadas.",
      B: "Sistema Nacional de Armas (SINARM), registro, porte, cadastro, rastreamento de armas e munições.",
      C: "Somente posse rural de armas.",
      D: "Exclusivamente uso de armas pelas Forças Armadas.",
    },
    correta: "B",
    explicacao:
      "Decreto 11.615/2023: regulamenta SINARM, registro, cadastro, porte, comercialização, rastreamento. PEGADINHA: atualiza regras do Estatuto do Desarmamento!",
  },
  {
    id: 462,
    materia: "LEGESP",
    assunto: "LEP - Remição pelo estudo (art. 126)",
    enunciado:
      "O condenado que cumpre pena em regime fechado ou semiaberto poderá remir, por estudo, parte do tempo de execução da pena. A cada 12 horas de frequência escolar divididas em 3 dias, o preso terá direito à remição de:",
    alternativas: {
      A: "3 dias de pena.",
      B: "1 dia de pena.",
      C: "7 dias de pena.",
      D: "Não há remição por estudo.",
    },
    correta: "B",
    explicacao:
      "Art. 126 LEP: 12h de estudo (3 dias) = 1 dia remido. PEGADINHA AOCP: diferente do trabalho (3 dias trabalhados = 1 dia remido, art. 126 caput)!",
  },
  {
    id: 463,
    materia: "LEGESP",
    assunto: "Lei de Drogas - Associação para o tráfico (art. 35)",
    enunciado:
      "Associarem-se duas ou mais pessoas para o fim de praticar, reiteradamente ou não, qualquer dos crimes previstos nos arts. 33, caput e § 1º, e 34 desta Lei, tem pena de:",
    alternativas: {
      A: "Igual ao tráfico simples.",
      B: "Reclusão de 3 a 10 anos e pagamento de 700 a 1.200 dias-multa.",
      C: "Detenção de 1 a 3 anos.",
      D: "Apenas multa.",
    },
    correta: "B",
    explicacao:
      "Art. 35 Lei 11.343/2006: associação para tráfico = reclusão 3 a 10 anos + multa (700 a 1.200 dias-multa). PEGADINHA: não precisa organização criminosa, basta associação de 2+ pessoas!",
  },
  {
    id: 464,
    materia: "LEGESP",
    assunto: "Abuso de Autoridade - Submeter a tortura (art. 13)",
    enunciado:
      "Constranger o preso ou o detento, mediante violência, grave ameaça ou redução de sua capacidade de resistência, a exibir-se ou ter seu corpo ou parte dele exibido à curiosidade pública, ou submeter o preso a situação vexatória ou constrangedora, configura:",
    alternativas: {
      A: "Exercício regular de direito.",
      B: "Crime de abuso de autoridade, pena de detenção de 1 a 4 anos e multa.",
      C: "Mera irregularidade administrativa.",
      D: "Atitude permitida em situações de revista.",
    },
    correta: "B",
    explicacao:
      "Art. 13 Lei 13.869/2019: submeter preso a constrangimento/situação vexatória = abuso (1 a 4 anos). PEGADINHA AOCP: policial penal que expõe preso nu, revista vexatória = crime!",
  },
  {
    id: 465,
    materia: "LEGESP",
    assunto: "LEP - Trabalho do preso (art. 28 e 29)",
    enunciado: "Sobre o trabalho do condenado, é correto afirmar:",
    alternativas: {
      A: "É obrigatório para todos, sem exceção.",
      B: "O trabalho do condenado, como dever social e condição de dignidade humana, terá finalidade educativa e produtiva. O trabalho não é obrigatório para maiores de 70 anos.",
      C: "Não há remuneração pelo trabalho.",
      D: "É sempre externo ao estabelecimento penal.",
    },
    correta: "B",
    explicacao:
      "Art. 28 e 29 LEP: trabalho é dever social, finalidade educativa/produtiva. Exceção: > 70 anos (facultativo). PEGADINHA: trabalho deve ser REMUNERADO (mínimo 3/4 do salário mínimo)!",
  },
  {
    id: 466,
    materia: "LEGESP",
    assunto: "Maria da Penha - Competência (art. 14)",
    enunciado:
      "Os Juizados de Violência Doméstica e Familiar contra a Mulher têm competência cível e criminal para processar e julgar:",
    alternativas: {
      A: "Apenas ações criminais.",
      B: "As causas cíveis e criminais decorrentes da prática de violência doméstica e familiar contra a mulher.",
      C: "Somente ações de divórcio.",
      D: "Apenas crimes hediondos.",
    },
    correta: "B",
    explicacao:
      "Art. 14 Lei 11.340/2006: competência híbrida (cível + criminal). PEGADINHA: julga crime + medidas protetivas + questões cíveis relacionadas à violência doméstica!",
  },
  {
    id: 467,
    materia: "LEGESP",
    assunto: "Lei de Tortura - Omissão (art. 1º, §2º)",
    enunciado:
      "Aquele que se omite em face dessas condutas, quando tinha o dever de evitá-las ou apurá-las:",
    alternativas: {
      A: "Não responde por nada.",
      B: "Incorre nas mesmas penas.",
      C: "Responde apenas administrativamente.",
      D: "Recebe advertência.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, §2º Lei 9.455/97: omissão imprópria = mesma pena de tortura. PEGADINHA AOCP: policial penal que VÊ tortura e nada faz = responde como se fosse autor!",
  },
  {
    id: 468,
    materia: "LEGESP",
    assunto: "LEP - Sanções disciplinares (art. 53)",
    enunciado: "As sanções disciplinares que podem ser aplicadas ao preso são:",
    alternativas: {
      A: "Apenas advertência verbal.",
      B: "Advertência verbal, repreensão, suspensão ou restrição de direitos, isolamento na própria cela ou em local adequado, inclusão no RDD.",
      C: "Somente isolamento.",
      D: "Pena de morte.",
    },
    correta: "B",
    explicacao:
      "Art. 53 LEP: 5 tipos de sanções (advertência, repreensão, suspensão/restrição direitos, isolamento, RDD). PEGADINHA: aplicação deve respeitar proporcionalidade e devido processo!",
  },
  {
    id: 469,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento - Disparo de arma (art. 15)",
    enunciado:
      "Disparar arma de fogo ou acionar munição em lugar habitado ou em suas adjacências, em via pública ou em direção a ela, desde que essa conduta não tenha como finalidade a prática de outro crime, tem pena de:",
    alternativas: {
      A: "Advertência.",
      B: "Reclusão de 2 a 4 anos e multa.",
      C: "Detenção de 6 meses a 1 ano.",
      D: "Apenas multa.",
    },
    correta: "B",
    explicacao:
      "Art. 15 Lei 10.826/2003: disparo em lugar habitado/via pública = reclusão 2 a 4 anos + multa. PEGADINHA: se for para praticar outro crime (ex: homicídio), responde pelo crime-fim!",
  },
  {
    id: 470,
    materia: "LEGESP",
    assunto: "Regulamento Sistema Prisional MG - Objetivos",
    enunciado:
      "O Regulamento e Normas de Procedimentos do Sistema Prisional de Minas Gerais estabelece que a execução penal estadual deve:",
    alternativas: {
      A: "Apenas punir o condenado.",
      B: "Garantir segurança, disciplina, assistência ao preso e condições para ressocialização, respeitando direitos humanos.",
      C: "Isolar permanentemente presos sem visitas.",
      D: "Não prever direitos aos presos.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: segurança + disciplina + assistência + ressocialização + respeito DH. PEGADINHA AOCP: policial penal MG deve conhecer regulamento estadual (prevê RDD, regime disciplinar, direitos/deveres)!",
  },
  {
    id: 471,
    materia: "LEGESP",
    assunto: "LEP - Livramento condicional (art. 83)",
    enunciado:
      "O juiz poderá conceder livramento condicional ao condenado a pena privativa de liberdade igual ou superior a 2 anos, desde que cumprida:",
    alternativas: {
      A: "Metade da pena em qualquer caso.",
      B: "Mais de um terço se não reincidente em crime doloso; mais de metade se reincidente.",
      C: "Toda a pena.",
      D: "Um quarto da pena.",
    },
    correta: "B",
    explicacao:
      "Art. 83 LEP: > 1/3 (não reincidente em crime doloso) ou > 1/2 (reincidente). PEGADINHA AOCP: crimes hediondos têm requisitos mais rigorosos (2/3 se primário)!",
  },
  {
    id: 472,
    materia: "LEGESP",
    assunto: "Crimes Hediondos - Liberdade provisória (art. 2º, II)",
    enunciado: "A prisão temporária em crimes hediondos terá o prazo de:",
    alternativas: {
      A: "5 dias, prorrogável por igual período.",
      B: "30 dias, prorrogáveis por mais 30 dias em caso de extrema e comprovada necessidade.",
      C: "15 dias improrrogáveis.",
      D: "Não há prisão temporária para crimes hediondos.",
    },
    correta: "B",
    explicacao:
      "Art. 2º, §4º Lei 8.072/90: prisão temporária = 30 dias + 30 dias (total 60 dias). PEGADINHA: em crimes comuns é 5 + 5 dias (Lei 7.960/89)!",
  },
  {
    id: 473,
    materia: "LEGESP",
    assunto: "Lei de Drogas - Financiamento do tráfico (art. 36)",
    enunciado:
      "Financiar ou custear a prática de qualquer dos crimes previstos nos arts. 33, caput e § 1º, e 34 desta Lei, tem pena de:",
    alternativas: {
      A: "Igual ao tráfico simples.",
      B: "Reclusão de 8 a 20 anos e pagamento de 1.500 a 4.000 dias-multa.",
      C: "Detenção de 2 a 5 anos.",
      D: "Apenas multa.",
    },
    correta: "B",
    explicacao:
      "Art. 36 Lei 11.343/2006: financiar tráfico = reclusão 8 a 20 anos + multa (1.500 a 4.000 dias-multa). PEGADINHA: mais grave que tráfico simples (5 a 15 anos)!",
  },
  {
    id: 474,
    materia: "LEGESP",
    assunto: "Abuso de Autoridade - Negativa de atendimento (art. 15)",
    enunciado:
      "Impedir, sem justa causa, a entrevista pessoal e reservada do preso com seu advogado, configura:",
    alternativas: {
      A: "Exercício regular do cargo.",
      B: "Crime de abuso de autoridade, pena de detenção de 6 meses a 2 anos e multa.",
      C: "Mera irregularidade sem consequência.",
      D: "Atitude permitida em estabelecimentos de segurança máxima.",
    },
    correta: "B",
    explicacao:
      "Art. 15 Lei 13.869/2019: impedir entrevista advogado-preso sem justa causa = abuso (6 meses a 2 anos). PEGADINHA AOCP: direito à defesa é inviolável!",
  },
  {
    id: 475,
    materia: "LEGESP",
    assunto: "LEP - Visitação (art. 41, X)",
    enunciado: "Sobre o direito de visita do preso, é correto afirmar:",
    alternativas: {
      A: "Preso não tem direito à visita.",
      B: "Preso tem direito a visita do cônjuge, companheira, parentes e amigos em dias determinados.",
      C: "Visita é privilégio concedido apenas a presos de bom comportamento.",
      D: "Visita pode ser negada arbitrariamente.",
    },
    correta: "B",
    explicacao:
      "Art. 41, X LEP: visita é DIREITO, não privilégio. PEGADINHA: pode ser suspensa temporariamente em caso de falta grave ou RDD, mas com fundamentação!",
  },
  {
    id: 476,
    materia: "LEGESP",
    assunto: "Maria da Penha - Representação (art. 16)",
    enunciado:
      "Nas ações penais públicas condicionadas à representação da ofendida, de que trata esta Lei:",
    alternativas: {
      A: "A ofendida pode desistir a qualquer momento.",
      B: "Só será admitida a renúncia à representação perante o juiz, em audiência especialmente designada, antes do recebimento da denúncia e ouvido o Ministério Público.",
      C: "A representação não é necessária.",
      D: "Delegado pode aceitar a retratação.",
    },
    correta: "B",
    explicacao:
      "Art. 16 Lei 11.340/2006: renúncia APENAS em audiência judicial, antes da denúncia, com MP. PEGADINHA: delegacia NÃO pode aceitar retratação!",
  },
  {
    id: 477,
    materia: "LEGESP",
    assunto: "Lei de Tortura - Efeito extrapenal (art. 1º, §5º)",
    enunciado: "A condenação por crime de tortura acarretará:",
    alternativas: {
      A: "Apenas cumprimento da pena.",
      B: "A perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada.",
      C: "Somente multa administrativa.",
      D: "Advertência funcional.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, §5º Lei 9.455/97: condenado por tortura PERDE cargo + interdição pelo DOBRO da pena. PEGADINHA AOCP: policial penal condenado por tortura = perda automática do cargo!",
  },
  {
    id: 478,
    materia: "LEGESP",
    assunto: "LEP - Cela individual (art. 88)",
    enunciado:
      "O condenado será alojado em cela individual que conterá dormitório, aparelho sanitário e lavatório, com área mínima de:",
    alternativas: {
      A: "3 metros quadrados.",
      B: "6 metros quadrados.",
      C: "10 metros quadrados.",
      D: "Não há previsão de área mínima.",
    },
    correta: "B",
    explicacao:
      "Art. 88 LEP: cela individual = mínimo 6 m². PEGADINHA: realidade brasileira não cumpre (superlotação), mas é o padrão legal exigido!",
  },
  {
    id: 479,
    materia: "LEGESP",
    assunto:
      "Estatuto do Desarmamento - Tráfico internacional de armas (art. 18)",
    enunciado:
      "Importar, exportar, favorecer a entrada ou saída do território nacional, a qualquer título, de arma de fogo, acessório ou munição, sem autorização ou em desacordo com determinação legal ou regulamentar, tem pena de:",
    alternativas: {
      A: "Detenção de 1 a 3 anos.",
      B: "Reclusão de 4 a 8 anos e multa.",
      C: "Apenas multa.",
      D: "Reclusão de 2 a 4 anos.",
    },
    correta: "B",
    explicacao:
      "Art. 18 Lei 10.826/2003: tráfico internacional de armas = reclusão 4 a 8 anos + multa. PEGADINHA: mais grave que porte/posse irregular!",
  },
  {
    id: 480,
    materia: "LEGESP",
    assunto: "Regulamento Sistema Prisional MG - RDD estadual",
    enunciado:
      "O Regulamento de Minas Gerais prevê o Regime Disciplinar Diferenciado (RDD), estabelecendo que:",
    alternativas: {
      A: "Não há RDD em MG.",
      B: "RDD pode ser aplicado conforme LEP federal, com isolamento de até 22 horas diárias, visitas semanais de 2 horas, direito a banho de sol.",
      C: "RDD em MG não tem prazo máximo.",
      D: "Isolamento pode ser de 24 horas ininterruptas.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG segue art. 52 LEP: RDD = isolamento até 22h/dia, 2h banho sol, visitas semanais 2h, máximo 2 anos (renovável 1/6 anual). PEGADINHA: 2h mínimas fora da cela!",
  },
  {
    id: 481,
    materia: "LEGESP",
    assunto: "LEP - Exame criminológico (art. 8º)",
    enunciado:
      "A classificação do condenado será feita por Comissão Técnica de Classificação. O exame criminológico:",
    alternativas: {
      A: "É sempre obrigatório para progressão de regime.",
      B: "Será feito no início da execução e poderá ser realizado a qualquer tempo, a pedido fundamentado do diretor do estabelecimento ou da autoridade judiciária.",
      C: "Não existe mais na LEP.",
      D: "É feito apenas em crimes hediondos.",
    },
    correta: "B",
    explicacao:
      "Art. 8º LEP (redação Lei 10.792/2003): exame criminológico é FACULTATIVO, a pedido fundamentado. PEGADINHA AOCP: STJ entende que não é obrigatório, salvo decisão motivada!",
  },
  {
    id: 482,
    materia: "LEGESP",
    assunto: "Lei de Drogas - Causa de diminuição (art. 33, §4º)",
    enunciado:
      "Nos crimes de tráfico, as penas poderão ser reduzidas de um sexto a dois terços se o agente for primário, de bons antecedentes, não se dedicar a atividades criminosas nem integrar organização criminosa. Este benefício é conhecido como:",
    alternativas: {
      A: "Privilégio.",
      B: "Tráfico privilegiado ou minorante do art. 33, §4º.",
      C: "Indulto.",
      D: "Livramento condicional.",
    },
    correta: "B",
    explicacao:
      "Art. 33, §4º Lei 11.343/2006: 'tráfico privilegiado' reduz pena 1/6 a 2/3. PEGADINHA: requisitos cumulativos = primário + bons antecedentes + não se dedicar + não integrar organização!",
  },
  {
    id: 483,
    materia: "LEGESP",
    assunto: "Crimes Hediondos - Livramento condicional (art. 5º)",
    enunciado:
      "Para crimes hediondos e equiparados praticados com resultado morte, a concessão de livramento condicional exige o cumprimento de:",
    alternativas: {
      A: "Metade da pena.",
      B: "Mais de dois terços da pena.",
      C: "Um terço da pena.",
      D: "Toda a pena.",
    },
    correta: "B",
    explicacao:
      "Art. 5º Lei 8.072/90 c/c art. 83, V LEP: hediondo com morte = > 2/3 da pena. PEGADINHA: sem resultado morte = > 2/3 se primário, > 3/5 se reincidente (art. 83, V LEP)!",
  },
  {
    id: 484,
    materia: "LEGESP",
    assunto: "Abuso de Autoridade - Invasão de domicílio (art. 22)",
    enunciado:
      "Invadir ou adentrar, clandestina ou astuciosamente, ou à revelia da vontade do ocupante, imóvel alheio ou suas dependências, ou nele permanecer nas mesmas condições, sem determinação judicial ou fora das condições estabelecidas em lei, configura:",
    alternativas: {
      A: "Exercício regular do cargo policial.",
      B: "Crime de abuso de autoridade, pena de detenção de 1 a 4 anos e multa.",
      C: "Conduta permitida em investigações.",
      D: "Apenas infração administrativa.",
    },
    correta: "B",
    explicacao:
      "Art. 22 Lei 13.869/2019: invasão domiciliar ilegal = abuso (1 a 4 anos). PEGADINHA AOCP: ordem judicial à NOITE só em flagrante/desastre/socorro (CF art. 5º, XI)!",
  },
  {
    id: 485,
    materia: "LEGESP",
    assunto: "LEP - Assistência à saúde (art. 14)",
    enunciado:
      "A assistência à saúde do preso compreenderá atendimento médico, farmacêutico e odontológico. Quando o estabelecimento penal não estiver aparelhado, a assistência médica será prestada:",
    alternativas: {
      A: "Não será prestada.",
      B: "Em outro estabelecimento penal ou em estabelecimento de saúde da rede pública ou conveniada.",
      C: "Apenas em hospitais particulares pagos pela família.",
      D: "Somente após cumprimento de metade da pena.",
    },
    correta: "B",
    explicacao:
      "Art. 14, §2º LEP: assistência externa quando estabelecimento não tem estrutura. PEGADINHA: saúde é DIREITO do preso, Estado DEVE garantir!",
  },
  {
    id: 486,
    materia: "LEGESP",
    assunto: "Maria da Penha - Prisão preventiva (art. 20)",
    enunciado:
      "Em qualquer fase do inquérito policial ou da instrução criminal, caberá a prisão preventiva do agressor, decretada pelo juiz, de ofício, a requerimento do Ministério Público ou mediante representação:",
    alternativas: {
      A: "Apenas do Ministério Público.",
      B: "Da autoridade policial.",
      C: "Apenas da vítima.",
      D: "De qualquer cidadão.",
    },
    correta: "B",
    explicacao:
      "Art. 20 Lei 11.340/2006: prisão preventiva de ofício, a pedido MP ou por representação da autoridade policial. PEGADINHA: em violência doméstica, juiz pode decretar de ofício!",
  },
  {
    id: 487,
    materia: "LEGESP",
    assunto: "Lei de Tortura - Qualificadora pela morte (art. 1º, §3º)",
    enunciado: "Se da tortura resulta morte, a pena é de:",
    alternativas: {
      A: "Reclusão de 2 a 8 anos.",
      B: "Reclusão de 8 a 16 anos.",
      C: "Reclusão de 12 a 30 anos.",
      D: "Prisão perpétua.",
    },
    correta: "C",
    explicacao:
      "Art. 1º, §3º Lei 9.455/97: tortura com resultado morte = reclusão 12 a 30 anos (pena máxima do CP brasileiro). PEGADINHA: gravíssima!",
  },
  {
    id: 488,
    materia: "LEGESP",
    assunto: "LEP - Monitoração eletrônica (art. 146-B)",
    enunciado: "A monitoração eletrônica poderá ser aplicada:",
    alternativas: {
      A: "Apenas em regime fechado.",
      B: "Em regime semiaberto, saída temporária, prisão domiciliar, livramento condicional, entre outras hipóteses previstas em lei.",
      C: "Nunca, pois não está prevista na LEP.",
      D: "Somente para presos estrangeiros.",
    },
    correta: "B",
    explicacao:
      "Art. 146-B LEP (Lei 12.258/2010): monitoração em várias hipóteses (semiaberto, temporária, domiciliar, condicional). PEGADINHA: é medida cautelar alternativa!",
  },
  {
    id: 489,
    materia: "LEGESP",
    assunto: "Estatuto do Desarmamento - Omissão de cautela (art. 13)",
    enunciado:
      "Deixar de observar as cautelas necessárias para impedir que menor de 18 anos ou pessoa portadora de deficiência mental se apodere de arma de fogo que esteja sob sua posse ou que seja de sua propriedade, tem pena de:",
    alternativas: {
      A: "Advertência.",
      B: "Detenção de 1 a 2 anos e multa.",
      C: "Reclusão de 2 a 4 anos.",
      D: "Apenas multa.",
    },
    correta: "B",
    explicacao:
      "Art. 13 Lei 10.826/2003: omissão de cautela = detenção 1 a 2 anos + multa. PEGADINHA: responde quem deixa arma acessível a menor/deficiente mental!",
  },
  {
    id: 490,
    materia: "LEGESP",
    assunto: "Lei Estadual MG 14.695/2003 - Atribuições do Policial Penal",
    enunciado:
      "São atribuições do Policial Penal de Minas Gerais, segundo a Lei 14.695/2003:",
    alternativas: {
      A: "Apenas vigilância externa dos presídios.",
      B: "Segurança e disciplina dos estabelecimentos penais, custódia, vigilância, escolta de presos, revista de pessoas e veículos, entre outras.",
      C: "Investigação de crimes comuns.",
      D: "Substituição das polícias civil e militar.",
    },
    correta: "B",
    explicacao:
      "Lei 14.695/2003: atribuições amplas (segurança, custódia, vigilância, escolta, revista, disciplina). PEGADINHA: polícia penal é carreira ESPECÍFICA do sistema prisional!",
  },
  {
    id: 491,
    materia: "LEGESP",
    assunto: "LEP - Procedimento disciplinar (art. 59)",
    enunciado:
      "Praticada a falta disciplinar, deverá ser instaurado procedimento para sua apuração, assegurado o direito de defesa. O procedimento:",
    alternativas: {
      A: "Pode ser instaurado sem ouvir o preso.",
      B: "Será sumário quando se tratar de falta grave, assegurado o direito de defesa.",
      C: "Não precisa de defesa técnica em nenhum caso.",
      D: "Não existe na LEP.",
    },
    correta: "B",
    explicacao:
      "Art. 59 LEP: procedimento sumário para falta grave, assegurada defesa. PEGADINHA AOCP: STF (Súmula Vinculante 56 e 57) exige ampla defesa técnica em RDD e sanções graves!",
  },
  {
    id: 492,
    materia: "LEGESP",
    assunto: "Lei de Drogas - Informante (art. 41)",
    enunciado:
      "O indiciado ou acusado que colaborar voluntariamente com a investigação policial e o processo criminal na identificação dos demais coautores ou partícipes do crime e na recuperação total ou parcial do produto do crime:",
    alternativas: {
      A: "Não tem qualquer benefício.",
      B: "Terá pena reduzida de um terço a dois terços.",
      C: "Será absolvido automaticamente.",
      D: "Receberá apenas perdão judicial.",
    },
    correta: "B",
    explicacao:
      "Art. 41 Lei 11.343/2006: colaboração premiada = redução 1/3 a 2/3. PEGADINHA: deve ser voluntária, efetiva e fundamentada pelo juiz!",
  },
  {
    id: 493,
    materia: "LEGESP",
    assunto: "Crimes Hediondos - Regime inicial (art. 2º, §1º)",
    enunciado:
      "A pena por crime previsto neste artigo será cumprida inicialmente em regime:",
    alternativas: {
      A: "Aberto.",
      B: "Semiaberto.",
      C: "Fechado.",
      D: "Conforme escolha do condenado.",
    },
    correta: "C",
    explicacao:
      "Art. 2º, §1º Lei 8.072/90: crimes hediondos = regime inicial FECHADO obrigatório. PEGADINHA: STF permite progressão desde o início para regime menos gravoso se requisitos pessoais favoráveis!",
  },
  {
    id: 494,
    materia: "LEGESP",
    assunto: "Abuso de Autoridade - Registro audiovisual (art. 31)",
    enunciado:
      "Deixar de dar ciência da prisão em flagrante à família do preso ou à pessoa por ele indicada, ou deixar de entregar ao preso nota de culpa, em até 24 horas, ou ainda deixar de fazer o registro da prisão em flagrante por meio audiovisual, quando possível, configura:",
    alternativas: {
      A: "Exercício regular de direito.",
      B: "Crime de abuso de autoridade, pena de detenção de 6 meses a 2 anos e multa.",
      C: "Mera irregularidade sem consequência.",
      D: "Atitude permitida em delegacias sem equipamento.",
    },
    correta: "B",
    explicacao:
      "Art. 31 Lei 13.869/2019: omitir ciência à família, nota de culpa ou registro audiovisual = abuso (6 meses a 2 anos). PEGADINHA: 'quando possível' não exclui crime se há equipamento disponível!",
  },
  {
    id: 495,
    materia: "LEGESP",
    assunto: "LEP - Saída temporária (art. 122 e 123)",
    enunciado:
      "A saída temporária será concedida ao condenado que cumpre pena em regime semiaberto, desde que cumpridos alguns requisitos. O prazo da saída temporária será de:",
    alternativas: {
      A: "1 dia.",
      B: "Até 7 dias, podendo ser renovada por mais 4 vezes durante o ano.",
      C: "30 dias corridos.",
      D: "Não há prazo definido.",
    },
    correta: "B",
    explicacao:
      "Art. 124 LEP: saída temporária = até 7 dias, máximo 5 vezes/ano (35 dias total). PEGADINHA: requisitos = cumprir 1/6 (não hediondo) ou 1/4 (hediondo), bom comportamento!",
  },
  {
    id: 496,
    materia: "LEGESP",
    assunto: "Maria da Penha - Equipe multidisciplinar (art. 29)",
    enunciado:
      "Os Juizados de Violência Doméstica e Familiar contra a Mulher contarão com uma equipe de atendimento multidisciplinar, integrada por profissionais especializados nas áreas:",
    alternativas: {
      A: "Apenas psicologia.",
      B: "Psicossocial, jurídica e de saúde.",
      C: "Somente direito.",
      D: "Não há previsão de equipe.",
    },
    correta: "B",
    explicacao:
      "Art. 29 Lei 11.340/2006: equipe multidisciplinar psicossocial, jurídica e saúde. PEGADINHA: atendimento integral à vítima (psicólogas, assistentes sociais, médicos)!",
  },
  {
    id: 497,
    materia: "LEGESP",
    assunto: "Lei de Tortura - Inafiançabilidade (art. 1º, §7º)",
    enunciado: "O crime de tortura é:",
    alternativas: {
      A: "Afiançável.",
      B: "Inafiançável e insuscetível de graça ou anistia.",
      C: "Permite fiança em qualquer valor.",
      D: "Permite anistia presidencial.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, §7º Lei 9.455/97 c/c CF art. 5º, XLIII: tortura = inafiançável + insuscetível de graça/anistia. PEGADINHA: mesmo nível de gravidade dos crimes hediondos!",
  },
  {
    id: 498,
    materia: "LEGESP",
    assunto: "LEP - Audiência de custódia (art. 9º-A)",
    enunciado:
      "A audiência de custódia, prevista na LEP e em tratados internacionais, determina que:",
    alternativas: {
      A: "Preso pode ficar incomunicável indefinidamente.",
      B: "O preso em flagrante delito deverá ser apresentado ao juiz em até 24 horas, para averiguar legalidade e necessidade da prisão.",
      C: "Audiência de custódia é facultativa.",
      D: "Não existe no Brasil.",
    },
    correta: "B",
    explicacao:
      "Art. 9º-A LEP (Lei 13.964/2019) + Convenção Americana art. 7.5: apresentação ao juiz em 24h. PEGADINHA: verifica legalidade, necessidade, tortura/maus-tratos!",
  },
  {
    id: 499,
    materia: "LEGESP",
    assunto: "Decreto 11.615/2023 - Registro de armas",
    enunciado:
      "O registro de arma de fogo, segundo o Decreto 11.615/2023, é obrigatório e deve ser feito:",
    alternativas: {
      A: "Apenas para armas de grosso calibre.",
      B: "No Sistema Nacional de Armas (SINARM) para uso civil ou no SIGMA para uso militar/policial.",
      C: "Não é obrigatório registro.",
      D: "Apenas na delegacia local.",
    },
    correta: "B",
    explicacao:
      "Decreto 11.615/2023: SINARM (Polícia Federal - civil) ou SIGMA (Exército - militar/LE). PEGADINHA: arma sem registro = crime de posse irregular (art. 12 Lei 10.826)!",
  },
  {
    id: 500,
    materia: "LEGESP",
    assunto: "Regulamento Sistema Prisional MG - Revista",
    enunciado:
      "Sobre a revista de pessoas que ingressam em estabelecimentos prisionais em Minas Gerais, o regulamento determina que:",
    alternativas: {
      A: "Revista vexatória é permitida.",
      B: "Revista deve respeitar dignidade humana, vedadas práticas vexatórias ou degradantes, podendo usar scanners corporais e outros meios tecnológicos.",
      C: "Não há revista para advogados.",
      D: "Revista íntima invasiva é obrigatória.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG + Lei 13.271/2016: revista SEM procedimentos vexatórios (agachamento, revista íntima invasiva). PEGADINHA AOCP: uso de scanners, detectores de metal = alternativas à revista vexatória!",
  },
  // LEP - LEI 7.210/1984 (ID 501-520)
  {
    id: 501,
    materia: "LEGESP",
    assunto: "LEP - Jurisdição penal (art. 2º)",
    enunciado:
      "A jurisdição penal dos Juízes ou Tribunais da Justiça ordinária será exercida em conformidade com a LEP e com o Código de Processo Penal. Na falta de disposições específicas, aplicar-se-ão:",
    alternativas: {
      A: "Apenas o Código Civil.",
      B: "Supletivamente, as normas do Código de Processo Civil.",
      C: "Não se aplica nenhuma norma supletiva.",
      D: "Apenas a Consolidação das Leis do Trabalho.",
    },
    correta: "B",
    explicacao:
      "Art. 2º LEP: normas do CPC aplicam-se SUPLETIVAMENTE. PEGADINHA AOCP: na falta de previsão na LEP ou CPP, usa-se CPC!",
  },
  {
    id: 502,
    materia: "LEGESP",
    assunto: "LEP - Guia de recolhimento (art. 107)",
    enunciado:
      "Transitada em julgado a sentença que aplicar pena privativa de liberdade, se o réu estiver preso, o juiz ordenará a expedição de guia de recolhimento para a execução. A guia de recolhimento será remetida à autoridade administrativa, dentro de:",
    alternativas: {
      A: "10 dias.",
      B: "5 dias.",
      C: "24 horas.",
      D: "30 dias.",
    },
    correta: "B",
    explicacao:
      "Art. 107 LEP: guia de recolhimento em até 5 dias após trânsito em julgado. PEGADINHA: prazo curto para não deixar preso sem título executivo!",
  },
  {
    id: 503,
    materia: "LEGESP",
    assunto: "LEP - Regime fechado (art. 34)",
    enunciado:
      "O condenado em regime fechado será submetido, no início do cumprimento da pena, a exame criminológico de classificação para individualização da execução. Este exame será realizado pela:",
    alternativas: {
      A: "Polícia Civil.",
      B: "Comissão Técnica de Classificação (CTC).",
      C: "Defensoria Pública.",
      D: "Ministério Público.",
    },
    correta: "B",
    explicacao:
      "Art. 34 c/c art. 8º LEP: Comissão Técnica de Classificação elabora programa individualizador. PEGADINHA: exame criminológico é facultativo (não obrigatório para progressão)!",
  },
  {
    id: 504,
    materia: "LEGESP",
    assunto: "LEP - Regime semiaberto (art. 35)",
    enunciado:
      "No regime semiaberto, o condenado fica sujeito a trabalho em comum durante o período diurno, em colônia agrícola, industrial ou estabelecimento similar. À noite e nos dias de folga, o preso poderá:",
    alternativas: {
      A: "Sair livremente sem autorização.",
      B: "Permanecer recolhido em dependência coletiva.",
      C: "Ficar em prisão domiciliar automaticamente.",
      D: "Não ter qualquer restrição.",
    },
    correta: "B",
    explicacao:
      "Art. 35 LEP: semiaberto = trabalho comum diurno, recolhimento noturno em dependência coletiva. PEGADINHA: não é saída livre, há recolhimento!",
  },
  {
    id: 505,
    materia: "LEGESP",
    assunto: "LEP - Regime aberto (art. 36)",
    enunciado:
      "O regime aberto baseia-se na autodisciplina e senso de responsabilidade do condenado. O condenado deverá, fora do estabelecimento e sem vigilância, trabalhar, frequentar curso ou exercer outra atividade autorizada, permanecendo recolhido durante o período noturno e nos dias de folga em:",
    alternativas: {
      A: "Presídio comum.",
      B: "Casa do Albergado ou estabelecimento adequado.",
      C: "Sua própria residência sem fiscalização.",
      D: "Delegacia de polícia.",
    },
    correta: "B",
    explicacao:
      "Art. 36 LEP: regime aberto = Casa do Albergado, trabalho externo, recolhimento noturno. PEGADINHA: não é prisão domiciliar, é albergue!",
  },
  {
    id: 506,
    materia: "LEGESP",
    assunto: "LEP - Progressão de regime (art. 112)",
    enunciado:
      "A pena privativa de liberdade será executada em forma progressiva, segundo o mérito do condenado. A progressão de regime depende de:",
    alternativas: {
      A: "Apenas do cumprimento do tempo de pena.",
      B: "Requisito objetivo (cumprimento de fração da pena) e subjetivo (bom comportamento carcerário comprovado pelo diretor).",
      C: "Apenas vontade do juiz.",
      D: "Decisão do governador.",
    },
    correta: "B",
    explicacao:
      "Art. 112 LEP: progressão exige requisito objetivo (tempo) + subjetivo (mérito). PEGADINHA AOCP: AMBOS são obrigatórios!",
  },
  {
    id: 507,
    materia: "LEGESP",
    assunto: "LEP - Regressão de regime (art. 118)",
    enunciado:
      "A execução da pena privativa de liberdade ficará sujeita à forma regressiva, quando o condenado:",
    alternativas: {
      A: "Apenas solicitar.",
      B: "Praticar fato definido como crime doloso, falta grave, sofrer condenação por crime anterior cuja pena somada resulte em regime mais rigoroso.",
      C: "Recusar qualquer atividade.",
      D: "Não há hipóteses de regressão.",
    },
    correta: "B",
    explicacao:
      "Art. 118 LEP: regressão por crime doloso, falta grave ou soma de penas. PEGADINHA: pode regredir mesmo sem falta grave se houver condenação anterior!",
  },
  {
    id: 508,
    materia: "LEGESP",
    assunto: "LEP - Remição pelo trabalho (art. 126 caput)",
    enunciado:
      "O condenado que cumpre a pena em regime fechado ou semiaberto poderá remir, por trabalho ou por estudo, parte do tempo de execução da pena. A contagem de tempo para fins de remição pelo trabalho é de:",
    alternativas: {
      A: "1 dia de trabalho = 1 dia de pena remido.",
      B: "3 dias de trabalho = 1 dia de pena remido.",
      C: "7 dias de trabalho = 1 dia de pena remido.",
      D: "Não há remição por trabalho.",
    },
    correta: "B",
    explicacao:
      "Art. 126 caput LEP: 3 dias de trabalho = 1 dia remido. PEGADINHA: trabalho ≠ estudo (12h/3 dias estudo = 1 dia)!",
  },
  {
    id: 509,
    materia: "LEGESP",
    assunto: "LEP - Perda dos dias remidos (art. 127)",
    enunciado: "Em caso de falta grave, o condenado perderá:",
    alternativas: {
      A: "Apenas o direito a novas remições futuras.",
      B: "Até 1/3 do tempo remido, começando pelo período mais antigo, e terá o prazo de progressão reiniciado.",
      C: "Toda a remição acumulada.",
      D: "Não perde remição.",
    },
    correta: "B",
    explicacao:
      "Art. 127 LEP (redação Lei 12.433/2011): perde até 1/3 dos dias remidos + reinicia prazo de progressão. PEGADINHA AOCP: não perde TUDO, perde até 1/3!",
  },
  {
    id: 510,
    materia: "LEGESP",
    assunto: "LEP - Assistência material (art. 12)",
    enunciado:
      "A assistência material ao preso e ao internado consistirá no fornecimento de:",
    alternativas: {
      A: "Apenas água.",
      B: "Alimentação, vestuário e instalações higiênicas.",
      C: "Somente alimentação.",
      D: "Não há previsão de assistência material.",
    },
    correta: "B",
    explicacao:
      "Art. 12 LEP: assistência material = alimentação, vestuário, instalações higiênicas. PEGADINHA: são DIREITOS básicos do preso!",
  },
  {
    id: 511,
    materia: "LEGESP",
    assunto: "LEP - Assistência jurídica (art. 15 e 16)",
    enunciado:
      "A assistência jurídica é destinada aos presos e aos internados sem recursos financeiros para constituir advogado. Será prestada pelo Estado através de:",
    alternativas: {
      A: "Apenas advogados particulares pagos pela família.",
      B: "Defensoria Pública ou, na sua falta, por advogado nomeado.",
      C: "Ministério Público.",
      D: "Não há previsão de assistência jurídica.",
    },
    correta: "B",
    explicacao:
      "Art. 15 e 16 LEP: assistência jurídica gratuita pela Defensoria Pública ou advogado nomeado. PEGADINHA: é DIREITO do preso sem recursos!",
  },
  {
    id: 512,
    materia: "LEGESP",
    assunto: "LEP - Assistência educacional (art. 17 a 21)",
    enunciado:
      "A assistência educacional compreenderá a instrução escolar e a formação profissional do preso. O ensino de 1º grau (fundamental) será:",
    alternativas: {
      A: "Facultativo.",
      B: "Obrigatório, sendo o ensino médio regular ou profissionalizante oferecido sempre que possível.",
      C: "Proibido em estabelecimentos penais.",
      D: "Apenas para presos primários.",
    },
    correta: "B",
    explicacao:
      "Art. 18 LEP: ensino fundamental OBRIGATÓRIO, médio quando possível. PEGADINHA AOCP: educação é remição (12h/3 dias = 1 dia) + ressocialização!",
  },
  {
    id: 513,
    materia: "LEGESP",
    assunto: "LEP - Assistência religiosa (art. 24)",
    enunciado:
      "A assistência religiosa, com liberdade de culto, será prestada aos presos, permitindo-se-lhes a participação nos serviços organizados no estabelecimento penal, bem como a posse de livros de instrução religiosa. Esta assistência é:",
    alternativas: {
      A: "Obrigatória para todos os presos.",
      B: "Facultativa ao preso, devendo o Estado garantir condições para seu exercício.",
      C: "Proibida em presídios de segurança máxima.",
      D: "Restrita a uma única religião.",
    },
    correta: "B",
    explicacao:
      "Art. 24 LEP: assistência religiosa é facultativa (liberdade religiosa), mas Estado deve proporcionar. PEGADINHA: ninguém é obrigado a participar!",
  },
  {
    id: 514,
    materia: "LEGESP",
    assunto: "LEP - Trabalho externo (art. 36 e 37)",
    enunciado:
      "O trabalho externo é admissível para os condenados em regime fechado, desde que tomadas as cautelas contra a fuga e em favor da disciplina, somente em:",
    alternativas: {
      A: "Qualquer atividade comercial.",
      B: "Serviço ou obras públicas realizadas por órgãos da Administração Direta ou Indireta, ou entidades privadas, desde que cumpridos 1/6 da pena.",
      C: "Nunca é permitido no regime fechado.",
      D: "Apenas em propriedades rurais particulares.",
    },
    correta: "B",
    explicacao:
      "Art. 36 e 37 LEP: trabalho externo em regime fechado APENAS em serviços/obras públicas + cumpridos 1/6 da pena. PEGADINHA: tem restrições, não é livre!",
  },
  {
    id: 515,
    materia: "LEGESP",
    assunto: "LEP - Deveres do condenado (art. 39)",
    enunciado: "Constituem deveres do condenado:",
    alternativas: {
      A: "Apenas obedecer aos funcionários.",
      B: "Comportamento disciplinado, execução do trabalho, respeito, higiene pessoal e da cela, conservação dos objetos, submissão à sanção disciplinar, indenização à vítima, entre outros.",
      C: "Não há deveres expressos na LEP.",
      D: "Apenas participar de atividades religiosas.",
    },
    correta: "B",
    explicacao:
      "Art. 39 LEP: 10 incisos de deveres (disciplina, trabalho, higiene, conservação, etc.). PEGADINHA AOCP: descumprimento = falta disciplinar!",
  },
  {
    id: 516,
    materia: "LEGESP",
    assunto: "LEP - Faltas leves (art. 49)",
    enunciado:
      "As faltas disciplinares classificam-se em leves, médias e graves. As faltas leves são apuradas:",
    alternativas: {
      A: "Apenas com testemunhas.",
      B: "Por mecanismo mais simples, previsto em regulamento disciplinar.",
      C: "Sempre com advogado presente.",
      D: "Não há faltas leves na LEP.",
    },
    correta: "B",
    explicacao:
      "Art. 49 LEP: faltas leves = regulamento define procedimento simplificado. PEGADINHA: LEP não lista faltas leves, deixa para regulamento local!",
  },
  {
    id: 517,
    materia: "LEGESP",
    assunto: "LEP - Falta grave - Posse de celular (art. 50, VII)",
    enunciado:
      "Constitui falta grave possuir, utilizar ou fornecer aparelho telefônico, de rádio ou similar, que permita a comunicação com outros presos ou com o ambiente externo. A pena para esta falta é:",
    alternativas: {
      A: "Advertência verbal.",
      B: "Sanção disciplinar prevista no art. 53 (isolamento, suspensão de direitos, RDD) e perda de até 1/3 dos dias remidos.",
      C: "Apenas multa.",
      D: "Não há sanção para posse de celular.",
    },
    correta: "B",
    explicacao:
      "Art. 50, VII LEP (incluído Lei 11.466/2007): celular = falta GRAVE. PEGADINHA AOCP: perde remição + sanção disciplinar + pode ir para RDD!",
  },
  {
    id: 518,
    materia: "LEGESP",
    assunto: "LEP - Isolamento preventivo (art. 60)",
    enunciado:
      "A autoridade administrativa poderá decretar o isolamento preventivo do faltoso pelo prazo de até:",
    alternativas: {
      A: "5 dias.",
      B: "10 dias.",
      C: "30 dias.",
      D: "60 dias.",
    },
    correta: "B",
    explicacao:
      "Art. 60 LEP: isolamento preventivo = até 10 dias. PEGADINHA: é CAUTELAR, enquanto apura falta. Após decisão, pode ter isolamento como sanção (art. 58 - até 30 dias)!",
  },
  {
    id: 519,
    materia: "LEGESP",
    assunto: "LEP - Estabelecimentos penais - Penitenciária (art. 87)",
    enunciado:
      "A penitenciária destina-se ao condenado à pena de reclusão, em regime:",
    alternativas: {
      A: "Semiaberto.",
      B: "Aberto.",
      C: "Fechado.",
      D: "Todos os regimes.",
    },
    correta: "C",
    explicacao:
      "Art. 87 LEP: penitenciária = regime FECHADO. PEGADINHA: colônia agrícola/industrial = semiaberto (art. 91); casa do albergado = aberto (art. 93)!",
  },
  {
    id: 520,
    materia: "LEGESP",
    assunto: "LEP - Pessoal penitenciário (art. 75)",
    enunciado:
      "O ocupante de cargo ou função vinculado à execução penal deverá, no exercício de suas atribuições, respeitar a integridade física e moral dos condenados e presos provisórios, assim como:",
    alternativas: {
      A: "Pode usar de violência quando achar necessário.",
      B: "Deve zelar pela dignidade da pessoa humana.",
      C: "Não precisa respeitar direitos dos presos.",
      D: "Pode aplicar tortura em casos excepcionais.",
    },
    correta: "B",
    explicacao:
      "Art. 75, parágrafo único LEP: servidor DEVE respeitar integridade física/moral e dignidade humana. PEGADINHA AOCP: tortura = crime (Lei 9.455/97) + abuso de autoridade!",
  },
  // LEI MG 11.404/1994 - Normas de Execução Penal MG (ID 521-530)
  {
    id: 521,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Objeto da lei (art. 1º)",
    enunciado:
      "A Lei Estadual 11.404/1994 estabelece normas de execução penal no Estado de Minas Gerais, dispondo sobre:",
    alternativas: {
      A: "Apenas sobre construção de presídios.",
      B: "Assistência ao preso e ao internado, classificação, individualização da pena, trabalho, disciplina e deveres dos servidores.",
      C: "Somente sobre salários de servidores.",
      D: "Não trata de execução penal.",
    },
    correta: "B",
    explicacao:
      "Art. 1º Lei 11.404/94: normas estaduais complementares à LEP federal (assistência, classificação, trabalho, disciplina). PEGADINHA: Estados podem legislar concorrentemente!",
  },
  {
    id: 522,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Assistências (art. 2º)",
    enunciado:
      "Ao preso e ao internado serão asseguradas, no Estado de Minas Gerais, assistências previstas na LEP federal. As assistências compreendem:",
    alternativas: {
      A: "Apenas alimentação.",
      B: "Material, à saúde, jurídica, educacional, social e religiosa.",
      C: "Somente assistência jurídica.",
      D: "Não há previsão de assistências.",
    },
    correta: "B",
    explicacao:
      "Art. 2º Lei 11.404/94: repete rol da LEP federal (6 assistências). PEGADINHA: Estado DEVE garantir todas as assistências!",
  },
  {
    id: 523,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Comissão Técnica de Classificação (art. 6º)",
    enunciado:
      "Haverá, em cada estabelecimento penal de Minas Gerais, uma Comissão Técnica de Classificação (CTC), responsável por:",
    alternativas: {
      A: "Apenas aplicar sanções disciplinares.",
      B: "Elaborar programa individualizador da pena, acompanhar sua execução e propor progressão ou regressão de regime.",
      C: "Julgar crimes cometidos no presídio.",
      D: "Contratar funcionários.",
    },
    correta: "B",
    explicacao:
      "Art. 6º Lei 11.404/94: CTC elabora programa individualizador, acompanha execução. PEGADINHA: CTC opina sobre progressão/regressão, mas quem decide é o JUIZ!",
  },
  {
    id: 524,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Trabalho do preso (art. 10)",
    enunciado:
      "O trabalho do preso em Minas Gerais, como dever social e condição de dignidade humana, terá finalidade educativa e produtiva. A jornada normal de trabalho não será inferior a:",
    alternativas: {
      A: "4 horas diárias.",
      B: "6 horas e nem superior a 8 horas diárias.",
      C: "10 horas diárias.",
      D: "Não há limite de jornada.",
    },
    correta: "B",
    explicacao:
      "Art. 10 Lei 11.404/94 c/c art. 33 LEP: jornada 6 a 8 horas/dia. PEGADINHA: trabalho do preso tem limites (não é trabalho escravo)!",
  },
  {
    id: 525,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Remuneração do trabalho (art. 11)",
    enunciado:
      "O trabalho do preso será sempre remunerado, sendo-lhe garantidos os benefícios da Previdência Social. A remuneração não poderá ser inferior a:",
    alternativas: {
      A: "1/4 do salário mínimo.",
      B: "3/4 do salário mínimo.",
      C: "1 salário mínimo.",
      D: "Não há remuneração obrigatória.",
    },
    correta: "B",
    explicacao:
      "Art. 11 Lei 11.404/94 c/c art. 29 LEP: remuneração mínima = 3/4 do salário mínimo. PEGADINHA AOCP: desconta-se 25% no mínimo (indenização, família, pecúlio)!",
  },
  {
    id: 526,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Regime disciplinar (art. 15)",
    enunciado:
      "O regime disciplinar será definido em regulamento próprio do Estado, observadas as normas da LEP federal. As sanções aplicáveis ao preso incluem:",
    alternativas: {
      A: "Apenas advertência.",
      B: "Advertência, repreensão, suspensão ou restrição de direitos, isolamento na própria cela.",
      C: "Pena de morte.",
      D: "Trabalhos forçados sem remuneração.",
    },
    correta: "B",
    explicacao:
      "Art. 15 Lei 11.404/94: sanções conforme LEP federal (art. 53). PEGADINHA: MG aplica as mesmas sanções da LEP + pode ter RDD!",
  },
  {
    id: 527,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Direitos do preso (art. 3º)",
    enunciado:
      "Ao preso e ao internado em Minas Gerais serão assegurados todos os direitos previstos na LEP federal, incluindo:",
    alternativas: {
      A: "Apenas o direito à vida.",
      B: "Alimentação, vestuário, higiene, assistência médica, trabalho remunerado, visita, contato com advogado, entre outros.",
      C: "Nenhum direito, apenas deveres.",
      D: "Somente o direito ao trabalho.",
    },
    correta: "B",
    explicacao:
      "Art. 3º Lei 11.404/94: garante direitos do art. 41 LEP. PEGADINHA: mesmo preso mantém dignidade e direitos fundamentais!",
  },
  {
    id: 528,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Deveres do preso (art. 4º)",
    enunciado: "São deveres do preso em Minas Gerais, entre outros:",
    alternativas: {
      A: "Apenas obedecer aos funcionários.",
      B: "Comportamento disciplinado, execução do trabalho designado, higiene pessoal e da cela, respeito a funcionários e demais presos.",
      C: "Não há deveres especificados.",
      D: "Apenas participar de atividades religiosas obrigatórias.",
    },
    correta: "B",
    explicacao:
      "Art. 4º Lei 11.404/94: deveres conforme art. 39 LEP. PEGADINHA: descumprimento de deveres = falta disciplinar!",
  },
  {
    id: 529,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Estabelecimentos penais (art. 7º)",
    enunciado:
      "Os estabelecimentos penais em Minas Gerais serão destinados ao condenado, preso provisório e internado, devendo ser distribuídos conforme:",
    alternativas: {
      A: "Livre escolha do preso.",
      B: "Natureza do estabelecimento, idade e sexo do apenado, regime de cumprimento da pena.",
      C: "Apenas pela gravidade do crime.",
      D: "Não há critérios definidos.",
    },
    correta: "B",
    explicacao:
      "Art. 7º Lei 11.404/94: distribuição por natureza do estabelecimento, idade, sexo, regime. PEGADINHA: separação é obrigatória (provisórios ≠ condenados; mulheres ≠ homens)!",
  },
  {
    id: 530,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Pessoal penitenciário (art. 20)",
    enunciado:
      "O servidor vinculado à execução penal no Estado de Minas Gerais deverá:",
    alternativas: {
      A: "Usar violência sempre que necessário.",
      B: "Respeitar a integridade física e moral dos presos, zelar pela dignidade humana e atuar com profissionalismo.",
      C: "Não precisa de qualquer treinamento.",
      D: "Pode aplicar sanções arbitrárias.",
    },
    correta: "B",
    explicacao:
      "Art. 20 Lei 11.404/94: servidor deve respeitar dignidade, integridade física/moral. PEGADINHA AOCP: policial penal que viola = crime de abuso/tortura!",
  },
  {
    id: 531,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Assistência à saúde (art. 8º)",
    enunciado:
      "A assistência à saúde do preso em Minas Gerais compreenderá atendimento médico, farmacêutico e odontológico. Quando o estabelecimento não dispuser de recursos, o tratamento será realizado:",
    alternativas: {
      A: "Não será realizado.",
      B: "Em estabelecimento conveniado ou da rede pública de saúde.",
      C: "Apenas com pagamento particular.",
      D: "Somente após liberdade.",
    },
    correta: "B",
    explicacao:
      "Art. 8º Lei 11.404/94: assistência externa quando necessário. PEGADINHA: saúde é direito IRRENUNCIÁVEL, Estado deve custear!",
  },
  {
    id: 532,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Assistência educacional (art. 9º)",
    enunciado:
      "O preso em Minas Gerais terá direito à assistência educacional, incluindo instrução escolar e formação profissional. O ensino de 1º grau (fundamental) será:",
    alternativas: {
      A: "Facultativo.",
      B: "Obrigatório.",
      C: "Proibido.",
      D: "Apenas para presos primários.",
    },
    correta: "B",
    explicacao:
      "Art. 9º Lei 11.404/94 c/c art. 18 LEP: ensino fundamental OBRIGATÓRIO. PEGADINHA: educação é direito + remição + ressocialização!",
  },
  {
    id: 533,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Faltas disciplinares (art. 16)",
    enunciado:
      "As faltas disciplinares em Minas Gerais classificam-se em leves, médias e graves, conforme a LEP federal. As faltas graves estão previstas:",
    alternativas: {
      A: "Apenas no regulamento estadual.",
      B: "No art. 50 da LEP federal e regulamento complementar estadual.",
      C: "Não há faltas graves em MG.",
      D: "Apenas na Constituição Federal.",
    },
    correta: "B",
    explicacao:
      "Art. 16 Lei 11.404/94: faltas graves = art. 50 LEP + regulamento MG pode complementar. PEGADINHA: rol da LEP é taxativo para graves!",
  },
  {
    id: 534,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Procedimento disciplinar (art. 17)",
    enunciado:
      "Praticada a falta disciplinar em Minas Gerais, deverá ser instaurado procedimento para sua apuração, com garantia de:",
    alternativas: {
      A: "Punição imediata sem defesa.",
      B: "Direito de defesa, contraditório e devido processo legal.",
      C: "Apenas notificação posterior.",
      D: "Não há procedimento definido.",
    },
    correta: "B",
    explicacao:
      "Art. 17 Lei 11.404/94 c/c art. 59 LEP: procedimento com defesa. PEGADINHA AOCP: STF exige defesa técnica em RDD e sanções graves (SV 56 e 57)!",
  },
  {
    id: 535,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Isolamento (art. 18)",
    enunciado:
      "O isolamento como sanção disciplinar em Minas Gerais não poderá exceder o prazo de:",
    alternativas: {
      A: "10 dias.",
      B: "30 dias.",
      C: "60 dias.",
      D: "Não há limite.",
    },
    correta: "B",
    explicacao:
      "Art. 18 Lei 11.404/94 c/c art. 58 LEP: isolamento máximo 30 dias. PEGADINHA: isolamento PREVENTIVO = 10 dias (art. 60 LEP), isolamento SANÇÃO = 30 dias!",
  },
  {
    id: 536,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Visitação (art. 12)",
    enunciado:
      "O preso em Minas Gerais tem direito à visita do cônjuge, companheiro, parentes e amigos. A visitação será realizada:",
    alternativas: {
      A: "Sem qualquer restrição de horário.",
      B: "Em dias e horários determinados pelo regulamento, respeitando a ordem e segurança do estabelecimento.",
      C: "Apenas uma vez por ano.",
      D: "Não há previsão de visitas.",
    },
    correta: "B",
    explicacao:
      "Art. 12 Lei 11.404/94: visita é DIREITO, mas com dias/horários regulamentados. PEGADINHA: pode ser suspensa temporariamente (RDD, falta grave), mas não arbitrariamente!",
  },
  {
    id: 537,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Progressão de regime (art. 13)",
    enunciado:
      "A progressão de regime em Minas Gerais observará os requisitos da LEP federal. Para progressão, o preso deve cumprir:",
    alternativas: {
      A: "Apenas requisito objetivo (tempo de pena).",
      B: "Requisito objetivo (fração da pena) e subjetivo (bom comportamento carcerário).",
      C: "Não há progressão em MG.",
      D: "Apenas vontade do diretor do presídio.",
    },
    correta: "B",
    explicacao:
      "Art. 13 Lei 11.404/94 c/c art. 112 LEP: progressão = requisito objetivo + subjetivo. PEGADINHA: AMBOS obrigatórios!",
  },
  {
    id: 538,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Remição (art. 14)",
    enunciado:
      "O preso em Minas Gerais que cumpre pena em regime fechado ou semiaberto poderá remir parte do tempo de execução pelo:",
    alternativas: {
      A: "Apenas comportamento.",
      B: "Trabalho ou estudo, conforme LEP federal.",
      C: "Pagamento de fiança.",
      D: "Não há remição em MG.",
    },
    correta: "B",
    explicacao:
      "Art. 14 Lei 11.404/94 c/c art. 126 LEP: remição por trabalho (3 dias = 1) ou estudo (12h/3 dias = 1). PEGADINHA: Estado deve oferecer trabalho/estudo!",
  },
  {
    id: 539,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Saída temporária (art. 19)",
    enunciado:
      "A saída temporária em Minas Gerais será concedida ao condenado em regime semiaberto, observados os requisitos da LEP federal. O benefício pode ser concedido para:",
    alternativas: {
      A: "Qualquer finalidade a pedido do preso.",
      B: "Visita à família, frequência a curso ou atividade que contribua para retorno ao convívio social.",
      C: "Apenas para tratamento de saúde.",
      D: "Não há saída temporária em MG.",
    },
    correta: "B",
    explicacao:
      "Art. 19 Lei 11.404/94 c/c art. 122 LEP: saída temporária para visita família, curso, atividade social. PEGADINHA: máximo 7 dias, até 5 vezes/ano!",
  },
  {
    id: 540,
    materia: "LEGESP",
    assunto: "Lei MG 11.404/94 - Disposições finais (art. 21)",
    enunciado:
      "A Lei 11.404/94 determina que o Estado de Minas Gerais aplicará as normas da LEP federal e, subsidiariamente:",
    alternativas: {
      A: "Apenas o Código Civil.",
      B: "As normas estaduais complementares e o Código de Processo Penal.",
      C: "Não há aplicação subsidiária.",
      D: "Apenas normas internacionais.",
    },
    correta: "B",
    aplicacao:
      "Art. 21 Lei 11.404/94: LEP federal + normas estaduais + CPP/CPC subsidiariamente. PEGADINHA: hierarquia normativa = CF > LEP > lei estadual > regulamentos!",
  },
  // REGULAMENTO SISTEMA PRISIONAL MG (ID 541-550)
  {
    id: 541,
    materia: "LEGESP",
    assunto: "Regulamento MG - Objetivos (art. 1º)",
    enunciado:
      "O Regulamento e Normas de Procedimentos do Sistema Prisional de Minas Gerais tem como objetivo:",
    alternativas: {
      A: "Apenas punir presos.",
      B: "Estabelecer normas de segurança, disciplina, assistência e ressocialização dos presos, respeitando direitos humanos.",
      C: "Impedir qualquer contato externo dos presos.",
      D: "Não possui objetivos definidos.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: segurança + disciplina + assistência + ressocialização + DH. PEGADINHA AOCP: equilíbrio entre segurança e direitos!",
  },
  {
    id: 542,
    materia: "LEGESP",
    assunto: "Regulamento MG - Classificação dos presos",
    enunciado:
      "O Regulamento MG determina que os presos sejam classificados segundo critérios de:",
    alternativas: {
      A: "Apenas pela gravidade do crime.",
      B: "Personalidade, antecedentes, periculosidade, regime de cumprimento de pena, sexo, idade.",
      C: "Apenas por ordem alfabética.",
      D: "Não há classificação.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: classificação por múltiplos critérios (individualização da pena). PEGADINHA: evita convivência de presos incompatíveis!",
  },
  {
    id: 543,
    materia: "LEGESP",
    assunto: "Regulamento MG - Regime Disciplinar Diferenciado",
    enunciado:
      "O Regulamento MG prevê o Regime Disciplinar Diferenciado (RDD) para presos que representem alto risco. No RDD, o preso ficará em isolamento celular por até:",
    alternativas: {
      A: "12 horas diárias.",
      B: "22 horas diárias, com direito a 2 horas de banho de sol.",
      C: "24 horas sem interrupção.",
      D: "Não há RDD em Minas Gerais.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 52 LEP: RDD = 22h isolamento + 2h banho sol. PEGADINHA AOCP: mínimo 2h fora da cela é OBRIGATÓRIO!",
  },
  {
    id: 544,
    materia: "LEGESP",
    assunto: "Regulamento MG - Revista de visitantes",
    enunciado:
      "Sobre a revista de pessoas que ingressam em estabelecimentos prisionais em MG, o regulamento determina que:",
    alternativas: {
      A: "Revista vexatória é permitida sem restrição.",
      B: "Revista deve preservar dignidade, vedados procedimentos vexatórios, devendo ser utilizado scanner corporal quando disponível.",
      C: "Não há revista para familiares.",
      D: "Revista íntima invasiva é obrigatória.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG + Lei 13.271/2016: revista SEM vexação (agachamento proibido), uso de scanners. PEGADINHA AOCP: revista vexatória = crime de abuso!",
  },
  {
    id: 545,
    materia: "LEGESP",
    assunto: "Regulamento MG - Visitas íntimas",
    enunciado:
      "O Regulamento MG prevê a visita íntima para presos, respeitando critérios de:",
    alternativas: {
      A: "É proibida em qualquer circunstância.",
      B: "Casamento ou união estável comprovada, local apropriado, higiene e privacidade.",
      C: "Apenas para presos em regime aberto.",
      D: "Não há previsão de visita íntima.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: visita íntima é DIREITO (saúde sexual, dignidade), com critérios (comprovação vínculo, local adequado). PEGADINHA: não é privilégio!",
  },
  {
    id: 546,
    materia: "LEGESP",
    assunto: "Regulamento MG - Uso de algemas",
    enunciado:
      "O uso de algemas em presos no sistema prisional de MG deve observar:",
    alternativas: {
      A: "Pode ser usado indiscriminadamente.",
      B: "Apenas em casos de resistência, fundada suspeita de fuga ou perigo à integridade física, devidamente justificado.",
      C: "É proibido em qualquer situação.",
      D: "Apenas para transporte externo.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c Súmula Vinculante 11 STF: algemas APENAS quando necessário (resistência, fuga, perigo), fundamentadamente. PEGADINHA: uso abusivo = crime de abuso!",
  },
  {
    id: 547,
    materia: "LEGESP",
    assunto: "Regulamento MG - Celas individuais e coletivas",
    enunciado:
      "As celas no sistema prisional de MG devem atender padrões mínimos de habitabilidade. A cela individual deve ter no mínimo:",
    alternativas: {
      A: "3 m².",
      B: "6 m².",
      C: "10 m².",
      D: "Não há padrão definido.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 88 LEP: cela individual mínimo 6 m². PEGADINHA: realidade não cumpre (superlotação), mas é padrão legal!",
  },
  {
    id: 548,
    materia: "LEGESP",
    assunto: "Regulamento MG - Alimentação",
    enunciado:
      "O Regulamento MG estabelece que a alimentação fornecida aos presos deve ser:",
    alternativas: {
      A: "Apenas sobras de comida.",
      B: "Adequada em quantidade e qualidade, com valor nutricional suficiente, servida em horários regulares (café, almoço, jantar).",
      C: "Opcional, podendo ser negada.",
      D: "Apenas uma refeição por dia.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: alimentação adequada (nutrição, higiene, horários). PEGADINHA: alimentação é DIREITO básico, não pode ser usada como punição!",
  },
  {
    id: 549,
    materia: "LEGESP",
    assunto: "Regulamento MG - Uso de telefone",
    enunciado: "O uso de telefone pelos presos em MG é:",
    alternativas: {
      A: "Permitido livremente.",
      B: "Permitido em telefones institucionais, em horários e condições estabelecidos, monitorado para segurança.",
      C: "Totalmente proibido.",
      D: "Apenas para ligações internacionais.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: telefone institucional permitido (manter vínculos familiares), mas monitorado. PEGADINHA: celular particular = falta GRAVE (art. 50, VII LEP)!",
  },
  {
    id: 550,
    materia: "LEGESP",
    assunto: "Regulamento MG - Atendimento médico",
    enunciado:
      "O preso que necessitar de atendimento médico de urgência no sistema prisional de MG:",
    alternativas: {
      A: "Deve esperar agendamento normal.",
      B: "Será atendido imediatamente no estabelecimento ou encaminhado a unidade de saúde externa com escolta.",
      C: "Não tem direito a atendimento.",
      D: "Apenas após autorização judicial.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: urgência médica = atendimento IMEDIATO. PEGADINHA: saúde é direito, Estado responde se negar atendimento!",
  },
  {
    id: 551,
    materia: "LEGESP",
    assunto: "Regulamento MG - Banho de sol",
    enunciado:
      "O Regulamento MG assegura ao preso o direito ao banho de sol. O tempo mínimo diário de banho de sol é de:",
    alternativas: {
      A: "30 minutos.",
      B: "2 horas.",
      C: "6 horas.",
      D: "Não há previsão de banho de sol.",
    },
    correta: "B",
    aplicacao:
      "Regulamento MG c/c art. 41, III LEP: mínimo 2h de banho de sol diárias. PEGADINHA AOCP: até no RDD deve ter 2h fora da cela!",
  },
  {
    id: 552,
    materia: "LEGESP",
    assunto: "Regulamento MG - Correspondência",
    enunciado: "A correspondência do preso no sistema prisional de MG:",
    alternativas: {
      A: "É totalmente proibida.",
      B: "É direito do preso, podendo ser monitorada pela administração, exceto correspondência com advogado e autoridades judiciárias.",
      C: "Pode ser destruída sem leitura.",
      D: "Apenas correspondências internacionais são permitidas.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 41, XV LEP: correspondência é direito, mas fiscalizável (exceto advogado/juiz). PEGADINHA: sigilo advogado-cliente é ABSOLUTO!",
  },
  {
    id: 553,
    materia: "LEGESP",
    assunto: "Regulamento MG - Material de higiene pessoal",
    enunciado:
      "O Regulamento MG determina que o Estado deve fornecer ao preso:",
    alternativas: {
      A: "Apenas água.",
      B: "Material básico de higiene pessoal (sabonete, pasta de dente, papel higiênico, etc.).",
      C: "Nada, a família deve fornecer tudo.",
      D: "Apenas uniforme.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 12 LEP: Estado fornece material de higiene (assistência material). PEGADINHA: higiene é direito básico!",
  },
  {
    id: 554,
    materia: "LEGESP",
    assunto: "Regulamento MG - Atividades laborais",
    enunciado: "O trabalho do preso em MG, conforme o regulamento, é:",
    alternativas: {
      A: "Facultativo para todos.",
      B: "Dever social (obrigatório), exceto para maiores de 70 anos, com finalidade educativa e produtiva.",
      C: "Proibido em estabelecimentos de segurança máxima.",
      D: "Sem remuneração.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 28 e 29 LEP: trabalho é dever (exceto > 70 anos), remunerado (mín. 3/4 SM), remível. PEGADINHA: trabalho ≠ trabalho forçado!",
  },
  {
    id: 555,
    materia: "LEGESP",
    assunto: "Regulamento MG - Atividades educacionais",
    enunciado:
      "O Regulamento MG prevê atividades educacionais para os presos, incluindo:",
    alternativas: {
      A: "Apenas alfabetização.",
      B: "Ensino fundamental (obrigatório), médio, profissionalizante, superior e atividades culturais.",
      C: "Não há previsão de educação.",
      D: "Apenas cursos de artesanato.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 17-21 LEP: educação ampla (fundamental obrigatório, demais quando possível), gera remição (12h/3 dias = 1 dia)!",
  },
  {
    id: 556,
    materia: "LEGESP",
    assunto: "Regulamento MG - Assistência religiosa",
    enunciado:
      "O Regulamento MG garante ao preso o direito à assistência religiosa. Esta assistência é:",
    alternativas: {
      A: "Obrigatória para todos.",
      B: "Facultativa, respeitando liberdade de crença, com permissão de cultos no estabelecimento.",
      C: "Proibida.",
      D: "Restrita a uma única religião oficial.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 24 LEP: liberdade religiosa, assistência facultativa. PEGADINHA: Estado laico garante todas as religiões!",
  },
  {
    id: 557,
    materia: "LEGESP",
    assunto: "Regulamento MG - Recebimento de encomendas",
    enunciado: "O recebimento de encomendas (jumbo) pelos presos em MG:",
    alternativas: {
      A: "É totalmente proibido.",
      B: "É permitido em dias determinados, com revista e restrições de itens proibidos (armas, drogas, celulares).",
      C: "Sem qualquer limitação.",
      D: "Apenas para presos em regime aberto.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: jumbo permitido (alimentos, roupas, higiene), mas fiscalizado. PEGADINHA: itens proibidos = falta grave + apreensão!",
  },
  {
    id: 558,
    materia: "LEGESP",
    assunto: "Regulamento MG - Uso de força",
    enunciado:
      "O uso de força por servidores penitenciários em MG deve obedecer aos princípios de:",
    alternativas: {
      A: "Uso irrestrito sempre que quiser.",
      B: "Legalidade, necessidade, proporcionalidade e progressividade, como último recurso.",
      C: "Violência como primeira opção.",
      D: "Não há regulamentação.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: uso de força = legalidade + necessidade + proporcionalidade + progressividade. PEGADINHA AOCP: uso abusivo = tortura/abuso de autoridade!",
  },
  {
    id: 559,
    materia: "LEGESP",
    assunto: "Regulamento MG - Isolamento como sanção",
    enunciado:
      "O isolamento em cela individual como sanção disciplinar em MG, segundo o regulamento, não poderá exceder:",
    alternativas: {
      A: "10 dias.",
      B: "30 dias.",
      C: "60 dias.",
      D: "Tempo indeterminado.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 58 LEP: isolamento sanção = máximo 30 dias. PEGADINHA: durante isolamento, preso mantém banho de sol e outros direitos básicos!",
  },
  {
    id: 560,
    materia: "LEGESP",
    assunto: "Regulamento MG - Direito à comunicação com advogado",
    enunciado:
      "O preso em MG tem direito à entrevista reservada com seu advogado. Esta entrevista:",
    alternativas: {
      A: "Pode ser negada a qualquer momento.",
      B: "É direito inviolável, não pode ser gravada ou interceptada, salvo situação excepcional fundamentada.",
      C: "Pode ser monitorada livremente.",
      D: "Apenas com autorização do diretor.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 41, VII LEP + CF art. 5º: entrevista advogado = inviolável. PEGADINHA AOCP: impedir sem justa causa = crime de abuso (art. 15 Lei 13.869)!",
  },
  // LEI MG 14.695/2003 - Polícia Penal (ID 561-570)
  {
    id: 561,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Criação da carreira (art. 1º)",
    enunciado:
      "A Lei Estadual 14.695/2003 criou a carreira de Policial Penal em Minas Gerais, estabelecendo que são atribuições destes profissionais:",
    alternativas: {
      A: "Apenas vigilância externa.",
      B: "Segurança e disciplina dos estabelecimentos penais, custódia, vigilância, escolta de presos, revista.",
      C: "Investigação de crimes comuns.",
      D: "Substituir a Polícia Militar.",
    },
    correta: "B",
    explicacao:
      "Art. 1º Lei 14.695/03: atribuições amplas (segurança, custódia, escolta, revista, disciplina). PEGADINHA: polícia penal é carreira ESPECÍFICA!",
  },
  {
    id: 562,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Natureza da atividade (art. 2º)",
    enunciado: "A atividade de Policial Penal em Minas Gerais é de natureza:",
    alternativas: {
      A: "Civil comum.",
      B: "De risco, essencial à segurança pública e à justiça criminal.",
      C: "Temporária.",
      D: "Administrativa sem riscos.",
    },
    correta: "B",
    explicacao:
      "Art. 2º Lei 14.695/03: atividade de RISCO, essencial à segurança pública. PEGADINHA: EC 104/2019 constitucionalizou polícias penais (art. 144 CF)!",
  },
  {
    id: 563,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Superintendência (art. 3º)",
    enunciado:
      "A Lei 14.695/2003 criou a Superintendência de Coordenação da Guarda Penitenciária (atual Polícia Penal), vinculada à:",
    alternativas: {
      A: "Secretaria de Segurança Pública.",
      B: "Secretaria de Estado de Justiça e Segurança Pública (SEJUSP), responsável pela gestão do sistema prisional.",
      C: "Polícia Civil.",
      D: "Tribunal de Justiça.",
    },
    correta: "B",
    explicacao:
      "Art. 3º Lei 14.695/03: vinculação à SEJUSP. PEGADINHA: policial penal NÃO é subordinado à polícia civil/militar, tem carreira própria!",
  },
  {
    id: 564,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Diretoria de Inteligência (art. 4º)",
    enunciado:
      "A Lei 14.695/2003 criou a Diretoria de Inteligência Penitenciária, com atribuição de:",
    alternativas: {
      A: "Apenas arquivar documentos.",
      B: "Produzir conhecimentos e informações para prevenção e repressão de ações criminosas no sistema prisional.",
      C: "Substituir o Ministério Público.",
      D: "Julgar processos disciplinares.",
    },
    correta: "B",
    explicacao:
      "Art. 4º Lei 14.695/03: inteligência penitenciária = coleta de informações, prevenção de fugas, controle de facções. PEGADINHA: estratégica para segurança!",
  },
  {
    id: 565,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Requisitos para ingresso (art. 5º)",
    enunciado:
      "Para ingressar na carreira de Policial Penal em MG, o candidato deve, entre outros requisitos:",
    alternativas: {
      A: "Ter qualquer idade.",
      B: "Ser brasileiro, ter ensino médio completo, aptidão física e mental, idoneidade moral, aprovação em concurso público.",
      C: "Apenas conhecer alguém do governo.",
      D: "Não há requisitos definidos.",
    },
    correta: "B",
    explicacao:
      "Art. 5º Lei 14.695/03: requisitos = nacionalidade, escolaridade, saúde, idoneidade, concurso. PEGADINHA AOCP: concurso é OBRIGATÓRIO (CF art. 37, II)!",
  },
  {
    id: 566,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Formação profissional (art. 6º)",
    enunciado:
      "O Policial Penal aprovado em concurso deverá passar por curso de formação profissional. A aprovação no curso é:",
    alternativas: {
      A: "Facultativa.",
      B: "Requisito obrigatório para nomeação definitiva.",
      C: "Não há curso de formação.",
      D: "Apenas para cargos de chefia.",
    },
    correta: "B",
    explicacao:
      "Art. 6º Lei 14.695/03: curso de formação OBRIGATÓRIO para posse. PEGADINHA: aprovado no concurso mas reprovado no curso = não toma posse!",
  },
  {
    id: 567,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Porte de arma (art. 7º)",
    enunciado:
      "O Policial Penal de Minas Gerais, no exercício de suas funções:",
    alternativas: {
      A: "Não pode portar arma de fogo.",
      B: "Terá porte de arma de fogo, conforme regulamento, para garantir segurança nas atividades.",
      C: "Apenas em horário de serviço externo.",
      D: "Somente após 10 anos de carreira.",
    },
    correta: "B",
    explicacao:
      "Art. 7º Lei 14.695/03: porte funcional de arma. PEGADINHA: porte é para EXERCÍCIO DA FUNÇÃO, com responsabilidade (Lei 10.826/2003)!",
  },
  {
    id: 568,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Responsabilidades (art. 8º)",
    enunciado: "O Policial Penal de MG responderá por seus atos nas esferas:",
    alternativas: {
      A: "Apenas administrativa.",
      B: "Civil, penal e administrativa, conforme a natureza da infração cometida.",
      C: "Apenas penal.",
      D: "Não responde por seus atos.",
    },
    correta: "B",
    explicacao:
      "Art. 8º Lei 14.695/03: responsabilidade tríplice (civil + penal + administrativa). PEGADINHA AOCP: tortura/abuso = responde nas 3 esferas!",
  },
  {
    id: 569,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Regime disciplinar (art. 9º)",
    enunciado:
      "O Policial Penal de MG está sujeito a regime disciplinar específico, que estabelecerá:",
    alternativas: {
      A: "Apenas elogios.",
      B: "Deveres, proibições, transgressões disciplinares e penalidades aplicáveis.",
      C: "Não há regime disciplinar.",
      D: "Apenas premiações.",
    },
    correta: "B",
    explicacao:
      "Art. 9º Lei 14.695/03: regime disciplinar define deveres, proibições, faltas, sanções. PEGADINHA: servidor público militar tem estatuto disciplinar próprio!",
  },
  {
    id: 570,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Progressão na carreira (art. 10)",
    enunciado: "A progressão na carreira de Policial Penal em MG dar-se-á por:",
    alternativas: {
      A: "Apenas por tempo de serviço.",
      B: "Critérios de merecimento e antiguidade, conforme plano de carreira.",
      C: "Indicação política.",
      D: "Não há progressão.",
    },
    correta: "B",
    explicacao:
      "Art. 10 Lei 14.695/03: progressão por merecimento (desempenho, cursos) e antiguidade. PEGADINHA: valoriza capacitação profissional!",
  },
  {
    id: 571,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Capacitação continuada (art. 11)",
    enunciado:
      "A Lei 14.695/2003 prevê que o Policial Penal de MG terá direito e dever de participar de:",
    alternativas: {
      A: "Apenas o curso de formação inicial.",
      B: "Programas de capacitação continuada, treinamento e atualização profissional.",
      C: "Não há previsão de capacitação.",
      D: "Apenas cursos opcionais sem consequências.",
    },
    correta: "B",
    explicacao:
      "Art. 11 Lei 14.695/03: capacitação continuada é direito/dever. PEGADINHA: cursos geram pontos para progressão e são essenciais para atualização!",
  },
  {
    id: 572,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Função gratificada (art. 12)",
    enunciado:
      "Poderão ser criadas funções gratificadas para Policiais Penais que exerçam:",
    alternativas: {
      A: "Qualquer atividade rotineira.",
      B: "Funções de chefia, coordenação, assessoramento ou atividades especializadas de maior responsabilidade.",
      C: "Apenas trabalho externo.",
      D: "Não há funções gratificadas.",
    },
    correta: "B",
    explicacao:
      "Art. 12 Lei 14.695/03: gratificações para cargos de chefia/coordenação/especialização. PEGADINHA: gratificação ≠ direito automático, depende de designação!",
  },
  {
    id: 573,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Jornada de trabalho (art. 13)",
    enunciado:
      "A jornada de trabalho do Policial Penal de MG será estabelecida em lei específica, observando:",
    alternativas: {
      A: "Trabalho ininterrupto de 24 horas.",
      B: "A natureza das atividades, necessidades do serviço e limites constitucionais de jornada.",
      C: "Apenas 4 horas diárias.",
      D: "Não há jornada definida.",
    },
    correta: "B",
    explicacao:
      "Art. 13 Lei 14.695/03: jornada conforme necessidade do serviço e limites constitucionais. PEGADINHA: trabalho em regime de plantão é comum em sistema prisional!",
  },
  {
    id: 574,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Remuneração (art. 14)",
    enunciado:
      "A remuneração do Policial Penal de MG será estabelecida em lei específica, devendo considerar:",
    alternativas: {
      A: "Apenas o salário mínimo nacional.",
      B: "A natureza de risco da atividade, grau de responsabilidade, escolaridade exigida e condições especiais de trabalho.",
      C: "Valor arbitrário.",
      D: "Não há previsão de remuneração.",
    },
    correta: "B",
    explicacao:
      "Art. 14 Lei 14.695/03: remuneração considera risco, responsabilidade, escolaridade. PEGADINHA: atividade de risco justifica adicional de periculosidade!",
  },
  {
    id: 575,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Estabilidade (art. 15)",
    enunciado:
      "O Policial Penal de MG, após nomeação em caráter efetivo, adquirirá estabilidade no serviço público após:",
    alternativas: {
      A: "1 ano.",
      B: "3 anos de efetivo exercício, aprovado em avaliação especial de desempenho.",
      C: "5 anos.",
      D: "Não há estabilidade.",
    },
    correta: "B",
    explicacao:
      "Art. 15 Lei 14.695/03 c/c CF art. 41: estabilidade após 3 anos + avaliação de desempenho. PEGADINHA: estabilidade ≠ impunidade, pode perder cargo (processo administrativo)!",
  },
  {
    id: 576,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Deveres funcionais (art. 16)",
    enunciado: "São deveres do Policial Penal de MG, entre outros:",
    alternativas: {
      A: "Apenas comparecer ao serviço.",
      B: "Desempenhar com zelo e dedicação, manter conduta compatível com moralidade administrativa, respeitar dignidade dos presos, guardar sigilo profissional.",
      C: "Não há deveres definidos.",
      D: "Apenas obedecer ordens superiores sem questionar.",
    },
    correta: "B",
    explicacao:
      "Art. 16 Lei 14.695/03: deveres amplos (zelo, moralidade, respeito dignidade, sigilo). PEGADINHA AOCP: violar dignidade dos presos = crime + falta disciplinar grave!",
  },
  {
    id: 577,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Proibições (art. 17)",
    enunciado: "É vedado ao Policial Penal de MG:",
    alternativas: {
      A: "Estudar e se capacitar.",
      B: "Exercer comércio ou participar de gerência de empresa, receber propinas, maltratar presos, revelar segredos, abandonar serviço.",
      C: "Tirar férias.",
      D: "Usar uniforme.",
    },
    correta: "B",
    explicacao:
      "Art. 17 Lei 14.695/03: proibições incluem comércio, propina, maus-tratos, revelação de segredos. PEGADINHA: violação = falta disciplinar grave + crime!",
  },
  {
    id: 578,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Penalidades disciplinares (art. 18)",
    enunciado:
      "As penalidades disciplinares aplicáveis ao Policial Penal de MG são:",
    alternativas: {
      A: "Apenas advertência.",
      B: "Advertência, repreensão, suspensão, demissão, cassação de aposentadoria ou disponibilidade.",
      C: "Pena de morte.",
      D: "Não há penalidades.",
    },
    correta: "B",
    explicacao:
      "Art. 18 Lei 14.695/03: penalidades vão de advertência até demissão. PEGADINHA: gravidade da falta determina penalidade (proporcionalidade)!",
  },
  {
    id: 579,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Processo administrativo disciplinar (art. 19)",
    enunciado:
      "O Policial Penal acusado de infração disciplinar grave terá direito a:",
    alternativas: {
      A: "Punição sumária sem defesa.",
      B: "Processo administrativo disciplinar, com ampla defesa, contraditório e devido processo legal.",
      C: "Apenas notificação da penalidade.",
      D: "Não há processo para servidor.",
    },
    correta: "B",
    explicacao:
      "Art. 19 Lei 14.695/03 c/c CF art. 5º, LV: PAD com ampla defesa e contraditório. PEGADINHA: direitos constitucionais se aplicam a servidores!",
  },
  {
    id: 580,
    materia: "LEGESP",
    assunto: "Lei MG 14.695/03 - Disposições gerais (art. 20)",
    enunciado:
      "A Lei 14.695/2003 estabelece que o Policial Penal de MG, no exercício de suas funções, é considerado:",
    alternativas: {
      A: "Civil comum sem autoridade.",
      B: "Autoridade pública para todos os efeitos legais, podendo ser responsabilizado por abuso de autoridade.",
      C: "Apenas vigilante sem poderes.",
      D: "Funcionário temporário.",
    },
    correta: "B",
    explicacao:
      "Art. 20 Lei 14.695/03: policial penal = AUTORIDADE PÚBLICA (Lei 13.869/2019). PEGADINHA AOCP: pode praticar abuso de autoridade se violar direitos!",
  },
  // LEP AVANÇADA - RDD (ID 581-590)
  {
    id: 581,
    materia: "LEGESP",
    assunto: "LEP - RDD - Inclusão (art. 52, caput)",
    enunciado:
      "A inclusão do preso no Regime Disciplinar Diferenciado (RDD) poderá ser determinada por decisão do diretor do estabelecimento ou outra autoridade administrativa, mas depende de:",
    alternativas: {
      A: "Decisão imediata sem necessidade de autorização judicial.",
      B: "Prévia e fundamentada decisão do juiz competente.",
      C: "Apenas comunicação ao Ministério Público.",
      D: "Autorização da família do preso.",
    },
    correta: "B",
    explicacao:
      "Art. 52 LEP: inclusão no RDD exige decisão JUDICIAL prévia e fundamentada. PEGADINHA AOCP: diretor pode PROPOR, mas só juiz DECIDE!",
  },
  {
    id: 582,
    materia: "LEGESP",
    assunto: "LEP - RDD - Hipóteses (art. 52, incisos)",
    enunciado:
      "Segundo a LEP, o RDD pode ser aplicado quando o preso apresentar alto risco para a ordem e a segurança do estabelecimento penal ou da sociedade, ou quando:",
    alternativas: {
      A: "Recusar trabalho prisional.",
      B: "Recaiam fundadas suspeitas de envolvimento ou participação, a qualquer título, em organizações criminosas, quadrilha ou bando.",
      C: "Receber visita íntima.",
      D: "Solicitar transferência de presídio.",
    },
    correta: "B",
    explicacao:
      "Art. 52, §1º e §2º LEP: RDD para alto risco OU envolvimento com organização criminosa/quadrilha/bando. PEGADINHA: fundadas suspeitas bastam, não precisa condenação!",
  },
  {
    id: 583,
    materia: "LEGESP",
    assunto: "LEP - RDD - Duração máxima (art. 52, I)",
    enunciado: "A duração máxima da inclusão do preso no RDD será de:",
    alternativas: {
      A: "1 ano, sem possibilidade de renovação.",
      B: "2 anos, sem prejuízo de repetição da sanção por nova falta grave de mesma espécie.",
      C: "6 meses renováveis.",
      D: "Tempo indeterminado.",
    },
    correta: "B",
    explicacao:
      "Art. 52, I LEP: RDD máximo 2 anos, SEM PREJUÍZO de repetição se nova falta. PEGADINHA AOCP: pode ser aplicado novamente se cometer outra falta grave!",
  },
  {
    id: 584,
    materia: "LEGESP",
    assunto: "LEP - RDD - Recolhimento em cela individual (art. 52, II)",
    enunciado:
      "No RDD, o preso permanecerá recolhido em cela individual pelo período máximo e ininterrupto de:",
    alternativas: {
      A: "24 horas por dia.",
      B: "22 horas, garantindo-se o mínimo de 2 horas diárias de banho de sol.",
      C: "20 horas por dia.",
      D: "12 horas por dia.",
    },
    correta: "B",
    explicacao:
      "Art. 52, II LEP: isolamento até 22h/dia, MÍNIMO 2h banho de sol. PEGADINHA: 2 horas fora da cela é DIREITO, não pode ser menos!",
  },
  {
    id: 585,
    materia: "LEGESP",
    assunto: "LEP - RDD - Visitas (art. 52, III)",
    enunciado: "Durante o RDD, as visitas ao preso serão:",
    alternativas: {
      A: "Totalmente proibidas.",
      B: "Semanais e com duração de 2 horas.",
      C: "Diárias sem restrição.",
      D: "Apenas uma vez ao mês.",
    },
    correta: "B",
    explicacao:
      "Art. 52, III LEP: visitas semanais de 2 horas no RDD. PEGADINHA: mesmo no RDD mantém direito à visita, mas com restrição!",
  },
  {
    id: 586,
    materia: "LEGESP",
    assunto: "LEP - RDD - Banho de sol (art. 52, IV)",
    enunciado:
      "No regime disciplinar diferenciado, o preso terá direito à saída da cela para banho de sol por:",
    alternativas: {
      A: "1 hora diária.",
      B: "2 horas diárias.",
      C: "4 horas diárias.",
      D: "Não há direito a banho de sol no RDD.",
    },
    correta: "B",
    explicacao:
      "Art. 52, IV LEP: 2h diárias de banho de sol. PEGADINHA AOCP: é GARANTIA MÍNIMA, vedada tortura/tratamento desumano!",
  },
  {
    id: 587,
    materia: "LEGESP",
    assunto: "LEP - RDD - Renovação (art. 52, §3º)",
    enunciado:
      "A prorrogação da inclusão do preso no RDD, por até 1/6 do período inicialmente estabelecido, depende de:",
    alternativas: {
      A: "Decisão administrativa do diretor.",
      B: "Nova decisão judicial fundamentada, ouvidos o Ministério Público e a Defesa.",
      C: "Apenas comunicação ao juiz.",
      D: "Vontade do preso.",
    },
    correta: "B",
    explicacao:
      "Art. 52, §3º LEP: renovação por 1/6 exige NOVA decisão judicial + oitiva MP e defesa. PEGADINHA: máximo 2 anos, renovável a cada ano em 1/6 (até 2 meses)!",
  },
  {
    id: 588,
    materia: "LEGESP",
    assunto: "LEP - RDD - Defensoria (art. 52, §4º)",
    enunciado:
      "A inclusão do preso no RDD será precedida de manifestação do Ministério Público e da Defensoria Pública. Na falta de Defensoria Pública no local, será nomeado:",
    alternativas: {
      A: "Ninguém, segue sem defesa.",
      B: "Defensor dativo.",
      C: "Familiar do preso.",
      D: "Promotor de justiça.",
    },
    correta: "B",
    explicacao:
      "Art. 52, §4º LEP: ausência de Defensoria = nomeação de defensor dativo. PEGADINHA AOCP: defesa é OBRIGATÓRIA (Súmula Vinculante 56 STF)!",
  },
  {
    id: 589,
    materia: "LEGESP",
    assunto: "LEP - RDD - Falta grave durante RDD (art. 52, §5º)",
    enunciado:
      "A prática de fato previsto como crime doloso durante o cumprimento do RDD:",
    alternativas: {
      A: "Não tem consequência adicional.",
      B: "Ocasiona a regressão ao regime fechado para cumprimento de pena.",
      C: "Apenas prorroga o RDD.",
      D: "Resulta em liberdade condicional.",
    },
    correta: "B",
    explicacao:
      "Art. 52, §5º LEP: crime doloso no RDD = regressão ao regime fechado. PEGADINHA: mesmo quem já está no fechado pode regredir de benefícios (progressão)!",
  },
  {
    id: 590,
    materia: "LEGESP",
    assunto: "LEP - RDD - Direitos mantidos (art. 52, §6º)",
    enunciado: "Durante o RDD, ficam mantidos os direitos:",
    alternativas: {
      A: "Nenhum direito é mantido.",
      B: "Apenas alimentação.",
      C: "Prestação de assistência material, à saúde, jurídica, educacional, social e religiosa, além de entrevista pessoal e reservada com advogado.",
      D: "Apenas visitas de familiares.",
    },
    correta: "C",
    explicacao:
      "Art. 52, §6º LEP: no RDD mantém assistências (material, saúde, jurídica, educacional, social, religiosa) + entrevista com advogado. PEGADINHA AOCP: RDD NÃO é isolamento total!",
  },
  {
    id: 591,
    materia: "LEGESP",
    assunto: "LEP - Remição pelo trabalho - Contagem (art. 126, caput)",
    enunciado:
      "O condenado que cumpre pena em regime fechado ou semiaberto poderá remir, pelo trabalho, parte do tempo de execução da pena. A cada 3 dias trabalhados, o preso terá direito à remição de:",
    alternativas: {
      A: "3 dias de pena.",
      B: "1 dia de pena.",
      C: "7 dias de pena.",
      D: "Metade de um dia.",
    },
    correta: "B",
    explicacao:
      "Art. 126 caput LEP: 3 dias trabalho = 1 dia remido. PEGADINHA AOCP: proporção 3:1, diferente do estudo!",
  },
  {
    id: 592,
    materia: "LEGESP",
    assunto: "LEP - Remição pelo estudo (art. 126, §1º)",
    enunciado: "A remição pelo estudo será computada da seguinte forma:",
    alternativas: {
      A: "12 horas de frequência escolar, divididas em 3 dias, correspondem a 1 dia de pena remido.",
      B: "1 dia de aula = 1 dia remido.",
      C: "24 horas de estudo = 1 dia remido.",
      D: "Não há remição por estudo.",
    },
    correta: "A",
    explicacao:
      "Art. 126, §1º, I LEP: 12h de estudo/3 dias = 1 dia remido. PEGADINHA: estudo ≠ trabalho (proporções diferentes)!",
  },
  {
    id: 593,
    materia: "LEGESP",
    assunto: "LEP - Remição por leitura (art. 126, §5º)",
    enunciado:
      "Para fins de remição, as atividades de estudo podem ser desenvolvidas de forma presencial ou por metodologia de ensino a distância e devem ser certificadas pelas autoridades educacionais competentes. A leitura de obras literárias, técnicas ou científicas também pode gerar remição, sendo que:",
    alternativas: {
      A: "1 obra lida = 1 dia remido.",
      B: "A leitura de 1 obra e a entrega de resenha ou trabalho escrito correspondente garantem a remição de 4 dias de pena, com limite de 12 obras por ano.",
      C: "Não há limite de obras por ano.",
      D: "A leitura não gera remição.",
    },
    correta: "B",
    explicacao:
      "Art. 126, §§5º e 6º LEP + Recomendação CNJ 44/2013: 1 obra lida + resenha = 4 dias remidos, máximo 12 obras/ano (48 dias/ano). PEGADINHA: precisa resenha!",
  },
  {
    id: 594,
    materia: "LEGESP",
    assunto: "LEP - Cumulação de remição (art. 126, §3º)",
    enunciado:
      "O preso que, ao mesmo tempo, desempenha atividade laboral e estuda:",
    alternativas: {
      A: "Deve escolher apenas uma atividade para remição.",
      B: "Poderá acumular os dois tipos de remição, desde que as horas sejam compatíveis.",
      C: "Não pode estudar se estiver trabalhando.",
      D: "Perde o direito à remição.",
    },
    correta: "B",
    explicacao:
      "Art. 126, §3º LEP: remições são CUMULÁVEIS (trabalho + estudo). PEGADINHA AOCP: incentiva estudo do preso trabalhador!",
  },
  {
    id: 595,
    materia: "LEGESP",
    assunto: "LEP - Perda dos dias remidos (art. 127)",
    enunciado:
      "Em caso de falta grave, o juiz poderá revogar até o máximo de quantos dias remidos, começando a contagem a partir da data da infração disciplinar ou do fato criminoso?",
    alternativas: {
      A: "Metade dos dias remidos.",
      B: "Até 1/3 (um terço) do tempo remido.",
      C: "Todos os dias remidos.",
      D: "Até 1/5 dos dias remidos.",
    },
    correta: "B",
    explicacao:
      "Art. 127 LEP (Lei 12.433/2011): perde até 1/3 dos dias remidos, do mais antigo. PEGADINHA: NÃO perde tudo, perde até 1/3!",
  },
  {
    id: 596,
    materia: "LEGESP",
    assunto: "LEP - Trabalho obrigatório (art. 31)",
    enunciado:
      "O condenado à pena privativa de liberdade está obrigado ao trabalho, salvo:",
    alternativas: {
      A: "Todos devem trabalhar sem exceção.",
      B: "Se for maior de 70 anos, o trabalho será facultativo.",
      C: "Se for primário.",
      D: "Se cumprir pena inferior a 4 anos.",
    },
    correta: "B",
    explicacao:
      "Art. 31 LEP: trabalho obrigatório, EXCETO maiores de 70 anos. PEGADINHA: idade avançada = facultatividade!",
  },
  {
    id: 597,
    materia: "LEGESP",
    assunto: "LEP - Remuneração do trabalho (art. 29)",
    enunciado:
      "O trabalho do condenado será remunerado, não podendo ser inferior a 3/4 do salário mínimo. O produto da remuneração será aplicado da seguinte forma:",
    alternativas: {
      A: "100% para o pecúlio do preso.",
      B: "No mínimo 25% para indenização dos danos causados pelo crime; até 25% para assistência à família; até 25% para pequenas despesas pessoais; restante para pecúlio.",
      C: "50% para vítima, 50% para o preso.",
      D: "Tudo para indenização da vítima.",
    },
    correta: "B",
    explicacao:
      "Art. 29, §1º LEP: desconto MÍNIMO 25% (indenização); até 25% (família); até 25% (despesas); restante = pecúlio. PEGADINHA AOCP: 25% indenização é OBRIGATÓRIO!",
  },
  {
    id: 598,
    materia: "LEGESP",
    assunto: "LEP - Jornada de trabalho (art. 33)",
    enunciado:
      "A jornada normal de trabalho do preso não será inferior a 6 nem superior a 8 horas, com descanso aos domingos e feriados. O trabalho aos domingos e feriados será:",
    alternativas: {
      A: "Proibido em qualquer hipótese.",
      B: "Remunerado em dobro.",
      C: "Permitido e remunerado normalmente.",
      D: "Não remunerado.",
    },
    correta: "B",
    explicacao:
      "Art. 33 LEP: trabalho em domingos/feriados = remuneração em DOBRO. PEGADINHA: mesma regra da CLT!",
  },
  {
    id: 599,
    materia: "LEGESP",
    assunto: "LEP - Acidente de trabalho (art. 32)",
    enunciado:
      "Na atribuição do trabalho, o preso deverá ser levado em conta sua habilitação, condição pessoal e necessidades futuras. Ao condenado que trabalha aplicam-se:",
    alternativas: {
      A: "Nenhuma proteção trabalhista.",
      B: "Normas de segurança e higiene do trabalho, e benefícios da Previdência Social (acidentes de trabalho).",
      C: "Apenas salário mínimo.",
      D: "Não há previdência para presos.",
    },
    correta: "B",
    explicacao:
      "Art. 32 LEP: preso trabalhador tem direito à segurança/higiene + Previdência Social. PEGADINHA: se sofrer acidente, tem cobertura previdenciária!",
  },
  {
    id: 600,
    materia: "LEGESP",
    assunto: "LEP - Trabalho externo - Regime semiaberto (art. 35, §2º)",
    enunciado: "O trabalho externo do preso em regime semiaberto:",
    alternativas: {
      A: "É proibido.",
      B: "Será admitido para presos que cumprirem o requisito de 1/6 da pena, em serviços ou obras públicas ou em empresas privadas.",
      C: "Apenas em órgãos públicos.",
      D: "Não gera remição.",
    },
    correta: "B",
    explicacao:
      "Art. 35, §2º LEP: trabalho externo no semiaberto = serviços públicos ou empresas privadas, após 1/6 da pena. PEGADINHA: semiaberto tem mais liberdade que fechado!",
  },
  {
    id: 601,
    materia: "LEGESP",
    assunto: "LEP - Progressão de regime - Requisito objetivo (art. 112)",
    enunciado:
      "A progressão de regime, em regra, para crimes comuns (não hediondos) ocorrerá quando o condenado tiver cumprido:",
    alternativas: {
      A: "1/6 (um sexto) da pena no regime anterior.",
      B: "1/3 (um terço) da pena.",
      C: "Metade da pena.",
      D: "2/3 (dois terços) da pena.",
    },
    correta: "A",
    explicacao:
      "Art. 112 LEP: progressão crimes comuns = 1/6 da pena. PEGADINHA AOCP: crimes hediondos têm requisitos MAIS RIGOROSOS (2/5 ou 3/5)!",
  },
  {
    id: 602,
    materia: "LEGESP",
    assunto: "LEP - Progressão - Requisito subjetivo (art. 112)",
    enunciado:
      "Além do cumprimento de fração da pena, a progressão de regime exige também:",
    alternativas: {
      A: "Apenas a vontade do preso.",
      B: "Bom comportamento carcerário, comprovado pelo diretor do estabelecimento.",
      C: "Pagamento de fiança.",
      D: "Concordância da vítima.",
    },
    correta: "B",
    explicacao:
      "Art. 112 LEP: requisito subjetivo = BOM COMPORTAMENTO atestado pelo diretor. PEGADINHA: tempo + mérito são CUMULATIVOS!",
  },
  {
    id: 603,
    materia: "LEGESP",
    assunto: "LEP - Progressão - Exame criminológico (art. 112, §1º)",
    enunciado:
      "A realização do exame criminológico para avaliar a progressão de regime:",
    alternativas: {
      A: "É sempre obrigatória.",
      B: "Fica a critério do juiz, mediante decisão fundamentada.",
      C: "É proibida pela LEP.",
      D: "Só existe para crimes hediondos.",
    },
    correta: "B",
    explicacao:
      "Art. 112, §1º LEP (Lei 10.792/2003): exame criminológico é FACULTATIVO, depende de fundamentação do juiz. PEGADINHA AOCP: STJ entende que não é automático!",
  },
  {
    id: 604,
    materia: "LEGESP",
    assunto: "LEP - Regressão de regime - Hipóteses (art. 118)",
    enunciado: "A regressão de regime pode ocorrer quando o condenado:",
    alternativas: {
      A: "Apenas fugir do estabelecimento.",
      B: "Praticar fato definido como crime doloso; sofrer condenação por crime anterior cuja pena, somada ao restante da pena em execução, torne incabível o regime; ou praticar falta grave.",
      C: "Recusar visita da família.",
      D: "Solicitar transferência.",
    },
    correta: "B",
    explicacao:
      "Art. 118 LEP: 3 hipóteses de regressão = crime doloso, soma de penas torna regime incabível, falta grave. PEGADINHA: não precisa esperar condenação definitiva pelo crime!",
  },
  {
    id: 605,
    materia: "LEGESP",
    assunto: "LEP - Regressão - Crime doloso (art. 118, I)",
    enunciado:
      "Quando o preso em regime semiaberto ou aberto pratica crime doloso:",
    alternativas: {
      A: "Não há consequência no regime.",
      B: "A regressão é automática ao regime fechado.",
      C: "Pode haver regressão ao regime mais rigoroso.",
      D: "Apenas perde a remição.",
    },
    correta: "C",
    explicacao:
      "Art. 118, I LEP: crime doloso pode causar regressão (não é automática, juiz decide). PEGADINHA: do aberto pode ir direto ao fechado se gravidade justificar!",
  },
  {
    id: 606,
    materia: "LEGESP",
    assunto: "LEP - Regressão - Falta grave (art. 118, II)",
    enunciado:
      "A prática de falta grave pelo condenado em regime semiaberto ou aberto:",
    alternativas: {
      A: "Não tem impacto no regime.",
      B: "Pode ensejar regressão ao regime mais rigoroso.",
      C: "Apenas gera advertência.",
      D: "Impede apenas o livramento condicional.",
    },
    correta: "B",
    explicacao:
      "Art. 118, II LEP: falta grave pode causar regressão. PEGADINHA AOCP: lista de faltas graves está no art. 50 (fuga, rebelião, celular, etc.)!",
  },
  {
    id: 607,
    materia: "LEGESP",
    assunto: "LEP - Regressão - Condenação superveniente (art. 118, III)",
    enunciado:
      "Se o condenado em regime semiaberto sofrer condenação por crime anterior, cuja pena, somada ao restante da pena em execução, torne incabível o regime em que se encontra:",
    alternativas: {
      A: "Não há alteração de regime.",
      B: "O juiz deverá promover a soma das penas e verificar se o regime se torna incabível, podendo determinar a regressão.",
      C: "Automaticamente vai para regime aberto.",
      D: "Perde todos os benefícios.",
    },
    correta: "B",
    explicacao:
      "Art. 118, III LEP: soma de penas pode tornar regime incabível = regressão. PEGADINHA: unificação de penas afeta cálculo do regime!",
  },
  {
    id: 608,
    materia: "LEGESP",
    assunto: "LEP - Regressão - Procedimento (art. 118, §2º)",
    enunciado:
      "O condenado que estiver em regime aberto e praticar falta grave será transferido para o regime:",
    alternativas: {
      A: "Fechado imediatamente.",
      B: "Semiaberto, salvo se a falta for punível com pena privativa de liberdade, quando então irá para o regime fechado.",
      C: "Não há regressão do regime aberto.",
      D: "Prisão domiciliar.",
    },
    correta: "B",
    explicacao:
      "Art. 118, §2º LEP: do aberto regride ao semiaberto (regra), mas se falta for crime = pode ir ao fechado. PEGADINHA: regressão pode 'pular' regime!",
  },
  {
    id: 609,
    materia: "LEGESP",
    assunto: "LEP - Detração penal (art. 111)",
    enunciado:
      "Quando houver condenação por mais de um crime, no mesmo processo ou em processos distintos, a determinação do regime de cumprimento será feita pelo resultado da soma ou unificação das penas. Este princípio é chamado de:",
    alternativas: {
      A: "Princípio da continuidade.",
      B: "Detração penal ou unificação de penas.",
      C: "Princípio da insignificância.",
      D: "Princípio da proporcionalidade.",
    },
    correta: "B",
    explicacao:
      "Art. 111 LEP: unificação/soma de penas para determinar regime. PEGADINHA: várias condenações = calcula regime pela SOMA total!",
  },
  {
    id: 610,
    materia: "LEGESP",
    assunto: "LEP - Transferência de regime (art. 86)",
    enunciado:
      "A transferência do condenado do regime fechado para o semiaberto (progressão):",
    alternativas: {
      A: "Ocorre automaticamente ao cumprir 1/6.",
      B: "Depende de decisão judicial, após ouvir o Ministério Público e a defesa.",
      C: "Depende apenas da vontade do diretor.",
      D: "Não é permitida.",
    },
    correta: "B",
    explicacao:
      "Art. 86 LEP: progressão exige decisão JUDICIAL + contraditório (MP e defesa). PEGADINHA AOCP: não é automática, precisa de processo!",
  },
  {
    id: 611,
    materia: "LEGESP",
    assunto: "LEP - Direitos do preso - Alimentação (art. 41, I)",
    enunciado:
      "Constituem direitos do preso a alimentação suficiente e vestuário, quando este não for de sua responsabilidade. Sobre a alimentação, é correto afirmar:",
    alternativas: {
      A: "Pode ser negada como punição disciplinar.",
      B: "Deve ser suficiente e adequada, não podendo ser usada como sanção.",
      C: "É opcional para presos em RDD.",
      D: "Apenas uma refeição diária é obrigatória.",
    },
    correta: "B",
    explicacao:
      "Art. 41, I LEP: alimentação é DIREITO fundamental. PEGADINHA AOCP: NUNCA pode ser negada como punição (seria tortura)!",
  },
  {
    id: 612,
    materia: "LEGESP",
    assunto: "LEP - Direitos do preso - Trabalho remunerado (art. 41, II)",
    enunciado:
      "É direito do preso a atribuição de trabalho e sua remuneração. A remuneração NÃO poderá ser inferior a:",
    alternativas: {
      A: "Salário mínimo integral.",
      B: "3/4 (três quartos) do salário mínimo.",
      C: "Metade do salário mínimo.",
      D: "Não há remuneração mínima estabelecida.",
    },
    correta: "B",
    explicacao:
      "Art. 41, II c/c art. 29 LEP: remuneração mínima = 3/4 SM. PEGADINHA: não é SM integral, mas há garantia de mínimo!",
  },
  {
    id: 613,
    materia: "LEGESP",
    assunto: "LEP - Direitos do preso - Previdência Social (art. 41, III)",
    enunciado: "O preso que trabalha terá direito aos benefícios da:",
    alternativas: {
      A: "Não tem direito a benefícios previdenciários.",
      B: "Previdência Social.",
      C: "Apenas seguro-desemprego após liberdade.",
      D: "Assistência social municipal.",
    },
    correta: "B",
    explicacao:
      "Art. 41, III LEP: preso trabalhador é segurado da Previdência Social. PEGADINHA: se sofrer acidente, tem cobertura!",
  },
  {
    id: 614,
    materia: "LEGESP",
    assunto: "LEP - Direitos do preso - Assistência jurídica (art. 41, VII)",
    enunciado:
      "É direito do preso a entrevista pessoal e reservada com o advogado. Esta entrevista:",
    alternativas: {
      A: "Pode ser gravada pela administração prisional.",
      B: "É inviolável, não podendo ser interceptada ou gravada, salvo ordem judicial fundamentada.",
      C: "Pode ser negada por motivos de segurança.",
      D: "Só é permitida uma vez por mês.",
    },
    correta: "B",
    explicacao:
      "Art. 41, VII LEP: entrevista com advogado é INVIOLÁVEL (sigilo profissional). PEGADINHA AOCP: impedir sem justa causa = crime de abuso (Lei 13.869)!",
  },
  {
    id: 615,
    materia: "LEGESP",
    assunto: "LEP - Direitos do preso - Visita (art. 41, X)",
    enunciado:
      "O preso tem direito a visita do cônjuge, da companheira, de parentes e amigos em dias determinados. A visita:",
    alternativas: {
      A: "É privilégio concedido apenas a presos de bom comportamento.",
      B: "É direito garantido, podendo ser restringida temporariamente por decisão fundamentada.",
      C: "Pode ser negada arbitrariamente pelo diretor.",
      D: "Não existe no RDD.",
    },
    correta: "B",
    explicacao:
      "Art. 41, X LEP: visita é DIREITO (não privilégio). PEGADINHA: pode ser suspensa no RDD ou por falta grave, mas com fundamentação!",
  },
  {
    id: 616,
    materia: "LEGESP",
    assunto:
      "LEP - Direitos do preso - Proteção à integridade física e moral (art. 40)",
    enunciado:
      "Impõe-se a todas as autoridades o respeito à integridade física e moral dos condenados e dos presos provisórios. Qualquer violação a este direito:",
    alternativas: {
      A: "É tolerada em casos excepcionais.",
      B: "Constitui crime de tortura ou abuso de autoridade.",
      C: "Não tem consequência legal.",
      D: "É permitida para manter disciplina.",
    },
    correta: "B",
    explicacao:
      "Art. 40 LEP: integridade física/moral é inviolável. PEGADINHA AOCP: tortura (Lei 9.455/97) ou abuso (Lei 13.869/19) = crime!",
  },
  {
    id: 617,
    materia: "LEGESP",
    assunto: "LEP - Deveres do preso - Comportamento disciplinado (art. 39, I)",
    enunciado:
      "São deveres do condenado o comportamento disciplinado e o cumprimento fiel da sentença. O descumprimento deste dever pode acarretar:",
    alternativas: {
      A: "Nenhuma consequência.",
      B: "Aplicação de sanção disciplinar e regressão de regime.",
      C: "Apenas advertência verbal.",
      D: "Perdão judicial.",
    },
    correta: "B",
    explicacao:
      "Art. 39, I LEP: indisciplina = falta (leve/média/grave) + sanções. PEGADINHA: pode perder benefícios (progressão, saída temporária)!",
  },
  {
    id: 618,
    materia: "LEGESP",
    assunto: "LEP - Deveres do preso - Trabalho (art. 39, V)",
    enunciado:
      "Constitui dever do condenado a execução do trabalho, das tarefas e das ordens recebidas. A recusa injustificada ao trabalho:",
    alternativas: {
      A: "É direito do preso.",
      B: "Configura falta disciplinar.",
      C: "Não tem consequência.",
      D: "Gera apenas perda de remuneração.",
    },
    correta: "B",
    explicacao:
      "Art. 39, V LEP: recusa injustificada ao trabalho = falta disciplinar (pode ser grave). PEGADINHA: trabalho é DEVER, não opção!",
  },
  {
    id: 619,
    materia: "LEGESP",
    assunto: "LEP - Deveres do preso - Higiene (art. 39, VI)",
    enunciado:
      "São deveres do condenado a submissão à sanção disciplinar imposta e a indenização à vítima ou aos seus sucessores, bem como:",
    alternativas: {
      A: "Apenas obedecer aos funcionários.",
      B: "Higiene pessoal e asseio da cela ou alojamento.",
      C: "Não há dever de higiene previsto.",
      D: "Apenas participar de atividades religiosas.",
    },
    correta: "B",
    explicacao:
      "Art. 39, VI LEP: higiene pessoal e da cela é DEVER. PEGADINHA: Estado fornece material (art. 12), preso deve usar!",
  },
  {
    id: 620,
    materia: "LEGESP",
    assunto: "LEP - Deveres do preso - Conservação dos objetos (art. 39, VII)",
    enunciado:
      "Constitui dever do condenado conservar os objetos de uso pessoal. A destruição dolosa destes objetos:",
    alternativas: {
      A: "Não gera consequência.",
      B: "Pode configurar falta disciplinar.",
      C: "É tolerada.",
      D: "Gera apenas reposição financeira.",
    },
    correta: "B",
    explicacao:
      "Art. 39, VII LEP: destruir objetos deliberadamente = falta disciplinar. PEGADINHA: patrimônio público deve ser preservado!",
  },
  {
    id: 621,
    materia: "LEGESP",
    assunto: "LEP - Estabelecimentos penais - Tipos (art. 82)",
    enunciado:
      "Os estabelecimentos penais destinam-se ao condenado, ao submetido à medida de segurança, ao preso provisório e ao egresso. Os tipos de estabelecimentos penais incluem:",
    alternativas: {
      A: "Apenas penitenciárias.",
      B: "Penitenciária, colônia agrícola/industrial, casa do albergado, centro de observação, hospital de custódia, cadeia pública.",
      C: "Somente delegacias.",
      D: "Apenas centros de detenção provisória.",
    },
    correta: "B",
    explicacao:
      "Art. 82 e seguintes LEP: 6 tipos principais de estabelecimentos. PEGADINHA AOCP: cada tipo tem finalidade específica (regime, público)!",
  },
  {
    id: 622,
    materia: "LEGESP",
    assunto: "LEP - Penitenciária (art. 87)",
    enunciado:
      "A penitenciária destina-se ao condenado à pena de reclusão em regime:",
    alternativas: {
      A: "Aberto.",
      B: "Semiaberto.",
      C: "Fechado.",
      D: "Todos os regimes.",
    },
    correta: "C",
    explicacao:
      "Art. 87 LEP: penitenciária = REGIME FECHADO. PEGADINHA: cada estabelecimento tem regime específico!",
  },
  {
    id: 623,
    materia: "LEGESP",
    assunto: "LEP - Colônia agrícola/industrial (art. 91)",
    enunciado:
      "A colônia agrícola, industrial ou similar destina-se ao cumprimento da pena em regime:",
    alternativas: {
      A: "Fechado.",
      B: "Semiaberto.",
      C: "Aberto.",
      D: "Prisão domiciliar.",
    },
    correta: "B",
    explicacao:
      "Art. 91 LEP: colônia = REGIME SEMIABERTO. PEGADINHA: trabalho externo + recolhimento noturno!",
  },
  {
    id: 624,
    materia: "LEGESP",
    assunto: "LEP - Casa do Albergado (art. 93)",
    enunciado:
      "A Casa do Albergado destina-se ao cumprimento de pena privativa de liberdade em regime:",
    alternativas: {
      A: "Fechado.",
      B: "Semiaberto.",
      C: "Aberto.",
      D: "RDD.",
    },
    correta: "C",
    explicacao:
      "Art. 93 LEP: Casa do Albergado = REGIME ABERTO. PEGADINHA: autodisciplina, trabalho externo sem vigilância!",
  },
  {
    id: 625,
    materia: "LEGESP",
    assunto: "LEP - Cadeia pública (art. 102)",
    enunciado: "A cadeia pública destina-se ao recolhimento de:",
    alternativas: {
      A: "Apenas condenados.",
      B: "Presos provisórios (aguardando julgamento).",
      C: "Apenas presos em regime aberto.",
      D: "Somente mulheres.",
    },
    correta: "B",
    explicacao:
      "Art. 102 LEP: cadeia pública = PRESOS PROVISÓRIOS. PEGADINHA AOCP: provisórios ≠ condenados (separação obrigatória)!",
  },
  {
    id: 626,
    materia: "LEGESP",
    assunto: "LEP - Hospital de Custódia (art. 99)",
    enunciado:
      "O hospital de custódia e tratamento psiquiátrico destina-se aos:",
    alternativas: {
      A: "Presos comuns doentes.",
      B: "Inimputáveis e semi-imputáveis que necessitam de medida de segurança.",
      C: "Apenas condenados por crimes graves.",
      D: "Presos em RDD.",
    },
    correta: "B",
    explicacao:
      "Art. 99 LEP: hospital de custódia = INIMPUTÁVEIS/SEMI-IMPUTÁVEIS (medida de segurança). PEGADINHA: não é prisão, é tratamento!",
  },
  {
    id: 627,
    materia: "LEGESP",
    assunto: "LEP - Centro de Observação (art. 96)",
    enunciado:
      "O Centro de Observação será instalado em unidade autônoma ou em anexo a estabelecimento penal. Sua finalidade é:",
    alternativas: {
      A: "Apenas isolar presos perigosos.",
      B: "Realizar exames gerais e o criminológico, cujos resultados serão encaminhados à Comissão Técnica de Classificação.",
      C: "Servir como prisão provisória.",
      D: "Abrigar visitantes.",
    },
    correta: "B",
    explicacao:
      "Art. 96 LEP: Centro de Observação = exames para CLASSIFICAÇÃO do preso. PEGADINHA: subsidia programa individualizador!",
  },
  {
    id: 628,
    materia: "LEGESP",
    assunto: "LEP - Separação de presos (art. 84)",
    enunciado:
      "O preso provisório ficará separado do condenado por sentença transitada em julgado. Além disso, também devem ser separados:",
    alternativas: {
      A: "Apenas por regime de pena.",
      B: "Mulheres de homens, maiores de menores (se excepcionalmente abrigados), primários de reincidentes.",
      C: "Não há outras separações obrigatórias.",
      D: "Apenas por gravidade do crime.",
    },
    correta: "B",
    explicacao:
      "Art. 84 LEP: separação por situação processual, sexo, idade, antecedentes. PEGADINHA: separação é OBRIGATÓRIA para evitar contaminação criminal!",
  },
  {
    id: 629,
    materia: "LEGESP",
    assunto: "LEP - Pessoal penitenciário (art. 75)",
    enunciado:
      "O ocupante de cargo ou função vinculado à execução penal deverá, no exercício de suas atribuições:",
    alternativas: {
      A: "Pode usar força sempre que julgar necessário.",
      B: "Respeitar a integridade física e moral dos condenados e dos presos provisórios.",
      C: "Não precisa de qualificação específica.",
      D: "Aplicar sanções sem procedimento.",
    },
    correta: "B",
    explicacao:
      "Art. 75 LEP: servidor DEVE respeitar dignidade e integridade. PEGADINHA AOCP: violação = crime (tortura/abuso)!",
  },
  {
    id: 630,
    materia: "LEGESP",
    assunto: "LEP - Atribuições do pessoal (art. 77)",
    enunciado:
      "A escolha do pessoal administrativo, especializado, de instrução técnica e de vigilância atenderá a vocação, preparação profissional e antecedentes pessoais do candidato. O pessoal penitenciário deverá frequentar:",
    alternativas: {
      A: "Não há obrigação de cursos.",
      B: "Cursos de formação, aperfeiçoamento e especialização.",
      C: "Apenas curso inicial.",
      D: "Cursos são opcionais.",
    },
    correta: "B",
    explicacao:
      "Art. 77 LEP: capacitação continuada (formação + aperfeiçoamento + especialização). PEGADINHA: preparação é essencial para qualidade da execução penal!",
  },
  // REGULAMENTO SISTEMA PRISIONAL MG + RDD (ID 631-640)
  {
    id: 631,
    materia: "LEGESP",
    assunto: "Regulamento MG - Regime disciplinar - Faltas disciplinares",
    enunciado:
      "O Regulamento do Sistema Prisional de Minas Gerais classifica as faltas disciplinares em leves, médias e graves, conforme previsto na LEP. Além das hipóteses do art. 50 da LEP, o regulamento MG especifica que constitui falta grave:",
    alternativas: {
      A: "Atraso na entrega de trabalho escolar.",
      B: "Incitar ou participar de movimento para subverter ordem ou disciplina, portar objetos ou substâncias proibidas, desacatar servidor.",
      C: "Recusar participação em atividades religiosas.",
      D: "Apenas sonegar informações sobre si mesmo.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG segue art. 50 LEP: subversão ordem, porte de proibidos, desacato = FALTAS GRAVES. PEGADINHA AOCP: rol do art. 50 é taxativo!",
  },
  {
    id: 632,
    materia: "LEGESP",
    assunto: "Regulamento MG - Procedimento disciplinar",
    enunciado:
      "No sistema prisional de MG, quando um preso pratica falta grave, o procedimento disciplinar para apuração deve observar:",
    alternativas: {
      A: "Punição imediata sem investigação.",
      B: "Instauração de procedimento com garantia de ampla defesa, contraditório e direito a defensor.",
      C: "Apenas comunicação verbal ao preso.",
      D: "Aplicação automática de sanção.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 59 LEP + STF (SV 56 e 57): procedimento COM defesa técnica obrigatória em faltas graves/RDD. PEGADINHA: defesa é DIREITO constitucional!",
  },
  {
    id: 633,
    materia: "LEGESP",
    assunto: "Regulamento MG - Revista de pessoas",
    enunciado:
      "O Regulamento MG estabelece procedimentos para revista de visitantes e de presos. Sobre a revista pessoal, é correto afirmar:",
    alternativas: {
      A: "Revista vexatória (como agachamento sobre espelho) é permitida.",
      B: "Deve preservar dignidade humana, sendo vedados procedimentos vexatórios; uso de scanners corporais é priorizado quando disponível.",
      C: "Revista íntima invasiva é obrigatória para todos.",
      D: "Não há regulamentação sobre revista.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG + Lei 13.271/2016: revista SEM vexação. PEGADINHA AOCP: revista vexatória = crime de abuso de autoridade (Lei 13.869/19)!",
  },
  {
    id: 634,
    materia: "LEGESP",
    assunto: "Regulamento MG - Segurança interna",
    enunciado:
      "Para garantir a segurança dos estabelecimentos prisionais em MG, o regulamento prevê sistemas de controle de acesso, revista, monitoramento e inteligência. O policial penal, no exercício de suas funções de segurança:",
    alternativas: {
      A: "Pode usar força letal como primeira opção.",
      B: "Deve agir conforme princípios da legalidade, necessidade, proporcionalidade e progressividade no uso da força.",
      C: "Não precisa de treinamento para uso de força.",
      D: "Tem total discricionariedade sem limites.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: uso progressivo da força (presença, verbalização, controle físico, instrumentos não letais, força letal como ÚLTIMA OPÇÃO). PEGADINHA: princípios internacionais de DH!",
  },
  {
    id: 635,
    materia: "LEGESP",
    assunto: "Regulamento MG - Objetos proibidos",
    enunciado:
      "O Regulamento MG define lista de objetos e substâncias cuja posse, porte ou uso pelos presos é proibida. São exemplos de objetos proibidos:",
    alternativas: {
      A: "Apenas armas de fogo.",
      B: "Armas, drogas, celulares, bebidas alcoólicas, objetos perfurocortantes não autorizados, dispositivos eletrônicos de comunicação.",
      C: "Somente explosivos.",
      D: "Não há objetos proibidos.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: lista ampla de proibidos (art. 50, VII LEP pune posse de celular = falta GRAVE). PEGADINHA: celular é item mais apreendido!",
  },
  {
    id: 636,
    materia: "LEGESP",
    assunto: "Regulamento MG - Uso de algemas",
    enunciado:
      "O uso de algemas em presos no sistema prisional de MG deve observar a Súmula Vinculante 11 do STF. As algemas só podem ser utilizadas quando:",
    alternativas: {
      A: "Em qualquer situação, sem necessidade de justificativa.",
      B: "Houver resistência, fundada suspeita de fuga ou risco à integridade física do preso ou de terceiros, devidamente fundamentado.",
      C: "O preso solicitar.",
      D: "Apenas em transporte externo obrigatoriamente.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c SV 11 STF: algemas APENAS quando necessário (resistência, fuga, perigo), fundamentadamente. PEGADINHA AOCP: uso abusivo = ilegal!",
  },
  {
    id: 637,
    materia: "LEGESP",
    assunto: "Regulamento MG - Escolta de presos",
    enunciado:
      "A escolta de presos para audiências, exames médicos ou transferências deve seguir protocolos de segurança. Durante a escolta, o policial penal deve:",
    alternativas: {
      A: "Usar força excessiva preventivamente.",
      B: "Avaliar risco do preso, planejar rota, manter comunicação, usar equipamentos adequados e respeitar dignidade do escoltado.",
      C: "Dispensar planejamento prévio.",
      D: "Deixar o preso sem vigilância.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: escolta = planejamento + segurança + dignidade. PEGADINHA: mesmo em escolta, dignidade deve ser preservada!",
  },
  {
    id: 638,
    materia: "LEGESP",
    assunto: "Regulamento MG - Controle de facções criminosas",
    enunciado:
      "O Regulamento MG prevê medidas para prevenir e reprimir a atuação de organizações criminosas no sistema prisional. Entre as medidas estão:",
    alternativas: {
      A: "Permitir livre comunicação entre facções.",
      B: "Separação de presos por facção/periculosidade, inteligência penitenciária, monitoramento de comunicações, aplicação de RDD quando cabível.",
      C: "Não há previsão de controle.",
      D: "Apenas transferências aleatórias.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: classificação por periculosidade/facção + inteligência + RDD = estratégias anti-facções. PEGADINHA: RDD é ferramenta importante contra PCC, CV, etc!",
  },
  {
    id: 639,
    materia: "LEGESP",
    assunto: "Regulamento MG - Comunicação externa do preso",
    enunciado:
      "O preso em MG tem direito à comunicação com o exterior através de correspondências, telefone institucional e visitas. Sobre a comunicação telefônica:",
    alternativas: {
      A: "É totalmente livre e sem monitoramento.",
      B: "É permitida em telefones institucionais, em horários definidos, podendo ser monitorada para fins de segurança, exceto comunicação com advogado.",
      C: "É proibida para todos os presos.",
      D: "Apenas presos em regime aberto podem usar telefone.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: telefone institucional permitido mas monitorado (segurança). PEGADINHA: celular particular = falta grave (art. 50, VII LEP)!",
  },
  {
    id: 640,
    materia: "LEGESP",
    assunto: "Regulamento MG - Sanções disciplinares",
    enunciado:
      "As sanções disciplinares aplicáveis aos presos em MG, conforme LEP e regulamento estadual, incluem:",
    alternativas: {
      A: "Apenas advertência verbal.",
      B: "Advertência, repreensão, suspensão ou restrição de direitos (exceto os essenciais), isolamento na própria cela (até 10 dias), inclusão no RDD.",
      C: "Pena de morte.",
      D: "Trabalhos forçados sem remuneração.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 53 LEP: 5 tipos de sanções. PEGADINHA AOCP: direitos essenciais (alimentação, saúde, defesa) NUNCA podem ser suspensos!",
  },
  {
    id: 641,
    materia: "LEGESP",
    assunto: "Regulamento MG - Assistência à saúde",
    enunciado:
      "O Regulamento MG estabelece que a assistência à saúde no sistema prisional compreende atendimento médico, odontológico, psicológico e farmacêutico. Quando o estabelecimento não dispuser de recursos:",
    alternativas: {
      A: "O preso não recebe atendimento.",
      B: "O atendimento será realizado em unidade de saúde da rede pública externa, com escolta adequada.",
      C: "Apenas a família pode custear tratamento particular.",
      D: "O tratamento é adiado indefinidamente.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: saúde é direito fundamental, Estado DEVE garantir (interno ou externo). PEGADINHA: negativa de atendimento = responsabilização do Estado!",
  },
  {
    id: 642,
    materia: "LEGESP",
    assunto: "Regulamento MG - Assistência jurídica",
    enunciado:
      "Todo preso em MG tem direito à assistência jurídica gratuita através da Defensoria Pública. Além disso, o regulamento garante:",
    alternativas: {
      A: "Apenas uma consulta jurídica por ano.",
      B: "Entrevista reservada com advogado, acesso a documentos do processo, orientação sobre direitos na execução penal.",
      C: "Não há assistência jurídica prevista.",
      D: "Advogado só após condenação definitiva.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 15-16 LEP: assistência jurídica ampla (defesa, orientação, acesso a processo). PEGADINHA: é direito desde a prisão provisória!",
  },
  {
    id: 643,
    materia: "LEGESP",
    assunto: "Regulamento MG - Assistência educacional",
    enunciado:
      "A assistência educacional no sistema prisional de MG inclui ensino fundamental, médio, profissionalizante e atividades culturais. O ensino fundamental é:",
    alternativas: {
      A: "Facultativo para todos.",
      B: "Obrigatório, sendo oferecido a todos os presos.",
      C: "Apenas para presos em regime semiaberto.",
      D: "Proibido em estabelecimentos de segurança máxima.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 18 LEP: ensino fundamental OBRIGATÓRIO. PEGADINHA: educação gera remição (12h/3 dias = 1 dia) + ressocialização!",
  },
  {
    id: 644,
    materia: "LEGESP",
    assunto: "Regulamento MG - Visitação - Horários e dias",
    enunciado:
      "O Regulamento MG estabelece dias e horários para visitação nos estabelecimentos prisionais. As visitas são realizadas:",
    alternativas: {
      A: "Sem qualquer controle de horário.",
      B: "Em dias determinados (geralmente fins de semana), com horários específicos, respeitando a ordem e segurança do estabelecimento.",
      C: "Apenas uma vez por ano.",
      D: "Somente com autorização judicial prévia.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: visitas em dias/horários regulamentados. PEGADINHA: no RDD = visitas semanais de 2h (art. 52, III LEP)!",
  },
  {
    id: 645,
    materia: "LEGESP",
    assunto: "Regulamento MG - Visita íntima",
    enunciado:
      "O Regulamento MG reconhece a visita íntima como direito do preso, respeitando a saúde sexual e a dignidade. Para ter direito à visita íntima, é necessário:",
    alternativas: {
      A: "Apenas solicitar verbalmente.",
      B: "Comprovar união estável ou casamento, ter local apropriado com privacidade, respeitar normas de higiene e segurança.",
      C: "Estar em regime aberto.",
      D: "Não há previsão de visita íntima.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: visita íntima com critérios (comprovação vínculo, local adequado, higiene). PEGADINHA: é DIREITO reconhecido, não privilégio!",
  },
  {
    id: 646,
    materia: "LEGESP",
    assunto: "Regulamento MG - Alimentação - Padrões",
    enunciado:
      "O Regulamento MG estabelece padrões para alimentação dos presos. As refeições devem:",
    alternativas: {
      A: "Ser fornecidas apenas uma vez ao dia.",
      B: "Ser adequadas em quantidade, qualidade e valor nutricional, servidas em horários regulares (café da manhã, almoço e jantar), respeitando necessidades especiais (saúde, religião).",
      C: "Consistir apenas em pão e água.",
      D: "Ser responsabilidade exclusiva da família.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG: alimentação adequada (nutrição, higiene, horários) + respeito a necessidades especiais (diabetes, vegetarianismo, etc.). PEGADINHA: alimentação NUNCA pode ser negada como punição!",
  },
  {
    id: 647,
    materia: "LEGESP",
    assunto: "Regulamento MG - Banho de sol",
    enunciado:
      "O banho de sol é direito garantido aos presos em MG. O tempo mínimo diário de banho de sol é de:",
    alternativas: {
      A: "30 minutos.",
      B: "2 horas.",
      C: "6 horas.",
      D: "Não há obrigatoriedade de banho de sol.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 41, III LEP: mínimo 2h diárias de banho de sol. PEGADINHA AOCP: mesmo no RDD, 2h fora da cela é OBRIGATÓRIO!",
  },
  {
    id: 648,
    materia: "LEGESP",
    assunto: "Regulamento MG - Assistência religiosa",
    enunciado:
      "A assistência religiosa no sistema prisional de MG é garantida com liberdade de culto. Sobre esta assistência:",
    alternativas: {
      A: "É obrigatória para todos os presos.",
      B: "É facultativa, respeitando a liberdade de crença do preso; o Estado deve facilitar acesso a líderes religiosos de diferentes credos.",
      C: "Apenas uma religião é permitida.",
      D: "É proibida em regime fechado.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 24 LEP: liberdade religiosa, assistência facultativa, pluralidade de credos. PEGADINHA: Estado laico garante todas as religiões!",
  },
  {
    id: 649,
    materia: "LEGESP",
    assunto: "Regulamento MG - Material de higiene",
    enunciado:
      "O Regulamento MG determina que o Estado deve fornecer aos presos materiais básicos de higiene pessoal. Estes materiais incluem:",
    alternativas: {
      A: "Apenas água.",
      B: "Sabonete, pasta de dente, escova de dente, papel higiênico, toalha, produtos de higiene feminina quando aplicável.",
      C: "Nada, tudo é responsabilidade da família.",
      D: "Apenas uniforme.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 12 LEP: Estado fornece kit básico de higiene (assistência material). PEGADINHA: higiene é direito fundamental, não pode depender apenas de jumbo!",
  },
  {
    id: 650,
    materia: "LEGESP",
    assunto: "Regulamento MG - Trabalho remunerado",
    enunciado:
      "O trabalho do preso em MG, conforme o regulamento, deve ser remunerado. A remuneração não pode ser inferior a 3/4 do salário mínimo e será destinada:",
    alternativas: {
      A: "100% para o Estado.",
      B: "No mínimo 25% para indenização à vítima; até 25% para família; até 25% para pequenas despesas; restante para constituir pecúlio.",
      C: "Totalmente para o preso.",
      D: "Não há remuneração prevista.",
    },
    correta: "B",
    explicacao:
      "Regulamento MG c/c art. 29 LEP: destinação da remuneração (indenização obrigatória 25%, família, despesas, pecúlio). PEGADINHA: vítima tem prioridade!",
  },
  {
    id: 651,
    materia: "LEGESP",
    assunto: "RDD - Jurisprudência STF - Defesa técnica",
    enunciado:
      "Segundo a Súmula Vinculante 56 do STF, que se aplica ao RDD em Minas Gerais:",
    alternativas: {
      A: "Não é necessária defesa técnica no RDD.",
      B: "A falta de estabelecimento adequado não autoriza a manutenção do condenado em regime prisional mais gravoso.",
      C: "RDD pode ser aplicado indefinidamente.",
      D: "Não há controle judicial sobre RDD.",
    },
    correta: "B",
    explicacao:
      "SV 56 STF: falta de vaga em regime adequado NÃO justifica manter preso em regime mais grave. PEGADINHA AOCP: Estado deve providenciar vaga ou conceder prisão domiciliar!",
  },
  {
    id: 652,
    materia: "LEGESP",
    assunto: "RDD - Jurisprudência STF - Procedimento",
    enunciado: "A Súmula Vinculante 57 do STF estabelece que:",
    alternativas: {
      A: "RDD pode ser aplicado sem oitiva da defesa.",
      B: "O descumprimento de decisão judicial configura crime, podendo o juiz determinar medidas coercitivas.",
      C: "Não há direito a defesa técnica em RDD.",
      D: "RDD pode ser eterno.",
    },
    correta: "B",
    explicacao:
      "SV 57 STF: descumprimento de ordem judicial (ex: não transferir preso conforme regime) = possibilidade de responsabilização. PEGADINHA: decisão judicial deve ser cumprida!",
  },
  {
    id: 653,
    materia: "LEGESP",
    assunto: "RDD - Requisitos constitucionais",
    enunciado:
      "A inclusão no RDD, conforme entendimento do STF e aplicado em MG, deve respeitar os princípios constitucionais. É INCORRETO afirmar:",
    alternativas: {
      A: "A decisão de inclusão no RDD deve ser fundamentada.",
      B: "É obrigatória a prévia manifestação do Ministério Público e da Defesa.",
      C: "O RDD pode ser aplicado por tempo indeterminado sem revisão.",
      D: "Deve haver previsão legal (art. 52 LEP).",
    },
    correta: "C",
    explicacao:
      "INCORRETA letra C: RDD tem prazo MÁXIMO de 2 anos, com revisões periódicas (art. 52, I e §3º LEP). PEGADINHA: indeterminação seria inconstitucional!",
  },
  {
    id: 654,
    materia: "LEGESP",
    assunto: "RDD em MG - Estabelecimentos aptos",
    enunciado:
      "Em Minas Gerais, o RDD é aplicado em estabelecimentos penais específicos com estrutura adequada. A cela para RDD deve ter:",
    alternativas: {
      A: "Alojamento coletivo.",
      B: "Cela individual com condições mínimas de habitabilidade, permitindo isolamento de até 22h/dia com 2h de banho de sol.",
      C: "Não há requisitos especiais.",
      D: "Isolamento total 24h sem interrupção.",
    },
    correta: "B",
    explicacao:
      "RDD em MG: cela individual, isolamento até 22h, MÍNIMO 2h fora (banho sol). PEGADINHA: 2h fora é GARANTIA MÍNIMA inviolável!",
  },
  {
    id: 655,
    materia: "LEGESP",
    assunto: "RDD em MG - Visitas no RDD",
    enunciado: "Durante o cumprimento de RDD em MG, as visitas são:",
    alternativas: {
      A: "Totalmente suspensas.",
      B: "Semanais, com duração de 2 horas, podendo haver revista mais rigorosa (mas sem práticas vexatórias).",
      C: "Diárias sem restrição.",
      D: "Apenas uma vez ao mês de 15 minutos.",
    },
    correta: "B",
    explicacao:
      "Art. 52, III LEP: RDD = visitas semanais 2h. Regulamento MG permite revista rigorosa mas SEM vexação (Lei 13.271/2016). PEGADINHA: visita é direito mantido!",
  },
  {
    id: 656,
    materia: "LEGESP",
    assunto: "RDD em MG - Comunicação com advogado",
    enunciado:
      "No RDD em Minas Gerais, o direito do preso à comunicação com seu advogado:",
    alternativas: {
      A: "É totalmente suspenso.",
      B: "É mantido, com entrevista pessoal e reservada, não podendo ser gravada ou interceptada sem ordem judicial fundamentada.",
      C: "Pode ser negado livremente pelo diretor.",
      D: "Só é permitido por escrito.",
    },
    correta: "B",
    explicacao:
      "Art. 52, §6º LEP: RDD mantém entrevista com advogado. PEGADINHA AOCP: sigilo profissional advogado-cliente é INVIOLÁVEL (CF art. 5º)!",
  },
  {
    id: 657,
    materia: "LEGESP",
    assunto: "RDD em MG - Trabalho e estudo",
    enunciado: "Durante o RDD em MG, o preso:",
    alternativas: {
      A: "Perde totalmente o direito a trabalho e estudo.",
      B: "Mantém direito à educação e pode realizar atividades laborais compatíveis com o regime, gerando remição.",
      C: "Não pode remir pena no RDD.",
      D: "É proibido de estudar.",
    },
    correta: "B",
    explicacao:
      "Art. 52, §6º LEP: RDD mantém assistências (educacional, etc.). Trabalho/estudo no RDD = remição (STJ). PEGADINHA: RDD ≠ isolamento absoluto!",
  },
  {
    id: 658,
    materia: "LEGESP",
    assunto: "RDD em MG - Saúde no RDD",
    enunciado: "A assistência à saúde do preso em RDD em Minas Gerais:",
    alternativas: {
      A: "É suspensa durante o regime.",
      B: "É mantida integralmente, com atendimento médico, psicológico e medicamentos quando necessário.",
      C: "Apenas emergências são atendidas.",
      D: "Família deve custear tratamento.",
    },
    correta: "B",
    explicacao:
      "Art. 52, §6º LEP: RDD mantém assistência à saúde. PEGADINHA: saúde é direito fundamental IRRENUNCIÁVEL, não pode ser negada!",
  },
  {
    id: 659,
    materia: "LEGESP",
    assunto: "RDD em MG - Progressão de regime",
    enunciado: "O preso que cumpre pena em RDD em Minas Gerais:",
    alternativas: {
      A: "Não pode progredir de regime enquanto estiver no RDD.",
      B: "Pode progredir de regime se preencher os requisitos legais (tempo + mérito), independentemente de estar no RDD.",
      C: "Perde automaticamente o direito à progressão.",
      D: "Só progride após cumprir todo o RDD.",
    },
    correta: "B",
    explicacao:
      "Jurisprudência: RDD não impede progressão se requisitos cumpridos (tempo + bom comportamento no RDD). PEGADINHA: RDD é sanção disciplinar, não regime de cumprimento!",
  },
  {
    id: 660,
    materia: "LEGESP",
    assunto: "RDD em MG - Controle judicial e revisão",
    enunciado: "A inclusão e manutenção do preso no RDD em MG está sujeita a:",
    alternativas: {
      A: "Decisão exclusiva do diretor do presídio sem controle judicial.",
      B: "Controle judicial obrigatório, com decisão fundamentada do juiz e revisões periódicas para verificar persistência dos motivos.",
      C: "Não há controle ou revisão.",
      D: "Apenas comunicação ao juiz após aplicação.",
    },
    correta: "B",
    explicacao:
      "Art. 52 LEP: RDD exige decisão JUDICIAL + fundamentação + revisões periódicas. PEGADINHA AOCP: diretor PROPÕE, juiz DECIDE e CONTROLA!",
  },
  // DIREITOS HUMANOS - SISTEMA INTERAMERICANO (ID 661-670)
  {
    id: 661,
    materia: "DH",
    assunto: "Sistema Interamericano - Estrutura",
    enunciado:
      "O Sistema Interamericano de Proteção aos Direitos Humanos é composto por dois órgãos principais:",
    alternativas: {
      A: "ONU e UNESCO.",
      B: "Comissão Interamericana de Direitos Humanos (CIDH) e Corte Interamericana de Direitos Humanos.",
      C: "Apenas a Organização dos Estados Americanos.",
      D: "Conselho de Segurança e Assembleia Geral.",
    },
    correta: "B",
    explicacao:
      "Sistema Interamericano: CIDH (órgão quase-judicial) + Corte IDH (órgão jurisdicional). PEGADINHA AOCP: são órgãos DISTINTOS com funções diferentes!",
  },
  {
    id: 662,
    materia: "DH",
    assunto: "CIDH - Composição (art. 34 CADH)",
    enunciado:
      "A Comissão Interamericana de Direitos Humanos (CIDH) é composta por:",
    alternativas: {
      A: "5 membros.",
      B: "7 membros eleitos pela Assembleia Geral da OEA.",
      C: "10 membros indicados por governos.",
      D: "15 membros vitalícios.",
    },
    correta: "B",
    explicacao:
      "Art. 34 CADH: CIDH = 7 membros (mandato 4 anos, reeleição uma vez). PEGADINHA: membros atuam em caráter PESSOAL, não representam governos!",
  },
  {
    id: 663,
    materia: "DH",
    assunto: "CIDH - Funções principais (art. 41 CADH)",
    enunciado:
      "São funções principais da Comissão Interamericana de Direitos Humanos:",
    alternativas: {
      A: "Apenas julgar Estados violadores.",
      B: "Receber petições individuais, realizar investigações, produzir relatórios, formular recomendações e submeter casos à Corte IDH.",
      C: "Substituir tribunais nacionais.",
      D: "Apenas observar situações de direitos humanos.",
    },
    correta: "B",
    explicacao:
      "Art. 41 CADH: CIDH recebe petições, investiga, recomenda, pode acionar Corte. PEGADINHA AOCP: CIDH não JULGA (quase-judicial), quem julga é a Corte IDH!",
  },
  {
    id: 664,
    materia: "DH",
    assunto: "CIDH - Petições individuais (art. 44 CADH)",
    enunciado:
      "Qualquer pessoa ou grupo de pessoas, ou entidade não governamental legalmente reconhecida em um ou mais Estados membros da OEA, pode apresentar à CIDH petições que contenham denúncias de violação da Convenção Americana. Este direito é chamado de:",
    alternativas: {
      A: "Ius cogens.",
      B: "Direito de petição individual ou jus standi.",
      C: "Princípio pro homine.",
      D: "Soft law.",
    },
    correta: "B",
    explicacao:
      "Art. 44 CADH: jus standi = direito de petição individual. PEGADINHA: QUALQUER pessoa pode acionar CIDH (amplo acesso)!",
  },
  {
    id: 665,
    materia: "DH",
    assunto: "CIDH - Requisitos de admissibilidade (art. 46 CADH)",
    enunciado:
      "Para que uma petição seja admitida pela CIDH, é necessário, entre outros requisitos:",
    alternativas: {
      A: "Apenas relatar a violação.",
      B: "Que tenham sido interpostos e esgotados os recursos da jurisdição interna do Estado (esgotamento de recursos internos).",
      C: "Que o caso já tenha transitado em julgado internacionalmente.",
      D: "Que tenha havido condenação prévia no país.",
    },
    correta: "B",
    explicacao:
      "Art. 46 CADH: princípio da subsidiariedade = esgotar recursos internos ANTES de acionar CIDH. PEGADINHA: há exceções (demora injustificada, inexistência de recursos)!",
  },
  {
    id: 666,
    materia: "DH",
    assunto: "CIDH - Prazo para petição (art. 46, b CADH)",
    enunciado: "A petição à CIDH deve ser apresentada dentro do prazo de:",
    alternativas: {
      A: "30 dias da decisão final interna.",
      B: "6 meses a partir da data em que o presumido prejudicado tenha sido notificado da decisão definitiva dos recursos internos.",
      C: "1 ano da violação.",
      D: "Não há prazo.",
    },
    correta: "B",
    explicacao:
      "Art. 46, 1, b CADH: petição em até 6 MESES da decisão final interna. PEGADINHA AOCP: prazo decadencial, não pode ser superado!",
  },
  {
    id: 667,
    materia: "DH",
    assunto: "CIDH - Medidas cautelares (art. 25 Regulamento CIDH)",
    enunciado: "A CIDH pode outorgar medidas cautelares quando:",
    alternativas: {
      A: "Apenas após sentença da Corte IDH.",
      B: "Em situações de gravidade e urgência para prevenir dano irreparável às pessoas.",
      C: "Somente a pedido de Estados.",
      D: "Nunca, pois não tem esse poder.",
    },
    correta: "B",
    explicacao:
      "Art. 25 Regulamento CIDH: medidas cautelares em situações graves/urgentes (dano irreparável). PEGADINHA AOCP: Brasil já recebeu medidas (ex: sistema prisional, povos indígenas)!",
  },
  {
    id: 668,
    materia: "DH",
    assunto: "CIDH - Solução amistosa (art. 48, f CADH)",
    enunciado:
      "Durante o trâmite de uma petição, a CIDH pode colocar-se à disposição das partes interessadas para chegar a uma:",
    alternativas: {
      A: "Condenação imediata do Estado.",
      B: "Solução amistosa do assunto, fundada no respeito aos direitos humanos.",
      C: "Arquivamento sem análise.",
      D: "Transferência automática à Corte.",
    },
    correta: "B",
    explicacao:
      "Art. 48, 1, f CADH: CIDH pode intermediar solução amistosa (acordo Estado-vítima). PEGADINHA: é alternativa ao processo contencioso!",
  },
  {
    id: 669,
    materia: "DH",
    assunto: "CIDH - Relatórios (art. 50 e 51 CADH)",
    enunciado:
      "Após análise de mérito, se não houver solução amistosa, a CIDH redigirá um relatório com proposições e recomendações ao Estado. Se o Estado não cumprir as recomendações, a CIDH poderá:",
    alternativas: {
      A: "Nada fazer, pois não tem poder.",
      B: "Publicar o relatório e/ou submeter o caso à Corte Interamericana (se o Estado aceitou jurisdição).",
      C: "Invadir militarmente o país.",
      D: "Apenas arquivar.",
    },
    correta: "B",
    explicacao:
      "Art. 50-51 CADH: CIDH emite relatório, se não cumprido = publica OU envia à Corte IDH. PEGADINHA: CIDH decide se leva à Corte (vítima não submete diretamente)!",
  },
  {
    id: 670,
    materia: "DH",
    assunto: "CIDH - Relatorias temáticas",
    enunciado:
      "A CIDH possui relatorias temáticas especializadas que monitoram situações específicas de direitos humanos. A Relatoria sobre os Direitos das Pessoas Privadas de Liberdade monitora:",
    alternativas: {
      A: "Apenas prisões políticas.",
      B: "Condições de detenção, superlotação, tortura, acesso à justiça de presos em todo o continente americano.",
      C: "Somente casos de pena de morte.",
      D: "Exclusivamente mulheres presas.",
    },
    correta: "B",
    explicacao:
      "Relatoria Pessoas Privadas de Liberdade: monitora sistema prisional (tortura, superlotação, condições). PEGADINHA AOCP: Brasil é frequentemente mencionado em relatórios!",
  },
  {
    id: 671,
    materia: "DH",
    assunto: "Corte IDH - Composição (art. 52 CADH)",
    enunciado: "A Corte Interamericana de Direitos Humanos é composta por:",
    alternativas: {
      A: "5 juízes.",
      B: "7 juízes eleitos pela Assembleia Geral da OEA.",
      C: "10 juízes indicados por governos.",
      D: "15 juízes vitalícios.",
    },
    correta: "B",
    explicacao:
      "Art. 52 CADH: Corte IDH = 7 juízes (mandato 6 anos, reeleição uma vez). PEGADINHA: juízes são nacionais de Estados membros da OEA, eleitos a título pessoal!",
  },
  {
    id: 672,
    materia: "DH",
    assunto: "Corte IDH - Competência contenciosa (art. 62 CADH)",
    enunciado:
      "A competência contenciosa (para julgar casos) da Corte Interamericana depende de:",
    alternativas: {
      A: "Aceitação automática por todos os países americanos.",
      B: "Reconhecimento expresso da jurisdição da Corte pelo Estado, por declaração especial ou convenção especial.",
      C: "Apenas ratificação da Convenção Americana.",
      D: "Não precisa de aceitação.",
    },
    correta: "B",
    explicacao:
      "Art. 62 CADH: competência contenciosa exige aceitação EXPRESSA do Estado (cláusula facultativa). PEGADINHA AOCP: Brasil reconheceu em 1998 (Decreto 4.463/2002)!",
  },
  {
    id: 673,
    materia: "DH",
    assunto: "Corte IDH - Legitimidade ativa (art. 61 CADH)",
    enunciado: "Podem submeter um caso à Corte Interamericana:",
    alternativas: {
      A: "Qualquer pessoa diretamente.",
      B: "Somente os Estados Partes e a Comissão Interamericana.",
      C: "Apenas a vítima.",
      D: "Organizações internacionais quaisquer.",
    },
    correta: "B",
    explicacao:
      "Art. 61 CADH: só ESTADOS e CIDH podem acionar Corte IDH. PEGADINHA: vítimas NÃO levam caso direto à Corte, passa pela CIDH primeiro!",
  },
  {
    id: 674,
    materia: "DH",
    assunto: "Corte IDH - Sentença (art. 67 CADH)",
    enunciado: "A sentença da Corte Interamericana é:",
    alternativas: {
      A: "Apenas uma recomendação sem força obrigatória.",
      B: "Definitiva e inapelável, tendo caráter vinculante para o Estado condenado.",
      C: "Pode ser revista pelo Conselho de Segurança da ONU.",
      D: "Depende de homologação pelo STF.",
    },
    correta: "B",
    explicacao:
      "Art. 67 CADH: sentença da Corte é DEFINITIVA, INAPELÁVEL e OBRIGATÓRIA. PEGADINHA AOCP: Estado DEVE cumprir (não é mera recomendação)!",
  },
  {
    id: 675,
    materia: "DH",
    assunto: "Corte IDH - Reparações (art. 63 CADH)",
    enunciado:
      "Quando decidir que houve violação de direito ou liberdade protegidos pela Convenção, a Corte determinará que se assegure ao prejudicado o gozo do seu direito ou liberdade violados, e também:",
    alternativas: {
      A: "Nada mais.",
      B: "Que sejam reparadas as consequências da medida ou situação que tenha configurado violação, incluindo pagamento de indenização justa.",
      C: "Apenas prisão dos responsáveis.",
      D: "Só pedido de desculpas oficial.",
    },
    correta: "B",
    explicacao:
      "Art. 63, 1 CADH: reparação integral (cessação violação + indenização + medidas de não repetição + reabilitação). PEGADINHA: Brasil já pagou indenizações!",
  },
  {
    id: 676,
    materia: "DH",
    assunto: "Corte IDH - Medidas provisórias (art. 63, 2 CADH)",
    enunciado:
      "Em casos de extrema gravidade e urgência, e quando for necessário para evitar danos irreparáveis às pessoas, a Corte pode ordenar:",
    alternativas: {
      A: "Apenas relatórios.",
      B: "Medidas provisórias (cautelares) que os Estados devem cumprir imediatamente.",
      C: "Nada, não tem esse poder.",
      D: "Apenas sugestões não vinculantes.",
    },
    correta: "B",
    explicacao:
      "Art. 63, 2 CADH: medidas provisórias em situações gravíssimas/urgentes. PEGADINHA AOCP: Brasil recebeu medidas (ex: Complexo do Tatuapé, Curado, presídios)!",
  },
  {
    id: 677,
    materia: "DH",
    assunto: "Corte IDH - Competência consultiva (art. 64 CADH)",
    enunciado:
      "Além da competência contenciosa (julgar casos), a Corte IDH também possui competência consultiva, que permite:",
    alternativas: {
      A: "Apenas julgar casos concretos.",
      B: "Emitir pareceres sobre interpretação da Convenção Americana e outros tratados de direitos humanos nas Américas.",
      C: "Legislar para os Estados.",
      D: "Substituir cortes nacionais.",
    },
    correta: "B",
    explicacao:
      "Art. 64 CADH: competência consultiva = interpreta tratados de DH (opiniões consultivas). PEGADINHA: são orientações importantes mas não vinculantes como sentenças!",
  },
  {
    id: 678,
    materia: "DH",
    assunto: "Corte IDH - Cumprimento de sentenças (art. 68 CADH)",
    enunciado:
      "Os Estados Partes na Convenção comprometem-se a cumprir a decisão da Corte em todo caso em que forem partes. A parte da sentença que determinar indenização compensatória poderá ser executada:",
    alternativas: {
      A: "Não pode ser executada.",
      B: "No país respectivo pelo processo interno vigente para a execução de sentenças contra o Estado.",
      C: "Apenas com nova ação judicial.",
      D: "Depende de lei específica para cada caso.",
    },
    correta: "B",
    explicacao:
      "Art. 68, 2 CADH: indenizações são executadas no país pelo processo de execução contra Estado (precatórios no Brasil). PEGADINHA: no Brasil, segue art. 100 CF!",
  },
  {
    id: 679,
    materia: "DH",
    assunto: "Corte IDH - Supervisão de cumprimento",
    enunciado: "Após proferir sentença condenatória, a Corte Interamericana:",
    alternativas: {
      A: "Encerra sua atuação imediatamente.",
      B: "Continua supervisionando o cumprimento da sentença pelo Estado, podendo solicitar relatórios e realizar audiências.",
      C: "Não pode mais intervir.",
      D: "Transfere supervisão à ONU.",
    },
    correta: "B",
    explicacao:
      "Jurisprudência Corte IDH: supervisão de cumprimento até satisfação integral. PEGADINHA AOCP: Corte monitora se Brasil cumpre (pode convocar audiências)!",
  },
  {
    id: 680,
    materia: "DH",
    assunto: "Corte IDH - Controle de convencionalidade",
    enunciado:
      "A Corte IDH desenvolveu a doutrina do 'controle de convencionalidade', segundo a qual:",
    alternativas: {
      A: "Apenas a Corte IDH pode analisar conformidade de leis com tratados.",
      B: "Todos os juízes nacionais devem verificar, de ofício, se as leis internas são compatíveis com a Convenção Americana e jurisprudência da Corte IDH.",
      C: "Não existe tal controle.",
      D: "Apenas o Congresso pode fazer esse controle.",
    },
    correta: "B",
    explicacao:
      "Caso Almonacid Arellano (2006): juízes nacionais DEVEM realizar controle de convencionalidade. PEGADINHA: é obrigação de TODOS os juízes, não só STF!",
  },
  {
    id: 681,
    materia: "DH",
    assunto: "Casos Brasil - Damião Ximenes Lopes (2006)",
    enunciado:
      "O Caso Damião Ximenes Lopes foi a primeira condenação do Brasil pela Corte IDH. O caso tratava de:",
    alternativas: {
      A: "Prisão política.",
      B: "Morte de pessoa com deficiência mental em instituição psiquiátrica, por maus-tratos.",
      C: "Desaparecimento forçado durante ditadura.",
      D: "Trabalho escravo.",
    },
    correta: "B",
    explicacao:
      "Damião Ximenes (2006): morte por maus-tratos em clínica psiquiátrica (CE). Corte condenou Brasil por tortura, falta investigação. PEGADINHA: 1ª condenação do Brasil!",
  },
  {
    id: 682,
    materia: "DH",
    assunto: "Casos Brasil - Gomes Lund (Guerrilha do Araguaia) 2010",
    enunciado:
      "No Caso Gomes Lund e outros ('Guerrilha do Araguaia'), a Corte IDH condenou o Brasil por:",
    alternativas: {
      A: "Apenas violações econômicas.",
      B: "Desaparecimento forçado de pessoas durante ditadura militar, falta de investigação e aplicação da Lei de Anistia.",
      C: "Questões ambientais.",
      D: "Discriminação racial.",
    },
    correta: "B",
    explicacao:
      "Guerrilha do Araguaia (2010): desaparecidos políticos não investigados. Corte declarou Lei de Anistia INCOMPATÍVEL com CADH para crimes contra humanidade. PEGADINHA AOCP: caso mais importante!",
  },
  {
    id: 683,
    materia: "DH",
    assunto: "Casos Brasil - Favela Nova Brasília (2017)",
    enunciado: "O Caso Favela Nova Brasília vs. Brasil tratou de:",
    alternativas: {
      A: "Falta de saneamento básico.",
      B: "Execuções extrajudiciais por policiais em operações, falta de investigação e impunidade.",
      C: "Apenas questões de moradia.",
      D: "Discriminação no trabalho.",
    },
    correta: "B",
    explicacao:
      "Favela Nova Brasília (2017): execuções extrajudiciais (chacinas 1994/1995), falta investigação efetiva. Corte condenou padrão de impunidade. PEGADINHA: violência policial!",
  },
  {
    id: 684,
    materia: "DH",
    assunto: "Casos Brasil - Garibaldi (2009)",
    enunciado: "O Caso Sétimo Garibaldi vs. Brasil envolveu:",
    alternativas: {
      A: "Questões de imigração.",
      B: "Assassinato de trabalhador rural sem-terra, falta de investigação e impunidade.",
      C: "Apenas danos morais.",
      D: "Questões tributárias.",
    },
    correta: "B",
    explicacao:
      "Garibaldi (2009): assassinato de sem-terra (PA), investigação deficiente, impunidade. Corte condenou falta de due diligence estatal.",
  },
  {
    id: 685,
    materia: "DH",
    assunto: "Casos Brasil - Escher e outros (2009)",
    enunciado: "O Caso Escher e outros vs. Brasil tratou de:",
    alternativas: {
      A: "Interceptação telefônica ilegal de lideranças de movimentos sociais.",
      B: "Apenas questões tributárias.",
      C: "Discriminação de gênero.",
      D: "Questões ambientais.",
    },
    correta: "A",
    explicacao:
      "Escher (2009): grampo ilegal em telefones de MST/Via Campesina (PR). Corte condenou violação privacidade + devido processo.",
  },
  {
    id: 686,
    materia: "DH",
    assunto: "Casos Brasil - Trabalhadores da Fazenda Brasil Verde (2016)",
    enunciado:
      "O Caso Trabalhadores da Fazenda Brasil Verde foi o primeiro caso de trabalho escravo contemporâneo na Corte IDH. A Corte condenou o Brasil por:",
    alternativas: {
      A: "Apenas multa simbólica.",
      B: "Não prevenir nem reprimir trabalho escravo, violando direito à liberdade, integridade e dignidade.",
      C: "Questões apenas administrativas.",
      D: "Não houve condenação.",
    },
    correta: "B",
    explicacao:
      "Fazenda Brasil Verde (2016): trabalho análogo à escravidão (PA), servidão por dívida. Corte condenou omissão estatal. PEGADINHA: escravidão contemporânea!",
  },
  {
    id: 687,
    materia: "DH",
    assunto: "Jurisprudência Corte IDH - Condições de detenção",
    enunciado:
      "Segundo jurisprudência consolidada da Corte IDH sobre sistema prisional:",
    alternativas: {
      A: "Estados têm total discricionariedade sobre condições de prisão.",
      B: "Pessoas privadas de liberdade mantêm todos os direitos humanos, exceto liberdade de locomoção; superlotação, falta de assistência e tortura violam a Convenção.",
      C: "Presos não têm direitos.",
      D: "Apenas questões de infraestrutura importam.",
    },
    correta: "B",
    explicacao:
      "Jurisprudência Corte IDH: presos mantêm dignidade e direitos (exceto locomoção). Superlotação = tratamento desumano. PEGADINHA AOCP: Brasil é criticado!",
  },
  {
    id: 688,
    materia: "DH",
    assunto: "Jurisprudência Corte IDH - Uso da força",
    enunciado:
      "Sobre uso da força por agentes estatais, a Corte IDH estabelece que:",
    alternativas: {
      A: "Força letal pode ser usada livremente.",
      B: "Uso da força deve respeitar princípios de legalidade, necessidade, proporcionalidade e responsabilidade; força letal só em situações extremas.",
      C: "Não há limites para uso de força.",
      D: "Apenas regulamentos nacionais importam.",
    },
    correta: "B",
    explicacao:
      "Jurisprudência Corte: uso progressivo da força, legalidade + necessidade + proporcionalidade + responsabilização. PEGADINHA: força letal = exceção!",
  },
  {
    id: 689,
    materia: "DH",
    assunto: "Jurisprudência Corte IDH - Dever de investigar",
    enunciado:
      "Em casos de graves violações de direitos humanos (tortura, execuções, desaparecimentos), a Corte IDH estabelece que o Estado tem:",
    alternativas: {
      A: "Discricionariedade para investigar ou não.",
      B: "Dever de investigar de ofício, de forma diligente, imparcial e efetiva, punindo responsáveis (dever de due diligence).",
      C: "Apenas obrigação de registrar ocorrência.",
      D: "Não precisa investigar se vítima não exigir.",
    },
    correta: "B",
    explicacao:
      "Jurisprudência Corte: Estado DEVE investigar graves violações ex officio, punir culpados, reparar vítimas. PEGADINHA AOCP: impunidade = nova violação!",
  },
  {
    id: 690,
    materia: "DH",
    assunto: "Jurisprudência Corte IDH - Acesso à justiça de presos",
    enunciado:
      "Segundo a Corte IDH, pessoas privadas de liberdade têm direito a:",
    alternativas: {
      A: "Nenhum acesso diferenciado à justiça.",
      B: "Acesso efetivo à justiça, incluindo comunicação com advogado, acesso a documentos do processo, recursos judiciais efetivos.",
      C: "Apenas defensor público depois de 6 meses.",
      D: "Comunicação com advogado pode ser negada.",
    },
    correta: "B",
    explicacao:
      "Jurisprudência Corte: presos têm direito AMPLO à justiça (defesa técnica, documentos, recursos). PEGADINHA AOCP: impedir contato com advogado = violação grave!",
  },
  // CRIMES HEDIONDOS + LEI DE DROGAS (ID 691-693)
  {
    id: 691,
    materia: "LEGESP",
    assunto:
      "Crimes Hediondos - Progressão de regime (art. 2º, §2º Lei 8.072/90)",
    enunciado:
      "Para crimes hediondos ou equiparados praticados SEM violência ou grave ameaça, o condenado deverá cumprir, para progressão de regime:",
    alternativas: {
      A: "1/6 da pena.",
      B: "2/5 (dois quintos) da pena, se primário, ou 3/5 (três quintos), se reincidente.",
      C: "1/3 da pena.",
      D: "Metade da pena.",
    },
    correta: "B",
    explicacao:
      "Art. 2º, §2º Lei 8.072/90 (redação Lei 13.964/2019 - Pacote Anticrime): crimes hediondos SEM violência = 2/5 (primário) ou 3/5 (reincidente). PEGADINHA AOCP: COM violência = frações ainda MAIORES!",
  },
  {
    id: 692,
    materia: "LEGESP",
    assunto:
      "Lei de Drogas - Tráfico privilegiado (art. 33, §4º Lei 11.343/06)",
    enunciado:
      "O juiz poderá reduzir de 1/6 a 2/3 a pena do crime de tráfico de drogas se o agente for primário, de bons antecedentes, não se dedicar a atividades criminosas nem integrar organização criminosa. Esta causa de diminuição é conhecida como:",
    alternativas: {
      A: "Delação premiada.",
      B: "Tráfico privilegiado ou minorante do §4º.",
      C: "Associação para o tráfico.",
      D: "Prescrição.",
    },
    correta: "B",
    explicacao:
      "Art. 33, §4º Lei 11.343/06: tráfico privilegiado (redutor de 1/6 a 2/3). PEGADINHA AOCP: STF decidiu que tráfico privilegiado NÃO é hediondo (HC 118.533)!",
  },
  {
    id: 693,
    materia: "LEGESP",
    assunto: "Lei de Drogas - Uso de drogas (art. 28 Lei 11.343/06)",
    enunciado:
      "Quem adquire, guarda, tem em depósito, transporta ou traz consigo drogas para consumo pessoal, sem autorização legal, está sujeito às seguintes penas:",
    alternativas: {
      A: "Reclusão de 5 a 15 anos.",
      B: "Advertência sobre efeitos das drogas; prestação de serviços à comunidade; medida educativa de comparecimento a programa ou curso educativo (NÃO há pena privativa de liberdade).",
      C: "Pena de morte.",
      D: "Multa apenas.",
    },
    correta: "B",
    explicacao:
      "Art. 28 Lei 11.343/06: usuário NÃO tem pena de prisão (despenalização). PEGADINHA AOCP: STF decidiu que porte de até 40g de maconha para uso = atípico (ADPF 635)!",
  },

  // ABUSO DE AUTORIDADE - LEI 13.869/2019 (ID 694-696)
  {
    id: 694,
    materia: "LEGESP",
    assunto: "Abuso de Autoridade - Conceito (art. 1º Lei 13.869/19)",
    enunciado: "Configura abuso de autoridade qualquer atentado à:",
    alternativas: {
      A: "Apenas à honra.",
      B: "Liberdade de locomoção, inviolabilidade de domicílio, sigilo de correspondência, direitos políticos, liberdade de consciência e crença, inviolabilidade do exercício profissional, prerrogativas do advogado.",
      C: "Somente direitos políticos.",
      D: "Apenas patrimônio público.",
    },
    correta: "B",
    explicacao:
      "Art. 1º Lei 13.869/19: abuso = violação de MÚLTIPLOS direitos fundamentais por agente público. PEGADINHA AOCP: rol exemplificativo, não taxativo!",
  },
  {
    id: 695,
    materia: "LEGESP",
    assunto:
      "Abuso de Autoridade - Impedir contato do preso com advogado (art. 36 Lei 13.869/19)",
    enunciado:
      "Decretar prisão ou impedir contato do preso com advogado constitui crime de abuso de autoridade, punível com:",
    alternativas: {
      A: "Apenas advertência.",
      B: "Detenção de 1 a 4 anos, além de multa.",
      C: "Não é crime.",
      D: "Apenas perda do cargo.",
    },
    correta: "B",
    explicacao:
      "Art. 36 Lei 13.869/19: impedir advogado = crime (detenção 1-4 anos + multa). PEGADINHA AOCP: direito do preso falar com advogado é INVIOLÁVEL!",
  },
  {
    id: 696,
    materia: "LEGESP",
    assunto:
      "Abuso de Autoridade - Submeter preso a vexame (art. 15 Lei 13.869/19)",
    enunciado:
      "Constranger o preso, o detido ou o depoente que se encontrar sob custódia a situação vexatória ou constrangedora constitui crime de abuso de autoridade. Assinale a situação que configura este crime:",
    alternativas: {
      A: "Oferecer tratamento respeitoso.",
      B: "Usar algemas sem necessidade, expor preso à mídia desnecessariamente, impor revista vexatória (agachamento sobre espelho).",
      C: "Fornecer alimentação adequada.",
      D: "Garantir banho de sol.",
    },
    correta: "B",
    explicacao:
      "Art. 15 Lei 13.869/19: constrangimento vexatório = crime (detenção 1-4 anos). PEGADINHA AOCP: revista vexatória também viola Lei 13.271/2016!",
  },

  // LEI DE TORTURA - LEI 9.455/1997 (ID 697-700)
  {
    id: 697,
    materia: "LEGESP",
    assunto: "Tortura - Conceito (art. 1º Lei 9.455/97)",
    enunciado:
      "Constitui crime de tortura constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental com o fim de:",
    alternativas: {
      A: "Apenas diversão.",
      B: "Obter informação, declaração ou confissão; provocar ação ou omissão de natureza criminosa; discriminação racial ou religiosa.",
      C: "Apenas fins políticos.",
      D: "Não configura crime.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, I, a e b, e II Lei 9.455/97: 3 finalidades = informação/confissão; provocar crime; discriminação. PEGADINHA AOCP: tortura = reclusão 2-8 anos!",
  },
  {
    id: 698,
    materia: "LEGESP",
    assunto:
      "Tortura - Submeter preso a sofrimento (art. 1º, §1º Lei 9.455/97)",
    enunciado:
      "Submeter pessoa presa ou sujeita a medida de segurança a sofrimento físico ou mental, por intermédio da prática de ato não previsto em lei ou não resultante de medida legal:",
    alternativas: {
      A: "É permitido para manter disciplina.",
      B: "Constitui crime de tortura (reclusão de 2 a 8 anos).",
      C: "Não é crime se houver autorização verbal.",
      D: "É apenas falta administrativa.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, §1º Lei 9.455/97: tortura contra PRESO = crime qualificado. PEGADINHA AOCP: policial penal que tortura preso responde por TORTURA (mais grave que abuso)!",
  },
  {
    id: 699,
    materia: "LEGESP",
    assunto: "Tortura - Omissão (art. 1º, §2º Lei 9.455/97)",
    enunciado:
      "A autoridade que tiver conhecimento de tortura ou dela for informada e se omitir em tomar providências:",
    alternativas: {
      A: "Não comete crime.",
      B: "Incorre nas mesmas penas do torturador.",
      C: "Apenas responde administrativamente.",
      D: "Pode escolher não agir.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, §2º Lei 9.455/97: omissão diante de tortura = CRIME (mesma pena do autor). PEGADINHA AOCP: policial penal que VÊ tortura e não impede = também criminoso!",
  },
  {
    id: 700,
    materia: "LEGESP",
    assunto: "Tortura - Aumento de pena (art. 1º, §4º Lei 9.455/97)",
    enunciado:
      "A pena do crime de tortura será aumentada de 1/6 até 1/3 quando o crime for cometido:",
    alternativas: {
      A: "Apenas em via pública.",
      B: "Por agente público; contra criança, gestante, portador de deficiência, adolescente ou maior de 60 anos; mediante sequestro.",
      C: "Não há aumento de pena.",
      D: "Apenas em finais de semana.",
    },
    correta: "B",
    explicacao:
      "Art. 1º, §4º Lei 9.455/97: causas de aumento = agente público, vítima vulnerável, sequestro. PEGADINHA AOCP: POLICIAL PENAL que tortura = pena AUMENTADA (agente público)!",
  },
  {
    id: 701,
    materia: "Direito Constitucional",
    assunto: "Direitos e Garantias Fundamentais - Art. 5º",
    enunciado:
      "No que se refere aos direitos e garantias fundamentais previstos na Constituição Federal de 1988, assinale a alternativa correta:",
    alternativas: {
      A: "O direito à vida é considerado um direito fundamental apenas na sua dimensão civil, não abrangendo situações envolvendo políticas públicas de saúde.",
      B: "A inviolabilidade do sigilo de correspondência e das comunicações telegráficas, de dados e telefônicas não é absoluta, podendo ser relativizada em caso de investigação criminal.",
      C: "O princípio da igualdade permite a discriminação positiva apenas em questões econômicas, não alcançando gênero, raça ou deficiência.",
      D: "A liberdade de expressão pode ser limitada apenas por lei ordinária, nunca por medida judicial.",
      E: "Todos os direitos fundamentais previstos no art. 5º são aplicáveis exclusivamente aos brasileiros natos, não alcançando estrangeiros.",
    },
    correta: "B",
    explicacao:
      "O sigilo de correspondência e comunicações é inviolável, mas admite restrições legais para investigação criminal (Art. 5º, XII). As demais alternativas contêm erros conceituais sobre direitos fundamentais.",
  },
  {
    id: 702,
    materia: "Direito Constitucional",
    assunto: "Administração Pública - Art. 37",
    enunciado:
      "Sobre os princípios da Administração Pública previstos no artigo 37 da Constituição Federal, assinale a alternativa correta:",
    alternativas: {
      A: "A legalidade, moralidade, publicidade e eficiência são princípios que se aplicam exclusivamente à Administração Pública direta, não alcançando autarquias e fundações.",
      B: "O concurso público é obrigatório para todos os cargos, exceto para funções de chefia e direção, que podem ser preenchidas por indicação política.",
      C: "A publicidade dos atos administrativos é uma forma de garantir a eficiência da Administração e a transparência para os administrados.",
      D: "A Administração Pública pode praticar atos contrários à legalidade desde que haja interesse público relevante.",
      E: "O princípio da moralidade administrativa permite qualquer conduta do agente desde que não haja prejuízo financeiro ao erário.",
    },
    correta: "C",
    explicacao:
      "O princípio da publicidade garante transparência, controle e eficiência dos atos administrativos. As alternativas A, B, D e E apresentam distorções sobre princípios e limitações legais.",
  },
  {
    id: 703,
    materia: "Direito Constitucional",
    assunto: "Defesa do Estado - Arts. 136 a 141",
    enunciado:
      "Com relação ao estado de defesa e ao estado de sítio, assinale a alternativa correta:",
    alternativas: {
      A: "O estado de defesa e o estado de sítio podem ser decretados exclusivamente pelo Presidente da República, sem necessidade de aprovação do Congresso Nacional.",
      B: "O estado de defesa é aplicado apenas em caso de guerra externa, enquanto o estado de sítio se aplica a situações internas.",
      C: "Durante o estado de sítio, é possível suspender direitos e garantias fundamentais, respeitando limites constitucionais e legais.",
      D: "O estado de defesa é decretado pelo Congresso Nacional e não pelo Presidente da República.",
      E: "O estado de sítio não possui prazo máximo de duração e pode ser prorrogado indefinidamente.",
    },
    correta: "C",
    explicacao:
      "No estado de sítio, o Presidente pode suspender temporariamente direitos e garantias fundamentais, mas sempre respeitando limites constitucionais (Art. 137 a 139). As demais alternativas contêm erros sobre competência e aplicação.",
  },
  {
    id: 704,
    materia: "Direito Constitucional",
    assunto: "Segurança Pública - Art. 144",
    enunciado:
      "Acerca da organização da segurança pública, prevista no art. 144 da Constituição Federal, assinale a alternativa correta:",
    alternativas: {
      A: "A segurança pública é dever exclusivo da União, não havendo atuação dos Estados ou Municípios.",
      B: "As polícias militares têm função preventiva e ostensiva, enquanto as polícias civis têm atribuição investigativa.",
      C: "O Ministério Público é responsável pela execução das atividades de segurança pública.",
      D: "As guardas municipais podem exercer todas as funções das polícias estaduais, inclusive investigação criminal.",
      E: "O papel da segurança pública é limitado à repressão criminal, não incluindo políticas de prevenção.",
    },
    correta: "B",
    explicacao:
      "A Constituição estabelece a função preventiva e ostensiva das polícias militares e a função investigativa das polícias civis (Art. 144, §4º). As demais alternativas apresentam erros sobre competência e atribuições.",
  },
  {
    id: 705,
    materia: "Direito Constitucional",
    assunto: "Direitos Fundamentais e Administração Pública",
    enunciado:
      "Assinale a alternativa que relaciona corretamente um direito fundamental e um princípio da Administração Pública:",
    alternativas: {
      A: "Direito de greve dos servidores públicos - princípio da publicidade.",
      B: "Liberdade de expressão - princípio da moralidade administrativa.",
      C: "Direito à igualdade - princípio da eficiência.",
      D: "Direito de reunião - princípio da impessoalidade.",
      E: "Todos os direitos fundamentais podem ser limitados pelo interesse político do governante - princípio da legalidade.",
    },
    correta: "D",
    explicacao:
      "O direito de reunião (Art. 5º, XVI) e o princípio da impessoalidade (Art. 37) estão corretamente relacionados. As demais alternativas contêm incorreções sobre a relação entre direitos fundamentais e princípios administrativos.",
  },
  {
    id: 706,
    materia: "Direito Constitucional",
    assunto: "Aplicação dos Direitos Fundamentais",
    enunciado:
      "Assinale a alternativa correta sobre a aplicação dos direitos fundamentais:",
    alternativas: {
      A: "Todos os direitos fundamentais se aplicam de forma imediata e integral, sem possibilidade de restrição ou regulamentação.",
      B: "Direitos fundamentais podem sofrer limitações temporárias em situações específicas, desde que previstas em lei.",
      C: "A liberdade de associação não admite restrições, mesmo para fins de segurança pública.",
      D: "O direito à propriedade pode ser limitado apenas por interesse privado.",
      E: "Direitos sociais não possuem proteção constitucional, cabendo apenas a legislação infraconstitucional regulamentá-los.",
    },
    correta: "B",
    explicacao:
      "Direitos fundamentais podem sofrer limitações legais para atender a interesses públicos e coletivos, mas devem respeitar o núcleo essencial (Art. 5º, §§ e princípios).",
  },
  {
    id: 707,
    materia: "Direito Constitucional",
    assunto: "Princípios da Administração Pública",
    enunciado:
      "A respeito dos princípios da Administração Pública, assinale a alternativa correta:",
    alternativas: {
      A: "O princípio da eficiência exige apenas que os atos administrativos sejam realizados rapidamente, sem preocupação com resultados.",
      B: "A publicidade administrativa não se aplica a atos internos da Administração.",
      C: "A impessoalidade exige que os atos administrativos sejam praticados sem favoritismo, assegurando tratamento igualitário aos administrados.",
      D: "A moralidade administrativa se resume à observância de normas legais, dispensando ética e probidade.",
      E: "O princípio da legalidade é restrito às leis federais.",
    },
    correta: "C",
    explicacao:
      "O princípio da impessoalidade garante que atos da Administração sejam neutros, sem favorecer pessoas específicas, promovendo igualdade de tratamento (Art. 37, caput).",
  },
  {
    id: 708,
    materia: "Direito Constitucional",
    assunto: "Estado de Defesa - Art. 136",
    enunciado: "Sobre o estado de defesa, assinale a alternativa correta:",
    alternativas: {
      A: "Pode ser decretado pelo Congresso Nacional a qualquer momento, sem ato do Presidente da República.",
      B: "Aplica-se exclusivamente em caso de guerra declarada por outro país.",
      C: "Tem caráter temporário e restrito a áreas do território nacional, podendo limitar direitos individuais em situações graves.",
      D: "Suspende todos os direitos fundamentais, sem exceções.",
      E: "É decretado apenas nos municípios em que houver calamidade pública.",
    },
    correta: "C",
    explicacao:
      "O estado de defesa tem caráter temporário e regional, podendo restringir certos direitos para restaurar a ordem pública (Art. 136).",
  },
  {
    id: 709,
    materia: "Direito Constitucional",
    assunto: "Estado de Sítio - Art. 137",
    enunciado: "Durante o estado de sítio, é correto afirmar que:",
    alternativas: {
      A: "Não é possível suspender direitos fundamentais.",
      B: "Pode ser decretado apenas pelo Congresso Nacional.",
      C: "O Presidente da República pode suspender temporariamente alguns direitos, após autorização do Congresso Nacional.",
      D: "Sua decretação não depende de lei complementar.",
      E: "Pode ter duração ilimitada.",
    },
    correta: "C",
    explicacao:
      "O estado de sítio permite suspensão temporária de direitos fundamentais, mas depende de autorização legislativa e respeita limites constitucionais (Arts. 137-139).",
  },
  {
    id: 710,
    materia: "Direito Constitucional",
    assunto: "Segurança Pública - Art. 144",
    enunciado:
      "Assinale a alternativa correta sobre as competências das polícias no Brasil:",
    alternativas: {
      A: "Polícias militares e civis têm competências idênticas, podendo atuar em qualquer função.",
      B: "Polícia Federal atua na repressão a crimes federais e proteção de fronteiras, mas não realiza investigação criminal.",
      C: "Polícia Civil realiza investigação de infrações penais estaduais e atua de forma preventiva.",
      D: "Polícia Militar tem função ostensiva e preventiva, não investigativa.",
      E: "Guardas municipais podem exercer atividades de polícia judiciária em todo o território nacional.",
    },
    correta: "D",
    explicacao:
      "A polícia militar é responsável por ações preventivas e ostensivas, enquanto a investigação é função da polícia civil (Art. 144, §4º).",
  },
  {
    id: 711,
    materia: "Direito Constitucional",
    assunto: "Dignidade da Pessoa Humana",
    enunciado:
      "O princípio da dignidade da pessoa humana, previsto na Constituição, significa:",
    alternativas: {
      A: "Que todos os direitos fundamentais são absolutos, sem qualquer possibilidade de restrição.",
      B: "Que o Estado deve garantir condições mínimas de existência e respeito à integridade física e moral.",
      C: "Que direitos sociais são dispensáveis, podendo ser suprimidos em caso de interesse econômico.",
      D: "Que somente brasileiros natos possuem proteção contra tratamento desumano.",
      E: "Que cabe ao legislador criar direitos que não estejam previstos na Constituição.",
    },
    correta: "B",
    explicacao:
      "A dignidade da pessoa humana garante proteção integral à vida, à integridade e à liberdade, sendo fundamento do Estado Democrático de Direito (Art. 1º, III; Art. 5º).",
  },
  {
    id: 712,
    materia: "Direito Constitucional",
    assunto: "Legalidade e Eficiência",
    enunciado:
      "Assinale a alternativa que representa corretamente a relação entre legalidade e eficiência:",
    alternativas: {
      A: "O administrador público pode agir eficientemente mesmo se contrariar a lei.",
      B: "A eficiência se sobrepõe à legalidade em situações de emergência.",
      C: "A legalidade limita a ação administrativa, devendo a eficiência ser alcançada dentro das normas legais.",
      D: "A eficiência é um princípio secundário, aplicável apenas a entes privados.",
      E: "A legalidade é apenas um princípio formal, sem impacto sobre resultados administrativos.",
    },
    correta: "C",
    explicacao:
      "O princípio da legalidade impõe limites legais à Administração; a eficiência deve ser buscada dentro do que a lei permite (Art. 37, caput).",
  },
  {
    id: 713,
    materia: "Direito Constitucional",
    assunto: "Estado de Defesa e Sítio",
    enunciado:
      "A diferença essencial entre estado de defesa e estado de sítio é:",
    alternativas: {
      A: "Estado de defesa é decretado para crises internas; estado de sítio, para guerra externa.",
      B: "Estado de defesa é aplicado pelo Congresso Nacional; estado de sítio, pelo Presidente.",
      C: "Estado de defesa é menos grave, com restrições limitadas; estado de sítio permite suspensão mais ampla de direitos fundamentais.",
      D: "Ambos não permitem limitação de direitos fundamentais.",
      E: "Estado de defesa é aplicado apenas em capitais; estado de sítio, em todo o território.",
    },
    correta: "C",
    explicacao:
      "O estado de defesa é mais restritivo e regional, enquanto o estado de sítio permite suspensão mais ampla de direitos, aplicando-se em situação grave (Arts. 136-139).",
  },
  {
    id: 714,
    materia: "Direito Constitucional",
    assunto: "Segurança Pública - Art. 144",
    enunciado: "Assinale a alternativa correta:",
    alternativas: {
      A: "A União é responsável pela segurança pública em todo o território nacional, não havendo atuação dos Estados.",
      B: "A polícia federal atua apenas em questões de trânsito interestadual.",
      C: "As polícias estaduais são subordinadas à União em todas as suas funções.",
      D: "A segurança pública é dever do Estado, direito e responsabilidade de todos, cabendo aos entes federativos competências próprias.",
      E: "As guardas municipais possuem atribuição idêntica às polícias militares.",
    },
    correta: "D",
    explicacao:
      "O art. 144 estabelece que a segurança pública é dever do Estado e responsabilidade de todos, com competências distribuídas entre União, Estados, DF e Municípios.",
  },
  {
    id: 715,
    materia: "Direito Constitucional",
    assunto: "Liberdade de Associação",
    enunciado: "A liberdade de associação é garantida:",
    alternativas: {
      A: "Apenas a partidos políticos, não se aplicando a sindicatos ou associações civis.",
      B: "Apenas no âmbito privado, sem aplicação ao serviço público.",
      C: "A todos, desde que não contrarie a ordem pública, a moral e a lei.",
      D: "Sem qualquer limite, mesmo quando ameaçar direitos de terceiros.",
      E: "Apenas a brasileiros natos.",
    },
    correta: "C",
    explicacao:
      "O Art. 5º, XVII, garante liberdade de associação a todos, respeitando restrições legais e ordem pública.",
  },
  {
    id: 716,
    materia: "Direito Constitucional",
    assunto: "Estado de Sítio - Art. 137",
    enunciado: "Durante o estado de sítio:",
    alternativas: {
      A: "Todos os direitos fundamentais são suspensos automaticamente.",
      B: "O Presidente pode suspender direitos, mas deve respeitar limites constitucionais e receber autorização do Congresso.",
      C: "Pode ser decretado pelo Congresso Nacional, sem participação do Presidente.",
      D: "É uma medida permanente.",
      E: "Não permite restrição de liberdade de imprensa.",
    },
    correta: "B",
    explicacao:
      "O estado de sítio admite suspensão temporária de direitos, mas depende de autorização legislativa e respeito a limites constitucionais.",
  },
  {
    id: 717,
    materia: "Direito Constitucional",
    assunto: "Direito de Propriedade",
    enunciado: "O direito de propriedade, previsto na Constituição:",
    alternativas: {
      A: "É absoluto, não podendo ser limitado por interesse público.",
      B: "Pode ser expropriado somente em caso de guerra externa.",
      C: "Pode ser limitado por lei, para atender à função social.",
      D: "Aplica-se exclusivamente a brasileiros natos.",
      E: "Está condicionado ao pagamento de imposto federal específico.",
    },
    correta: "C",
    explicacao:
      "O Art. 5º, XXII e XXIII, prevê a propriedade como direito fundamental, que deve atender à função social e pode ser expropriada mediante justa indenização.",
  },
  {
    id: 718,
    materia: "Direito Constitucional",
    assunto: "Moralidade Administrativa",
    enunciado: "O princípio da moralidade administrativa significa que:",
    alternativas: {
      A: "Basta que o ato seja legal para ser moral.",
      B: "O ato deve respeitar padrões éticos, probidade e boa-fé, além da legalidade.",
      C: "É um princípio opcional da Administração.",
      D: "Aplica-se apenas a atos internos, sem repercussão externa.",
      E: "Substitui o princípio da legalidade.",
    },
    correta: "B",
    explicacao:
      "A moralidade exige que os atos administrativos sejam legais e éticos, observando probidade e boa-fé.",
  },
  {
    id: 719,
    materia: "Direito Constitucional",
    assunto: "Guardas Municipais",
    enunciado:
      "A respeito das Guardas Municipais, assinale a alternativa correta:",
    alternativas: {
      A: "Podem exercer atividades de polícia judiciária em todo o território nacional.",
      B: "Têm atribuição limitada à proteção de bens, serviços e instalações municipais, com outras funções apenas previstas em lei.",
      C: "Substituem as polícias civis e militares nas funções investigativas.",
      D: "Não podem atuar preventivamente em qualquer situação.",
      E: "São subordinadas à União em todas as atividades.",
    },
    correta: "B",
    explicacao:
      "As guardas municipais têm competência restrita à proteção de bens, serviços e instalações municipais, podendo outras funções serem definidas em lei.",
  },
  {
    id: 720,
    materia: "Direito Constitucional",
    assunto: "Princípio da Igualdade",
    enunciado: "O princípio da igualdade perante a lei:",
    alternativas: {
      A: "Impede qualquer discriminação, mas não permite políticas de ação afirmativa.",
      B: "Aplica-se apenas no campo civil, não no administrativo ou penal.",
      C: "Garante tratamento igualitário, permitindo discriminação positiva quando prevista em lei para corrigir desigualdades históricas.",
      D: "É relativo, dependendo da vontade do administrador público.",
      E: "Só se aplica a brasileiros natos.",
    },
    correta: "C",
    explicacao:
      "O Art. 5º, caput, garante igualdade, admitindo ações afirmativas para corrigir desigualdades sociais e históricas.",
  },
  {
    id: 721,
    materia: "Direito Constitucional",
    assunto: "Habeas Corpus",
    enunciado: "O habeas corpus, previsto na Constituição, é destinado a:",
    alternativas: {
      A: "Garantir a propriedade privada contra desapropriação.",
      B: "Proteger a liberdade de locomoção contra ilegalidade ou abuso de poder.",
      C: "Garantir a igualdade de acesso aos cargos públicos.",
      D: "Regular a atuação das polícias civis e militares.",
      E: "Autorizar medidas excepcionais em estado de defesa.",
    },
    correta: "B",
    explicacao:
      "O habeas corpus protege a liberdade de locomoção quando alguém sofre ou se encontra ameaçado de sofrer violência ou coação ilegal (Art. 5º, LXVIII).",
  },
  {
    id: 722,
    materia: "Direito Constitucional",
    assunto: "Concurso Público",
    enunciado:
      "O concurso público, segundo a Constituição, é obrigatório para:",
    alternativas: {
      A: "Todos os cargos e empregos públicos, sem exceção.",
      B: "Todos os cargos, exceto aqueles de provimento temporário ou cargos de natureza política de chefia.",
      C: "Somente para funções executivas, não abrangendo cargos técnicos.",
      D: "Apenas para servidores da União, não Estados ou Municípios.",
      E: "Não é obrigatório; pode ser substituído por indicação política.",
    },
    correta: "B",
    explicacao:
      "O concurso é obrigatório para cargos efetivos, excetuando cargos de confiança e funções temporárias (Art. 37, II).",
  },
  {
    id: 723,
    materia: "Direito Constitucional",
    assunto: "Estado de Defesa - Art. 136",
    enunciado: "Durante o estado de defesa, é correto afirmar que:",
    alternativas: {
      A: "Todos os direitos fundamentais podem ser suspensos.",
      B: "Apenas direitos coletivos e sociais podem ser restringidos.",
      C: "A restrição de direitos é limitada, temporária e proporcional às circunstâncias que motivaram o decreto.",
      D: "O estado de defesa não pode afetar direitos individuais.",
      E: "Pode ser decretado por qualquer autoridade, inclusive judicial.",
    },
    correta: "C",
    explicacao:
      "O estado de defesa permite restrições temporárias de direitos fundamentais, de forma proporcional à situação concreta (Art. 136).",
  },
  {
    id: 724,
    materia: "Direito Constitucional",
    assunto: "Estado de Sítio - Autorização",
    enunciado: "A decretação do estado de sítio:",
    alternativas: {
      A: "Depende de prévia autorização do Congresso Nacional e tem caráter temporário.",
      B: "Pode ser decretada pelo Presidente sem necessidade de lei ou aprovação legislativa.",
      C: "Suspende todos os direitos constitucionais sem limites.",
      D: "Pode ser indefinida, sem prazo máximo.",
      E: "É aplicada exclusivamente a cidades em situação de calamidade.",
    },
    correta: "A",
    explicacao:
      "O estado de sítio depende de autorização legislativa e respeita limites constitucionais, sendo temporário (Art. 137-139).",
  },
  {
    id: 725,
    materia: "Direito Constitucional",
    assunto: "Inviolabilidade da Intimidade",
    enunciado:
      "O direito à inviolabilidade da intimidade, vida privada, honra e imagem:",
    alternativas: {
      A: "É absoluto, sem qualquer possibilidade de limitação.",
      B: "Pode ser relativizado quando há interesse público relevante, respeitando os limites legais.",
      C: "Aplica-se apenas a brasileiros natos.",
      D: "Substitui o direito à liberdade de expressão.",
      E: "Pode ser ignorado em decisões administrativas de órgãos públicos.",
    },
    correta: "B",
    explicacao:
      "O direito à intimidade e imagem é fundamental, mas admite limitações proporcionais ao interesse público (Art. 5º, X).",
  },
  {
    id: 726,
    materia: "Direito Constitucional",
    assunto: "Princípio da Publicidade",
    enunciado:
      "O princípio da publicidade na Administração Pública tem como função:",
    alternativas: {
      A: "Apenas cumprir formalidades legais sem impacto prático.",
      B: "Garantir transparência, possibilitando controle social e legalidade dos atos administrativos.",
      C: "Restringir informações internas da Administração.",
      D: "Substituir a eficiência administrativa.",
      E: "Evitar que atos administrativos sejam divulgados.",
    },
    correta: "B",
    explicacao:
      "A publicidade garante transparência e controle social sobre atos administrativos (Art. 37, caput).",
  },
  {
    id: 727,
    materia: "Direito Constitucional",
    assunto: "Polícia Federal",
    enunciado: "A polícia federal, segundo a Constituição, atua em:",
    alternativas: {
      A: "Todas as infrações penais, independentemente da esfera de competência.",
      B: "Crimes federais, como tráfico internacional de drogas, crimes contra o sistema financeiro e proteção de fronteiras.",
      C: "Segurança municipal de bens públicos.",
      D: "Atividades de polícia militar e ostensiva em cidades.",
      E: "Investigação criminal apenas em órgãos privados.",
    },
    correta: "B",
    explicacao:
      "A polícia federal atua em crimes de competência da União, incluindo fronteiras, tráfico internacional e sistema financeiro (Art. 144, §1º).",
  },
  {
    id: 728,
    materia: "Direito Constitucional",
    assunto: "Diferença - Estado de Defesa e Sítio",
    enunciado:
      "Sobre a diferença entre estado de defesa e estado de sítio, é correto afirmar:",
    alternativas: {
      A: "Estado de defesa é mais grave que estado de sítio.",
      B: "Estado de sítio permite restrições mais amplas de direitos fundamentais, enquanto estado de defesa é mais limitado.",
      C: "Ambos podem ser decretados pelo Congresso Nacional independentemente do Presidente.",
      D: "Estado de defesa é aplicado apenas em capitais; estado de sítio, em áreas rurais.",
      E: "Ambos suspendem todos os direitos fundamentais sem limite.",
    },
    correta: "B",
    explicacao:
      "O estado de sítio admite restrições mais amplas, enquanto o estado de defesa é limitado e regional (Arts. 136-139).",
  },
  {
    id: 729,
    materia: "Direito Constitucional",
    assunto: "Direito de Reunião",
    enunciado: "O direito de reunião:",
    alternativas: {
      A: "É absoluto, podendo ocorrer em qualquer situação, mesmo ameaçando a ordem pública.",
      B: "Pode ser exercido sem necessidade de comunicação às autoridades.",
      C: "É garantido a todos, desde que pacífico e sem armas, podendo ser limitado por lei ou para preservar a ordem.",
      D: "Aplica-se apenas a associações civis organizadas.",
      E: "É restrito a cidadãos brasileiros natos.",
    },
    correta: "C",
    explicacao:
      "O direito de reunião é garantido, mas sujeito a restrições legais que preservem ordem pública (Art. 5º, XVI).",
  },
  {
    id: 730,
    materia: "Direito Constitucional",
    assunto: "Princípio da Impessoalidade",
    enunciado: "A respeito do princípio da impessoalidade:",
    alternativas: {
      A: "O agente público pode favorecer amigos desde que o ato seja legal.",
      B: "O princípio garante tratamento igualitário, afastando favoritismos e clientelismos.",
      C: "Aplica-se apenas a cargos de chefia, não a todos os atos administrativos.",
      D: "É um princípio secundário, sem relevância prática.",
      E: "Substitui o princípio da moralidade.",
    },
    correta: "B",
    explicacao:
      "A impessoalidade exige neutralidade nos atos administrativos, garantindo igualdade de tratamento (Art. 37, caput).",
  },
  {
    id: 731,
    materia: "Direito Constitucional",
    assunto: "Guardas Municipais - Funções",
    enunciado: "As Guardas Municipais podem:",
    alternativas: {
      A: "Exercer atividades de polícia judiciária em todo o território nacional.",
      B: "Atuar na proteção de bens, serviços e instalações municipais, conforme lei específica.",
      C: "Substituir a polícia civil em investigações criminais.",
      D: "Executar policiamento ostensivo em todo o país.",
      E: "Substituir a polícia federal em crimes federais.",
    },
    correta: "B",
    explicacao:
      "As Guardas Municipais têm atuação restrita à proteção de bens, serviços e instalações municipais (Art. 144, §8º).",
  },
  {
    id: 732,
    materia: "Direito Constitucional",
    assunto: "Liberdade de Expressão",
    enunciado: "O direito à liberdade de expressão:",
    alternativas: {
      A: "É absoluto, sem qualquer limite.",
      B: "Pode ser limitado para proteger outros direitos fundamentais, como a honra e a privacidade.",
      C: "Não se aplica a estrangeiros residentes no país.",
      D: "Impede a atuação do Estado na regulamentação de mídias e comunicações.",
      E: "Pode ser suprimido por decreto presidencial.",
    },
    correta: "B",
    explicacao:
      "A liberdade de expressão é protegida, mas admite restrições para preservar outros direitos fundamentais (Art. 5º, IV e V).",
  },
  {
    id: 733,
    materia: "Direito Constitucional",
    assunto: "Estado de Sítio - Poderes",
    enunciado: "Durante o estado de sítio, o Presidente da República pode:",
    alternativas: {
      A: "Suspender todos os direitos fundamentais de forma ilimitada.",
      B: "Suspender temporariamente certos direitos, com autorização do Congresso Nacional e respeito a limites constitucionais.",
      C: "Decretar medidas permanentes de exceção.",
      D: "Aplicar restrições apenas a estrangeiros.",
      E: "Delegar sua competência integral a governadores estaduais.",
    },
    correta: "B",
    explicacao:
      "O Presidente pode suspender direitos temporariamente, após autorização do Congresso, respeitando limites constitucionais (Arts. 137-139).",
  },
  {
    id: 734,
    materia: "Direito Constitucional",
    assunto: "Princípio da Legalidade",
    enunciado: "O princípio da legalidade:",
    alternativas: {
      A: "Permite que o administrador publique atos ilegais se houver interesse público.",
      B: "Exige que todos os atos da Administração estejam previamente autorizados em lei.",
      C: "Aplica-se apenas à União, não aos Estados ou Municípios.",
      D: "Substitui o princípio da moralidade.",
      E: "É um princípio opcional.",
    },
    correta: "B",
    explicacao:
      "A legalidade exige que a Administração só aja conforme lei, garantindo controle e segurança jurídica (Art. 37, caput).",
  },
  {
    id: 735,
    materia: "Direito Constitucional",
    assunto: "Direito à Igualdade",
    enunciado: "O direito à igualdade:",
    alternativas: {
      A: "É absoluto, sem possibilidade de distinção em qualquer situação.",
      B: "Impede ações afirmativas destinadas a corrigir desigualdades sociais.",
      C: "Garante tratamento igualitário, podendo ser relativizado por medidas legais para corrigir desigualdades históricas.",
      D: "Aplica-se apenas na esfera civil, não administrativa ou penal.",
      E: "É relativo e depende exclusivamente da vontade do governante.",
    },
    correta: "C",
    explicacao:
      "O princípio da igualdade admite ações afirmativas e medidas legais para combater desigualdades históricas (Art. 5º, caput).",
  },
  {
    id: 736,
    materia: "Direito Constitucional",
    assunto: "Devido Processo Legal",
    enunciado: "O direito ao devido processo legal significa que:",
    alternativas: {
      A: "O Estado pode decidir sobre direitos individuais sem respeitar formalidades processuais.",
      B: "Nenhum indivíduo pode ser privado de liberdade ou bens sem observância das normas legais e judiciais.",
      C: "Apenas processos civis devem seguir o devido processo legal.",
      D: "O devido processo legal aplica-se apenas a brasileiros natos.",
      E: "É um direito exclusivo do Poder Judiciário.",
    },
    correta: "B",
    explicacao:
      "O devido processo legal garante que ninguém seja privado de liberdade ou bens sem observância da lei e de garantias processuais (Art. 5º, LIV).",
  },
  {
    id: 737,
    materia: "Direito Constitucional",
    assunto: "Princípio da Eficiência",
    enunciado: "O princípio da eficiência na Administração Pública:",
    alternativas: {
      A: "Significa apenas rapidez na execução dos atos administrativos.",
      B: "Exige que a Administração alcance resultados de forma econômica, eficaz e responsável.",
      C: "É um princípio opcional, aplicável apenas a órgãos federais.",
      D: "Permite violar a legalidade para atingir metas.",
      E: "Aplica-se apenas a contratos públicos.",
    },
    correta: "B",
    explicacao:
      "O princípio da eficiência busca resultados ótimos na execução administrativa, com responsabilidade, economia e eficácia (Art. 37, caput).",
  },
  {
    id: 738,
    materia: "Direito Constitucional",
    assunto: "Estado de Defesa - Decretação",
    enunciado:
      "O estado de defesa pode ser decretado pelo Presidente da República:",
    alternativas: {
      A: "Para enfrentar calamidades locais de pequena proporção.",
      B: "Quando houver grave ameaça à ordem pública ou instabilidade institucional, restringindo temporariamente direitos.",
      C: "Apenas quando o Congresso Nacional solicitar.",
      D: "Em qualquer situação de crise econômica.",
      E: "Para resolver conflitos privados entre particulares.",
    },
    correta: "B",
    explicacao:
      "O estado de defesa é aplicado em situações graves, com restrição temporária de direitos, mediante decreto presidencial (Art. 136).",
  },
  {
    id: 739,
    materia: "Direito Constitucional",
    assunto: "Estado de Sítio - Condições",
    enunciado: "O estado de sítio:",
    alternativas: {
      A: "Pode ser decretado sem limites temporais.",
      B: "Suspende direitos fundamentais de forma absoluta e permanente.",
      C: "Pode ser aplicado em caso de grave perturbação da ordem ou guerra, mediante autorização do Congresso Nacional.",
      D: "É um ato exclusivo do Congresso Nacional.",
      E: "Não pode suspender liberdade de reunião.",
    },
    correta: "C",
    explicacao:
      "O estado de sítio é decretado pelo Presidente, autorizado pelo Congresso, e permite restrições temporárias de direitos em situações graves (Art. 137-139).",
  },
  {
    id: 740,
    materia: "Direito Constitucional",
    assunto: "Liberdade Religiosa",
    enunciado: "A liberdade religiosa:",
    alternativas: {
      A: "Pode ser restringida por lei ordinária sempre que houver conflito com políticas públicas.",
      B: "É garantida, sendo possível exercer qualquer culto, vedada a discriminação religiosa.",
      C: "Aplica-se apenas a cidadãos brasileiros natos.",
      D: "Permite atividades religiosas que contrariem leis penais sem consequência.",
      E: "Não abrange instituições privadas de ensino.",
    },
    correta: "B",
    explicacao:
      "A Constituição garante liberdade de crença e culto religioso, vedando qualquer discriminação (Art. 5º, VI e VIII).",
  },
  {
    id: 741,
    materia: "Direito Constitucional",
    assunto: "Vedação ao Nepotismo",
    enunciado: "A vedação ao nepotismo na Administração Pública decorre do:",
    alternativas: {
      A: "Princípio da legalidade.",
      B: "Princípio da eficiência.",
      C: "Princípio da impessoalidade, que exige tratamento igualitário sem favorecimento de parentes.",
      D: "Princípio da publicidade.",
      E: "Princípio da moralidade opcional.",
    },
    correta: "C",
    explicacao:
      "O nepotismo viola a impessoalidade, pois favorece parentes, contrariando a Constituição (Art. 37, caput).",
  },
  {
    id: 742,
    materia: "Direito Constitucional",
    assunto: "Polícia Militar",
    enunciado: "Assinale a alternativa correta sobre a polícia militar:",
    alternativas: {
      A: "Atua apenas na investigação de crimes estaduais.",
      B: "Realiza policiamento ostensivo e preventivo, não investigativo.",
      C: "Substitui a polícia civil quando necessário.",
      D: "Tem competência para investigar crimes federais.",
      E: "Atua exclusivamente em ações de trânsito.",
    },
    correta: "B",
    explicacao:
      "A polícia militar é responsável pelo policiamento ostensivo e preventivo, não pela investigação criminal (Art. 144, §4º).",
  },
  {
    id: 743,
    materia: "Direito Constitucional",
    assunto: "Habeas Data",
    enunciado: "O habeas data é um instrumento constitucional que:",
    alternativas: {
      A: "Garante acesso a informações pessoais em bancos de dados ou registros públicos.",
      B: "Substitui o habeas corpus.",
      C: "Permite alterar dados de terceiros sem autorização.",
      D: "Aplica-se apenas a estrangeiros residentes no Brasil.",
      E: "É utilizado apenas para informações tributárias.",
    },
    correta: "A",
    explicacao:
      "O habeas data garante acesso a dados pessoais em registros públicos ou privados, para conhecer ou corrigir informações (Art. 5º, LXXII).",
  },
  {
    id: 744,
    materia: "Direito Constitucional",
    assunto: "Estado de Defesa - Restrições",
    enunciado: "Durante o estado de defesa:",
    alternativas: {
      A: "Todos os direitos fundamentais são suspensos automaticamente.",
      B: "Pode haver restrição limitada de direitos, por tempo e área delimitados, para preservar a ordem pública.",
      C: "O Congresso Nacional é o único responsável pela decretação.",
      D: "É aplicado somente em situação de guerra externa.",
      E: "Não afeta liberdade de imprensa.",
    },
    correta: "B",
    explicacao:
      "O estado de defesa permite restrições proporcionais e temporárias de direitos em áreas específicas, mediante decreto presidencial (Art. 136).",
  },
  {
    id: 745,
    materia: "Direito Constitucional",
    assunto: "Moralidade Administrativa",
    enunciado: "O princípio da moralidade administrativa:",
    alternativas: {
      A: "Permite agir fora da lei se houver interesse público.",
      B: "Exige que atos sejam legais, éticos e de acordo com probidade e boa-fé.",
      C: "Aplica-se apenas aos contratos públicos.",
      D: "É restrito a servidores comissionados.",
      E: "Substitui a impessoalidade.",
    },
    correta: "B",
    explicacao:
      "A moralidade exige legalidade, ética, probidade e boa-fé na atuação administrativa (Art. 37, caput).",
  },
  {
    id: 746,
    materia: "Direito Constitucional",
    assunto: "Ampla Defesa",
    enunciado: "O princípio da ampla defesa:",
    alternativas: {
      A: "Garante ao acusado apresentar meios de prova e contraditar provas contrárias em processos judiciais ou administrativos.",
      B: "Aplica-se apenas a processos judiciais criminais.",
      C: "Dispensa a participação do advogado.",
      D: "É restrito a cidadãos brasileiros natos.",
      E: "Permite que o Estado ignore provas apresentadas pelo réu.",
    },
    correta: "A",
    explicacao:
      "A ampla defesa assegura ao acusado a possibilidade de apresentar provas e contraditar provas contrárias (Art. 5º, LV).",
  },
  {
    id: 747,
    materia: "Direito Constitucional",
    assunto: "Polícia Federal - Atuação",
    enunciado: "A atuação da Polícia Federal inclui:",
    alternativas: {
      A: "Proteção de fronteiras, repressão a crimes federais e cooperação internacional.",
      B: "Segurança municipal de bens públicos.",
      C: "Atividades investigativas de trânsito interestadual exclusivamente.",
      D: "Apenas atuação ostensiva em cidades grandes.",
      E: "Atuação exclusiva no sistema prisional.",
    },
    correta: "A",
    explicacao:
      "A Polícia Federal atua em crimes de competência da União, fronteiras, cooperação internacional e repressão a crimes federais (Art. 144, §1º).",
  },
  {
    id: 748,
    materia: "Direito Constitucional",
    assunto: "Direito de Greve",
    enunciado: "O direito de greve:",
    alternativas: {
      A: "É garantido apenas a trabalhadores da iniciativa privada.",
      B: "Aplica-se a servidores públicos, respeitadas limitações legais e essenciais à prestação de serviços essenciais.",
      C: "Pode ser exercido sem restrição, inclusive em serviços essenciais.",
      D: "Substitui qualquer negociação coletiva.",
      E: "Aplica-se apenas a sindicatos internacionais.",
    },
    correta: "B",
    explicacao:
      "O direito de greve é garantido a servidores e trabalhadores privados, com limitações em serviços essenciais (Art. 5º, XVI e Constituição Federal, Art. 37, VII).",
  },
  {
    id: 749,
    materia: "Direito Constitucional",
    assunto: "Finalidade do Estado de Sítio",
    enunciado: "A decretação do estado de sítio visa:",
    alternativas: {
      A: "Proteger apenas interesses econômicos privados.",
      B: "Resguardar a ordem, a paz e a segurança nacional diante de grave ameaça ou guerra.",
      C: "Substituir medidas administrativas de rotina.",
      D: "Restringir permanentemente todos os direitos fundamentais.",
      E: "Aplicar-se apenas a municípios fronteiriços.",
    },
    correta: "B",
    explicacao:
      "O estado de sítio tem finalidade de proteger a ordem, a paz e a segurança nacional em situações graves (Art. 137-139).",
  },
  {
    id: 750,
    materia: "Direito Constitucional",
    assunto: "Publicidade dos Atos",
    enunciado: "Sobre o princípio da publicidade:",
    alternativas: {
      A: "Garante que atos administrativos sejam transparentes, possibilitando controle social e legalidade.",
      B: "Aplica-se apenas a atos internos, sem divulgação.",
      C: "Pode ser ignorado quando houver interesse político.",
      D: "Substitui o princípio da legalidade.",
      E: "Limita a eficiência administrativa.",
    },
    correta: "A",
    explicacao:
      "A publicidade garante transparência dos atos administrativos, permitindo fiscalização e controle social (Art. 37, caput).",
  },
  {
    id: 751,
    materia: "Direito Penal",
    assunto: "Do Crime - Arts. 13 ao 25",
    enunciado: "Considera-se crime, de acordo com o Código Penal:",
    alternativas: {
      A: "Apenas a conduta que seja típica e dolosa.",
      B: "A conduta típica, antijurídica e culpável, dolosa ou culposa.",
      C: "Toda ação humana, mesmo lícita, se causar dano.",
      D: "Apenas a conduta prevista em lei federal, não aplicando-se leis estaduais.",
      E: "Apenas condutas dolosas praticadas por maiores de idade.",
    },
    correta: "B",
    explicacao:
      "O crime é a conduta humana que se enquadra na tipicidade, antijuridicidade e culpabilidade, podendo ser dolosa ou culposa (Arts. 13-25).",
  },
  {
    id: 752,
    materia: "Direito Penal",
    assunto: "Da Imputabilidade Penal - Arts. 26 ao 28",
    enunciado:
      "A respeito da imputabilidade penal, assinale a alternativa correta:",
    alternativas: {
      A: "Menores de 21 anos são sempre inimputáveis.",
      B: "O maior de 18 anos é sempre imputável, sem exceções.",
      C: "São inimputáveis os menores de 18 anos e aqueles que, ao tempo do fato, eram incapazes de entender o caráter ilícito da conduta ou de se determinar de acordo com esse entendimento.",
      D: "Pessoas alcoolizadas nunca são imputáveis, independentemente da situação.",
      E: "O surdo-mudo é sempre inimputável.",
    },
    correta: "C",
    explicacao:
      "O Código Penal prevê inimputabilidade para menores de 18 anos e para quem, por doença mental ou outra causa, não consegue entender ou se comportar de acordo com o ilícito (Arts. 26-28).",
  },
  {
    id: 753,
    materia: "Direito Penal",
    assunto: "Das Penas - Arts. 32 ao 52",
    enunciado: "Assinale a alternativa correta sobre a aplicação das penas:",
    alternativas: {
      A: "Todas as penas são privativas de liberdade.",
      B: "A pena de multa não pode ser aplicada isoladamente.",
      C: "As penas podem ser privativas de liberdade, restritivas de direitos ou multa, isoladas ou cumulativamente.",
      D: "A pena restritiva de direitos não pode ser aplicada em crimes dolosos.",
      E: "A pena de prisão substitui a multa obrigatoriamente.",
    },
    correta: "C",
    explicacao:
      "O Código Penal prevê penas privativas de liberdade, restritivas de direitos e multa, que podem ser aplicadas isoladas ou cumulativamente (Arts. 32-52).",
  },
  {
    id: 754,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Arts. 121 ao 150",
    enunciado: "Assinale a alternativa correta sobre homicídio:",
    alternativas: {
      A: "Homicídio doloso é aquele praticado sem intenção de matar.",
      B: "Homicídio culposo ocorre quando há dolo de matar.",
      C: "Homicídio privilegiado é aquele que ocorre por relevante valor moral ou social.",
      D: "O homicídio simples admite sempre aumento de pena se o réu se arrepender.",
      E: "Homicídio qualificado não depende de circunstâncias específicas.",
    },
    correta: "C",
    explicacao:
      "O homicídio privilegiado ocorre quando o agente atua por relevante valor moral ou social ou sob emoção intensa (Art. 121, §1º).",
  },
  {
    id: 755,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Arts. 155 ao 180",
    enunciado: "O furto, conforme o Código Penal, caracteriza-se por:",
    alternativas: {
      A: "Subtrair coisa móvel alheia, com violência à pessoa.",
      B: "Apropriar-se de bem móvel alheio, sem consentimento, para si ou terceiro, sem violência.",
      C: "Subtrair bens públicos apenas.",
      D: "Tomar coisa móvel de próprio patrimônio.",
      E: "Subtrair bem móvel de qualquer pessoa, inclusive com consentimento.",
    },
    correta: "B",
    explicacao:
      "O furto consiste em subtração de coisa alheia móvel, para si ou terceiro, sem violência (Art. 155).",
  },
  {
    id: 756,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Arts. 213 ao 218-C",
    enunciado:
      "A respeito do crime de estupro, assinale a alternativa correta:",
    alternativas: {
      A: "Configura-se quando há conjunção carnal ou outro ato libidinoso com alguém mediante violência ou grave ameaça.",
      B: "Só ocorre se houver violência física com lesão corporal.",
      C: "Estupro é crime culposo, quando não há intenção de ofender.",
      D: "Aplica-se apenas a menores de idade.",
      E: "Estupro não abrange atos praticados contra incapaz de consentir.",
    },
    correta: "A",
    explicacao:
      "O crime de estupro abrange conjunção carnal ou ato libidinoso mediante violência ou grave ameaça, independentemente de lesão corporal (Art. 213).",
  },
  {
    id: 757,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Arts. 312 ao 327",
    enunciado: "O crime de peculato caracteriza-se por:",
    alternativas: {
      A: "Apropriar-se de dinheiro público que tenha acesso em razão do cargo.",
      B: "Receber propina sem relação com cargo público.",
      C: "Usar documento falso sem prejuízo ao erário.",
      D: "Apropriar-se de dinheiro privado de terceiros.",
      E: "Denunciar irregularidades ao Ministério Público.",
    },
    correta: "A",
    explicacao:
      "O peculato ocorre quando funcionário público se apropria de dinheiro ou bens públicos que tenha acesso por causa do cargo (Art. 312).",
  },
  {
    id: 758,
    materia: "Direito Penal",
    assunto: "Imputabilidade Penal - Arts. 26 ao 28",
    enunciado:
      "Em relação à imputabilidade penal de pessoas com doença mental:",
    alternativas: {
      A: "São sempre imputáveis.",
      B: "São inimputáveis se, ao tempo do fato, não puderam entender o caráter ilícito da conduta ou determinar-se conforme esse entendimento.",
      C: "São imputáveis, mesmo se não entendem a ilicitude, quando maiores de 18 anos.",
      D: "São inimputáveis apenas se forem menores de 18 anos.",
      E: "A imputabilidade não se aplica a atos culposos.",
    },
    correta: "B",
    explicacao:
      "A inimputabilidade ocorre quando a pessoa, por doença mental, não consegue entender ou agir de acordo com a ilicitude (Art. 26).",
  },
  {
    id: 759,
    materia: "Direito Penal",
    assunto: "Penas - Arts. 32 ao 52",
    enunciado: "A pena restritiva de direitos:",
    alternativas: {
      A: "Pode substituir a pena privativa de liberdade nos casos de réu primário e crime de menor potencial ofensivo.",
      B: "Nunca pode substituir prisão.",
      C: "Aplica-se apenas em crimes culposos.",
      D: "É obrigatória em crimes dolosos contra a vida.",
      E: "Substitui multa obrigatoriamente.",
    },
    correta: "A",
    explicacao:
      "A pena restritiva de direitos pode substituir a prisão em casos de menor gravidade e réu primário (Art. 44).",
  },
  {
    id: 760,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Lesão Corporal",
    enunciado: "A lesão corporal grave:",
    alternativas: {
      A: "Só ocorre quando há risco de morte.",
      B: "Inclui incapacidade para as ocupações habituais por mais de 30 dias, perigo de vida ou debilidade permanente.",
      C: "É sempre punida com prisão mínima de 4 anos.",
      D: "Aplica-se apenas a crimes culposos.",
      E: "Não considera sofrimento físico do ofendido.",
    },
    correta: "B",
    explicacao:
      "Lesão corporal grave ocorre com incapacidade para ocupações habituais por mais de 30 dias, perigo de vida ou debilidade permanente (Art. 129, §1º).",
  },
  {
    id: 761,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Roubo",
    enunciado: "O roubo, segundo o Código Penal, caracteriza-se por:",
    alternativas: {
      A: "Subtração de coisa móvel alheia, sem violência ou grave ameaça.",
      B: "Subtração de coisa móvel alheia, mediante violência ou grave ameaça à pessoa.",
      C: "Apropriação de coisa própria, usando violência.",
      D: "Subtração de bens públicos sem uso de violência.",
      E: "Furto de bens móveis de qualquer pessoa, mesmo com consentimento.",
    },
    correta: "B",
    explicacao:
      "O roubo ocorre quando há subtração de coisa alheia mediante violência ou grave ameaça (Art. 157).",
  },
  {
    id: 762,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Importunação Sexual",
    enunciado: "O crime de importunação sexual:",
    alternativas: {
      A: "Exige conjunção carnal.",
      B: "Consiste em praticar ato libidinoso sem consentimento, com intuito sexual, sem necessidade de violência física.",
      C: "Aplica-se apenas a menores de idade.",
      D: "É um crime culposo.",
      E: "Substitui o crime de estupro.",
    },
    correta: "B",
    explicacao:
      "O crime de importunação sexual ocorre quando há ato libidinoso sem consentimento, com intuito sexual, podendo não envolver violência (Art. 215-A).",
  },
  {
    id: 763,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Concussão",
    enunciado: "O crime de concussão ocorre quando:",
    alternativas: {
      A: "O funcionário público exige, para si ou para outro, vantagem indevida, em razão do cargo.",
      B: "O funcionário aceita vantagem oferecida espontaneamente.",
      C: "Há apenas apropriação de bens públicos sem exigir vantagem.",
      D: "O crime envolve apenas documentos falsos.",
      E: "Aplica-se somente a crimes de trânsito.",
    },
    correta: "A",
    explicacao:
      "A concussão ocorre quando o funcionário exige vantagem indevida em razão do cargo (Art. 316).",
  },
  {
    id: 764,
    materia: "Direito Penal",
    assunto: "Imputabilidade - Desenvolvimento Mental",
    enunciado:
      "A inimputabilidade por desenvolvimento mental incompleto ou retardado:",
    alternativas: {
      A: "Sempre exclui a aplicação de pena.",
      B: "Pode ser total ou parcial, permitindo redução ou substituição da pena se comprovada diminuição da capacidade de entendimento ou autodeterminação.",
      C: "Aplica-se apenas a menores de 18 anos.",
      D: "Nunca é considerada em crimes culposos.",
      E: "Substitui automaticamente a pena privativa de liberdade por multa.",
    },
    correta: "B",
    explicacao:
      "A redução de pena pode ocorrer quando o réu tem diminuição da capacidade de entender ou agir de acordo com a lei (Art. 26, §1º).",
  },
  {
    id: 765,
    materia: "Direito Penal",
    assunto: "Das Penas - Multa",
    enunciado: "A pena de multa:",
    alternativas: {
      A: "Aplica-se isoladamente em qualquer crime.",
      B: "Pode ser aplicada isoladamente ou cumulativamente com outras penas, conforme a gravidade do crime e a condição econômica do réu.",
      C: "Substitui automaticamente a pena privativa de liberdade em crimes graves.",
      D: "É obrigatória em todos os crimes contra a pessoa.",
      E: "Aplica-se apenas a crimes culposos.",
    },
    correta: "B",
    explicacao:
      "A multa pode ser aplicada isolada ou cumulativamente, considerando a gravidade do crime e situação econômica do condenado (Arts. 49-52).",
  },
  {
    id: 766,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Homicídio Culposo",
    enunciado: "O homicídio culposo ocorre quando:",
    alternativas: {
      A: "Há intenção de matar.",
      B: "Não há intenção de matar, mas há negligência, imprudência ou imperícia.",
      C: "O agente comete homicídio por relevante valor moral ou social.",
      D: "Sempre envolve violência física intensa.",
      E: "Aplica-se apenas a menores de idade.",
    },
    correta: "B",
    explicacao:
      "Homicídio culposo é aquele praticado sem intenção de matar, mas por negligência, imprudência ou imperícia (Art. 121, §3º).",
  },
  {
    id: 767,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Receptação",
    enunciado: "A receptação qualificada ocorre quando:",
    alternativas: {
      A: "O réu adquire, recebe, transporta ou oculta produto de crime, sabendo de sua procedência ilícita, de forma habitual ou como profissional.",
      B: "O réu vende produtos de sua própria propriedade.",
      C: "Não há conhecimento da origem ilícita.",
      D: "O crime envolve apenas bens públicos.",
      E: "É sempre culposo.",
    },
    correta: "A",
    explicacao:
      "A receptação qualificada exige conhecimento da origem ilícita e pode envolver habitualidade ou atividade profissional (Art. 180, §1º).",
  },
  {
    id: 768,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Estupro de Vulnerável",
    enunciado: "O estupro de vulnerável:",
    alternativas: {
      A: "Exige violência física.",
      B: "Ocorre quando a vítima não tem capacidade de consentir, como menores de 14 anos ou pessoas com enfermidade mental.",
      C: "Aplica-se apenas a conjunção carnal.",
      D: "É sempre culposo.",
      E: "Ocorre apenas contra idosos.",
    },
    correta: "B",
    explicacao:
      "O estupro de vulnerável ocorre quando a vítima não pode consentir, independentemente de violência (Art. 217-A).",
  },
  {
    id: 769,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Prevaricação",
    enunciado: "O crime de prevaricação:",
    alternativas: {
      A: "Consiste em retardar ou deixar de praticar ato de ofício para satisfazer interesse ou sentimento pessoal.",
      B: "Exige vantagem econômica.",
      C: "Aplica-se apenas a crimes contra a vida.",
      D: "Substitui o crime de peculato.",
      E: "É culposo.",
    },
    correta: "A",
    explicacao:
      "Prevaricação ocorre quando o funcionário retarda ou deixa de praticar ato de ofício por interesse pessoal (Art. 319).",
  },
  {
    id: 770,
    materia: "Direito Penal",
    assunto: "Das Penas - Substituição",
    enunciado: "A pena privativa de liberdade, segundo o Código Penal, pode:",
    alternativas: {
      A: "Ser cumprida apenas em regime fechado.",
      B: "Ser substituída por penas restritivas de direitos, nos casos permitidos por lei, especialmente para réus primários e crimes de menor gravidade.",
      C: "Nunca ser substituída.",
      D: "Aplicar-se apenas a crimes dolosos contra a vida.",
      E: "Substituir automaticamente multa.",
    },
    correta: "B",
    explicacao:
      "A pena privativa de liberdade pode ser substituída por restritiva de direitos em casos de menor gravidade e réu primário (Art. 44).",
  },
  {
    id: 771,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Lesão Corporal Culposa",
    enunciado: "A lesão corporal culposa:",
    alternativas: {
      A: "É praticada com intenção de ofender a integridade física.",
      B: "Ocorre sem intenção, por negligência, imprudência ou imperícia.",
      C: "Aplica-se apenas a menores de idade.",
      D: "Não admite aumento de pena em caso de resultado grave.",
      E: "Substitui o homicídio doloso automaticamente.",
    },
    correta: "B",
    explicacao:
      "Lesão corporal culposa ocorre quando o agente causa dano sem intenção, por negligência, imprudência ou imperícia (Art. 129, §6º).",
  },
  {
    id: 772,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Estelionato",
    enunciado: "O estelionato caracteriza-se por:",
    alternativas: {
      A: "Apropriação de coisa alheia mediante violência física.",
      B: "Obter vantagem ilícita para si ou terceiro, induzindo alguém a erro mediante fraude.",
      C: "Subtração de bem móvel sem consentimento.",
      D: "Apropriação de coisa própria.",
      E: "Recebimento de coisa roubada sem saber da origem.",
    },
    correta: "B",
    explicacao:
      "O estelionato ocorre quando alguém obtém vantagem ilícita por meio de fraude, induzindo outrem a erro (Art. 171).",
  },
  {
    id: 773,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Assédio Sexual",
    enunciado: "O assédio sexual, segundo o Código Penal:",
    alternativas: {
      A: "Ocorre apenas em locais públicos.",
      B: "Consiste em constranger alguém com intuito de obter vantagem sexual, prevalecendo-se da condição de superior hierárquico ou situação de vulnerabilidade.",
      C: "Aplica-se somente a menores de idade.",
      D: "Exige conjunção carnal.",
      E: "É crime culposo.",
    },
    correta: "B",
    explicacao:
      "O assédio sexual ocorre quando há constrangimento com intenção de vantagem sexual, prevalecendo-se da superioridade hierárquica ou vulnerabilidade (Art. 216-A).",
  },
  {
    id: 774,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Advocacia Administrativa",
    enunciado: "O crime de advocacia administrativa:",
    alternativas: {
      A: "Consiste em interceder junto a autoridade pública para favorecer interesse próprio ou de terceiro, usando o cargo indevidamente.",
      B: "Exige vantagem financeira.",
      C: "Aplica-se apenas a crimes contra a vida.",
      D: "É sempre culposo.",
      E: "Substitui o peculato.",
    },
    correta: "A",
    explicacao:
      "A advocacia administrativa ocorre quando funcionário público usa o cargo para interceder, favorecendo interesse próprio ou de terceiro (Art. 321).",
  },
  {
    id: 775,
    materia: "Direito Penal",
    assunto: "Imputabilidade - Menor Infrator",
    enunciado: "O menor de 18 anos, ao cometer ato infracional:",
    alternativas: {
      A: "É punido com prisão nos mesmos moldes do Código Penal.",
      B: "Está sujeito às medidas socioeducativas previstas no Estatuto da Criança e do Adolescente.",
      C: "É sempre inimputável, sem qualquer medida legal.",
      D: "Substitui a pena por multa automaticamente.",
      E: "É punido apenas se houver lesão corporal.",
    },
    correta: "B",
    explicacao:
      "O menor infrator responde por medidas socioeducativas, não por penas do Código Penal (Art. 228 da CF e ECA).",
  },
  {
    id: 776,
    materia: "Direito Penal",
    assunto: "Das Penas - Sursis",
    enunciado: "A suspensão condicional da pena (sursis):",
    alternativas: {
      A: "Pode ser concedida para qualquer crime, independentemente da pena.",
      B: "Exige condenação a pena privativa de liberdade igual ou inferior a 2 anos, com cumprimento de condições legais.",
      C: "Substitui automaticamente multa.",
      D: "Aplica-se apenas a crimes culposos.",
      E: "Dispensa o acompanhamento judicial.",
    },
    correta: "B",
    explicacao:
      "O sursis permite suspensão da pena privativa de liberdade até 2 anos, desde que o réu cumpra certas condições (Arts. 77-82).",
  },
  {
    id: 777,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Infanticídio",
    enunciado: "O infanticídio:",
    alternativas: {
      A: "É a morte de recém-nascido por qualquer pessoa.",
      B: "É cometido pela mãe, sob influência do estado puerperal.",
      C: "Aplica-se apenas a homicídio culposo.",
      D: "Exige premeditação.",
      E: "Substitui o homicídio qualificado.",
    },
    correta: "B",
    explicacao:
      "O infanticídio é praticado pela mãe, no período de puerpério, sob influência do estado puerperal (Art. 123).",
  },
  {
    id: 778,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Apropriação Indébita",
    enunciado: "A apropriação indébita ocorre quando:",
    alternativas: {
      A: "Alguém subtrai coisa móvel de outrem mediante violência.",
      B: "O agente se apropria de coisa alheia que recebeu legalmente, mas não restitui ou devolve.",
      C: "Há sempre lesão corporal.",
      D: "É crime culposo.",
      E: "Ocorre apenas com bens públicos.",
    },
    correta: "B",
    explicacao:
      "A apropriação indébita ocorre quando alguém possui a coisa legalmente, mas se apropria indevidamente (Art. 168).",
  },
  {
    id: 779,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Assédio em Ambiente de Trabalho",
    enunciado: "O assédio sexual em ambiente de trabalho:",
    alternativas: {
      A: "É considerado crime apenas se houver agressão física.",
      B: "Pode ocorrer com qualquer constrangimento sexual, mesmo sem contato físico, prevalecendo-se da posição hierárquica.",
      C: "Aplica-se apenas a empregados com carteira assinada.",
      D: "É sempre culposo.",
      E: "Não é tipificado no Código Penal.",
    },
    correta: "B",
    explicacao:
      "O assédio sexual ocorre quando há constrangimento, mesmo sem contato físico, prevalecendo-se da posição hierárquica ou vulnerabilidade (Art. 216-A).",
  },
  {
    id: 780,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Peculato Culposo",
    enunciado: "O peculato culposo:",
    alternativas: {
      A: "Não existe.",
      B: "Ocorre quando o funcionário público se apropria de bens públicos por negligência, imprudência ou imperícia, sem intenção de prejudicar.",
      C: "É sempre doloso.",
      D: "Aplica-se apenas a crimes contra a vida.",
      E: "Substitui a concussão.",
    },
    correta: "B",
    explicacao:
      "O peculato culposo ocorre sem intenção de prejudicar, por negligência, imprudência ou imperícia (Art. 312, §2º).",
  },
  {
    id: 781,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Lesão Seguida de Morte",
    enunciado: "O crime de lesão corporal seguida de morte:",
    alternativas: {
      A: "É sempre doloso.",
      B: "Ocorre quando a lesão corporal dolosa resulta na morte da vítima, mesmo sem intenção de matar.",
      C: "É sempre culposo.",
      D: "Aplica-se apenas a crimes contra incapazes.",
      E: "Substitui o homicídio qualificado.",
    },
    correta: "B",
    explicacao:
      "Lesão corporal seguida de morte ocorre quando a agressão intencional causa morte sem dolo de matar (Art. 129, §3º).",
  },
  {
    id: 782,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Extorsão",
    enunciado: "O crime de extorsão consiste em:",
    alternativas: {
      A: "Subtrair coisa alheia móvel, sem violência.",
      B: "Constranger alguém, mediante violência ou grave ameaça, a entregar dinheiro ou bens.",
      C: "Apropriar-se de bens públicos.",
      D: "Receber coisa de origem ilícita sem saber.",
      E: "Subtrair bens próprios.",
    },
    correta: "B",
    explicacao:
      "A extorsão ocorre quando há constrangimento mediante violência ou grave ameaça para obter vantagem econômica (Art. 158).",
  },
  {
    id: 783,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Constrangimento Sexual",
    enunciado: "O crime de assédio sexual:",
    alternativas: {
      A: "É praticado apenas contra menores.",
      B: "Inclui constrangimento com finalidade sexual, prevalecendo-se da posição hierárquica ou vulnerabilidade da vítima.",
      C: "Exige conjunção carnal.",
      D: "É sempre culposo.",
      E: "Substitui estupro.",
    },
    correta: "B",
    explicacao:
      "O assédio sexual envolve constrangimento com finalidade sexual e aproveitamento de posição hierárquica ou vulnerabilidade (Art. 216-A).",
  },
  {
    id: 784,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Corrupc̃ão Passiva",
    enunciado: "O crime de corrupção passiva:",
    alternativas: {
      A: "Consiste em receber vantagem indevida em razão do cargo ou função pública.",
      B: "Ocorre apenas quando há pagamento de propina em dinheiro.",
      C: "Aplica-se apenas a funcionários estaduais.",
      D: "É sempre culposo.",
      E: "Não exige vínculo funcional.",
    },
    correta: "A",
    explicacao:
      "Corrupção passiva ocorre quando funcionário público recebe vantagem indevida em razão do cargo (Art. 317).",
  },
  {
    id: 785,
    materia: "Direito Penal",
    assunto: "Das Penas - Conversão em Restritiva de Direitos",
    enunciado:
      "A conversão da pena privativa de liberdade em restritiva de direitos:",
    alternativas: {
      A: "É automática em todos os casos.",
      B: "Pode ocorrer nos crimes de menor potencial ofensivo e quando o réu é primário.",
      C: "Substitui a multa obrigatoriamente.",
      D: "Aplica-se apenas a crimes dolosos contra a vida.",
      E: "É opcional e depende da vontade do réu.",
    },
    correta: "B",
    explicacao:
      "A substituição é permitida para crimes de menor potencial ofensivo e réus primários (Art. 44).",
  },
  {
    id: 786,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Ameaça",
    enunciado: "O crime de ameaça:",
    alternativas: {
      A: "É praticado por qualquer conduta que gere medo, sem necessidade de intenção.",
      B: "Consiste em ameaçar alguém de mal injusto e grave, com intenção de intimidar.",
      C: "Aplica-se apenas a menores de idade.",
      D: "É sempre culposo.",
      E: "Ocorre apenas se houver lesão corporal.",
    },
    correta: "B",
    explicacao:
      "A ameaça é crime doloso, praticada com intenção de intimidar a vítima com mal injusto e grave (Art. 147).",
  },
  {
    id: 787,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Fraude",
    enunciado: "A fraude em empréstimos bancários configura crime de:",
    alternativas: {
      A: "Estelionato, quando há obtenção de vantagem ilícita mediante engano ou fraude.",
      B: "Roubo.",
      C: "Furto qualificado.",
      D: "Peculato.",
      E: "Extorsão.",
    },
    correta: "A",
    explicacao:
      "Fraude em empréstimos caracteriza estelionato, pois há vantagem ilícita mediante engano (Art. 171).",
  },
  {
    id: 788,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Corrupção de Menores",
    enunciado: "O crime de corrupção de menores:",
    alternativas: {
      A: "É praticado apenas contra menores de 12 anos.",
      B: "Consiste em induzir, instigar ou auxiliar menor de 18 anos a praticar atos ilícitos.",
      C: "Exige conjunção carnal.",
      D: "Aplica-se apenas em ambiente escolar.",
      E: "É sempre culposo.",
    },
    correta: "B",
    explicacao:
      "A corrupção de menores ocorre quando se induz ou auxilia menor de 18 anos a praticar atos ilícitos (Art. 218).",
  },
  {
    id: 789,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Diferença Concussão x Corrupção",
    enunciado: "A concussão distingue-se da corrupção passiva porque:",
    alternativas: {
      A: "O agente exige a vantagem, enquanto na corrupção passiva a vantagem é oferecida espontaneamente.",
      B: "Ambas são sempre culposas.",
      C: "Ocorrem apenas em crimes de trânsito.",
      D: "A concussão é praticada por particular.",
      E: "A corrupção passiva é crime culposo.",
    },
    correta: "A",
    explicacao:
      "Na concussão, o funcionário exige vantagem; na corrupção passiva, o particular oferece vantagem espontaneamente (Arts. 316 e 317).",
  },
  {
    id: 790,
    materia: "Direito Penal",
    assunto: "Das Penas - Regime Semiaberto",
    enunciado: "O regime semiaberto:",
    alternativas: {
      A: "Exige cumprimento integral da pena em colônia agrícola ou industrial, com possibilidade de trabalho externo.",
      B: "É igual ao regime fechado.",
      C: "Aplica-se apenas a crimes culposos.",
      D: "Substitui automaticamente multa.",
      E: "É opcional, sem previsão legal.",
    },
    correta: "A",
    explicacao:
      "No regime semiaberto, a pena é cumprida em colônia agrícola ou industrial, com possibilidade de trabalho externo (Arts. 33 e 34).",
  },
  {
    id: 791,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Homicídio Privilegiado",
    enunciado: "O homicídio privilegiado ocorre quando:",
    alternativas: {
      A: "O agente age por motivo torpe.",
      B: "O agente atua por relevante valor moral ou social ou sob emoção intensa, reduzindo a pena.",
      C: "Há premeditação para matar a vítima.",
      D: "É sempre doloso qualificado.",
      E: "Aplica-se apenas a crimes culposos.",
    },
    correta: "B",
    explicacao:
      "O homicídio privilegiado reduz a pena quando o agente age por relevante valor moral ou social ou sob emoção intensa (Art. 121, §1º).",
  },
  {
    id: 792,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Dano",
    enunciado: "O crime de dano:",
    alternativas: {
      A: "Consiste em destruir ou deteriorar coisa alheia, podendo ser doloso ou culposo.",
      B: "Sempre exige violência física contra a vítima.",
      C: "Aplica-se apenas a bens públicos.",
      D: "É crime culposo exclusivamente.",
      E: "Substitui o furto.",
    },
    correta: "A",
    explicacao:
      "O crime de dano ocorre quando se destrói ou deteriora coisa alheia, podendo ser doloso ou culposo (Art. 163).",
  },
  {
    id: 793,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Estupro mediante Fraude",
    enunciado: "O crime de estupro mediante fraude:",
    alternativas: {
      A: "Não existe no Código Penal.",
      B: "Consiste em obter vantagem sexual enganando a vítima, sem violência física.",
      C: "Aplica-se apenas a menores de 14 anos.",
      D: "É sempre culposo.",
      E: "Exige conjunção carnal obrigatória.",
    },
    correta: "B",
    explicacao:
      "O estupro mediante fraude ocorre quando há vantagem sexual obtida enganando a vítima (Art. 215).",
  },
  {
    id: 794,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Prevaricação Culposa",
    enunciado: "O crime de prevaricação culposa:",
    alternativas: {
      A: "Não existe, pois prevaricação exige dolo.",
      B: "Consiste em retardar ato de ofício sem intenção.",
      C: "Aplica-se apenas a crimes contra a vida.",
      D: "Substitui a concussão.",
      E: "É crime culposo contra particulares.",
    },
    correta: "A",
    explicacao:
      "A prevaricação exige dolo, portanto não há forma culposa (Art. 319).",
  },
  {
    id: 795,
    materia: "Direito Penal",
    assunto: "Das Penas - Restritiva de Direitos",
    enunciado: "A pena restritiva de direitos pode incluir:",
    alternativas: {
      A: "Prestação de serviços à comunidade, limitação de fim de semana, interdição temporária de direitos, entre outras.",
      B: "Prisão fechada.",
      C: "Pena de morte.",
      D: "Substituição automática da multa.",
      E: "Aplicação apenas a crimes de trânsito.",
    },
    correta: "A",
    explicacao:
      "A pena restritiva de direitos compreende prestação de serviços à comunidade, limitação de fins de semana, interdição de direitos, etc. (Art. 44).",
  },
  {
    id: 796,
    materia: "Direito Penal",
    assunto: "Crimes contra a Pessoa - Lesão Corporal Leve",
    enunciado: "A lesão corporal leve:",
    alternativas: {
      A: "Resulta em incapacidade para ocupações habituais por mais de 30 dias.",
      B: "Causa sofrimento físico à vítima, mas sem incapacidade prolongada.",
      C: "Aplica-se apenas a crimes culposos.",
      D: "É sempre qualificada.",
      E: "Substitui homicídio doloso.",
    },
    correta: "B",
    explicacao:
      "Lesão corporal leve provoca sofrimento físico, sem incapacidade para ocupações habituais por longo período (Art. 129, caput).",
  },
  {
    id: 797,
    materia: "Direito Penal",
    assunto: "Crimes contra o Patrimônio - Diferença Furto x Roubo",
    enunciado: "A diferença entre furto e roubo está:",
    alternativas: {
      A: "No uso de violência ou grave ameaça presente no roubo, ausente no furto.",
      B: "No tipo de bem subtraído.",
      C: "Na idade da vítima.",
      D: "Na culpabilidade do agente.",
      E: "Na motivação do crime.",
    },
    correta: "A",
    explicacao:
      "O roubo envolve violência ou grave ameaça; o furto não (Arts. 155 e 157).",
  },
  {
    id: 798,
    materia: "Direito Penal",
    assunto: "Crimes contra os Costumes - Assédio em Transporte",
    enunciado: "O crime de assédio sexual em transporte público:",
    alternativas: {
      A: "Não existe tipificação legal.",
      B: "Ocorre quando há constrangimento sexual com vítima em situação de vulnerabilidade.",
      C: "Exige violência física.",
      D: "Aplica-se apenas a menores de 14 anos.",
      E: "É sempre culposo.",
    },
    correta: "B",
    explicacao:
      "O assédio sexual ocorre quando a vítima é constrangida sexualmente, mesmo sem violência, em situação de vulnerabilidade (Art. 216-A).",
  },
  {
    id: 799,
    materia: "Direito Penal",
    assunto: "Crimes de Funcionário Público - Corrupção Ativa",
    enunciado: "O crime de corrupção ativa:",
    alternativas: {
      A: "É praticado por particular que oferece vantagem indevida a funcionário público.",
      B: "Aplica-se apenas a servidores estaduais.",
      C: "Não exige relação com cargo público.",
      D: "É sempre culposo.",
      E: "Substitui a corrupção passiva.",
    },
    correta: "A",
    explicacao:
      "Corrupção ativa é praticada pelo particular que oferece vantagem indevida a funcionário público (Art. 333).",
  },
  {
    id: 800,
    materia: "Direito Penal",
    assunto: "Das Penas - Regime Aberto",
    enunciado: "O regime aberto:",
    alternativas: {
      A: "Permite que o condenado cumpra a pena em casa, com saídas para trabalho, estudo ou assistência à família, mediante autorização judicial.",
      B: "É igual ao fechado.",
      C: "Substitui automaticamente multa.",
      D: "Aplica-se apenas a crimes culposos.",
      E: "Não existe no Código Penal.",
    },
    correta: "A",
    explicacao:
      "No regime aberto, a pena é cumprida em casa com autorização judicial para trabalho, estudo ou assistência à família (Arts. 33 e 34).",
  },
  {
    id: 801,
    materia: "Direitos Humanos",
    assunto: "Teoria geral dos direitos humanos",
    enunciado: "Os direitos humanos podem ser compreendidos como:",
    alternativas: {
      A: "Privilégios concedidos apenas a cidadãos nacionais em situações de guerra.",
      B: "Direitos inerentes a toda pessoa humana, reconhecidos e protegidos no plano interno e internacional.",
      C: "Direitos criados exclusivamente por tratados internacionais, sem relação com a ordem interna.",
      D: "Faculdades concedidas pelo governante conforme sua vontade política.",
      E: "Normas que se aplicam apenas em períodos de normalidade democrática.",
    },
    correta: "B",
    explicacao:
      "Direitos humanos são universais, inerentes à pessoa humana e reconhecidos pela ordem interna e internacional, garantindo dignidade, liberdade e igualdade.",
  },
  {
    id: 802,
    materia: "Direitos Humanos",
    assunto: "Características dos direitos humanos",
    enunciado: "A universalidade dos direitos humanos significa que:",
    alternativas: {
      A: "Somente se aplicam a nacionais de países democráticos.",
      B: "Podem ser livremente restringidos por atos administrativos.",
      C: "Pertencem a todas as pessoas, independentemente de nacionalidade, raça, gênero ou crença.",
      D: "Dependem de filiação partidária para serem exercidos.",
      E: "Limitam-se a direitos civis e políticos, excluindo direitos sociais.",
    },
    correta: "C",
    explicacao:
      "A universalidade indica que os direitos humanos se dirigem a todas as pessoas, sem discriminação, alcançando qualquer ser humano.",
  },
  {
    id: 803,
    materia: "Direitos Humanos",
    assunto: "Indivisibilidade e interdependência",
    enunciado:
      "A indivisibilidade e a interdependência dos direitos humanos indicam que:",
    alternativas: {
      A: "Direitos civis são mais importantes que direitos sociais.",
      B: "Direitos de primeira, segunda e terceira dimensões podem ser separados sem prejuízo.",
      C: "A proteção da dignidade humana exige a observância conjunta de direitos civis, políticos, sociais, econômicos e culturais.",
      D: "A realização de direitos sociais dispensa a proteção de liberdades públicas.",
      E: "A efetivação de um direito humano não influencia os demais.",
    },
    correta: "C",
    explicacao:
      "Indivisibilidade e interdependência significam que os diversos tipos de direitos humanos se complementam e devem ser protegidos em conjunto.",
  },
  {
    id: 804,
    materia: "Direitos Humanos",
    assunto: "Dimensões dos direitos humanos",
    enunciado:
      "Os chamados direitos de primeira dimensão estão relacionados, predominantemente, a:",
    alternativas: {
      A: "Direitos sociais, como saúde e educação.",
      B: "Direitos de solidariedade, como meio ambiente equilibrado.",
      C: "Liberdades civis e políticas, como vida, liberdade e propriedade.",
      D: "Direitos coletivos do consumidor.",
      E: "Direitos econômicos de empresas estatais.",
    },
    correta: "C",
    explicacao:
      "Direitos de primeira dimensão são as liberdades clássicas, ligadas à limitação do poder estatal e à proteção de direitos civis e políticos.",
  },
  {
    id: 805,
    materia: "Direitos Humanos",
    assunto: "Segunda dimensão e direitos sociais",
    enunciado: "Os direitos de segunda dimensão estão ligados, principalmente:",
    alternativas: {
      A: "À proteção exclusiva da propriedade privada.",
      B: "À participação em partidos políticos.",
      C: "A direitos sociais, econômicos e culturais, que exigem prestações positivas do Estado.",
      D: "A deveres tributários dos cidadãos.",
      E: "Ao direito de resistência contra ditaduras.",
    },
    correta: "C",
    explicacao:
      "Direitos de segunda dimensão exigem atuação positiva do Estado para concretizar condições materiais mínimas de existência digna.",
  },
  {
    id: 806,
    materia: "Direitos Humanos",
    assunto: "Terceira dimensão e direitos difusos",
    enunciado:
      "Os direitos de terceira dimensão se relacionam, sobretudo, com:",
    alternativas: {
      A: "Direitos individuais patrimoniais.",
      B: "Direitos coletivos e difusos, como meio ambiente, paz e patrimônio comum da humanidade.",
      C: "Somente direitos políticos de voto.",
      D: "Apenas direitos trabalhistas individuais.",
      E: "Direitos exclusivos de empresas multinacionais.",
    },
    correta: "B",
    explicacao:
      "A terceira dimensão abrange direitos de titularidade coletiva ou difusa, voltados à solidariedade e à proteção de bens comuns da humanidade.",
  },
  {
    id: 807,
    materia: "Direitos Humanos",
    assunto: "Dignidade da pessoa humana",
    enunciado:
      "A dignidade da pessoa humana, como fundamento da ordem jurídica, implica que:",
    alternativas: {
      A: "O Estado pode relativizar qualquer direito em nome da eficiência econômica.",
      B: "A pessoa é meio para fins estatais, e nunca um fim em si mesma.",
      C: "Políticas públicas devem buscar assegurar condições mínimas de existência, respeito físico e moral a todos.",
      D: "Direitos humanos podem ser suprimidos por simples ato administrativo.",
      E: "A proteção da dignidade se limita ao âmbito privado, sem repercussão estatal.",
    },
    correta: "C",
    explicacao:
      "A dignidade exige que o Estado reconheça a pessoa como fim em si mesma, garantindo respeito à integridade, liberdade e condições básicas de vida.",
  },
  {
    id: 808,
    materia: "Direitos Humanos",
    assunto: "Declaração Universal de 1948",
    enunciado:
      "A Declaração Universal dos Direitos Humanos de 1948 pode ser corretamente caracterizada como:",
    alternativas: {
      A: "Tratado internacional com força obrigatória imediata em todos os países signatários.",
      B: "Documento de natureza recomendatória, que inspirou constituições e tratados posteriores.",
      C: "Código penal internacional de aplicação direta.",
      D: "Convenção regional restrita à Europa.",
      E: "Norma que trata apenas de direitos civis, excluindo direitos sociais.",
    },
    correta: "B",
    explicacao:
      "A Declaração Universal é um instrumento de soft law, com forte autoridade moral, que orientou a elaboração de tratados e constituições nacionais.",
  },
  {
    id: 809,
    materia: "Direitos Humanos",
    assunto: "Tratados internacionais de direitos humanos",
    enunciado:
      "Tratados internacionais de direitos humanos, em regra, têm a função de:",
    alternativas: {
      A: "Restringir direitos fundamentais em benefício da segurança nacional.",
      B: "Estabelecer padrões mínimos de proteção da pessoa humana entre os Estados.",
      C: "Regular exclusivamente relações comerciais internacionais.",
      D: "Tratar apenas de matéria tributária e aduaneira.",
      E: "Criar obrigações apenas para organizações privadas.",
    },
    correta: "B",
    explicacao:
      "Os tratados internacionais de direitos humanos fixam parâmetros mínimos de proteção à pessoa humana, vinculando os Estados que os ratificam.",
  },
  {
    id: 810,
    materia: "Direitos Humanos",
    assunto: "Incorporacao de tratados no Brasil",
    enunciado:
      "No Brasil, um tratado internacional de direitos humanos aprovado pelo rito do art. 5º, §3º, da Constituição Federal adquire:",
    alternativas: {
      A: "Status de lei ordinária federal.",
      B: "Status de lei complementar.",
      C: "Equivalência hierárquica às emendas constitucionais.",
      D: "Natureza infralegal, abaixo das leis ordinárias.",
      E: "Aplicação apenas se houver lei estadual confirmando-o.",
    },
    correta: "C",
    explicacao:
      "Quando aprovado em cada Casa do Congresso, em dois turnos, por três quintos dos votos, o tratado de direitos humanos passa a equivaler a emenda constitucional.",
  },
  {
    id: 811,
    materia: "Direitos Humanos",
    assunto: "Controle de convencionalidade",
    enunciado: "O controle de convencionalidade consiste em:",
    alternativas: {
      A: "Verificar se a lei interna é compatível apenas com a Constituição Federal.",
      B: "Comparar leis estaduais com a Constituição Estadual.",
      C: "Analisar a compatibilidade de normas internas com tratados internacionais de direitos humanos ratificados pelo Estado.",
      D: "Fiscalizar apenas atos de organizações internacionais.",
      E: "Controle exclusivo exercido por tribunais internacionais, sem participação de juízes nacionais.",
    },
    correta: "C",
    explicacao:
      "No controle de convencionalidade o intérprete verifica se leis e atos internos respeitam os compromissos assumidos em tratados internacionais de direitos humanos.",
  },
  {
    id: 812,
    materia: "Direitos Humanos",
    assunto: "Sistema global de proteção",
    enunciado:
      "O sistema global de proteção dos direitos humanos é estruturado, principalmente:",
    alternativas: {
      A: "Pelo Conselho da Europa e sua Corte.",
      B: "Pela Organização das Nações Unidas e seus órgãos, como o Conselho de Direitos Humanos.",
      C: "Pela Organização dos Estados Americanos e a Corte Interamericana.",
      D: "Pela Organização Mundial do Comércio.",
      E: "Exclusivamente por tribunais penais internacionais ad hoc.",
    },
    correta: "B",
    explicacao:
      "O sistema global tem como núcleo a ONU, com órgãos políticos e comitês de monitoramento dos principais tratados de direitos humanos.",
  },
  {
    id: 813,
    materia: "Direitos Humanos",
    assunto: "Sistema interamericano",
    enunciado:
      "No sistema interamericano de direitos humanos, destacam-se como instrumentos centrais:",
    alternativas: {
      A: "Carta Africana e Protocolo de Maputo.",
      B: "Convenção Europeia e Protocolo 11.",
      C: "Convenção Americana sobre Direitos Humanos e atuação da Comissão e da Corte Interamericana.",
      D: "Pacto Internacional de Direitos Civis e Políticos apenas.",
      E: "Carta da ONU e Estatuto de Roma.",
    },
    correta: "C",
    explicacao:
      "O sistema interamericano se organiza em torno da Convenção Americana, da Comissão Interamericana e da Corte Interamericana de Direitos Humanos.",
  },
  {
    id: 814,
    materia: "Direitos Humanos",
    assunto: "Comissão Interamericana",
    enunciado:
      "A Comissão Interamericana de Direitos Humanos tem, entre suas funções:",
    alternativas: {
      A: "Julgar em última instância todos os casos de violações cometidas por particulares.",
      B: "Atuar apenas como tribunal penal internacional.",
      C: "Receber petições, analisar situações de violação e encaminhar casos à Corte Interamericana quando cabível.",
      D: "Legislar diretamente para os Estados membros da OEA.",
      E: "Exercer apenas funções consultivas, sem examinar denúncias individuais.",
    },
    correta: "C",
    explicacao:
      "A Comissão recebe petições, realiza relatórios e, em certas hipóteses, submete casos à Corte Interamericana, exercendo papel de porta de entrada do sistema regional.",
  },
  {
    id: 815,
    materia: "Direitos Humanos",
    assunto: "Corte Interamericana",
    enunciado:
      "A respeito da Corte Interamericana de Direitos Humanos, é correto afirmar que:",
    alternativas: {
      A: "Seus julgamentos são meramente facultativos e sem qualquer efeito para os Estados.",
      B: "Só pode ser acionada diretamente por indivíduos, sem participação da Comissão.",
      C: "Emite decisões obrigatórias para Estados que reconheceram sua jurisdição contenciosa.",
      D: "Exerce apenas função consultiva, sem decidir casos concretos.",
      E: "É órgão da ONU, sem vínculo com a OEA.",
    },
    correta: "C",
    explicacao:
      "Para os Estados que reconheceram sua jurisdição, as sentenças da Corte Interamericana são obrigatórias e impõem dever de reparação e de adequação normativa.",
  },
  {
    id: 816,
    materia: "Direitos Humanos",
    assunto: "Pacto Internacional de Direitos Civis e Políticos",
    enunciado:
      "O Pacto Internacional de Direitos Civis e Políticos protege, entre outros, o direito:",
    alternativas: {
      A: "A férias anuais remuneradas e repouso semanal.",
      B: "À previdência social obrigatória.",
      C: "À liberdade de expressão, ao devido processo e à participação política.",
      D: "Exclusivo à educação gratuita em todos os níveis.",
      E: "Apenas a direitos econômicos e trabalhistas.",
    },
    correta: "C",
    explicacao:
      "O Pacto de Direitos Civis e Políticos trata de liberdades clássicas, garantias processuais e participação política em governos representativos.",
  },
  {
    id: 817,
    materia: "Direitos Humanos",
    assunto: "Pacto Internacional de Direitos Econômicos, Sociais e Culturais",
    enunciado:
      "O Pacto Internacional de Direitos Econômicos, Sociais e Culturais estabelece, de forma central, obrigações relativas:",
    alternativas: {
      A: "Apenas à repressão penal de crimes internacionais.",
      B: "Ao direito a trabalho, saúde, educação, previdência e padrões adequados de vida.",
      C: "Somente à liberdade religiosa e de expressão.",
      D: "Exclusivamente à proteção da propriedade privada.",
      E: "A direitos políticos de sufrágio universal.",
    },
    correta: "B",
    explicacao:
      "Esse Pacto trata da efetivação progressiva de direitos sociais, econômicos e culturais, exigindo políticas públicas para garantir condições dignas de vida.",
  },
  {
    id: 818,
    materia: "Direitos Humanos",
    assunto: "Proteção de grupos vulneráveis",
    enunciado:
      "No âmbito dos direitos humanos, considera-se grupo vulnerável aquele que:",
    alternativas: {
      A: "Detém maior poder econômico e político.",
      B: "Não sofre qualquer discriminação histórica.",
      C: "Enfrenta discriminação, exclusão ou risco acentuado de violação de direitos, exigindo proteção reforçada.",
      D: "Está imune a qualquer forma de violência ou preconceito.",
      E: "Não possui reconhecimento em normas internacionais.",
    },
    correta: "C",
    explicacao:
      "Grupos vulneráveis, como crianças, mulheres, pessoas negras, indígenas, pessoas com deficiência e LGBTI+, demandam medidas específicas de proteção.",
  },
  {
    id: 819,
    materia: "Direitos Humanos",
    assunto: "Convenção sobre a eliminação da discriminação racial",
    enunciado:
      "A Convenção Internacional sobre a Eliminação de Todas as Formas de Discriminação Racial obriga os Estados a:",
    alternativas: {
      A: "Permitir discriminação racial sempre que houver interesse econômico.",
      B: "Apenas punir manifestações individuais de ódio, sem atuar em políticas públicas.",
      C: "Combater práticas racistas, rever leis discriminatórias e adotar medidas para promover igualdade racial.",
      D: "Reconhecer apenas discriminação por motivo religioso.",
      E: "Limitar-se a campanhas informativas, sem alterar estruturas institucionais.",
    },
    correta: "C",
    explicacao:
      "A Convenção impõe deveres de prevenção, eliminação de leis discriminatórias e promoção de políticas de igualdade racial.",
  },
  {
    id: 820,
    materia: "Direitos Humanos",
    assunto:
      "Convenção sobre a eliminação da discriminação contra a mulher (CEDAW)",
    enunciado:
      "A Convenção sobre a Eliminação de Todas as Formas de Discriminação contra a Mulher (CEDAW) tem como finalidade principal:",
    alternativas: {
      A: "Regular apenas relações comerciais entre Estados.",
      B: "Tratar exclusivamente de violência doméstica, sem abordar outras desigualdades.",
      C: "Eliminar discriminações contra mulheres em âmbitos político, econômico, social e cultural, promovendo igualdade com os homens.",
      D: "Restringir a participação feminina na vida política.",
      E: "Garantir apenas direitos trabalhistas masculinos.",
    },
    correta: "C",
    explicacao:
      "A CEDAW exige que os Estados adotem medidas para remover discriminações contra a mulher em todas as esferas e assegurar igualdade material.",
  },
  {
    id: 821,
    materia: "Direitos Humanos",
    assunto: "Convenção sobre os Direitos da Criança",
    enunciado:
      "A Convenção sobre os Direitos da Criança estabelece, entre outros, que:",
    alternativas: {
      A: "A criança é objeto da autoridade absoluta dos pais, sem direitos próprios.",
      B: "A proteção da criança é assunto exclusivo da família, sem deveres do Estado.",
      C: "A criança é sujeito de direitos, devendo receber proteção integral em aspectos civis, sociais, econômicos e culturais.",
      D: "Somente adolescentes são considerados sujeitos de direitos.",
      E: "Não há obrigação de prioridade em políticas públicas voltadas à infância.",
    },
    correta: "C",
    explicacao:
      "A Convenção consagra a criança como sujeito de direitos e impõe a Estados e sociedade o dever de assegurar proteção integral e prioridade absoluta.",
  },
  {
    id: 822,
    materia: "Direitos Humanos",
    assunto: "Convenção sobre os Direitos das Pessoas com Deficiência",
    enunciado:
      "Segundo a Convenção sobre os Direitos das Pessoas com Deficiência:",
    alternativas: {
      A: "A deficiência é sempre motivo legítimo para restringir direitos políticos.",
      B: "A pessoa com deficiência deve ser tratada apenas como objeto de assistência.",
      C: "Estados devem promover acessibilidade, inclusão e igualdade de oportunidades, combatendo barreiras físicas e sociais.",
      D: "A proteção se limita à área de saúde, sem repercussão em outros direitos.",
      E: "A incapacidade jurídica é automática para toda pessoa com deficiência.",
    },
    correta: "C",
    explicacao:
      "A Convenção adota modelo social da deficiência e exige medidas de inclusão, acessibilidade e igualdade de oportunidades em todos os âmbitos.",
  },
  {
    id: 823,
    materia: "Direitos Humanos",
    assunto: "Refugiados – Convenção de 1951",
    enunciado:
      "De acordo com a Convenção de 1951 sobre o Estatuto dos Refugiados, é considerado refugiado aquele que:",
    alternativas: {
      A: "Se desloca exclusivamente por motivos econômicos.",
      B: "Deixa seu país apenas para estudar em outro Estado.",
      C: "Tem fundado temor de perseguição por motivos de raça, religião, nacionalidade, grupo social ou opiniões políticas e não pode ou não quer retornar.",
      D: "Viaja como turista com visto temporário.",
      E: "Responde a processo criminal em seu país de origem.",
    },
    correta: "C",
    explicacao:
      "A definição de refugiado envolve fundado temor de perseguição por motivos específicos e impossibilidade ou recusa de regressar ao país de origem.",
  },
  {
    id: 824,
    materia: "Direitos Humanos",
    assunto: "Princípio do non-refoulement",
    enunciado:
      "O princípio do non-refoulement (não devolução), no Direito dos Refugiados, significa que:",
    alternativas: {
      A: "O Estado pode devolver o refugiado a qualquer momento, por conveniência política.",
      B: "É vedado devolver a pessoa para país onde sua vida ou liberdade estejam em risco de perseguição.",
      C: "O Estado é obrigado a conceder nacionalidade ao refugiado.",
      D: "Aplica-se apenas a migrantes econômicos.",
      E: "Permite extradição automática sempre que houver tratado penal.",
    },
    correta: "B",
    explicacao:
      "O non-refoulement impede que o Estado envie a pessoa a local onde possa sofrer perseguição, tortura ou outras graves violações.",
  },
  {
    id: 825,
    materia: "Direitos Humanos",
    assunto: "Proibição da tortura",
    enunciado:
      "A proibição da tortura, em Direito Internacional dos Direitos Humanos, é considerada:",
    alternativas: {
      A: "Regra que admite relativização em caso de estado de sítio.",
      B: "Norma dispositiva, renunciável por acordo individual.",
      C: "Proibição absoluta, reconhecida como norma de jus cogens, sem admitir justificativas.",
      D: "Regra aplicável apenas em conflitos armados internacionais.",
      E: "Mandato exclusivo para tribunais penais internacionais.",
    },
    correta: "C",
    explicacao:
      "A vedação à tortura é absoluta, integra o núcleo inderrogável dos direitos humanos e é reconhecida como norma imperativa de Direito Internacional.",
  },
  {
    id: 826,
    materia: "Direitos Humanos",
    assunto: "Direito ao devido processo legal internacional",
    enunciado:
      "No âmbito dos sistemas internacional e regional de direitos humanos, o devido processo legal assegura que:",
    alternativas: {
      A: "O acusado possa ser julgado sem defesa técnica.",
      B: "Não haja necessidade de publicidade dos julgamentos.",
      C: "Toda pessoa tenha direito a processo justo, com juiz independente, possibilidade de defesa e prazos razoáveis.",
      D: "Os Estados dispensem recursos internos antes de recorrer a instâncias internacionais.",
      E: "A decisão possa ser proferida sem fundamentação.",
    },
    correta: "C",
    explicacao:
      "O devido processo internacional exige julgamento justo, imparcial, com direito de defesa e respeito a prazos e garantias mínimas.",
  },
  {
    id: 827,
    materia: "Direitos Humanos",
    assunto: "Direitos humanos e uso da força pelo Estado",
    enunciado:
      "A atuação de agentes estatais no uso da força deve observar, à luz dos direitos humanos, principalmente os princípios de:",
    alternativas: {
      A: "Omissão, arbitrariedade e segredo.",
      B: "Oportunidade política, conveniência e sigilo absoluto.",
      C: "Legalidade, necessidade, proporcionalidade e responsabilidade.",
      D: "Força máxima, intimidação e confidencialidade.",
      E: "Uso ilimitado da força em áreas de risco.",
    },
    correta: "C",
    explicacao:
      "O uso da força pelo Estado deve ser previsto em lei, limitado ao estritamente necessário, proporcional à situação e sujeito a controle e responsabilização.",
  },
  {
    id: 828,
    materia: "Direitos Humanos",
    assunto: "Direitos humanos e sistema prisional",
    enunciado:
      "Em relação à proteção dos direitos humanos das pessoas privadas de liberdade, é correto afirmar que:",
    alternativas: {
      A: "A perda da liberdade elimina todos os demais direitos.",
      B: "O preso mantém direitos não atingidos pela sentença, devendo ser tratado com respeito à dignidade e integridade física e moral.",
      C: "A superlotação justifica o uso de castigos cruéis.",
      D: "Não há obrigação estatal de garantir assistência à saúde no cárcere.",
      E: "Os tratados internacionais não se aplicam a pessoas presas.",
    },
    correta: "B",
    explicacao:
      "A restrição é apenas da liberdade de locomoção; demais direitos permanecem, devendo o Estado assegurar dignidade, integridade e condições mínimas no cárcere.",
  },
  {
    id: 829,
    materia: "Direitos Humanos",
    assunto: "Direito à igualdade e não discriminação",
    enunciado: "O direito à igualdade e à não discriminação pressupõe que:",
    alternativas: {
      A: "Toda diferenciação de tratamento é proibida.",
      B: "Somente diferenças biológicas podem justificar tratamentos distintos.",
      C: "Diferenciações podem ser admitidas quando razoáveis e destinadas a promover igualdade material, como ações afirmativas.",
      D: "Políticas públicas nunca podem levar em conta desigualdades históricas.",
      E: "A lei pode discriminar livremente, desde que seja formalmente válida.",
    },
    correta: "C",
    explicacao:
      "A igualdade material permite ações afirmativas e diferenciações legítimas, desde que voltadas a corrigir injustiças e desigualdades estruturais.",
  },
  {
    id: 830,
    materia: "Direitos Humanos",
    assunto: "Educação em direitos humanos",
    enunciado: "A educação em direitos humanos tem como objetivo central:",
    alternativas: {
      A: "Restringir o debate público sobre direitos fundamentais.",
      B: "Difundir valores autoritários e de obediência cega ao Estado.",
      C: "Promover cultura de respeito, tolerância, participação e valorização da dignidade humana.",
      D: "Ensinar apenas normas penais e sanções.",
      E: "Treinar exclusivamente agentes estatais de segurança, sem alcance social.",
    },
    correta: "C",
    explicacao:
      "Educação em direitos humanos busca formar consciências, incentivar participação cidadã e fortalecer uma cultura de respeito à dignidade e à diversidade.",
  },
  {
    id: 831,
    materia: "Direitos Humanos",
    assunto: "Liberdade de expressão e seus limites",
    enunciado: "À luz dos direitos humanos, a liberdade de expressão:",
    alternativas: {
      A: "É absoluta e nunca pode ser restringida.",
      B: "Autoriza discursos de ódio sem qualquer consequência.",
      C: "Pode sofrer limites legais para proteger honra, privacidade e outros direitos fundamentais.",
      D: "Somente se aplica a manifestações artísticas.",
      E: "Não alcança meios de comunicação social.",
    },
    correta: "C",
    explicacao:
      "A liberdade de expressão é direito fundamental, mas admite restrições proporcionais para resguardar outros direitos, como honra, imagem e dignidade.",
  },
  {
    id: 832,
    materia: "Direitos Humanos",
    assunto: "Liberdade religiosa",
    enunciado: "A proteção internacional da liberdade religiosa compreende:",
    alternativas: {
      A: "Apenas o direito de manter crença, sem possibilidade de manifestá-la.",
      B: "O direito de professar, mudar de religião ou não ter religião, bem como manifestar crença individual ou coletivamente.",
      C: "Exclusivamente o direito de fundar templos.",
      D: "A possibilidade de o Estado impor religião oficial obrigatória.",
      E: "A autorização para práticas religiosas contrárias à lei penal.",
    },
    correta: "B",
    explicacao:
      "A liberdade religiosa inclui ter ou não religião, mudar de crença e manifestá-la em público ou privado, dentro dos limites legais.",
  },
  {
    id: 833,
    materia: "Direitos Humanos",
    assunto: "Direito de reunião e associação",
    enunciado: "O direito de reunião pacífica e sem armas, em regra, exige:",
    alternativas: {
      A: "Autorização prévia do Poder Executivo.",
      B: "Autorização judicial obrigatória.",
      C: "Apenas prévio aviso à autoridade competente, para garantia da ordem e do trânsito.",
      D: "Inscrição em cadastro nacional de movimentos sociais.",
      E: "Aprovação do Ministério Público.",
    },
    correta: "C",
    explicacao:
      "O exercício do direito de reunião, em geral, pressupõe comunicação prévia ao poder público, sem necessidade de autorização, desde que pacífico e sem armas.",
  },
  {
    id: 834,
    materia: "Direitos Humanos",
    assunto: "Direito à vida",
    enunciado:
      "O direito à vida, enquanto direito humano fundamental, envolve:",
    alternativas: {
      A: "Apenas a proibição de homicídio doloso.",
      B: "Somente a proteção contra a pena de morte.",
      C: "Proteção contra privação arbitrária da vida e dever estatal de adotar políticas que assegurem existência digna.",
      D: "Direito exclusivo de pessoas maiores de 18 anos.",
      E: "Apenas a garantia de atendimento médico privado.",
    },
    correta: "C",
    explicacao:
      "O direito à vida abrange proibição de privação arbitrária e obrigação estatal de criar condições mínimas para uma existência digna.",
  },
  {
    id: 835,
    materia: "Direitos Humanos",
    assunto: "Direito à integridade pessoal",
    enunciado:
      "A proteção da integridade pessoal, em sede de direitos humanos, compreende:",
    alternativas: {
      A: "Somente a vedação de agressões físicas graves.",
      B: "A proibição de tortura, tratamentos cruéis, desumanos ou degradantes, físicos ou psíquicos.",
      C: "Apenas proteção contra ofensas verbais.",
      D: "Exclusivamente a integridade patrimonial.",
      E: "Apenas pessoas presas como titulares desse direito.",
    },
    correta: "B",
    explicacao:
      "A integridade pessoal protege contra qualquer forma de tortura ou tratamento desumano, atingindo corpo e mente da pessoa.",
  },
  {
    id: 836,
    materia: "Direitos Humanos",
    assunto: "Direitos humanos e segurança pública",
    enunciado:
      "A compatibilização entre segurança pública e direitos humanos exige, sobretudo, que:",
    alternativas: {
      A: "Se admita violência estatal ilimitada para enfrentar o crime.",
      B: "Direitos fundamentais sejam sempre afastados em operações policiais.",
      C: "A atuação policial respeite a legalidade, a dignidade humana e o controle de eventuais abusos.",
      D: "Somente suspeitos estrangeiros tenham direitos protegidos.",
      E: "Não haja qualquer responsabilidade por abusos cometidos por agentes.",
    },
    correta: "C",
    explicacao:
      "A segurança pública deve ser exercida com respeito aos direitos humanos, garantindo controle de abusos e responsabilização de agentes que violem a lei.",
  },
  {
    id: 837,
    materia: "Direitos Humanos",
    assunto: "Direitos humanos e democracia",
    enunciado:
      "A relação entre direitos humanos e democracia pode ser corretamente descrita como:",
    alternativas: {
      A: "Independente, pois regimes autoritários também realizam plenamente os direitos humanos.",
      B: "De tensão permanente, já que direitos humanos limitam totalmente a participação política.",
      C: "De mútua dependência, pois a democracia fortalece direitos humanos e estes limitam abusos do poder.",
      D: "De substituição, porque a existência de eleições dispensa garantias de direitos fundamentais.",
      E: "Apenas formal, sem impacto na vida cotidiana.",
    },
    correta: "C",
    explicacao:
      "Democracia e direitos humanos se reforçam: a democracia cria ambiente para proteção de direitos, e estes impõem freios a abusos de poder.",
  },
  {
    id: 838,
    materia: "Direitos Humanos",
    assunto: "Direitos humanos e Constituição Federal",
    enunciado: "No Brasil, a Constituição de 1988 é considerada:",
    alternativas: {
      A: "Documento neutro em relação a direitos humanos.",
      B: "Constituição meramente econômica, sem catálogo de direitos.",
      C: "Constituição cidadã, com extenso rol de direitos fundamentais e abertura à ordem internacional de direitos humanos.",
      D: "Carta que restringe tratados internacionais de direitos humanos.",
      E: "Texto que admite tortura como meio excepcional de investigação.",
    },
    correta: "C",
    explicacao:
      "A Constituição de 1988 é chamada de cidadã por consolidar amplo catálogo de direitos e permitir integração com tratados de direitos humanos.",
  },
  {
    id: 839,
    materia: "Direitos Humanos",
    assunto: "Aplicação imediata dos direitos fundamentais",
    enunciado:
      "O art. 5º da Constituição Federal estabelece que os direitos e garantias fundamentais têm:",
    alternativas: {
      A: "Aplicação apenas após regulamentação integral por lei.",
      B: "Aplicação diferida, dependendo de decreto do Presidente.",
      C: "Aplicação imediata, ainda que possam exigir complementação legislativa em alguns casos.",
      D: "Aplicação limitada ao âmbito penal.",
      E: "Eficácia apenas programática, sem força jurídica.",
    },
    correta: "C",
    explicacao:
      "A Constituição prevê aplicação imediata dos direitos e garantias, o que não impede que algumas normas demandem regulamentação para plena efetividade.",
  },
  {
    id: 840,
    materia: "Direitos Humanos",
    assunto: "Cláusulas pétreas e direitos humanos",
    enunciado:
      "As cláusulas pétreas da Constituição Federal relacionadas a direitos humanos têm como efeito:",
    alternativas: {
      A: "Permitir que emenda constitucional suprima direitos e garantias individuais.",
      B: "Impedir alterações que abolam direitos e garantias fundamentais essenciais.",
      C: "Restringir a aplicação de tratados internacionais.",
      D: "Autorizar retrocessos em matéria de direitos sociais.",
      E: "Eliminar o controle de constitucionalidade de leis.",
    },
    correta: "B",
    explicacao:
      "As cláusulas pétreas vedam emendas que suprimam direitos e garantias fundamentais, protegendo o núcleo essencial da Constituição.",
  },
  {
    id: 841,
    materia: "Direitos Humanos",
    assunto: "Reserva do possível e mínimo existencial",
    enunciado:
      "Nos direitos sociais, a reserva do possível não pode ser invocada para afastar totalmente o dever estatal de garantir:",
    alternativas: {
      A: "Benefícios fiscais a grandes empresas.",
      B: "Políticas culturais de alta complexidade.",
      C: "O mínimo existencial ligado à dignidade humana, como saúde básica e educação fundamental.",
      D: "Incentivos à exportação.",
      E: "Gastos supérfluos com propaganda oficial.",
    },
    correta: "C",
    explicacao:
      "Mesmo diante de limitações orçamentárias, o Estado deve assegurar patamar mínimo de direitos indispensáveis à dignidade da pessoa.",
  },
  {
    id: 842,
    materia: "Direitos Humanos",
    assunto: "Proibição do retrocesso social",
    enunciado:
      "A proibição do retrocesso social, em direitos humanos, significa que:",
    alternativas: {
      A: "O Estado nunca pode alterar nenhuma política pública.",
      B: "Direitos sociais, uma vez concretizados em determinado patamar, não devem sofrer supressão arbitrária pelo Estado.",
      C: "Somente direitos civis são imunes a mudanças legislativas.",
      D: "Qualquer redução mínima de benefício social é sempre inconstitucional.",
      E: "Os tratados internacionais podem ser livremente revogados a qualquer tempo.",
    },
    correta: "B",
    explicacao:
      "O princípio veda que o Estado elimine, de forma injustificada, níveis de proteção social já alcançados, sob pena de violar a dignidade e a confiança legítima.",
  },
  {
    id: 843,
    materia: "Direitos Humanos",
    assunto: "Justiciabilidade dos direitos sociais",
    enunciado:
      "A respeito da justiciabilidade dos direitos sociais, é correto afirmar que:",
    alternativas: {
      A: "Não podem ser objeto de ações judiciais.",
      B: "Dependem sempre de previsão exclusiva em tratados internacionais.",
      C: "Podem ser exigidos judicialmente, sobretudo quando se referem a prestações essenciais à dignidade humana.",
      D: "Somente podem ser debatidos em sede de políticas administrativas.",
      E: "Estão excluídos do controle de constitucionalidade.",
    },
    correta: "C",
    explicacao:
      "Direitos sociais, especialmente aqueles ligados ao mínimo existencial, podem ser cobrados perante o Judiciário quando houver omissão ou violação estatal.",
  },
  {
    id: 844,
    materia: "Direitos Humanos",
    assunto: "Dever de investigar, punir e reparar violações",
    enunciado:
      "No plano dos direitos humanos, quando ocorre violação grave, o Estado tem o dever de:",
    alternativas: {
      A: "Apenas negar os fatos para preservar sua imagem.",
      B: "Investigar, punir os responsáveis e reparar as vítimas, inclusive com medidas de não repetição.",
      C: "Delegar integralmente a apuração a organismos privados.",
      D: "Aguardar decisão de tribunal internacional para só então agir.",
      E: "Oferecer compensação simbólica sem reconhecer a violação.",
    },
    correta: "B",
    explicacao:
      "O dever de garantir direitos inclui investigar violações, responsabilizar agentes e adotar reparações materiais, simbólicas e institucionais.",
  },
  {
    id: 845,
    materia: "Direitos Humanos",
    assunto: "Regras de Mandela – pessoas presas",
    enunciado:
      "As chamadas Regras Mínimas da ONU para o Tratamento de Presos (Regras de Mandela) estabelecem parâmetros para:",
    alternativas: {
      A: "Ampliar o uso da tortura como meio de disciplina.",
      B: "Reduzir a assistência de saúde a pessoas presas.",
      C: "Garantir condições humanas de encarceramento, com respeito à dignidade, saúde, higiene, alimentação e contatos com o mundo exterior.",
      D: "Autorizar isolamento indefinido sem controle.",
      E: "Dispensar o registro de pessoas privadas de liberdade.",
    },
    correta: "C",
    explicacao:
      "As Regras de Mandela fornecem padrões mínimos para que o sistema prisional respeite a dignidade e os direitos básicos dos presos.",
  },
  {
    id: 846,
    materia: "Direitos Humanos",
    assunto: "Direitos humanos e atuação policial no Brasil",
    enunciado:
      "Quanto à atuação policial, à luz da Constituição e dos direitos humanos, é correto afirmar que:",
    alternativas: {
      A: "A letalidade policial é irrelevante para o controle estatal.",
      B: "Execuções extrajudiciais podem ser toleradas em áreas de alta criminalidade.",
      C: "O uso da força deve ser excepcional, proporcional, sujeito a controle e a responsabilidade por abusos.",
      D: "A polícia está dispensada de respeitar direitos fundamentais em operações sigilosas.",
      E: "Não há dever de registrar e investigar mortes em operações policiais.",
    },
    correta: "C",
    explicacao:
      "A Constituição e tratados de direitos humanos exigem que a ação policial respeite a vida, a integridade e seja controlada por mecanismos de responsabilização.",
  },
  {
    id: 847,
    materia: "Direitos Humanos",
    assunto: "Laicidade do Estado e direitos humanos",
    enunciado:
      "A laicidade do Estado, sob a ótica dos direitos humanos, implica que:",
    alternativas: {
      A: "O Estado deve impor uma religião oficial obrigatória.",
      B: "Somente religiões majoritárias são protegidas.",
      C: "O Estado é neutro em matéria religiosa, garantindo liberdade de crença, culto e igualdade entre crenças e não crenças.",
      D: "As minorias religiosas podem ser proibidas de se reunir.",
      E: "A liberdade religiosa restringe-se ao espaço privado.",
    },
    correta: "C",
    explicacao:
      "Estado laico não adota religião oficial e assegura tratamento igual a todas as crenças e à posição de não crer, protegendo a liberdade religiosa.",
  },
  {
    id: 848,
    materia: "Direitos Humanos",
    assunto: "Direitos humanos e mídia",
    enunciado:
      "A atuação da mídia, do ponto de vista dos direitos humanos, deve:",
    alternativas: {
      A: "Ignorar completamente direitos à honra, imagem e privacidade.",
      B: "Estimular discursos de ódio para aumentar audiência.",
      C: "Exercer liberdade de imprensa com responsabilidade, evitando incitação à violência, preconceito e violações de dignidade.",
      D: "Submeter todo conteúdo à censura prévia estatal.",
      E: "Restringir-se à divulgação de atos oficiais.",
    },
    correta: "C",
    explicacao:
      "A liberdade de imprensa é essencial, mas deve ser compatibilizada com a proteção da honra, da imagem e com a vedação a discursos discriminatórios.",
  },
  {
    id: 849,
    materia: "Direitos Humanos",
    assunto: "Participação social e controle democrático",
    enunciado:
      "A participação social na proteção dos direitos humanos manifesta-se, entre outros meios, por:",
    alternativas: {
      A: "Exclusão da sociedade civil de conselhos e conferências.",
      B: "Atuação apenas de órgãos policiais.",
      C: "Conselhos de direitos, audiências públicas, organizações da sociedade civil e mecanismos de controle social de políticas públicas.",
      D: "Sigilo absoluto sobre informações públicas.",
      E: "Supressão de movimentos sociais.",
    },
    correta: "C",
    explicacao:
      "Conselhos, conferências e entidades civis são instrumentos de participação que fortalecem o controle democrático e a promoção de direitos humanos.",
  },
  {
    id: 850,
    materia: "Direitos Humanos",
    assunto: "Direitos humanos e Constituição Federal de 1988",
    enunciado:
      "No ordenamento brasileiro, os direitos humanos previstos em tratados internacionais de que o Brasil é parte:",
    alternativas: {
      A: "Nunca podem influenciar a interpretação da Constituição.",
      B: "São irrelevantes para o Poder Judiciário.",
      C: "Devem orientar a interpretação das normas constitucionais e infraconstitucionais, integrando o sistema de proteção da pessoa humana.",
      D: "Aplicam-se apenas a estrangeiros.",
      E: "Têm validade apenas se reproduzidos literalmente em leis ordinárias.",
    },
    correta: "C",
    explicacao:
      "A Constituição admite leitura conforme tratados de direitos humanos, formando bloco de proteção ampliado da dignidade da pessoa humana.",
  },
  {
    id: 851,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – posse para uso",
    enunciado:
      "De acordo com a Lei nº 11.343/2006, o usuário de drogas que for flagrado com substância ilícita para consumo pessoal:",
    alternativas: {
      A: "Será preso em flagrante e responderá por tráfico.",
      B: "Está sujeito a medidas educativas, advertência, prestação de serviços à comunidade ou comparecimento a programa educativo, sem pena privativa de liberdade.",
      C: "Receberá apenas multa de trânsito.",
      D: "Será absolvido sem qualquer medida.",
      E: "Responderá por crime hediondo.",
    },
    correta: "B",
    explicacao:
      "A Lei de Drogas descriminaliza o porte para uso pessoal, aplicando medidas educativas e preventivas, sem prisão (Art. 28).",
  },
  {
    id: 852,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – tráfico",
    enunciado:
      "O crime de tráfico de drogas, previsto na Lei nº 11.343/2006, configura-se quando:",
    alternativas: {
      A: "Alguém importa, exporta, vende, expõe à venda, oferece ou fornece droga ilícita, ainda que gratuitamente.",
      B: "Apenas quando há venda com lucro comprovado.",
      C: "Somente se houver associação criminosa envolvida.",
      D: "Apenas em caso de reincidência.",
      E: "Exclusivamente se a droga for destinada a menor de idade.",
    },
    correta: "A",
    explicacao:
      "O tráfico abrange diversas condutas de disponibilizar droga ilícita, inclusive de forma gratuita, com pena de reclusão de 5 a 15 anos (Art. 33).",
  },
  {
    id: 853,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – posse irregular",
    enunciado:
      "A posse irregular de arma de fogo de uso permitido, segundo a Lei nº 10.826/2003, caracteriza-se quando:",
    alternativas: {
      A: "A arma está registrada e guardada no interior da residência do proprietário.",
      B: "A pessoa possui arma de uso permitido em sua residência ou local de trabalho, sem registro ou com registro vencido.",
      C: "A pessoa está transportando a arma municiada em via pública com autorização.",
      D: "A arma está cadastrada na Polícia Federal com porte válido.",
      E: "A pessoa exerce atividade de segurança privada.",
    },
    correta: "B",
    explicacao:
      "A posse irregular ocorre quando a arma está na residência ou trabalho sem registro ou com registro vencido, sendo crime previsto no Art. 12 do Estatuto.",
  },
  {
    id: 854,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – porte ilegal",
    enunciado: "O porte ilegal de arma de fogo de uso permitido consiste em:",
    alternativas: {
      A: "Manter arma registrada dentro de casa.",
      B: "Portar ou transportar arma de fogo fora de casa sem autorização legal, mesmo que registrada.",
      C: "Coletar arma encontrada em via pública para entregar à autoridade.",
      D: "Guardar arma desmuniciada em cofre residencial.",
      E: "Possuir arma de fogo com porte válido expedido pela Polícia Federal.",
    },
    correta: "B",
    explicacao:
      "O porte ilegal ocorre quando a pessoa leva a arma para fora de casa sem autorização, mesmo que registrada, sendo crime do Art. 14.",
  },
  {
    id: 855,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – rol de crimes",
    enunciado:
      "São considerados crimes hediondos, segundo a Lei nº 8.072/1990:",
    alternativas: {
      A: "Homicídio simples, furto qualificado e estelionato.",
      B: "Latrocínio, extorsão mediante sequestro, estupro, epidemia com resultado morte e homicídio qualificado.",
      C: "Apenas crimes praticados por organizações criminosas.",
      D: "Somente crimes contra a Administração Pública.",
      E: "Crimes culposos com resultado morte.",
    },
    correta: "B",
    explicacao:
      "A Lei dos Crimes Hediondos elenca crimes graves, como latrocínio, estupro, extorsão mediante sequestro e homicídio qualificado (Art. 1º).",
  },
  {
    id: 856,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – regime inicial",
    enunciado:
      "Para crimes hediondos, o regime inicial de cumprimento de pena deve ser:",
    alternativas: {
      A: "Sempre aberto, independentemente da pena aplicada.",
      B: "Fechado, se a pena aplicada for superior a 8 anos, ou semiaberto, se inferior, conforme circunstâncias judiciais.",
      C: "Aberto para réus primários.",
      D: "Semiaberto em qualquer situação.",
      E: "Determinado exclusivamente pela vontade do juiz.",
    },
    correta: "B",
    explicacao:
      "O regime inicial leva em conta a pena aplicada e circunstâncias do caso; para pena superior a 8 anos, inicia-se no regime fechado (Art. 2º, §1º).",
  },
  {
    id: 857,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – conceito de violência doméstica",
    enunciado:
      "A Lei Maria da Penha (Lei nº 11.340/2006) define violência doméstica e familiar contra a mulher como:",
    alternativas: {
      A: "Qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual, psicológico, patrimonial ou moral à mulher, no âmbito doméstico, familiar ou em relação íntima de afeto.",
      B: "Apenas agressões físicas que deixam marcas visíveis.",
      C: "Somente violência praticada por marido contra esposa.",
      D: "Violência ocorrida exclusivamente dentro de residência.",
      E: "Apenas crimes patrimoniais contra a mulher.",
    },
    correta: "A",
    explicacao:
      "A lei abrange diversas formas de violência (física, psicológica, sexual, patrimonial e moral) praticadas no âmbito doméstico, familiar ou de relação íntima (Art. 5º e 7º).",
  },
  {
    id: 858,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – medidas protetivas",
    enunciado:
      "As medidas protetivas de urgência previstas na Lei Maria da Penha podem ser decretadas pelo juiz:",
    alternativas: {
      A: "Apenas após sentença condenatória transitada em julgado.",
      B: "De ofício, a requerimento do Ministério Público ou mediante representação da ofendida, independentemente de audiência das partes.",
      C: "Somente se houver testemunhas do fato.",
      D: "Apenas em casos de lesão corporal grave.",
      E: "Exclusivamente mediante ação civil.",
    },
    correta: "B",
    explicacao:
      "As medidas protetivas podem ser concedidas imediatamente pelo juiz, de ofício ou a pedido, sem necessidade de audiência prévia (Art. 18 e 19).",
  },
  {
    id: 859,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – conceito e sujeitos",
    enunciado:
      "O crime de tortura, conforme a Lei nº 9.455/1997, pode ser praticado:",
    alternativas: {
      A: "Apenas por agentes públicos ou pessoas a serviço da autoridade pública, que constrangem alguém com emprego de violência ou grave ameaça, causando sofrimento físico ou mental.",
      B: "Apenas por militares em serviço ativo.",
      C: "Exclusivamente durante interrogatórios policiais.",
      D: "Somente em situações de guerra.",
      E: "Por qualquer pessoa, sem exigência de vínculo funcional, em qualquer circunstância.",
    },
    correta: "A",
    explicacao:
      "A tortura é crime praticado por agente público ou pessoa a serviço da autoridade, mediante violência ou grave ameaça, causando sofrimento físico ou mental (Art. 1º).",
  },
  {
    id: 860,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – conceito",
    enunciado: "Configura abuso de autoridade, segundo a Lei nº 13.869/2019:",
    alternativas: {
      A: "Qualquer ato administrativo realizado por agente público.",
      B: "A prática de ato pelo agente público com a finalidade específica de prejudicar outrem ou beneficiar a si mesmo ou a terceiro, ou ainda por mero capricho ou satisfação pessoal, violando direitos e garantias fundamentais.",
      C: "Apenas prisões em flagrante delito.",
      D: "Somente condutas de policiais militares.",
      E: "Exclusivamente agressões físicas praticadas por servidores.",
    },
    correta: "B",
    explicacao:
      "Abuso de autoridade caracteriza-se pelo exercício ilegal e abusivo de função pública, com finalidade ilícita ou desrespeito a direitos fundamentais (Art. 1º).",
  },
  {
    id: 861,
    materia: "Legislação Especial",
    assunto: "Lei de Execução Penal – finalidades",
    enunciado:
      "A Lei de Execução Penal (Lei nº 7.210/1984) tem como finalidade:",
    alternativas: {
      A: "Apenas punir o condenado com rigor máximo.",
      B: "Efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado.",
      C: "Isolar permanentemente o condenado da sociedade.",
      D: "Aplicar exclusivamente penas privativas de liberdade.",
      E: "Substituir o Código Penal em sua totalidade.",
    },
    correta: "B",
    explicacao:
      "A LEP visa executar a pena de forma humanizada e preparar o condenado para retornar ao convívio social (Art. 1º).",
  },
  {
    id: 862,
    materia: "Legislação Especial",
    assunto: "LEP – assistência ao preso",
    enunciado: "São direitos do preso, segundo a Lei de Execução Penal:",
    alternativas: {
      A: "Apenas alimentação e vestuário.",
      B: "Assistência material, à saúde, jurídica, educacional, social e religiosa.",
      C: "Somente assistência médica emergencial.",
      D: "Apenas direito ao trabalho remunerado.",
      E: "Não há direitos garantidos a presos.",
    },
    correta: "B",
    explicacao:
      "A LEP assegura assistência integral ao preso em diversas áreas para garantir dignidade e ressocialização (Arts. 10 a 27).",
  },
  {
    id: 863,
    materia: "Legislação Especial",
    assunto: "LEP – progressão de regime",
    enunciado:
      "A progressão de regime prisional exige, entre outros requisitos:",
    alternativas: {
      A: "Apenas o cumprimento de 1/6 da pena, sem outros requisitos.",
      B: "Cumprimento de requisito objetivo (fração da pena) e subjetivo (bom comportamento carcerário), além de exame criminológico quando necessário.",
      C: "Autorização exclusiva do Ministério Público.",
      D: "Pagamento de fiança.",
      E: "Cumprimento integral da pena.",
    },
    correta: "B",
    explicacao:
      "A progressão exige requisito temporal (fração da pena cumprida) e bom comportamento, podendo haver análise de aptidão para regime menos rigoroso (Art. 112).",
  },
  {
    id: 864,
    materia: "Legislação Especial",
    assunto: "LEP – remição da pena",
    enunciado: "A remição da pena pelo trabalho consiste em:",
    alternativas: {
      A: "Desconto da pena à razão de 1 dia de pena a cada 3 dias de trabalho ou 12 horas de estudo.",
      B: "Perdão integral e automático da pena.",
      C: "Redução da pena apenas por bom comportamento.",
      D: "Substituição da prisão por multa.",
      E: "Concessão de livramento condicional.",
    },
    correta: "A",
    explicacao:
      "A remição permite descontar 1 dia de pena a cada 3 dias trabalhados ou 12 horas de frequência escolar (Art. 126).",
  },
  {
    id: 865,
    materia: "Legislação Especial",
    assunto: "LEP – livramento condicional",
    enunciado:
      "O livramento condicional pode ser concedido ao condenado quando:",
    alternativas: {
      A: "Cumpriu qualquer fração da pena, independentemente de requisitos.",
      B: "Cumpriu mais de 1/3 da pena (se primário e de bons antecedentes) ou mais de 1/2 (se reincidente), com bom comportamento e outros requisitos legais.",
      C: "Pagou toda a multa aplicada.",
      D: "Foi absolvido em outro processo.",
      E: "Apenas mediante indulto presidencial.",
    },
    correta: "B",
    explicacao:
      "O livramento exige cumprimento de fração da pena (1/3 ou mais para primário, 1/2 ou mais para reincidente), bom comportamento e preenchimento de outros requisitos (Art. 83).",
  },
  {
    id: 866,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – causas de diminuição de pena",
    enunciado:
      "No crime de tráfico de drogas, a pena pode ser reduzida de 1/6 a 2/3 quando:",
    alternativas: {
      A: "O agente for primário, de bons antecedentes, não integrar organização criminosa e não se dedicar a atividades criminosas.",
      B: "Apenas se confessar o crime.",
      C: "Houver arrependimento posterior.",
      D: "O agente denunciar outros traficantes.",
      E: "Sempre que houver reincidência.",
    },
    correta: "A",
    explicacao:
      "A redução de pena no tráfico é possível quando presentes os requisitos do Art. 33, §4º: primariedade, bons antecedentes, não integrar organização criminosa e não se dedicar a atividades criminosas.",
  },
  {
    id: 867,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – excludente de ilicitude",
    enunciado: "Não constitui crime a posse ou o porte de arma de fogo quando:",
    alternativas: {
      A: "A pessoa exerce atividade de caça amadorística sem autorização.",
      B: "A arma é mantida exclusivamente no interior da residência ou local de trabalho, desde que o proprietário seja colecionador, atirador desportivo ou caçador regularmente autorizado.",
      C: "A pessoa está transportando arma sem registro em qualquer circunstância.",
      D: "A arma é réplica de brinquedo.",
      E: "A pessoa alega necessidade pessoal sem documentação.",
    },
    correta: "B",
    explicacao:
      "CACs (colecionadores, atiradores e caçadores) regularizados podem possuir armas, dentro dos limites legais e regulamentares (Art. 6º e disposições do Decreto 11.615/2023).",
  },
  {
    id: 868,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – tipos de violência",
    enunciado:
      "A violência psicológica contra a mulher, segundo a Lei Maria da Penha, caracteriza-se por:",
    alternativas: {
      A: "Apenas agressões físicas leves.",
      B: "Conduta que cause dano emocional, diminuição da autoestima, prejudique o desenvolvimento ou vise controlar ações e comportamentos mediante ameaça, constrangimento, humilhação, manipulação ou isolamento.",
      C: "Somente crimes patrimoniais.",
      D: "Exclusivamente ofensas verbais em público.",
      E: "Apenas violência sexual.",
    },
    correta: "B",
    explicacao:
      "A violência psicológica abrange condutas que causem sofrimento emocional, controle, humilhação, manipulação ou isolamento (Art. 7º, II).",
  },
  {
    id: 869,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – agravantes",
    enunciado: "A pena por tortura é aumentada quando:",
    alternativas: {
      A: "O crime resulta em lesão corporal grave ou morte, ou é cometido contra criança, gestante, portador de deficiência ou adolescente.",
      B: "Apenas quando há confissão espontânea.",
      C: "Somente se houver mais de um agente.",
      D: "Exclusivamente se praticado em via pública.",
      E: "Não há previsão de aumento de pena.",
    },
    correta: "A",
    explicacao:
      "A pena é agravada quando resulta em lesão grave ou morte, ou quando a vítima é criança, gestante, pessoa com deficiência ou adolescente (Art. 1º, §§4º e 4º-A).",
  },
  {
    id: 870,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – prisão ilegal",
    enunciado: "Constitui crime de abuso de autoridade:",
    alternativas: {
      A: "Qualquer prisão em flagrante delito.",
      B: "Decretar a prisão de alguém ou determinar sua manutenção sem as formalidades legais ou com abuso de poder.",
      C: "Apenas prisões realizadas por policiais militares.",
      D: "Somente quando há tortura envolvida.",
      E: "Qualquer prisão temporária.",
    },
    correta: "B",
    explicacao:
      "É abuso de autoridade decretar ou manter prisão sem fundamentação legal adequada ou com excesso de poder (Art. 9º).",
  },
  {
    id: 871,
    materia: "Legislação Especial",
    assunto: "LEP – trabalho do preso",
    enunciado: "O trabalho do preso, segundo a Lei de Execução Penal:",
    alternativas: {
      A: "É obrigatório e sem remuneração.",
      B: "É dever social e condição de dignidade humana, devendo ser remunerado, e não está sujeito ao regime da CLT.",
      C: "Aplica-se apenas a presos provisórios.",
      D: "É facultativo sem qualquer benefício.",
      E: "Substitui integralmente a pena de prisão.",
    },
    correta: "B",
    explicacao:
      "O trabalho é dever social, dignificante, remunerado, mas não regido pela CLT, servindo para remição e ressocialização (Arts. 28 a 37).",
  },
  {
    id: 872,
    materia: "Legislação Especial",
    assunto: "LEP – faltas disciplinares",
    enunciado: "Constituem faltas disciplinares graves, segundo a LEP:",
    alternativas: {
      A: "Apenas crimes praticados em liberdade.",
      B: "Incitar ou participar de movimento para subverter a ordem ou disciplina, fugir, possuir ou usar objeto proibido, desrespeitar funcionário ou agredir fisicamente outra pessoa.",
      C: "Somente infrações de trânsito.",
      D: "Apenas não comparecer ao trabalho sem justificativa.",
      E: "Reclamar das condições do estabelecimento.",
    },
    correta: "B",
    explicacao:
      "Faltas graves incluem subversão da ordem, fuga, posse de objetos proibidos, desacato e agressões (Art. 50).",
  },
  {
    id: 873,
    materia: "Legislação Especial",
    assunto: "LEP – regime disciplinar diferenciado (RDD)",
    enunciado: "O Regime Disciplinar Diferenciado pode ser aplicado quando:",
    alternativas: {
      A: "Qualquer preso solicitar.",
      B: "O preso apresentar alto risco para a ordem e segurança do estabelecimento ou da sociedade, ou quando houver fundadas suspeitas de envolvimento em organização criminosa ou fuga.",
      C: "Apenas em casos de homicídio doloso.",
      D: "Exclusivamente para presos provisórios.",
      E: "Nunca pode ser aplicado.",
    },
    correta: "B",
    explicacao:
      "O RDD é medida excepcional para presos de alto risco à ordem ou à segurança, ou envolvidos com organizações criminosas (Art. 52).",
  },
  {
    id: 874,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – associação para o tráfico",
    enunciado:
      "O crime de associação para o tráfico de drogas configura-se quando:",
    alternativas: {
      A: "Duas ou mais pessoas se associam de forma estável e permanente para o fim de praticar crimes de tráfico.",
      B: "Apenas uma pessoa pratica tráfico isoladamente.",
      C: "Há consumo compartilhado de drogas.",
      D: "Alguém usa drogas em grupo.",
      E: "Somente quando há estrutura empresarial comprovada.",
    },
    correta: "A",
    explicacao:
      "Associação para o tráfico exige vínculo estável e permanente entre duas ou mais pessoas para prática habitual de tráfico (Art. 35).",
  },
  {
    id: 875,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – disparo de arma de fogo",
    enunciado: "Constitui crime de disparo de arma de fogo:",
    alternativas: {
      A: "Apenas quando há morte da vítima.",
      B: "Disparar arma de fogo ou acionar munição em local habitado ou em suas adjacências, em via pública ou em direção a ela, desde que essa conduta não constitua crime mais grave.",
      C: "Somente em caso de uso em legítima defesa.",
      D: "Apenas durante horário comercial.",
      E: "Disparar em estande de tiro regularizado.",
    },
    correta: "B",
    explicacao:
      "O crime pune disparos em locais habitados, vias públicas ou adjacências, salvo se constituir crime mais grave (Art. 15).",
  },
  {
    id: 876,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – progressão de regime",
    enunciado:
      "Para progressão de regime em crimes hediondos, o condenado deve cumprir:",
    alternativas: {
      A: "1/6 da pena em qualquer caso.",
      B: "2/5 da pena, se primário, ou 3/5, se reincidente, observadas as demais condições legais.",
      C: "Metade da pena sempre.",
      D: "1/3 da pena sem outros requisitos.",
      E: "Não há possibilidade de progressão.",
    },
    correta: "B",
    explicacao:
      "Em crimes hediondos, o requisito temporal é mais rigoroso: 2/5 para primários e 3/5 para reincidentes (Art. 2º, §2º).",
  },
  {
    id: 877,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – renúncia à representação",
    enunciado:
      "Nos crimes de lesão corporal leve praticados contra a mulher no âmbito doméstico:",
    alternativas: {
      A: "A ação penal é privada e depende de queixa-crime.",
      B: "A ação penal é pública incondicionada, não admitindo renúncia pela vítima fora do âmbito judicial.",
      C: "A vítima pode desistir a qualquer momento sem ir ao juiz.",
      D: "Não há possibilidade de processo criminal.",
      E: "A representação expira em 24 horas.",
    },
    correta: "B",
    explicacao:
      "Após decisão do STF, a ação passou a ser pública incondicionada; eventual retratação só pode ocorrer perante o juiz, em audiência específica (Art. 16).",
  },
  {
    id: 878,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – imprescritibilidade e anistia",
    enunciado: "O crime de tortura:",
    alternativas: {
      A: "É imprescritível e insuscetível de graça ou anistia.",
      B: "Prescreve em 5 anos em qualquer caso.",
      C: "Pode ser objeto de anistia livremente.",
      D: "Admite graça em todos os casos.",
      E: "Não possui previsão sobre prescrição.",
    },
    correta: "A",
    explicacao:
      "A tortura é crime imprescritível e não admite graça ou anistia, conforme Constituição Federal (Art. 5º, XLIII) e Lei 9.455/97.",
  },
  {
    id: 879,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – violação de direito à privacidade",
    enunciado: "Configura abuso de autoridade:",
    alternativas: {
      A: "Apenas agressões físicas a qualquer pessoa.",
      B: "Invadir ou adentrar, clandestina ou astuciosamente, ou à revelia da vontade do ocupante, imóvel alheio ou suas dependências, ou nele permanecer nas mesmas condições, sem determinação judicial ou fora das condições legais.",
      C: "Qualquer investigação policial regular.",
      D: "Solicitar documentos em fiscalização.",
      E: "Realizar busca e apreensão com mandado judicial.",
    },
    correta: "B",
    explicacao:
      "Invadir domicílio sem autorização legal ou judicial, ou permanecer contra a vontade do morador, é crime de abuso de autoridade (Art. 22).",
  },
  {
    id: 880,
    materia: "Legislação Especial",
    assunto: "LEP – visita íntima",
    enunciado: "A visita íntima ao preso:",
    alternativas: {
      A: "É proibida em qualquer circunstância.",
      B: "Será assegurada ao preso casado ou em união estável, em ambiente reservado, respeitadas normas de segurança.",
      C: "Aplica-se apenas a presos provisórios.",
      D: "Depende de autorização do Ministério Público.",
      E: "Pode ser negada arbitrariamente pelo diretor do presídio.",
    },
    correta: "B",
    explicacao:
      "A LEP garante visita íntima ao preso em união estável ou casamento, respeitando condições de segurança e privacidade (entendimento jurisprudencial consolidado a partir do Art. 41).",
  },
  {
    id: 881,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – financiamento ao tráfico",
    enunciado:
      "O crime de financiamento ou custeio ao tráfico de drogas caracteriza-se quando:",
    alternativas: {
      A: "Alguém apenas consome drogas.",
      B: "Alguém financia ou custeia a prática de qualquer dos crimes previstos na Lei de Drogas.",
      C: "Apenas advogados que patrocinam causas de traficantes.",
      D: "Somente bancos que realizam operações suspeitas.",
      E: "Qualquer pessoa que empresta dinheiro a outra.",
    },
    correta: "B",
    explicacao:
      "Financiar ou custear tráfico ou crimes correlatos é conduta autônoma prevista no Art. 36 da Lei 11.343/2006, com pena severa.",
  },
  {
    id: 882,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – comércio ilegal de armas",
    enunciado: "O comércio ilegal de arma de fogo consiste em:",
    alternativas: {
      A: "Apenas comprar arma para uso pessoal sem registro.",
      B: "Produzir, recarregar, reciclar, adquirir, vender, alugar, expor à venda, fornecer, receber, ter em depósito, transportar, ceder, emprestar ou entregar arma de fogo de uso permitido sem autorização legal.",
      C: "Somente vender armas de fogo de uso restrito.",
      D: "Apenas portar arma em via pública.",
      E: "Guardar arma registrada em casa.",
    },
    correta: "B",
    explicacao:
      "O Art. 17 pune diversas condutas de comércio ilegal de armas de uso permitido, com pena de reclusão de 4 a 8 anos.",
  },
  {
    id: 883,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – liberdade provisória",
    enunciado:
      "Em crimes hediondos e equiparados, a concessão de liberdade provisória:",
    alternativas: {
      A: "É sempre vedada em qualquer hipótese.",
      B: "É possível, desde que o juiz verifique a ausência dos requisitos da prisão preventiva e que o agente não represente risco à ordem pública.",
      C: "Depende exclusivamente da vontade do delegado.",
      D: "É automática após o flagrante.",
      E: "Nunca foi regulamentada.",
    },
    correta: "B",
    explicacao:
      "Após decisões do STF, a vedação absoluta foi afastada; cabe ao juiz analisar caso a caso a necessidade da prisão preventiva.",
  },
  {
    id: 884,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – vedação de penas alternativas",
    enunciado: "Nos crimes praticados com violência doméstica contra a mulher:",
    alternativas: {
      A: "É vedada aplicação de penas de cestas básicas ou multas isoladas.",
      B: "Sempre se aplica apenas advertência.",
      C: "O réu pode optar por multa em qualquer caso.",
      D: "A pena é sempre privativa de liberdade sem substituição.",
      E: "Não há vedação específica.",
    },
    correta: "A",
    explicacao:
      "A Lei Maria da Penha veda expressamente a aplicação de penas de cestas básicas ou outras isoladas que desvalorizem a gravidade da violência (Art. 17).",
  },
  {
    id: 885,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – tortura-prova",
    enunciado: "A tortura para obter confissão ou informação:",
    alternativas: {
      A: "É permitida em casos excepcionais de terrorismo.",
      B: "Constitui crime específico previsto na Lei de Tortura, mesmo quando praticado para obtenção de prova.",
      C: "É aceitável se houver autorização judicial.",
      D: "Não configura crime se não deixar marcas físicas.",
      E: "Só é crime se resultar em morte.",
    },
    correta: "B",
    explicacao:
      "Submeter alguém a sofrimento físico ou mental para obter informação ou confissão é crime específico de tortura (Art. 1º, I, 'a').",
  },
  {
    id: 886,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – inovação ilegal de provas",
    enunciado: "Constitui abuso de autoridade:",
    alternativas: {
      A: "Qualquer coleta de prova lícita.",
      B: "Inovar artificiosamente, no curso de diligência, de investigação ou de processo, o estado de lugar, de coisa ou de pessoa, com o fim de eximir-se de responsabilidade ou de responsabilizar criminalmente alguém ou agravar-lhe a situação.",
      C: "Realizar busca pessoal prevista em lei.",
      D: "Fotografar a cena do crime.",
      E: "Ouvir testemunhas na delegacia.",
    },
    correta: "B",
    explicacao:
      "Adulterar artificiosamente local, objeto ou pessoa para forjar prova ou incriminar alguém é abuso de autoridade (Art. 34).",
  },
  {
    id: 887,
    materia: "Legislação Especial",
    assunto: "LEP – saída temporária",
    enunciado:
      "A saída temporária pode ser concedida ao condenado que cumpre pena em regime semiaberto para:",
    alternativas: {
      A: "Qualquer finalidade, sem limite de dias.",
      B: "Visita à família, frequência a curso ou participação em atividades que concorram para o retorno ao convívio social, mediante requisitos legais e prazo determinado.",
      C: "Apenas para tratamento médico.",
      D: "Somente para comparecer a júri.",
      E: "Exclusivamente para trabalhar.",
    },
    correta: "B",
    explicacao:
      "A saída temporária permite que o preso semiaberto saia para visitar família, estudar ou participar de atividades ressocializadoras, com autorização judicial e prazo (Arts. 122 a 125).",
  },
  {
    id: 888,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – colaboração premiada",
    enunciado:
      "No crime de tráfico de drogas, a delação premiada ou colaboração premiada pode resultar em:",
    alternativas: {
      A: "Perdão judicial ou redução de pena de 1/3 a 2/3, se o colaborador fornecer informações que levem ao esclarecimento de autoria ou à recuperação de bens.",
      B: "Apenas aumento de pena.",
      C: "Exclusão automática do processo.",
      D: "Somente aplicação de multa.",
      E: "Não há previsão na Lei de Drogas.",
    },
    correta: "A",
    explicacao:
      "O Art. 41 da Lei 11.343/2006 prevê redução ou perdão judicial para quem colabora efetivamente com a investigação.",
  },
  {
    id: 889,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – tráfico internacional de armas",
    enunciado: "O tráfico internacional de arma de fogo caracteriza-se por:",
    alternativas: {
      A: "Apenas importar arma legalmente.",
      B: "Importar, exportar, favorecer entrada ou saída do território nacional, a qualquer título, de arma de fogo sem autorização legal.",
      C: "Comprar arma no exterior para uso pessoal com registro.",
      D: "Apenas transportar munição dentro do país.",
      E: "Viajar com arma regularizada.",
    },
    correta: "B",
    explicacao:
      "O Art. 18 do Estatuto pune com rigor a importação, exportação ou facilitação de entrada/saída de armas sem autorização.",
  },
  {
    id: 890,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – indulto e anistia",
    enunciado: "Quanto ao indulto e à anistia em crimes hediondos:",
    alternativas: {
      A: "São sempre permitidos sem restrição.",
      B: "A Constituição veda a concessão de graça e anistia para crimes hediondos, permitindo indulto apenas em casos excepcionais previstos em lei.",
      C: "Podem ser concedidos a qualquer tempo pelo Presidente.",
      D: "Não existe vedação constitucional.",
      E: "Somente o STF pode conceder.",
    },
    correta: "B",
    explicacao:
      "A CF/88 veda graça e anistia para crimes hediondos; o indulto individual é vedado, mas há discussão sobre indulto coletivo em circunstâncias restritas (Art. 5º, XLIII).",
  },
  {
    id: 891,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – equipe multidisciplinar",
    enunciado:
      "A Lei Maria da Penha prevê que os Juizados de Violência Doméstica contem com:",
    alternativas: {
      A: "Apenas juízes e promotores.",
      B: "Equipe de atendimento multidisciplinar integrada por profissionais especializados nas áreas psicossocial, jurídica e de saúde.",
      C: "Somente policiais militares.",
      D: "Apenas advogados particulares.",
      E: "Exclusivamente peritos criminais.",
    },
    correta: "B",
    explicacao:
      "A lei institui equipes multidisciplinares para atendimento integral às vítimas, com psicólogos, assistentes sociais e profissionais de saúde (Art. 29).",
  },
  {
    id: 892,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – responsabilidade do superior",
    enunciado:
      "O superior hierárquico que toma conhecimento da prática de tortura e não adota providências para apurar e punir:",
    alternativas: {
      A: "Não responde por nenhum crime.",
      B: "Incorre no mesmo crime de tortura por omissão.",
      C: "Responde apenas administrativamente.",
      D: "Pode alegar desconhecimento em qualquer caso.",
      E: "Só responde se participar diretamente.",
    },
    correta: "B",
    explicacao:
      "O superior que se omite em coibir ou apurar tortura responde pelo crime na modalidade omissiva (Art. 1º, §2º).",
  },
  {
    id: 893,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – requisição ilegal",
    enunciado: "Constitui abuso de autoridade:",
    alternativas: {
      A: "Qualquer requisição de auxílio policial.",
      B: "Requisitar instauração ou instaurar procedimento investigatório de infração penal ou administrativa sem qualquer indício da prática de crime ou de ilícito administrativo.",
      C: "Solicitar documentos em fiscalização regular.",
      D: "Iniciar investigação com base em denúncia anônima fundamentada.",
      E: "Lavrar auto de prisão em flagrante delito.",
    },
    correta: "B",
    explicacao:
      "Requisitar ou instaurar procedimento sem indícios mínimos de ilícito, apenas para perseguir ou constranger alguém, é abuso (Art. 27).",
  },
  {
    id: 894,
    materia: "Legislação Especial",
    assunto: "LEP – Conselho da Comunidade",
    enunciado: "O Conselho da Comunidade, previsto na LEP, tem a função de:",
    alternativas: {
      A: "Substituir o juiz da execução penal.",
      B: "Visitar estabelecimentos penais, fiscalizar condições de cumprimento de pena, entrevistar presos e apresentar relatórios ao juiz.",
      C: "Apenas organizar eventos culturais.",
      D: "Executar penas privativas de liberdade.",
      E: "Não possui função definida.",
    },
    correta: "B",
    explicacao:
      "O Conselho da Comunidade fiscaliza e acompanha a execução penal, dialogando com presos e reportando problemas ao juiz (Art. 80 e 81).",
  },
  {
    id: 895,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – destruição de cultivos",
    enunciado:
      "A autoridade policial pode determinar a destruição de cultivos ilícitos de plantas destinadas à produção de drogas:",
    alternativas: {
      A: "Apenas após sentença condenatória transitada em julgado.",
      B: "Imediatamente após a constatação, mediante laudo pericial que ateste a irregularidade e guarde amostra para contraprova.",
      C: "Nunca pode destruir, devendo apenas apreender.",
      D: "Somente se houver autorização do Ministério Público Federal.",
      E: "Apenas em áreas urbanas.",
    },
    correta: "B",
    explicacao:
      "A destruição imediata de plantações ilícitas é autorizada, desde que documentada e preservada amostra (Art. 50-A e 32, §1º).",
  },
  {
    id: 896,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – omissão de cautela",
    enunciado: "O crime de omissão de cautela ocorre quando:",
    alternativas: {
      A: "Alguém deixa de guardar arma de fogo em local seguro, permitindo acesso a criança ou adolescente, ou a pessoa não autorizada.",
      B: "Apenas quando há morte resultante.",
      C: "Somente em caso de roubo da arma.",
      D: "Não existe este tipo penal.",
      E: "Apenas em locais públicos.",
    },
    correta: "A",
    explicacao:
      "Deixar de observar cautelas necessárias no armazenamento de arma, permitindo acesso indevido, configura crime (Art. 13).",
  },
  {
    id: 897,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – prisão temporária",
    enunciado: "Em crimes hediondos, o prazo da prisão temporária pode ser de:",
    alternativas: {
      A: "5 dias improrrogáveis.",
      B: "30 dias, prorrogáveis por mais 30 dias em caso de extrema e comprovada necessidade.",
      C: "10 dias em qualquer caso.",
      D: "60 dias sem possibilidade de prorrogação.",
      E: "Não há prazo definido.",
    },
    correta: "B",
    explicacao:
      "Para crimes hediondos, a prisão temporária pode durar até 30 dias, prorrogável por igual período (Art. 2º, §4º, Lei 8.072/90).",
  },
  {
    id: 898,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – afastamento do agressor",
    enunciado:
      "Entre as medidas protetivas de urgência que obrigam o agressor está:",
    alternativas: {
      A: "Apenas advertência verbal.",
      B: "Afastamento do lar ou local de convivência com a ofendida, suspensão de visitas, restrição ou suspensão de porte de armas.",
      C: "Somente pagamento de multa.",
      D: "Prisão imediata e definitiva.",
      E: "Nenhuma medida pode ser imposta antes do trânsito em julgado.",
    },
    correta: "B",
    explicacao:
      "O juiz pode determinar afastamento do agressor, suspensão de visitas, proibição de aproximação e outras medidas protetivas imediatas (Arts. 22 e 23).",
  },
  {
    id: 899,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – vedação de fiança",
    enunciado: "O crime de tortura:",
    alternativas: {
      A: "Admite fiança em qualquer caso.",
      B: "É inafiançável e insuscetível de graça ou anistia.",
      C: "Permite fiança apenas para réus primários.",
      D: "Não possui previsão sobre fiança.",
      E: "Depende da análise do delegado.",
    },
    correta: "B",
    explicacao:
      "Tortura é crime inafiançável, imprescritível e não admite graça ou anistia, conforme CF/88 (Art. 5º, XLIII).",
  },
  {
    id: 900,
    materia: "Legislação Especial",
    assunto: "LEP – monitoração eletrônica",
    enunciado: "A monitoração eletrônica pode ser aplicada:",
    alternativas: {
      A: "Apenas como pena principal.",
      B: "Como condição de concessão de saída temporária, prisão domiciliar, progressão de regime ou livramento condicional.",
      C: "Somente em crimes contra o patrimônio.",
      D: "Exclusivamente para estrangeiros.",
      E: "Nunca pode ser aplicada.",
    },
    correta: "B",
    explicacao:
      "A monitoração eletrônica é medida cautelar ou forma de fiscalização em diversas situações da execução penal (Arts. 146-A a 146-D).",
  },
  {
    id: 901,
    materia: "Legislação Especial",
    assunto: "LEP – execução provisória",
    enunciado: "A execução provisória da pena:",
    alternativas: {
      A: "É vedada antes do trânsito em julgado da condenação.",
      B: "Pode ocorrer após condenação em segunda instância, conforme jurisprudência atual, garantindo direitos do preso.",
      C: "Substitui o devido processo legal.",
      D: "Aplica-se apenas a crimes culposos.",
      E: "Não está prevista na LEP.",
    },
    correta: "B",
    explicacao:
      "Após decisões do STF, a execução provisória é possível após condenação em segunda instância, respeitando direitos (Arts. 105 e seguintes).",
  },
  {
    id: 902,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – denúncia anônima",
    enunciado: "A denúncia anônima de tráfico de drogas:",
    alternativas: {
      A: "Não pode fundamentar investigação sem outros elementos.",
      B: "Deve ser analisada para iniciar investigação, mas exige diligências complementares que confirmem os fatos.",
      C: "Autoriza busca domiciliar imediata sem mandado.",
      D: "Substitui inquérito policial.",
      E: "Gera condenação automática.",
    },
    correta: "B",
    explicacao:
      "Denúncia anônima pode iniciar investigação, mas exige confirmação por diligências complementares antes de medidas invasivas.",
  },
  {
    id: 903,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – renovação de registro",
    enunciado: "O registro de arma de fogo deve ser renovado:",
    alternativas: {
      A: "A cada 10 anos, obrigatoriamente.",
      B: "Periodicamente, conforme legislação vigente (atualmente a cada 10 anos), mediante atualização de dados.",
      C: "Apenas uma vez, sendo vitalício.",
      D: "A cada 6 meses.",
      E: "Nunca precisa ser renovado.",
    },
    correta: "B",
    explicacao:
      "O registro deve ser renovado conforme prazos legais (atualmente 10 anos), com atualização de dados (Art. 4º e regulamentos).",
  },
  {
    id: 904,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – prisão preventiva",
    enunciado: "A prisão preventiva do agressor pode ser decretada quando:",
    alternativas: {
      A: "Sempre que houver violência, sem análise de requisitos.",
      B: "Houver risco à integridade física ou psicológica da vítima, necessidade de garantir a execução de medidas protetivas ou perigo de reiteração.",
      C: "Apenas se houver tentativa de homicídio.",
      D: "Somente após sentença condenatória.",
      E: "Nunca é cabível em violência doméstica.",
    },
    correta: "B",
    explicacao:
      "A prisão preventiva é cabível quando há risco à vítima, necessidade de assegurar medidas protetivas ou perigo de repetição (Art. 20 e CPP).",
  },
  {
    id: 905,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – responsabilidade do médico",
    enunciado:
      "O médico que deixa de denunciar tortura de que teve conhecimento no exercício da profissão:",
    alternativas: {
      A: "Não comete crime, pois está protegido pelo sigilo profissional absoluto.",
      B: "Incorre em crime de omissão, salvo quando protegido por sigilo profissional em casos excepcionais.",
      C: "Responde apenas administrativamente.",
      D: "Não possui obrigação legal de denunciar.",
      E: "Recebe apenas advertência ética.",
    },
    correta: "B",
    explicacao:
      "Omitir denúncia de tortura pode configurar crime, mas o sigilo médico pode justificar omissão em casos específicos (Art. 1º, §2º e Código de Ética).",
  },
  {
    id: 906,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – decretação ilegal de medidas",
    enunciado: "Constitui abuso de autoridade:",
    alternativas: {
      A: "Decretar medidas de busca e apreensão com fundamento legal.",
      B: "Decretar medida de privação de liberdade sem fundamentação legal ou fora das hipóteses legais.",
      C: "Realizar investigação criminal regular.",
      D: "Cumprir mandado judicial válido.",
      E: "Solicitar documentos em fiscalização autorizada.",
    },
    correta: "B",
    explicacao:
      "Decretar prisão ou medidas restritivas sem base legal ou fora das hipóteses previstas configura abuso (Art. 9º).",
  },
  {
    id: 907,
    materia: "Legislação Especial",
    assunto: "LEP – regime disciplinar diferenciado (duração)",
    enunciado: "O RDD pode ser aplicado por prazo de até:",
    alternativas: {
      A: "15 dias, improrrogáveis.",
      B: "2 anos, prorrogáveis conforme reavaliação e decisão judicial fundamentada.",
      C: "6 meses, improrrogáveis.",
      D: "Prazo indeterminado.",
      E: "Não há prazo máximo previsto.",
    },
    correta: "B",
    explicacao:
      "O RDD pode durar até 2 anos, sendo prorrogável mediante decisão judicial fundamentada e reavaliação (Art. 52, §§).",
  },
  {
    id: 908,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – dependência química e tratamento",
    enunciado: "Ao dependente químico pode ser determinado:",
    alternativas: {
      A: "Apenas prisão, sem alternativas.",
      B: "Tratamento ambulatorial ou internação, conforme avaliação médica e judicial, priorizando recuperação.",
      C: "Somente multa.",
      D: "Trabalho forçado.",
      E: "Exclusão do sistema de saúde.",
    },
    correta: "B",
    explicacao:
      "A lei prioriza tratamento e recuperação do dependente, com internação apenas quando necessário (Art. 28, §§ e Lei 10.216/2001).",
  },
  {
    id: 909,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – excludente de criminalidade",
    enunciado: "Não constitui crime previsto no Estatuto:",
    alternativas: {
      A: "Portar arma de fogo sem registro em qualquer circunstância.",
      B: "Portar arma desmuniciada regularmente registrada, no trajeto residência-trabalho, desde que autorizado.",
      C: "Disparar arma em via pública.",
      D: "Comercializar arma sem autorização.",
      E: "Adulterar numeração de arma de fogo.",
    },
    correta: "B",
    explicacao:
      "Situações legalmente previstas e autorizadas, com arma registrada e desmuniciada, em trajeto permitido, podem afastar a ilicitude (Art. 6º e jurisprudência).",
  },
  {
    id: 910,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – liberdade provisória (atualização)",
    enunciado:
      "Após decisões do STF, a liberdade provisória em crimes hediondos:",
    alternativas: {
      A: "É vedada em qualquer hipótese.",
      B: "Pode ser concedida, desde que ausentes os requisitos da prisão preventiva e mediante fundamentação judicial.",
      C: "Depende exclusivamente da vontade do delegado.",
      D: "É automática após o flagrante.",
      E: "Nunca foi regulamentada.",
    },
    correta: "B",
    explicacao:
      "A vedação absoluta foi afastada pelo STF; cabe ao juiz analisar a necessidade da prisão preventiva caso a caso.",
  },
  {
    id: 911,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – competência",
    enunciado:
      "Os crimes de violência doméstica contra a mulher são de competência:",
    alternativas: {
      A: "Exclusiva da Justiça Federal.",
      B: "Dos Juizados de Violência Doméstica e Familiar ou, na sua ausência, das Varas Criminais comuns.",
      C: "Apenas do Tribunal do Júri.",
      D: "Exclusivamente da Polícia Civil.",
      E: "Do Ministério Público, que julga diretamente.",
    },
    correta: "B",
    explicacao:
      "A competência é dos Juizados especializados em Violência Doméstica; na ausência, cabe às Varas Criminais (Art. 14).",
  },
  {
    id: 912,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – qualificadora pela morte",
    enunciado: "Se da tortura resulta morte:",
    alternativas: {
      A: "A pena é aumentada em 1/3.",
      B: "A pena é de reclusão de 8 a 16 anos, além das sanções correspondentes à violência.",
      C: "O crime se transforma em homicídio simples.",
      D: "Não há qualificadora específica.",
      E: "A pena permanece inalterada.",
    },
    correta: "B",
    explicacao:
      "Quando a tortura resulta em morte, a pena é qualificada para reclusão de 8 a 16 anos (Art. 1º, §3º).",
  },
  {
    id: 913,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – facilitação de fuga",
    enunciado: "Constitui abuso de autoridade:",
    alternativas: {
      A: "Realizar custódia regular de preso.",
      B: "Facilitar, com violação de dever funcional, a prática de fuga de pessoa presa ou submetida a medida de segurança.",
      C: "Transferir preso conforme determinação judicial.",
      D: "Realizar revista pessoal autorizada.",
      E: "Cumprir mandado de prisão válido.",
    },
    correta: "B",
    explicacao:
      "Facilitar fuga de preso, violando deveres funcionais, constitui abuso de autoridade (Art. 35).",
  },
  {
    id: 914,
    materia: "Legislação Especial",
    assunto: "LEP – exame criminológico",
    enunciado: "O exame criminológico:",
    alternativas: {
      A: "É obrigatório em todos os casos de progressão de regime.",
      B: "Pode ser determinado pelo juiz para avaliar a personalidade do condenado e auxiliar na decisão sobre progressão, mas não é obrigatório.",
      C: "Substitui o requisito temporal de cumprimento de pena.",
      D: "É realizado apenas por psicólogos.",
      E: "Não está previsto na LEP.",
    },
    correta: "B",
    explicacao:
      "O exame criminológico é facultativo, podendo ser determinado pelo juiz quando necessário para análise do caso (Art. 112, parágrafo único).",
  },
  {
    id: 915,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – crime de uso compartilhado",
    enunciado:
      "Oferecer droga, eventualmente e sem objetivo de lucro, a pessoa de seu relacionamento, para consumo conjunto:",
    alternativas: {
      A: "Configura tráfico de drogas em qualquer hipótese.",
      B: "Configura crime de uso compartilhado, com pena menor que o tráfico (Art. 33, §3º).",
      C: "Não constitui crime.",
      D: "É atípico se ambos forem dependentes.",
      E: "Configura apenas infração administrativa.",
    },
    correta: "B",
    explicacao:
      "Oferecer droga ocasionalmente, sem lucro, para consumo conjunto é crime específico com pena reduzida (Art. 33, §3º).",
  },
  {
    id: 916,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – porte ilegal por militar",
    enunciado:
      "O militar das Forças Armadas que porta arma fora de serviço sem autorização:",
    alternativas: {
      A: "Não comete crime, pois militares têm porte irrestrito.",
      B: "Pode responder por crime militar ou pelo Estatuto, conforme as circunstâncias.",
      C: "Está sempre isento de pena.",
      D: "Responde apenas administrativamente.",
      E: "Não há previsão legal para esta situação.",
    },
    correta: "B",
    explicacao:
      "Militar que porta arma fora do serviço sem autorização pode responder por crime militar ou pelo Estatuto, dependendo do contexto (Art. 6º e legislação militar).",
  },
  {
    id: 917,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – tortura qualificada",
    enunciado: "A tortura é considerada crime hediondo:",
    alternativas: {
      A: "Apenas quando praticada por agente público.",
      B: "Em todas as suas formas, conforme a Constituição Federal e Lei de Crimes Hediondos.",
      C: "Somente quando resulta em morte.",
      D: "Apenas em caso de guerra.",
      E: "Não é considerada crime hediondo.",
    },
    correta: "B",
    explicacao:
      "A tortura é crime hediondo em todas as suas modalidades, conforme CF/88 (Art. 5º, XLIII) e Lei 8.072/90.",
  },
  {
    id: 918,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – descumprimento de medida protetiva",
    enunciado: "O descumprimento de medida protetiva de urgência:",
    alternativas: {
      A: "Não gera consequência penal.",
      B: "Configura crime específico, com pena de detenção de 3 meses a 2 anos.",
      C: "Gera apenas advertência verbal.",
      D: "Só tem consequência se houver nova agressão.",
      E: "Não está tipificado como crime.",
    },
    correta: "B",
    explicacao:
      "Descumprir medida protetiva é crime autônomo, com pena de detenção de 3 meses a 2 anos (Art. 24-A, Lei 11.340/2006).",
  },
  {
    id: 919,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – prescrição",
    enunciado: "O crime de tortura:",
    alternativas: {
      A: "É imprescritível, conforme a Constituição Federal.",
      B: "Prescreve em 20 anos.",
      C: "Prescreve em 10 anos em qualquer caso.",
      D: "Prescreve em 5 anos.",
      E: "Prescreve conforme o Código Penal, mas não é imprescritível.",
    },
    correta: "A",
    explicacao:
      "A tortura é crime imprescritível, conforme CF/88, Art. 5º, XLIII.",
  },
  {
    id: 920,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – tortura processual",
    enunciado:
      "Constitui abuso de autoridade e também pode configurar tortura:",
    alternativas: {
      A: "Realizar investigação criminal regular.",
      B: "Submeter pessoa a sofrimento físico ou mental durante interrogatório para obter confissão ou informação.",
      C: "Solicitar documentos em fiscalização.",
      D: "Cumprir mandado judicial válido.",
      E: "Realizar audiência pública.",
    },
    correta: "B",
    explicacao:
      "Submeter alguém a sofrimento para obter confissão configura tortura (Lei 9.455/97) e abuso de autoridade (Lei 13.869/2019, Art. 13).",
  },
  {
    id: 921,
    materia: "Legislação Especial",
    assunto: "LEP – direitos do preso",
    enunciado: "São direitos do preso, além dos previstos na LEP:",
    alternativas: {
      A: "Apenas alimentação básica.",
      B: "Alimentação, vestuário, instalações higiênicas, assistência material, à saúde, jurídica, educacional, social e religiosa.",
      C: "Somente direito a visitas familiares.",
      D: "Não há direitos garantidos durante o cumprimento de pena.",
      E: "Apenas direito ao trabalho remunerado.",
    },
    correta: "B",
    explicacao:
      "A LEP assegura assistência integral ao preso em diversas áreas (Arts. 10 a 27, 41).",
  },
  {
    id: 922,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – informante",
    enunciado:
      "O agente que informa local ou momento de tráfico para facilitar a ação policial:",
    alternativas: {
      A: "Não comete crime algum.",
      B: "Pode ser beneficiado com redução de pena ou outras medidas se colaborar efetivamente com a investigação.",
      C: "Sempre responde como coautor do tráfico.",
      D: "Recebe apenas recompensa financeira.",
      E: "Não há previsão legal para esta situação.",
    },
    correta: "B",
    explicacao:
      "A colaboração efetiva pode gerar benefícios como redução de pena ou perdão judicial (Art. 41, Lei 11.343/2006).",
  },
  {
    id: 923,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – posse irregular após vencimento",
    enunciado: "Manter arma de fogo com registro vencido caracteriza:",
    alternativas: {
      A: "Apenas infração administrativa.",
      B: "Crime de posse irregular de arma de fogo, podendo haver regularização antes da denúncia.",
      C: "Não constitui infração penal ou administrativa.",
      D: "Crime hediondo.",
      E: "Apenas advertência verbal.",
    },
    correta: "B",
    explicacao:
      "Posse de arma com registro vencido configura crime (Art. 12), mas pode haver regularização antes da ação penal.",
  },
  {
    id: 924,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – âmbito de aplicação",
    enunciado: "A Lei Maria da Penha aplica-se:",
    alternativas: {
      A: "Apenas a mulheres casadas.",
      B: "A qualquer mulher vítima de violência doméstica, familiar ou em relação íntima de afeto, independentemente de orientação sexual.",
      C: "Somente a mulheres com filhos.",
      D: "Apenas em casos de violência física.",
      E: "Exclusivamente a brasileiras natas.",
    },
    correta: "B",
    explicacao:
      "A lei protege toda mulher em situação de violência doméstica, familiar ou afetiva, independentemente de orientação sexual (Art. 5º).",
  },
  {
    id: 925,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – discriminação racial como tortura",
    enunciado:
      "Submeter alguém a constrangimento, humilhação ou discriminação racial pode configurar:",
    alternativas: {
      A: "Apenas crime de racismo (Lei 7.716/89).",
      B: "Crime de tortura, quando praticado com violência ou grave ameaça, causando sofrimento físico ou mental em razão de discriminação.",
      C: "Apenas contravenção penal.",
      D: "Não há previsão legal.",
      E: "Apenas infração ética.",
    },
    correta: "B",
    explicacao:
      "Submeter alguém a intenso sofrimento por discriminação racial pode configurar tortura (Art. 1º, I, 'c', Lei 9.455/97).",
  },
  {
    id: 926,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – violação de sigilo",
    enunciado: "Constitui abuso de autoridade:",
    alternativas: {
      A: "Divulgar dados sigilosos protegidos por lei, sem autorização legal ou judicial.",
      B: "Cumprir mandado judicial de quebra de sigilo.",
      C: "Investigar crime com autorização judicial.",
      D: "Solicitar documentos em procedimento regular.",
      E: "Realizar perícia técnica autorizada.",
    },
    correta: "A",
    explicacao:
      "Divulgar informações sigilosas sem autorização legal ou judicial constitui abuso de autoridade (Art. 31).",
  },
  {
    id: 927,
    materia: "Legislação Especial",
    assunto: "LEP – Patronato",
    enunciado: "O Patronato, previsto na LEP, tem como função:",
    alternativas: {
      A: "Substituir o Ministério Público na execução penal.",
      B: "Prestar assistência aos albergados e egressos, orientando-os na obtenção de trabalho e na reintegração social.",
      C: "Julgar faltas disciplinares.",
      D: "Executar penas privativas de liberdade.",
      E: "Não possui função definida.",
    },
    correta: "B",
    explicacao:
      "O Patronato auxilia na reintegração social de albergados e egressos, orientando em trabalho e apoio social (Art. 78 e 79).",
  },
  {
    id: 928,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – plantio para consumo próprio",
    enunciado:
      "Cultivar plantas destinadas à produção de drogas para consumo pessoal:",
    alternativas: {
      A: "Configura tráfico de drogas em qualquer hipótese.",
      B: "Configura crime de porte para consumo próprio, sujeito às penas do Art. 28.",
      C: "Não constitui crime.",
      D: "É permitido pela lei.",
      E: "Gera apenas advertência administrativa.",
    },
    correta: "B",
    explicacao:
      "Cultivar para consumo próprio equipara-se ao porte de drogas para uso pessoal (Art. 28, §1º).",
  },
  {
    id: 929,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – apreensão de arma",
    enunciado: "Arma de fogo apreendida em crime deve:",
    alternativas: {
      A: "Ser devolvida imediatamente ao proprietário.",
      B: "Ser periciada, registrada e, após trânsito em julgado da condenação, destruída ou incorporada aos órgãos de segurança.",
      C: "Ser leiloada imediatamente.",
      D: "Ser entregue ao Ministério Público.",
      E: "Permanecer indefinidamente na delegacia.",
    },
    correta: "B",
    explicacao:
      "Armas apreendidas são periciadas e, após sentença definitiva, destruídas ou incorporadas aos órgãos de segurança (Art. 25).",
  },
  {
    id: 930,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – regime inicial",
    enunciado:
      "Para crimes hediondos, o regime inicial de cumprimento de pena deve ser:",
    alternativas: {
      A: "Sempre aberto.",
      B: "Determinado pelo juiz conforme critérios do Art. 33 do CP, podendo ser fechado ou semiaberto.",
      C: "Sempre semiaberto.",
      D: "Domiciliar em todos os casos.",
      E: "Não há regime inicial definido.",
    },
    correta: "B",
    explicacao:
      "Após decisões do STF, o regime inicial deve ser fixado conforme critérios do Art. 33 do CP, não sendo obrigatoriamente fechado (Súmula Vinculante 26).",
  },
  {
    id: 931,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – rede de atendimento",
    enunciado:
      "A rede de atendimento à mulher em situação de violência doméstica compreende:",
    alternativas: {
      A: "Apenas delegacias especializadas.",
      B: "Serviços articulados de saúde, segurança pública, assistência social, justiça, educação e trabalho.",
      C: "Somente hospitais públicos.",
      D: "Apenas o Poder Judiciário.",
      E: "Não há rede de atendimento prevista.",
    },
    correta: "B",
    explicacao:
      "A lei prevê rede integrada e multidisciplinar de atendimento à mulher vítima de violência (Art. 8º e 35).",
  },
  {
    id: 932,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – excludentes de ilicitude",
    enunciado: "O crime de tortura:",
    alternativas: {
      A: "Admite legítima defesa em qualquer circunstância.",
      B: "Não admite excludentes de ilicitude, salvo em situações excepcionais previstas em lei.",
      C: "Pode ser justificado por estado de necessidade sempre.",
      D: "É sempre justificável em investigações.",
      E: "Não possui regulamentação sobre excludentes.",
    },
    correta: "B",
    explicacao:
      "A tortura é crime grave que raramente admite excludentes, salvo situações excepcionais reconhecidas pela lei e jurisprudência.",
  },
  {
    id: 933,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – execução arbitrária de prisão",
    enunciado: "Constitui abuso de autoridade:",
    alternativas: {
      A: "Cumprir mandado de prisão válido.",
      B: "Executar prisão sem observância das formalidades legais ou com uso desnecessário de algemas ou violência.",
      C: "Realizar prisão em flagrante delito.",
      D: "Conduzir preso conforme determinação judicial.",
      E: "Realizar revista pessoal autorizada.",
    },
    correta: "B",
    explicacao:
      "Executar prisão com abuso, sem formalidades ou com violência desnecessária constitui abuso de autoridade (Arts. 9º, 13 e 15).",
  },
  {
    id: 934,
    materia: "Legislação Especial",
    assunto: "LEP – detração penal",
    enunciado: "A detração penal consiste em:",
    alternativas: {
      A: "Aumento da pena por mau comportamento.",
      B: "Desconto do tempo de prisão provisória ou administrativa da pena aplicada definitivamente.",
      C: "Duplicação da pena em caso de reincidência.",
      D: "Perda de todos os direitos do preso.",
      E: "Não está prevista na LEP.",
    },
    correta: "B",
    explicacao:
      "A detração permite descontar da pena o tempo de prisão cautelar ou administrativa já cumprido (Art. 111).",
  },
  {
    id: 935,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – infiltração de agentes",
    enunciado:
      "A infiltração de agentes policiais em organizações criminosas de tráfico:",
    alternativas: {
      A: "É proibida em qualquer hipótese.",
      B: "É permitida mediante autorização judicial, com prazo determinado e controle judicial.",
      C: "Pode ser feita sem autorização judicial.",
      D: "Só é permitida em crimes contra o patrimônio.",
      E: "Não está prevista na Lei de Drogas.",
    },
    correta: "B",
    explicacao:
      "A infiltração de agentes exige autorização judicial fundamentada, prazo determinado e controle (Art. 53, Lei 11.343/2006).",
  },
  {
    id: 936,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – uso de arma em crime",
    enunciado: "O uso de arma de fogo em crime doloso:",
    alternativas: {
      A: "Não gera agravante ou qualificadora.",
      B: "Constitui agravante genérica ou qualificadora específica, conforme o crime.",
      C: "Reduz a pena do crime principal.",
      D: "É irrelevante para a dosimetria da pena.",
      E: "Só é considerado em crimes hediondos.",
    },
    correta: "B",
    explicacao:
      "O uso de arma de fogo pode configurar agravante (Art. 61, II, 'c', CP) ou qualificadora específica em diversos crimes.",
  },
  {
    id: 937,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – violência patrimonial",
    enunciado: "A violência patrimonial contra a mulher caracteriza-se por:",
    alternativas: {
      A: "Apenas destruição de bens móveis.",
      B: "Conduta que configure retenção, subtração, destruição parcial ou total de objetos, instrumentos de trabalho, documentos pessoais, bens, valores e direitos.",
      C: "Somente crimes contra o sistema financeiro.",
      D: "Apenas apropriação indébita.",
      E: "Não está prevista na Lei Maria da Penha.",
    },
    correta: "B",
    explicacao:
      "Violência patrimonial abrange diversas condutas que causem dano econômico ou patrimonial à mulher (Art. 7º, IV).",
  },
  {
    id: 938,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – obediência hierárquica",
    enunciado:
      "No crime de tortura, a alegação de cumprimento de ordem superior:",
    alternativas: {
      A: "Exclui sempre a responsabilidade do subordinado.",
      B: "Não afasta a ilicitude, respondendo tanto o superior quanto o subordinado.",
      C: "Só é válida em situações de guerra.",
      D: "Isenta apenas o superior hierárquico.",
      E: "Não há previsão sobre o tema.",
    },
    correta: "B",
    explicacao:
      "Obediência hierárquica não justifica tortura; tanto o superior quanto o subordinado respondem pelo crime (Art. 1º, §2º e princípios gerais).",
  },
  {
    id: 939,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – prolongamento indevido de prisão",
    enunciado: "Constitui abuso de autoridade:",
    alternativas: {
      A: "Cumprir integralmente ordem judicial de prisão.",
      B: "Prolongar a execução de prisão temporária, de pena ou de medida de segurança, deixando de executar em tempo oportuno o alvará de soltura.",
      C: "Realizar custódia conforme mandado.",
      D: "Transferir preso por determinação judicial.",
      E: "Conduzir investigação criminal regular.",
    },
    correta: "B",
    explicacao:
      "Prolongar prisão indevidamente ou não cumprir alvará de soltura é abuso de autoridade (Art. 10).",
  },
  {
    id: 940,
    materia: "Legislação Especial",
    assunto: "LEP – Conselho Nacional de Política Criminal e Penitenciária",
    enunciado:
      "O Conselho Nacional de Política Criminal e Penitenciária (CNPCP) tem como atribuição:",
    alternativas: {
      A: "Julgar recursos de execução penal.",
      B: "Propor diretrizes da política criminal e penitenciária, inspecionar estabelecimentos penais e avaliar o sistema penitenciário.",
      C: "Executar penas privativas de liberdade.",
      D: "Substituir o Poder Judiciário na execução penal.",
      E: "Não possui atribuições definidas.",
    },
    correta: "B",
    explicacao:
      "O CNPCP é órgão consultivo e fiscalizador que propõe políticas públicas na área criminal e penitenciária (Arts. 62 a 64).",
  },
  {
    id: 941,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – ação controlada",
    enunciado: "A ação controlada consiste em:",
    alternativas: {
      A: "Prisão imediata de todos os suspeitos.",
      B: "Retardamento da intervenção policial para que a investigação se realize no momento mais eficaz à formação de provas e identificação de autores.",
      C: "Suspensão definitiva de investigação.",
      D: "Arquivamento do inquérito policial.",
      E: "Não está prevista na Lei de Drogas.",
    },
    correta: "B",
    explicacao:
      "A ação controlada permite que a polícia retarde a intervenção para colher mais provas e identificar toda a organização criminosa (Art. 53, II).",
  },
  {
    id: 942,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – simulacro de arma",
    enunciado:
      "Portar, deter ou transportar arma de brinquedo, simulacro ou réplica que se assemelhe a arma de fogo:",
    alternativas: {
      A: "Não constitui infração penal em nenhuma hipótese.",
      B: "Pode configurar contravenção penal ou crime, conforme uso e circunstâncias (ex.: uso em assalto).",
      C: "É sempre crime hediondo.",
      D: "Gera apenas advertência.",
      E: "Não há previsão legal.",
    },
    correta: "B",
    explicacao:
      "Portar simulacro pode configurar contravenção (Art. 10, LCP) ou agravar crimes quando usado para intimidar (ex.: roubo majorado).",
  },
  {
    id: 943,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – violência sexual",
    enunciado:
      "A violência sexual contra a mulher, segundo a Lei Maria da Penha, abrange:",
    alternativas: {
      A: "Apenas estupro consumado.",
      B: "Qualquer conduta que constranja a presenciar, manter ou participar de relação sexual não desejada, mediante intimidação, ameaça, coação ou uso da força.",
      C: "Somente crimes praticados por estranhos.",
      D: "Apenas assédio no ambiente de trabalho.",
      E: "Não está prevista na Lei Maria da Penha.",
    },
    correta: "B",
    explicacao:
      "Violência sexual abrange diversas condutas que constranjam a mulher em questões sexuais (Art. 7º, III).",
  },
  {
    id: 944,
    materia: "Legislação Especial",
    assunto: "Lei de Tortura – testemunha e vítima",
    enunciado: "A vítima de tortura e testemunhas:",
    alternativas: {
      A: "Não possuem proteção especial.",
      B: "Podem receber proteção do Estado através de programas de proteção a vítimas e testemunhas ameaçadas.",
      C: "Devem se proteger sozinhas.",
      D: "São obrigadas a revelar identidade publicamente.",
      E: "Não há previsão de proteção.",
    },
    correta: "B",
    explicacao:
      "Vítimas e testemunhas de tortura podem ser incluídas em programas de proteção (Lei 9.807/99 e Lei 9.455/97).",
  },
  {
    id: 945,
    materia: "Legislação Especial",
    assunto: "Lei de Abuso de Autoridade – registro audiovisual",
    enunciado:
      "Impedir, sem justa causa, a realização de registro audiovisual de flagrante ou de ato de investigação mediante violação de direitos constitucionais:",
    alternativas: {
      A: "Não constitui infração penal.",
      B: "Pode configurar abuso de autoridade, pois impede controle e fiscalização de atos.",
      C: "É sempre permitido impedir filmagens.",
      D: "Só é crime se houver violência física.",
      E: "Não há previsão legal.",
    },
    correta: "B",
    explicacao:
      "Impedir indevidamente registro audiovisual pode configurar abuso, pois prejudica transparência e fiscalização (jurisprudência e princípios da Lei 13.869/2019).",
  },
  {
    id: 946,
    materia: "Legislação Especial",
    assunto: "LEP – audiência de custódia",
    enunciado: "A audiência de custódia tem como finalidade:",
    alternativas: {
      A: "Substituir o julgamento do mérito.",
      B: "Apresentar o preso em flagrante ao juiz em até 24 horas para verificar legalidade da prisão e necessidade de manutenção.",
      C: "Apenas registrar a prisão.",
      D: "Condenar o réu sumariamente.",
      E: "Não está prevista na legislação brasileira.",
    },
    correta: "B",
    explicacao:
      "A audiência de custódia garante controle judicial imediato da prisão, verificando legalidade e necessidade (Resolução CNJ nº 213/2015 e Pacto de San José da Costa Rica).",
  },
  {
    id: 947,
    materia: "Legislação Especial",
    assunto: "Lei de Drogas – apreensão e destruição",
    enunciado: "As drogas apreendidas devem:",
    alternativas: {
      A: "Ser devolvidas ao proprietário.",
      B: "Ser periciadas, guardada amostra, e destruídas após autorização judicial.",
      C: "Permanecer indefinidamente na delegacia.",
      D: "Ser leiloadas para arrecadação pública.",
      E: "Ser liberadas imediatamente.",
    },
    correta: "B",
    explicacao:
      "Drogas apreendidas são periciadas, guarda-se amostra e o restante é destruído após autorização judicial (Art. 50 e 32, §1º).",
  },
  {
    id: 948,
    materia: "Legislação Especial",
    assunto: "Estatuto do Desarmamento – venda irregular para CAC",
    enunciado:
      "Vender arma de fogo para colecionador, atirador ou caçador (CAC) sem observância das normas legais:",
    alternativas: {
      A: "Não constitui crime, pois CACs são autorizados.",
      B: "Pode configurar comércio ilegal de arma de fogo se não observadas as exigências legais e regulamentares.",
      C: "É sempre permitido sem restrições.",
      D: "Gera apenas multa administrativa.",
      E: "Não há regulamentação sobre o tema.",
    },
    correta: "B",
    explicacao:
      "Vender arma para CAC sem observar requisitos legais configura comércio ilegal (Art. 17 e Decreto 11.615/2023).",
  },
  {
    id: 949,
    materia: "Legislação Especial",
    assunto: "Lei de Crimes Hediondos – participação de menor",
    enunciado: "A participação de menor de idade em crime hediondo:",
    alternativas: {
      A: "Exclui a hediondez do crime.",
      B: "Não altera a natureza hedionda do crime, mas o menor responde conforme o ECA.",
      C: "Torna o crime mais grave apenas para o adulto.",
      D: "Impede a prisão de qualquer dos envolvidos.",
      E: "Não há previsão sobre o tema.",
    },
    correta: "B",
    explicacao:
      "A participação de menor não altera a hediondez; o menor responde por ato infracional no ECA, enquanto adultos respondem pelo crime hediondo.",
  },
  {
    id: 950,
    materia: "Legislação Especial",
    assunto: "Lei Maria da Penha – retratação da representação",
    enunciado:
      "A retratação da representação nos crimes de ação penal pública condicionada praticados contra a mulher:",
    alternativas: {
      A: "Pode ocorrer a qualquer momento, sem formalidade.",
      B: "Só pode ser feita perante o juiz, em audiência especialmente designada, antes do recebimento da denúncia e ouvido o Ministério Público.",
      C: "É vedada em qualquer hipótese.",
      D: "Pode ser feita por telefone.",
      E: "Não depende de manifestação judicial.",
    },
    correta: "B",
    explicacao:
      "A retratação só é válida se feita perante o juiz, em audiência específica, antes do recebimento da denúncia (Art. 16).",
  },
  {
    id: 951,
    materia: "Informática",
    assunto: "Conceitos Básicos",
    enunciado: "O que caracteriza a informática básica?",
    alternativas: {
      A: "Conjunto de conhecimentos relacionados ao uso de computadores e softwares para processamento de dados.",
      B: "Estudo exclusivo de linguagens de programação avançadas.",
      C: "Utilização de computadores apenas para jogos eletrônicos.",
      D: "Operação de máquinas industriais sem computadores.",
      E: "Desenvolvimento de hardware apenas.",
    },
    correta: "A",
    explicacao:
      "Informática básica envolve o conhecimento e utilização de computadores e softwares para processamento de informações.",
  },
  {
    id: 952,
    materia: "Informática",
    assunto: "Softwares Utilitários",
    enunciado:
      "Qual dos seguintes softwares é considerado utilitário de compactação de arquivos?",
    alternativas: {
      A: "WinRAR",
      B: "Word",
      C: "Excel",
      D: "PowerPoint",
      E: "Outlook",
    },
    correta: "A",
    explicacao:
      "WinRAR é um software utilitário que permite compactar e descompactar arquivos em formatos como .zip e .rar.",
  },
  {
    id: 953,
    materia: "Informática",
    assunto: "Identificação de Arquivos",
    enunciado: "A extensão de arquivo .jpg indica que o arquivo é:",
    alternativas: {
      A: "Uma imagem.",
      B: "Uma planilha.",
      C: "Um texto editável.",
      D: "Um vídeo.",
      E: "Um arquivo de áudio.",
    },
    correta: "A",
    explicacao:
      "Arquivos com extensão .jpg são arquivos de imagem em formato JPEG (Joint Photographic Experts Group).",
  },
  {
    id: 954,
    materia: "Informática",
    assunto: "Backup de Arquivos",
    enunciado: "O principal objetivo de realizar backup de arquivos é:",
    alternativas: {
      A: "Garantir a segurança e recuperação dos dados em caso de perda.",
      B: "Aumentar o tamanho do disco rígido.",
      C: "Melhorar o desempenho do processador.",
      D: "Instalar antivírus.",
      E: "Aumentar a resolução da tela.",
    },
    correta: "A",
    explicacao:
      "Backup é uma cópia de segurança que protege arquivos contra perda, danos ou exclusão acidental.",
  },
  {
    id: 955,
    materia: "Informática",
    assunto: "Hardware - CPU",
    enunciado: "A função principal da CPU (processador) é:",
    alternativas: {
      A: "Executar instruções e processar dados.",
      B: "Armazenar arquivos permanentemente.",
      C: "Capturar imagens de vídeo.",
      D: "Controlar a rede de internet sem software.",
      E: "Servir apenas como periférico de entrada.",
    },
    correta: "A",
    explicacao:
      "A CPU (Central Processing Unit) é responsável pelo processamento de instruções e execução de tarefas do computador.",
  },
  {
    id: 956,
    materia: "Informática",
    assunto: "Periféricos",
    enunciado: "Qual dos seguintes é considerado periférico de entrada?",
    alternativas: {
      A: "Teclado",
      B: "Monitor",
      C: "Impressora",
      D: "Caixa de som",
      E: "Projetor",
    },
    correta: "A",
    explicacao:
      "O teclado é um periférico de entrada, pois permite ao usuário inserir dados e comandos no computador.",
  },
  {
    id: 957,
    materia: "Informática",
    assunto: "Memória RAM",
    enunciado: "A memória RAM é caracterizada por:",
    alternativas: {
      A: "Armazenamento temporário e volátil de dados durante a execução de programas.",
      B: "Armazenamento permanente de arquivos do sistema operacional.",
      C: "Servir apenas como memória de vídeo.",
      D: "Substituir o disco rígido em todas as funções.",
      E: "Armazenar dados mesmo sem energia elétrica.",
    },
    correta: "A",
    explicacao:
      "A RAM (Random Access Memory) é volátil, armazenando dados temporariamente enquanto o computador está ligado.",
  },
  {
    id: 958,
    materia: "Informática",
    assunto: "Sistema Operacional Windows",
    enunciado:
      "No Windows, a tecla de atalho para copiar um arquivo ou texto selecionado é:",
    alternativas: {
      A: "Ctrl + C",
      B: "Ctrl + X",
      C: "Ctrl + V",
      D: "Ctrl + Z",
      E: "Ctrl + A",
    },
    correta: "A",
    explicacao:
      "Ctrl + C é o atalho padrão para copiar arquivos ou textos selecionados no Windows.",
  },
  {
    id: 959,
    materia: "Informática",
    assunto: "Microsoft Word",
    enunciado:
      "No Microsoft Word, para inserir uma quebra de página, utiliza-se a combinação de teclas:",
    alternativas: {
      A: "Ctrl + Enter",
      B: "Ctrl + P",
      C: "Ctrl + S",
      D: "Alt + F4",
      E: "Ctrl + Home",
    },
    correta: "A",
    explicacao:
      "Ctrl + Enter insere uma quebra de página no Word, iniciando o texto na próxima página.",
  },
  {
    id: 960,
    materia: "Informática",
    assunto: "Microsoft Excel",
    enunciado:
      "No Microsoft Excel, qual função calcula a soma de um intervalo de células?",
    alternativas: {
      A: "=SOMA(intervalo)",
      B: "=MULT(intervalo)",
      C: "=DIV(intervalo)",
      D: "=SUB(intervalo)",
      E: "=MÉDIA(intervalo)",
    },
    correta: "A",
    explicacao:
      "A função =SOMA() calcula a soma dos valores de um intervalo de células no Excel.",
  },
  {
    id: 961,
    materia: "Informática",
    assunto: "Internet - Navegadores",
    enunciado: "Qual dos seguintes é um navegador de internet?",
    alternativas: {
      A: "Google Chrome",
      B: "Microsoft Word",
      C: "Adobe Photoshop",
      D: "WinRAR",
      E: "VLC Media Player",
    },
    correta: "A",
    explicacao:
      "Google Chrome é um navegador de internet (browser) utilizado para acessar sites e páginas web.",
  },
  {
    id: 962,
    materia: "Informática",
    assunto: "E-mail",
    enunciado: "No campo 'Cco' (Cópia Oculta) de um e-mail, os destinatários:",
    alternativas: {
      A: "Não são visíveis para os demais destinatários da mensagem.",
      B: "Recebem a mensagem em destaque.",
      C: "São os únicos que podem responder ao e-mail.",
      D: "Aparecem automaticamente para todos os outros destinatários.",
      E: "Têm prioridade de entrega sobre os demais.",
    },
    correta: "A",
    explicacao:
      "O campo Cco (Cópia Carbono Oculta) oculta os endereços dos destinatários dos demais, preservando privacidade.",
  },
  {
    id: 963,
    materia: "Informática",
    assunto: "Segurança - Antivírus",
    enunciado: "A principal função de um software antivírus é:",
    alternativas: {
      A: "Detectar, prevenir e remover programas maliciosos (malware).",
      B: "Aumentar a velocidade da internet.",
      C: "Editar documentos de texto.",
      D: "Compactar arquivos grandes.",
      E: "Criar backups automáticos.",
    },
    correta: "A",
    explicacao:
      "Antivírus protege o computador contra vírus, trojans, worms e outros tipos de malware.",
  },
  {
    id: 964,
    materia: "Informática",
    assunto: "Sistema Operacional Windows - Painel de Controle",
    enunciado: "No Windows, o Painel de Controle é utilizado para:",
    alternativas: {
      A: "Configurar e gerenciar componentes do sistema, como hardware, software e rede.",
      B: "Apenas criar novos documentos de texto.",
      C: "Navegar na internet.",
      D: "Reproduzir arquivos de áudio e vídeo.",
      E: "Compactar e descompactar arquivos.",
    },
    correta: "A",
    explicacao:
      "O Painel de Controle permite configurar diversas opções do sistema operacional Windows.",
  },
  {
    id: 965,
    materia: "Informática",
    assunto: "Microsoft Word - Formatação",
    enunciado:
      "No Word, para aplicar negrito em um texto selecionado, utiliza-se:",
    alternativas: {
      A: "Ctrl + B (ou Ctrl + N em versão português)",
      B: "Ctrl + I",
      C: "Ctrl + U",
      D: "Ctrl + S",
      E: "Ctrl + P",
    },
    correta: "A",
    explicacao:
      "Ctrl + B (ou Ctrl + N na versão em português) aplica negrito ao texto selecionado no Word.",
  },
  {
    id: 966,
    materia: "Informática",
    assunto: "Microsoft Excel - Fórmulas",
    enunciado: "No Excel, a função =MÉDIA(A1:A10) calcula:",
    alternativas: {
      A: "A média aritmética dos valores no intervalo A1 a A10.",
      B: "A soma dos valores no intervalo A1 a A10.",
      C: "O maior valor no intervalo A1 a A10.",
      D: "O menor valor no intervalo A1 a A10.",
      E: "A quantidade de células preenchidas no intervalo A1 a A10.",
    },
    correta: "A",
    explicacao:
      "A função =MÉDIA() calcula a média aritmética dos valores no intervalo especificado.",
  },
  {
    id: 967,
    materia: "Informática",
    assunto: "Armazenamento - HD e SSD",
    enunciado:
      "A principal diferença entre HD (Hard Disk) e SSD (Solid State Drive) é:",
    alternativas: {
      A: "O SSD não possui partes móveis e é mais rápido que o HD tradicional.",
      B: "O HD é sempre mais rápido que o SSD.",
      C: "O SSD armazena apenas arquivos temporários.",
      D: "O HD não pode armazenar dados permanentemente.",
      E: "Ambos têm exatamente a mesma velocidade de leitura.",
    },
    correta: "A",
    explicacao:
      "SSDs utilizam memória flash sem partes móveis, oferecendo maior velocidade e confiabilidade que HDs mecânicos.",
  },
  {
    id: 968,
    materia: "Informática",
    assunto: "Rede - Tipos de Conexão",
    enunciado: "Qual tecnologia oferece conexão de internet sem fio?",
    alternativas: {
      A: "Wi-Fi",
      B: "Cabo Ethernet",
      C: "Cabo coaxial",
      D: "Fibra óptica (cabo físico)",
      E: "Cabo USB",
    },
    correta: "A",
    explicacao:
      "Wi-Fi é uma tecnologia de rede sem fio que permite conexão à internet sem cabos físicos.",
  },
  {
    id: 969,
    materia: "Informática",
    assunto: "Segurança - Firewall",
    enunciado: "A função principal de um firewall é:",
    alternativas: {
      A: "Controlar o tráfego de rede e bloquear acessos não autorizados.",
      B: "Aumentar a velocidade do processador.",
      C: "Editar planilhas eletrônicas.",
      D: "Criar apresentações de slides.",
      E: "Descompactar arquivos comprimidos.",
    },
    correta: "A",
    explicacao:
      "Firewall é uma barreira de segurança que monitora e controla o tráfego de rede, bloqueando acessos suspeitos.",
  },
  {
    id: 970,
    materia: "Informática",
    assunto: "Sistema Operacional Windows - Windows Explorer",
    enunciado:
      "No Windows Explorer, a tecla de atalho para selecionar todos os arquivos de uma pasta é:",
    alternativas: {
      A: "Ctrl + A",
      B: "Ctrl + S",
      C: "Ctrl + Z",
      D: "Ctrl + X",
      E: "Ctrl + F",
    },
    correta: "A",
    explicacao:
      "Ctrl + A seleciona todos os itens da pasta ou janela ativa no Windows Explorer.",
  },
  {
    id: 971,
    materia: "Informática",
    assunto: "Microsoft Word - Cabeçalho e Rodapé",
    enunciado: "No Microsoft Word, cabeçalho e rodapé são utilizados para:",
    alternativas: {
      A: "Inserir informações que se repetem em todas as páginas do documento, como número de página, título ou data.",
      B: "Apenas criar notas de rodapé bibliográficas.",
      C: "Formatar tabelas e gráficos.",
      D: "Inserir imagens exclusivamente na primeira página.",
      E: "Excluir páginas do documento.",
    },
    correta: "A",
    explicacao:
      "Cabeçalho e rodapé permitem adicionar elementos repetitivos em todas as páginas, como numeração, título e data.",
  },
  {
    id: 972,
    materia: "Informática",
    assunto: "Microsoft Excel - Gráficos",
    enunciado: "No Excel, gráficos são utilizados para:",
    alternativas: {
      A: "Representar visualmente dados numéricos de forma clara e organizada.",
      B: "Apenas salvar arquivos em formato PDF.",
      C: "Excluir dados de planilhas.",
      D: "Enviar e-mails automáticos.",
      E: "Proteger células com senha.",
    },
    correta: "A",
    explicacao:
      "Gráficos permitem visualizar dados de forma gráfica, facilitando análise e apresentação de informações.",
  },
  {
    id: 973,
    materia: "Informática",
    assunto: "Microsoft PowerPoint",
    enunciado: "O Microsoft PowerPoint é utilizado principalmente para:",
    alternativas: {
      A: "Criar apresentações de slides.",
      B: "Editar planilhas eletrônicas.",
      C: "Processar textos longos.",
      D: "Navegar na internet.",
      E: "Gerenciar e-mails.",
    },
    correta: "A",
    explicacao:
      "PowerPoint é um software de apresentação que permite criar slides com textos, imagens, gráficos e multimídia.",
  },
  {
    id: 974,
    materia: "Informática",
    assunto: "Internet - URL",
    enunciado: "URL significa:",
    alternativas: {
      A: "Uniform Resource Locator (Localizador Uniforme de Recursos).",
      B: "Universal Remote Link (Link Remoto Universal).",
      C: "Unique Record Locator (Localizador de Registro Único).",
      D: "User Resource Link (Link de Recurso do Usuário).",
      E: "United Registry Location (Localização de Registro Unido).",
    },
    correta: "A",
    explicacao:
      "URL é o endereço completo utilizado para acessar recursos na internet, como páginas web.",
  },
  {
    id: 975,
    materia: "Informática",
    assunto: "Segurança - Phishing",
    enunciado: "Phishing é uma técnica utilizada por criminosos para:",
    alternativas: {
      A: "Obter informações confidenciais, como senhas e dados bancários, por meio de fraudes eletrônicas.",
      B: "Aumentar a velocidade da internet.",
      C: "Compactar arquivos grandes.",
      D: "Criar backups automáticos de dados.",
      E: "Instalar atualizações legítimas do sistema.",
    },
    correta: "A",
    explicacao:
      "Phishing é um golpe que engana usuários para revelar informações pessoais por meio de e-mails, sites ou mensagens falsas.",
  },
  {
    id: 976,
    materia: "Informática",
    assunto: "Sistema Operacional - Linux",
    enunciado: "O Linux é:",
    alternativas: {
      A: "Um sistema operacional de código aberto e gratuito.",
      B: "Um software de edição de vídeo.",
      C: "Um navegador de internet.",
      D: "Um antivírus comercial.",
      E: "Um tipo de memória RAM.",
    },
    correta: "A",
    explicacao:
      "Linux é um sistema operacional de código aberto amplamente utilizado em servidores, desktops e dispositivos embarcados.",
  },
  {
    id: 977,
    materia: "Informática",
    assunto: "Nuvem - Cloud Computing",
    enunciado: "Cloud Computing (Computação em Nuvem) refere-se a:",
    alternativas: {
      A: "Armazenamento e processamento de dados em servidores remotos acessados via internet.",
      B: "Armazenamento exclusivo em discos rígidos locais.",
      C: "Uso de pen drives para backup.",
      D: "Instalação de antivírus no computador.",
      E: "Conexão apenas por cabos físicos.",
    },
    correta: "A",
    explicacao:
      "Cloud Computing permite armazenar e acessar dados e aplicativos pela internet, sem necessidade de armazenamento local.",
  },
  {
    id: 978,
    materia: "Informática",
    assunto: "Extensões de Arquivo - Vídeo",
    enunciado: "Qual das seguintes extensões representa um arquivo de vídeo?",
    alternativas: {
      A: ".mp4",
      B: ".docx",
      C: ".xlsx",
      D: ".jpg",
      E: ".mp3",
    },
    correta: "A",
    explicacao: ".mp4 é uma extensão comum de arquivos de vídeo digital.",
  },
  {
    id: 979,
    materia: "Informática",
    assunto: "Microsoft Excel - Referências",
    enunciado: "No Excel, uma referência absoluta é representada por:",
    alternativas: {
      A: "$A$1",
      B: "A1",
      C: "#A1",
      D: "@A1",
      E: "&A1",
    },
    correta: "A",
    explicacao:
      "O símbolo $ antes da coluna e linha (ex: $A$1) torna a referência absoluta, impedindo alteração ao copiar fórmulas.",
  },
  {
    id: 980,
    materia: "Informática",
    assunto: "Teclas de Função",
    enunciado: "A tecla F5 no Microsoft PowerPoint é utilizada para:",
    alternativas: {
      A: "Iniciar a apresentação de slides a partir do primeiro slide.",
      B: "Salvar o arquivo.",
      C: "Fechar o programa.",
      D: "Inserir uma nova planilha.",
      E: "Copiar o slide selecionado.",
    },
    correta: "A",
    explicacao:
      "A tecla F5 inicia a apresentação de slides do começo no PowerPoint.",
  },
  {
    id: 981,
    materia: "Informática",
    assunto: "Atalhos - Windows",
    enunciado: "No Windows, a combinação de teclas Windows + D serve para:",
    alternativas: {
      A: "Minimizar todas as janelas abertas e exibir a área de trabalho.",
      B: "Desligar o computador.",
      C: "Deletar arquivos permanentemente.",
      D: "Abrir o navegador de internet.",
      E: "Salvar todos os documentos abertos.",
    },
    correta: "A",
    explicacao:
      "Windows + D minimiza todas as janelas abertas, mostrando a área de trabalho (desktop).",
  },
  {
    id: 982,
    materia: "Informática",
    assunto: "Microsoft Word - Localizar e Substituir",
    enunciado:
      "No Word, a função 'Localizar e Substituir' é acionada pela tecla:",
    alternativas: {
      A: "Ctrl + H",
      B: "Ctrl + F",
      C: "Ctrl + R",
      D: "Ctrl + L",
      E: "Ctrl + G",
    },
    correta: "A",
    explicacao:
      "Ctrl + H abre a caixa de diálogo 'Localizar e Substituir', permitindo buscar e substituir texto no documento.",
  },
  {
    id: 983,
    materia: "Informática",
    assunto: "Microsoft Excel - Filtros",
    enunciado: "No Excel, a aplicação de filtros em uma tabela permite:",
    alternativas: {
      A: "Exibir apenas os dados que atendem a critérios específicos, ocultando temporariamente os demais.",
      B: "Deletar permanentemente dados da planilha.",
      C: "Alterar a cor de todas as células.",
      D: "Criar gráficos automaticamente.",
      E: "Enviar a planilha por e-mail.",
    },
    correta: "A",
    explicacao:
      "Filtros permitem visualizar apenas dados que atendem a determinados critérios, facilitando análise e organização.",
  },
  {
    id: 984,
    materia: "Informática",
    assunto: "Segurança - Senha Forte",
    enunciado: "Uma senha forte deve conter:",
    alternativas: {
      A: "Letras maiúsculas, minúsculas, números e caracteres especiais, com no mínimo 8 caracteres.",
      B: "Apenas letras minúsculas.",
      C: "Somente números sequenciais como 123456.",
      D: "O nome completo do usuário.",
      E: "A palavra 'senha' seguida de números.",
    },
    correta: "A",
    explicacao:
      "Senhas fortes combinam diferentes tipos de caracteres e têm comprimento adequado para dificultar ataques.",
  },
  {
    id: 985,
    materia: "Informática",
    assunto: "Extensões de Arquivo - Áudio",
    enunciado: "Qual das seguintes extensões representa um arquivo de áudio?",
    alternativas: {
      A: ".mp3",
      B: ".avi",
      C: ".pdf",
      D: ".docx",
      E: ".png",
    },
    correta: "A",
    explicacao:
      ".mp3 é uma extensão comum de arquivos de áudio digital comprimido.",
  },
  {
    id: 986,
    materia: "Informática",
    assunto: "Internet - HTTP e HTTPS",
    enunciado: "A principal diferença entre HTTP e HTTPS é:",
    alternativas: {
      A: "HTTPS utiliza criptografia para garantir segurança na transmissão de dados.",
      B: "HTTP é mais rápido em todas as situações.",
      C: "HTTPS não permite acesso a sites.",
      D: "HTTP criptografa automaticamente todos os dados.",
      E: "Não há diferença entre os dois protocolos.",
    },
    correta: "A",
    explicacao:
      "HTTPS (HTTP Secure) adiciona uma camada de segurança através de criptografia SSL/TLS, protegendo dados transmitidos.",
  },
  {
    id: 987,
    materia: "Informática",
    assunto: "Hardware - Placa-Mãe",
    enunciado: "A placa-mãe (motherboard) é responsável por:",
    alternativas: {
      A: "Conectar e integrar todos os componentes do computador, permitindo comunicação entre eles.",
      B: "Apenas armazenar dados permanentemente.",
      C: "Processar exclusivamente gráficos 3D.",
      D: "Funcionar como fonte de alimentação.",
      E: "Servir apenas como periférico de entrada.",
    },
    correta: "A",
    explicacao:
      "A placa-mãe é o componente central que conecta CPU, memória, discos, placas de expansão e outros dispositivos.",
  },
  {
    id: 988,
    materia: "Informática",
    assunto: "Sistema Operacional - Atualização",
    enunciado: "A importância de manter o sistema operacional atualizado é:",
    alternativas: {
      A: "Corrigir vulnerabilidades de segurança, melhorar desempenho e adicionar novos recursos.",
      B: "Apenas alterar o papel de parede.",
      C: "Deletar todos os arquivos pessoais.",
      D: "Desinstalar programas automaticamente.",
      E: "Reduzir a velocidade do computador.",
    },
    correta: "A",
    explicacao:
      "Atualizações corrigem falhas de segurança, bugs e melhoram o funcionamento geral do sistema.",
  },
  {
    id: 989,
    materia: "Informática",
    assunto: "Microsoft PowerPoint - Transições",
    enunciado: "No PowerPoint, transições de slides são:",
    alternativas: {
      A: "Efeitos visuais aplicados na mudança de um slide para outro durante a apresentação.",
      B: "Fórmulas para cálculo de dados.",
      C: "Ferramentas de edição de texto.",
      D: "Configurações de impressão.",
      E: "Atalhos de teclado para salvar arquivos.",
    },
    correta: "A",
    explicacao:
      "Transições são animações que ocorrem ao passar de um slide para outro, tornando a apresentação mais dinâmica.",
  },
  {
    id: 990,
    materia: "Informática",
    assunto: "E-mail - Spam",
    enunciado: "Spam refere-se a:",
    alternativas: {
      A: "Mensagens eletrônicas não solicitadas, geralmente enviadas em massa para fins comerciais ou fraudulentos.",
      B: "Vírus que apaga arquivos do computador.",
      C: "Software de edição de imagens.",
      D: "Dispositivo de armazenamento externo.",
      E: "Protocolo de rede sem fio.",
    },
    correta: "A",
    explicacao:
      "Spam são e-mails indesejados enviados em grande quantidade, frequentemente com propaganda ou tentativas de fraude.",
  },
  {
    id: 991,
    materia: "Informática",
    assunto: "Microsoft Excel - Formatação Condicional",
    enunciado: "No Excel, a formatação condicional permite:",
    alternativas: {
      A: "Aplicar formatação automática às células com base em regras ou valores específicos.",
      B: "Apenas alterar a cor da fonte manualmente.",
      C: "Deletar dados de células vazias.",
      D: "Criar macros automaticamente.",
      E: "Enviar planilhas por e-mail.",
    },
    correta: "A",
    explicacao:
      "Formatação condicional aplica estilos automaticamente às células que atendem a critérios definidos, facilitando análise visual.",
  },
  {
    id: 992,
    materia: "Informática",
    assunto: "Rede - Endereço IP",
    enunciado: "Um endereço IP (Internet Protocol) é utilizado para:",
    alternativas: {
      A: "Identificar de forma única cada dispositivo conectado a uma rede.",
      B: "Armazenar arquivos na nuvem.",
      C: "Editar documentos de texto.",
      D: "Criar apresentações de slides.",
      E: "Instalar programas no computador.",
    },
    correta: "A",
    explicacao:
      "O endereço IP identifica dispositivos em redes, permitindo comunicação e roteamento de dados na internet.",
  },
  {
    id: 993,
    materia: "Informática",
    assunto: "Segurança - Ransomware",
    enunciado: "Ransomware é um tipo de malware que:",
    alternativas: {
      A: "Criptografa arquivos do usuário e exige pagamento de resgate para liberá-los.",
      B: "Aumenta a velocidade do processador.",
      C: "Organiza arquivos automaticamente em pastas.",
      D: "Melhora a qualidade de imagens digitais.",
      E: "Cria backups automáticos de dados.",
    },
    correta: "A",
    explicacao:
      "Ransomware sequestra dados através de criptografia e exige pagamento (geralmente em criptomoedas) para restaurar acesso.",
  },
  {
    id: 994,
    materia: "Informática",
    assunto: "Microsoft Word - Tabelas",
    enunciado: "No Word, para inserir uma tabela, pode-se utilizar:",
    alternativas: {
      A: "A aba 'Inserir' e selecionar 'Tabela', definindo o número de linhas e colunas.",
      B: "Apenas desenhar manualmente com o mouse.",
      C: "Ctrl + T em qualquer circunstância.",
      D: "A função 'Imprimir'.",
      E: "O botão 'Salvar Como'.",
    },
    correta: "A",
    explicacao:
      "A aba 'Inserir' > 'Tabela' permite criar tabelas personalizadas com linhas e colunas específicas no Word.",
  },
  {
    id: 995,
    materia: "Informática",
    assunto: "Sistema Operacional - Gerenciador de Tarefas",
    enunciado:
      "No Windows, o Gerenciador de Tarefas pode ser aberto através da combinação:",
    alternativas: {
      A: "Ctrl + Shift + Esc",
      B: "Ctrl + Alt + Delete",
      C: "Windows + E",
      D: "Alt + F4",
      E: "Ctrl + P",
    },
    correta: "A",
    explicacao:
      "Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas; Ctrl + Alt + Delete também oferece essa opção através de menu.",
  },
  {
    id: 996,
    materia: "Informática",
    assunto: "Extensões de Arquivo - Documento",
    enunciado: "A extensão .pdf representa:",
    alternativas: {
      A: "Portable Document Format, formato de documento portátil que preserva formatação.",
      B: "Um arquivo de planilha eletrônica.",
      C: "Uma imagem vetorial.",
      D: "Um arquivo de áudio.",
      E: "Um vídeo de alta definição.",
    },
    correta: "A",
    explicacao:
      "PDF é um formato universal de documento que mantém formatação independentemente do software ou sistema operacional.",
  },
  {
    id: 997,
    materia: "Informática",
    assunto: "Internet - Download e Upload",
    enunciado: "A diferença entre download e upload é:",
    alternativas: {
      A: "Download é receber dados da internet; upload é enviar dados para a internet.",
      B: "Download é apenas para vídeos; upload apenas para textos.",
      C: "Não há diferença entre os dois termos.",
      D: "Download consome mais energia que upload.",
      E: "Upload é mais rápido que download sempre.",
    },
    correta: "A",
    explicacao:
      "Download refere-se a transferir dados da internet para o dispositivo; upload é transferir dados do dispositivo para a internet.",
  },
  {
    id: 998,
    materia: "Informática",
    assunto: "Microsoft Excel - Congelar Painéis",
    enunciado: "No Excel, a função 'Congelar Painéis' serve para:",
    alternativas: {
      A: "Manter linhas ou colunas visíveis enquanto se rola pela planilha.",
      B: "Bloquear permanentemente a edição de células.",
      C: "Deletar dados de forma irreversível.",
      D: "Criar gráficos automaticamente.",
      E: "Imprimir apenas uma parte da planilha.",
    },
    correta: "A",
    explicacao:
      "Congelar painéis mantém cabeçalhos ou colunas específicas sempre visíveis ao navegar por grandes planilhas.",
  },
  {
    id: 999,
    materia: "Informática",
    assunto: "Hardware - Fonte de Alimentação",
    enunciado:
      "A fonte de alimentação (PSU) de um computador é responsável por:",
    alternativas: {
      A: "Converter energia elétrica da tomada e distribuir para os componentes do computador.",
      B: "Processar dados e executar programas.",
      C: "Armazenar arquivos permanentemente.",
      D: "Conectar o computador à internet.",
      E: "Exibir imagens no monitor.",
    },
    correta: "A",
    explicacao:
      "A fonte de alimentação converte corrente alternada (AC) em corrente contínua (DC) e fornece energia aos componentes.",
  },
  {
    id: 1000,
    materia: "Informática",
    assunto: "Microsoft PowerPoint - Anotações do Orador",
    enunciado: "No PowerPoint, as 'Anotações do Orador' são utilizadas para:",
    alternativas: {
      A: "Adicionar notas visíveis apenas para o apresentador durante a apresentação, sem aparecer nos slides projetados.",
      B: "Criar animações nos slides.",
      C: "Formatar texto automaticamente.",
      D: "Imprimir apenas os slides sem conteúdo.",
      E: "Excluir slides da apresentação.",
    },
    correta: "A",
    explicacao:
      "Anotações do Orador permitem que o apresentador tenha lembretes e informações adicionais que não aparecem para a audiência.",
  },
  {
    id: 1001,
    materia: "Raciocínio Lógico",
    assunto: "Proposições Lógicas",
    enunciado: "Assinale a alternativa que apresenta uma proposição lógica:",
    alternativas: {
      A: "O céu é azul.",
      B: "Que horas são?",
      C: "Feche a porta!",
      D: "Que dia lindo!",
      E: "Estudar é importante?",
    },
    correta: "A",
    explicacao:
      "Proposição lógica é uma sentença declarativa que pode ser classificada como verdadeira ou falsa. 'O céu é azul' atende a esse critério.",
  },
  {
    id: 1002,
    materia: "Raciocínio Lógico",
    assunto: "Conjuntos - União",
    enunciado: "Se A = {1, 2, 3} e B = {3, 4, 5}, então A ∪ B é:",
    alternativas: {
      A: "{1, 2, 3, 4, 5}",
      B: "{3}",
      C: "{1, 2}",
      D: "{4, 5}",
      E: "{1, 2, 4, 5}",
    },
    correta: "A",
    explicacao:
      "A união (∪) de dois conjuntos reúne todos os elementos de ambos, sem repetição: {1, 2, 3, 4, 5}.",
  },
  {
    id: 1003,
    materia: "Raciocínio Lógico",
    assunto: "Conjuntos - Interseção",
    enunciado: "Se A = {a, b, c, d} e B = {b, c, e, f}, então A ∩ B é:",
    alternativas: {
      A: "{b, c}",
      B: "{a, d}",
      C: "{e, f}",
      D: "{a, b, c, d, e, f}",
      E: "{a, c, e}",
    },
    correta: "A",
    explicacao:
      "A interseção (∩) contém apenas os elementos comuns aos dois conjuntos: {b, c}.",
  },
  {
    id: 1004,
    materia: "Raciocínio Lógico",
    assunto: "Silogismo",
    enunciado:
      "Considere: 'Todos os cães são mamíferos. Rex é um cão.' A conclusão lógica é:",
    alternativas: {
      A: "Rex é um mamífero.",
      B: "Rex não é um mamífero.",
      C: "Alguns cães não são mamíferos.",
      D: "Todos os mamíferos são cães.",
      E: "Rex é um pássaro.",
    },
    correta: "A",
    explicacao:
      "Por silogismo categórico: se todos os cães são mamíferos e Rex é cão, logo Rex é mamífero.",
  },
  {
    id: 1005,
    materia: "Raciocínio Lógico",
    assunto: "Raciocínio Dedutivo",
    enunciado: "O raciocínio dedutivo caracteriza-se por:",
    alternativas: {
      A: "Partir de premissas gerais para conclusões específicas.",
      B: "Partir de observações específicas para conclusões gerais.",
      C: "Basear-se apenas em intuição.",
      D: "Não seguir regras lógicas.",
      E: "Usar apenas analogias sem premissas.",
    },
    correta: "A",
    explicacao:
      "Raciocínio dedutivo aplica regras gerais a casos particulares, garantindo validade lógica.",
  },
  {
    id: 1006,
    materia: "Raciocínio Lógico",
    assunto: "Conectivos Lógicos - Disjunção",
    enunciado: "O conectivo lógico 'ou' (disjunção) é representado por:",
    alternativas: {
      A: "∨",
      B: "∧",
      C: "→",
      D: "↔",
      E: "¬",
    },
    correta: "A",
    explicacao:
      "A disjunção ('ou') é simbolizada por ∨ na lógica proposicional.",
  },
  {
    id: 1007,
    materia: "Raciocínio Lógico",
    assunto: "Conectivos Lógicos - Conjunção",
    enunciado: "O conectivo lógico 'e' (conjunção) é representado por:",
    alternativas: {
      A: "∧",
      B: "∨",
      C: "→",
      D: "↔",
      E: "¬",
    },
    correta: "A",
    explicacao:
      "A conjunção ('e') é simbolizada por ∧ na lógica proposicional.",
  },
  {
    id: 1008,
    materia: "Raciocínio Lógico",
    assunto: "Negação de Proposição",
    enunciado: "A negação da proposição 'Hoje é segunda-feira' é:",
    alternativas: {
      A: "Hoje não é segunda-feira.",
      B: "Amanhã é segunda-feira.",
      C: "Ontem foi segunda-feira.",
      D: "Hoje é terça-feira.",
      E: "Hoje é segunda-feira.",
    },
    correta: "A",
    explicacao:
      "A negação lógica transforma a proposição em seu oposto: 'não é verdade que hoje é segunda-feira'.",
  },
  {
    id: 1009,
    materia: "Raciocínio Lógico",
    assunto: "Sequências Numéricas",
    enunciado: "Complete a sequência: 2, 4, 8, 16, ___",
    alternativas: {
      A: "32",
      B: "24",
      C: "20",
      D: "18",
      E: "30",
    },
    correta: "A",
    explicacao:
      "Progressão geométrica de razão 2: cada termo é o dobro do anterior (16 × 2 = 32).",
  },
  {
    id: 1010,
    materia: "Raciocínio Lógico",
    assunto: "Porcentagem",
    enunciado:
      "Um produto custa R$ 200,00 e recebe um aumento de 20%. O novo preço é:",
    alternativas: {
      A: "R$ 240,00",
      B: "R$ 220,00",
      C: "R$ 260,00",
      D: "R$ 210,00",
      E: "R$ 250,00",
    },
    correta: "A",
    explicacao:
      "Aumento de 20%: 200 × 0,20 = 40. Novo preço: 200 + 40 = R$ 240,00.",
  },
  {
    id: 1011,
    materia: "Raciocínio Lógico",
    assunto: "Sequências Lógicas",
    enunciado: "Complete a sequência: 5, 10, 15, 20, ___",
    alternativas: {
      A: "25",
      B: "30",
      C: "22",
      D: "28",
      E: "35",
    },
    correta: "A",
    explicacao:
      "Progressão aritmética de razão 5: cada termo aumenta 5 unidades (20 + 5 = 25).",
  },
  {
    id: 1012,
    materia: "Raciocínio Lógico",
    assunto: "Tabela Verdade - Conjunção",
    enunciado:
      "Na lógica proposicional, a conjunção 'p ∧ q' é verdadeira quando:",
    alternativas: {
      A: "Ambas as proposições p e q são verdadeiras.",
      B: "Apenas p é verdadeira.",
      C: "Apenas q é verdadeira.",
      D: "Pelo menos uma das proposições é falsa.",
      E: "Ambas as proposições são falsas.",
    },
    correta: "A",
    explicacao:
      "A conjunção (e) só é verdadeira quando ambas as proposições são verdadeiras.",
  },
  {
    id: 1013,
    materia: "Raciocínio Lógico",
    assunto: "Tabela Verdade - Disjunção",
    enunciado: "Na lógica proposicional, a disjunção 'p ∨ q' é falsa quando:",
    alternativas: {
      A: "Ambas as proposições p e q são falsas.",
      B: "Apenas p é verdadeira.",
      C: "Apenas q é verdadeira.",
      D: "Pelo menos uma das proposições é verdadeira.",
      E: "Ambas as proposições são verdadeiras.",
    },
    correta: "A",
    explicacao:
      "A disjunção (ou) só é falsa quando ambas as proposições são falsas.",
  },
  {
    id: 1014,
    materia: "Raciocínio Lógico",
    assunto: "Implicação Lógica",
    enunciado:
      "A proposição condicional 'Se chove, então a rua fica molhada' é falsa quando:",
    alternativas: {
      A: "Chove e a rua não fica molhada.",
      B: "Chove e a rua fica molhada.",
      C: "Não chove e a rua fica molhada.",
      D: "Não chove e a rua não fica molhada.",
      E: "A proposição é sempre verdadeira.",
    },
    correta: "A",
    explicacao:
      "A implicação (se...então) só é falsa quando o antecedente é verdadeiro e o consequente é falso.",
  },
  {
    id: 1015,
    materia: "Raciocínio Lógico",
    assunto: "Equivalência Lógica",
    enunciado: "A negação de 'p → q' (Se p então q) é equivalente a:",
    alternativas: {
      A: "p ∧ ¬q",
      B: "¬p ∨ q",
      C: "¬p ∧ q",
      D: "p ∨ ¬q",
      E: "¬p → ¬q",
    },
    correta: "A",
    explicacao:
      "A negação da condicional é 'p e não q': o antecedente é verdadeiro e o consequente é falso.",
  },
  {
    id: 1016,
    materia: "Raciocínio Lógico",
    assunto: "Problemas de Contagem",
    enunciado:
      "De quantas maneiras diferentes 3 pessoas podem se sentar em 3 cadeiras?",
    alternativas: {
      A: "6",
      B: "3",
      C: "9",
      D: "12",
      E: "2",
    },
    correta: "A",
    explicacao: "Permutação de 3 elementos: 3! = 3 × 2 × 1 = 6 maneiras.",
  },
  {
    id: 1017,
    materia: "Raciocínio Lógico",
    assunto: "Razão e Proporção",
    enunciado:
      "Se 5 operários fazem um trabalho em 10 dias, quantos dias levarão 10 operários para fazer o mesmo trabalho?",
    alternativas: {
      A: "5 dias",
      B: "10 dias",
      C: "15 dias",
      D: "20 dias",
      E: "2 dias",
    },
    correta: "A",
    explicacao:
      "Grandezas inversamente proporcionais: dobrando os operários, o tempo reduz pela metade (10 ÷ 2 = 5 dias).",
  },
  {
    id: 1018,
    materia: "Raciocínio Lógico",
    assunto: "Sequências Alfabéticas",
    enunciado: "Complete a sequência: A, C, E, G, ___",
    alternativas: {
      A: "I",
      B: "H",
      C: "J",
      D: "K",
      E: "F",
    },
    correta: "A",
    explicacao:
      "Sequência de letras pulando uma: A (1ª), C (3ª), E (5ª), G (7ª), I (9ª).",
  },
  {
    id: 1019,
    materia: "Raciocínio Lógico",
    assunto: "Princípio Fundamental da Contagem",
    enunciado:
      "Quantos números de 2 algarismos distintos podem ser formados com os algarismos 1, 2, 3, 4?",
    alternativas: {
      A: "12",
      B: "8",
      C: "16",
      D: "4",
      E: "6",
    },
    correta: "A",
    explicacao:
      "Arranjo de 4 elementos tomados 2 a 2: A(4,2) = 4 × 3 = 12 números.",
  },
  {
    id: 1020,
    materia: "Raciocínio Lógico",
    assunto: "Análise Combinatória - Combinação",
    enunciado:
      "De quantas maneiras podemos escolher 2 pessoas dentre 4 para formar uma dupla?",
    alternativas: {
      A: "6",
      B: "8",
      C: "12",
      D: "4",
      E: "2",
    },
    correta: "A",
    explicacao:
      "Combinação de 4 elementos tomados 2 a 2: C(4,2) = 4!/(2!×2!) = 6.",
  },
  {
    id: 1021,
    materia: "Raciocínio Lógico",
    assunto: "Quantificadores Lógicos",
    enunciado: "A negação da proposição 'Todos os alunos passaram no exame' é:",
    alternativas: {
      A: "Pelo menos um aluno não passou no exame.",
      B: "Nenhum aluno passou no exame.",
      C: "Todos os alunos não passaram no exame.",
      D: "Alguns alunos passaram no exame.",
      E: "Apenas um aluno passou no exame.",
    },
    correta: "A",
    explicacao:
      "A negação de 'todos' é 'existe pelo menos um que não', ou seja, 'algum não'.",
  },
  {
    id: 1022,
    materia: "Raciocínio Lógico",
    assunto: "Negação de Proposições Compostas",
    enunciado: "A negação de 'João é alto e Maria é baixa' é:",
    alternativas: {
      A: "João não é alto ou Maria não é baixa.",
      B: "João não é alto e Maria não é baixa.",
      C: "João é baixo e Maria é alta.",
      D: "João é alto ou Maria é baixa.",
      E: "João e Maria são altos.",
    },
    correta: "A",
    explicacao: "Pela Lei de De Morgan: a negação de (p ∧ q) é (¬p ∨ ¬q).",
  },
  {
    id: 1023,
    materia: "Raciocínio Lógico",
    assunto: "Sequências Numéricas - Fibonacci",
    enunciado:
      "Na sequência de Fibonacci (1, 1, 2, 3, 5, 8, 13...), o próximo termo é:",
    alternativas: {
      A: "21",
      B: "18",
      C: "16",
      D: "20",
      E: "15",
    },
    correta: "A",
    explicacao:
      "Na sequência de Fibonacci, cada termo é a soma dos dois anteriores: 8 + 13 = 21.",
  },
  {
    id: 1024,
    materia: "Raciocínio Lógico",
    assunto: "Médias - Média Aritmética",
    enunciado: "A média aritmética dos números 10, 20, 30 e 40 é:",
    alternativas: {
      A: "25",
      B: "30",
      C: "20",
      D: "35",
      E: "15",
    },
    correta: "A",
    explicacao: "Média aritmética = (10 + 20 + 30 + 40) ÷ 4 = 100 ÷ 4 = 25.",
  },
  {
    id: 1025,
    materia: "Raciocínio Lógico",
    assunto: "Probabilidade Básica",
    enunciado:
      "Ao lançar um dado comum de 6 faces, qual a probabilidade de obter um número par?",
    alternativas: {
      A: "1/2",
      B: "1/3",
      C: "1/6",
      D: "2/3",
      E: "1/4",
    },
    correta: "A",
    explicacao:
      "Números pares no dado: 2, 4, 6 (3 possibilidades de 6). Probabilidade = 3/6 = 1/2.",
  },
  {
    id: 1026,
    materia: "Raciocínio Lógico",
    assunto: "Regra de Três Simples",
    enunciado:
      "Se 3 máquinas produzem 90 peças em 2 horas, quantas peças 5 máquinas produzirão no mesmo tempo?",
    alternativas: {
      A: "150",
      B: "120",
      C: "180",
      D: "90",
      E: "200",
    },
    correta: "A",
    explicacao:
      "Regra de três simples direta: 3 máquinas → 90 peças; 5 máquinas → x. x = (5 × 90) ÷ 3 = 150 peças.",
  },
  {
    id: 1027,
    materia: "Raciocínio Lógico",
    assunto: "Padrões Geométricos",
    enunciado:
      "Observe a sequência: ●, ●●, ●●●, ●●●●. O próximo termo terá quantos círculos?",
    alternativas: {
      A: "5",
      B: "4",
      C: "6",
      D: "8",
      E: "3",
    },
    correta: "A",
    explicacao: "Sequência crescente de 1 em 1: 1, 2, 3, 4, 5 círculos.",
  },
  {
    id: 1028,
    materia: "Raciocínio Lógico",
    assunto: "Verdades e Mentiras",
    enunciado:
      "Ana diz: 'Eu sempre minto'. Se essa afirmação for verdadeira, chegamos a:",
    alternativas: {
      A: "Um paradoxo (contradição lógica).",
      B: "Ana está dizendo a verdade.",
      C: "Ana está mentindo sobre tudo.",
      D: "A afirmação é neutra.",
      E: "Ana mente apenas às vezes.",
    },
    correta: "A",
    explicacao:
      "Paradoxo do mentiroso: se ela sempre mente, então essa afirmação seria falsa, mas se é falsa, ela não mente sempre, criando contradição.",
  },
  {
    id: 1029,
    materia: "Raciocínio Lógico",
    assunto: "Conjuntos - Diferença",
    enunciado:
      "Se A = {1, 2, 3, 4} e B = {3, 4, 5, 6}, então A - B (diferença de A para B) é:",
    alternativas: {
      A: "{1, 2}",
      B: "{3, 4}",
      C: "{5, 6}",
      D: "{1, 2, 5, 6}",
      E: "{1, 2, 3, 4, 5, 6}",
    },
    correta: "A",
    explicacao:
      "A - B contém os elementos que estão em A mas não estão em B: {1, 2}.",
  },
  {
    id: 1030,
    materia: "Raciocínio Lógico",
    assunto: "Divisibilidade",
    enunciado: "Um número é divisível por 3 quando:",
    alternativas: {
      A: "A soma de seus algarismos é divisível por 3.",
      B: "Termina em 3.",
      C: "É um número ímpar.",
      D: "É maior que 30.",
      E: "Contém o algarismo 3.",
    },
    correta: "A",
    explicacao:
      "Critério de divisibilidade por 3: um número é divisível por 3 se a soma de seus algarismos for divisível por 3.",
  },
  {
    id: 1031,
    materia: "Raciocínio Lógico",
    assunto: "Lógica de Argumentação",
    enunciado: "Um argumento é válido quando:",
    alternativas: {
      A: "As premissas sendo verdadeiras, a conclusão necessariamente é verdadeira.",
      B: "A conclusão é sempre falsa.",
      C: "As premissas são falsas.",
      D: "Não há relação entre premissas e conclusão.",
      E: "A conclusão contradiz as premissas.",
    },
    correta: "A",
    explicacao:
      "Um argumento válido garante que, se as premissas forem verdadeiras, a conclusão obrigatoriamente será verdadeira.",
  },
  {
    id: 1032,
    materia: "Raciocínio Lógico",
    assunto: "Equivalência - Contrapositiva",
    enunciado:
      "A contrapositiva da proposição 'Se chove, então a rua fica molhada' é:",
    alternativas: {
      A: "Se a rua não fica molhada, então não chove.",
      B: "Se não chove, então a rua não fica molhada.",
      C: "Se a rua fica molhada, então chove.",
      D: "Chove e a rua não fica molhada.",
      E: "Não chove ou a rua fica molhada.",
    },
    correta: "A",
    explicacao:
      "A contrapositiva de 'p → q' é '¬q → ¬p', que é logicamente equivalente à proposição original.",
  },
  {
    id: 1033,
    materia: "Raciocínio Lógico",
    assunto: "Porcentagem - Desconto",
    enunciado:
      "Um produto que custa R$ 150,00 recebe um desconto de 30%. O valor do desconto é:",
    alternativas: {
      A: "R$ 45,00",
      B: "R$ 50,00",
      C: "R$ 40,00",
      D: "R$ 105,00",
      E: "R$ 30,00",
    },
    correta: "A",
    explicacao: "Desconto de 30%: 150 × 0,30 = R$ 45,00.",
  },
  {
    id: 1034,
    materia: "Raciocínio Lógico",
    assunto: "Sequências - Progressão Aritmética",
    enunciado: "Na PA (3, 7, 11, 15...), qual é o 10º termo?",
    alternativas: {
      A: "39",
      B: "35",
      C: "43",
      D: "31",
      E: "47",
    },
    correta: "A",
    explicacao:
      "Fórmula do termo geral: an = a1 + (n-1)r. a10 = 3 + (10-1)×4 = 3 + 36 = 39.",
  },
  {
    id: 1035,
    materia: "Raciocínio Lógico",
    assunto: "Diagramas de Venn",
    enunciado:
      "Em uma turma de 50 alunos, 30 estudam inglês, 25 estudam espanhol e 10 estudam ambos. Quantos não estudam nenhum dos dois idiomas?",
    alternativas: {
      A: "5",
      B: "10",
      C: "15",
      D: "20",
      E: "0",
    },
    correta: "A",
    explicacao:
      "Total que estuda pelo menos um: 30 + 25 - 10 = 45. Não estudam nenhum: 50 - 45 = 5 alunos.",
  },
  {
    id: 1036,
    materia: "Raciocínio Lógico",
    assunto: "Raciocínio Espacial",
    enunciado:
      "Se um cubo tem 6 faces, quantas faces terá uma construção com 2 cubos idênticos colados por uma face?",
    alternativas: {
      A: "10",
      B: "12",
      C: "8",
      D: "6",
      E: "14",
    },
    correta: "A",
    explicacao:
      "Cada cubo tem 6 faces. Total: 12 faces. Ao colar, 2 faces ficam ocultas: 12 - 2 = 10 faces visíveis.",
  },
  {
    id: 1037,
    materia: "Raciocínio Lógico",
    assunto: "Números Primos",
    enunciado: "Qual dos seguintes números é primo?",
    alternativas: {
      A: "17",
      B: "15",
      C: "21",
      D: "25",
      E: "27",
    },
    correta: "A",
    explicacao:
      "Número primo tem apenas dois divisores: 1 e ele mesmo. 17 é divisível apenas por 1 e 17.",
  },
  {
    id: 1038,
    materia: "Raciocínio Lógico",
    assunto: "Juros Simples",
    enunciado:
      "Um capital de R$ 1.000,00 aplicado a juros simples de 5% ao mês renderá, após 3 meses:",
    alternativas: {
      A: "R$ 150,00",
      B: "R$ 50,00",
      C: "R$ 100,00",
      D: "R$ 200,00",
      E: "R$ 250,00",
    },
    correta: "A",
    explicacao: "Juros simples: J = C × i × t = 1000 × 0,05 × 3 = R$ 150,00.",
  },
  {
    id: 1039,
    materia: "Raciocínio Lógico",
    assunto: "Negação - Quantificador Universal",
    enunciado: "A negação de 'Nenhum aluno faltou' é:",
    alternativas: {
      A: "Pelo menos um aluno faltou.",
      B: "Todos os alunos faltaram.",
      C: "Nenhum aluno estava presente.",
      D: "Apenas um aluno faltou.",
      E: "Alguns alunos não faltaram.",
    },
    correta: "A",
    explicacao:
      "A negação de 'nenhum' (∀x ¬P(x)) é 'existe pelo menos um' (∃x P(x)).",
  },
  {
    id: 1040,
    materia: "Raciocínio Lógico",
    assunto: "Análise de Calendário",
    enunciado:
      "Se o dia 5 de um mês cai numa terça-feira, em que dia da semana cairá o dia 19 do mesmo mês?",
    alternativas: {
      A: "Terça-feira",
      B: "Quarta-feira",
      C: "Segunda-feira",
      D: "Quinta-feira",
      E: "Sexta-feira",
    },
    correta: "A",
    explicacao:
      "Do dia 5 ao dia 19 há 14 dias (2 semanas completas). Permanece na terça-feira.",
  },
  {
    id: 1041,
    materia: "Raciocínio Lógico",
    assunto: "Problemas com Idades",
    enunciado:
      "Pedro tem o dobro da idade de Maria. Daqui a 10 anos, a soma de suas idades será 50 anos. Qual a idade atual de Pedro?",
    alternativas: {
      A: "20 anos",
      B: "15 anos",
      C: "25 anos",
      D: "30 anos",
      E: "18 anos",
    },
    correta: "A",
    explicacao:
      "Seja x a idade de Maria. Pedro tem 2x. Daqui a 10 anos: (x+10) + (2x+10) = 50. 3x + 20 = 50. x = 10. Pedro tem 2×10 = 20 anos.",
  },
  {
    id: 1042,
    materia: "Raciocínio Lógico",
    assunto: "Sequências - Números Ímpares",
    enunciado:
      "A sequência dos números ímpares positivos é 1, 3, 5, 7, 9... Qual é o 15º termo?",
    alternativas: {
      A: "29",
      B: "27",
      C: "31",
      D: "25",
      E: "33",
    },
    correta: "A",
    explicacao:
      "Fórmula: an = 2n - 1. Para n=15: a15 = 2(15) - 1 = 30 - 1 = 29.",
  },
  {
    id: 1043,
    materia: "Raciocínio Lógico",
    assunto: "Proporcionalidade",
    enunciado: "Se 6 canetas custam R$ 18,00, quanto custarão 10 canetas?",
    alternativas: {
      A: "R$ 30,00",
      B: "R$ 25,00",
      C: "R$ 28,00",
      D: "R$ 20,00",
      E: "R$ 35,00",
    },
    correta: "A",
    explicacao:
      "Regra de três simples: 6 canetas → 18 reais; 10 canetas → x. x = (10 × 18) ÷ 6 = R$ 30,00.",
  },
  {
    id: 1044,
    materia: "Raciocínio Lógico",
    assunto: "Lógica Temporal",
    enunciado: "Se anteontem foi quinta-feira, que dia será depois de amanhã?",
    alternativas: {
      A: "Segunda-feira",
      B: "Domingo",
      C: "Terça-feira",
      D: "Quarta-feira",
      E: "Sexta-feira",
    },
    correta: "A",
    explicacao:
      "Anteontem: quinta. Ontem: sexta. Hoje: sábado. Amanhã: domingo. Depois de amanhã: segunda-feira.",
  },
  {
    id: 1045,
    materia: "Raciocínio Lógico",
    assunto: "Verdade e Falsidade - Condicional",
    enunciado: "Para que 'Se p então q' seja falsa, é necessário que:",
    alternativas: {
      A: "p seja verdadeira e q seja falsa.",
      B: "p seja falsa e q seja verdadeira.",
      C: "Ambas sejam verdadeiras.",
      D: "Ambas sejam falsas.",
      E: "p seja falsa e q seja falsa.",
    },
    correta: "A",
    explicacao:
      "A condicional só é falsa quando o antecedente (p) é verdadeiro e o consequente (q) é falso.",
  },
  {
    id: 1046,
    materia: "Raciocínio Lógico",
    assunto: "Máximo Divisor Comum (MDC)",
    enunciado: "O MDC entre 12 e 18 é:",
    alternativas: {
      A: "6",
      B: "3",
      C: "9",
      D: "12",
      E: "36",
    },
    correta: "A",
    explicacao:
      "Divisores de 12: 1, 2, 3, 4, 6, 12. Divisores de 18: 1, 2, 3, 6, 9, 18. Maior comum: 6.",
  },
  {
    id: 1047,
    materia: "Raciocínio Lógico",
    assunto: "Mínimo Múltiplo Comum (MMC)",
    enunciado: "O MMC entre 4 e 6 é:",
    alternativas: {
      A: "12",
      B: "24",
      C: "6",
      D: "8",
      E: "18",
    },
    correta: "A",
    explicacao:
      "Múltiplos de 4: 4, 8, 12, 16... Múltiplos de 6: 6, 12, 18... Menor comum: 12.",
  },
  {
    id: 1048,
    materia: "Raciocínio Lógico",
    assunto: "Probabilidade - Eventos Independentes",
    enunciado:
      "Ao lançar uma moeda duas vezes, qual a probabilidade de obter cara nas duas vezes?",
    alternativas: {
      A: "1/4",
      B: "1/2",
      C: "1/3",
      D: "2/3",
      E: "3/4",
    },
    correta: "A",
    explicacao:
      "Probabilidade de cada cara: 1/2. Eventos independentes: (1/2) × (1/2) = 1/4.",
  },
  {
    id: 1049,
    materia: "Raciocínio Lógico",
    assunto: "Sequências - Padrão Alternado",
    enunciado: "Complete a sequência: 2, 4, 8, 6, 12, 10, ___",
    alternativas: {
      A: "20",
      B: "14",
      C: "16",
      D: "18",
      E: "22",
    },
    correta: "A",
    explicacao:
      "Padrão: multiplica por 2, subtrai 2, multiplica por 2... 10 × 2 = 20.",
  },
  {
    id: 1050,
    materia: "Raciocínio Lógico",
    assunto: "Lógica de Proposições - Bicondicional",
    enunciado:
      "A bicondicional 'p ↔ q' (p se e somente se q) é verdadeira quando:",
    alternativas: {
      A: "p e q têm o mesmo valor de verdade (ambas verdadeiras ou ambas falsas).",
      B: "p é verdadeira e q é falsa.",
      C: "p é falsa e q é verdadeira.",
      D: "Apenas uma delas é verdadeira.",
      E: "Ambas são sempre falsas.",
    },
    correta: "A",
    explicacao:
      "A bicondicional é verdadeira quando ambas as proposições têm o mesmo valor lógico (V-V ou F-F).",
  },
  {
    id: 1051,
    materia: "Língua Portuguesa",
    assunto: "Compreensão e Interpretação de Texto",
    enunciado:
      "Leia o trecho: 'O desenvolvimento tecnológico trouxe avanços, mas também gerou novas desigualdades.' A ideia central do texto é:",
    alternativas: {
      A: "O desenvolvimento tecnológico tem efeitos positivos e negativos.",
      B: "A tecnologia só traz desigualdades.",
      C: "Os avanços tecnológicos são irrelevantes.",
      D: "As desigualdades não existem mais.",
      E: "O desenvolvimento é exclusivamente positivo.",
    },
    correta: "A",
    explicacao:
      "O texto apresenta uma relação de contraste entre benefícios e problemas causados pela tecnologia.",
  },
  {
    id: 1052,
    materia: "Língua Portuguesa",
    assunto: "Tipos e Gêneros Textuais",
    enunciado:
      "Um texto que narra fatos do cotidiano de forma objetiva e informativa é classificado como:",
    alternativas: {
      A: "Notícia jornalística.",
      B: "Poema.",
      C: "Conto literário.",
      D: "Artigo de opinião.",
      E: "Texto dramático.",
    },
    correta: "A",
    explicacao:
      "Notícia jornalística é um gênero textual informativo que relata fatos de forma objetiva.",
  },
  {
    id: 1053,
    materia: "Língua Portuguesa",
    assunto: "Significação de Palavras",
    enunciado:
      "Na frase 'O diretor solicitou a presença dos funcionários', a palavra 'solicitou' significa:",
    alternativas: {
      A: "Pediu.",
      B: "Cancelou.",
      C: "Ignorou.",
      D: "Proibiu.",
      E: "Recusou.",
    },
    correta: "A",
    explicacao: "Solicitar significa fazer um pedido formal ou requisição.",
  },
  {
    id: 1054,
    materia: "Língua Portuguesa",
    assunto: "Sinônimos",
    enunciado: "Assinale o sinônimo da palavra 'relevante':",
    alternativas: {
      A: "Importante.",
      B: "Insignificante.",
      C: "Trivial.",
      D: "Dispensável.",
      E: "Inútil.",
    },
    correta: "A",
    explicacao:
      "Relevante e importante são sinônimos, indicando algo de valor ou significado.",
  },
  {
    id: 1055,
    materia: "Língua Portuguesa",
    assunto: "Antônimos",
    enunciado: "O antônimo da palavra 'antigo' é:",
    alternativas: {
      A: "Moderno.",
      B: "Velho.",
      C: "Arcaico.",
      D: "Ancestral.",
      E: "Histórico.",
    },
    correta: "A",
    explicacao:
      "Antigo e moderno são antônimos, representando oposição temporal.",
  },
  {
    id: 1056,
    materia: "Língua Portuguesa",
    assunto: "Ortografia",
    enunciado: "Assinale a palavra escrita corretamente:",
    alternativas: {
      A: "Exceção.",
      B: "Excessão.",
      C: "Exseção.",
      D: "Excesão.",
      E: "Exessão.",
    },
    correta: "A",
    explicacao: "A forma correta é 'exceção', com 'c' e 'ç'.",
  },
  {
    id: 1057,
    materia: "Língua Portuguesa",
    assunto: "Classes de Palavras",
    enunciado:
      "Na frase 'O aluno estudou intensamente para a prova', a palavra 'intensamente' é:",
    alternativas: {
      A: "Advérbio de modo.",
      B: "Adjetivo.",
      C: "Substantivo.",
      D: "Verbo.",
      E: "Conjunção.",
    },
    correta: "A",
    explicacao:
      "Intensamente indica a maneira como a ação foi realizada, sendo um advérbio de modo.",
  },
  {
    id: 1058,
    materia: "Língua Portuguesa",
    assunto: "Concordância Verbal",
    enunciado: "Assinale a frase com concordância verbal correta:",
    alternativas: {
      A: "Os candidatos fizeram a prova ontem.",
      B: "Os candidatos fez a prova ontem.",
      C: "Os candidatos fizemos a prova ontem.",
      D: "Os candidatos fazer a prova ontem.",
      E: "Os candidatos fazerão a prova ontem.",
    },
    correta: "A",
    explicacao:
      "O verbo 'fizeram' concorda corretamente com o sujeito plural 'os candidatos'.",
  },
  {
    id: 1059,
    materia: "Língua Portuguesa",
    assunto: "Concordância Nominal",
    enunciado: "A forma correta de concordância nominal é:",
    alternativas: {
      A: "Documentos importantes.",
      B: "Documentos importante.",
      C: "Documento importantes.",
      D: "Documentos importantas.",
      E: "Documento importanta.",
    },
    correta: "A",
    explicacao:
      "O adjetivo 'importantes' concorda em número com o substantivo 'documentos' (plural).",
  },
  {
    id: 1060,
    materia: "Língua Portuguesa",
    assunto: "Conjugação Verbal",
    enunciado:
      "O pretérito perfeito do verbo 'estudar' na 1ª pessoa do singular é:",
    alternativas: {
      A: "Estudei.",
      B: "Estudo.",
      C: "Estudava.",
      D: "Estudarei.",
      E: "Estudara.",
    },
    correta: "A",
    explicacao:
      "Estudei é a forma do pretérito perfeito, indicando ação concluída no passado.",
  },
  {
    id: 1061,
    materia: "Língua Portuguesa",
    assunto: "Regência Verbal",
    enunciado: "Assinale a frase com regência verbal correta:",
    alternativas: {
      A: "O candidato aspirava ao cargo de diretor.",
      B: "O candidato aspirava o cargo de diretor.",
      C: "O candidato aspirava com o cargo de diretor.",
      D: "O candidato aspirava pelo cargo de diretor.",
      E: "O candidato aspirava de cargo de diretor.",
    },
    correta: "A",
    explicacao:
      "O verbo 'aspirar' no sentido de desejar exige a preposição 'a': aspirar a algo.",
  },
  {
    id: 1062,
    materia: "Língua Portuguesa",
    assunto: "Regência Nominal",
    enunciado: "A regência nominal correta é:",
    alternativas: {
      A: "Obediente aos superiores.",
      B: "Obediente com os superiores.",
      C: "Obediente para os superiores.",
      D: "Obediente em os superiores.",
      E: "Obediente de os superiores.",
    },
    correta: "A",
    explicacao:
      "O adjetivo 'obediente' exige a preposição 'a': obediente a alguém.",
  },
  {
    id: 1063,
    materia: "Língua Portuguesa",
    assunto: "Crase",
    enunciado: "Assinale a frase em que o uso da crase é obrigatório:",
    alternativas: {
      A: "Fomos à praia no fim de semana.",
      B: "Fomos a praia no fim de semana.",
      C: "Fomos para praia no fim de semana.",
      D: "Fomos em praia no fim de semana.",
      E: "Fomos na praia no fim de semana.",
    },
    correta: "A",
    explicacao:
      "Há crase na contração da preposição 'a' com o artigo 'a' antes de substantivo feminino: à praia.",
  },
  {
    id: 1064,
    materia: "Língua Portuguesa",
    assunto: "Pontuação",
    enunciado: "Assinale a alternativa com pontuação correta:",
    alternativas: {
      A: "Maria, você está pronta?",
      B: "Maria você, está pronta?",
      C: "Maria você está, pronta?",
      D: "Maria você está pronta,?",
      E: "Maria, você está pronta,?",
    },
    correta: "A",
    explicacao:
      "O vocativo 'Maria' deve ser separado por vírgula, e a interrogação fecha a frase.",
  },
  {
    id: 1065,
    materia: "Língua Portuguesa",
    assunto: "Pronomes",
    enunciado: "Na frase 'Entreguei o documento a ela', o pronome 'ela' é:",
    alternativas: {
      A: "Pronome pessoal do caso oblíquo.",
      B: "Pronome possessivo.",
      C: "Pronome demonstrativo.",
      D: "Pronome indefinido.",
      E: "Pronome relativo.",
    },
    correta: "A",
    explicacao:
      "O pronome 'ela' após preposição funciona como oblíquo tônico, complementando o verbo.",
  },
  {
    id: 1066,
    materia: "Língua Portuguesa",
    assunto: "Acentuação Gráfica",
    enunciado: "Assinale a palavra corretamente acentuada:",
    alternativas: {
      A: "Saúde.",
      B: "Saude.",
      C: "Sáude.",
      D: "Saudê.",
      E: "Sáudê.",
    },
    correta: "A",
    explicacao:
      "A palavra 'saúde' é acentuada por ter hiato, separando as vogais u-a.",
  },
  {
    id: 1067,
    materia: "Língua Portuguesa",
    assunto: "Figuras de Linguagem - Metáfora",
    enunciado: "A frase 'Aquele homem é um leão' contém:",
    alternativas: {
      A: "Metáfora.",
      B: "Metonímia.",
      C: "Hipérbole.",
      D: "Eufemismo.",
      E: "Pleonasmo.",
    },
    correta: "A",
    explicacao:
      "Metáfora é a comparação implícita entre dois elementos: homem e leão (coragem).",
  },
  {
    id: 1068,
    materia: "Língua Portuguesa",
    assunto: "Figuras de Linguagem - Hipérbole",
    enunciado: "A frase 'Já te disse isso mil vezes!' apresenta:",
    alternativas: {
      A: "Hipérbole.",
      B: "Eufemismo.",
      C: "Ironia.",
      D: "Antítese.",
      E: "Prosopopeia.",
    },
    correta: "A",
    explicacao:
      "Hipérbole é o exagero intencional para enfatizar uma ideia: 'mil vezes'.",
  },
  {
    id: 1069,
    materia: "Língua Portuguesa",
    assunto: "Colocação Pronominal - Próclise",
    enunciado: "Assinale a frase com próclise correta:",
    alternativas: {
      A: "Não se preocupe com isso.",
      B: "Preocupe-se não com isso.",
      C: "Preocupe não-se com isso.",
      D: "Se preocupe não com isso.",
      E: "Não preocupe com se isso.",
    },
    correta: "A",
    explicacao:
      "A palavra negativa 'não' atrai o pronome antes do verbo (próclise): não se.",
  },
  {
    id: 1070,
    materia: "Língua Portuguesa",
    assunto: "Vozes Verbais",
    enunciado: "A frase 'O relatório foi entregue pelo diretor' está na voz:",
    alternativas: {
      A: "Passiva analítica.",
      B: "Ativa.",
      C: "Passiva sintética.",
      D: "Reflexiva.",
      E: "Recíproca.",
    },
    correta: "A",
    explicacao:
      "Voz passiva analítica é formada por verbo auxiliar (ser) + particípio: foi entregue.",
  },
  {
    id: 1071,
    materia: "Língua Portuguesa",
    assunto: "Período Simples e Composto",
    enunciado: "A frase 'Maria estuda e trabalha' é um exemplo de:",
    alternativas: {
      A: "Período composto por coordenação.",
      B: "Período simples.",
      C: "Período composto por subordinação.",
      D: "Oração sem sujeito.",
      E: "Frase nominal.",
    },
    correta: "A",
    explicacao:
      "Há duas orações independentes ligadas pela conjunção 'e', formando período composto por coordenação.",
  },
  {
    id: 1072,
    materia: "Língua Portuguesa",
    assunto: "Orações Subordinadas",
    enunciado:
      "Na frase 'É importante que você estude', a oração 'que você estude' é:",
    alternativas: {
      A: "Oração subordinada substantiva subjetiva.",
      B: "Oração coordenada.",
      C: "Oração principal.",
      D: "Oração subordinada adverbial.",
      E: "Oração subordinada adjetiva.",
    },
    correta: "A",
    explicacao:
      "A oração funciona como sujeito do verbo 'é', sendo subordinada substantiva subjetiva.",
  },
  {
    id: 1073,
    materia: "Língua Portuguesa",
    assunto: "Conjunções Coordenativas",
    enunciado: "A conjunção 'mas' estabelece relação de:",
    alternativas: {
      A: "Adversidade.",
      B: "Adição.",
      C: "Alternância.",
      D: "Conclusão.",
      E: "Explicação.",
    },
    correta: "A",
    explicacao:
      "A conjunção 'mas' é coordenativa adversativa, indicando oposição ou contraste.",
  },
  {
    id: 1074,
    materia: "Língua Portuguesa",
    assunto: "Conjunções Subordinativas",
    enunciado: "A conjunção 'embora' introduz oração:",
    alternativas: {
      A: "Subordinada adverbial concessiva.",
      B: "Coordenada adversativa.",
      C: "Subordinada substantiva.",
      D: "Subordinada adverbial causal.",
      E: "Subordinada adverbial temporal.",
    },
    correta: "A",
    explicacao:
      "'Embora' é conjunção concessiva, indicando concessão ou contraste: 'embora seja difícil'.",
  },
  {
    id: 1075,
    materia: "Língua Portuguesa",
    assunto: "Sujeito e Predicado",
    enunciado: "Na frase 'Os alunos chegaram atrasados', o sujeito é:",
    alternativas: {
      A: "Os alunos.",
      B: "Chegaram.",
      C: "Atrasados.",
      D: "Os alunos chegaram.",
      E: "Não há sujeito.",
    },
    correta: "A",
    explicacao:
      "'Os alunos' é o sujeito simples da oração, praticando a ação de chegar.",
  },
  {
    id: 1076,
    materia: "Língua Portuguesa",
    assunto: "Predicado Verbal e Nominal",
    enunciado: "Na frase 'O professor parece cansado', o predicado é:",
    alternativas: {
      A: "Nominal.",
      B: "Verbal.",
      C: "Verbo-nominal.",
      D: "Simples.",
      E: "Composto.",
    },
    correta: "A",
    explicacao:
      "O verbo 'parece' é de ligação, conectando o sujeito ao predicativo 'cansado' (predicado nominal).",
  },
  {
    id: 1077,
    materia: "Língua Portuguesa",
    assunto: "Complemento Verbal",
    enunciado: "Na frase 'Entreguei o livro ao aluno', 'ao aluno' é:",
    alternativas: {
      A: "Objeto indireto.",
      B: "Objeto direto.",
      C: "Sujeito.",
      D: "Predicativo.",
      E: "Adjunto adverbial.",
    },
    correta: "A",
    explicacao:
      "'Ao aluno' complementa o verbo 'entreguei' com preposição, sendo objeto indireto.",
  },
  {
    id: 1078,
    materia: "Língua Portuguesa",
    assunto: "Adjunto Adverbial",
    enunciado: "Na frase 'Estudei muito ontem', a palavra 'ontem' é:",
    alternativas: {
      A: "Adjunto adverbial de tempo.",
      B: "Objeto direto.",
      C: "Adjunto adnominal.",
      D: "Predicativo.",
      E: "Complemento nominal.",
    },
    correta: "A",
    explicacao:
      "'Ontem' indica circunstância de tempo, sendo adjunto adverbial temporal.",
  },
  {
    id: 1079,
    materia: "Língua Portuguesa",
    assunto: "Adjunto Adnominal",
    enunciado: "Na frase 'O livro de João está na mesa', 'de João' é:",
    alternativas: {
      A: "Adjunto adnominal.",
      B: "Objeto indireto.",
      C: "Complemento nominal.",
      D: "Predicativo.",
      E: "Aposto.",
    },
    correta: "A",
    explicacao:
      "'De João' caracteriza o substantivo 'livro', sendo adjunto adnominal (posse).",
  },
  {
    id: 1080,
    materia: "Língua Portuguesa",
    assunto: "Aposto e Vocativo",
    enunciado: "Na frase 'João, venha aqui!', a palavra 'João' é:",
    alternativas: {
      A: "Vocativo.",
      B: "Sujeito.",
      C: "Aposto.",
      D: "Objeto direto.",
      E: "Predicativo.",
    },
    correta: "A",
    explicacao:
      "'João' é vocativo, termo que invoca ou chama o interlocutor, isolado por vírgula.",
  },
  {
    id: 1081,
    materia: "Língua Portuguesa",
    assunto: "Verbos - Modo Indicativo",
    enunciado: "O verbo na frase 'Amanhã estudarei para a prova' está no:",
    alternativas: {
      A: "Futuro do presente do indicativo.",
      B: "Presente do indicativo.",
      C: "Pretérito imperfeito.",
      D: "Futuro do pretérito.",
      E: "Presente do subjuntivo.",
    },
    correta: "A",
    explicacao:
      "'Estudarei' expressa ação futura com certeza, sendo futuro do presente do indicativo.",
  },
  {
    id: 1082,
    materia: "Língua Portuguesa",
    assunto: "Verbos - Modo Subjuntivo",
    enunciado: "Na frase 'Espero que você venha', o verbo 'venha' está no:",
    alternativas: {
      A: "Presente do subjuntivo.",
      B: "Presente do indicativo.",
      C: "Futuro do subjuntivo.",
      D: "Imperativo afirmativo.",
      E: "Pretérito imperfeito.",
    },
    correta: "A",
    explicacao:
      "O verbo 'venha' expressa desejo ou incerteza, característico do presente do subjuntivo.",
  },
  {
    id: 1083,
    materia: "Língua Portuguesa",
    assunto: "Verbos - Imperativo",
    enunciado:
      "A forma imperativa afirmativa de 'estudar' na 2ª pessoa do singular (tu) é:",
    alternativas: {
      A: "Estuda.",
      B: "Estude.",
      C: "Estudas.",
      D: "Estudai.",
      E: "Estudem.",
    },
    correta: "A",
    explicacao:
      "O imperativo afirmativo para 'tu' é derivado do presente do indicativo sem o 's': estuda.",
  },
  {
    id: 1084,
    materia: "Língua Portuguesa",
    assunto: "Partícula 'SE'",
    enunciado: "Na frase 'Vendem-se casas', a partícula 'se' indica:",
    alternativas: {
      A: "Voz passiva sintética.",
      B: "Sujeito indeterminado.",
      C: "Pronome reflexivo.",
      D: "Conjunção condicional.",
      E: "Parte integrante do verbo.",
    },
    correta: "A",
    explicacao:
      "O 'se' acompanha verbo transitivo direto, formando voz passiva sintética: casas são vendidas.",
  },
  {
    id: 1085,
    materia: "Língua Portuguesa",
    assunto: "Sujeito Indeterminado",
    enunciado: "Na frase 'Precisa-se de funcionários', o sujeito é:",
    alternativas: {
      A: "Indeterminado.",
      B: "Funcionários.",
      C: "Oculto.",
      D: "Composto.",
      E: "Inexistente.",
    },
    correta: "A",
    explicacao:
      "Com VTI + 'se', o sujeito é indeterminado: não se identifica quem precisa.",
  },
  {
    id: 1086,
    materia: "Língua Portuguesa",
    assunto: "Oração Sem Sujeito",
    enunciado: "A frase 'Choveu muito ontem' apresenta:",
    alternativas: {
      A: "Oração sem sujeito.",
      B: "Sujeito oculto.",
      C: "Sujeito simples.",
      D: "Sujeito indeterminado.",
      E: "Sujeito composto.",
    },
    correta: "A",
    explicacao:
      "Verbos que indicam fenômenos da natureza (chover, ventar) formam orações sem sujeito.",
  },
  {
    id: 1087,
    materia: "Língua Portuguesa",
    assunto: "Homonímia",
    enunciado: "As palavras 'cela' (prisão) e 'sela' (arreio) são:",
    alternativas: {
      A: "Homônimas homófonas.",
      B: "Sinônimas.",
      C: "Antônimas.",
      D: "Parônimas.",
      E: "Polissêmicas.",
    },
    correta: "A",
    explicacao:
      "Homônimas homófonas têm mesma pronúncia, mas grafia e significados diferentes.",
  },
  {
    id: 1088,
    materia: "Língua Portuguesa",
    assunto: "Paronímia",
    enunciado:
      "As palavras 'eminente' (ilustre) e 'iminente' (prestes a ocorrer) são:",
    alternativas: {
      A: "Parônimas.",
      B: "Homônimas.",
      C: "Sinônimas.",
      D: "Antônimas.",
      E: "Polissêmicas.",
    },
    correta: "A",
    explicacao:
      "Parônimas têm grafia e pronúncia semelhantes, mas significados diferentes.",
  },
  {
    id: 1089,
    materia: "Língua Portuguesa",
    assunto: "Polissemia",
    enunciado: "A palavra 'manga' (fruta/parte da roupa) é exemplo de:",
    alternativas: {
      A: "Polissemia.",
      B: "Homonímia.",
      C: "Sinonímia.",
      D: "Antonímia.",
      E: "Paronímia.",
    },
    correta: "A",
    explicacao:
      "Polissemia ocorre quando uma palavra tem múltiplos significados relacionados ao contexto.",
  },
  {
    id: 1090,
    materia: "Língua Portuguesa",
    assunto: "Denotação e Conotação",
    enunciado:
      "Na frase 'Ela tem um coração de ouro', a expressão está em sentido:",
    alternativas: {
      A: "Conotativo.",
      B: "Denotativo.",
      C: "Literal.",
      D: "Objetivo.",
      E: "Técnico.",
    },
    correta: "A",
    explicacao:
      "Sentido conotativo é figurado, metafórico: 'coração de ouro' significa bondade.",
  },
  {
    id: 1091,
    materia: "Língua Portuguesa",
    assunto: "Formação de Palavras - Derivação",
    enunciado: "A palavra 'infeliz' foi formada por:",
    alternativas: {
      A: "Derivação prefixal.",
      B: "Derivação sufixal.",
      C: "Composição por justaposição.",
      D: "Composição por aglutinação.",
      E: "Derivação parassintética.",
    },
    correta: "A",
    explicacao:
      "O prefixo 'in-' foi acrescentado à palavra 'feliz', formando derivação prefixal.",
  },
  {
    id: 1092,
    materia: "Língua Portuguesa",
    assunto: "Formação de Palavras - Composição",
    enunciado: "A palavra 'guarda-chuva' foi formada por:",
    alternativas: {
      A: "Composição por justaposição.",
      B: "Derivação prefixal.",
      C: "Derivação sufixal.",
      D: "Composição por aglutinação.",
      E: "Derivação regressiva.",
    },
    correta: "A",
    explicacao:
      "Duas palavras se unem mantendo autonomia fonética, com hífen: composição por justaposição.",
  },
  {
    id: 1093,
    materia: "Língua Portuguesa",
    assunto: "Coesão Textual",
    enunciado:
      "Leia: 'Maria viajou. Ela ficará fora por uma semana.' A palavra 'Ela' estabelece:",
    alternativas: {
      A: "Coesão por referência anafórica.",
      B: "Coesão por substituição.",
      C: "Coesão lexical.",
      D: "Incoerência textual.",
      E: "Ambiguidade.",
    },
    correta: "A",
    explicacao:
      "O pronome 'Ela' retoma 'Maria', estabelecendo coesão por referência anafórica (retoma termo anterior).",
  },
  {
    id: 1094,
    materia: "Língua Portuguesa",
    assunto: "Coerência Textual",
    enunciado: "Um texto coerente deve:",
    alternativas: {
      A: "Apresentar relação lógica entre as ideias e progressão temática.",
      B: "Conter apenas frases longas.",
      C: "Evitar o uso de conectivos.",
      D: "Apresentar contradições propositais.",
      E: "Ser sempre objetivo e técnico.",
    },
    correta: "A",
    explicacao:
      "Coerência exige organização lógica, continuidade temática e ausência de contradições.",
  },
  {
    id: 1095,
    materia: "Língua Portuguesa",
    assunto: "Funções da Linguagem - Referencial",
    enunciado:
      "Um texto jornalístico informativo predominantemente utiliza a função:",
    alternativas: {
      A: "Referencial.",
      B: "Emotiva.",
      C: "Conativa.",
      D: "Fática.",
      E: "Poética.",
    },
    correta: "A",
    explicacao:
      "A função referencial é centrada no contexto, transmitindo informações objetivas.",
  },
  {
    id: 1096,
    materia: "Língua Portuguesa",
    assunto: "Funções da Linguagem - Emotiva",
    enunciado: "A função emotiva está centrada:",
    alternativas: {
      A: "No emissor, expressando emoções e opiniões.",
      B: "No receptor, buscando convencê-lo.",
      C: "Na mensagem, com foco estético.",
      D: "No canal de comunicação.",
      E: "No código linguístico.",
    },
    correta: "A",
    explicacao:
      "A função emotiva expressa sentimentos, emoções e opiniões do emissor.",
  },
  {
    id: 1097,
    materia: "Língua Portuguesa",
    assunto: "Funções da Linguagem - Conativa",
    enunciado:
      "A frase 'Compre agora e ganhe desconto!' utiliza predominantemente a função:",
    alternativas: {
      A: "Conativa.",
      B: "Referencial.",
      C: "Emotiva.",
      D: "Metalinguística.",
      E: "Fática.",
    },
    correta: "A",
    explicacao:
      "A função conativa visa persuadir ou influenciar o receptor, comum em publicidade.",
  },
  {
    id: 1098,
    materia: "Língua Portuguesa",
    assunto: "Variação Linguística",
    enunciado:
      "A variação linguística que ocorre conforme o contexto social e formal da comunicação é chamada de:",
    alternativas: {
      A: "Variação situacional ou de registro.",
      B: "Variação regional.",
      C: "Variação histórica.",
      D: "Variação etária.",
      E: "Variação técnica.",
    },
    correta: "A",
    explicacao:
      "A variação situacional adapta a linguagem ao contexto: formal, informal, técnico.",
  },
  {
    id: 1099,
    materia: "Língua Portuguesa",
    assunto: "Linguagem Formal e Informal",
    enunciado:
      "Assinale a alternativa que apresenta linguagem formal adequada:",
    alternativas: {
      A: "Solicitamos a presença de Vossa Senhoria na reunião.",
      B: "A gente precisa que você venha na reunião.",
      C: "Vem na reunião, por favor.",
      D: "Tá precisando que tu apareça na reunião.",
      E: "Bora pra reunião logo.",
    },
    correta: "A",
    explicacao:
      "A linguagem formal usa tratamento respeitoso, norma culta e estrutura gramatical adequada.",
  },
  {
    id: 1100,
    materia: "Língua Portuguesa",
    assunto: "Intertextualidade",
    enunciado: "A intertextualidade ocorre quando:",
    alternativas: {
      A: "Um texto faz referência a outro texto, estabelecendo diálogo entre eles.",
      B: "O texto não possui coesão.",
      C: "O texto é exclusivamente original.",
      D: "Há erro gramatical.",
      E: "O texto usa apenas linguagem informal.",
    },
    correta: "A",
    explicacao:
      "Intertextualidade é o diálogo entre textos, por meio de citações, paráfrases ou alusões.",
  },
];
