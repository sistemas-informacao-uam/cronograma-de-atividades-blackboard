import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    > h1 {
        text-align: center;
        font-family: Lato, sans-serif;
        font-size: 25.6px;
        margin-top: 10px;
        color: #333333;
    }
`;

export const SubjectsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    width: 90%;
    margin-top: 10px;
    padding: 10px;
`;

