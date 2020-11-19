import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 100%;
  max-width: 900px;
  margin-bottom: 12px;
`;

export const Activity = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
`;

export const ActivityTypeIndicator = styled.span`
  flex-shrink: 0;
  margin: 0 8px 0 16px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

export const Separator = styled.div`
  flex-shrink: 0;
  width: 8px;
  height: 3px;
  margin: 0 8px;
  background: ${(props) => props.color};
`;