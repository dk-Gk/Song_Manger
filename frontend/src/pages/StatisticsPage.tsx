// components/StatisticsPage.tsx

import React from 'react';
import TotalStatistics from '../components/TotalStatistics';
import GenreStatistics from '../components/GenreStatistics';
import styled from '@emotion/styled';
import { H1 } from '../styles/StyledComponents';
// Import other statistic components as needed

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
  return (
    <StatisticsContainer>
      <H1>Statistics</H1>
      <TotalStatistics
        totalSongs={totalSongs}
        totalArtists={totalArtists}
        totalAlbums={totalAlbums}
        totalGenres={totalGenres}
      />
      <GenreStatistics genreCounts={genreCounts} />
      {/* Render other statistic components here */}
    </StatisticsContainer>
  );
};

export default StatisticsPage;
