import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import HomeView from './views/HomeView';
import CalculatorView from './views/CalculatorView';
import QuotesView from './views/QuotesView';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/calculator" element={<CalculatorView />} />
          <Route path="/quotes" element={<QuotesView />} />
        </Routes>
      </DefaultLayout>
    );
  }
}

export default App;
