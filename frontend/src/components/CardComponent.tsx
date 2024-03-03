import styled from '@emotion/styled';
import React from 'react'
import { boxShadow, linkStyle } from '../styles/commonStyle';
import { Link } from 'react-router-dom';
import { Song } from '../models/song';
import CreateSongModal from './CreateSongModal';
import { MdDelete } from 'react-icons/md'
import { StyledNavLink } from '../styles/StyledComponents';
import { useAppSelector } from '../app/hooks';


const CardContainer = styled.div`
 width: 200px;
 position: relative;
  background-color: #fff8f8;
  border-radius: 8px;
  padding: 0px;
  margin-bottom: 20px;
  cursor: pointer;
  :hover{
    background-color: #fdf2f2;
    font-weight: bolder;
  }
  ${boxShadow};
`;

const DeleteIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: #d40e0e;
  :hover {
    color: #f10d0d;
  }
`

const SongListContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SongListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  margin-bottom: 30px;
`

const SongTitle = styled.h4`
  color: #333;
  margin: 0;
`;
const SongInfo = styled.p`
  color: #666;
`;

const SongDetail = styled.p`
  color: #887a7a;
  margin: 0;
`;

const ViewDetailsLink = styled(Link)`
  ${linkStyle};
`;
const UpdateBtn = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  :hover {
    background-color: #0056b3;
  } 
`;

interface SongsProps {
  song: Song,
  onUpdateClicked?: (song: Song) => void
  onDeleteSongClicked?: (song: Song) => void,
}

const CardComponent = ({ song, onDeleteSongClicked, onUpdateClicked }: SongsProps) => {
  const user = useAppSelector(state => state.auth.user);
  let isEqual;
  if (user) {
    if (user._id === song.user)
    isEqual = true;
  }
  return (
    <CardContainer>
      {isEqual && <DeleteIcon onClick={(e) => {
        if (onDeleteSongClicked)
          onDeleteSongClicked(song);
        e.stopPropagation();
      }}>
        <MdDelete />
      </DeleteIcon>}
      <SongTitle>{song.title}</SongTitle>
      <SongInfo>Artist: {song?.artist}</SongInfo>
      <SongInfo>Album: {song?.album}</SongInfo>
      <SongInfo>Genre: {song?.genre}</SongInfo>
      <SongDetail>Createde on 12/23/14</SongDetail>
      {isEqual && <UpdateBtn onClick={(e) => {
        if (onUpdateClicked)
          onUpdateClicked(song)
        e.stopPropagation();
      }} >Update</UpdateBtn>}
    </CardContainer>
  )
}

export default CardComponent