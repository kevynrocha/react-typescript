import React from 'react';

import * as S from './styles';

interface ProductInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  legend: string;
  disabled: boolean;
}

const ProductInput: React.FC<ProductInputProps> = ({
  legend,
  disabled,
  ...rest
}: ProductInputProps) => (
  <S.Fieldset disabled={disabled}>
    <S.Legend>{legend}</S.Legend>
    <S.Input {...rest} />
  </S.Fieldset>
);

export default ProductInput;
