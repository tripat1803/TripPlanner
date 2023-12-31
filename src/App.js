import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TripRoutes from './routes/TripRoutes';
import { Toaster } from 'react-hot-toast';
import Chatbot from './components/Chatbot';
import Footer from './components/Footer';

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/:id/trip/*' element={<TripRoutes/>} />
      </Routes>
      <Footer/>
      <Chatbot/>
      <Toaster/>
    </Fragment>
  );
}

export default App;