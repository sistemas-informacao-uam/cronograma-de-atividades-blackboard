import styled from 'styled-components';
import { FiPower, FiUser, FiChevronDown } from 'react-icons/fi';

import Banner from '../../assets/header.jpeg';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to right,rgba(170,255,169,0.5),rgba(17,255,189,0.5)),url(${Banner});
    background-size: cover;
    background-position: center;
    height: 90px;
    width: 100%;

    > img {
        width: 221.25px;
        height: 70px;
        margin-left: 45px;
    }

    @media(max-width: 1020px) {
        height: 44px;
        padding: 9px 0 0;
        border-bottom: 3px solid #c56fd5;

        > img {
            display: none;
        }
    }
`;

export const UserMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > h1 {
        color: #EEEEEE;
        font-family: Lato, sans-serif;
        font-size: 14.08px;
        text-shadow: 1px 1px 10px #000;
    }

    @media(max-width: 1020px) {
        width: 100%;
        margin-bottom: 8px;
        justify-content: flex-end;
    }
`;

export const LogoutIcon = styled(FiPower)`
    width: 32px;
    height: 25px;
    margin-right: 15px;
    color: #EEEEEE;

    &&:hover {
        cursor: pointer;
    }
`;

export const UserIcon = styled(FiUser)`
    border: 1px solid #fff;
    border-radius: 50%;
    width: 44px;
    height: 44px;
    margin-right: 15px;
    color: #EEEEEE;

    &&:hover {
        cursor: pointer;
    }

    @media(max-width: 1020px) {
        width: 34px;
        height: 34px;
    }
`;

export const ArrowIconDown = styled(FiChevronDown)`
    width: 25px;
    height: 14px;
    color: #EEEEEE;
    margin-right: 15px;
    margin-left: 15px;

    &&:hover {
        cursor: pointer;
    }
`;
