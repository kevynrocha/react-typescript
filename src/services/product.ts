import api from './api';

import { ProductForm, ProductRequest } from '../@types/app/product';

export const getProducts = async (page = 0): Promise<ProductRequest> => {
  try {
    const { data } = await api.get('/', {
      params: {
        page,
      },
    });
    return data;
  } catch (e) {
    return e;
  }
};

export const editProduct = async (
  code: number,
  product: ProductForm,
): Promise<{ success: boolean }> => {
  try {
    const { data } = await api.put(`${code}`, product);
    return data;
  } catch (e) {
    return e;
  }
};

export const deleteProduct = async (
  code: number,
): Promise<{ success: boolean }> => {
  try {
    const { data } = await api.delete(`${code}`);
    return data;
  } catch (e) {
    return e;
  }
};
