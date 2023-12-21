import styled from 'styled-components';

export const StyledSection = styled.section`
  padding-bottom: 2rem;
  padding-top: 5rem;
  margin: 0 auto;
  max-width: 1500px;

  @media (min-width: 768px) {
    padding-bottom: 4rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #dc2626;
  max-width: 240px;
  letter-spacing: -0.05em;
  margin: 0 auto 48px;
  font-family: 'Lobster', sans-serif;

  @media (min-width: 768px) {
    font-size: 65px;
    max-width: 300px;
    margin-bottom: 80px;
  }
`;

export const StyledContainer = styled.div``;

export const StyledSubtitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    font-size: 36px;
    margin-bottom: 36px;
  }
`;

export const StyledboxProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const StyledBoxProduct = styled.div`
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);

  @media (min-width: 480px) {
    width: 24rem;
  }
`;

export const StyledBoxImg = styled.div`
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  height: 240px;

  @media (min-width: 480px) {
    width: 24rem;
  }

  img {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }
`;

export const StyledBoxProductText = styled.div`
  padding: 12px 20px;
`;

export const StyledBoxProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const StyledTitleProduct = styled.h2`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-transform: capitalize;
`;

export const StyledBoxCategory = styled.div`
  border-radius: 0.375rem;
  padding: 8px;
  background-color: lime;
`;

export const StyledPCategory = styled.p`
  color: #fff;
`;

export const StyledPDesc = styled.p`
  margin-bottom: 12px;
`;

export const StyledBoxActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTextPrice = styled.h4`
  font-weight: 700;
`;
