import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSection = styled.section``;

export const StyledContainer = styled.div``;

export const StyledBoxFilters = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 140px;
  right: 8px;
  width: 28%;
  max-width: 320px;

  @media (min-width: 768px) {
    padding-left: 40px;
  }

  @media (min-width: 1536px) {
    padding-left: 0px;
    right: 50%;
    transform: translateX(750px);
  }
`;

export const StyledTitleFilters = styled.h3`
  font-weight: 600;
  font-size: 16px;
  margin: 12px 0;

  @media (min-width: 768px) {
    font-size: 20px;
    margin: 20px 0;
  }

  @media (min-width: 1280px) {
    font-size: 24px;
    font-weight: 700;
  }
`;

interface StyledLinkProps {
  isActive: boolean;
}

export const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: capitalize;
  font-weight: ${({ isActive }) => (isActive ? '700' : '400')};

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const StyledBoxProducts = styled.div`
  width: 66%;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
