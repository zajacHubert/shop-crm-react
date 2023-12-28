import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { toggleTheme } from '../../store/slices/configSlice';
import { StyledBox, StyledBtn } from './ThemeToggler.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(
    (state: RootState) => state.config.isDarkTheme
  );

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledBox>
      <StyledBtn onClick={handleToggleTheme}>
        {isDarkTheme ? <FaSun size={22} /> : <FaMoon size={22} />}
      </StyledBtn>
    </StyledBox>
  );
};

export default ThemeToggler;
