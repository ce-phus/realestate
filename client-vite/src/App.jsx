import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Register, Activation, Login, PropertyDetail, Profile} from './pages';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <div className='dark:bg-dark'>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Layout><Home /></Layout>} exact />
          <Route path='/register/' element={<Register />} exact />
          <Route path="/activate/:uid/:token/" element={<Activation />} />
          <Route path="/login/" element={<Login />} exact/>
          <Route path="/property/:slug/" element={<PropertyDetail exact/>} />
          <Route path="/profile/:username/" element={<Profile />} exact/>
        </Routes>
      </div> 
    </Router>
  );
};

export default App;
