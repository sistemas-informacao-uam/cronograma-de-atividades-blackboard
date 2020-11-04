// GET - /users
// Headers - JWT with user info
export const fakeApiResponse = {
  ra: '34509716',
  name: 'Professor',
  type: 'professor',
  subjects: [
    'Desenvolvimento Web',
    'Engenharia de Software',
    'Pesquisa, Ordenação e Técnicas de Armazenamento',
    'Prática de Banco de Dados',
  ],
  'activities': [
    {
      id: 1,
      type: 'apresentacao',
      subject: 'Desenvolvimento Web',
      title: 'Apresentação deste trabalho que você está vendo agora',
      date: '2020/09/01',
    },
    {
      id: 2,
      type: 'prova',
      subject: 'Engenharia de Software',
      title: 'Diagramas',
      date: '2020/11/09',
    },
    {
      id: 3,
      type: 'apresentacao',
      subject: 'Pesquisa, Ordenação e Técnicas de Armazenamento',
      title: 'Muitos algoritmos',
      date: '2020/09/28',
    },
    {
      id: 7,
      type: 'trabalho',
      subject: 'Pesquisa, Ordenação e Técnicas de Armazenamento',
      title: 'Mais muitos outros algoritmos',
      date: '2020/09/28',
    },
    {
      id: 4,
      type: 'trabalho',
      subject: 'Desenvolvimento Web',
      title: 'HTML, CSS e JS',
      date: '2020/11/05',
    },
    {
      id: 5,
      type: 'prova',
      subject: 'Prática de Banco de Dados',
      title: 'UPDATE Alunos SET nota = 10',
      date: '2020/12/07',
    },
  ]
}