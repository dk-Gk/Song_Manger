// components/StatisticsPage.tsx

import React, { useEffect, useState } from 'react';
import TotalStatistics from '../components/TotalStatistics';
import GenreStatistics from '../components/GenreStatistics';
import styled from '@emotion/styled';
import { H1, Load } from '../styles/StyledComponents';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { getStatisticsStart } from '../features/song/songSlice';
import {MoonLoader} from 'react-spinners';

interface StatisticsPageProps {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  genreCounts: { [genre: string]: number };
  // Add other statistic data props here
}


// .statistics-page {
//   
// }



const StatisticsContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`
const StatisticsPage: React.FC<StatisticsPageProps> = ({
  totalSongs,
  totalArtists,
  totalAlbums,
  totalGenres,
  genreCounts,
  // Pass other statistic data props here
}) => {

  const user = useAppSelector(state => state.auth.user);
  const Stat = useAppSelector(state => state.song.statistics);
  const loading = useAppSelector(state => state.song.isLoading);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isdeleteclicked, setIsDeleteClicked] = useState(false);
  const [songId, setSongId] = useState('');
  const [openType, setOpenType] = useState('');
  // const [editMode, setEditMode] = useState<Song>();

  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedArtist, setSelectedArtist] = useState<string>('All');
  const [selectedAlbum, setSelectedAlbum] = useState<string>('All');

  console.log("loading1", loading);
  useEffect(() => {
    dispatch(getStatisticsStart());
    console.log("loading2", loading);
  },[])

  return (
    <>
    {loading ? 
    (
      <Load><MoonLoader  color="#36d7b7" /></Load>
  ) : (
  <>
    <StatisticsContainer>
      <H1>Statistics</H1>
      {Stat && <TotalStatistics
        totalSongs={Stat.totalSongs}
        totalArtists={Stat.totalArtists}
        totalAlbums={Stat.totalAlbums}
        totalGenres={Stat.totalGenres}
      />}
      <GenreStatistics genreCounts={genreCounts} />
      {/* Render other statistic components here */}
    </StatisticsContainer>
    </>)}
    </>
  );
};

export default StatisticsPage;
