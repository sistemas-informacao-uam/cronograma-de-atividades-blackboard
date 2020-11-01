import React from 'react';
import Header from '../../components/Header';
import Schedule from '../../components/Schedule';
import Subject from '../../components/Subject';
import { professorFakeData } from '../../fakeData';


import {
  Container,
  SubjectsList,
} from './styles';

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        {/*<h1>{user.type === 'student' ? 'Minhas Disciplinas' : 'Disciplinas que dou Aula'}</h1>*/}
        <h1>Disciplinas que dou Aula</h1>
        <SubjectsList>
          {professorFakeData.subjects.map(subject => <Subject key={subject} title={subject} />)}
        </SubjectsList>

          {/*<h1>{user.type === 'student' ? 'Cronograma de Atividades' : 'Atividades Cadastradas'}</h1>*/}
          <h1>Atividades Cadastradas</h1>
          <Schedule />
      </Container>
    </>
  );
};

export default Home;
