import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 40px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`;

export const StyledBoxImg = styled.div`
  height: 208px;
  margin-bottom: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  img {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  @media (min-width: 640px) {
    height: 256px;
  }
`;

export const StyledBoxText = styled.div`
  padding: 8px 16px;
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 12px;
`;

export const StyledBoxActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

interface StyledBoxCategoryProps {
  bgColor: string;
}

export const StyledBoxCategory = styled.div<StyledBoxCategoryProps>`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 6px;
  padding: 8px;
  color: #fff;
`;

export const StyledPCategory = styled.p`
  font-size: 14px;
`;

export const StyledTextPrice = styled.h3`
  font-weight: 600;
  margin-bottom: 4px;
`;

export const StyledBoxButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: #1e3a8a;
  font-weight: 600;
  font-size: 14px;
`;
