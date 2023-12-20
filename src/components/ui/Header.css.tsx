import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.bg.bgGray};
  position: fixed;
  height: 64px;
  width: 100%;
  margin-bottom: 20px;
  z-index: 20;
  color: #fff;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 64px;
  margin: 0 12px;
  padding: 12px;
  max-width: 1500px;

  @media (min-width: 1536px) {
    margin: 0 auto;
  }
`;

export const StyledBoxLogo = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
  }
`;

export const StyledBoxUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 4px;
  width: 100%;

  @media (min-width: 1024px) {
    flex: 1;
  }
`;

export const StyledPName = styled.p``;

export const StyledBoxIconShopCart = styled.div`
  position: relative;
  cursor: pointer;
`;

export const StyledSpanIcon = styled.span`
  position: absolute;
  left: 16px;
  bottom: 8px;
  color: #4ade80;
  font-weight: 600;
`;

export const StyledBoxMobileMenu = styled.div`
  color: #fff;
  cursor: pointer;

  @media (min-width: 1024px) {
    display: none;
  }
`;

interface StyledNavProps {
  isOpen: boolean;
}

export const StyledNav = styled.nav<StyledNavProps>`
  background-color: #94a3b8;
  transition: all 0.5s;
  position: absolute;
  padding: 16px 0; // 1rem in pixels
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '-18px' : '-218px')};
  width: 200px;
  height: 240px;
  z-index: 10;

  @media (min-width: 1024px) {
    background-color: transparent;
    display: flex;
    justify-content: flex-end;
    flex: 1;
    position: static;
    height: auto;
  }
`;

export const StyledListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px; // 0.5rem in pixels
  align-items: center;
  padding: 16px 0; // 1rem in pixels
  flex: 1;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledListItem = styled.li``;

export const StyledBtnLogin = styled.button`
  background-color: #ecc94b;
  padding: 10px 20px; // 0.625rem 1.25rem in pixels
  border-radius: 4px; // 0.25rem in pixels
  cursor: pointer;
  transition: all 0.5s;
  color: #fff;
  font-size: 16px;

  &:hover {
    background-color: #d69e2e;
  }
`;
