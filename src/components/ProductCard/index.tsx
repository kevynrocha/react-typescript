import React, { useState } from 'react';
import ProductButton from '../ProductButton';
import ProductImage from '../../assets/no-product.jpg';

import * as S from './styles';

interface ProductCardProps {
  name: string;
  index: number;
  imageUrl: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  imageUrl,
  index,
  onClick,
}: ProductCardProps) => {
  const [image, setImage] = useState(imageUrl);

  return (
    <S.Wrapper onClick={onClick} index={index}>
      <S.Image src={image} alt={name} onError={() => setImage(ProductImage)} />
      <S.Title>{name || 'Product without name'}</S.Title>
      <S.ContainerButton>
        <ProductButton label="See Details" />
      </S.ContainerButton>
    </S.Wrapper>
  );
};

export default ProductCard;
