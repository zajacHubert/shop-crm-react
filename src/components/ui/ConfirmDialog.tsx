import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { closeConfirmDialog } from '../../store/slices/confirmDialogSlice';
import SpinnerBtn from './SpinnerBtn';
import styled from 'styled-components';
import {
  StyledBoxDialog,
  StyledButton,
  StyledOverlay,
  StyledParagraph,
} from './ConfirmDialog.css';

const ConfirmDialog: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.confirmDialog.isOpen);
  const recordToDelete = useSelector(
    (state: RootState) => state.confirmDialog.recordToDelete
  );

  const handleConfirm = async () => {
    if (recordToDelete) {
      //   await deleteRecord(recordToDelete);
      dispatch(closeConfirmDialog());
    }
  };

  const isLoading = true;

  return (
    <>
      {isOpen && (
        <StyledOverlay onClick={() => dispatch(closeConfirmDialog())}>
          <StyledBoxDialog onClick={(e) => e.stopPropagation()}>
            <StyledParagraph>
              Are you sure you want to delete this record?
            </StyledParagraph>

            <StyledButton onClick={handleConfirm} bgColor={'#dc2626'}>
              Confirm Delete
              {isLoading && <SpinnerBtn />}
            </StyledButton>
            <StyledButton
              onClick={() => dispatch(closeConfirmDialog())}
              bgColor={'#57534e'}
            >
              Cancel
            </StyledButton>
          </StyledBoxDialog>
        </StyledOverlay>
      )}
    </>
  );
};

export default ConfirmDialog;
