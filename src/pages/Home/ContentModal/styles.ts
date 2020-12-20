import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 80%;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 2;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
`;

export const Main = styled.main`
  padding: 1rem;
  width: 100%;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    gap: 2rem;
    justify-content: flex-end;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.light};
`;

export const SuccessMessage = styled.p`
  color: #28a745;
  font-weight: 600;
  font-size: 1rem;
`;
