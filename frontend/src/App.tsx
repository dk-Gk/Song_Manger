import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ViewDetailPage from './pages/ViewDetailPage';
import DashboardPage from './pages/DashboardPage';
import ErrorPage from './pages/ErrorPage';
// import './components/style.css'
import StatisticsPage from './pages/StatisticsPage';
import styled from '@emotion/styled';
import TestHeader from './components/Header';
import TestSidebar from './components/SidebarComponent';
import  { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'



//temp

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  margin-left: 200px; /* Width of the sidebar */
  flex-grow: 1;
`;

function App() {
  return (
    // <AppContainer>
    //   <TestSidebar />
    //   <MainContent>
    //     <TestHeader />
    <>
    <ToastContainer />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/dashboard/*' element={<DashboardPage />} />
          <Route path='/songs/:id' element={<ViewDetailPage />} />
          <Route path='/errorPage' element={<ErrorPage />} />
        </Routes>
        </>
    //   </MainContent>
    // </AppContainer>
  );
}

export default App;
