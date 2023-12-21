import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 128px;
  padding: 32px;
  background-color: ${({ theme }) => theme.bg.bgGray};
`;

export const StyledText = styled.h4`
  color: #fff;
  text-align: center;
  margin-bottom: 16px;
  font-size: 18px;
  font-family: 'Pacifico', cursive;

  @media (min-width: 640px) {
    font-size: 20px;
  }
`;

export const StyledBoxIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
