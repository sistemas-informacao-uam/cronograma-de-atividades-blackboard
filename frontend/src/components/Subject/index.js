import React from 'react';

import { Container, ImageSubject, ButtonSubject } from './styles';

const Subject = (props) => {
  return (
    <Container>
      <ImageSubject />
      <p>{props.title}</p>

      <ButtonSubject
        as={props.userType === 'student' && 'button'}
        to={`/disciplinas/${props.title}`}
      >
        Acessar disciplina
      </ButtonSubject>
    </Container>
  );
};

export default Subject;
