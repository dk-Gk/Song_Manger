// DashboardPage.tsx
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
  /* gap: 50px; */
  /* margin-top: 40px; */
`

const SideNav = styled.aside`
/* display: flex;
flex-direction: column;
align-items: center; */
padding: 8px;
border: 1px solid #ccc;
border-radius: 4px;
min-height: 300px;
max-width: 300px;

flex: 1;
`;

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

const totalSongs = 100;
const totalArtists = 50;
const totalAlbums = 30;
const totalGenres = 10;
const genreCounts = {
  Pop: 20,
  Rock: 30,
  HipHop: 15,
  // Add more genres as needed
};

const DashboardPage= () => {
  const user = useAppSelector(state => state.auth.user);
  const song = useAppSelector(state => state.song.songs);
  const navigate = useNavigate();


  useEffect(() => {
    navigate('/dashboard/songs')
  },[])
  // useEffect(() =>{
  //   if (!user) {
  //     console.log("from dashboard", user);
  //     navigate('/login');
  //   }
  // },[user])

  return (
    <>
      <Header />
      <Wrapper>
        {/* <h2>Dashboard</h2> */}
        {/* <SideNav>
        <Content>
        <StyledNavLink to={'/dashboard/mysongs'}>My Songs</StyledNavLink>
        </Content>
        <Line />
        <Content>
        <StyledNavLink to={'/dashboard/allsongs'}>All Songs</StyledNavLink>
        </Content>
        <Line />
        <Content>
        <StyledNavLink to={'/dashboard/statistics'}>Statistics</StyledNavLink>
        </Content>
        <Line />
        </SideNav>
        
        <Main>
        <Routes>
        <Route path='/mysongs' element={<MySongPage />}/>
        <Route path='/allsongs' element={<AllSongPage />}/>
        <Route path='/statistics' element={<StatisticsPage />}/>
        </Routes>
      </Main> */}

        <SidebarComponent />
        <Main>

          {/* <TestSongList /> */}
          <Routes>
            <Route path='/songs' element={<SongListPage />} />
            <Route path='/allsongs' element={<AllSongsPage />} />
            <Route path='/statistics' element={<StatisticsPage
              totalSongs={totalSongs}
              totalArtists={totalArtists}
              totalAlbums={totalAlbums}
              totalGenres={totalGenres}
              genreCounts={genreCounts}
            />} />
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
