import styled from '@emotion/styled';
import React from 'react'
import { boxShadow, linkStyle } from '../styles/commonStyle';
import { Link } from 'react-router-dom';
import { Song } from '../models/song';
import TestViewDetail from './ViewDetailPage';
import CreateSongModal from './CreateSongModal';
import { MdDelete } from 'react-icons/md'
import { StyledNavLink } from '../styles/StyledComponents';


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

const SongDetail = styled.p`
  color: #887a7a;
  margin: 0;
`;

const ViewDetailsLink = styled(Link)`
  ${linkStyle};
`;
const ViewDetailsBtn = styled.button`
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
  onViewDetailClicked: () => void
  onDeleteSongClicked?: (song: Song) => void,
}
const CardComponent = ({ song, onDeleteSongClicked, onViewDetailClicked }: SongsProps) => {
  return (
    <CardContainer>
      <DeleteIcon onClick={(e) => {
        if (onDeleteSongClicked)
        onDeleteSongClicked(song);
        e.stopPropagation();
        }}>
          <MdDelete />
        </DeleteIcon>
      <SongTitle>{song.title}</SongTitle>
      <SongDetail>Createde on 12/23/14</SongDetail>
      <ViewDetailsLink to={'/dashboard/detail'}>View Detail</ViewDetailsLink>
    </CardContainer>
  )
}

export default CardComponent