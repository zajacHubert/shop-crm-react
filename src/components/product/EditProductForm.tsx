import React, { ChangeEvent, useState } from 'react';
import * as yup from 'yup';
import { Formik, FormikHelpers, FormikProps, useFormikContext } from 'formik';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { openPopup } from '../../store/slices/popupSlice';

import { useDispatch } from 'react-redux';
import { FormAddProduct } from '../../types/product';
import { ALLOWED_TYPES } from '../../constants/form';
import SpinnerBtn from '../ui/SpinnerBtn';
import { addProduct } from '../../api/product';

import {
  StyledBoxLabelError,
  StyledBtnSubmit,
  StyledContainerUpload,
  StyledForm,
  StyledInput,
  StyledInputUpload,
  StyledLabel,
  StyledLabelUpload,
  StyledPError,
  StyledPErrorSubmit,
  StyledPTypes,
  StyledPUpload,
  StyledSpanUpload,
  StyledSVGUpload,
  StyledTextarea,
  StyledTitleForm,
} from '../ui/Form.css';
import { useNavigate } from 'react-router-dom';
import CustomSelect from '../ui/CustomSelect';
import { getAllRecords } from '../../api/shopApi';
import { Endpoint } from '../../types/request';

const EditProductForm = () => {
  const dispatch = useDispatch();
  const [uploadedFileName, setUploadedFileName] = useState<string>('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const formikContext = useFormikContext();

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () => getAllRecords(Endpoint.Categories),
  });

  const addProductMutation = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      formikContext.resetForm();
      dispatch(openPopup('Product has been added!'));
    },
  });

  const initialValues: FormAddProduct = {
    title: '',
    image: null as File | null,
    description: '',
    price: 0,
    category_id: '',
  };

  const validationSchema = yup.object().shape({
    title: yup.string().required().min(4).max(50),
    image: yup
      .mixed()
      .test('fileType', 'Only image files are allowed', (value) => {
        if (!(value instanceof File)) {
          return false;
        }
        return ALLOWED_TYPES.includes(value.type);
      })
      .test('fileSize', 'File size is too large', (value) => {
        if (!(value instanceof File)) {
          return false;
        }

        const maxSizeInBytes = 5 * 1024 * 1024;
        return value.size <= maxSizeInBytes;
      }),
    price: yup
      .number()
      .required('Price is required')
      .positive('Price must be positive')
      .typeError('Price must be a number')
      .test('is-decimal', 'Price must have up to 2 decimal places', (value) => {
        if (!value) return true;
        return /^\d+(\.\d{1,2})?$/.test(value.toString());
      }),
    description: yup.string().required().min(4).max(200),
    category_id: yup.string().required(),
  });

  const handleInputFileChange = (
    event: ChangeEvent<HTMLInputElement>,
    formik: FormikProps<FormAddProduct>
  ) => {
    const file = event.currentTarget.files
      ? event.currentTarget.files[0]
      : null;
    formik.setFieldValue('image', file);
    setUploadedFileName(file ? file.name : '');
  };

  const submitForm = async (
    values: FormAddProduct,
    { resetForm }: FormikHelpers<FormAddProduct>
  ) => {
    addProductMutation.mutate(values);
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
            <StyledTitleForm>Add a new product</StyledTitleForm>
            <StyledBoxLabelError>
              <StyledLabel>Title</StyledLabel>
              {errors.title && touched.title && (
                <StyledPError>{errors.title}</StyledPError>
              )}
            </StyledBoxLabelError>
            <StyledInput
              name='title'
              type='text'
              value={values.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledBoxLabelError>
              <StyledLabel>Image</StyledLabel>
              {errors.image && touched.image && (
                <StyledPError>{errors.image}</StyledPError>
              )}
            </StyledBoxLabelError>
            <StyledLabelUpload>
              <StyledContainerUpload>
                <StyledSVGUpload
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 16'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                  />
                </StyledSVGUpload>
                <StyledPUpload>
                  {uploadedFileName ? (
                    <StyledSpanUpload>
                      {uploadedFileName.length > 60
                        ? `${uploadedFileName.slice(0, 60)}...`
                        : uploadedFileName}
                    </StyledSpanUpload>
                  ) : (
                    <>
                      <StyledSpanUpload>
                        <StyledSpanUpload>Click to upload</StyledSpanUpload>
                        or drag and drop
                      </StyledSpanUpload>
                      <StyledPTypes>
                        PNG, JPG, JPEG, WEBP (MAX. 5MB)
                      </StyledPTypes>
                    </>
                  )}
                </StyledPUpload>
              </StyledContainerUpload>
              <StyledInputUpload
                id='dropzone-file'
                type='file'
                name='image'
                accept='.png, .jpeg, .jpg, .webp'
                onChange={(event) => handleInputFileChange(event, formik)}
              />
            </StyledLabelUpload>
            <StyledBoxLabelError>
              <StyledLabel>Description</StyledLabel>
              {errors.description && touched.description && (
                <StyledPError>{errors.description}</StyledPError>
              )}
            </StyledBoxLabelError>
            <StyledTextarea
              name='description'
              rows={4}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledBoxLabelError>
              <StyledLabel>Price</StyledLabel>
              {errors.price && touched.price && (
                <StyledPError>{errors.price}</StyledPError>
              )}
            </StyledBoxLabelError>
            <StyledInput
              name='price'
              type='number'
              step={0.01}
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <StyledBoxLabelError>
              <StyledLabel>Category</StyledLabel>
              {errors.category_id && touched.category_id && (
                <StyledPError>{errors.category_id}</StyledPError>
              )}
            </StyledBoxLabelError>
            <CustomSelect
              name='category_id'
              value={values.category_id}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value=''>Choose category</option>
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </CustomSelect>
            <StyledBtnSubmit>
              Add product{addProductMutation.isPending && <SpinnerBtn />}
            </StyledBtnSubmit>
            {addProductMutation.isError && (
              <StyledPErrorSubmit>
                {addProductMutation.error.message}
              </StyledPErrorSubmit>
            )}
          </StyledForm>
        );
      }}
    </Formik>
  );
};

export default EditProductForm;
