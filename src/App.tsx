import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import Home from './pages/Home';
import Layout from './components/Template';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Home />
    </Layout>
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
