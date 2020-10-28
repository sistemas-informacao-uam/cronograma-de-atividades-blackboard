const professorRegisteredActivitiesFakeDate = [
  {
    date: '28 de Outubro',
    activities: [
      {
        id: 1,
        type: 'apresentacao',
        subject: 'Desenvolvimento Web',
        title: 'Apresentação deste trabalho que você está vendo agora',
      }
    ],
  },
  {
    date: '30 de Outubro',
    activities: [
      {
        id: 2,
        type: 'prova',
        subject: 'Engenharia de Software',
        title: 'Diagramas',
      },
    ],
  },
  {
    date: '17 de Novembro',
    activities: [
      {
        id: 2,
        type: 'trabalho',
        subject: 'Desenvolvimento Web',
        title: 'HTML, CSS e JS',
      },
      {
        id: 3,
        type: 'prova',
        subject: 'Prática de Banco de Dados',
        title: 'UPDATE Alunos SET nota = 10',
      },
    ],
  }
]

const studentActivitiesListFakeData = [
  {
    date: '28 de Outubro',
    activities: [
      {
        id: 1,
        type: 'apresentacao',
        subject: 'Desenvolvimento Web',
        title: 'Apresentação deste trabalho que você está vendo agora',
      }
    ],
  },
  {
    date: '30 de Outubro',
    activities: [
      {
        id: 1,
        type: 'trabalho',
        subject: 'Pesquisa, Ordenação e Técnicas de Armazenamento',
        title: 'Quick sort, Merge Sort, Whatever Sort',
      },
      {
        id: 2,
        type: 'prova',
        subject: 'Engenharia de Software',
        title: 'Diagramas',
      },
    ],
  },
  {
    date: '17 de Novembro',
    activities: [
      {
        id: 1,
        type: 'apresentacao',
        subject: 'Pesquisa, Ordenação e Técnicas de Armazenamento',
        title: 'Muitos algoritmos',
      },
      {
        id: 2,
        type: 'trabalho',
        subject: 'Desenvolvimento Web',
        title: 'HTML, CSS e JS',
      },
      {
        id: 3,
        type: 'prova',
        subject: 'Prática de Banco de Dados',
        title: 'UPDATE Alunos SET nota = 10',
      },

    ],
  }
]

export const professorFakeData = {
  name: 'Sou um Professor',
  subjects: [
    'Desenvolvimento Web',
    'Engenharia de Software',
    'Prática de Banco de Dados',
  ],
  activities: professorRegisteredActivitiesFakeDate,
  type: 'professor',
}

export const studentFakeData = {
  name: 'Por acaso eu sou um aluno',
  subjects: [
    'Desenvolvimento Web',
    'Engenharia de Software',
    'Prática de Banco de Dados',
    'Pesquisa, Ordenação e Técnicas de Armazenamento',
    'Redes',
    'Estatística',
  ],
  activities: studentActivitiesListFakeData,
  type: 'student',
}