import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import MainPage from './pages/MainPage';

const App = () => {
  return (
    <>
    <MainPage />
    {/* <Routes>
      <Route path='/' element={<Authentication/>} />
    </Routes> */}
    </>
  )
}

export default App;
