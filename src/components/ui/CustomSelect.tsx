import React, { SelectHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  StyledBoxArrow,
  StyledContainerSelect,
  StyledSelect,
} from './CustomSelect.css';

const SvgComponent = () => {
  const isDarkTheme = useSelector(
    (state: RootState) => state.config.isDarkTheme
  );
  const color = isDarkTheme ? '#fff' : '#000';
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={18}
      height={18}
      viewBox='-6.5 0 32 32'
      fill={color}
    >
      <title>{'dropdown'}</title>
      <path d='m18.813 11.406-7.906 9.906c-.75.906-1.906.906-2.625 0L.376 11.406c-.75-.938-.375-1.656.781-1.656h16.875c1.188 0 1.531.719.781 1.656z' />
    </svg>
  );
};

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const CustomSelect = ({ children, ...props }: CustomSelectProps) => {
  return (
    <StyledContainerSelect>
      <StyledSelect {...props}>{children}</StyledSelect>
      <StyledBoxArrow>
        <SvgComponent />
      </StyledBoxArrow>
    </StyledContainerSelect>
  );
};

export default CustomSelect;
