import React from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import {
  StyledBoxLabelError,
  StyledBtnSubmit,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledPError,
  StyledPErrorSubmit,
  StyledTitleForm,
} from '../ui/Form.css';
import { UserFormLogin } from '../../types/user';
import SpinnerBtn from '../ui/SpinnerBtn';
import { useMutation } from '@tanstack/react-query';
import { login } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import useGetAllQueryParams from '../../hooks/useGetAllQueryParams';
import { setLoggedUser } from '../../store/slices/userSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirect } = useGetAllQueryParams();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(setLoggedUser(data.user));
      navigate(redirect ?? '/');
    },
  });

  const initialValues: UserFormLogin = {
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required().email().min(4).max(50),
    password: yup.string().required().min(4).max(50),
  });
  const submitForm = async (values: UserFormLogin) => {
    loginMutation.mutate(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        } = formik;
        return (
          <StyledForm onSubmit={handleSubmit} noValidate>
            <StyledTitleForm>Login</StyledTitleForm>
            <StyledBoxLabelError>
              <StyledLabel>Email</StyledLabel>
              {errors.email && touched.email && (
                <StyledPError>{errors.email}</StyledPError>
              )}
            </StyledBoxLabelError>
            <StyledInput
              name='email'
              type='text'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledBoxLabelError>
              <StyledLabel>Password</StyledLabel>
              {errors.password && touched.password && (
                <StyledPError>{errors.password}</StyledPError>
              )}
            </StyledBoxLabelError>
            <StyledInput
              name='password'
              type='password'
              step={0.01}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledBtnSubmit>
              Login{loginMutation.isPending && <SpinnerBtn />}
            </StyledBtnSubmit>
            {loginMutation.isError && (
              <StyledPErrorSubmit>
                {loginMutation.error.message}
              </StyledPErrorSubmit>
            )}
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
