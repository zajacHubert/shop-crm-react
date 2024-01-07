import React, { useRef } from 'react';
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
  StyledPRedirect,
  StyledSpanRedirect,
  StyledTitleForm,
} from '../ui/Form.css';
import { UserFormRegister } from '../../types/user';
import SpinnerBtn from '../ui/SpinnerBtn';
import { useMutation } from '@tanstack/react-query';
import { login, register } from '../../api/user';
import { Link, useNavigate } from 'react-router-dom';
import useGetAllQueryParams from '../../hooks/useGetAllQueryParams';
import { setLoggedUser } from '../../store/slices/userSlice';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { redirect } = useGetAllQueryParams();
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      if (data && data.email && passwordInputRef.current !== null) {
        loginMutation.mutate({
          email: data.email,
          password: passwordInputRef.current.value,
        });
      }
    },
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(setLoggedUser(data.user));
      navigate(redirect ?? '/');
    },
  });

  const initialValues: UserFormRegister = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    first_name: yup.string().required().min(4).max(50),
    last_name: yup.string().required().min(4).max(50),
    email: yup.string().required().email().min(4).max(200),
    password: yup.string().required().min(4).max(50),
  });

  const submitForm = async (values: UserFormRegister) => {
    registerMutation.mutate(values);
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
            <StyledTitleForm>Register</StyledTitleForm>
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
              ref={passwordInputRef}
            />
            <StyledBoxLabelError>
              <StyledLabel>First name</StyledLabel>
              {errors.first_name && touched.first_name && (
                <StyledPError>{errors.first_name}</StyledPError>
              )}
            </StyledBoxLabelError>
            <StyledInput
              name='first_name'
              type='text'
              value={values.first_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledBoxLabelError>
              <StyledLabel>Last name</StyledLabel>
              {errors.last_name && touched.last_name && (
                <StyledPError>{errors.last_name}</StyledPError>
              )}
            </StyledBoxLabelError>
            <StyledInput
              name='last_name'
              type='text'
              value={values.last_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledBtnSubmit>
              Register{registerMutation.isPending && <SpinnerBtn />}
            </StyledBtnSubmit>
            <StyledPRedirect>
              Already have an account?
              <Link to='/login'>
                <StyledSpanRedirect>Sign in</StyledSpanRedirect>
              </Link>
            </StyledPRedirect>
            {registerMutation.isError && (
              <StyledPErrorSubmit>
                {registerMutation.error.message}
              </StyledPErrorSubmit>
            )}
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
