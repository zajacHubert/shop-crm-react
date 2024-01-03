import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border.gray};
  border-radius: 6px;
  padding: 12px 32px;

  @media (min-width: 768px) {
    padding: 48px 20px;
  }
`;

export const StyledTitleForm = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 40px;

  @media (min-width: 640px) {
    font-size: 24px;
  }
`;

export const StyledBoxLabelError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const StyledLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.text.default};

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

export const StyledPError = styled.p`
  color: ${({ theme }) => theme.text.error};
  font-size: 12px;

  @media (min-width: 640px) {
    font-size: 16px;
  }

  ::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 40px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.border.gray};
  width: 100%;
  background-color: transparent;

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 40px;
  border: none;
  border: 1px solid ${({ theme }) => theme.border.gray};
  width: 100%;
  resize: vertical;
  background-color: transparent;

  @media (min-width: 640px) {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

// export const StyledSelect = styled.select`
//   padding: 8px;
//   margin-bottom: 40px;
//   border: none;
//   border: 1px solid ${({ theme }) => theme.border.gray};
//   width: 100%;
//   background-color: transparent;

//   @media (min-width: 640px) {
//     font-size: 18px;
//   }

//   option {
//     color: red;
//   }
// `;

export const StyledSelectContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledSelect = styled.select`
  padding: 8px;
  margin-bottom: 40px;
  border: none;
  border: 1px solid ${({ theme }) => theme.border.gray};
  width: 100%;
  background-color: transparent;
  position: relative;

  @media (min-width: 640px) {
    font-size: 18px;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: '';

  &::-ms-expand {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 12px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0;
    border-color: ${({ theme }) => theme.text.default} transparent transparent;
    transform: translateY(-50%);
  }
`;

export const ArrowIcon = styled.svg`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.text.default};
`;

export const StyledBtnSubmit = styled.button`
  background-color: ${({ theme }) => theme.btn.bgYellow};
  transition: 0.5s;
  width: 100%;
  padding: 8px 0;
  border-radius: 6px;
  color: #fff;
  margin-bottom: 8px;
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.btn.bgBrown};
  }

  @media (min-width: 640px) {
    font-size: 18px;
  }
`;

export const StyledPErrorSubmit = styled.p`
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.text.error};
  font-size: 12px;

  ::first-letter {
    text-transform: uppercase;
  }

  @media (min-width: 640px) {
    font-size: 16px;
  }
`;

export const StyledLabelUpload = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border-width: 2px;
  border-color: #ced1d5;
  border-style: dashed;
  width: 100%;
  background-color: #cdd3d7;
  cursor: pointer;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    height: 16rem;
  }

  &:hover {
    background-color: #afb0b0;
  }
`;

export const StyledContainerUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 24px;
`;

export const StyledSVGUpload = styled.svg`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
  fill: #888;
  color: ${({ theme }) => theme.text.default};
`;

export const StyledPUpload = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text.default};
  margin-bottom: 8px;
`;

export const StyledSpanUpload = styled.span`
  font-weight: 600;
`;

export const StyledPTypes = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.text.default};
`;

export const StyledInputUpload = styled.input`
  display: none;
`;
