import styled from 'styled-components';

type WrapperProps = {
  index: number;
};

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: 0 4px 5px 0 ${({ theme }) => theme.colors.dark};
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-size: 1rem;
  color: purple;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
`;
