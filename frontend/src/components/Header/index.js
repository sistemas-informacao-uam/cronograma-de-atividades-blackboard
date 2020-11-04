import React, { useContext } from 'react';

import {
    Container,
    UserMenu,
    LogoutIcon,
    UserIcon,
    ArrowIconDown,
} from './styles';

import LogoHearder from '../../assets/subjects-logo.png';

import { Link } from 'react-router-dom';

import { Context } from '../../Context/AuthContext';

const Header = () => {
    const { user, handleLogout } = useContext(Context);
    
    return (
        <Container>
                <img as={Link} to="/" src={LogoHearder} alt="Anhembi Morumbi" />

            <UserMenu>
                <UserIcon />
                <h1>Olá, {user.name}</h1>
                <ArrowIconDown />
                <LogoutIcon onClick={handleLogout} />
            </UserMenu>
        </Container>
    );
}

export default Header;
