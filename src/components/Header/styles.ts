import styled from 'styled-components';

export const ProductHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.dark};
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.light};
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
