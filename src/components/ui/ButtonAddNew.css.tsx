import styled from 'styled-components';

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  margin-bottom: 24px;
  padding: 4px 8px;
  border-radius: 6px;
  color: #fff;
  transition: 0.5s;
  background-color: ${({ theme }) => theme.btn.bgYellow};

  @media (min-width: 768px) {
    padding: 8px;
    font-size: 18px;
    margin: 0 auto;
  }

  &:hover {
    background-color: ${({ theme }) => theme.btn.bgBrown};
  }
`;

export const StyledSpanIcon = styled.span``;
