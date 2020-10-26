import React from 'react';

import {
    Container,
    UserMenu,
    LogoutIcon,
    UserIcon,
    ArrowIconDown,
} from './styles';

import LogoHearder from '../../assets/subjects-logo.png';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const navigate = useHistory();

    function handleLogout() {
        navigate.push('/');
    }

    return (
        <Container>
            <img src={LogoHearder} alt="Anhembi Morumbi" />

            <UserMenu>
                <UserIcon />
                <h1>Olá, NOME USUÁRIO</h1>
                <ArrowIconDown />
                <LogoutIcon onClick={handleLogout} />
            </UserMenu>
        </Container>
    );
}

export default Header;
