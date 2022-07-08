import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';
import DefaultLayout from './layouts/DefaultLayout';
import HomeView from './views/HomeView';
import CalculatorView from './views/CalculatorView';
import QuotesView from './views/QuotesView';

import './assets/app.css';

const App = () => (
  <ThemeProvider theme={theme}>
    <DefaultLayout>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/calculator" element={<CalculatorView />} />
        <Route path="/quotes" element={<QuotesView />} />
      </Routes>
    </DefaultLayout>
  </ThemeProvider>
);

export default App;
