import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto 32px;
  border: 1px solid ${({ theme }) => theme.border.gray};
`;

export const StyledInput = styled.input`
  padding: 8px 16px;
  width: 256px;
  background-color: transparent;
  color: ${({ theme }) => theme.text.default};

  &::placeholder {
    color: #6b7280;
  }
`;

export const StyledBoxSuggestions = styled.div`
  position: absolute;
  z-index: 10;
  background-color: #fff;
  width: 256px;
  top: 40px;
  right: 0;
`;

export const StyledBoxSuggestion = styled.div`
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.border.gray};
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const StyledPTitle = styled.p``;

export const StyledBoxMessage = styled.div`
  padding: 8px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.border.gray};

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const StyledPMessage = styled.p``;
