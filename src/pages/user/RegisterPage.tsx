import React from 'react';
import RegisterForm from '../../components/user/RegisterForm';
import { StyledContainer, StyledSection } from './RegisterPage.css';

const RegisterPage = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <RegisterForm />
      </StyledContainer>
    </StyledSection>
  );
};

export default RegisterPage;
