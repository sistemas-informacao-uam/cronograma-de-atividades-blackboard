import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const NavBar = () => {
  return (
    <Container>
        <Link to="/">Minha Área</Link>
    </Container>
  );
};

export default NavBar;
