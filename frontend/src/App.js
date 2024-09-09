import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Design/Sidebar';
import Layout from './components/Design/Layout';
import HomePage from './pages/HomePage';
import FarmPage from './pages/FarmPage';
import useGlobalStyles from './styles/layoutStyles';



const App = () => {
  const globalClasses = useGlobalStyles();

  return (
    <Router>
      <Layout>
        <Sidebar />
        <main className={globalClasses.content}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/farms" element={<FarmPage />} />
          </Routes>
        </main>
      </Layout>
    </Router>

  );
};

export default App;