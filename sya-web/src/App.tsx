import React from 'react';

import GlobalStyle from './styles/global';

import SignUpPartOne from './pages/SignUpPartOne';
import SignUpPartTwo from './pages/SignUpPartTwo';

const App: React.FC = () => (
  <>
    <SignUpPartTwo />
    <SignUpPartOne />
    <GlobalStyle />
  </>
);

export default App;
