// components/SongListPage.tsx
import React, { useEffect, useState } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import CardComponent from '../components/CardComponent';
import { Song } from '../models/song';
import { FaPlus } from 'react-icons/fa';
import { H1, Load, StyledInput } from '../styles/StyledComponents';
import CreateSongModal from '../components/CreateSongModal';
import { Input } from '../styles/StyledComponents';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { getSongsStart } from '../features/song/songSlice';
import {MoonLoader} from 'react-spinners';

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
export const SongButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
font-size: 10px;

`;
export const FilterSelect = styled.select`
padding: 8px;
margin-bottom: 20px;
border: 1px solid #ccc;
border-radius: 5px;
`;

const SongListPage: React.FC = () => {
  const song = useAppSelector(state => state.song.songs);
  const loading = useAppSelector(state => state.auth.isLoading);
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isdeleteclicked, setIsDeleteClicked] = useState(false);
  const [songId, setSongId] = useState('');
  const [openType, setOpenType] = useState('');
  const [editMode, setEditMode] = useState<Song>();

  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedArtist, setSelectedArtist] = useState<string>('All');
  const [selectedAlbum, setSelectedAlbum] = useState<string>('All');

  useEffect(() => {
    dispatch(getSongsStart());
  },[song])

  const toogle = () => {
    setIsModalOpen(!isModalOpen);
    setIsDeleteClicked(false);
  }

  const deleteSong = (song: Song) => {
    setSongId(song._id);
    setIsModalOpen(!isModalOpen)
    setIsDeleteClicked(true);
  }

  const updateSong = (song: Song) => {
    setEditMode(song)
    setIsModalOpen(!isModalOpen)
    console.log("i am clicked");
    
  }
  const filteredSongList = song.filter((song) => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || song.genre === selectedGenre;
    const matchesArtist = selectedArtist === 'All' || song.artist === selectedArtist;
    const matchesAlbum = selectedAlbum === 'All' || song.album === selectedAlbum;
    return matchesSearch && matchesGenre && matchesArtist && matchesAlbum;
  });

  const artists = Array.from(new Set(song.map((song) => song.artist)));
  const albums = Array.from(new Set(
    song
        .filter(song => song.album !== '')
        .map(song => song.album)
));
  const genre = Array.from(new Set(song.map((song) => song.genre)));


  return (
    <>
    {loading ? 
    (
      <Load><MoonLoader  color="#36d7b7" /></Load>
  ) : (
  <>
  <SongListContainer>
      {song.length === 0 ? (
        <div>
          <p>No songs found. Why not add a song?</p>
          <SongButton onClick={toogle}>Add Song</SongButton>
        </div>
      ) : (
        <div>
          <H1>Song List</H1>
          <SearchSongContainer>
            <AddIcon onClick={toogle} />
            <SearchInput placeholder='search for song...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          </SearchSongContainer>
          <FilterContainer>

            <FilterSelect
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
            >
              <option value="All">All Genres</option>
              {genre.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </FilterSelect>
            <FilterSelect
              value={selectedArtist}
              onChange={(e) => setSelectedArtist(e.target.value)}
            >
              <option value="All">All Artists</option>
              {artists.map((artist) => (
                <option key={artist} value={artist}>{artist}</option>
              ))}
            </FilterSelect>
            <FilterSelect
              value={selectedAlbum}
              onChange={(e) => setSelectedAlbum(e.target.value)}
            >
              <option value="All">All Albums</option>
              {albums.map((album) => (
                <option key={album} value={album}>{album}</option>
              ))}
            </FilterSelect>
          </FilterContainer>
          <SongListWrapper>
            {filteredSongList.length === 0 ? (
              <p>No songs found.</p>
            ) : (
              <>
                {filteredSongList.map((song) => (
                  <CardComponent key={song._id} song={song} onDeleteSongClicked={deleteSong} onUpdateClicked={updateSong} />
                ))}
              </>
            )}
          </SongListWrapper>
        </div>
      )}
      {isModalOpen && <CreateSongModal onClose={toogle} isDelete={isdeleteclicked} openType={openType} songId={songId} editMode={editMode}/>}
    </SongListContainer>
    </>)}
    </>
  );
};

export default SongListPage;
