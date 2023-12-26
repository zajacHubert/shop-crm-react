import React from 'react';
import { Endpoint } from '../../types/request';
import { StyledBtn, StyledSpanIcon } from './ButtonAddNew.css';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ButtonAddNewProps {
  endpoint: Endpoint;
}

const ButtonAddNew: React.FC<ButtonAddNewProps> = ({ endpoint }) => {
  const navigate = useNavigate();
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser);
  const isEditorRole = loggedUser?.role?.name !== 'client';

  return isEditorRole ? (
    <StyledBtn onClick={() => navigate(`/${endpoint}/new`)}>
      <StyledSpanIcon>
        <FaPlus size={14} style={{ color: 'white', fontWeight: 'bold' }} />
      </StyledSpanIcon>
      Add new
    </StyledBtn>
  ) : null;
};

export default ButtonAddNew;
