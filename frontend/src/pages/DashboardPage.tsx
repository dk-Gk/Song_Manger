import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SidebarComponent from '../components/SidebarComponent';
import UpdateProfilePage from '../components/UpdateProfile';
import AllSongsPage from './AllSongsPage';
import SongListPage from './SongListPage';
import StatisticsPage from './StatisticsPage';


const Wrapper = styled.div`
  display: flex;
`
const Main = styled.div`
  margin-left: 200px;
  flex: 1;
`

const DashboardPage= () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/dashboard/songs')
  },[])

  return (
    <>
      <Header />
      <Wrapper>
      
        <SidebarComponent />
        <Main>
          <Routes>
            <Route path='/songs' element={<SongListPage />} />
            <Route path='/allsongs' element={<AllSongsPage />} />
            <Route path='/statistics' element={<StatisticsPage />} />
            <Route path='/profile' element={<UpdateProfilePage />} />
          </Routes>
        </Main>
      </Wrapper>
    </>
  );
};
export default DashboardPage;
