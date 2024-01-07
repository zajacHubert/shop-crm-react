import React from 'react';
import LoginForm from '../../components/user/LoginForm';
import { StyledContainer, StyledSection } from './LoginPage.css';

const LoginPage = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <LoginForm />
      </StyledContainer>
    </StyledSection>
  );
};

export default LoginPage;
