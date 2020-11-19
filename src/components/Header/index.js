import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../services/firebase';

import {
  Container,
  UserMenu,
  LogoutIcon,
  UserIcon,
  ArrowIconDown,
} from './styles';

import LogoHearder from '../../assets/subjects-logo.png';

import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('users')
      .doc(currentUser.uid)
      .get()
      .then((doc) => setUsername(doc.data().name));
  }, [currentUser]);

  const handleLogout = useCallback(() => {
    (async () => {
      await logout();
      history.push('/login');
    })();
  }, [logout, history]);

  return (
    <Container>
      <img as={Link} to="/" src={LogoHearder} alt="Anhembi Morumbi" />

      <UserMenu>
        <UserIcon />
        <h1>Olá, {username}</h1>
        <ArrowIconDown />
        <LogoutIcon onClick={handleLogout} />
      </UserMenu>
    </Container>
  );
};

export default Header;
