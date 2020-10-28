import React from 'react';
import { useUser } from '../../context/User';


import {
    Container,
    ImageSubject,
    ButtonSubject,
} from './styles';

const Subject = (props) => {
    const {user} = useUser();

  return (
      <Container>
          <ImageSubject />
          <p>{props.title}</p>

          <ButtonSubject as={user.type === 'student' && 'button'} to="/disciplina">Acessar disciplina</ButtonSubject>
      </Container>
  );
}

export default Subject;