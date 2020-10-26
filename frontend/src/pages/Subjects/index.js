import React from 'react';
import Header from '../../components/Header';
import Subject from '../../components/Subject';

import {
  Container,
  SubjectsList,
} from './styles';

const Subjects = () => {
  return (
    <>
    <Header />
      <Container>
        <h1>Minhas Disciplinas</h1>
        <SubjectsList>
          <Subject
            title="desenvolvimento de software para web"
          />
          <Subject
            title="teoria de sistemas de informação"
          />
          <Subject
            title="práticas de banco de dados"
          />
          <Subject
            title="estrutura de dados"
          />
          <Subject
            title="gestão de projetos"
          />
          <Subject
            title="segurança da informação"
          />
        </SubjectsList>
      </Container>
    </>
  );
};

export default Subjects;
