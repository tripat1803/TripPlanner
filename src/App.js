import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from './pages/Authentication';
<<<<<<< HEAD
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
=======
import Home from './pages/Home';
import Navbar from './components/Navbar';
import TripRoutes from './routes/TripRoutes';

const App = () => {
  return (
    <Fragment>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/auth' element={<Authentication/>} />
        <Route path='/:id/trip/*' element={<TripRoutes/>} />
      </Routes>
    </Fragment>
  );
>>>>>>> 39213d8c4efeb8961a67f81389ef5804b171f5a7
}

export default App;