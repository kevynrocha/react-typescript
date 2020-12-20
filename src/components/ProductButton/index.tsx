import React, { useState } from 'react';
import { FiTrash2, FiEdit2, FiSave } from 'react-icons/fi';

import * as S from './styles';

const colors = {
  primary: '#007bff',
  success: '#28a745',
  danger: '#dc3545',
};

interface ProductButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  status?: 'primary' | 'success' | 'danger';
  icon?: 'trash' | 'edit' | 'save';
}

const ProductButton: React.FC<ProductButtonProps> = ({
  status = 'primary',
  label = 'No name',
  disabled = false,
  icon,
  ...rest
}) => {
  const [iconColor, setIconColor] = useState(colors[status]);

  const icons = {
    trash: <FiTrash2 size={20} color={iconColor} style={{ marginRight: 5 }} />,
    edit: <FiEdit2 size={20} color={iconColor} style={{ marginRight: 5 }} />,
    save: <FiSave size={20} color={iconColor} style={{ marginRight: 5 }} />,
  };

  const handleMouseEnter = () => {
    setIconColor('#fff');
  };

  const handleMouseLeave = () => {
    setIconColor(colors[status]);
  };

  return (
    <S.Button
      status={status}
      disabled={disabled}
      {...rest}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon && icons[icon]}
      {label}
    </S.Button>
  );
};

export default ProductButton;
