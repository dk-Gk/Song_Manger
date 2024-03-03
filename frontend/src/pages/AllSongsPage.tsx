import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import CardComponent from '../components/CardComponent';
import CreateSongModal from '../components/CreateSongModal';
import { getAllSongsStart } from '../features/song/songSlice';
import { Song } from '../models/song';
import { Input, Load } from '../styles/StyledComponents';
import { FilterContainer, FilterSelect } from './SongListPage';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px;
`

const SearchInput = styled(Input)`
padding: 8px;
width: auto;
color: #413f3f;
margin-bottom: 20px;
`
const AllSongsPage = () => {
  const Allsongs = useAppSelector(state => state.song.AllSongs);
  const loading = useAppSelector(state => state.auth.isLoading);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isdeleteclicked, setIsDeleteClicked] = useState(false);
  const [songId, setSongId] = useState('');
  const [openType, setOpenType] = useState('');
  const [editMode, setEditMode] = useState<Song>();
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [selectedArtist, setSelectedArtist] = useState<string>('All');
  const [selectedAlbum, setSelectedAlbum] = useState<string>('All');

  useEffect(() => {
    dispatch(getAllSongsStart());
    console.log(loading);
  }, [Allsongs])

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

  const filteredSongList = Allsongs.filter((song) => {
    const matchesSearch = song.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || song.genre === selectedGenre;
    const matchesArtist = selectedArtist === 'All' || song.artist === selectedArtist;
    const matchesAlbum = selectedAlbum === 'All' || song.album === selectedAlbum;
    return matchesSearch && matchesGenre && matchesArtist && matchesAlbum;
  });

  const artists = Array.from(new Set(Allsongs.map((song) => song.artist)));
  const albums = Array.from(new Set(
    Allsongs
        .filter(song => song.album !== '')
        .map(song => song.album)
));
  const genre = Array.from(new Set(Allsongs.map((song) => song.genre)));
  return (
    <>
      {loading ?
        (
          <Load><MoonLoader color="#36d7b7" /></Load>
        ) : (
          <>
            <Container>
              <h1>All Songs</h1>
              <SearchInput type='text' placeholder='search for song' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
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
              {filteredSongList.length === 0 ? (
                <p>No songs found.</p>
              ) : (
                <>
                  {filteredSongList.map((song) => (
                    <CardComponent key={song._id} song={song} onDeleteSongClicked={deleteSong} onUpdateClicked={updateSong} />
                  ))}
                </>
              )}
              {isModalOpen && <CreateSongModal onClose={toogle} isDelete={isdeleteclicked} openType={openType} songId={songId} editMode={editMode}/>}
            </Container>
          </>)}
    </>
  )
}

export default AllSongsPage