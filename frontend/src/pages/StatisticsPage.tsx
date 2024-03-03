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

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StatisticItem = styled.div`
  margin-bottom: 10px;
`;

const StatisticsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StatisticsContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`
const StatisticsPage: React.FC = () => {

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
      {/* Render other statistic components here */}
    </StatisticsContainer>)}
    </>)}
    </>
  // <Container>
  //     <Title>Overall Statistics</Title>
  //     {Stat && (
  //       <div>
  //         <StatisticItem>Total number of songs: {Stat.totalSongs}</StatisticItem>
  //         <StatisticItem>Total number of artists: {Stat.totalArtists}</StatisticItem>
  //         <StatisticItem>Total number of albums: {Stat.totalAlbums}</StatisticItem>
  //         <StatisticItem>Total number of genres: {Stat.totalGenres}</StatisticItem>
  //         <Title>Songs per Genre:</Title>
  //         <StatisticsList>
  //           {Stat.genreCounts.map((genre) => (
  //             <li key={genre._id}>{genre._id}: {genre.count}</li>
  //           ))}
  //         </StatisticsList>
  //         <Title>Songs per Artist:</Title>
  //         <StatisticsList>
  //           {Stat.artistSongCounts.map((artist) => (
  //             <li key={artist._id}>{artist._id}: {artist.count}</li>
  //           ))}
  //         </StatisticsList>
  //         <Title>Songs per Album:</Title>
  //         <StatisticsList>
  //           {Stat.albumSongCounts.map((album) => (
  //             <li key={album._id}>{album._id}: {album.count}</li>
  //           ))}
  //         </StatisticsList>
  //       </div>
  //     )}
  //   </Container>
  );
};

export default StatisticsPage;
