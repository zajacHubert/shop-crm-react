import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 576px;
  margin: 0 auto;
`;

export const StyledBoxImg = styled.div`
  height: 208px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    height: 288px;
  }
`;

export const StyledBoxText = styled.div``;

export const StyledTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 12px;
`;
