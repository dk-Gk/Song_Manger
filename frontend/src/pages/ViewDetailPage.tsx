// components/ViewDetailPage.tsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { boxShadow, linkStyle } from '../styles/commonStyle';
import { Song } from '../models/song';

// Dummy data for demonstration
const dummySongData = [
    { id: 1, title: 'Song 1', artist: 'Artist 1', album: 'Album 1', genre: 'Genre 1', description: 'Description 1' },
    { id: 2, title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Genre 2', description: 'Description 2' },
    // Add more dummy data as needed
];

// Styled components
const DetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SongDetailCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  ${boxShadow};
`;

const SongTitle = styled.h2`
  color: #333;
`;

const SongInfo = styled.p`
  color: #666;
`;

const Description = styled.p`
  color: #666;
`;

const BackButton = styled(Link)`
  ${linkStyle};
  display: inline-block;
  margin-top: 20px;
`;

const ViewDetailPage: React.FC = () => {
  //temp
  const song = { _id: '1', title: 'Song 1', artist: 'Artist 1', album: 'Album 1', genre: 'Genre 1' };
    // let song = null;
    // const { id } = useParams<{ id: string }>();
    // if (id) {

    //     const songId = parseInt(id);
    //      song = dummySongData.find((song) => song.id === songId);
    // }

    // Find the song data by ID

    // if (!song) {
    //     return <div>Song not found!</div>;
    // }

    return (
        <DetailContainer>
            <h1>Song Details</h1>
            <SongDetailCard>
                <SongTitle>{song.title}</SongTitle>
                <SongInfo>Artist: {song.artist}</SongInfo>
                <SongInfo>Album: {song.album}</SongInfo>
                <SongInfo>Genre: {song.genre}</SongInfo>
                <BackButton to="/dashboard/songs">Back to Song List</BackButton>
            </SongDetailCard>
        </DetailContainer>
    );
};

export default ViewDetailPage;
