import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: white;
  margin-top: 25px;
  width: 100%;
  padding: 15px;
  max-width: 900px;
  border-radius: 15px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  width: 100%;

  margin: 16px 0;
  justify-content: space-around;
  
  @media(max-width: 1020px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FilterButton = styled.button`
  padding: 0.75em 1.25em;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  margin: 0 8px;
  border: none;

  @media(max-width: 1020px) {
    margin-bottom: 15px;
  }
    
  ${props => css`
        border: 2px solid ${props.color};    
        background: ${props.color};
        ${props.isActive && css`
          background: transparent;
        `}
      `
  }
`;

export const ActivitiesFilter = styled.div`
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const SubjectFilter = styled.select`
  padding: 10px 16.6667px;
  border: 1px soliv #999999;
  border-radius: 10px;
  color: #999999;
  font-family: Lato, sans-serif;

  @media(max-width: 1020px) {
    margin-bottom: 15px;
  }
`;
