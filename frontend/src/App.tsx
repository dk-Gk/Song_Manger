import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
import StatisticsPage from './pages/StatisticsPage';
import styled from '@emotion/styled';
import TestHeader from './components/Header';
import TestSidebar from './components/SidebarComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useAppSelector } from './app/hooks';
import PrivateRoute from './components/PrivateRoute';
import SongListPage from './pages/SongListPage';
import { useEffect } from 'react';
import { User } from './models/user';

function App() {
  const user = useAppSelector(state => state.auth.user);
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path='/dashboard/*' element={<DashboardPage />} />
        </Route>
        {/* <Route path='/dashboard/*' element={<DashboardPage />} /> */}
        <Route path='/errorPage' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
