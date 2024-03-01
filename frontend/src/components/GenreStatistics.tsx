// components/GenreStatistics.tsx

import styled from '@emotion/styled';
import React from 'react';
import { H2 } from '../styles/StyledComponents';

interface GenreStatisticsProps {
  genreCounts: { [genre: string]: number };
}


// h1 {
//   text-align: center;
//   color: #333;
// }

// .total-statistics, .genre-statistics, .artist-statistics, .album-statistics {
//   background-color: #f9f9f9;
//   border-radius: 8px;
//   padding: 20px;
//   margin-bottom: 20px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// }

// h2 {
//   color: #555;
//   margin-bottom: 15px;
// }

// ul {
  // list-style: none;
  // padding: 0;
// }

// li {
  // margin-bottom: 10px;
  // color: #333;
// }

// /* Styling for genre statistics */
// .genre-statistics ul {
//   display: flex;
//   flex-wrap: wrap;
// }

// .genre-statistics li {
//   flex: 0 0 calc(50% - 10px); /* Two columns with 10px margin between */
// }

// @media (max-width: 600px) {
//   .genre-statistics li {
//     flex: 0 0 100%; /* Full width on small screens */
//   }
// }

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
  flex: 0 0 calc(50% - 10px); /* Two columns with 10px margin between */
}
`
const GenreStatistics: React.FC<GenreStatisticsProps> = ({ genreCounts }) => {
  return (
    <GenerContainer>
      <H2>Genre Statistics</H2>
      <ul>
        {Object.entries(genreCounts).map(([genre, count]) => (
          <li key={genre}>{genre}: {count}</li>
        ))}
      </ul>
      </GenerContainer>
  );
};

export default GenreStatistics;
