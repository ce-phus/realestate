import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Register } from './pages';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <div className='dark:bg-dark'>
        <Header />
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} exact />
          <Route path='/register' element={<Register />} exact />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
