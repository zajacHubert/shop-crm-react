import styled from 'styled-components';

export const StyledContainerSelect = styled.div`
  position: relative;
`;

export const StyledSelect = styled.select`
  padding: 8px;
  margin-bottom: 40px;
  border: none;
  border: 1px solid ${({ theme }) => theme.border.gray};
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text.default};
  cursor: pointer;

  -moz-appearance: none;
  -webkit-appearance: none;

  option {
    background-color: #8f9193;
  }

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

export const StyledBoxArrow = styled.div`
  position: absolute;
  z-index: -1;
  right: 10px;
  top: 12px;
`;
