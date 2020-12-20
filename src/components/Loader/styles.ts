import styled from 'styled-components';

export const Loader = styled.div`
  border: 8px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  border-top: 8px solid ${({ theme }) => theme.colors.primary};
  width: 60px;
  height: 60px;
  margin: 0 auto;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
