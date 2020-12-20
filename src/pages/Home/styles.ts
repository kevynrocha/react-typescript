import styled from 'styled-components';
import ProductButton from '../../components/ProductButton';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 56px;
  }
`;

export const Button = styled(ProductButton)`
  margin: 2rem auto;

  @media (min-width: 768px) {
    margin: 3rem auto 2rem;
  }
`;
