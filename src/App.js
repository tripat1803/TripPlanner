import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Authentication/>} />
    </Routes>
  )
}

export default App;
