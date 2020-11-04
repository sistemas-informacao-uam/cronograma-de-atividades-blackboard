import React, { useContext } from 'react';

import { Context } from '../../Context/AuthContext';

import {
    Container,
    ImageSubject,
    ButtonSubject,
} from './styles';

const Subject = (props) => {
  const { user } = useContext(Context);

  return (
      <Container>
          <ImageSubject />
          <p>{props.title}</p>

          <ButtonSubject as={user.type === 'student' && 'button'} to={`/disciplinas/${props.title}`}>Acessar disciplina</ButtonSubject>
      </Container>
  );
}

export default Subject;