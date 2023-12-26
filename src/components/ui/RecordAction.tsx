import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  openConfirmDialog,
  setRecordToDelete,
} from '../../store/slices/confirmDialogSlice';
import { FaTrash } from 'react-icons/fa';
import { Endpoint } from '../../types/request';
import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';
import { StyledContainer } from './RecordAction.css';

interface RecordActionProps {
  id: string;
  endpoint: Endpoint;
}

const RecordAction = ({ id, endpoint }: RecordActionProps) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state: RootState) => state.user.loggedUser);

  const isEditorRole = loggedUser?.role?.name !== 'client';
  const isNotProductEndpoint = endpoint !== Endpoint.Products;

  const removeProduct = () => {
    dispatch(setRecordToDelete({ id, endpoint }));
    dispatch(openConfirmDialog());
  };

  const previewLink = (
    <Link to={`/${endpoint}/${id}`}>
      <BsFillEyeFill />
    </Link>
  );

  const content = (
    <StyledContainer>
      {isEditorRole && isNotProductEndpoint && previewLink}
      <Link to={`/${Endpoint.Products}/${id}/edit`}>
        <MdEdit size={20} />
      </Link>
      {isEditorRole && (
        <FaTrash
          size={18}
          onClick={removeProduct}
          style={{ cursor: 'pointer' }}
        />
      )}
    </StyledContainer>
  );

  return content;
};

export default RecordAction;
