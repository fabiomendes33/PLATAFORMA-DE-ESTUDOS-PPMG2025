// simulado01.js - SIMULADO PPMG 2025
const simulado01 = {
  titulo: "SIMULADO PPMG 2025 - Prova Completa",
  duracao: 240, // 4 horas em minutos
  questoes: [
    {
      id: 2011,
      materia: "Língua Portuguesa",
      assunto: "Período Composto",
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
      id: 2012,
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
      id: 2013,
      materia: "Língua Portuguesa",
      assunto: "Conjunções",
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
      id: 2014,
      materia: "Língua Portuguesa",
      assunto: "Sujeito",
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
      id: 2015,
      materia: "Língua Portuguesa",
      assunto: "Predicado",
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
      id: 2016,
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
      id: 2017,
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
      id: 2018,
      materia: "Língua Portuguesa",
      assunto: "Vocativo",
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
      id: 2019,
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
      id: 2020,
      materia: "Língua Portuguesa",
      assunto: "Partícula SE",
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
      id: 2021,
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
      id: 2022,
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
        "Verbos que indicam fenômenos da natureza (chover) formam orações sem sujeito.",
    },
    {
      id: 2023,
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
      id: 2024,
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
      id: 2025,
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
      id: 2026,
      materia: "Língua Portuguesa",
      assunto: "Formação de Palavras",
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
      id: 2027,
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
        "O pronome 'Ela' retoma 'Maria', estabelecendo coesão por referência anafórica.",
    },
    {
      id: 2028,
      materia: "Língua Portuguesa",
      assunto: "Funções da Linguagem",
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
      id: 2029,
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
      id: 2030,
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
    // ==========================================
    // RACIOCÍNIO LÓGICO (10 QUESTÕES: 2031-2040)
    // ==========================================

    {
      id: 2031,
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
        "Proposição lógica é uma sentença declarativa que pode ser classificada como verdadeira ou falsa.",
    },

    {
      id: 2032,
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
        "A união (∪) de dois conjuntos reúne todos os elementos de ambos, sem repetição.",
    },

    {
      id: 2033,
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
      id: 2034,
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
      id: 2035,
      materia: "Raciocínio Lógico",
      assunto: "Negação de Proposição",
      enunciado:
        "A negação da proposição 'Todos os alunos passaram no exame' é:",
      alternativas: {
        A: "Pelo menos um aluno não passou no exame.",
        B: "Nenhum aluno passou no exame.",
        C: "Todos os alunos não passaram no exame.",
        D: "Alguns alunos passaram no exame.",
        E: "Apenas um aluno passou no exame.",
      },
      correta: "A",
      explicacao: "A negação de 'todos' é 'existe pelo menos um que não'.",
    },

    {
      id: 2036,
      materia: "Raciocínio Lógico",
      assunto: "Probabilidade",
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
      id: 2037,
      materia: "Raciocínio Lógico",
      assunto: "Regra de Três",
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
        "Regra de três simples direta: 3 máquinas → 90 peças; 5 máquinas → x. x = (5 × 90) ÷ 3 = 150.",
    },

    {
      id: 2038,
      materia: "Raciocínio Lógico",
      assunto: "Análise Combinatória",
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
      id: 2039,
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
        "Paradoxo do mentiroso: se ela sempre mente, então essa afirmação seria falsa, criando contradição.",
    },

    {
      id: 2040,
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

    // ==========================================
    // DIREITO PENAL (10 QUESTÕES: 2041-2050)
    // ==========================================

    {
      id: 2041,
      materia: "Direito Penal",
      assunto: "Conceito de Crime",
      enunciado: "Considera-se crime, de acordo com o Código Penal:",
      alternativas: {
        A: "A conduta tpica, antijurídica e culpável, dolosa ou culposa.",
        B: "Apenas a conduta que seja típica e dolosa.",
        C: "Toda ação humana, mesmo lícita, se causar dano.",
        D: "Apenas condutas previstas em lei federal.",
        E: "Apenas condutas dolosas praticadas por maiores de idade.",
      },
      correta: "A",
      explicacao:
        "Crime é a conduta humana típica, antijurídica e culpável (Arts. 13-25 CP).",
    },

    {
      id: 2042,
      materia: "Direito Penal",
      assunto: "Imputabilidade Penal",
      enunciado: "São inimputáveis:",
      alternativas: {
        A: "Menores de 18 anos e aqueles que, por doença mental, não podem entender o caráter ilícito da conduta.",
        B: "Apenas menores de 16 anos.",
        C: "Todas as pessoas com transtornos mentais.",
        D: "Pessoas alcoolizadas.",
        E: "Apenas os menores de 21 anos.",
      },
      correta: "A",
      explicacao:
        "Inimputabilidade: menores de 18 anos e incapazes de entender a ilicitude (Art. 26-28 CP).",
    },

    {
      id: 2043,
      materia: "Direito Penal",
      assunto: "Penas",
      enunciado: "As penas previstas no Código Penal são:",
      alternativas: {
        A: "Privativas de liberdade, restritivas de direitos e multa.",
        B: "Apenas privativas de liberdade.",
        C: "Apenas multa.",
        D: "Privativas de liberdade e corporais.",
        E: "Apenas restritivas de direitos.",
      },
      correta: "A",
      explicacao: "O CP prevê três tipos de penas (Art. 32 CP).",
    },

    {
      id: 2044,
      materia: "Direito Penal",
      assunto: "Homicídio",
      enunciado: "Homiídio privilegiado ocorre quando:",
      alternativas: {
        A: "O agente atua por relevante valor moral ou social ou sob emoção intensa.",
        B: "Há uso de veneno.",
        C: "Há motivo fútil.",
        D: "A vítima é criança.",
        E: "O crime é culposo.",
      },
      correta: "A",
      explicacao:
        "Homicídio privilegiado: relevante valor moral/social ou emoção (Art. 121, §1º CP).",
    },

    {
      id: 2045,
      materia: "Direito Penal",
      assunto: "Furto",
      enunciado: "O furto caracteriza-se por:",
      alternativas: {
        A: "Subtrair coisa móvel alheia, sem violência à pessoa.",
        B: "Subtrair coisa móvel alheia, com violência.",
        C: "Apropriar-se de coisa própria.",
        D: "Danificar patrimônio público.",
        E: "Tomar coisa emprestada sem devolver.",
      },
      correta: "A",
      explicacao:
        "Furto é subtração sem violência ou grave ameaça (Art. 155 CP).",
    },

    {
      id: 2046,
      materia: "Direito Penal",
      assunto: "Roubo",
      enunciado: "O roubo se diferencia do furto por:",
      alternativas: {
        A: "Haver violência ou grave ameaça à pessoa.",
        B: "Ser praticado durante a noite.",
        C: "Envolver apenas bens públicos.",
        D: "Não haver subtração.",
        E: "Ser sempre qualificado.",
      },
      correta: "A",
      explicacao: "Roubo exige violência ou grave ameaça (Art. 157 CP).",
    },

    {
      id: 2047,
      materia: "Direito Penal",
      assunto: "Estupro",
      enunciado: "O crime de estupro configura-se quando há:",
      alternativas: {
        A: "Conjunção carnal ou ato libidinoso mediante violência ou grave ameaça.",
        B: "Apenas conjunção carnal com menor de idade.",
        C: "Qualquer contato físico não consentido.",
        D: "Apenas beijo forçado.",
        E: "Violência sem conotação sexual.",
      },
      correta: "A",
      explicacao:
        "Estupro: conjunção carnal ou ato libidinoso com violência (Art. 213 CP).",
    },

    {
      id: 2048,
      materia: "Direito Penal",
      assunto: "Peculato",
      enunciado: "O crime de peculato caracteriza-se por:",
      alternativas: {
        A: "Funcionário público apropriar-se de dinheiro ou bem que tem acesso em razão do cargo.",
        B: "Particular roubar dinheiro público.",
        C: "Funcionário faltar ao trabalho.",
        D: "Atraso no pagamento de tributos.",
        E: "Desvio de verba privada.",
      },
      correta: "A",
      explicacao:
        "Peculato: apropriação por funcionário público (Art. 312 CP).",
    },

    {
      id: 2049,
      materia: "Direito Penal",
      assunto: "Legítima Defesa",
      enunciado: "A legítima defesa exclui:",
      alternativas: {
        A: "A ilicitude do fato.",
        B: "Apenas a culpabilidade.",
        C: "Apenas a tipicidade.",
        D: "Nenhum elemento do crime.",
        E: "Apenas a pena.",
      },
      correta: "A",
      explicacao: "Legítima defesa é excludente de ilicitude (Art. 23-25 CP).",
    },

    {
      id: 2050,
      materia: "Direito Penal",
      assunto: "Concurso de Crimes",
      enunciado: "No concurso material de crimes:",
      alternativas: {
        A: "As penas são somadas.",
        B: "Aplica-se apenas a pena mais grave.",
        C: "Não há pena.",
        D: "As penas são divididas.",
        E: "Aplica-se apenas multa.",
      },
      correta: "A",
      explicacao: "Concurso material: somam-se as penas (Art. 69 CP).",
    },

    // ==========================================
    // DIREITO CONSTITUCIONAL (10 QUESTÕES: 2051-2060)
    // ==========================================

    {
      id: 2051,
      materia: "Direito Constitucional",
      assunto: "Direitos Fundamentais - Art. 5º",
      enunciado: "A inviolabilidade do sigilo de correspondência:",
      alternativas: {
        A: "Não é absoluta, podendo ser relativizada em investigação criminal.",
        B: "É absoluta, sem exceções.",
        C: "Aplica-se apenas a brasileiros natos.",
        D: "Pode ser violada por interesse político.",
        E: "Não existe na Constituição.",
      },
      correta: "A",
      explicacao:
        "O sigilo pode ser relativizado em casos excepcionais (Art. 5º, XII CF).",
    },

    {
      id: 2052,
      materia: "Direito Constitucional",
      assunto: "Administração Pública - Art. 37",
      enunciado: "Os princípios da Administração Pública são:",
      alternativas: {
        A: "Legalidade, impessoalidade, moralidade, publicidade e eficiência.",
        B: "Apenas legalidade e moralidade.",
        C: "Apenas publicidade.",
        D: "Legalidade e eficácia.",
        E: "Apenas impessoalidade.",
      },
      correta: "A",
      explicacao:
        "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência (Art. 37 CF).",
    },

    {
      id: 2053,
      materia: "Direito Constitucional",
      assunto: "Segurança Pública - Art. 144",
      enunciado: "A polícia militar tem função:",
      alternativas: {
        A: "Preventiva e ostensiva.",
        B: "Apenas investigativa.",
        C: "Apenas repressiva.",
        D: "De polcia judiciária.",
        E: "Exclusivamente administrativa.",
      },
      correta: "A",
      explicacao: "PM: policiamento ostensivo e preventivo (Art. 144, §5º CF).",
    },

    {
      id: 2054,
      materia: "Direito Constitucional",
      assunto: "Habeas Corpus",
      enunciado: "O habeas corpus protege:",
      alternativas: {
        A: "A liberdade de locomoção.",
        B: "Apenas a propriedade.",
        C: "Apenas direitos políticos.",
        D: "Apenas a honra.",
        E: "Apenas o patrimônio.",
      },
      correta: "A",
      explicacao:
        "Habeas corpus: proteção à liberdade de locomoção (Art. 5º, LXVIII CF).",
    },

    {
      id: 2055,
      materia: "Direito Constitucional",
      assunto: "Estado de Defesa",
      enunciado: "O estado de defesa pode ser decretado:",
      alternativas: {
        A: "Pelo Presidente da República, em situação de grave ameaça à ordem pública.",
        B: "Apenas pelo Congresso Nacional.",
        C: "Por qualquer governador.",
        D: "Apenas em tempo de guerra.",
        E: "Por decisão judicial.",
      },
      correta: "A",
      explicacao:
        "Estado de defesa: decreto presidencial em situação grave (Art. 136 CF).",
    },

    {
      id: 2056,
      materia: "Direito Constitucional",
      assunto: "Dignidade da Pessoa Humana",
      enunciado: "A dignidade da pessoa humana é:",
      alternativas: {
        A: "Fundamento da República Federativa do Brasil.",
        B: "Apenas objetivo da República.",
        C: "Princípio exclusivo do Direito Penal.",
        D: "Norma sem aplicação prática.",
        E: "Direito apenas de brasileiros.",
      },
      correta: "A",
      explicacao: "Dignidade: fundamento da República (Art. 1º, III CF).",
    },

    {
      id: 2057,
      materia: "Direito Constitucional",
      assunto: "Direito de Propriedade",
      enunciado: "O direito de propriedade:",
      alternativas: {
        A: "Deve atender à função social.",
        B: "É absoluto, sem restrições.",
        C: "Não pode ser limitado.",
        D: "Aplica-se apenas a imóveis rurais.",
        E: "Não existe no Brasil.",
      },
      correta: "A",
      explicacao: "Propriedade deve atender função social (Art. 5º, XXIII CF).",
    },

    {
      id: 2058,
      materia: "Direito Constitucional",
      assunto: "Concurso Público",
      enunciado: "O concurso público é obrigatório para:",
      alternativas: {
        A: "Cargos efetivos, exceto cargos em comissão.",
        B: "Todos os cargos sem exceção.",
        C: "Apenas cargos federais.",
        D: "Apenas cargos estaduais.",
        E: "Nenhum cargo.",
      },
      correta: "A",
      explicacao: "Concurso obrigatório para cargos efetivos (Art. 37, II CF).",
    },

    {
      id: 2059,
      materia: "Direito Constitucional",
      assunto: "Princípio da Igualdade",
      enunciado: "O princípio da igualdade:",
      alternativas: {
        A: "Permite ações afirmativas para corrigir desigualdades históricas.",
        B: "Proíbe qualquer discriminação, inclusive positiva.",
        C: "Aplica-se apenas no Direito Civil.",
        D: "É opcional.",
        E: "Não existe na Constituição.",
      },
      correta: "A",
      explicacao: "Igualdade admite ações afirmativas (Art. 5º, caput CF).",
    },

    {
      id: 2060,
      materia: "Direito Constitucional",
      assunto: "Direitos Sociais",
      enunciado: "São direitos sociais previstos na Constituição:",
      alternativas: {
        A: "Educação, saúde, trabalho, moradia, lazer e segurança.",
        B: "Apenas educação.",
        C: "Apenas saúde.",
        D: "Apenas trabalho.",
        E: "Não há direitos sociais na CF.",
      },
      correta: "A",
      explicacao: "Direitos sociais estão no Art. 6º CF.",
    },

    // ==========================================
    // INFORMÁTICA (15 QUESTÕES: 2061-2075)
    // ==========================================

    {
      id: 2061,
      materia: "Informática",
      assunto: "Hardware",
      enunciado:
        "O componente responsável pelo processamento de dados no computador é:",
      alternativas: {
        A: "CPU (Processador).",
        B: "HD (Disco Rígido).",
        C: "Monitor.",
        D: "Teclado.",
        E: "Mouse.",
      },
      correta: "A",
      explicacao:
        "A CPU (Central Processing Unit) é responsável pelo processamento.",
    },

    {
      id: 2062,
      materia: "Informática",
      assunto: "Software",
      enunciado: "São exemplos de sistemas operacionais:",
      alternativas: {
        A: "Windows, Linux e macOS.",
        B: "Word, Excel e PowerPoint.",
        C: "Chrome, Firefox e Edge.",
        D: "Photoshop, CorelDraw e Illustrator.",
        E: "Apenas Windows.",
      },
      correta: "A",
      explicacao:
        "Sistemas operacionais gerenciam o hardware e software do computador.",
    },

    {
      id: 2063,
      materia: "Informática",
      assunto: "Internet",
      enunciado: "O protocolo utilizado para navegação na web é:",
      alternativas: {
        A: "HTTP/HTTPS.",
        B: "FTP.",
        C: "SMTP.",
        D: "POP3.",
        E: "IMAP.",
      },
      correta: "A",
      explicacao:
        "HTTP (HyperText Transfer Protocol) é usado para páginas web.",
    },

    {
      id: 2064,
      materia: "Informática",
      assunto: "Segurança da Informação",
      enunciado:
        "Um programa malicioso que se propaga automaticamente pela rede é chamado de:",
      alternativas: {
        A: "Worm (verme).",
        B: "Antivírus.",
        C: "Firewall.",
        D: "Backup.",
        E: "Sistema operacional.",
      },
      correta: "A",
      explicacao: "Worm é um malware que se propaga automaticamente.",
    },

    {
      id: 2065,
      materia: "Informática",
      assunto: "Microsoft Word",
      enunciado: "No Word, a tecla de atalho para copiar texto é:",
      alternativas: {
        A: "Ctrl + C.",
        B: "Ctrl + V.",
        C: "Ctrl + X.",
        D: "Ctrl + Z.",
        E: "Ctrl + A.",
      },
      correta: "A",
      explicacao: "Ctrl + C copia o texto selecionado.",
    },

    {
      id: 2066,
      materia: "Informática",
      assunto: "Microsoft Excel",
      enunciado: "No Excel, a função SOMA serve para:",
      alternativas: {
        A: "Somar valores de células.",
        B: "Multiplicar valores.",
        C: "Dividir valores.",
        D: "Contar células vazias.",
        E: "Formatar células.",
      },
      correta: "A",
      explicacao: "A função SOMA adiciona valores de um intervalo de células.",
    },

    {
      id: 2067,
      materia: "Informática",
      assunto: "E-mail",
      enunciado: "O campo 'CCO' (Cópia Oculta) em um e-mail serve para:",
      alternativas: {
        A: "Enviar cópia sem que os outros destinatários vejam.",
        B: "Cancelar o envio.",
        C: "Criar uma nova mensagem.",
        D: "Excluir o e-mail.",
        E: "Marcar como spam.",
      },
      correta: "A",
      explicacao: "CCO (Cópia Carbon Oculta) oculta o destinatário dos demais.",
    },

    {
      id: 2068,
      materia: "Informática",
      assunto: "Armazenamento",
      enunciado: "A capacidade de 1 GB (Gigabyte) equivale a:",
      alternativas: {
        A: "1024 MB (Megabytes).",
        B: "1000 KB (Kilobytes).",
        C: "100 MB.",
        D: "10 TB (Terabytes).",
        E: "1 MB.",
      },
      correta: "A",
      explicacao: "1 GB = 1024 MB na computação.",
    },

    {
      id: 2069,
      materia: "Informática",
      assunto: "Navegadores",
      enunciado: "São exemplos de navegadores web:",
      alternativas: {
        A: "Chrome, Firefox, Edge e Safari.",
        B: "Word, Excel e PowerPoint.",
        C: "Windows, Linux e macOS.",
        D: "Photoshop e CorelDraw.",
        E: "Apenas Internet Explorer.",
      },
      correta: "A",
      explicacao: "Navegadores permitem acessar sites na internet.",
    },

    {
      id: 2070,
      materia: "Informática",
      assunto: "Cloud Computing",
      enunciado: "Cloud Computing (Computação em Nuvem) refere-se a:",
      alternativas: {
        A: "Armazenamento e processamento de dados pela internet.",
        B: "Apenas backup local.",
        C: "Instalação de programas no computador.",
        D: "Uso de pen drive.",
        E: "Gravação de CD/DVD.",
      },
      correta: "A",
      explicacao:
        "Cloud permite armazenar e processar dados remotamente via internet.",
    },

    {
      id: 2071,
      materia: "Informática",
      assunto: "Backup",
      enunciado: "Backup é:",
      alternativas: {
        A: "Cópia de segurança de dados.",
        B: "Exclusão de arquivos.",
        C: "Atualização de sistema.",
        D: "Instalação de antivírus.",
        E: "Formatação do HD.",
      },
      correta: "A",
      explicacao:
        "Backup é cópia de segurança para recuperar dados em caso de perda.",
    },

    {
      id: 2072,
      materia: "Informática",
      assunto: "Vírus de Computador",
      enunciado: "Um vírus de computador:",
      alternativas: {
        A: "É um programa malicioso que infecta arquivos e pode causar danos.",
        B: "É um programa de proteção.",
        C: "É um sistema operacional.",
        D: "É um tipo de hardware.",
        E: "Não existe.",
      },
      correta: "A",
      explicacao: "Vírus é um malware que infecta e danifica sistemas.",
    },

    {
      id: 2073,
      materia: "Informática",
      assunto: "Extensões de Arquivo",
      enunciado: "A extensão '.pdf' refere-se a:",
      alternativas: {
        A: "Portable Document Format (formato de documento portátil).",
        B: "Arquivo de imagem.",
        C: "Arquivo de vídeo.",
        D: "Arquivo de áudio.",
        E: "Arquivo executável.",
      },
      correta: "A",
      explicacao: "PDF é um formato de documento desenvolvido pela Adobe.",
    },

    {
      id: 2074,
      materia: "Informática",
      assunto: "Redes Sociais",
      enunciado: "São exemplos de redes sociais:",
      alternativas: {
        A: "Facebook, Instagram, Twitter e LinkedIn.",
        B: "Word, Excel e PowerPoint.",
        C: "Windows e Linux.",
        D: "Chrome e Firefox.",
        E: "Apenas Orkut.",
      },
      correta: "A",
      explicacao: "Redes sociais permitem interação e compartilhamento online.",
    },

    {
      id: 2075,
      materia: "Informática",
      assunto: "Phishing",
      enunciado: "Phishing é:",
      alternativas: {
        A: "Tentativa de obter dados pessoais por meio de mensagens falsas.",
        B: "Programa de proteção.",
        C: "Tipo de antivírus.",
        D: "Sistema operacional.",
        E: "Navegador web.",
      },
      correta: "A",
      explicacao:
        "Phishing é golpe que tenta roubar dados pessoais através de e-mails ou sites falsos.",
    },
    // ==========================================
    // LEGISLAÇÃO ESPECIAL + RDD (45 QUESTÕES: 2076-2120)
    // ==========================================

    {
      id: 2076,
      materia: "Legislação Especial",
      assunto: "LEP - Lei 7210/1984",
      enunciado: "A Lei de Execução Penal tem como objetivo:",
      alternativas: {
        A: "Efetivar as disposições de sentença ou decisão criminal e proporcionar condições para a harmônica integração social do condenado.",
        B: "Apenas punir o condenado.",
        C: "Excluir o preso da sociedade permanentemente.",
        D: "Aplicar penas corporais.",
        E: "Substituir o Código Penal.",
      },
      correta: "A",
      explicacao:
        "A LEP visa a execução da pena e a reintegração social (Art. 1º LEP).",
    },

    {
      id: 2077,
      materia: "Legislação Especial",
      assunto: "Assistência ao Preso - LEP",
      enunciado: "São formas de assistência ao preso previstas na LEP:",
      alternativas: {
        A: "Material, à saúde, jurídica, educacional, social e religiosa.",
        B: "Apenas material.",
        C: "Apenas à saúde.",
        D: "Apenas educacional.",
        E: "Nenhuma assistência é obrigatória.",
      },
      correta: "A",
      explicacao: "A LEP garante assistência ampla ao preso (Arts. 10-27 LEP).",
    },

    {
      id: 2078,
      materia: "Legislação Especial",
      assunto: "Regime Fechado - LEP",
      enunciado: "O regime fechado caracteriza-se por:",
      alternativas: {
        A: "Execução da pena em estabelecimento de segurança máxima ou média.",
        B: "Liberdade total do condenado.",
        C: "Trabalho externo sem vigilância.",
        D: "Cumprimento apenas em regime domiciliar.",
        E: "Ausência de regras disciplinares.",
      },
      correta: "A",
      explicacao:
        "Regime fechado: execução em penitenciária (Art. 33, §1º, 'a' CP e Art. 87 LEP).",
    },

    {
      id: 2079,
      materia: "Legislação Especial",
      assunto: "Regime Semiaberto - LEP",
      enunciado: "No regime semiaberto, o condenado:",
      alternativas: {
        A: "Pode trabalhar externamente durante o dia e recolher-se à noite.",
        B: "Fica em prisão de segurança máxima.",
        C: "Não pode trabalhar.",
        D: "Cumpre pena em domicílio.",
        E: "Tem liberdade total.",
      },
      correta: "A",
      explicacao:
        "Regime semiaberto: colônia agrícola ou industrial com trabalho externo (Art. 33, §1º, 'b' CP e Art. 91 LEP).",
    },

    {
      id: 2080,
      materia: "Legislação Especial",
      assunto: "Regime Aberto - LEP",
      enunciado: "O regime aberto baseia-se:",
      alternativas: {
        A: "Na autodisciplina e senso de responsabilidade do condenado.",
        B: "Na vigilância constante.",
        C: "No uso de algemas permanentes.",
        D: "Na proibição de trabalho.",
        E: "No isolamento celular.",
      },
      correta: "A",
      explicacao:
        "Regime aberto: autodisciplina e responsabilidade (Art. 36 CP e Art. 93 LEP).",
    },

    {
      id: 2081,
      materia: "Legislação Especial",
      assunto: "Direitos do Preso - LEP",
      enunciado: "São direitos do preso, segundo a LEP:",
      alternativas: {
        A: "Alimentação suficiente, vestuário, assistência médica, visitas e contato com o mundo exterior.",
        B: "Apenas alimentação.",
        C: "Nenhum direito.",
        D: "Apenas trabalho obrigatório.",
        E: "Direito à fuga.",
      },
      correta: "A",
      explicacao: "Direitos do preso estão previstos no Art. 41 da LEP.",
    },

    {
      id: 2082,
      materia: "Legislação Especial",
      assunto: "Deveres do Preso - LEP",
      enunciado: "São deveres do preso:",
      alternativas: {
        A: "Comportamento disciplinado, cumprimento das normas e obediência às ordens legais.",
        B: "Apenas trabalhar.",
        C: "Nenhum dever.",
        D: "Apenas estudar.",
        E: "Direito de descumprir ordens.",
      },
      correta: "A",
      explicacao: "Deveres do preso estão no Art. 39 da LEP.",
    },

    {
      id: 2083,
      materia: "Legislação Especial",
      assunto: "Trabalho do Preso - LEP",
      enunciado: "O trabalho do preso:",
      alternativas: {
        A: "É dever social e condição de dignidade humana, com finalidade educativa e produtiva.",
        B: "É proibido.",
        C: "É opcional sem consequências.",
        D: "Não tem remuneração.",
        E: "Só existe no regime fechado.",
      },
      correta: "A",
      explicacao:
        "Trabalho do preso tem finalidade educativa e produtiva (Art. 28 LEP).",
    },

    {
      id: 2084,
      materia: "Legislação Especial",
      assunto: "Remição de Pena - LEP",
      enunciado: "A remição de pena pelo trabalho ocorre quando:",
      alternativas: {
        A: "A cada 3 dias trabalhados, o preso reduz 1 dia de pena.",
        B: "A cada 10 dias trabalhados, reduz 1 dia.",
        C: "Não existe remição por trabalho.",
        D: "A remição é automática.",
        E: "Apenas por estudo.",
      },
      correta: "A",
      explicacao: "Remição: 3 dias de trabalho = 1 dia de pena (Art. 126 LEP).",
    },

    {
      id: 2085,
      materia: "Legislação Especial",
      assunto: "Remição por Estudo - LEP",
      enunciado: "A remição de pena pelo estudo ocorre quando:",
      alternativas: {
        A: "A cada 12 horas de frequência escolar, o preso reduz 1 dia de pena.",
        B: "A cada 3 dias de estudo, reduz 1 dia.",
        C: "Não existe remição por estudo.",
        D: "Apenas trabalho gera remição.",
        E: "A remição é automática.",
      },
      correta: "A",
      explicacao:
        "Remição por estudo: 12 horas = 1 dia de pena (Art. 126, §1º, I LEP).",
    },

    {
      id: 2086,
      materia: "Legislação Especial",
      assunto: "Progressão de Regime - LEP",
      enunciado: "A progressão de regime exige:",
      alternativas: {
        A: "Cumprimento de parte da pena no regime anterior e bom comportamento carcerário.",
        B: "Apenas o desejo do preso.",
        C: "Decisão automática após 1 mês.",
        D: "Não existe progressão.",
        E: "Apenas pagamento de fiança.",
      },
      correta: "A",
      explicacao:
        "Progressão exige requisito objetivo (tempo) e subjetivo (comportamento) - Art. 112 LEP.",
    },

    {
      id: 2087,
      materia: "Legislação Especial",
      assunto: "Regressão de Regime - LEP",
      enunciado: "A regressão de regime ocorre quando:",
      alternativas: {
        A: "O condenado pratica fato definido como crime doloso ou falta grave.",
        B: "O preso trabalha.",
        C: "O preso estuda.",
        D: "Automaticamente após 6 meses.",
        E: "Nunca ocorre.",
      },
      correta: "A",
      explicacao: "Regressão por crime doloso ou falta grave (Art. 118 LEP).",
    },

    {
      id: 2088,
      materia: "Legislação Especial",
      assunto: "Falta Grave - LEP",
      enunciado: "São exemplos de falta grave:",
      alternativas: {
        A: "Incitar ou participar de movimento para subverter a ordem ou a disciplina.",
        B: "Trabalhar.",
        C: "Estudar.",
        D: "Receber visitas.",
        E: "Praticar esportes.",
      },
      correta: "A",
      explicacao: "Faltas graves estão no Art. 50 da LEP.",
    },

    {
      id: 2089,
      materia: "Legislação Especial",
      assunto: "Sanções Disciplinares - LEP",
      enunciado: "As sanções disciplinares aplicáveis ao preso incluem:",
      alternativas: {
        A: "Advertência verbal, repreensão, suspensão ou restrição de direitos e isolamento na própria cela.",
        B: "Apenas pena de morte.",
        C: "Tortura.",
        D: "Trabalhos forçados.",
        E: "Nenhuma sanção é permitida.",
      },
      correta: "A",
      explicacao: "Sanções disciplinares estão no Art. 53 da LEP.",
    },

    {
      id: 2090,
      materia: "Legislação Especial",
      assunto: "Livramento Condicional - LEP",
      enunciado:
        "O livramento condicional pode ser concedido ao condenado que:",
      alternativas: {
        A: "Cumpriu parte da pena e apresenta bom comportamento durante a execução.",
        B: "Acabou de ser condenado.",
        C: "Não cumpriu nenhuma parte da pena.",
        D: "Praticou falta grave recentemente.",
        E: "Não existe livramento condicional.",
      },
      correta: "A",
      explicacao:
        "Livramento condicional exige requisitos objetivos e subjetivos (Arts. 83-90 CP e LEP).",
    },

    {
      id: 2091,
      materia: "Legislação Especial",
      assunto: "Regime Disciplinar Diferenciado - RDD",
      enunciado: "O RDD (Regime Disciplinar Diferenciado) caracteriza-se por:",
      alternativas: {
        A: "Recolhimento em cela individual, com restrições de visitas e isolamento de até 2 anos.",
        B: "Liberdade total do preso.",
        C: "Regime aberto sem restrições.",
        D: "Trabalho externo obrigatório.",
        E: "Não existe na legislação brasileira.",
      },
      correta: "A",
      explicacao:
        "RDD: isolamento em cela individual com restrições (Art. 52 LEP).",
    },

    {
      id: 2092,
      materia: "Legislação Especial",
      assunto: "Aplicação do RDD",
      enunciado: "O RDD pode ser aplicado quando o preso:",
      alternativas: {
        A: "Apresentar alto risco para a ordem e segurança do estabelecimento penal ou da sociedade.",
        B: "Trabalha regularmente.",
        C: "Estuda.",
        D: "Recebe visitas.",
        E: "Pratica esportes.",
      },
      correta: "A",
      explicacao: "RDD aplicado em casos de alto risco (Art. 52, caput LEP).",
    },

    {
      id: 2093,
      materia: "Legislação Especial",
      assunto: "Duração do RDD",
      enunciado: "O prazo máximo de duração do RDD é de:",
      alternativas: {
        A: "2 anos, podendo ser renovado.",
        B: "1 mês.",
        C: "5 anos sem renovação.",
        D: "Indefinido.",
        E: "30 dias apenas.",
      },
      correta: "A",
      explicacao:
        "RDD: até 2 anos, renovável por igual período (Art. 52, §1º LEP).",
    },

    {
      id: 2094,
      materia: "Legislação Especial",
      assunto: "Estabelecimentos Penais - LEP",
      enunciado:
        "A penitenciária destina-se ao condenado à pena de reclusão em regime:",
      alternativas: {
        A: "Fechado.",
        B: "Aberto.",
        C: "Semiaberto.",
        D: "Domiciliar.",
        E: "Não existe penitenciária.",
      },
      correta: "A",
      explicacao: "Penitenciária: regime fechado (Art. 87 LEP).",
    },

    {
      id: 2095,
      materia: "Legislação Especial",
      assunto: "Colônia Agrícola ou Industrial - LEP",
      enunciado:
        "A colônia agrícola ou industrial destina-se ao cumprimento de pena em regime:",
      alternativas: {
        A: "Semiaberto.",
        B: "Fechado.",
        C: "Aberto.",
        D: "Domiciliar.",
        E: "Provisório.",
      },
      correta: "A",
      explicacao: "Colônia: regime semiaberto (Art. 91 LEP).",
    },

    {
      id: 2096,
      materia: "Legislação Especial",
      assunto: "Casa do Albergado - LEP",
      enunciado:
        "A casa do albergado destina-se ao cumprimento de pena em regime:",
      alternativas: {
        A: "Aberto.",
        B: "Fechado.",
        C: "Semiaberto.",
        D: "Provisório.",
        E: "Domiciliar obrigatório.",
      },
      correta: "A",
      explicacao: "Casa do albergado: regime aberto (Art. 93 LEP).",
    },

    {
      id: 2097,
      materia: "Legislação Especial",
      assunto: "Centro de Observação - LEP",
      enunciado: "O Centro de Observação tem como finalidade:",
      alternativas: {
        A: "Realizar exames gerais e criminológicos para individualização da pena.",
        B: "Apenas punir o condenado.",
        C: "Substituir a penitenciária.",
        D: "Abrigar visitantes.",
        E: "Não existe na LEP.",
      },
      correta: "A",
      explicacao:
        "Centro de Observação: exames para individualização da pena (Art. 96 LEP).",
    },

    {
      id: 2098,
      materia: "Legislação Especial",
      assunto: "Hospital de Custódia - LEP",
      enunciado:
        "O Hospital de Custódia e Tratamento Psiquiátrico destina-se aos:",
      alternativas: {
        A: "Inimputáveis e semi-imputáveis que necessitem de tratamento psiquiátrico.",
        B: "Todos os presos comuns.",
        C: "Apenas visitantes.",
        D: "Funcionários públicos.",
        E: "Não existe na legislação.",
      },
      correta: "A",
      explicacao:
        "Hospital de Custódia: inimputáveis e semi-imputáveis (Art. 99 LEP).",
    },

    {
      id: 2099,
      materia: "Legislação Especial",
      assunto: "Cadeia Pública - LEP",
      enunciado: "A cadeia pública destina-se ao:",
      alternativas: {
        A: "Recolhimento de presos provisórios.",
        B: "Cumprimento de pena em regime fechado.",
        C: "Regime semiaberto.",
        D: "Regime aberto.",
        E: "Tratamento psiquiátrico.",
      },
      correta: "A",
      explicacao: "Cadeia pública: presos provisórios (Art. 102 LEP).",
    },

    {
      id: 2100,
      materia: "Legislação Especial",
      assunto: "Visitas ao Preso - LEP",
      enunciado: "O direito de visita ao preso:",
      alternativas: {
        A: "É garantido pela LEP, inclusive visita íntima.",
        B: "Não existe.",
        C: "É proibido.",
        D: "Só existe no regime aberto.",
        E: "Depende de pagamento.",
      },
      correta: "A",
      explicacao: "Direito de visita é garantido (Art. 41, X LEP).",
    },

    {
      id: 2101,
      materia: "Legislação Especial",
      assunto: "Remuneração do Trabalho do Preso - LEP",
      enunciado: "A remuneração do trabalho do preso não pode ser inferior a:",
      alternativas: {
        A: "3/4 do salário mínimo.",
        B: "1 salário mínimo.",
        C: "1/2 salário mínimo.",
        D: "Não há remuneração.",
        E: "5 salários mínimos.",
      },
      correta: "A",
      explicacao:
        "Remuneração mínima: 3/4 do salário mínimo (Art. 29, caput LEP).",
    },

    {
      id: 2102,
      materia: "Legislação Especial",
      assunto: "Destinação da Remuneração - LEP",
      enunciado: "A remuneração do trabalho do preso deve ser destinada:",
      alternativas: {
        A: "À indenização de danos, assistência à família, pequenas despesas pessoais e ressarcimento ao Estado.",
        B: "Apenas ao preso.",
        C: "Totalmente ao Estado.",
        D: "Não há destinação específica.",
        E: "Apenas à família.",
      },
      correta: "A",
      explicacao: "Destinação da remuneração está no Art. 29, §1º LEP.",
    },

    {
      id: 2103,
      materia: "Legislação Especial",
      assunto: "Mulher Presa - LEP",
      enunciado: "Às mulheres presas devem ser asseguradas condições para:",
      alternativas: {
        A: "Permanecerem com seus filhos durante o período de amamentação.",
        B: "Nenhuma condição especial.",
        C: "Isolamento total.",
        D: "Proibição de visitas.",
        E: "Trabalho forçado.",
      },
      correta: "A",
      explicacao: "Direito de amamentação e creche (Arts. 83, §2º e 89 LEP).",
    },

    {
      id: 2104,
      materia: "Legislação Especial",
      assunto: "Exame Criminológico - LEP",
      enunciado: "O exame criminológico:",
      alternativas: {
        A: "Pode ser realizado para subsidiar decisão sobre progressão de regime.",
        B: "É obrigatório em todos os casos.",
        C: "Não existe mais na legislação.",
        D: "É proibido.",
        E: "Só existe no regime aberto.",
      },
      correta: "A",
      explicacao:
        "Exame criminológico é facultativo para progressão (Art. 112, §1º LEP).",
    },

    {
      id: 2105,
      materia: "Legislação Especial",
      assunto: "Saída Temporária - LEP",
      enunciado: "A saída temporária pode ser concedida ao preso em regime:",
      alternativas: {
        A: "Semiaberto.",
        B: "Fechado.",
        C: "Aberto.",
        D: "Provisório.",
        E: "Não existe saída temporária.",
      },
      correta: "A",
      explicacao: "Saída temporária: regime semiaberto (Art. 122 LEP).",
    },

    {
      id: 2106,
      materia: "Legislação Especial",
      assunto: "Finalidades da Saída Temporária - LEP",
      enunciado: "São finalidades da saída temporária:",
      alternativas: {
        A: "Visita à família, frequência a curso profissionalizante e participação em atividades que concorram para o retorno ao convívio social.",
        B: "Apenas lazer.",
        C: "Apenas trabalho externo.",
        D: "Fuga do estabelecimento.",
        E: "Não há finalidades definidas.",
      },
      correta: "A",
      explicacao: "Finalidades da saída temporária (Art. 122, I a V LEP).",
    },

    {
      id: 2107,
      materia: "Legislação Especial",
      assunto: "Conselho da Comunidade - LEP",
      enunciado: "O Conselho da Comunidade tem como atribuição:",
      alternativas: {
        A: "Visitar estabelecimentos penais e apresentar relatórios ao juiz da execução.",
        B: "Punir os presos.",
        C: "Substituir o juiz.",
        D: "Aplicar sanções disciplinares.",
        E: "Não existe na LEP.",
      },
      correta: "A",
      explicacao:
        "Conselho da Comunidade fiscaliza e auxilia (Arts. 80-81 LEP).",
    },

    {
      id: 2108,
      materia: "Legislação Especial",
      assunto: "Patronato - LEP",
      enunciado: "O Patronato tem como finalidade:",
      alternativas: {
        A: "Assistir albergados e egressos, orientar na obtenção de emprego e fiscalizar o cumprimento das condições do livramento condicional.",
        B: "Apenas punir presos.",
        C: "Substituir o Ministério Público.",
        D: "Aplicar penas.",
        E: "Não existe na LEP.",
      },
      correta: "A",
      explicacao: "Patronato auxilia albergados e egressos (Arts. 78-79 LEP).",
    },

    {
      id: 2109,
      materia: "Legislação Especial",
      assunto: "Egresso - LEP",
      enunciado: "Considera-se egresso:",
      alternativas: {
        A: "O liberado definitivo e o liberado condicional durante o período de prova.",
        B: "Apenas o preso que foge.",
        C: "Qualquer pessoa.",
        D: "Apenas o condenado à morte.",
        E: "Não existe essa definição.",
      },
      correta: "A",
      explicacao: "Egresso: liberado definitivo ou condicional (Art. 26 LEP).",
    },

    {
      id: 2110,
      materia: "Legislação Especial",
      assunto: "Assistência ao Egresso - LEP",
      enunciado: "A assistência ao egresso consiste em:",
      alternativas: {
        A: "Orientação e apoio para reintegração à vida em liberdade.",
        B: "Apenas punição.",
        C: "Isolamento social.",
        D: "Proibição de trabalhar.",
        E: "Nenhuma assistência.",
      },
      correta: "A",
      explicacao:
        "Assistência ao egresso visa reintegração social (Art. 25 LEP).",
    },

    {
      id: 2111,
      materia: "Legislação Especial",
      assunto: "Detração Penal - LEP",
      enunciado: "A detração penal consiste em:",
      alternativas: {
        A: "Descontar da pena o tempo de prisão provisória, administrativa ou prisão civil.",
        B: "Aumentar a pena.",
        C: "Anular a condenação.",
        D: "Aplicar multa.",
        E: "Não existe detração.",
      },
      correta: "A",
      explicacao:
        "Detração: desconto do tempo de prisão anterior (Art. 42 CP e Art. 111 LEP).",
    },

    {
      id: 2112,
      materia: "Legislação Especial",
      assunto: "Incidente de Execução - LEP",
      enunciado: "O incidente de execução é o procedimento para resolver:",
      alternativas: {
        A: "Questões relativas à execução da pena que exigem decisão judicial.",
        B: "Apenas recursos.",
        C: "Apenas habeas corpus.",
        D: "Apenas ações civis.",
        E: "Não existe incidente de execução.",
      },
      correta: "A",
      explicacao:
        "Incidente de execução resolve questões da execução (Arts. 193-197 LEP).",
    },

    {
      id: 2113,
      materia: "Legislação Especial",
      assunto: "Agravo em Execução - LEP",
      enunciado: "O agravo em execução é cabível contra:",
      alternativas: {
        A: "Decisão do juiz da execução em incidente ou recurso.",
        B: "Qualquer decisão judicial.",
        C: "Apenas sentenças penais.",
        D: "Apenas decisões civis.",
        E: "Não existe agravo em execução.",
      },
      correta: "A",
      explicacao:
        "Agravo em execução: recurso contra decisões do juiz da execução (Art. 197 LEP).",
    },

    {
      id: 2114,
      materia: "Legislação Especial",
      assunto: "Competência do Juiz da Execução - LEP",
      enunciado: "Compete ao juiz da execução:",
      alternativas: {
        A: "Fiscalizar o cumprimento da pena, decidir sobre progressão e regressão de regime e aplicar sanções disciplinares.",
        B: "Apenas julgar crimes.",
        C: "Apenas aplicar penas.",
        D: "Apenas absolver réus.",
        E: "Nenhuma competência específica.",
      },
      correta: "A",
      explicacao: "Competências do juiz da execução estão no Art. 66 LEP.",
    },

    {
      id: 2115,
      materia: "Legislação Especial",
      assunto: "Ministério Público na Execução - LEP",
      enunciado: "O Ministério Público na execução penal tem como atribuição:",
      alternativas: {
        A: "Fiscalizar a execução da pena e requerer as medidas necessárias.",
        B: "Apenas defender o réu.",
        C: "Apenas julgar processos.",
        D: "Apenas aplicar penas.",
        E: "Nenhuma atribuição.",
      },
      correta: "A",
      explicacao: "MP fiscaliza e atua na execução (Art. 68 LEP).",
    },

    {
      id: 2116,
      materia: "Legislação Especial",
      assunto: "Defensoria Pública na Execução - LEP",
      enunciado: "A Defensoria Pública na execução penal:",
      alternativas: {
        A: "Defende os interesses dos presos hipossuficientes.",
        B: "Acusa os presos.",
        C: "Apenas fiscaliza.",
        D: "Substitui o juiz.",
        E: "Não atua na execução.",
      },
      correta: "A",
      explicacao: "Defensoria defende hipossuficientes (Art. 81-B LEP).",
    },

    {
      id: 2117,
      materia: "Legislação Especial",
      assunto: "Unificação de Penas - LEP",
      enunciado: "A unificação de penas consiste em:",
      alternativas: {
        A: "Somar as penas quando houver condenações por crimes diversos.",
        B: "Dividir as penas.",
        C: "Anular todas as condenações.",
        D: "Aplicar apenas a maior pena.",
        E: "Não existe unificação.",
      },
      correta: "A",
      explicacao: "Unificação: soma de penas (Art. 111 LEP).",
    },

    {
      id: 2118,
      materia: "Legislação Especial",
      assunto: "Conversão de Penas - LEP",
      enunciado:
        "A conversão da pena restritiva de direitos em privativa de liberdade pode ocorrer quando:",
      alternativas: {
        A: "O condenado descumprir injustificadamente a restrição imposta.",
        B: "O condenado cumpre corretamente.",
        C: "Automaticamente após 1 ano.",
        D: "Por decisão do preso.",
        E: "Não existe conversão.",
      },
      correta: "A",
      explicacao:
        "Conversão por descumprimento (Art. 44, §4º CP e Art. 181 LEP).",
    },

    {
      id: 2119,
      materia: "Legislação Especial",
      assunto: "Monitoração Eletrônica - LEP",
      enunciado: "A monitoração eletrônica pode ser utilizada:",
      alternativas: {
        A: "Como medida cautelar, na saída temporária ou no regime semiaberto e aberto.",
        B: "Apenas no regime fechado.",
        C: "Apenas durante a prisão provisória.",
        D: "Nunca pode ser utilizada.",
        E: "Apenas para crimes hediondos.",
      },
      correta: "A",
      explicacao:
        "Monitoração eletrônica em diversos casos (Arts. 146-A a 146-D LEP).",
    },

    {
      id: 2120,
      materia: "Legislação Especial",
      assunto: "Audiência de Custódia",
      enunciado: "A audiência de custódia tem como objetivo:",
      alternativas: {
        A: "Apresentar o preso em flagrante à autoridade judicial em até 24 horas para avaliar a legalidade da prisão.",
        B: "Julgar o mérito do crime.",
        C: "Condenar o acusado.",
        D: "Absolver automaticamente.",
        E: "Não existe audiência de custódia.",
      },
      correta: "A",
      explicacao:
        "Audiência de custódia avalia legalidade da prisão em flagrante (CNJ Resolução 213/2015 e Art. 7.5 CADH).",
    },
  ], // FIM DO ARRAY DE QUESTÕES
}; // FIM DO OBJETO simulado01
