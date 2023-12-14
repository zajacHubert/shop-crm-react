import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.bg.bgGray};
  position: fixed;
  height: 64px;
  width: 100%;
  margin-bottom: 20px;
  z-index: 20;
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

export const StyledBoxUser = styled.div``;

export const StyledPName = styled.p``;

export const StyledBoxIconShopCart = styled.div``;

export const StyledSpanIcon = styled.span``;

export const StyledBoxMobileManu = styled.div``;

export const StyledNav = styled.nav``;

export const StyledManuList = styled.ul``;

export const StyledListItem = styled.li``;

export const StyledBtnLogin = styled.button``;
