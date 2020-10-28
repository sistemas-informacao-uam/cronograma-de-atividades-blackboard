import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;
  max-width: 900px;

  input {
      margin: 0 8px;
  }

  select::-ms-expand {
      display: none;
  }

  select, input {
      &:disabled {
          background: transparent;
          border: none;
          color: black;
          -webkit-appearance: none; 
      }
  }

  .buttons {
      display: flex;
      margin-left: auto;                
  }
`;