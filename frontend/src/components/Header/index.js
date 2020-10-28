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
import { useUser } from '../../context/User';

import { Link } from 'react-router-dom';

const Header = () => {
    const { user } = useUser();
    
    const navigate = useHistory();

    function handleLogout() {
        navigate.push('/login');
    }

    return (
        <Container>
            <Link to="/">
                <img src={LogoHearder} alt="Anhembi Morumbi" />
            </Link>

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
