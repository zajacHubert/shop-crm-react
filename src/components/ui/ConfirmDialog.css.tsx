import styled from 'styled-components';

export const StyledOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledBoxDialog = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  max-width: 95%;
  width: 340px;
`;

export const StyledParagraph = styled.p`
  font-size: 1rem;
  color: #4b5563;
  margin-bottom: 1rem;
`;

interface StyledButtonProps {
  bgColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  background-color: ${({ bgColor }) => bgColor};
  color: white;
  font-weight: 600;
  padding: 8px 34px;
  border-radius: 0.25rem;
  cursor: pointer;
  margin: 0 4px;
  transition: 0.4s;

  &:hover {
    opacity: 0.7;
  }
`;
