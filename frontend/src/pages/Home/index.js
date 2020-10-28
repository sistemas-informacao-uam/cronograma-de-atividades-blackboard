import React from 'react';
import Header from '../../components/Header';
import Schedule from '../../components/Schedule';
import Subject from '../../components/Subject';
import { useUser } from '../../context/User';

import {
  Container,
  SubjectsList,
} from './styles';

const Home = () => {

  const { user } = useUser();

  return (
    <>
      <Header />
      <Container>
        <h1>Minhas Disciplinas</h1>
        <SubjectsList>
          {user.subjects.map(subject => <Subject key={subject} title={subject} />)}
        </SubjectsList>

          <h1>{user.type === 'student' ? 'Cronograma de Atividades' : 'Atividades Cadastradas'}</h1>
          <Schedule />
      </Container>
    </>
  );
};

export default Home;
