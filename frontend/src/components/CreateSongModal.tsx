import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Song } from '../models/song';
import UpdateProfile from './UpdateProfile';
import TestCreateUpdateSong from './TestCreateUpdateSong';
import { useDispatch } from 'react-redux';
import { deleteSongStart } from '../features/song/songSlice';
import { useAppSelector } from '../app/hooks';

// Modal component styles
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  width: 500px;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;


const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const DeleteHeader = styled.h2`
margin: 0 0 5px 0;
  
`;
const DeleteMessage = styled.span`
  
`;
const DeleteButtonContainer = styled.div`
margin: 5px 0;
display: flex;
justify-items: flex-start;
justify-content: space-between;
gap: 40px;
`;
// Form component styles
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Button2 = styled.button`
  padding: 10px 20px;
  background-color: #545658;
  color: #ebdede;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

// Modal component
const CreateSongModal: React.FC<{ onClose: () => void, isDelete: boolean, openType: string, editMode?: Song, songId?: string}> = ({ onClose , isDelete, openType, editMode, songId }) => {
  const dispatch = useDispatch();
    const [year, setYear] = useState('');

    const handledelete = () => {
      if (songId)
        dispatch(deleteSongStart(songId));
        onClose();
    }
    return (
      <ModalWrapper>
        <ModalContent>
          <CloseButton onClick={onClose}>X</CloseButton>
          {/* <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <Button type="submit">Create</Button>
          </Form> */}
          {isDelete ? (
            <>
            <DeleteContainer>
              <DeleteHeader>Delte Song</DeleteHeader>
              <DeleteMessage>Are you sure you want to delete this?</DeleteMessage>
              <DeleteButtonContainer>
                <Button2 onClick={handledelete}>Confirm</Button2>
                <Button2 onClick={onClose}>Cancel</Button2>
              </DeleteButtonContainer>
            </DeleteContainer>
            </>
          ) : (
            <>
            {openType === "Detail" ? (
              <UpdateProfile />
            ) : (<TestCreateUpdateSong  editMode={editMode} onclose={onClose}/>)}
            </>
          )}
        </ModalContent>
      </ModalWrapper>
    );
  };

export default CreateSongModal;
