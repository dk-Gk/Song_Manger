import React, { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import styled from '@emotion/styled';
import { StyledNavLink } from '../styles/StyledComponents';
import { Route, Routes, useNavigate } from 'react-router-dom';
import StatisticsPage from './StatisticsPage';
import TestHeader from '../components/Header';
import SongListPage from './SongListPage';
import AllSongsPage from './AllSongsPage';
import SidebarComponent from '../components/SidebarComponent';
import UpdateProfilePage from '../components/UpdateProfile';
import Header from '../components/Header';
import { Song } from '../models/song';


const Wrapper = styled.div`
  display: flex;
`

const Content = styled.div`
  /* margin-top: 20px; */
  /* margin-bottom: 20px; */
  padding: 20px 0;
  text-align: center;
`
const Main = styled.div`
  /* padding: 20px 0;
  text-align: center;
  height: 500px; */

  margin-left: 200px;
  flex: 1;
`

const Line = styled.hr`
background-color: #1beeee;
`;



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

{/* {user && (
  <div>
    <p>Welcome, {user.username}!</p>
    <p>Email: {user.email}</p>
  </div>
)} */}
export default DashboardPage;
