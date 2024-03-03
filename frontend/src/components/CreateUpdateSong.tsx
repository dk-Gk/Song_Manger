import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { ZodType, z } from 'zod';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { createSongStart, updateSongStart } from '../features/song/songSlice';
import { Song } from '../models/song';
import { Button, Container, ErrorDisplay, Form, Input, InputBox, Wrapper } from '../styles/StyledComponents';


const Heading = styled.h1`
    font-weight: 500;
`

export interface SongsInput {
    title: string,
    artist: string,
    album?: string,
    genre: string,
};

interface SongProps {
editMode?: Song,
onclose: () => void,
}

const CreateUpdateSong = ({editMode, onclose}: SongProps) => {
    const user = useAppSelector(state => state.auth.user);
    const error = useAppSelector(state => state.auth.error);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const userSchema: ZodType<SongsInput> = z.object({
        title: z.string().min(2, "title must have atleast 3 characters"),
        artist: z.string().min(2,"artist must have atleast 3 characters"),
        genre: z.string().min(5, "gener must have atleast 5 characters"),
        album: z.string(),
    })

    const { register, handleSubmit, formState: { errors } } = useForm<SongsInput>({ resolver: zodResolver(userSchema),
    defaultValues: {
        title: editMode?.title || "",
        artist: editMode?.artist || "",
        genre: editMode?.genre || "",
        album: editMode?.album || "",
    } })

    const onsubmit = (data: SongsInput) => {
        if (editMode) {
            editMode = {_id: editMode._id, ...data}
            dispatch(updateSongStart(editMode))
        }
        else{
            dispatch(createSongStart(data));
            navigate('/dashboard/songs')
        }
        onclose();
    }
  return (
    <>
    <Container>
        <Wrapper >
            {error && <ErrorDisplay>{error}</ErrorDisplay>}
            <Heading>{editMode ? "Update Song" : "Create Song"}</Heading>
            <Form onSubmit={handleSubmit(onsubmit)}>
                <InputBox >
                    <Input type="text" placeholder="Enter song title" {...register("title")} />
                </InputBox>
                {errors.title && <ErrorDisplay>{`* ${errors.title.message}`}</ErrorDisplay>}
                <InputBox >
                    <Input type="text" placeholder="Enter artist name" {...register("artist")} />
                </InputBox>
                {errors.artist && <ErrorDisplay>{`* ${errors.artist.message}`}</ErrorDisplay>}
                <InputBox >
                    <Input type="text" placeholder="Enter song genre" {...register("genre")} />
                </InputBox>
                {errors.genre && <ErrorDisplay>{`* ${errors.genre.message}`}</ErrorDisplay>}
                <InputBox >
                    <Input type="text" placeholder="Enter album name" {...register("album")} />
                </InputBox>
                <InputBox >
                    <Button type="Submit" value= {editMode ? "Update" : "Create"} />
                </InputBox>
            </Form>
        </Wrapper>
    </Container>
</>
  )
}

export default CreateUpdateSong