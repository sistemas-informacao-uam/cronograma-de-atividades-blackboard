import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

    margin: 0 auto;

    > h1 {
        text-align: center;
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
    max-width: 1200px;
    margin-top: 10px;
    padding: 10px;
`;

