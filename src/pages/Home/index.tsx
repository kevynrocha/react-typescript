import React, { useState, useEffect } from 'react';

import {
  getProducts,
  deleteProduct,
  editProduct,
} from '../../services/product';
import { Product, ProductForm } from '../../@types/app/product';
import ProductCard from '../../components/ProductCard';
import ProductModal from '../../components/ProductModal';
import Loader from '../../components/Loader';
import ContentModal from './ContentModal';

import * as S from './styles';

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [notHasPermissionEdit, setNotHasPermissionEdit] = useState(true);
  const [notHasPermissionSave, setNotHasPermissionSave] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [page, setPage] = useState(0);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [form, setForm] = useState<ProductForm>({
    code: 0,
    product_name: '',
    barcode: '',
    status: 'published',
    packaging: '',
    brands: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoadingProducts(true);
    setSuccessMessage('');
    const response = await getProducts();
    setProducts(response.products);
    setLoadingProducts(false);
  };

  const handleEditProduct = async (editedForm: ProductForm) => {
    const { success } = await editProduct(editedForm.code, editedForm);

    if (success) {
      setSuccessMessage('Data saved successfully');
      const response = await getProducts();
      setProducts(response.products);
    }
  };

  const handleDeleteProduct = async (code: number) => {
    const { success } = await deleteProduct(code);

    if (success) {
      setModalVisible(false);
      fetchProducts();
    }
  };

  const handleOpenModal = (product: Product) => {
    setForm(product);
    setModalVisible(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNotHasPermissionSave(false);
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCloseModal = async () => {
    setSuccessMessage('');
    setModalVisible(false);
    setNotHasPermissionEdit(true);
    setNotHasPermissionSave(true);
  };

  const handleNotHasPermissionEdit = () => {
    setNotHasPermissionEdit(false);
  };

  const handleNextPage = async (currentPage: number) => {
    setPage(prevState => prevState + 1);
    setLoadingNextPage(true);
    const nextPage = currentPage + 1;
    const response = await getProducts(nextPage);
    setProducts([...products, ...response.products]);
    setLoadingNextPage(false);
  };

  if (loadingProducts) {
    return <Loader />;
  }

  return (
    <>
      <ProductModal modalVisible={modalVisible} onClose={handleCloseModal}>
        <ContentModal
          form={form}
          successMessage={successMessage}
          notHasPermissionEdit={notHasPermissionEdit}
          notHasPermissionSave={notHasPermissionSave}
          handleNotHasPermissionEdit={handleNotHasPermissionEdit}
          handleCloseModal={handleCloseModal}
          handleChange={handleChange}
          handleDeleteProduct={handleDeleteProduct}
          handleEditProduct={handleEditProduct}
        />
      </ProductModal>
      <S.Container>
        {products.map((product, index) => (
          <ProductCard
            key={product._id}
            index={index}
            name={product.product_name}
            imageUrl={product.image_url}
            onClick={() => handleOpenModal(product)}
          />
        ))}
      </S.Container>
      <S.Button
        label={loadingNextPage ? 'Loading...' : 'Load More'}
        onClick={() => handleNextPage(page)}
      />
    </>
  );
};

export default Home;
