// components/SongListPage.tsx
import React, { useState } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { linkStyle } from '../styles/commonStyle';
import CardComponent from '../components/CardComponent';
import { Song } from '../models/song';
import { FaPlus } from 'react-icons/fa';
import { StyledInput } from '../styles/StyledComponents';
import CreateSongModal from '../components/CreateSongModal';
import { Input } from '../styles/StyledComponents';

// Styled components
const SongListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SearchSongContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`
const AddIcon = styled(FaPlus)`
background-color: #ada9a3;
border: 1px solid gray;
padding: 7px;
/* margin: 0; */
color: #302f2e;
:hover {
  background-color: #696664;
  color: #d1cec8;
}
cursor: pointer;
`
const SearchInput = styled(Input)`
padding: 8px;
width: auto;
color: #413f3f;
`
const SongListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 50px;
`
const SongItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SongTitle = styled.h2`
  color: #333;
`;

const SongDetail = styled.p`
  color: #666;
`;

const ViewDetailsLink = styled(Link)`
  ${linkStyle};
`;

const AddSongButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const SongListPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterSong, setFilterSong] = useState('');
  const [isdeleteclicked, setIsDeleteClicked] = useState(false);

  const navigate = useNavigate();

  // Dummy data for demonstration
  const songs: Song[] = [
    { _id: '1', title: 'Song 1', artist: 'Artist 1', album: 'Album 1', genre: 'Genre 1' },
    { _id: '3', title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Genre 2' },
    { _id: '4', title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Genre 2' },
    { _id: '6', title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Genre 2' },
    // Add more dummy data as needed
  ];

  const toogle = () => {
    setIsModalOpen(!isModalOpen);
    setIsDeleteClicked(false);
  }

  const deleteSong = (song: Song) => {
    setIsModalOpen(!isModalOpen)
    setIsDeleteClicked(true);
  }

  const viewDetail = () => {
    console.log("i am clicked");
    // navigate('dashboard/detail')
  }

  return (
    <SongListContainer>
      {songs.length === 0 ? (
        <div>
          <p>No songs found. Why not add a song?</p>
          <AddSongButton onClick={toogle}>Add Song</AddSongButton>
        </div>
      ) : (
        <div>
          <h1>Song List</h1>
          <SearchSongContainer>
            <AddIcon onClick={toogle} />
            <SearchInput placeholder='search for song...' value={filterSong} onChange={(e) => setFilterSong(e.target.value)} />
          </SearchSongContainer>
          <SongListWrapper>
            {songs.map((song) => (
              <CardComponent key={song._id} song={song} onDeleteSongClicked={deleteSong} onViewDetailClicked={viewDetail}/>
            ))}
          </SongListWrapper>
        </div>
      )}
      {isModalOpen && <CreateSongModal onClose={toogle} isDelete={isdeleteclicked} />}
    </SongListContainer>
  );
};

export default SongListPage;
