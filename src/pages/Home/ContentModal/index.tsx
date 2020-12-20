/* eslint-disable no-unused-vars */
import React from 'react';
import { FiX } from 'react-icons/fi';

import { ProductForm } from '../../../@types/app/product';

import ProductInput from '../../../components/ProductInput';
import ProductButton from '../../../components/ProductButton';
import * as S from './styles';

interface ContentModalProps {
  form: ProductForm;
  successMessage: string;
  notHasPermissionEdit: boolean;
  notHasPermissionSave: boolean;
  handleNotHasPermissionEdit: () => void;
  handleCloseModal: () => void;
  handleEditProduct: (form: ProductForm) => Promise<void>;
  handleDeleteProduct: (code: number) => Promise<void>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContentModal: React.FC<ContentModalProps> = ({
  form,
  notHasPermissionEdit,
  notHasPermissionSave,
  successMessage,
  handleNotHasPermissionEdit,
  handleCloseModal,
  handleEditProduct,
  handleDeleteProduct,
  handleChange,
}) => (
  <S.Wrapper>
    <S.Header>
      <S.Title>{form.product_name || 'Product without name'}</S.Title>
      <FiX
        color="white"
        size={30}
        onClick={() => handleCloseModal()}
        style={{ cursor: 'pointer' }}
      />
    </S.Header>
    <S.Main>
      <>
        <ProductInput
          legend="Barcode"
          name="barcode"
          disabled={notHasPermissionEdit}
          value={form.barcode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <ProductInput
          legend="Status"
          name="status"
          disabled
          value={form.status}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <ProductInput
          legend="Packaging"
          name="packaging"
          disabled={notHasPermissionEdit}
          value={form.packaging}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        <ProductInput
          legend="Brands"
          name="brands"
          disabled={notHasPermissionEdit}
          value={form.brands}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
        {successMessage && (
          <S.SuccessMessage>{successMessage}</S.SuccessMessage>
        )}
      </>
      <S.Footer>
        <ProductButton
          label="Delete"
          status="danger"
          icon="trash"
          onClick={() => handleDeleteProduct(form.code)}
        />
        <ProductButton
          label="Edit"
          icon="edit"
          onClick={() => handleNotHasPermissionEdit()}
        />
        <ProductButton
          label="Save"
          status="success"
          icon="save"
          disabled={notHasPermissionSave}
          onClick={() => handleEditProduct(form)}
        />
      </S.Footer>
    </S.Main>
  </S.Wrapper>
);

export default ContentModal;
