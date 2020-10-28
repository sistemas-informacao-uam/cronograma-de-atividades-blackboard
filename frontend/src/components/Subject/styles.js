import styled from 'styled-components';

import ImageSelected from '../../assets/subject-image.jpg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 376px;
    height: 232px;
    margin: 5px;
    box-shadow: 2px 2px 7px #000;
    
    overflow: hidden;

    > p {
        text-transform: uppercase;
        margin-top: 15px;
        margin-left: 15px;
        font-family: Lato, sans-serif;
        color: #999999;
        font-size: 15.36px;
        height: 50px;
        width: 350px;
    }
`;

export const ImageSubject = styled.div`
    width: 100%;
    height: 111px;
    background-image: url(${ImageSelected});

    transition: transform .5s;
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const ButtonSubject = styled.button`
    width: 132px;
    height: 33px;
    color: #FFF;
    border: none;
    margin-left: 230px;
    margin-top: 10px;

    background: #00AD8E;

    &:hover {
        cursor: pointer;
    }
`;
