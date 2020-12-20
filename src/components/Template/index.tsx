import React, { ReactNode } from 'react';

import Header from '../Header';

import * as S from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => (
  <S.Wrapper>
    <Header />
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default Layout;
