import React from 'react';

import * as S from './styles';

interface ProductModalProps {
  modalVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ProductModal: React.FC<ProductModalProps | null> = ({
  modalVisible,
  onClose,
  children,
}: ProductModalProps) => {
  if (!modalVisible) {
    return null;
  }

  return (
    <>
      <S.Overlay onClick={onClose} />
      {children}
    </>
  );
};

export default ProductModal;
