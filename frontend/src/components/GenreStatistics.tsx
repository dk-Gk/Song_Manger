import styled from '@emotion/styled';
import React from 'react';
import { H2 } from '../styles/StyledComponents';

interface GenreStatisticsProps {
  genreCounts: { _id: string, count: number} [];
  title: string;
}

const GenerContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ul {
  display: flex;
  flex-wrap: wrap;
}

 li {
  flex: 0 0 calc(50% - 10px);
}
`
const GenreStatistics: React.FC<GenreStatisticsProps> = ({ genreCounts, title }) => {
  return (
    <GenerContainer>
      <H2>{title}</H2>
      <ul>
        {genreCounts.map((genre) => (
          <li key={genre._id}>{genre._id}: {genre.count}</li>
        ))}
      </ul>
      </GenerContainer>
  );
};

export default GenreStatistics;
