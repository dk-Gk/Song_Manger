import styled from '@emotion/styled';
import React from 'react'
import { boxShadow } from '../styles/commonStyle';
import CardComponent from '../components/CardComponent';
import { Song } from '../models/song';
import { NavLink, useNavigate } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px;
`

const SearchBar = styled.input`
  /* background-color: #757373; */
  background: transparent;
  width: 75%;
  color: #757373;
  /* border: none; */
  border-radius: 10px;
  border-color: #f8e6e6;
  padding: 15px 18px;
  outline: none;
  transition: box-shadow 0.3s ease;
  font-size: 20pt;
  margin-bottom: 20px;
  :focus {
  border-color: #5b5b61;
  ${boxShadow}
  /* Add any additional styles you want to apply when the input is focused */
}
`;

const deleteSong = (song: Song) => {
  console.log(song)
}


const AllSongsPage = () => {

  const navigate = useNavigate()
    const songs: Song[] = [
        { _id: '1', title: 'Song 1', artist: 'Artist 1', album: 'Album 1', genre: 'Genre 1' },
        { _id: '3', title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Genre 2' },
        { _id: '4', title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Genre 2' },
        { _id: '6', title: 'Song 2', artist: 'Artist 2', album: 'Album 2', genre: 'Genre 2' },
        // // Add more dummy data as needed
      ];

      const viewDetail = () => {
        <NavLink to={'/detail'} />
      }
    
  return (
    <Container>
        <h1>All Songs</h1>
        <SearchBar type='text' placeholder='search for song'/>
        {songs.map((song) => (
                <CardComponent  key={song._id} song={song} onDeleteSongClicked={deleteSong} onViewDetailClicked={viewDetail}/>
              ))}
    </Container>
  )
}

export default AllSongsPage