import React from 'react';
import { createRoot } from 'react-dom/client'; // react-dom/client에서 createRoot 가져오기
import GlobalStyle from './styles/GlobalStyle';
import Theme from './styles/Theme';
import { ThemeProvider } from 'styled-components';

import Routes from './Routes';

const root = createRoot(document.getElementById('root'));

root.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  </>,
);
