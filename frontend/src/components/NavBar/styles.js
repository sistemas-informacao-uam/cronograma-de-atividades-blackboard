import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 14.08px;
  font-weight: 700;

  width: 100%;
  height: 40px;
  background-color: white;

  a {
    display: flex;
    align-items: center;

    padding: 20px;
    margin-right: 30px;

    background-color: var(--color-secondary);
    color: white;
    height: 100%;
  }
`;
