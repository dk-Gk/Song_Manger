import styled from '@emotion/styled';
import React from 'react';
import { H2 } from '../styles/StyledComponents';

interface TotalStatisticsProps {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
}


const TotalContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const ListContainer = styled.ul`
   list-style: none;
  padding: 0;
`
const ListItems = styled.li`
  margin-bottom: 10px;
  color: #333;
`
const TotalStatistics: React.FC<TotalStatisticsProps> = ({ totalSongs, totalArtists, totalAlbums, totalGenres }) => {
  return (
    <TotalContainer>
      <H2>Total Statistics</H2>
      <ListContainer>
        <ListItems>Total Songs: {totalSongs}</ListItems>
        <ListItems>Total Artists: {totalArtists}</ListItems>
        <ListItems>Total Albums: {totalAlbums}</ListItems>
        <ListItems>Total Genres: {totalGenres}</ListItems>
      </ListContainer>
    </TotalContainer>
  );
};

export default TotalStatistics;
