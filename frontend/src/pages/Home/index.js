import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import Schedule from '../../components/Schedule';
import Subject from '../../components/Subject';

import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../services/firebase';

import { Container, SubjectsList } from './styles';

const Home = () => {
  const { currentUser } = useAuth();

  const [type, setType] = useState('');
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    db.collection('users')
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        const data = doc.data();
        setType(data.type);
        setSubjects(data.subjects);
      });
  }, [currentUser]);

  return (
    <>
      <Header />
      <Container>
        <h1>
          {type === 'student'
            ? 'Minhas Disciplinas'
            : 'Disciplinas que dou Aula'}
        </h1>
        <SubjectsList>
          {subjects.map((subject, index) => (
            <Subject key={index} title={subject} userType={type} />
          ))}
        </SubjectsList>

        <h1>
          {type === 'student'
            ? 'Cronograma de Atividades'
            : 'Atividades Cadastradas'}
        </h1>
        {subjects.length > 0 && <Schedule subjects={subjects} />}
      </Container>
    </>
  );
};

export default Home;
