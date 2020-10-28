import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 900px;
`;

export const FilterWrapper = styled.div`
  display: flex;
  width: 100%;

  margin: 16px 0;
  justify-content: space-around;
`;

export const FilterButton = styled.button`
  padding: 0.75em 1.25em;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  margin: 0 8px;
  border: none;
    
  ${props => css`
        border: 2px solid ${props.color};    
        background: ${props.color};
        ${props.isActive && css`
          background: transparent;
        `}
      `
  }
`;

export const ActivitiesFilter = styled.div``;

export const SubjectFilter = styled.select``;
