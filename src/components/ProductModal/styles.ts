import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 80%;
  max-width: 1150px;
  background: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  z-index: 2;
  padding: 2rem;
`;

export const Container = styled.div``;
