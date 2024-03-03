import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { MoonLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import GenreStatistics from '../components/GenreStatistics';
import TotalStatistics from '../components/TotalStatistics';
import { getStatisticsStart } from '../features/song/songSlice';
import { H1, Load } from '../styles/StyledComponents';


const StatisticsContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`
const StatisticsPage: React.FC = () => {
  const Stat = useAppSelector(state => state.song.statistics);
  const loading = useAppSelector(state => state.song.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStatisticsStart());
  },[])

  return (
    <>
    {loading ? 
    (
      <Load><MoonLoader  color="#36d7b7" /></Load>
  ) : (
  <>
    {Stat && (<StatisticsContainer>
      <H1>Statistics</H1>
      {Stat && <TotalStatistics
        totalSongs={Stat.totalSongs}
        totalArtists={Stat.totalArtists}
        totalAlbums={Stat.totalAlbums}
        totalGenres={Stat.totalGenres}
      />}
      <GenreStatistics genreCounts={Stat.genreCounts} title='Genre Statistics' />
      <GenreStatistics genreCounts={Stat.artistSongCounts} title='Songs per Artist:' />
      <GenreStatistics genreCounts={Stat.albumSongCounts} title='Songs per Album:' />
    </StatisticsContainer>)}
    </>)}
    </>
  );
};

export default StatisticsPage;
